---
section: ides-and-editors
title: VS Code settings sync
---

<script context="module">
  export const prerender = true;
</script>

# VS Code settings sync

VS Code is beloved for its endless customization possibilities.

However, you may come across the challenge of having many multiple VS Code instances needing to share the same extensions, themes and settings. Since every start of a [Gitpod workspace](https://www.gitpod.io/docs/introduction/learn-gitpod/one-workspace-per-task) is a new instance of VS Code, using [Settings Sync](https://code.visualstudio.com/docs/editor/settings-sync) helps you avoid re-setting your environment for each new workspace and embrace ephemeral Gitpod workspaces.

## How VS Code Setting Sync works

Once enabled, Settings Sync polls the backend to ensure that your settings are stored. To save network bandwidth and allow for more frequent synchronization only changed items are pushed to the server after the first sync.

The following settings are synced via Settings Sync:

- [VS Code preferences](https://code.visualstudio.com/docs/getstarted/settings)
- [Keybindings](https://code.visualstudio.com/docs/getstarted/keybindings)
- [Snippets](https://code.visualstudio.com/docs/editor/userdefinedsnippets)
- [Tasks](https://code.visualstudio.com/Docs/editor/tasks#_user-level-tasks)
- [Installed Extensions](https://code.visualstudio.com/docs/editor/extension-marketplace#_manage-extensions)
- [Global State](https://code.visualstudio.com/docs/editor/settings-sync#_sync-user-global-state-between-machines)

## Gitpod vs Microsoft Settings Sync

By default, most desktop VS Code installations are configured to sync settings via a GitHub or a Microsoft account. These settings are synced to Microsoft's servers and are inaccessible to third-parties, including Gitpod. Due to this limitation of access to settings stored in Microsoft servers, Gitpod implements its own VS Code settings sync server. Gitpod **Settings Sync is enabled by default for VS Code in the browser, but must be configured for desktop**.

### Enabling Settings Sync in VS Code Browser

VS Code in the browser with Gitpod has Settings Sync enabled by default, syncing preferences to Gitpod's servers.

### Enabling Settings Sync in VS Code Desktop

1. Install and enable the [Gitpod extension](https://marketplace.visualstudio.com/items?itemName=gitpod.gitpod-desktop).

**Note:** If you open VS Code Desktop directly from Gitpod, the Gitpod extension is automatically installed for you.

<figure>
<img class="shadow-medium w-full rounded-xl max-w-3xl mt-x-small" alt="The Gitpod VS Code Desktop plugin" src="/images/editors/gitpod-extension.png">
    <figcaption>The Gitpod VS Code Desktop plugin</figcaption>
</figure>

2. Using the [Command Palette](https://code.visualstudio.com/api/ux-guidelines/command-palette) select: "Settings Sync: Enable signing in with Gitpod".

![Enable Settings Sync with Gitpod](/images/editors/enable-signin-with-gitpod-light-theme.png)
![Enable Settings Sync with Gitpod](/images/editors/enable-signin-with-gitpod-dark-theme.png)
_Enable Settings Sync with Gitpod_

3. Restart your VS Code Desktop application.

<figure>
<img class="shadow-medium w-full rounded-xl max-w-3xl mt-x-small" alt="Prompt to restart VS Code Desktop" src="/images/editors/restart-vscode.png">
    <figcaption>Prompt to restart VS Code Desktop</figcaption>
</figure>

> **Important:** You must entirely close VS Code Desktop for changes to take effect.

4. Enable settings sync from the Manage gear menu at the bottom of the Activity Bar.

You must authenticate with Gitpod to enable settings sync.

<figure>
<img class="shadow-medium w-full rounded-xl max-w-3xl mt-x-small" alt="Enable settings sync from the Manage gear menu" src="/images/editors/enable-settings-sync.png">
    <figcaption>Enable settings sync from the Manage gear menu</figcaption>
</figure>

You will be prompted which settings to sync, and to authenticate via Gitpod.

<figure>
<img class="shadow-medium w-full rounded-xl max-w-3xl mt-x-small" alt="Sign into Gitpod to enable VS Code settings sync" src="/images/editors/signin-and-turnon.png">
    <figcaption>Sign into Gitpod to enable VS Code settings sync</figcaption>
</figure>

5. Resolve any settings conflicts

Settings in VS Code Desktop might differ from your remote settings, follow the instructions in VS Code to resolve any conflicts with the preferences files.

<figure>
<img class="shadow-medium w-full rounded-xl max-w-3xl mt-x-small" alt="Merge or replace VS Code Settings" src="/images/editors/resolve-merge-conflicts.png">
    <figcaption>Merge or replace VS Code Settings</figcaption>
</figure>
