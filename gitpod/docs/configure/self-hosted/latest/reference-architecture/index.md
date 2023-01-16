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

> ⚠️ **Self-hosted as a product is no longer supported**
>
> The last official update of this product is the [November 2022 self-hosted release](https://www.gitpod.io/changelog/november-self-hosted-release). We no longer sell commercial self-hosted licenses. If you want to self-host Gitpod, you can still request our [free community license](https://www.gitpod.io/community-license). However, we no longer offer support or updates for it. If you are interested in an isolated, private installation of Gitpod, take a look at [Gitpod Dedicated](/dedicated).
> Read [our blog on Gitpod Dedicated](/blog/introducing-gitpod-dedicated) to learn why we made the decision to discontinue self-hosted.

Below you will find reference architectures supported and recommended by Gitpod for different situations and all major cloud providers. They help you create the infrastructure needed to run Gitpod Self-Hosted and come in the form of a guide and terraform configuration. These are used to create the infrastructure for our nightly testing and fulfil the [requirements](../latest/requirements) Gitpod has on a cluster.

> **Note:** You should see these reference architectures as a starting point for creating infrastructure that works with both Gitpod and your own infrastructure requirements and policies. However, the further you deviate from these recommended architectures, the higher the potential for Gitpod to not behave as expected.

|                                                                                                                                                                            |                                                                                       |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| [**Proof-of-Value Reference Architecture**](./reference-architecture/proof-of-value)<Pill variant="orange" text="alpha" class="ml-1.5"/>                                   | Aimed at creating a minimal set of infrastructure for evaluation and testing purposes |
| [**Single-Cluster Reference Architecture for Production Purposes**](./reference-architecture/single-cluster-ref-arch) <Pill variant="orange" text="alpha" class="ml-1.5"/> | Aimed at creating hardened infrastructure for a continuous operation of Gitpod        |
| <p style="font-size: var(--p-small); font-weight: 500;"> Multi-Cluster High-Availiability Reference Architecture <Pill variant="pink" text="planned" class="ml-1.5"/></p>  |                                                                                       |
