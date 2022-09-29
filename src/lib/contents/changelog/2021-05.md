---
title: Faster, incremental prebuilds
excerpt: With prebuilds, Gitpod continuously builds your developer environment so that it is ready-to-code by the time you start a new workspace. So far, Gitpod started each prebuild from a clean slate. With this latest release, Gitpod now supports incremental prebuilds.
date: 2021-05-31
image: 2021-05-31.jpg
alt: Incremental prebuilds
---

<script>
  import Contributors from "$lib/components/changelog/contributors.svelte";
</script>

With [prebuilds](/docs/configure/projects/prebuilds), Gitpod continuously builds your developer environment so that it is ready-to-code by the time you start a new workspace.

So far, Gitpod started each prebuild from a clean slate. With this latest release, Gitpod now supports incremental prebuilds, which means Gitpod will try to re-use a prebuild from an earlier commit in order to create new prebuilds faster. In short, it now takes less time for your prebuild to be ready after a new commit is pushed to your Git provider.

**Note**: This is a controlled feature release so that we can measure the performance impact on projects. There is nothing you need to do other than wait and at some point experience quicker prebuild times 🚀.

### Fixes and improvements

- [#3995](https://github.com/gitpod-io/gitpod/pull/3995) - Implement new Self-Hosted setup flow.
- [#4170](https://github.com/gitpod-io/gitpod/pull/4170) - Hide “stopping” & unpinned workspaces from “Active” in the dashboard.
- [#4118](https://github.com/gitpod-io/gitpod/pull/4118) - Fix Cross Origin Websocket Access (credit: [Joern Schneeweisz](https://gitlab.com/joernchen) from the GitLab Security Research Team).

<p><Contributors usernames="jankeromnes,svenefftinge,csweichel,AlexTugarev,gtsiolis,geropl" /></p>
