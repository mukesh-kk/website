---
section: workspaces
title: Workspace classes
---

<script context="module">
  export const prerender = true;
</script>

# Workspace classes

Workspace classes allow you to select the resources available to your workspaces.

On gitpod.io, the options are:

- **Standard**: up to 4 cores, up to 8GB RAM, 30GB storage
- **Large**: up to 8 cores, up to 16GB RAM, 50GB storage

You can override the default (Standard) workspace class in the [Gitpod project](/docs/configure/projects) settings for your repository.

![Project Settings](../../../static/images/docs/project-settings.png)

## Good to know

- Large workspace classes use [credits](/docs/configure/billing#credits) at a faster rate. Standard workspaces use 10 credits per hour, whereas Large workspaces use 20 credits per hour.
- [Prebuilds](/docs/configure/projects/prebuilds) currently use the same workspace class as regular workspaces.


## FAQs

### [How to select Large workspace type for extended storage and CPU](https://discord.com/channels/816244985187008514/1061902096389111849)
<!-- DISCORD_BOT_FAQ - DO NOT REMOVE -->

Create a team [project](/docs/configure/projects) on Gitpod, from the project settings you can select a large workspace.

### [Is it possible to build (android) AOSP source on Gitpod?](https://discord.com/channels/816244985187008514/1055454782908792843)
<!-- DISCORD_BOT_FAQ - DO NOT REMOVE -->

It is not quite feasible to build an entire AOSP tree right now due to current storage capacity limitations. Please react with a "👍" on https://github.com/gitpod-io/gitpod/issues/13950 and comment your requirements.
