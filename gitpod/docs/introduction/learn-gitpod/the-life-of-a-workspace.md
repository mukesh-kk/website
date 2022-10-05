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

## Timeouts

Any running workspace will automatically stop after some time of inactivity. Normally, this timeout is 30 minutes but is extended to **60 minutes if you have an _Unleashed_ plan**.
Furthermore, _Unleashed_ users can manually boost the timeout of a workspace to 180 minutes. This comes in handy, e.g. in case you want to go out for a longer lunch or meeting and don't like restarting your workspace when coming back.

To do that, open the editor's Command Palette (<Keybind>CtrlCmd + Shift + P</Keybind>) and search for "Gitpod: Extend Workspace Timeout".

**Note**: If you do not have an _Unleashed_ plan, this command is not available.

The timeout will always be reset to the full 30 minutes (or other applicable timeout depending on your subscription) by any activity&thinsp;—&thinsp;mouse move or keystroke&thinsp;—&thinsp;in the editor.
If the editor is still open but the corresponding workspace has stopped, a dialog will pop up that lets you start the workspace
again. Alternatively, you can just reload the browser or go to your [workspaces](https://gitpod.io/workspaces) and restart the workspace.

For convenience, closing the browser window/tab containing the workspace reduces the timeout to 3 minutes.

### What happens if my workspace times out?

Not to worry, your changes are safe. You can navigate back to https://gitpod.io, look for your stopped workspace and start it again to continue working.

### I want my team / client to review my work

If you want to send a preview URL to someone so they can review your work, you may do that as long as your workspace doesn't time out. Make sure you set your application's port's `visibility` to `public` ([docs](/docs/references/gitpod-yml#portsnvisibility)).

In cases where you don't know how long it will take until someone looks at your preview, it is best to use pull request preview deployments provided by your hosting provider.

## Garbage Collection

Unused or inactive workspaces are automatically deleted after 14 days. A message is also displayed at the bottom of the [workspaces list](https://gitpod.io/workspaces/) within the `Inactive Workspaces` panel in your dashboard. Restarting a workspace resets the day counter for that particular workspace.

To prevent a workspace from being deleted, you can pin it in your [list of workspaces](https://gitpod.io/workspaces/). Pinned workspaces are kept forever.

## Changes are Saved

Gitpod backs up the state of the `/workspace/` folder between workspace starts, so that
you can revisit them later. _Attention: Files in other locations will not be saved!_
