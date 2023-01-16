---
section: self-hosted/latest
subsection: installation-guides
title: Private Registries
---

<script context="module">
  export const prerender = true;
</script>

# Setting an installation-wide default workspace image

> ⚠️ **Self-hosted as a product is no longer supported**
>
> The last official update of this product is the [November 2022 self-hosted release](https://www.gitpod.io/changelog/november-self-hosted-release). We no longer sell commercial self-hosted licenses. If you want to self-host Gitpod, you can still request our [free community license](https://www.gitpod.io/community-license). However, we no longer offer support or updates for it. If you are interested in an isolated, private installation of Gitpod, take a look at [Gitpod Dedicated](/dedicated).
> Read [our blog on Gitpod Dedicated](/blog/introducing-gitpod-dedicated) to learn why we made the decision to discontinue self-hosted.

This guide describes how to set a default workspace image that will apply to your entire Gitpod Self-Hosted installation. Please refer to the [Docker image documentation](/docs/configure/workspaces/workspace-image) for more information about workspace images.

> **Note:** there are two ways of setting an image for a workspace: via the installation-wide default `workspaceImage` (mentioned here) and the [`.gitpod.yml` file](/docs/references/gitpod-yml). The `.gitpod.yml` file will take precedence if both are set.

## Setting a default workspace image

> **Note:** this will apply to your entire installation. If you are using a private registry for your image, please ensure you add it to the allow list and provide credentials for it - for guidance, see [using private registries](/docs/configure/self-hosted/latest/advanced/private-registries).

Currently, the default workspace image can only be set via the [config patch](/docs/configure/self-hosted/latest/config-patches). In the future, we plan to also allow you to set this via the installation UI.

```yaml
workspace:
  workspaceImage: string
```
