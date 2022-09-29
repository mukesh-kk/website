---
author: jeanp413, akosyakov, loujaybee
date: Friday, 22 July 2022 09:00:00 UTC
excerpt: Understand how VS Code establishes SSH connections, the different approaches, and understand common gotchas setting up VS Code Desktop and Gitpod via SSH.
image: header.jpg
slug: vscode-desktop-ssh-updates
subtitle: Establishing SSH Connections, common gotchas and more.
teaserImage: header.jpg
title: "VS Code Desktop and SSH explained"
---

<script context="module">
  export const prerender = true;
</script>

You might have seen we recently announced [SSH public key upload for Gitpod](https://www.gitpod.io/blog/ssh-key-upload), and in the announcement, we mentioned: "SSH key upload also gives our users more stable, performant and secure connections" which might have left you wondering what this statement means in practice.

A lot of the changes we made to our SSH approach applies to our [VS Code Desktop](/docs/references/ides-and-editors/vscode) users. In this article we will take a deeper look at: how SSH connections work with VS Code Desktop, the pros/cons of the different approaches, and cover some common gotchas and questions.

## TL;DR; benefits of SSH improvements for VS Code Desktop

If you're short of time, here are the improvements:

1. Connection has improved stability, with fewer disconnections
2. Approach doesn't overwrite the [`remote.SSH.configFile`](https://code.visualstudio.com/blogs/2019/10/03/remote-ssh-tips-and-tricks#_ssh-configuration-file)
3. No additional binary downloads required or background processes
4. Fewer requests from VS Code to accept the SSH fingerprint
5. Improved operating system support via OpenSSH

However, if you're eager to learn more about the details about what has changed with VS Code Desktop and [SSH Gateway](/docs/configure/user-settings/ssh#ssh-gateway), read on.

## The Different Approaches to SSH access in Gitpod

All our desktop clients, direct SSH access, VS Code Desktop and JetBrains clients share similar methods of connecting to a workspace via the SSH protocol.

The SSH methods with Gitpod are:

1. **SSH Gateway** - By uploading your SSH public key to Gitpod **\(recommended)**
2. **SSH Gateway** - Using your workspace owner token (a username/password type approach)
3. **Local Companion** - The legacy approach, using Local Companion under the hood.

<!-- TODO: Add flow chart -->

We'll go through all of these approaches in more detail below.

## Understanding SSH Gateway

You may notice above the mention of the [SSH Gateway](/docs/configure/user-settings/ssh#ssh-gateway) component. SSH Gateway is an intermediary service within Gitpod that proxies incoming SSH requests to the appropriate running workspaces.

SSH Gateway for SaaS should be mostly transparent / invisible to the Gitpod experience. However, it is worth noting that SSH Gateway has non-functional benefits for performance and security.

![SSH Gateway architecture in Gitpod](/images/ssh-gateway/ssh-gateway-dark-theme.png)
![SSH Gateway architecture in Gitpod](/images/ssh-gateway/ssh-gateway-light-theme.png)
_Caption: SSH Gateway architecture in Gitpod_

## VS Code Desktop for connecting via SSH Gateway

The two main methods for using SSH Gateway with VS Code Desktop are:

1. SSH Gateway access an uploaded public key (recommended)
2. SSH Gateway access using the owner token

> **Important:** You must first ensure that `gitpod.remote.useLocalApp` is set to `false` in your VS Code user preferences for Gitpod to connect via the two SSH Gateway methods.

![VS Code Gitpod use Local App setting](/images/editors/vscode-local-app-setting-light-theme.png)
![VS Code Gitpod use Local App setting](/images/editors/vscode-local-app-setting-dark-theme.png)
_The VS Code Desktop Gitpod extension "useLocalApp" setting_

### SSH Gateway access using an uploaded public key (recommended)

First, VS Code Desktop will check if you have already added a public SSH key to Gitpod and that the associated private key is available on your device.

If you haven't set up an SSH key with Gitpod, you can go to [gitpod.io/keys](https://gitpod.io/keys) to upload a public key. Alternatively, you can continue using the owner token approach detailed below.

<div align="center">
  <img alt="The VS Code Desktop prompt from Gitpod when opening a workspace with no SSH key found locally or uploaded to Gitpod" src="/images/editors/no-registered-ssh-key-for-this-machine.png" width="50%">
  <p><i>Caption: The VS Code Desktop prompt from Gitpod when opening a workspace with no SSH key found locally or uploaded to Gitpod.</i></p>
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

### SSH Gateway access using the owner token

If you cannot upload a public key to Gitpod (for whatever reason) selecting **Copy** will allow you to proceed to access your Gitpod workspace using the owner token approach. Selecting **Copy** will copy the necessary password to your clipboard to be pasted in the subsequent password prompt.

![VS Code prompting for a password. This message is shown when the public key warning notice is dismissed on the previous page by selecting Copy](/images/editors/enter-password-for-ssh-connection-light-theme.png)
![VS Code prompting for a password. This message is shown when the public key warning notice is dismissed on the previous page by selecting Copy](/images/editors/enter-password-for-ssh-connection-dark-theme.png)
_Caption: VS Code prompting for a password. This message is shown when the public key warning notice is dismissed on the previous page by selecting Copy._

> **Note:** Gitpod previously required a local private SSH key to be stored in the default SSH directory, otherwise Gitpod would prompt for a "password". This limitation is no longer required. If not using an SSH uploaded key, you may be prompted for a password (the owner token), or asked for the passphrase associated with your SSH key.

## VS Code Desktop for connecting via Local Companion (Legacy)

If VS Code Desktop cannot connect directly via the SSH Gateway methods described above, the Local Companion approach is used as a fallback to tunnel your SSH connection. Gitpod via the VS Code Desktop plugin will download and start the Local Companion process on your behalf.

This approach is not recommended because:

1. It overwrites your [`remote.SSH.configFile`](https://code.visualstudio.com/blogs/2019/10/03/remote-ssh-tips-and-tricks) VS Code setting, which will break users who have configured the VS Code remote development plugins to access other locations than Gitpod.
2. Downloads and starts Local Companion in a non-transparent way.
3. Is less performant than the SSH Gateway approach.

If required, you manually can force VS Code Desktop to always fallback to the Local Companion by setting the property `gitpod.remote.useLocalApp` in your user preferences to `true`.

> **Deprecation Notice:** The fallback SSH connection using Local Companion for VS Code Desktop will be deprecated in a future release of Gitpod. If you cannot connect to your workspaces directly via SSH, for example, because your firewall is blocking the SSH connection, please [contact support](https://www.gitpod.io/support) with [troubleshooting logs](https://www.gitpod.io/docs/help/troubleshooting#gitpod-logs-in-vs-code-web-and-desktop).

## Diagnosing / Fixing common SSH connection issues

If you experience issues with any of the above described methods of accessing your workspace using VS Code Desktop and SSH there are some common things to check when troubleshooting.

### The owner token wasn't copied to my clipboard, where can I find it?

If, for some reason you are being prompted for the owner token password, but cannot copy to clipboard, you can find the password on the Gitpod [workspaces page](https://gitpod.io/workspaces) under "connect via SSH".

![The password prompt in VS Code Desktop for the owner token](/images/editors/enter-password-for-ssh-connection-light-theme.png)
![The password prompt in VS Code Desktop for the owner token](/images/editors/enter-password-for-ssh-connection-dark-theme.png)
_Caption: The password prompt in VS Code Desktop for the owner token_

![Accessing the owner token string manually from the Gitpod dashboard](/images/editors/connect-via-ssh-dashboard-dark-theme.png)
![Accessing the owner token string manually from the Gitpod dashboard](/images/editors/connect-via-ssh-dashboard-light-theme.png)
_Caption: Accessing the owner token string manually from the Gitpod dashboard_

> **Note:** The pattern of the owner token string is: `workspaceid#ownertoken@host`

### How do I know whether I'm connecting via Local Companion or SSH Gateway?

If you're unsure which connection method you're using to connect (SSH Gateway or Local Companion), you can work it out from the host name shown in the bottom left of VS Code Desktop. The format of the host will indicate which connection method you are using.

- **SSH Gateway** - `SSH: workspaceid.ssh.*.gitpod.io`
- **Local Companion**: `workspaceid` (no domain)

![The SSH host information shown in the bottom left of VS Code Desktop](/images/editors/show-ssh-connection-vscode-dark-theme.png)
![The SSH host information shown in the bottom left of VS Code Desktop](/images/editors/show-ssh-connection-vscode-light-theme.png)
_Caption: The SSH host information shown in the bottom left of VS Code Desktop_

### I'm prompted for a password/passphrase but I still cannot access my workspace?

The owner token prompt and passphrase prompt in VS Code can look similar, however require different inputs. If you're seeing a failure to connect, it could be that you are using the incorrect authentication method, e.g. pasting an owner token for a passphrase, or vice versa.

1. **Owner token** - If the password prompt in VS Code Desktop asks `Enter password for workspace@\*.gitpod.io`, this prompt is for the owner token of the workspace, not the passphrase associated with your SSH key.

![Password prompt from VS Code requiring the workspace owner token](/images/editors/enter-password-for-ssh-connection-dark-theme.png)
![Password prompt from VS Code requiring the workspace owner token](/images/editors/enter-password-for-ssh-connection-light-theme.png)
_Caption: Password prompt from VS Code requiring the workspace owner token._

![The SSH owner token shown in the Gitpod dashboard](/images/editors/connect-via-ssh-dashboard-dark-theme.png)
![The SSH owner token shown in the Gitpod dashboard](/images/editors/connect-via-ssh-dashboard-light-theme.png)
_Caption: The SSH owner token shown in the Gitpod dashboard_

2. **SSH key Passphrase** - If your SSH key has a "passphrase" associated with the SSH key (it is not required for SSH keys), you'll need to enter your passphrase. If your public key has no passphrase, you should not see the passphrase prompt.

![Passphrase prompt from VS Code requiring the SSH key passphrase](/images/editors/enter-passphrase-for-ssh.png)
_Caption: Passphrase prompt from VS Code requiring the SSH key passphrase._

There is no way to recover passphrases with Gitpod. If you cannot remember your passphrase, consider creating a new SSH key and uploading that new key to Gitpod.

See [configuring SSH](/docs/configure/user-settings/ssh) for details on creating and uploading SSH keys.

### What if I'm still having issues with SSH connections?

1. Check that your Gitpod VS Code Desktop extension version is using the latest stable version (`0.40` or above).
2. Attempt to directly connect via SSH using the `-v` to show verbose SSH logs. For example: `ssh -v workspacename@hostname`. You can find the `ssh` command in the workspace list on your Gitpod dashboard, see the [command-line](/docs/references/ides-and-editors/command-line) docs for more.
3. If you're a self-hosted customer, ensure [SSH Gateway](/docs/configure/user-settings/ssh) is configured correctly.

If you are still experiencing issues using VS Code Desktop and Gitpod, please [contact support](/support) with any related [troubleshooting logs](/docs/help/troubleshooting#gitpod-logs-in-vs-code-web-and-desktop)

For more details on VS Code Destkop and SSH setup with Gitpod, see:

1. [Configuring SSH](/docs/configure/user-settings/ssh) with Gitpod
2. Working with [VS Code Desktop](https://www.gitpod.io/docs/references/ides-and-editors/vscode) and Gitpod
