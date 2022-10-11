---
section: learn-gitpod
title: The life of a workspace
---

<script context="module">
  export const prerender = true;
  import Keybind from "$lib/components/keybind.svelte";
</script>

# The life of a workspace

Gitpod makes creating fresh workspaces as easy as [clicking a button on a repository page](/docs/configure/user-settings/browser-extension).
Gitpod's continuous dev environments encourages you to create fresh workspaces rather than restarting older ones.
This ensures that you are starting from a clean slate with proper configuration.

## Workspace Loading Phases (New)

A workspace creation is a linear process (from a high-level perspective) except for a few things, which we will see later.

### 1: Workspace Provisioning

1. New Workspace starts from the provided `git` context (e.g. GitHub, GitLab, Bitbucket). If there is already a running workspace from the same context, you're prompted to reuse it.
2. The workspace resources (e.g. CPU and RAM) are allocated based on your configured [Workspace Class](/docs/configure/workspaces/workspace-classes#workspace-classes). 
3. Gitpod checks for the existence of an [`image` property](/docs/references/gitpod-yml#image) in a committed `.gitpod.yml` within the repo provided as your `git` context for a workspace. 

### 2: Workspace Image

- By default, [**workspace-full**](https://hub.docker.com/r/gitpod/workspace-full) docker image is used.

#### 2.1 Docker container build and pull

1. If your container image cache isn't available, it will be built.
2. The container image will be downloaded each time for your workspace.

### 3: Clone Git Repo(s)

- Normally, only the repository is cloned from which you created the workspace.
  - Your workspace may be created from any repository context (i.e issue, pull-request, branch and so on)
  - `git` submodules are initialized as well.
- Multiple repositories may be cloned using the built-in [multi-repo](/docs/configure/workspaces/multi-repo) feature.
- `/workspace/.gitpod/ready` is created after cloning is done.

### 4: Install Dotfiles

[Dotfiles](/docs/configure/user-settings/dotfiles) allow you to customize every workspace according to your personal needs. Dotfiles are useful ways to extend any existing workspace configuration with personal user configuration or overrides. A Dotfile is a GitHub repo that is (optionally) configured by a user of Gitpod in their [preferences](https://gitpod.io/preferences). 

When your dotfiles repository is specified in [preferences](https://gitpod.io/preferences), the following happens:

- Your dotfiles repository is `git` cloned at `~/.dotfiles` directory.
- Installation script is executed if you have one inside your dotfiles repo (i.e `install.sh` and [more](/docs/configure/user-settings/dotfiles))
  - Gitpod will automatically symlink all files recursively from `~/.dotfiles` to `~` **if you do not have an installation script**.
  - Your installation script can run for upto 120s (2 minutes), it will receive a `SIGKILL` if it exceeds that limit.
- Any further progress will be halted until your dotfiles is fully installed.
- Logs file can be found at `~/.dotfiles.log`

### 5: `.gitpod.yml` tasks

There are different kinds of [`tasks`](/docs/configure/workspaces/tasks), they run on different stages.

The [tasks page](/docs/configure/workspaces/tasks#prebuild-and-new-workspaces) should provide you more details but here's a brief overview:

- `before` tasks are run before `init` and `command`.
- `init` tasks are run after `before`. If you're using prebuilds, `init` tasks will block further progress before completion.
- `command` tasks are run after IDE start.

Task terminal outputs are saved inside `/workspace/.gitpod` directory if you wish to inspect them externally.

### 6: Execute IDE

#### 6.1: Extensions installation and Settings Sync

- Your IDE (i.e [VSCode](/docs/references/ides-and-editors/vscode-extensions#installing-an-extension), [JetBrains](/docs/references/ides-and-editors/intellij#preconfigure-for-repository)) specific extensions defined on `.gitpod.yml` are auto installed.
- If you're using VSCode, your user settings are synced from the [`settings-sync` server](/docs/references/ides-and-editors/settings-sync), this includes color-themes, extensions, fonts, etc.

This step is done in the background (i.e non-blocking) so your IDE can start ahead of time.

#### 6.2: Your selected IDE is launched

### 7: Workspace Stopping

Your workspace may stop for one of these reasons:

1. User issuing a command to stop the workspace (for example executing `gp stop`)
2. User inactivity triggering a [Workspace Timeout](#timeouts)
3. User is suspected of abusing Gitpod's [Terms of Service](https://www.gitpod.io/terms).

So what happens to your workspace files? The following applies:

- [All files inside `/workspace` directory is persisted.](#changes-are-saved)
- [Garbase collection](#garbage-collection)

### Diagram

<iframe title="Diagram showing the Gitpod loading process" style="border: 1px solid rgba(0, 0, 0, 0.1);" width="800" height="450" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2F9mwBY6t44zP4n9w8AQZZL9%2FGitpod-workspace-start-diagram%3Fnode-id%3D59662%253A337%26scaling%3Dmin-zoom%26page-id%3D0%253A244%26starting-point-node-id%3D59662%253A337" allowfullscreen></iframe>

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

## Garbage Collection

Unused or inactive workspaces are automatically deleted after 14 days. A message is also displayed at the bottom of the [workspaces list](https://gitpod.io/workspaces/) within the `Inactive Workspaces` panel in your dashboard. Restarting a workspace resets the day counter for that particular workspace.

To prevent a workspace from being deleted, you can pin it in your [list of workspaces](https://gitpod.io/workspaces/). Pinned workspaces are kept forever.

## Changes are Saved

Gitpod backs up the state of the `/workspace/` folder between workspace starts, so that
you can revisit them later. _Attention: Files in other locations will not be saved!_
