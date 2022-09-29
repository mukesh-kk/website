---
section: self-hosted/latest
title: Microsoft Azure Kubernetes Service (AKS)
---

<script context="module">
  export const prerender = true;
</script>

# How to Create a Cluster on Microsoft Azure Kubernetes Service (AKS)

Instructions on how to create a Microsoft AKS environment that is ready to install Gitpod are located in the [gitpod-io/gitpod-microsoft-aks-guide](https://github.com/gitpod-io/gitpod-microsoft-aks-guide) repository on GitHub. The installation process takes around twenty minutes. In the end, the following resources are created:

- An Microsoft AKS cluster running Kubernetes v1.21.
- An Microsoft Azure load balancer.
- An Microsoft Azure DNS zone.
- An Microsoft Azure container registry.
- MySQL will be provided by Helm under [#5508](https://github.com/gitpod-io/gitpod/issues/5508) solved.
- Minio will be used until Microsoft [Azure storage gateway](https://github.com/gitpod-io/gitpod-azure-aks-guide/issues/1) is configured.
- Installation of [calico](https://docs.projectcalico.org) as CNI and NetworkPolicy implementation
- Installation of [cert-manager](https://cert-manager.io/) for self-signed SSL certificates

Upon completion, this script will print the config for the resources created (including passwords) and what is the [next relevant step](./../installing-gitpod#install-gitpod) in the installation process. Note that you will be able to skip steps 2 and 3 in the getting started guide because the script can do these steps for you.
