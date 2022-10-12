---
title: Grouping of inactive workspaces
excerpt: Inactive workspaces are now grouped below the active workspaces and also allow users to clean up (mass delete) all inactive workspaces
date: 2022-06-20
image: 2022-06-20.jpg
alt:
---

<script>
  import Contributors from "$lib/components/changelog/contributors.svelte";
</script>

Did you notice any changes in your workspaces list? Inactive workspaces are now grouped below the active workspaces and also allow users to clean up (mass delete) all inactive workspaces, [see relevant pull request](https://github.com/gitpod-io/gitpod/pull/10450)

Feedback is welcome, feel free to raise an [issue](https://github.com/gitpod-io/gitpod/issues/new?assignees=&labels=bug&template=bug_report.yml) or [chat with us](https://www.gitpod.io/chat).

<Contributors usernames="david-bakin,easyCZ,gtsiolis,svenefftinge" />

### Roadmap updates

<div class="mt-medium">

**Command Line Interface (`gp`)**

- [#10570](https://github.com/gitpod-io/gitpod/pull/10570) - Added a new command to gitpod-cli: `gp top` which displays workspace resources (CPU/Memory usage) <Contributors usernames="akosyakov,andreafalzetti,filiptronicek" />
- [#10538](https://github.com/gitpod-io/gitpod/pull/10538) - Added aliases for `gp port-forward` and `gp await-port` to `gp ports forward` and `gp ports await` <Contributors usernames="CuriousCorrelation,akosyakov,andreafalzetti,iQQBot,loujaybee,mustard-mh" />
- [#10619](https://github.com/gitpod-io/gitpod/pull/10619) - Add command `gp timeout extend` to extend timeout of current workspace <Contributors usernames="akosyakov,geropl,iQQBot,mustard-mh" />

</div>

### Fixes and improvements

- [#10450](https://github.com/gitpod-io/gitpod/pull/10450) - Added action to delete all inactive workspaces <Contributors usernames="david-bakin,easyCZ,gtsiolis,svenefftinge" />
- [#10704](https://github.com/gitpod-io/gitpod/pull/10704) - SSH access no longer requires a private SSH key (removing forced password prompt) <Contributors usernames="MrSimonEmms,akosyakov,aledbf,iQQBot" />
- [#10676](https://github.com/gitpod-io/gitpod/pull/10676) - Added action to delete all inactive workspaces <Contributors usernames="AlexTugarev,gtsiolis,svenefftinge" />
- [#10357](https://github.com/gitpod-io/gitpod/pull/10357) - Fix hanging "Prebuild in Progress" page. <Contributors usernames="AlexTugarev,easyCZ,geropl" />
- [#10175](https://github.com/gitpod-io/gitpod/pull/10175) - Allow customize VMOptions for JetBrains backend server, by setting `INTELLIJ_VMOPTIONS` (also GoLand/PyCharm/PhpStorm) environment variable <Contributors usernames="akosyakov,iQQBot,yaohui-wyh" />
- [#10562](https://github.com/gitpod-io/gitpod/pull/10562) - Add `GITPOD_WORKSPACE_CLASS` environment variable to workspaces to allow easier identification of the workspace class <Contributors usernames="Furisto,sagor999" />
- [#10352](https://github.com/gitpod-io/gitpod/pull/10352) - Fix: Don't skip prebuilds if .gitpod.yml has a 'before' task but no 'init' task <Contributors usernames="jankeromnes,jldec" />
