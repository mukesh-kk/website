---
section: ides-and-editors
title: VS Code Desktop
---

<script context="module">
  export const prerender = true;
</script>

# VS Code Desktop

> VS Code Desktop is currently in [Beta](/docs/help/public-roadmap/release-cycle) · [Send feedback](https://github.com/gitpod-io/gitpod/issues/5712).

With VS Code Desktop Support, you keep your local editor configurations<sup>1</sup> and benefit from Gitpod's high-spec servers & automated prebuilds. As usual, your code executes in an ephemeral Gitpod workspace, keeping each of your projects isolated from one another.

`youtube: kI6firDA0Bw`

## Open a workspace in VS Code Desktop

There are currently two supported ways to open a VS Code Desktop session connected to a Gitpod workspace, either by choosing VS Code Desktop as your default preference, or directly from within VS Code Browser itself.

### From VS Code Browser

1. Start a new Gitpod workspace
2. Open the command palette (⇧⌘P or Ctrl+Shift+P)
3. Type "Open in VS Code" and hit Enter

You will now be redirected to VS Code Desktop.

![Open VS Code via the Command Palette](/images/editors/open-in-vscode-command-palette-light-theme.png)
![Open VS Code via the Command Palette](/images/editors/open-in-vscode-command-palette-dark-theme.png)
_Open VS Code via the Command Palette_

### On Workspace Start

1. Navigate to your [Gitpod preferences](https://gitpod.io/preferences)
2. Select "VS Code" (without the browser label)
3. Restart any running workspaces

When the workspace starts, you will be prompted to open VS Code Desktop. You can also access your workspace using VS Code Browser, or copy SSH credentials from this page.

![Open VS Code Desktop from the workspace start page](/images/editors/vscode-desktop-splash-light-theme.png)
![Open VS Code Desktop from the workspace start page](/images/editors/vscode-desktop-splash-dark-theme.png)
_Open VS Code Desktop from the workspace start page_

![Selecting VS Code Desktop as an editor preference](/images/editors/select-vscode-desktop-preference-light-theme.png)
![Selecting VS Code Desktop as an editor preference](/images/editors/select-vscode-desktop-preference-dark-theme.png)
_Selecting VS Code Desktop as an editor preference_

## Connecting to VS Code Desktop (SSH)

The three main methods granting VS Code Desktop access to your workspace are:

1. SSH Gateway access using an uploaded public SSH key (recommended)
2. SSH Gateway access using the owner token
3. Using Local Companion (legacy)

See [configure SSH](/docs/configure/user-settings/ssh) for more on SSH Gateway.

> **Important:** You must first ensure that `gitpod.remote.useLocalApp` is set to `false` in your VS Code user preferences for Gitpod to connect via the two SSH Gateway methods.

### Connect to VS Code Desktop using an uploaded public SSH key

First, VS Code Desktop will check if you have already added a public SSH key to Gitpod and that the associated private key is available on your device.

If you haven't set up an SSH key with Gitpod, you can go to [gitpod.io/keys](https://gitpod.io/keys) to upload a public key. Alternatively, you can continue using the owner token approach detailed below.

<div align="center">
  <img alt="The VS Code Desktop prompt from Gitpod when opening a workspace with no SSH key found locally or uploaded to Gitpod" src="/images/editors/no-registered-ssh-key-for-this-machine.png" width="50%">
  <p><i>The VS Code Desktop prompt from Gitpod when opening a workspace with no SSH key found locally or uploaded to Gitpod.</i></p>
  <br />
</div>

You must have at least one public key uploaded to Gitpod, and a matching private key locally on your device to avoid this prompt. VS Code Desktop will look to find private keys in the following named files within the `.ssh` directory listed under your home directory.

- `id_dsa`
- `id_dsa`
- `id_ecdsa`
- `id_rsa`
- `id_ed25519`
- `id_xmss`
- `id_ecdsa_sk`
- `id_ed25519_sk`

### Connect to VS Code Desktop using the workspace owner token

If you cannot upload a public key to Gitpod (for whatever reason) selecting **Copy** will allow you to proceed to access your Gitpod workspace using the owner token approach. Selecting **Copy** will copy the necessary password to your clipboard to be pasted in the subsequent password prompt.

![VS Code prompting for a password. This message is shown when the public key warning notice is dismissed on the previous page by selecting Copy](/images/editors/enter-password-for-ssh-connection-dark-theme.png)
![VS Code prompting for a password. This message is shown when the public key warning notice is dismissed on the previous page by selecting Copy](/images/editors/enter-password-for-ssh-connection-light-theme.png)
_VS Code prompting for a password. This message is shown when the public key warning notice is dismissed on the previous page by selecting Copy._

> **Note:** Gitpod previously required a local private SSH key to be stored in the default SSH directory, otherwise Gitpod would prompt for a "password". This limitation is no longer required. If not using an SSH uploaded key, you may be prompted for a password (the owner token), or asked for the passphrase associated with your SSH key.

### Connect to VS Code Desktop using Local Companion (Legacy)

If VS Code Desktop cannot connect directly via the SSH Gateway methods described above, the Local Companion approach is used as a fallback to tunnel your SSH connection. Gitpod via the VS Code Desktop plugin will download and start the Local Companion process on your behalf.

This approach is not recommended because:

1. It overwrites your [`remote.SSH.configFile`](https://code.visualstudio.com/blogs/2019/10/03/remote-ssh-tips-and-tricks) VS Code setting.
2. Downloads and starts Local Companion in a non-transparent way.
3. Is less performant than the SSH Gateway approach.

If required, you manually can force VS Code Desktop to always fallback to the Local Companion by setting the property `gitpod.remote.useLocalApp` in your user preferences to `true`.

![The VS Code Desktop Gitpod extension useLocalApp setting](/images/editors/vscode-local-app-setting-dark-theme.png)
![The VS Code Desktop Gitpod extension useLocalApp setting](/images/editors/vscode-local-app-setting-light-theme.png)
_The VS Code Desktop Gitpod extension "useLocalApp" setting_

> **Deprecation Notice:** The fallback SSH connection using Local Companion for VS Code Desktop will be deprecated in a future release of Gitpod. If you cannot connect to your workspaces directly via SSH, for example, because your firewall is blocking the SSH connection, please [contact support](https://www.gitpod.io/support) with [troubleshooting logs](https://www.gitpod.io/docs/help/troubleshooting#gitpod-logs-in-vs-code-web-and-desktop).

## Reconnect to VS Code Desktop

When VS Code Desktop disconnects from the workspace, either you are experiencing genuine connectivity issues, or it's possible that the workspace has timed out and stopped.

![VS Code Desktop attempting to reconnect](/images/editors/reconnect-window-light-theme.png)
![VS Code Desktop attempting to reconnect](/images/editors/reconnect-window-dark-theme.png)
_VS Code Desktop attempting to reconnect_

To restart the workspace, click **Open Workspace** from the workspace start page or from the dashboard and VS Code Desktop should automatically reconnect.

**Please note:** There is currently no way to start a workspace directly from VS Code Desktop.

![Open workspace button shown on a stopped workspace page](/images/editors/workspace-stopped-dark-theme.png)
![Open workspace button shown on a stopped workspace page](/images/editors/workspace-stopped-light-theme.png)
_The open workspace button shown on a stopped workspace page_

## VS Code settings sync

You can optionally enable Settings Sync with Gitpod to keep your extensions, themes and settings up-to-date with VS Code Browser and Desktop. See [VS Code settings sync](settings-sync) for more

![Enable Settings Sync with Gitpod](/images/editors/enable-signin-with-gitpod-light-theme.png)
![Enable Settings Sync with Gitpod](/images/editors/enable-signin-with-gitpod-dark-theme.png)
_Enable Settings Sync with Gitpod_

## Managing VS Code extensions

VS Code runs extensions in one of two places: locally on the UI / client side, or remotely on your Gitpod workspace.

For further details, please refer to the official VS Code docs on how to [manage extensions](https://code.visualstudio.com/docs/remote/ssh#_managing-extensions).

## Custom fonts in VS Code Desktop

The process of installing fonts matches how you typically install custom fonts locally:

1. Download the desired font to your local machine and install it locally on your operating system.
1. Open the editor's user settings (e.g. _File_ > _Preferences_ > _Settings_ > _User_)
1. Configure your font with the `editor.fontFamily` setting:
   ```json
   {
     "editor.fontFamily": "Your custom font name"
   }
   ```

## Optimizing VS Code Desktop

If you're using VS Code Desktop for frequent work you'll want to optimize your setup. Below are some tips to get a workspace set up as efficient as possible.

### SSH fingerprint

![Accepting the SSH fingerprint in VS Code](/images/editors/vscode-ssh-fingerprint-light-theme.png)
![Accepting the SSH fingerprint in VS Code](/images/editors/vscode-ssh-fingerprint-dark-theme.png)
_Accepting the SSH fingerprint in VS Code_

It is common convention to be asked for a fingerprint when accessing a new SSH server. When the fingerprint is accepted, a reference to the server is stored in your local `known_hosts` file, which suppresses subsequent SSH connection prompts for that server.

You should only be presented with a request to trust the Gitpod workspace when using the legacy Local Companion approach of connecting to VS Code Desktop.

By swapping to the SSH Gateway approach of accessing VS Code Desktop, your known hosts file will be updated automatically. See [connecting to VS Code Desktop](/docs/references/ides-and-editors/vscode#connecting-to-vs-code-desktop-ssh) for more.

### Workspace Trust

![The VS Code Workspace Trust popup](/images/editors/trust-authors-workspace-light-theme.png)
![The VS Code Workspace Trust popup](/images/editors/trust-authors-workspace-dark-theme.png)
_The VS Code Workspace Trust popup_

[Workspace Trust](https://code.visualstudio.com/docs/editor/workspace-trust#_trusting-a-workspace) is a feature within VS Code implemented to help prevent automatic code execution by disabling or limiting the operation of several VS Code features: tasks, debugging, workspace settings, and extensions.

When opening a Gitpod workspace with VS Code Desktop for the first time you will be prompted by a trust modal (given that you have not disabled the workspace trust setting in VS Code).

Selecting "**Yes, I trust the authors**" will open the workspace and store a reference to the workspace host and directory. Opening the same workspace will not show the prompt again. However, due to a hostname change, new workspaces require trust to be accepted on first open.

Choosing "**No, I do not trust the authors**" will enter you into the VS Code Restricted Mode. You can edit code in your workspace, but some features will be restricted. You can disable the VS Code Restricted Mode after the initial prompt.

If required, you can disable the workspace trust feature, however this is not recommended. Select "**Manage Workspace Trust**" from the Manage gear menu to view and modify your VS Code Workspace Trust settings.

![Updating Workspace Trust settings](/images/editors/manage-workspace-trust-dark-theme.png)
![Updating Workspace Trust settings](/images/editors/manage-workspace-trust-light-theme.png)
_Updating Workspace Trust settings_

See [Workspace Trust](https://code.visualstudio.com/docs/editor/workspace-trust) in the VS Code official documentation for more.

## FAQs

### When opening VS Code Destkop, the owner token wasn't copied to my clipboard, where can I find it?

When opening VS Code Desktop, if you are being prompted for the owner token password, but cannot copy it to clipboard, you can find the password on the gitpod [workspaces page](https://gitpod.io/workspaces) under "connect via SSH".

![The password prompt in VS Code Desktop for the owner token](/images/editors/enter-password-for-ssh-connection-dark-theme.png)
![The password prompt in VS Code Desktop for the owner token](/images/editors/enter-password-for-ssh-connection-light-theme.png)
_The password prompt in VS Code Desktop for the owner token_

![Accessing the owner token string manually from the Gitpod dashboard](/images/editors/connect-via-ssh-dashboard-dark-theme.png)
![Accessing the owner token string manually from the Gitpod dashboard](/images/editors/connect-via-ssh-dashboard-light-theme.png)
_Accessing the owner token string manually from the Gitpod dashboard_

> **Note:** Pattern of the owner token is: `user#password@host`

### How do I know whether I'm connecting to VS Code Desktop via Local Companion or SSH Gateway?

If you're unsure whether you're connecting via the local companion, or SSH Gateway approach, when connected to your Gitpod workspace, VS Code Desktop will show the connection host in the bottom left.

- **SSH Gateway** - `SSH: workspaceid.ssh.*.gitpod.io`
- **Local Companion**: `workspaceid` (no domain)

![The SSH host information shown in the bottom left of VS Code Desktop](/images/editors/show-ssh-connection-vscode-light-theme.png)
![The SSH host information shown in the bottom left of VS Code Desktop](/images/editors/show-ssh-connection-vscode-dark-theme.png)
_The SSH host information shown in the bottom left of VS Code Desktop_

### I'm being prompted for a password/passphrase but VS Code Desktop cannot authenticate?

The owner token prompt and passphrase prompt in VS Code Desktop can look similar, however require different inputs. If you're seeing a failure to connect it could be you are using the incorrect authentication method, e.g. pasting an owner token for a passphrase, or vice versa.

1. **Owner token** - If the password prompt in VS Code Desktop asks `Enter password for workspace@\*.gitpod.io`, this prompt is for the owner token of the workspace, not the passphrase associated with your SSH key.

![The password prompt in VS Code Desktop for the owner token](/images/editors/enter-password-for-ssh-connection-dark-theme.png)
![The password prompt in VS Code Desktop for the owner token](/images/editors/enter-password-for-ssh-connection-light-theme.png)
_The password prompt in VS Code Desktop for the owner token_

![Accessing the owner token string manually from the Gitpod dashboard](/images/editors/connect-via-ssh-dashboard-dark-theme.png)
![Accessing the owner token string manually from the Gitpod dashboard](/images/editors/connect-via-ssh-dashboard-light-theme.png)
_Accessing the owner token string manually from the Gitpod dashboard_

1. **SSH key Passphrase** - If your SSH key has a "passphrase" associated with the SSH key (it is not required for SSH keys), you'll need to enter your passphrase. If your public key has no passphrase, you should not see the passphrase prompt.

![Passphrase prompt from VS Code requiring the SSH key passphrase](/images/editors/enter-passphrase-for-ssh.png)
_Passphrase prompt from VS Code requiring the SSH key passphrase_

> **Note:** If you cannot remember your passphrase, consider creating a new SSH key and uploading the new key to Gitpod.

### How do I enable SSH agent forwarding for Desktop VSCode?

Gitpod extension delegates ssh connection to the [MS Remote - SSH](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-ssh) extension so agent forwarding should just work if you configure it in your `~/.ssh/config` file:

```
Host *.gitpod.io
    ForwardAgent yes
```

## Troubleshooting

If you are still having issues connecting to VS Code Desktop from Gitpod, try:

1. Checking your Gitpod VS Code Desktop extension version is using the latest version.
2. Attempt to directly connect via SSH using the `-v` to show verbose SSH logs. For example: `ssh -v workspacename@hostname`. You can find the `ssh` command in the workspace list on your Gitpod dashboard, see the [command-line](/docs/references/ides-and-editors/command-line) docs for more.
3. If you're a self-hosted customer, ensure [SSH Gateway](/docs/configure/user-settings/ssh) is configured correctly.

If you are still experiencing issues using VS Code Desktop and Gitpod, please [contact support](/support) with any related [troubleshooting logs](/docs/help/troubleshooting#gitpod-logs-in-vs-code-web-and-desktop)
