---
section: self-hosted/latest
subsection: installation-guides
title: Resource Configuration
---

<script context="module">
  export const prerender = true;
</script>

# How To Configure Gitpod To Work With Certain External Components

Gitpod has three resource dependencies that are required to function correctly. For convenience, you can use the in-cluster dependencies, but you should use external resources for a high-performance application.

This page highlights some of the common gotchas found when working with cloud resources and how to overcome them.

## Container Registry

### [Amazon Elastic Container Registry (ECR)](https://aws.amazon.com/ecr/)

Amazon ECR does not fully implement the [Docker v2 API](https://docs.docker.com/registry/spec/api), namely it does not automatically create the remote image if it does not already exist when pushed. For that reason, ECR is not supported with Gitpod.

When using AWS, you should select an in-cluster registry and use S3 as your in-cluster storage provider. This will use the in-cluster registry as a facade for an S3 bucket where all the images will be stored.

If using a region other than `us-east-1`, you will need to change the endpoint to be `s3.<region>.amazonaws.com`.

### [Google Container Registry (GCR)](https://cloud.google.com/container-registry)

> This example uses the format `gcr.io`, which is the global hostnames. This can be swapped with any of the [regional hostnames](https://cloud.google.com/container-registry/docs/pushing-and-pulling) and it will work in the same way.

Google Container Registry authentication requires specific configuration. The "Container registry URL" will be in a format similar to `gcr.io/<project-name>/gitpod`. In order for the authentication to work, you must also enter the "Container registry server". This will always be your GCR hostname, eg `gcr.io`.

### [Google Artifact Registry (GAR)](https://cloud.google.com/artifact-registry)

As with [GCR](#google-container-registry-gcr), Google Artifact Registry requires both the "Container registry URL" and "Container registry server" to be completed. The URL will be in the format `<region>-docker.pkg.dev/<project-name>/gitpod` and the server address will be `<region>-docker.pkg.dev`.
