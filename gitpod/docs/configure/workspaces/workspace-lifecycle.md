---
section: workspaces
title: Workspace Lifecycle
---

<script context="module">
  export const prerender = true;
</script>

# Workspace Lifecycle

Gitpod brings a new way to think about your development environment. Rather than a single local environment that you keep up-to-date, with Gitpod you can have as many [workspaces](/docs/configure/workspaces) as you need.

## Workspace Statuses

The state of the workspace is indicated by the color of the workspace indicator. For example, in the Gitpod [dashboard](https://gitpod.io/workspaces), workspace state is shown on the workspace list.

1. 🟠 **Starting** - Workspace provisioning, inaccessible to the user.
2. 🟢 **Running** - Workspace loaded, accessible to the user.
3. 🟠 **Stopping** - Workspace being stopped, backups performing.
4. 🔴 **Stopped** - Workspace no longer accessible. File system preserved for restart.

> **Important:** Only files in the `/workspace` directory are kept between state transitions.

The following describes each workspace status in detail, including what can cause a workspace to transition from one status to another.

### Workspace Starting

When you open a workspace, it will be in the "starting" state. This means that the workspace is being created and the initialization process is running.

- Where a workspace is being provisioned and initialized.
- If configured and available, a prebuild snapshot is used.
- Otherwise, source control is downloaded into the workspace.

### Workspace Running

- An active workspace is provisioned within Gitpod.
- The workspace can be accessed by the user.

### Workspace Stopped

- No provisioned workspace is running (e.g. ports and URLs are not accessible).
- Only files and directories inside `/workspace` are preserved.
- If the workspace is restarted, the URL is preserved.
- A start is required before the workspace can be used.

### Workspace Deleted

Workspaces are deleted after 14 days. Pinned workspaces are never deleted automatically.

## Workspace Actions

### Workspace Pinning

A pinned workspace is never deleted. You can pin a workspace from your [workspace list](https://gitpod.io/workspaces/) in the Gitpod dashboard.

### Workspace Snapshotting

You can create a snapshot of a workspace to save its state. This is useful if you want to keep a workspace around for a longer period of time, than the default. Read more about [Snapshots](/docs/configure/workspaces/collaboration).

## Workspace Deletion

Stopped workspaces are automatically deleted 14 days since the last workspace start. Pinned workspaces are never deleted. You can pin a workspace from your [workspace list](https://gitpod.io/workspaces/) in the Gitpod dashboard.

## Workspace Timeouts

Running workspaces will stop automatically after a period of inactivity.

### Workspace Inactivity

By default, workspaces stop following 30 minutes without user input (e.g. keystrokes or terminal input commands). You can increase the workspace timeout, but keep in mind that workspaces can't be in the running state for more than 36 hours.

### Editor Disconnect

Currently, all timeouts are dependent on an active editor connection. Closing your Gitpod connected editor or IDE will reduce the workspace timeout to 5 minutes.

### Extending Timeouts

Paying users of Gitpod can extend the timeout of their current workspace using the `gp timeout set` from the [Gitpod CLI](/docs/references/gitpod-cli), which is installed in all gitpod workspaces by default. Extending the workspace timeout does not affect the timeout of other any other workspaces.
