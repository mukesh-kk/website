---
author: iqqbot, mustard-mh, loujaybee
date: Wednesday, 13 July 2022 09:00:00 UTC
excerpt: For more secure and easier to use workspace access, you can now upload a public SSH key to Gitpod to access Gitpod workspaces using your own dedicated SSH key.
image: header.jpg
slug: ssh-key-upload
subtitle: For more secure and easier to use workspace access, you can now upload a public SSH key to Gitpod to access Gitpod workspaces using your own dedicated SSH key.
teaserImage: header.jpg
title: "Introducing workspace SSH support using your own private key(s)"
---

<script context="module">
  export const prerender = true;
</script>

SSH (secure shell) is a critical protocol for remote development.

Both [JetBrains](https://www.jetbrains.com/help/idea/remote-development-a.html) IDEs and the [VS Code](https://code.visualstudio.com/docs/remote/remote-overview) editor use SSH as their remote development foundation. So, a big focus at Gitpod has been on improving performance and usability for connecting using SSH.

Which is why today **we're excited to announce that in Gitpod you can now upload your own public keys to access your workspace.** In addition, we've also removed the requirement for a mandatory public key to be available when access Gitpod using SSH with an Access Token.

With SSH public key upload you can now:

1. Re-connect to workspaces without needing to go back to the Gitpod dashboard.
2. Benefit from improved security when accessing your workspace with a private key.

### But, why? Use-cases for SSH key upload

If you've been happily working away on Gitpod until now, you might be wondering why we're so excited about users being able to upload their SSH keys for Gitpod? The SSH protocol is flexible, so there are many use-cases, but to give you an idea, here are some different use-cases:

1. **Static connection strings** - The access token method of [copy/paste SSH](https://www.gitpod.io/blog/copy-paste-ssh-workspace-access) generates a new workspace access token for each workspace start, meaning users had to go to the Gitpod dashboard to retrieve their SSH command on every workspace timeout or restart. Using an uploaded SSH key allows you can restart the workspace without needing to update your SSH connection details.

> **Note:** The workspace cluster version e.g. `.ws-eu54.gitpod.io` is currently included in the SSH connection host. On workspace update, you'll still be required to update the SSH string. This is an area of improvement that we will investigate for the future.

2. **Desktop client access** - SSH is used as the protocol for many desktop tools, notably users who like to use local [command line access](https://www.gitpod.io/docs/references/ides-and-editors/command-line) for editing, connecting to headless testing tools (which connect to processes running in the workspace) and database clients. Not having to jump back and forth to the Gitpod dashboard eliminates some friction for these workflows.

3. **Port-forwarding** - Whilst, both the VS Code and JetBrains IDEs have [support for port-forwarding](/docs/configure/workspaces/ports), some of our users want to script / automate their port forwarding. Using regular SSH means you can more easily leverage the `-L` and `-R` flags of your SSH client for for port-forwarding without having to go back and forth to the dashboard to copy/paste the SSH string.

In addition to some of these more visual improvements, SSH key upload also will give our users more stable, performant and secure connections. Improvements to the SSH connection experience also enables Gitpod to build new workflows and features around the SSH protocol, such as:

- Further reducing steps and friction when opening desktop editors like VS Code Desktop
- Investigating a fully desktop-based workspace opening and managing experience in future

So, watch this space for future announcements!

### Getting started with SSH key access

1. Navigate to the [keys](https://gitpod.io/keys) page in your Gitpod preferences

![SSH page of the Gitpod dashboard](/images/docs/ssh-key-upload-dark-theme.png)
![SSH page of the Gitpod dashboard](/images/docs/ssh-key-upload-light-theme.png)

2. Upload a public SSH key (See: [SSH](https://www.gitpod.io/docs/configure/user-settings/ssh) documentation)

![Adding an SSH Key to Gitpod](/images/docs/new-ssh-key-light-theme.png)
![Adding an SSH Key to Gitpod](/images/docs/new-ssh-key-dark-theme.png)

3. Go to your workspace list and copy the SSH command

![Copy SSH key from modal](/images/docs/ssh-key-modal-dark-light-theme.png)
![Copy SSH key from modal](/images/docs/ssh-key-modal-dark-theme.png)

Or, get the SSH connection from the workspace start page (when using a [Desktop IDE or editor](/docs/references/ides-and-editors))

![SSH to a workspace via the workspace splash page](/images/docs/ssh-connect-splash-dark-theme.png)
![SSH to a workspace via the workspace splash page](/images/docs/ssh-connect-splash-light-theme.png)

For more information, see the [configuring SSH](/docs/configure/user-settings/ssh) documentation, and using Gitpod with [command-line](/docs/references/ides-and-editors/command-line) access. And for any feedback see the related [GitHub issue](https://github.com/gitpod-io/gitpod/issues/9932), or [raise a new one](https://github.com/gitpod-io/gitpod/issues/new/choose).

### What's next for SSH in Gitpod?

1. **Easier copying of SSH credentials** - We want to make it easier for you to access your SSH credentials, either through direct IDE or editor integration, or via the [gp CLI](/docs/references/gitpod-cli).
2. **Integration with third-parties** - We're investigating integration with other 3rd party services which hold users public keys, such as [GitHub](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account), to avoid duplicate upload of SSH keys.
3. **Improvement to desktop editing experiences** - For users who prefer desktop for editing, either in VS Code Desktop or JetBrains—as opposed to editing in-browser—we will continue to investigate ways to improve the experience, for example with desktop-first editing experiences.

We hope you enjoy the new, easier SSH access in Gitpod, and we'd love to hear your feedback in the [Gitpod community](https://www.gitpod.io/community).

Lastly, a very special thanks to [William](https://twitter.com/trumbitta) and [Sarah](https://twitter.com/sarah11918) for their valuable input and thoughts as [community heroes](https://www.gitpod.io/community/heroes) on this blog post!
