---
section: authentication
title: GitHub
---

<script context="module">
  export const prerender = true;
  import Keybind from "$lib/components/keybind.svelte";
</script>

# GitHub

Gitpod works well with public or private repositories from [github.com](https://github.com/).

The first time you login to Gitpod with GitHub, you will be prompted to "Authorize Gitpod" to access your GitHub account. This creates a connection between Gitpod and your GitHub account, and installs an OAuth App in your GitHub [settings](https://github.com/settings/applications).

Gitpod uses the name and email from your GitHub account ID to create a new Gitpod user account. This is sufficient to start a Gitpod workspace on a public repository.

![GitHub prompt for Gitpod OAuth App permissions with user:email scope](../../../static/images/integrations/github-oauth-install.png)

## Starting Workspaces

To start a new workspace after logging into Gitpod, use <Keybind>CtrlCmd + O</Keybind> or click on the **New Workspace** button in https://gitpod.io/workspaces. This will prompt for a repository URL, or suggest recent repositories opened with your account.

You can also start a Gitpod workspace using a GitHub repository URL. Simply point your browser to the repository URL prefixed with `gitpod.io/#` as described in [Getting started](/docs/introduction/getting-started).

## Granting additional GitHub OAuth permissions

GitHub requires `repo` scope permissions to open a workspace on a private repository, or to push code changes from a workspace back to your repository.

You can grant these additional permissions for GitHub at https://gitpod.io/integrations using the context menu on the right.

![Gitpod settings for GitHub integration permissions](../../../static/images/integrations/github-oauth-permissions.png)

## Authorizing GitHub webhooks

The first time you create a new Gitpod [project](/docs/configure/projects) you will need to configure our [GitHub App](https://github.com/apps/gitpod-io) to watch your repositories and trigger prebuilds.

> NOTE: Installing the GitHub App for webhooks is only required for github.com, not for [GitHub Enterprise](/docs/configure/authentication/github-enterprise) or other git providers.

![Gitpod new project prompt for GitHub App authorization](../../../static/images/integrations/github-new-project-install-app.png)

The App must be installed on every GitHub user or organization account with repositories used in a Gitpod project. This allows you to grant permissions for all repositories or select repo-by-repo.

![GitHub App repo authorization](../../../static/images/integrations/github-app-authorize-repos.png)

## Errors with private repositories on GitHub orgs

If you encounter errors setting up a Gitpod project on a private repository in a GitHub org, you may need to approve the Gitpod OAuth app for 3rd party access to the org.

1. In https://github.com/settings/connections/applications/484069277e293e6d2a2a.
2. Look for the org in question in the lower section of the page under 'Organization access'.
3. Click on the Grant button.

For more details, see [Issue #8076](https://github.com/gitpod-io/gitpod/issues/8076).
