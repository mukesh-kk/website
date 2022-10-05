---
section: authentication
title: GitHub Enterprise
---

<script context="module">
  export const prerender = true;
  import Keybind from "$lib/components/keybind.svelte";
</script>

# GitHub Enterprise

Gitpod works with public, private, or internal repositories on your own instance of [GitHub Enterprise](https://docs.github.com/en/enterprise-server@3.4/get-started/onboarding/getting-started-with-github-enterprise-server) (GHE). Setting this up requires 2 steps.

1. A one-time registration of the GHE server with Gitpod.
2. Each Gitpod user connects their account to GHE the first time they start a workspace.

## Registering a GitHub Enterprise Server

The GHE Admin can register the GHE server in their own Gitpod [account settings](https://gitpod.io/integrations).

Start by creating a **New Integration** and entering the **Provider Host Name** of GHE server.

![Gitpod New Git Integration form](../../../static/images/integrations/new-git-integration-form.png)

Copy the **Redirect URL** from the form above.

Create a new OAuth application in your GHE developer settings, and fill in the **Authorization callback URL** with the copied value.

![GitHub Enterprise register new OAuth application form](../../../static/images/integrations/github-new-oauth-application.png)

Populate the remaining fields and register the application in GHE. This opens a settings page where you can copy the OAuth **Client ID** and a **Client Secret**.

![GitHub Enterprise new OAuth client ID and secret](../../../static/images/integrations/github-oauth-client-id-and-secret.png)

Copy the **Client ID** and **Secret** into the corresponding fields in Gitpod and activate the integration.

## Connecting Gitpod accounts to GHE

GHE users connect their Gitpod account to their GHE account by starting a workspace.

To start a workspace, paste the URL of a GHE repository into the New Workspace popup (<Keybind>CtrlCmd + O</Keybind>) in Gitpod, or prefix the repository URL as described in [Getting started](/docs/introduction/getting-started).

![Open in Gitpod form](../../../static/images/integrations/open-in-gitpod.png)

The first time you do this, you will be prompted to authorize with your GHE instance.

![Prompt to authorize with GitHub Enterprise](../../../static/images/integrations/github-enterprise-auth-prompt.png)

The GHE OAuth window will appear, showing the name of the registered Gitpod OAuth app.

![OAuth confirmation from GitHub Enterprise](../../../static/images/integrations/github-enterprise-oauth-popup.png)

If you are trying to open a private or internal repository in GHE, you will be prompted to grant additional authorization before the workspace starts.

![Private repo OAuth authorization from GitHub Enterprise](../../../static/images/integrations/github-enterprise-private-repo-scope-authorization.png)

## Validating your GHE connection with Gitpod

You should see the connection to your GHE instance, with your GHE account ID, in your Gitpod [integration settings](https://gitpod.io/integrations)

![GitHub Enterprise connection in Gitpod integration settings](../../../static/images/integrations/github-enterprise-connection.png)

If necessary, you can modify your GHE OAuth permissions to allow private repository access using the context menu on the right.

![Gitpod settings for GitHub integration permissions](../../../static/images/integrations/github-oauth-permissions.png)

## Creating a project in Gitpod

To create a new project with a GHE repository in Gitpod, select the your GHE instance from the list of git providers.

![New project with GitHub Enterprise](../../../static/images/integrations/new-project-with-github-enterprise.png)

You should see your own repositories and those for all organizations to which you have access. Use the dropdown to switch between your personal account and other organization accounts. No additional GitHub app installation is required for each organization.

![New project select GitHub Enterprise repo](../../../static/images/integrations/new-project-select-github-enterprise-repo.png)

Selecting the repository will install a webhook and enable automatic prebuilds for the project.

![New project on internal GitHub Enterprise repository](../../../static/images/integrations/new-project-on-internal-github-enterprise-repo.png)
