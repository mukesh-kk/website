---
title: Making snapshots safer for sharing
excerpt: Users must have access to the git repository in the snapshot, in order to open it.
date: 2022-02-22
image: 2022-02-22.jpg
alt: VS Code command palette
---

<script>
  import Contributors from "$lib/components/changelog/contributors.svelte";
</script>

Gitpod now restricts access to workspaces opened with [snapshot URLs](/docs/configure/workspaces/collaboration#sharing-snapshots).

> Users must have access to the git repository in the snapshot, in order to open it.

If a snapshot URL user does not have read access to the repo, Gitpod will now show an error message.
Previously, any logged-in Gitpod user could open snapshot URLs for any workspace.

This change matches what happens when users open a new workspace on a private repository, using a prefixed context url. The change also helps to prevent leakage of sensitive or proprietary files via snapshots.
To learn more about collaboration and sharing, please have a look at [our documentation](/docs/configure/workspaces/collaboration)

**Breaking change**

This change may impact you if you are intentionally sharing a private repository using a snapshot, say for an interview.

**Workarounds**

- Use a public repository instead of a private one.
- Invite users to the private repository (or to the team on the org) as collaborators.
- Share a [running workspace](/docs/configure/workspaces/collaboration#sharing-running-workspaces) instead of a snapshot URL.

**Feedback**

As always, please [contact Gitpod](/contact/support) if you have any feedback to share with us.

<p><Contributors usernames="jankeromnes,csweichel,geropl,AlexTugarev,JanKoehnlein,jldec" /></p>
