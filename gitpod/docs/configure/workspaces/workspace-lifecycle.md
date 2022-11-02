---
section: workspaces
title: The life of a workspace
---

<script context="module">
  export const prerender = true;
  import Keybind from "$lib/components/keybind.svelte";
</script>

# Workspace Lifecycle

Gitpod brings a new way to think about your developer environment.

Rather than having a single local environment that you update, with Gitpod you have many "workspaces"—run them in parallel if you need!

We encourage you to move all project configuration into code (see [.gitpod.yml](/docs/introduction/learn-gitpod/gitpod-yaml)), so you open new workspaces easily, and "throw them away" (see [Workspace Deleted](/docs/configure/workspaces/workspace-lifecycle#workspace-deleted)) when you're finished with your task.

## Workspace Loading States

A workspace can be in different states.

The following describes each these states and their attributes.

<!-- TODO: Look at dashboard for language use -->

### Workspace Start

- Where a workspace is provisioned and running
- Source control is downloaded into the workspace
- If configured, a prebuild image is used

### Workspace Running

- An active container is provisioned within Gitpod
- Workspace can be accessed immediately without waiting

### Workspace Stop

- There is no active workspace in Gitpod
- All files and directories are preserved
- Uses the same workspace ID when restarted
- A start is required before the workspace can be used

### Workspace Deleted

- Workspaces are typically deleted after 2 weeks

> **Note:** Pinned workspaces are never automatically deleted.

### Workspace Restart

Lorem Ipsum

<img class="shadow-medium rounded-xl max-w-3xl mt-x-small" src="/images/workspace-life/restart-workspace.png" alt="Restart workspace from webapp" loading="lazy"/>

### Workspace Snapshot

You can create a snapshot of a workspace to save its state. This is useful if you want to keep a workspace around for a longer time, or if you want to share it with others. Read more about [Snapshots](/docs/configure/workspaces/collaboration).

<img class="shadow-medium rounded-xl max-w-3xl mt-x-small" src="/images/workspace-life/gitpod-snapshot.png" alt="Gitpod Snapshot from VS Code" loading="lazy"/>

<!-- TODO: How often is this configured for in Self-Hosted -->

### FAQ

- **How can you restart a workspace?** There is no official "restart" of a workspace. To restart a workspace stop and start your workspace.

- **What is "Workspace Pinning"?** A pinned workspace is never deleted. You can pin a workspace via the dashboard.

<!-- TODO: Does pinning need it's own section? -->

<img class="shadow-medium rounded-xl max-w-3xl mt-x-small" src="/images/workspace-life/pin-workspace.png" alt="Pin workspace from webapp" loading="lazy"/>

## Workspace loading phases

> **Note:** The following loading process applies to **new workspaces** only.

<!--

- How do we denote this is "new" workspaces, not restarted (which are different)

- The workspace resources (e.g. CPU and RAM) are allocated based on your configured [Workspace class](/docs/configure/workspaces/workspace-classes#workspace-classes).

- The container image will be downloaded each time for your workspace.

- Your workspace may be created from any repository context (i.e. issue, pull-request, branch and so on)

- Task terminal outputs are saved inside `/workspace/.gitpod` directory if you wish to inspect them externally.
-
-->

### Establishing Workspace Context

All workspaces start with from a single Git "context", e.g. [GitHub](/docs/configure/authentication/github), [GitLab](/docs/configure/authentication/gitlab), [Bitbucket](/docs/configure/authentication/bitbucket). If there is already a running workspace from the same git context, you will be prompted to open the already running workspace or given the option to start a new one.

<img class="shadow-medium rounded-xl max-w-3xl mt-x-small" src="/images/workspace-life/workspace-already-exist.png" alt="Workspace Already Exist" loading="lazy"/>

See [Context URLs](/docs/introduction/learn-gitpod/context-url) for more.

### Establish Workspace Image

Gitpod checks for the existence of a [Workspace Image](/docs/configure/workspaces/workspace-image) via the [`image`](/docs/references/gitpod-yml#image) property in a committed `.gitpod.yml`, which is taken from the Git context of the workspace.

If no `image` property is supplied, workspaces default to the [**workspace-full**](https://hub.docker.com/r/gitpod/workspace-full) image.

<!-- TODO: Look into OCI compatibility https://github.com/opencontainers/image-spec -->

> **Note:** Currently, only Docker images are supported with Gitpod.

<!-- TODO: We need to mention what even is an "image" -->
<!-- TODO: We could give one or two examples of tools installed in the workspace-full image -->
<!-- TODO: We don't have a good landing page for Workspace Full documentation -->

See [Workspace Images](https://github.com/gitpod-io/workspace-images) for more.

### Build Workspace Image

If your Workspace Image cache isn't available, the image will be built.

### Provision Workspace

Once the Git context is established, and the Workspace Image is built, a workspace is provisioned.

### Clone Git repo(s)

The specified Git context is cloned into the provisioned workspace.

- `git` submodules are also initialized on workspace
- To clone more than one repo, use the [multi-repo](/docs/configure/workspaces/multi-repo) feature

<!-- - `/workspace/.gitpod/ready` file is created after cloning is completed -->

### Install Dotfiles

[Dotfiles](/docs/configure/user-settings/dotfiles) allows you to customize workspaces according to your personal needs.

Dotfiles can be configured by linking to a public repository in [preferences](https://gitpod.io/preferences)

<!-- TODO: Should we link to /docs/configure/user-settings rather than preferences directly? -->

If configured:

- Dotfiles repository cloned to `~/.dotfiles` directory
- The installation script is executed (e.g. `install.sh`)
- Dotfiles installation is limited to 2 minutes

<!-- TODO: Any further progress will be halted until your dotfiles is fully installed. -->
<!-- TODO: Figure out "Gitpod will automatically symlink all files recursively from `~/.dotfiles` to `~`, _if you do not have an installation script_." -->
<!-- TODO: More "it will receive a `SIGKILL` error, if it exceeds the limit." to Dotfiles page -->
<!-- TODO: Logs file can be found at `~/.dotfiles.log` -->

### Execute "Before" Task

<!-- TODO: Should this be "Workspace Tasks"? -->

[Workspace Tasks](/docs/configure/workspaces/tasks) are setup processes for a [Project](/docs/configure/projects) executed on every workspace start.

<!-- TODO: Project or repository? -->

- (optional) `before` task run to install any global dependencies

<!-- TODO: Where should we introduce `init` -->
<!-- TODO: Is this with Prebuilds or not? -->
<!-- TODO: "Task terminal outputs are saved inside `/workspace/.gitpod` directory if you wish to inspect them externally." -->

See [Gitpod prebuilds](/docs/configure/projects/prebuilds) for more.

### Initialize IDE

Your chosen IDE or editor is started.

- (optional) [VSCode](/docs/references/ides-and-editors/vscode-extensions#installing-an-extension) extensions installed.
- (optional) [JetBrains](/docs/references/ides-and-editors/intellij#preconfigure-for-repository) plugins installed.
- (optional) VS Code [Settings Sync](/docs/references/ides-and-editors/settings-sync) installed e.g. fonts and themes

<!-- TODO: Should we add optional flag to the section -->

This step is done in the background (i.e. non-blocking) so your IDE can start ahead of time.

**Your selected IDE is launched** 🎉

### Execute "Command" Task

Once the IDE is started, any `command` tasks are now executed.

See [Workspace Tasks](/docs/configure/workspaces/tasks) for more.

### Stop Workspace

<!-- TODO: Find correct Position for screenshot  -->

<img class="shadow-medium rounded-xl max-w-3xl mt-x-small" src="/images/workspace-life/stop-workspace.png" alt="Stop workspace from dashboard" loading="lazy"/>

Your workspace may stop for one of these reasons:

- User issuing a command to stop the workspace (for example executing `gp stop`)
- User inactivity triggering a [Workspace Timeout](#timeouts)
- User is suspected of abusing Gitpod's [Terms of Service](/terms).

So what happens to your workspace files? The following applies:

- [All files inside `/workspace` directory is persisted.](#changes-are-saved)
- [Garbase collection](#garbage-collection)

<!-- TODO -->

<!--

TODO: Diagram, if needed

### Diagram

<iframe title="Diagram showing the Gitpod loading process" style="border: 1px solid rgba(0, 0, 0, 0.1);" width="800" height="450" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2F9mwBY6t44zP4n9w8AQZZL9%2FGitpod-workspace-start-diagram%3Fnode-id%3D59662%253A337%26scaling%3Dmin-zoom%26page-id%3D0%253A244%26starting-point-node-id%3D59662%253A337" allowfullscreen></iframe>

-->

---

## Timeouts

Any running workspace will automatically stop after some time of inactivity. Normally, this timeout is 30 minutes but is extended to **60 minutes if you have an _Unleashed_ plan**.
Furthermore, _Unleashed_ users can manually boost the timeout of a workspace to 180 minutes. This comes in handy, e.g. in case you want to go out for a longer lunch or meeting and don't like restarting your workspace when coming back.

To do that, open the editor's Command Palette (<Keybind>CtrlCmd + Shift + P</Keybind>) and search for "Gitpod: Extend Workspace Timeout".

**Note**: If you do not have an _Unleashed_ plan, this command is not available.

The timeout will always be reset to the full 30 minutes (or other applicable timeout depending on your subscription) by any activity&thinsp;—&thinsp;mouse move or keystroke&thinsp;—&thinsp;in the editor.
If the editor is still open but the corresponding workspace has stopped, a dialog will pop up that lets you start the workspace
again. Alternatively, you can just reload the browser or go to your [Workspaces Dashboard](https://gitpod.io/workspaces) and restart the workspace.

For convenience, closing the browser window/tab containing the workspace reduces the timeout to 3 minutes.

### What happens if my workspace times out?

Not to worry, your changes are safe. You can navigate back to [Workspaces Dashboard](https://gitpod.io/workspaces), look for your stopped workspace and start it again to continue working.

### I want my team / client to review my work

If you want to send a preview URL to someone so they can review your work, you may do that as long as your workspace doesn't time out. Make sure you set your application's port's `visibility` to `public` ([docs](/docs/references/gitpod-yml#portsnvisibility)).

In cases where you don't know how long it will take until someone looks at your preview, it is best to use pull request preview deployments provided by your hosting provider.

## Garbage collection

Unused or inactive workspaces are automatically deleted after 14 days. A message is also displayed at the bottom of the [workspaces list](https://gitpod.io/workspaces) within the `Inactive Workspaces` panel in your dashboard. Restarting a workspace resets the day counter for that particular workspace.

To prevent a workspace from being deleted, you can pin it in your [list of workspaces](https://gitpod.io/workspaces). Pinned workspaces are kept forever.

## Changes are saved

Gitpod backs up the state of the `/workspace/` directory between workspace starts, so that
you can revisit them later. _Attention: Files in other paths will not be saved!_
