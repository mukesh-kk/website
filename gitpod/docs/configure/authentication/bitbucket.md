---
section: authentication
title: Bitbucket
---

<script context="module">
  export const prerender = true;
</script>

# Bitbucket

Gitpod works with any public or private repository on [Bitbucket](https://bitbucket.org/).

To start a workspace from a Bitbucket project, prefix the Bitbucket project URL with `gitpod.io/#` as described in [Getting started](/docs/introduction/getting-started) or use the [browser extension](/docs/configure/user-settings/browser-extension) to add a convenient Gitpod button to every Bitbucket page.

## Enable Prebuilds

To enable [prebuilt workspaces](/docs/configure/projects/prebuilds) for your Bitbucket project, you need to grant the `webhook` permission in Gitpod's [Integration Settings](https://gitpod.io/integrations) page. This allows Gitpod to install a webhook which creates a new prebuild for every push event.

The webhook will be automatically installed when you trigger the first prebuild manually. For this, prefix your Bitbucket project URL with `gitpod.io/#prebuild/` as described in the [prebuilds page](/docs/configure/projects/prebuilds#on-gitlab-and-bitbucket).
