---
section: compatibility
title: Compatibility
---

<script lang="ts" context="module">
    export const prerender = true;
</script>

<script lang="ts">
    import CompatibilityMatrix from '$lib/components/docs/compatibility-matrix.svelte';

</script>

# Compatibility

> ⚠️ **Self-hosted as a product is no longer supported**
>
> The last official update of this product is the [November 2022 self-hosted release](https://www.gitpod.io/changelog/november-self-hosted-release). We no longer sell commercial self-hosted licenses. If you want to self-host Gitpod, you can still request our [free community license](https://www.gitpod.io/community-license). However, we no longer offer support or updates for it. If you are interested in an isolated, private installation of Gitpod, take a look at [Gitpod Dedicated](/dedicated).
> Read [our blog on Gitpod Dedicated](/blog/introducing-gitpod-dedicated) to learn why we made the decision to discontinue self-hosted.

This page shows you what components and services Gitpod is and is not compatible with. It is aimed at both individual developers that use Gitpod as well as admins that install and maintain a [Gitpod Self-Hosted](/docs/configure/self-hosted/latest) instance. You can filter the table to show only what is relevant to you.

> **Note:** It is required to have at least one of each category. SaaS users can ignore the self-hosted specific categories (see filter)

<CompatibilityMatrix />
