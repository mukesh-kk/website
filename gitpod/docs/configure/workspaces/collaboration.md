---
section: workspaces
title: Collaboration & Sharing
---

<script context="module">
  export const prerender = true;
  import IdeToggle from "$lib/components/docs/ide-toggle.svelte";
</script>

# Collaboration & Sharing of Workspaces

There are currently two ways to share a Gitpod workspace, either by creating a [workspace snapshot](#sharing-snapshots), a "point in time" capture of a workspace state that can be then opened by another user. Or, by [sharing a running workspace](#sharing-running-workspaces) which shares access to a single running workspace to multiple users.

`youtube: TrY15zN98p8`

## Workspace Snapshots

Snapshotting a workspace is useful when you want to create reproducible workspace state for reporting support issues, or when giving training, or presentations. You can create up to three snapshots from any workspace.

You can create a snapshot URL of your workspace to share your workspace files with others. Following a Gitpod snapshot URL starts a new workspace, but under the account of the user who followed that original snapshot URL.

There are a few important things to note about workspace snapshots:

- **Snapshots behave like workspace restarts** - All workspace state, including files changed since the original workspace start are preserved in a snapshot. Any tasks or processes typically launched via a workspace start will not run for a workspace snapshot.

- **Access to secret information** - Snapshotted workspaces do not grant access to Gitpod environment variables, Gitpod authentication or Git credentials within a snapshot. However, you should use caution that you did not store any secret or private information in any files of a workspace snapshot before generating a snapshot URL.

- **Deleting and managing snapshots** - If you want to remove any created snapshot URLs, deleting the workspace directly removes any created snapshot URLs associated with that workspace.

- **Users must have repository access** - Each workspace snapshot creates a new unique URL. Access to a snapshot is based on the access rules on the repository the workspace is based on. This means snapshots based on private repositories can only be opened by those with access to the repository. Public repository snapshots can be accessed without authentication.

> **Note:** Caution should always be taken when sharing potentially sensitive information, including Gitpod workspace snapshots. If you are concerned you have accidentally shared sensitive information, we suggest you follow best practices such as immediately rotating credentials and adhere to your typical security response process.

### How To Take a Snapshot URL

<IdeToggle id="ide-toggle-ports">

<div slot="jetbrains">
  To create a snapshot, run "Gitpod: Share Workspace Snapshot" from the Backend Control Center, or from the JetBrains IDE search. Once you execute the command, the snapshot is taken and the URL is shown in a dialog.
</div>

<div slot="vscodedesktop">
  To create a snapshot, run "Gitpod: Share Workspace Snapshot" from the hamburger menu at the top left of VS Code, from the Gitpod menu at the bottom, or via the VS Code command palette. Once you execute the command, the snapshot is taken and the URL is shown in a dialog.
</div>

<div slot="vscodebrowser">
  To create a snapshot, run "Gitpod: Share Workspace Snapshot" from the hamburger menu at the top left of VS Code, from the Gitpod menu at the bottom, or via the VS Code command palette. Once you execute the command, the snapshot is taken and the URL is shown in a dialog.
</div>

<div slot="commandline">
    You can run `gp snapshot` from any workspace to generate a snapshot URL.
</div>

</IdeToggle>

## Sharing Running Workspaces

Sharing running workspaces makes it possible to quickly look at a workspace together with a (remote) colleague. It is similar to collaborating on Google Docs, in that you can see who is online and look at the same code and processes.

To share your workspace, navigate to the workspaces page at https://gitpod.io/workspaces. From there:

1. Move your mouse over the workspace you want to share (change the filter to All if you don't see your workspace).
1. Click the three dots menu to the right of the highlighted workspace.
1. Click **Share**

This marks your workspace as shared. When you open it, you can copy & share its URL.

> **Note:** You can join shared workspaces only by using VS Code Browser. If you prefer to use another editor, please consider using [external collaboration plugins](#external-collaboration-plugins).

> **Security note:**
>
> Beware, anybody with this URL and a Gitpod account will be able to access the workspace as long as
> it is shared and running.
>
> Every action involving Git in a shared workspace happens on behalf of the workspace owner's account without further authorization. This includes access to secrets used in a shared workspace.
> It is highly recommended to give workspace URLs only to trusted users and unshare workspaces as soon as sharing them is no longer necessary.
>
> **A running Gitpod workspace really is your personal machine.**
>
> At present, this feature cannot be disabled. If this is something you are interested in, please [let us know in this issue](https://github.com/gitpod-io/gitpod/issues/6328).

## External Collaboration Plugins

With Gitpod you can also use the following third-party integrations for real-time collaboration:

- [Code Together](https://www.codetogether.com/) - Works on VS Code Desktop, VS Code Browser, and via JetBrains or Eclipse.
- [GitLive](https://git.live/) - Works on VS Code Desktop, VS Code Browser, and via JetBrains.
- [Duckly](https://duckly.com/) - Works on VS Code Desktop and VS Code Browser.
