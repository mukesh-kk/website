---
title: July Self-Hosted Release
excerpt: We've released a new version of Self-Hosted Gitpod.
date: 2022-07-29
image: 2022-07-29.jpg
tag: self-hosted
alt:
---

<script>
  import Contributors from "$lib/components/changelog/contributors.svelte";
  import Badge from "$lib/components/changelog/badge.svelte"
</script>

We've released a new version of Self-Hosted Gitpod. Update instructions can be found in our [update guide](https://www.gitpod.io/docs/configure/self-hosted/latest/updating). You can read more about how to install it from scratch in our [documentation](https://www.gitpod.io/docs/configure/self-hosted/latest). More details on this release can be found on [GitHub](https://github.com/gitpod-io/gitpod/releases).

> **Note:** If you are on a paid [Self-Hosted plan](../self-hosted), this release will be promoted to your release channel in one week.

For feedback, please raise an [issue](https://github.com/gitpod-io/gitpod/issues/new?assignees=&labels=bug&template=bug_report.yml) or [chat with us](https://www.gitpod.io/chat).

<p><Contributors usernames="nandajavarma,MrSimonEmms,Pothulapati,corneliusludmann,adrienthebo,lucasvaltl" /></p>

### Feature highlights

Here are the highlights of what is included in this new version of Gitpod Self-Hosted:

- [Auto-cancel pending or running prebuilds on the same branch when new commits are pushed](../changelog/bring-your-own-workspace-ssh-keys)
- [Upload your public SSH keys to access your workspace](../changelog/auto-cancel-prebuilds-on-outdated-commits)

Further, a lot has been improved on the documentation side of Gitpod Self-Hosted, specifically around operating Gitpod:

- [How to backup and restore Gitpod](../docs/configure/self-hosted/latest/backup-restore)
- [Business continuity and disaster recovery considerations with Gitpod](../docs/configure/self-hosted/latest/disaster-recovery)
- We've also restructured the [Self-Hosted section](../docs/configure/self-hosted/latest) in our documentation to have a clearer separation of concerns around the intent of the documentation.

### Breaking changes

There are minor breaking changes regarding how you configure workspace resource limits and workspace image defaults. Please refer to the [2022.07 upgrade guide](../docs/configure/self-hosted/latest/upgrade-guides#202207) in the documentation for details.

### Fixes and improvements

- You can now configure the service type of the proxy service in the installation UI - you do not need to upload a `.yaml` file as a [config patch](../docs/configure/self-hosted/latest/config-patches) anymore to configure this. However, having it in the config patch will still work until December.

- We've improved the time to deploy an update by removing the need to restart the message queue every time we deploy. This has the side benefit of reducing the risk of running workspaces misbehaving during an update. For more information, see the related [issue](https://github.com/gitpod-io/gitpod/pull/11096).

A full list of changes can be found in [the release notes on GitHub](https://github.com/gitpod-io/gitpod/releases).
