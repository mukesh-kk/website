---
section: self-hosted/latest
subsection: installation-guides
title: Private Registries
---

<script context="module">
  export const prerender = true;
</script>

# Setting an installation-wide default workspace image

This guide describes how to set a default workspace image that will apply to your entire Gitpod Self-Hosted installation. Please refer to the [Docker image documentation](/docs/configure/workspaces/workspace-image) for more information about workspace images.

> **Note:** there are two ways of setting an image for a workspace: via the installation-wide default `workspaceImage` (mentioned here) and the [`.gitpod.yml` file](/docs/references/gitpod-yml). The `.gitpod.yml` file will take precedence if both are set.

## Setting a default workspace image

> **Note:** this will apply to your entire installation. If you are using a private registry for your image, please ensure you add it to the allow list and provide credentials for it - for guidance, see [using private registries](/docs/configure/self-hosted/latest/advanced/private-registries).

Currently, the default workspace image can only be set via the [config patch](/docs/configure/self-hosted/latest/config-patches). In the future, we plan to also allow you to set this via the installation UI.

```yaml
workspace:
  workspaceImage: string
```
