---
section: workspaces
title: Workspace classes
---

<script context="module">
  export const prerender = true;
</script>

# Workspace classes

> {title} are currently in [Early Access](/docs/help/public-roadmap/release-cycle) with [Pay-as-you-go](/docs/configure/billing/pay-as-you-go). Please [contact us](/contact/support) to request access, or [send feedback](https://github.com/gitpod-io/gitpod/issues/12473).

Workspace classes allow you to select the resources available to your workspaces.

On gitpod.io, the options are:

- **Standard**: up to 4 cores, up to 8GB RAM, 30GB storage
- **Large**: up to 8 cores, up to 16GB RAM, 50GB storage

You can override the default (Standard) workspace class in the [Gitpod project](/docs/configure/projects) settings for your repository.

![Project Settings](../../../static/images/docs/project-settings.png)

## Good to know

- Large workspace classes use [pay-as-you-go](/docs/configure/billing/pay-as-you-go) credits at a faster rate. Standard workspaces use 10 credits per hour, whereas Large workspaces use 20 credits per hour.
- [Prebuilds](/docs/configure/projects/prebuilds) currently use the same workspace class as regular workspaces.
