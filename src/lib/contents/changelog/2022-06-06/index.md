---
title: Gitpod dashboard improvements
excerpt: Always access your workspaces with a single click
date: 2022-06-06
image: 2022-06-06.jpg
alt:
---

<script>
  import Contributors from "$lib/components/changelog/contributors.svelte";
  import Badge from "$lib/components/changelog/badge.svelte"
</script>

We have made some design changes to the navbar at the top of the [Gitpod dashboard](https://gitpod.io/workspaces). It now includes an always-visible link to your workspaces on the right, and offers better color accessibility.

The team/personal selector at the top left takes you directly to your own projects, or to the projects for the selected team. If you would prefer the team/personal selection to be preserved when you visit the workspaces list, please upvote Gitpod [issue #10496](https://github.com/gitpod-io/gitpod/issues/10496).

Always ready to code 🚀

<p><Contributors usernames="gtsiolis,AlexTugarev" /></p>

### Roadmap updates

<div class="mt-medium">

**JetBrains** - Roadmap issue: [#7956](https://github.com/gitpod-io/gitpod/issues/7956) <Badge text="beta" variant="orange" class="ml-1.5" />

- [#10107](https://github.com/gitpod-io/gitpod/pull/10107) - [JetBrains] Show notification when port becomes available <Contributors usernames="akosyakov,andreafalzetti,mustard-mh" />

</div>
<div class="mt-medium">

**Dotfiles** - Roadmap issue: [#5198](https://github.com/gitpod-io/gitpod/issues/5198)

- [#10398](https://github.com/gitpod-io/gitpod/pull/10398) - Support for dotfiles is now generally available <Contributors usernames="easyCZ,gtsiolis,loujaybee" />

</div>
<div class="mt-medium">

**GP CLI**

- [#10388](https://github.com/gitpod-io/gitpod/pull/10388) - Gitpod CLI has a new command to list the ports from the workspace: gp ports list <Contributors usernames="andreafalzetti,felladrin,mustard-mh" />

</div>
<div class="mt-medium">

**SSH copy/paste** - Roadmap issue: [#7713](https://github.com/gitpod-io/gitpod/issues/7713)

- [#10291](https://github.com/gitpod-io/gitpod/pull/10291) - SSH copy/paste connections now support remote port forward <Contributors usernames="akosyakov,iQQBot,mustard-mh,sagor999" />

</div>

### Fixes and improvements

- [#10469](https://github.com/gitpod-io/gitpod/pull/10469) - Check docker-compose download <Contributors usernames="aledbf,sagor999" />
- [#10458](https://github.com/gitpod-io/gitpod/pull/10458) - Update docker compose to v2.6.0 <Contributors usernames="aledbf,kylos101,sagor999" />
- [#10442](https://github.com/gitpod-io/gitpod/pull/10442) - Revert "[baseserver] Change default metrics port to 9502 to not clash with kube-rbac-proxy" <Contributors usernames="aledbf,kylos101" />
- [#10414](https://github.com/gitpod-io/gitpod/pull/10414) - Improve workspace failure error messages <Contributors usernames="csweichel,sagor999" />
- [#10413](https://github.com/gitpod-io/gitpod/pull/10413) - [supervisor] improve error message around user group and uid <Contributors usernames="iQQBot,sagor999" />
- [#10395](https://github.com/gitpod-io/gitpod/pull/10395) - ws-daemon: Apply the xfs limit in stages. <Contributors usernames="jenting,kylos101,utam0k" />
- [#10394](https://github.com/gitpod-io/gitpod/pull/10394) - dashboard: single quote connect via ssh connection string <Contributors usernames="easyCZ,ghuntley" />
- [#10229](https://github.com/gitpod-io/gitpod/pull/10229) - Change `/workspace` files default permissions from 0750 to 0755 <Contributors usernames="kylos101,mustard-mh,sagor999" />
- [#10377](https://github.com/gitpod-io/gitpod/pull/10377) - Fixed an issue on JetBrains Gateway, preventing the workspace list from being displayed when a workspace had been created from a detached commit instead of a branch. <Contributors usernames="felladrin,geropl,mustard-mh" />
- [#10346](https://github.com/gitpod-io/gitpod/pull/10346) - [registry-facade] Return content directly from IPFS <Contributors usernames="aledbf,csweichel" />
- [#10356](https://github.com/gitpod-io/gitpod/pull/10356) - Reduce cpu and memory consumption of agent-smith <Contributors usernames="Furisto,utam0k" />
- [#9475](https://github.com/gitpod-io/gitpod/pull/9475) - [experimental] add support for backing up and restoring workspace's persistent volume claim via snapshot volume. <Contributors usernames="aledbf,corneliusludmann,easyCZ,jenting,sagor999" />
- [#10071](https://github.com/gitpod-io/gitpod/pull/10071) - Feedback form under error messages on login and starting workspaces. <Contributors usernames="andrew-farries,gtsiolis,jldec,laushinka" />
- [#9491](https://github.com/gitpod-io/gitpod/pull/9491) - Correctly enforce the parallel workspace limit <Contributors usernames="AlexTugarev,akosyakov,andrew-farries,csweichel,geropl,meysholdt" />
- [#10297](https://github.com/gitpod-io/gitpod/pull/10297) - Feedback form only shows for SaaS gitpod-io users. <Contributors usernames="easyCZ,laushinka" />
- [#10343](https://github.com/gitpod-io/gitpod/pull/10343) - [installer] Command line flag to configure strict config parsing <Contributors usernames="corneliusludmann,easyCZ,geropl" />
- [#10364](https://github.com/gitpod-io/gitpod/pull/10364) - [content-service] Improve restoration of extended attributes <Contributors usernames="aledbf,utam0k" />
- [#10290](https://github.com/gitpod-io/gitpod/pull/10290) - [experimental] add a metric to track volume snapshot time <Contributors usernames="Furisto,jenting,sagor999" />
- [#10177](https://github.com/gitpod-io/gitpod/pull/10177) - JetBrains Gateway: The "Connect" button now gets disabled while a JetBrains Client is connected to the workspace. <Contributors usernames="akosyakov,felladrin,iQQBot,yaohui-wyh" />
- [#10280](https://github.com/gitpod-io/gitpod/pull/10280) - [initializer] Fix issue with publicly signed SCM's on a self-signed Gitpod instance <Contributors usernames="Pothulapati,corneliusludmann,csweichel" />
