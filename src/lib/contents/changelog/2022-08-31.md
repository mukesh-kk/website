---
title: August Gitpod Release 2022
excerpt: The latest changes for Gitpod release in August 2022, including new commands for the `gp` CLI, updates to JetBrains to show multiple terminals in the IDE, and improvements to how VS Code Desktop connects to workspaces via SSH.
date: 2022-08-31
image: 2022-08-31.jpg
alt: VS Code SSH Gateway rollout and JetBrains IDE task support
---

<script>
  import Contributors from "$lib/components/changelog/contributors.svelte";
</script>

Welcome to the August edition of the Gitpod Changelog.

**Key highlights:**

- [JetBrains now supports multiple task Terminals](#jetbrains-now-supports-multiple-task-terminals)
- [JetBrains now respects configured Java SDK (JDK) versions](#jetbrains-now-respects-configured-java-sdk-jdk-versions)
- [View Resource Consumption in JetBrains Backend Control Center](#view-resource-consumption-in-jetbrains-backend-control-center)
- [Sync Local VS Code extensions](#sync-local-vs-code-extensions)
- [VS Code Desktop reduced popups when opening](#vs-code-desktop-reduced-popups-when-opening)
- [All VS Code Desktop users on SaaS are now using SSH Gateway! 🎉](#all-vs-code-desktop-users-on-saas-are-now-using-ssh-gateway-)
- [`gp tasks list` shows your current tasks (as defined in the .gitpod.yml)](#gp-tasks-list-shows-your-current-tasks-as-defined-in-the-gitpodyml)
- [`gp tasks stop` stops running tasks that (as defined in the .gitpod.yml)](#gp-tasks-stop-stops-running-tasks-that-as-defined-in-the-gitpodyml)
- [Improved OpenSSH compatibility and support for sha256/sha512](#improved-openssh-compatibility-and-support-for-sha256sha512)

The following features are also accessible for users running the "latest" IDE or [editor preference](https://gitpod.io/preferences):

- **[New ports explorer in VS Code Browser](/changelog/new-ports-explorer-changelog-view-and-connection-improvements-for-vs-code#new-ports-explorer-in-vs-code-browser)** - Aligning the port interface with VS Code Desktop.

## Improvements for JetBrains IDEs

We are continuing to make progress with the JetBrains and Gitpod integration #[7956](https://github.com/gitpod-io/gitpod/issues/7956) as part of our ongoing [partnership with JetBrains](https://www.gitpod.io/blog/gitpod-jetbrains). Whilst most of our efforts are mostly towards IntelliJ IDEA, a lot of the improvements we are making will still apply to our other [supported JetBrains IDEs](/docs/references/ides-and-editors).

### JetBrains now supports multiple task Terminals

A key part of "Gitpodifying" a project is adding any necessary tasks, such as starting servers or database to your [.gitpod.yml](/docs/references/gitpod-yml). One advantage of declaring these processes in your `.gitpod.yml` configuration is that your commands are picked up by the IDE or editor and show on workspace start.

Previously, JetBrains with Gitpod only showed a single terminal, meaning that users needed to use `gp tasks` to interact with running terminals. Due to some improvements for JetBrains Remote Development that we are able to leverage, you can now see all of your terminals inside the IDE as you also can with VS Code.

### JetBrains now respects configured Java SDK (JDK) versions

Previously, when opening a Java Workspace with JetBrains, the Gitpod IDE would select the latest Java SDK (JDK) version as the default.

This was problematic when we recently updated the Gitpod `workspace-full` image, to include both Java 11 and 17, which many users rely upon. When having multiple JDK versions, JetBrains would default to using the latest JDK version, which in the case of the `workspace-full` image was 17, and not 11, causing a minor regression. Now, Gitpod respects configured JDK versions in locations such as the `PATH` and `JAVA_HOME`.

![jetbrains gateway java sdk](/images/jetbrains-gateway/java-sdk-configuration.png)
_JetBrains IDEs now picking up the correct SDK version by default_

### View Resource Consumption in JetBrains Backend Control Center

When using a Gitpod workspace you might experience performance issues caused by an application using more resources than expected, or due to resource consumption in adjacent containers on the node. Whatever the reason, you may want to investigate what's going on within your workspace.

We've now extended the JetBrains [Backend Control Center](https://www.jetbrains.com/help/idea/work-inside-remote-project.html#control_center) with two additional bits of information about your workspace: `Workspace CPU` and `Workspace Memory`. The additional performance information shown in the control center is for the node that your workspace is running on, and not the workspace itself. This information is also the same that can be found from running the command `gp top` in your workspace.

![jetbrains gateway performance center](/images/jetbrains-gateway/jetbrains-performance-center.png)
_Viewing the workspace and node performance in the Backend Control Center_

## Improvements for VS Code Desktop

We have been continuing to invest in our desktop editor experiences, including VS Code #[7184](https://github.com/gitpod-io/gitpod/issues/7184), with an emphasis on removing any barriers or friction in getting the VS Code editor open with a Gitpod workspace, establishing a stable connection via SSH, and improving the experience of restarting a timed out workspace.

### Sync Local VS Code extensions

The underlying Microsoft [VS Code - Remote SSH](https://code.visualstudio.com/docs/remote/ssh) extension that powers the Gitpod [VS Code Desktop integration](https://www.gitpod.io/docs/references/ides-and-editors/vscode) does not automatically install local user extensions on remote machines, such as a Gitpod workspace. For users, because VS Code - Remote SSH does not automatically install local extensions, that means you'll have to manually click "install" for each local extensions on every Gitpod workspace start. Installing extensions manually is cumbersome, especially when you have many extensions to install and is a barrier to utilising Gitpod ephemeral workspaces.

In an upcoming release, Gitpod will prompt you to enable [VS Code Setting Sync](/docs/references/ides-and-editors/settings-sync#enabling-settings-sync-in-vs-code-desktop) with Gitpod, which will allow Gitpod to retrieve local extensions and automatically install them in your workspace. If for any reason you want to disable syncing of local extensions, you can do so via the `gitpod.remote.syncExtension` VS Code settings. If you have any feedback or thoughts, please add it to the GitHub issue: [#7906](https://github.com/gitpod-io/gitpod/issues/7906).

![Install local VS Code extensions notification](/images/changelog/2022-08-31/local-extensions.png)
_Prompt to enable Setting Sync with Gitpod to sync local VS Code extensions_

### VS Code Desktop reduced popups when opening

Many users love Gitpod for how simple it can make working with your projects. However, for VS Code Desktop there were some cases where you needed to respond to specific popups when opening your workspace, for instance accepting the SSH fingerprint of the workspace, or accepting the browser redirect when opening a workspace.

The number of prompts you are now shown when opening VS Code Desktop is reduced.

You should see one browser redirect prompt (one for [VS Code Desktop](/docs/references/ides-and-editors/vscode) and one for [JetBrains Gateway](/docs/integrations/jetbrains-gateway)), marking "always allow" will suppress all future prompts. SSH fingerprints are also now automatically added to your `known_hosts` if you're using [SSH Gateway approach to opening VS Code Desktop](/docs/references/ides-and-editors/vscode#connecting-to-vs-code-desktop-ssh).

![Accepting the SSH fingerprint in VS Code](/images/editors/vscode-ssh-fingerprint-light-theme.png)
![Accepting the SSH fingerprint in VS Code](/images/editors/vscode-ssh-fingerprint-dark-theme.png)
_Using the SSH Gateway approach for VS Code Desktop means no more SSH fingerprint prompts_

For more information, check out our dedicated documentation for [optimising VS Code Desktop](/docs/references/ides-and-editors/vscode#optimizing-vs-code-desktop).

### All VS Code Desktop users on SaaS are now using SSH Gateway! 🎉

We have now completed a migration of all VS Code Desktop users on SaaS to our new SSH Gateway approach. This change brings improved stability, smoother restarting of workspaces, and more.

To get setup, we recommend you [upload an SSH key to Gitpod](https://www.gitpod.io/docs/configure/user-settings/ssh#upload-an-ssh-key-to-gitpod). For full details on why we made this change to our SSH approach for VS Code Desktop, please check out our blog post [VS Code Desktop and SSH explained](https://www.gitpod.io/blog/vscode-desktop-ssh-updates).

If you cannot use the new approach for any reason, please reach out via the GitHub issue #[7452](https://github.com/gitpod-io/gitpod/issues/7452).

![new ssh key](/images/docs/new-ssh-key-light-theme.png)

## Improvements for the Gitpod CLI (`gp`)

Over the last few months we've been making lots of updates to the [Gitpod CLI](/docs/references/gitpod-cli) (`gp`). Because the `gp` command-line-interface is bundled inside of all Gitpod workspaces, `gp` acts as a common way to run workspace actions regardless of what editor or IDE you're using Gitpod with, whether that's JetBrains, VS Code or directly via SSH.

Let's say that you're documenting your Gitpod setup, rather than detailing actions directly how to take some action in each of the [Gitpod supported IDEs & editors](/docs/references/ides-and-editors), you can share `gp` commands knowing that the experience will be consistent across all workspace editing experiences.

### `gp tasks list` shows your current tasks (as defined in the .gitpod.yml)

The `gp tasks list` command allows you to list any running commands that are defined in your `.gitpod.yml`. If you want, you can even attach to a given task using `gp tasks attach` which brings that current task into the foreground of your terminal. However, since there are situations where it might not be as easy to figure out which terminal you're currently viewing, that's why we now highlight your current task to make life a little easier for you

![gp task list](/images/editors/gp-task-list-highlight.png)

### `gp tasks stop` stops running tasks that (as defined in the .gitpod.yml)

You can now run `gp tasks stop` to stop running tasks that have been defined in your `.gitpod.yml`. You can either stop a single task with `gp tasks stop <id>`, or terminate all tasks by running `gp tasks stop --all`.

See the `gp` [Command Line Interface](/docs/references/gitpod-cli#stop-1) documentation for more.

<!-- TODO: Add about multiple tasks in JetBrains view -->

## Improvements for SSH connections to Gitpod

The SSH protocol is the primary method of connection to Gitpod workspaces for JetBrains IDEs, VS Code Desktop and users who directly SSH into Gitpod for editing, or working with their code. We've been working to ensure that Gitpod has a wide range of support for different SSH clients and SSH key versions.

### Improved OpenSSH compatibility and support for sha256/sha512

Previously, Gitpod did not support OpenSSH clients >v8.8, nor did Gitpod support RSA sha256/sha512. For users using VS Code Desktop with the SSH Gateway approach, this could mean that in some cases users could not leverage SSH access to Gitpod due to incompatible keys or OpenSSH client's, however this issue should now be resolved.

## Other fixes and improvements

- [#12468](https://github.com/gitpod-io/gitpod/pull/12468) - Local Preview: Check and exit if M1 Mac <Contributors usernames="Pothulapati,corneliusludmann" />
- [#12116](https://github.com/gitpod-io/gitpod/pull/12116) - Gitpod CLI: New command `gp tasks stop` <Contributors usernames="akosyakov,andreafalzetti,felladrin,filiptronicek,mustard-mh" />
- [#11255](https://github.com/gitpod-io/gitpod/pull/11255) - Prevent abuse by limiting rate at which network connections can be made by a workspace <Contributors usernames="Furisto,MrSimonEmms,aledbf,geropl,jenting,kylos101,sagor999,utam0k" />
- [#12258](https://github.com/gitpod-io/gitpod/pull/12258) - Added phone number verification in SaaS, to help mitigate abuse. <Contributors usernames="AlexTugarev,corneliusludmann,gtsiolis,jldec,kylos101,svenefftinge" />
- [#12367](https://github.com/gitpod-io/gitpod/pull/12367) - Improve reliability of image build starts<Contributors usernames="jenting,utam0k" />
- [#12315](https://github.com/gitpod-io/gitpod/pull/12315) - Prevent divide by zero error in workspace info service <Contributors usernames="Furisto,jenting,kylos101,utam0k" />
- [#12288](https://github.com/gitpod-io/gitpod/pull/12288) - SSH-Gateway: Support rsa sha256/sha512 algorithm <Contributors usernames="MrSimonEmms,akosyakov,iQQBot,jeanp413,sagor999" />
- [#12096](https://github.com/gitpod-io/gitpod/pull/12096) - Update spending limit modal on workspace start <Contributors usernames="geropl,gtsiolis,jankeromnes,jldec,laushinka" />
- [#12234](https://github.com/gitpod-io/gitpod/pull/12234) - Truncate project environment variable name <Contributors usernames="geropl,gtsiolis" />
- [#12163](https://github.com/gitpod-io/gitpod/pull/12163) - JetBrains IDEs will use the default Java SDK version when there's no explicit configuration for it yet. <Contributors usernames="akosyakov,andreafalzetti,felladrin" />
- [#12028](https://github.com/gitpod-io/gitpod/pull/12028) - Fixed a rare case in which prebuilds terminated successfully but were shown as failed <Contributors usernames="jenting,sagor999,utam0k" />
- [#12280](https://github.com/gitpod-io/gitpod/pull/12280) - Update docker compose from v2.8.0 to v2.10.0 <Contributors usernames="aledbf,sagor999" />
- [#12159](https://github.com/gitpod-io/gitpod/pull/12159) - JetBrains: Display Workspace CPU/Memory usage in Backend Control Center.JetBrains: Workspaces created from repositories with tasks defined on .gitpod.yml will start with one terminal opened for each task. <Contributors usernames="akosyakov,andreafalzetti,felladrin" />
- [#12139](https://github.com/gitpod-io/gitpod/pull/12139) - Mark workspaces' whose image builds failed as `stopped <Contributors usernames="geropl,laushinka" />
- [#12082](https://github.com/gitpod-io/gitpod/pull/12082) - Enable allowing redirect to Desktop IDEs for all workspaces. <Contributors usernames="akosyakov,felladrin,loujaybee" />
- [#12053](https://github.com/gitpod-io/gitpod/pull/12053) - JetBrains: Display Workspace CPU/Memory usage in Backend Control Center <Contributors usernames="akosyakov,andreafalzetti,felladrin" />
- [#12052](https://github.com/gitpod-io/gitpod/pull/12052) - Gitpod CLI: Highlight current task in gp tasks list <Contributors usernames="akosyakov,andreafalzetti,felladrin,filiptronicek,jeanp413" />
- [#11993](https://github.com/gitpod-io/gitpod/pull/11993) - Fixes entering of colons in host on Git Integration page. <Contributors usernames="AlexTugarev,andrew-farries" />
- [#11576](https://github.com/gitpod-io/gitpod/pull/11576) - Add Spending Limit Reached modal on workspace creation. <Contributors usernames="AlexTugarev,geropl" />
- [#10199](https://github.com/gitpod-io/gitpod/pull/10199) - Migrate AlertBox component instances to Alert component <Contributors usernames="KevSlashNull,andrew-farries,gtsiolis,meysholdt" />
- [#11434](https://github.com/gitpod-io/gitpod/pull/11434) - Local Preview: Provide information about next steps when exited <Contributors usernames="MrSimonEmms,Pothulapati,andrew-farries,gtsiolis,lucasvaltl" />
- [#11570](https://github.com/gitpod-io/gitpod/pull/11570) - Fix broken prebuild trigger for GHE. <Contributors usernames="AlexTugarev,geropl" />
- [#11768](https://github.com/gitpod-io/gitpod/pull/11768) - Display an alert on signup if a user cannot login because their license does not cover for that additional seat <Contributors usernames="AlexTugarev,geropl,gtsiolis,lucasvaltl" />
