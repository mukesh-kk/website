---
section: workspaces
title: Workspace classes
---

<script context="module">
  export const prerender = true;
</script>

# Workspace classes

> {title} are currently in [Early Access](/docs/help/public-roadmap/release-cycle) with [Usage-based billing](/docs/configure/billing/usage-based-billing). Please [contact us](/contact/support) to request access, or [send feedback](https://github.com/gitpod-io/gitpod/issues/12473).

Workspace classes allow you to select the resources available to your workspaces.

On gitpod.io, the options are:

- **Standard**: up to 4 cores, up to 8GB RAM, 30GB storage
- **Large**: up to 8 cores, up to 16GB RAM, 50GB storage

You can configure the workspace class that should be used for your workspaces in your user preferences.

![Select Workspace Class](../../../static/images/docs/select-workspace-class.png)

Once you have selected the workspace class every new workspace will use the updated workspace class.

## Good to know

- Your existing workspaces will continue to use the workspace class that they have been created with.
- Prebuilds will use the workspace class that the installation owner (i.e. the user who has [integrated](/docs/integrations) Gitpod with your source control system) has selected for their personal workspaces.
- If a prebuild exists and your configured workspace class is not sufficient to use the prebuild, the workspace
  created from that prebuild will use the workspace class of the prebuild instead of the configured one.
