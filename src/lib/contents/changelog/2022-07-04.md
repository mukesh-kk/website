---
title: Auto-cancel prebuilds on outdated commits
excerpt: Auto-cancel pending or running prebuilds on the same branch when new commits are pushed.
date: 2022-07-04
image: 2022-07-04.jpg
alt:
---

<script>
  import Contributors from "$lib/components/changelog/contributors.svelte";
  import Badge from "$lib/components/changelog/badge.svelte"
</script>

During development, sometimes a number of commits occur within a short period of time, which can trigger and queue multiple [prebuilds](https://www.gitpod.io/docs/configure/projects/prebuilds) for the same branch.

Gitpod will now auto-cancel pending or running prebuilds on the same branch when new commits are pushed, efficiently processing the queue and making sure workspaces always use prebuilds with the latest commits.

Auto-cancellation has been enabled by default for all [projects](https://www.gitpod.io/changelog/introducing-teams-and-projects), but you can disable this behavior in project settings.

<p><Contributors usernames="geropl,gtsiolis,jankeromnes,svenefftinge" /></p>

### Roadmap updates

<div class="mt-medium">

**JetBrains** - Roadmap issue: [#7956](https://github.com/gitpod-io/gitpod/issues/7956) <Badge text="beta" variant="orange" class="ml-1.5" />

- [#10986](https://github.com/gitpod-io/gitpod/pull/10986) - Ports opened by tasks defined in .gitpod.yml are now automatically forwarded in JetBrains IDEs. <Contributors usernames="akosyakov,felladrin" />
- [#10974](https://github.com/gitpod-io/gitpod/pull/10974) - Respect user settings (proxies, certificates) of JetBrains Gateway while connecting to Gitpod API. <Contributors usernames="akosyakov,felladrin" />

</div>

### Fixes and improvements

- [#11083](https://github.com/gitpod-io/gitpod/pull/11083) - Fix the start-workspace flow for when a prebuild got auto-cancelled <Contributors usernames="andrew-farries,geropl,svenefftinge" />
- [#11074](https://github.com/gitpod-io/gitpod/pull/11074) - Fix prebuild permissions <Contributors usernames="andrew-farries,easyCZ,geropl" />
- [#11072](https://github.com/gitpod-io/gitpod/pull/11072) - Resolve performance degradation issue by changing ws-proxy to not use the target host when serving workspace port route <Contributors usernames="iQQBot,jenting" />
- [#11026](https://github.com/gitpod-io/gitpod/pull/11026) - Improve reliability of log streaming for image builds and prebuilds <Contributors usernames="geropl,jldec" />
- [#10836](https://github.com/gitpod-io/gitpod/pull/10836) - Provide endpoint that allows retrieving information about the workspace from within the workspace <Contributors usernames="Furisto,MrSimonEmms,akosyakov,aledbf,geropl,mustard-mh,utam0k" />
- [#10696](https://github.com/gitpod-io/gitpod/pull/10696) - Prebuild status is shown under the logs when starting a workspace. <Contributors usernames="geropl,gtsiolis,jankeromnes,jldec,laushinka" />
- [#10962](https://github.com/gitpod-io/gitpod/pull/10962) - Automatically cancel outdated prebuilds (i.e. new commits are pushed on a branch). This behavior can be disabled in the project's settings. <Contributors usernames="geropl,gtsiolis,jankeromnes,svenefftinge" />
- [#10952](https://github.com/gitpod-io/gitpod/pull/10952) - Update docker compose to v2.6.1 <Contributors usernames="aledbf,utam0k" />
- [#10882](https://github.com/gitpod-io/gitpod/pull/10882), [#10727](https://github.com/gitpod-io/gitpod/pull/10727) - Fix prebuilds stuck in `queued` indefinitely <Contributors usernames="andrew-farries,geropl,easyCZ" />
