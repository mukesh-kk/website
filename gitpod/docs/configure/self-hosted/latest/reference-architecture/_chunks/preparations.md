---
layout: false
---

<script lang="ts">
  import CloudPlatformToggle from "$lib/components/docs/cloud-platform-toggle.svelte";
</script>

You need to prepare your workstation and your cloud provider (e.g. creating a project and preparing service accounts) to be able to replicate this reference architecture.

Independent of the cloud provider you are using, you need to have `kubectl` installed on your workstation and configured to access your cluster after creation.

<CloudPlatformToggle id="cloud-platform-toggle-preparations">

<div slot="gcp">

In order to deploy Gitpod on the [Google Kubernetes Engine (GKE)](https://cloud.google.com/kubernetes-engine) of the [Google Cloud Platform (GCP)](https://cloud.google.com/docs), you need to create and configure a project for your installation. In this guide, we give you examples of how to create the needed resources by using the command line tool `gcloud`. To follow these examples make sure you have [installed the `gcloud` CLI](https://cloud.google.com/sdk/docs/install) and [logged in to your Google Cloud account](https://cloud.google.com/sdk/gcloud/reference/auth/login). You can also use the [GCP Console](https://console.cloud.google.com/) or the API instead. In that case, please refer to the linked Google docs.

First, [create a GCP project](https://cloud.google.com/resource-manager/docs/creating-managing-projects) and [enable billing](https://cloud.google.com/billing/docs/concepts) (you have to enable billing to enable GKE). You can freely choose a name for your project (hereinafter referred to as environment variable `PROJECT_NAME`). You also need the billing account ID (referred to as `BILLING_ACCOUNT`). To see available lDs, run [`gcloud alpha billing accounts list`](https://cloud.google.com/sdk/gcloud/reference/alpha/billing/accounts/list).

```bash
PROJECT_NAME=gitpod
gcloud projects create "${PROJECT_NAME}" --set-as-default

BILLING_ACCOUNT=0X0X0X-0X0X0X-0X0X0X
gcloud alpha billing projects link "${PROJECT_NAME}" \
    --billing-account "${BILLING_ACCOUNT}"
```

You can verify that the proper project has been set as default with this command:

```bash
gcloud config get-value project
```

After you created your project, you need to enable the following services in this project:

| Services                         |                                                                                              |                                                                                              |
| -------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| cloudbilling.googleapis.com      | [Google Billing API](https://cloud.google.com/billing/docs/reference/rest)                   | Billing is required to set up a GKE cluster.                                                 |
| containerregistry.googleapis.com | [Docker container images registry](https://cloud.google.com/container-registry)              | Enable this service such that Gitpod can push workspace images to that repository.           |
| iam.googleapis.com               | [Identity and Access Management (IAM) API](https://cloud.google.com/iam/docs/reference/rest) | To create and use service accounts for the setup.                                            |
| compute.googleapis.com           | [Google Compute Engine API](https://cloud.google.com/compute/docs/reference/rest/v1)         | The Google Compute Engine empowers to run virtual machines (VMs) for the Kubernetes cluster. |
| container.googleapis.com         | [Kubernetes Engine API](https://cloud.google.com/kubernetes-engine/docs/reference/rest)      | The Kubernetes engine is where we will deploy Gitpod to.                                     |
| dns.googleapis.com               | [Cloud DNS](https://cloud.google.com/dns/docs/reference/v1)                                  | Cloud DNS is used in this reference architecture so set up the domain name resolution.       |
| sqladmin.googleapis.com          | [Cloud SQL Admin API](https://cloud.google.com/sql/docs/mysql/admin-api)                     | Cloud SQL for MySQL is used as database service in this reference architecture.              |

Run these commands to enable the services:

```bash
gcloud services enable cloudbilling.googleapis.com
gcloud services enable containerregistry.googleapis.com
gcloud services enable iam.googleapis.com
gcloud services enable compute.googleapis.com
gcloud services enable container.googleapis.com
gcloud services enable dns.googleapis.com
gcloud services enable sqladmin.googleapis.com
```

Now, you are prepared to create your Kubernetes cluster.

</div>

<div slot="aws">

To deploy Gitpod on [Amazon Elastic Kubernetes Service (Amazon EKS)](https://docs.aws.amazon.com/eks/latest/userguide/what-is-eks.html), you must have an Amazon account that has permissions to deploy EKS and the underlying component services, which can include:

- VPCs
- Subnets
- Internet Gateways
- EC2 Instances
- Autoscaling Groups
- Elastic Load Balancers

Specifically for Gitpod's use, you will also need permissions to create these additional components:

- Route53 DNS Zone for the intended Gitpod domain name (for use with Let's Encrypt certificate generation)
- RDS Instance running MySQL 5.7 for Gitpod's database
- S3 Bucket: Hosting Gitpod's workspace images and object storage
- AWS IAM Service account: To enable access to the S3 bucket

This guide uses the following tools:

- [AWS CLI](https://aws.amazon.com/cli/) for creating none EKS specific services
- [EKS CLI `eksctl`](https://eksctl.io/) for creating the EKS cluster and nodegroups themselves

Amazon has a brief run-through on how to [deploy a basic cluster](https://docs.aws.amazon.com/eks/latest/userguide/getting-started-eksctl.html) using the `eksctl` tooling if you'd like to familiarize yourself before deploying the Gitpod reference architecture.

Make sure you are logged in and are connected to the proper AWS account. Ensure AWS is configured and working with the command `aws sts get-caller-identity`. For later steps you will need to ensure that `kubectl` is [properly configured to authenticate to the newly provisioned EKS environment](https://docs.aws.amazon.com/eks/latest/userguide/create-kubeconfig.html).

**AWS Region Setting**

All commands that follow assume you have set an environment variable of `AWS_REGION` to your appropriate region or have it configured in your profile already and so will not include `--region` or `--profile` when running the `aws` command. Refer to the [AWS CLI documentation](https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-envvars.html) for more information.

</div>

</CloudPlatformToggle>
