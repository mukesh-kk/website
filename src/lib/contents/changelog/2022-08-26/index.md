---
title: August Self-Hosted Release
excerpt: We've released a new version of Self-Hosted Gitpod.
date: 2022-08-26
image: 2022-08-26.jpg
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

#### Automatic backups

We've added the ability to back up your Gitpod application config (no workspace or database data is backed up!) via the KOTS Installation UI under the "snapshots" tab. You can even configure automatically scheduled backups. You can learn more in our [backup and restore guide](../docs/configure/self-hosted/latest/backup-restore).

#### Configure additional registry credentials to use (base) workspace images from private registries

You can now use workspace images that are stored in private registries different from the main registry configured for Gitpod in your [gitpod.yml](../docs/references/gitpod-yml) and as an [installation-wide default](../docs/configure/self-hosted/latest/advanced/default-workspace-image). This is useful when, for example, you want to pull private base images from one registry and then store the built images in another. For more information visit the [relevant guide](../docs/configure/self-hosted/latest/advanced/private-registries).

### Breaking changes

- [11954](https://github.com/gitpod-io/gitpod/pull/11954): remove custom labels from the pod selector labels. This removes this [limitation](https://www.gitpod.io/docs/configure/self-hosted/latest/advanced/customization#limitations) so this is a long-term improvement. The impact of this should be handled transparently for you by the KOTS installer.
- [12336](https://github.com/gitpod-io/gitpod/pull/12336): Removal of PodSecurityPolicies. These were deprecated from Kubernetes 1.21 and removed from 1.25. This allows Gitpod to run on Kubernetes 1.25+, which is scheduled for imminent release. If you have PodSecurityPolicies enabled in your cluster, we suggest you disable them as soon as possible.

Please refer to the [2022.08 upgrade guide](../docs/configure/self-hosted/latest/upgrade-guides#202208) in the documentation for details.

### Fixes and improvements

A full list of changes can be found in [the release notes on GitHub](https://github.com/gitpod-io/gitpod/releases).
