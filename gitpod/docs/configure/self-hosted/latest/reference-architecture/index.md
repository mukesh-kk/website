---
section: self-hosted/latest
subsection: installation-guides
title: Self-Hosted Reference Architectures
---

<script context="module">
  export const prerender = true;
</script>

<script lang="ts">
  import Pill from "$lib/components/pill.svelte";
  </script>

# Reference Architectures

Below you will find reference architectures supported and recommended by Gitpod for different situations and all major cloud providers. They help you create the infrastructure needed to run Gitpod Self-Hosted and come in the form of a guide and terraform configuration. These are used to create the infrastructure for our nightly testing and fulfil the [requirements](../latest/requirements) Gitpod has on a cluster.

> **Note:** You should see these reference architectures as a starting point for creating infrastructure that works with both Gitpod and your own infrastructure requirements and policies. However, the further you deviate from these recommended architectures, the higher the potential for Gitpod to not behave as expected.

> **Note for azure users:** The azure versions of these are still being worked on. For the time being, please use the [AKS cluster set-up guide](https://github.com/gitpod-io/gitpod-microsoft-aks-guide) that will be replaced by these.

|                                                                                                                                                                            |                                                                                       |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| [**Proof-of-Value Reference Architecture**](./reference-architecture/proof-of-value)<Pill variant="orange" text="alpha" class="ml-1.5"/>                                   | Aimed at creating a minimal set of infrastructure for evaluation and testing purposes |
| [**Single-Cluster Reference Architecture for Production Purposes**](./reference-architecture/single-cluster-ref-arch) <Pill variant="orange" text="alpha" class="ml-1.5"/> | Aimed at creating hardened infrastructure for a continuous operation of Gitpod        |
| <p style="font-size: var(--p-small); font-weight: 500;"> Multi-Cluster High-Availiability Reference Architecture <Pill variant="pink" text="planned" class="ml-1.5"/></p>  |                                                                                       |
