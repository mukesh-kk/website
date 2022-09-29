---
section: self-hosted/latest
title: Self-Hosted
---

<script context="module">
  export const prerender = true;
</script>
<script lang="ts">
  import OpenGraph from "$lib/components/open-graph.svelte";
</script>

<OpenGraph
data={{
    description:
      "Install and run Gitpod with full control on public cloud providers or self-managed Kubernetes clusters. Enterprise-grade security within corporate firewalls and air-gapped networks. Requirements. Installation. Configuration. GKE. EKS. AKS. Open-source.",
    title: "Gitpod Self-Hosted installation guide",
    keywords: "installation",
  }}
/>

# Self-Hosted

Gitpod can be deployed and operated on your own infrastructure. It supports different cloud providers, self-managed Kubernetes clusters, corporate firewalls, and even off-grid / air-gapped networks.

## Local Preview

The [Local Preview](/docs/configure/self-hosted/latest/local-preview) installation of Gitpod Self-Hosted is the easiest way to try out Gitpod locally in situations where you cannot use the [SaaS version](https://gitpod.io/workspaces/) and cannot easily spin up a Kubernetes cluster to use the Proof-of-Value [reference architecture](/docs/configure/self-hosted/latest/reference-architecture).

It is intended for preview purposes only - we strongly encourage the Kubernetes-based installation below for continuous usage.

## Prerequisites to Install Gitpod Self-Hosted

> **Note:** Gitpod is not just a simple Kubernetes application like a web shop app. It is more of an infrastructure tool comparable to a build system that heavily makes use of Kubernetes internals to build and deploy images, control Kubernetes containers (the workspaces) and more. This is why it needs more permissions in Kubernetes than a simple web app.

- **Kubernetes expertise** <br />
  Gitpod is a Kubernetes application that makes heavy use of various Kubernetes features. It is highly recommended to have sufficient Kubernetes experience in order to install Gitpod. These docs expect that you are able to create and maintain a Kubernetes cluster that meets our [requirements](./latest/requirements) on your own.

- **Compatible Kubernetes cluster** <br />
  To install Gitpod you need to have a Kubernetes cluster up and running. There are a few [requirements](/docs/configure/self-hosted/latest/requirements) that must be met. Please see the [product compatibility matrix](/docs/references/compatibility?admin) supported Kubernetes distributions. To help you get started, there are several different situation-dependent [reference architectures](./latest/reference-architecture) for all major cloud providers that include both a detailed guide as well as terraform configuration.

- **Cert-Manager** <br />
  Gitpod expects a properly configured [cert-manager](https://cert-manager.io/) that runs in the cluster. It is used to issue internal certificates for the Gitpod installation and to create certificates for the Gitpod domain (unless you bring your own domain certificates).

- **DNS setup** <br />
  For your Gitpod installation you need a properly configured domain. The domain itself and the wildcard subdomain `*.example.com`, `*.ws.example.com` (replace `example.com` with your Gitpod domain) need to point to the cluster ingress.

- **Gitpod product license** <br />
  To install Gitpod, you need a license that you can get [here](/community-license).

## Installing Gitpod

The [installation guide](./latest/installing-gitpod) provides you with step-by-step instructions on how to install Gitpod on your infrastructure.

## Troubleshooting

Refer to the [troubleshooting section](./latest/troubleshooting) for help with your Gitpod Self-Hosted Instance. You can also take a look at our [support page](/support) to learn how to reach our community and support team.
