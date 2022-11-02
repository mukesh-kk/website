---
layout: false
---

<script lang="ts">
  import CloudPlatformToggle from "$lib/components/docs/cloud-platform-toggle.svelte";
</script>

Kubernetes clusters pull their components from an **image registry**. In Gitpod, image registries are used for three different purposes:

1. Pulling the actual Gitpod software (components like `server`, `image-builder`, etc.).
2. Pulling base images for workspaces. This is either a default [workspace-full](https://hub.docker.com/r/gitpod/workspace-full) image or the image that is configured in the `.gitpod.yml` resp. `.gitpod.Dockerfile` in the repo.
3. Pushing individual workspace images that are built for workspaces during image start. That are for example custom images that are defined in a `.gitpod.Dockerfile` in the repo. These images are pulled by Kubernetes after image building to provision the workspace. This is the only case where Gitpod needs write access to push images.

We use a different registry for each of the three items in this reference architecture. The Gitpod images (1) are pulled from a public Google Container Registry we provide. The workspace base image (2) is pulled from Docker Hub (or from the location that is set in the Dockerfile of the corresponding repo). For the individual workspace images (3), we create an image registry that is provided by the used cloud provider. You could also configure Gitpod to use the same registry for all cases. That is particularly useful for [air-gap installations](../advanced/air-gap) where you have access to an internal image registry only.

<CloudPlatformToggle id="cloud-platform-toggle-registry">
<div slot="gcp">

By enabling the service `containerregistry.googleapis.com` (see above), your project provides you with an OCI Image Registry. As credentials, we need the [object storage](#object-storage) service account key that we will create below. Therefore, there is no further action needed to use the registry in Gitpod.

</div>
<div slot="aws">

ECR is currently not supported, so configuring the registry will require using an S3 bucket. You can reuse the same S3 bucket used for object storage or a separate one. The steps would be identical in creation, just use different names for both the bucket and the IAM user account.

> Please refer to the [Object Storage](./single-cluster-ref-arch#object-storage) section for instructions on how to create an S3 bucket. You can re-use the bucket created there as your registry storage backe-end.

To configure Gitpod to use the bucket created, ensure you select `In-cluster Registry`, and `S3 storage` in the installation UI. Then input the values of the bucket you've created. When setting the endpoint, please include the region such that `s3.amazonaws.com` becomes `s3.eu-west-1.amazonaws.com`.

</div>

<div slot="azure">

This section will create an Amazon Container Registry for workspace images.

First, generate a name for the ACR instance. ACR instance names must be unique; using a random suffix is recommended but any unique registry name is sufficient.

```bash
REGISTRY_NAME="gitpod$(openssl rand -hex 4)"
```

Note the value of `$REGISTRY_NAME` for later use.

Create the container registry:

```bash
az acr create \
  --admin-enabled true \
  --location "${LOCATION}" \
  --name "${REGISTRY_NAME}" \
  --resource-group "${RESOURCE_GROUP}" \
  --sku Premium
```

The registry server, username, and password will be needed when Gitpod is installed; note these values for later.

```bash
AZURE_REGISTRY_URL=$(az acr show \
    --name "${REGISTRY_NAME}" \
    --output tsv \
    --query loginServer \
    --resource-group "${RESOURCE_GROUP}")

AZURE_REGISTRY_USERNAME=$(az acr credential show \
    --name "${REGISTRY_NAME}" \
    --output tsv \
    --query username \
    --resource-group "${RESOURCE_GROUP}")

AZURE_REGISTRY_PASSWORD=$(az acr credential show \
    --name "${REGISTRY_NAME}" \
    --output tsv \
    --query "passwords[0].value" \
    --resource-group "${RESOURCE_GROUP}")
```

</div>

</CloudPlatformToggle>
