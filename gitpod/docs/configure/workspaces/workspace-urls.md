---
section: workspaces
title: Workspace URLs
---

<script context="module">
  export const prerender = true;
</script>

# Workspace URLs

## Workspace URL naming convention

<!-- TODO -->

## Accessing running workspace ports

To access workspace ports, Gitpod uses the following convention:

`https://<port>-workspacename.host`

To access a workspace port, you need to prepend the port number to your workspace URL.

The simplest way to get this URL is by running `gp url <port>` in your workspace.

If you do not see your port, it could be because:

1. The port might not be running in the workspace
2. The port might not be exposed from the workspace
3. The opening user might not be authorized or authenticated

To investigate, you can see ports information in both JetBrains and VS Code directly, or by running `gp ports list`.

See [Gitpod CLI](/docs/references/gitpod-cli) for more.
