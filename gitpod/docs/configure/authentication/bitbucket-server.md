---
section: authentication
title: Bitbucket Server Integration
---

<script context="module">
  export const prerender = true;
  import Keybind from "$lib/components/keybind.svelte";
</script>

# Bitbucket Server

Gitpod works with public, private, or internal repositories on your own instance of [Bitbucket Server](https://bitbucket.org/product/guides/getting-started/overview#bitbucket-software-hosting-options) v7.20 or later. Setting this up requires 2 steps.

1. A one-time registration of the Bitbucket server instance with Gitpod.
2. Each Gitpod user connects their account to Bitbucket server the first time they start a workspace.

## Registering a Bitbucket Server

The Bitbucket Server Admin can register the Bitbucket Server in their own Gitpod [account settings](https://gitpod.io/integrations).

Start by creating a **New Integration** and entering the **Provider Host Name** of Bitbucket Server.

![Gitpod New Git Integration form](../../../static/images/integrations/bbs-new-integration.png)

Copy the **Redirect URL** from the form above.

Open your Bitbucket Server Administration settings in another browser tab, and create a new incoming link for an external application.

![Bitbucket Server new OAuth2 application link](../../../static/images/integrations/bbs-new-incoming-link.png)

Configure the link with the required fields, including the redirect URL copied above, and choose "Projects Admin" permissions.

![Bitbucket Server configure OAuth2 application link](../../../static/images/integrations/bbs-configure-incoming-link.png)

Saving the configuration opens a settings page where you can copy the OAuth **Client ID** and a **Client secret**.

![Bitbucket Server new OAuth client ID and secret](../../../static/images/integrations/bbs-oauth-client-id-and-secret.png)

Copy the **Client ID** and **Secret** into the corresponding fields in the new Gitpod integration form, and activate the integration.

Refreshing the integration settings page should show a new Git provider connection to your Bitbucket Server in addition to the Git Integration registration below that.

![Bitbucket Server integration and connection in Gitpod settings](../../../static/images/integrations/bbs-integration-and-connection.png)

## Connecting Gitpod accounts to Bitbucket Server

Other Bitbucket Server users need to connect their own Gitpod account to their own Bitbucket Server account by starting a workspace.

To start a workspace, paste the URL of a Bitbucket Server repository into the New Workspace popup (<Keybind>CtrlCmd + O</Keybind>) in Gitpod, or prefix the repository URL as described in [Getting started](/docs/introduction/getting-started).

![Open in Gitpod form](../../../static/images/integrations/bbs-open-in-gitpod.png)

The first time you do this, you'll be prompted to authorize with your Bitbucket Server instance.

![Prompt to authorize with Bitbucket Server](../../../static/images/integrations/bbs-auth-prompt.png)

The Bitbucket Server OAuth window will prompt for confirmation to access projects and repositories.

![OAuth confirmation from Bitbucket Server](../../../static/images/integrations/bbs-oauth-popup.png)

Once confirmed, the connection will be saved, and the workspace should open. Subsequent workspaces with repositories from the same Bitbucket Server instance should open without reconnecting.

## Creating a project in Gitpod

To create a new project with a Bitbucket Server repository in Gitpod, select your Bitbucket Server instance from the list of git providers.

![New project with Bitbucket Server](../../../static/images/integrations/bbs-new-project.png)

You should see your own repositories and those for all projects to which you have access. Use the dropdown to switch between your personal account and other projects.

![New project select Bitbucket Server repo](../../../static/images/integrations/bbs-new-project-select-repo.png)

Selecting the repository will install a webhook and enable automatic prebuilds for the project.
