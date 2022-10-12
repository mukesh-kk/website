---
title: Improved workspace startup times
excerpt: A much improved process to how we clone git repositories leads to faster workspace startups.
date: 2021-11-12
image: 2021-11-12.jpg
alt:
---

<script>
  import Contributors from "$lib/components/changelog/contributors.svelte";
</script>

Speeeed 🚀! When you start a new workspace, we changed how we clone your repository. Going forward, we have a two step approach:

1. Clone the most recent commit only (with the `depth=1` git flag)
1. About ten seconds later, we start to fetch 20 additional commits

Thanks to this, we let you start your work sooner while we fetch a few more commits. You can find the details of this change in the [#6464](https://github.com/gitpod-io/gitpod/pull/6464) pull request.

Please let us know what you think via Twitter [@gitpod](https://twitter.com/gitpod) or chat with us at https://www.gitpod.io/chat.

<p><Contributors usernames="JanKoehnlein,akosyakov,aledbf,corneliusludmann,csweichel,geropl,iQQBot,jeanp413,svenefftinge" /></p>

### Fixes and improvements

- [#6582](https://github.com/gitpod-io/gitpod/pull/6582) - Update VS Code Web to 1.62.0 <Contributors usernames="corneliusludmann,jeanp413" />
- [#6462](https://github.com/gitpod-io/gitpod/pull/6462) - [ws-proxy] Decouple ws-proxy from ws-manager <Contributors usernames="JanKoehnlein,akosyakov,aledbf,corneliusludmann,csweichel,geropl" />
- [#6546](https://github.com/gitpod-io/gitpod/pull/6546) - Prebuilds can run for GitLab subgroup projects. <Contributors usernames="JanKoehnlein,gtsiolis,jldec,laushinka,svenefftinge" />
- [#6577](https://github.com/gitpod-io/gitpod/pull/6577) - Preserve team scope in dashboard <Contributors usernames="gtsiolis,laushinka" />
- [#6505](https://github.com/gitpod-io/gitpod/pull/6505) - Open up JetBrains desktop IDE feature (BETA) for all users <Contributors usernames="corneliusludmann,laushinka" />
- [#6636](https://github.com/gitpod-io/gitpod/pull/6636) - GCP object storage bugfixes <Contributors usernames="MrSimonEmms,csweichel" />
- [#6621](https://github.com/gitpod-io/gitpod/pull/6621) - Allow use of external container registry <Contributors usernames="MrSimonEmms,csweichel" />
- [#6606](https://github.com/gitpod-io/gitpod/pull/6606) - Add support for GCP CloudSQL <Contributors usernames="MrSimonEmms,csweichel" />
- [#6591](https://github.com/gitpod-io/gitpod/pull/6591) - Create config map to allow uninstallation of app <Contributors usernames="MrSimonEmms,csweichel" />
- [#6144](https://github.com/gitpod-io/gitpod/pull/6144) - make "snapshots" more reliable <Contributors usernames="JanKoehnlein,akosyakov,csweichel,geropl,gtsiolis,shaal" />
- [#6376](https://github.com/gitpod-io/gitpod/pull/6376) - New GitLab projects will have a slugified Project url <Contributors usernames="AlexTugarev,JanKoehnlein,gtsiolis,jldec,laushinka" />
- [#6584](https://github.com/gitpod-io/gitpod/pull/6584) - allow img-builder ingress from server <Contributors usernames="MrSimonEmms,csweichel" />
