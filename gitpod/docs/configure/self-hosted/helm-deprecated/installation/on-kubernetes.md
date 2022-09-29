---
section: self-hosted/helm-deprecated
title: Install Gitpod Self-Hosted on Kubernetes
---

<script context="module">
  export const prerender = true;
</script>

# Install Gitpod Self-Hosted on Kubernetes

> ⚠️ **Deprecated Content**
>
> The content of this page assumes you are using Helm, which is now deprecated. Please use the [Installer](../../latest) instead.

This section describes how to install Gitpod on any Kubernetes cluster using [Helm](https://helm.sh). This is the most flexible and generic way of installing Gitpod. The chart for stable releases resides in Helm repository [charts.gitpod.io](https://charts.gitpod.io), charts for branch-builds can be found [here](#install-branch-build), and the source of the charts is in our [public git repository](https://github.com/gitpod-io/gitpod/blob/main/chart/).

For some platforms we offer [Terraform](https://www.terraform.io/) scripts that ease the infrastructure setup. Once the script has created the necessary infrastructure it will output a `values.terraform.yaml` that contains infrastructure-specific configuration for the `helm` deployment.

## Prerequisites

See [Installation requirements for Gitpod Self-Hosted](../requirements).

## Installation

To install Gitpod in your Kubernetes cluster, follow these steps:

1. Create a file `values.custom.yaml` with the following content (please replace the keys/secrets, for instance with `openssl rand -hex 20`):

   ```yaml
   docker-registry:
     authentication:
       username: gitpod
       password: your-registry-password
   rabbitmq:
     auth:
       username: your-rabbitmq-user
       password: your-secret-rabbitmq-password
   minio:
     accessKey: your-random-access-key
     secretKey: your-random-secret-key
   ```

   You should replace the keys with 2 different random strings unique for your installation.

1. Run the following commands in your local terminal:

   ```bash
   helm repo add gitpod.io https://charts.gitpod.io

   helm repo update

   helm install -f values.custom.yaml gitpod gitpod.io/gitpod --version=0.10.0
   ```

1. Configure [domain and https](../configuration/ingress).

1. Run `kubectl get pods` and verify that all pods are in state `RUNNING`. If some are not, please see the [Troubleshooting Guide](../troubleshooting).

1. Go to `https://<your-domain.com>` and follow the steps to complete the installation.

## Upgrade

1.  Check the [Upgrade Guide](../updating) and follow the steps outlined there.

1.  Run the update

    ```bash
    helm install -f values.custom.yaml gitpod gitpod.io/gitpod --version=0.10.0
    ```

1.  Run `kubectl get pods` and verify that all pods are in state `RUNNING`. If some are not, please see the [Troubleshooting Guide](../troubleshooting).

## Recommended Configuration

By default, the Helm chart installs a working Gitpod installation in a lot of scenarios. Yet, there are certain things you might want to review when installing Gitpod for long term use and/or a bigger audience:

- [**Database**](../configuration/database): Configure where Gitpod stores all internal runtime data.
- [**Storage**](../configuration/storage): Configure where Gitpod persists workspace content.
- [**Docker Registry**](../configuration/docker-registry): Configure where Gitpod stores workspace images.

## Customization

Further customizations:

- [**Kubernetes Nodes**](../configuration/nodes): Configure file system layout and the workspace's node associativity.
- [**Workspaces**](../configuration/workspaces): Configure workspace sizing.
