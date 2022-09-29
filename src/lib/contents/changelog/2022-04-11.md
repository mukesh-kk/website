---
title: SSH directly into workspaces
excerpt: As of today, in Gitpod you can now get access to a Gitpod workspace directly via SSH with a one-liner copy/paste from the Gitpod dashboard.
date: 2022-04-11
image: 2022-04-11.jpg
alt:
---

<script>
  import Contributors from "$lib/components/changelog/contributors.svelte";
</script>

As of today, in Gitpod you can now get access to a Gitpod workspace directly via SSH with a one-liner copy/paste from the Gitpod dashboard. All you have to do is visit the Gitpod dashboard, click the more actions menu at the right-hand side of your workspace list, copy/paste the SSH command into a terminal, and voila!

Choice and flexibility for developers to choose the right tool for the job is essential. Currently, for editing your code with Gitpod, you can use VS Code in the browser, VS Code on desktop, and using JetBrains IDE’s via JetBrains Gateway. Adding copy/paste SSH support makes it easier to work directly in your terminal, or for those times you need to hop into a Gitpod workspace. To use this feature, please follow our guide [our documentation](/docs/references/ides-and-editors/command-line)

<p><Contributors usernames="akosyakov,csweichel,geropl,gtsiolis,iQQBot,loujaybee,mustard-mh" /></p>

### Fixes and improvements

- [#9007](https://github.com/gitpod-io/gitpod/pull/9007) - Ensure uncommitted changes are displayed in dashboard when workspace was restored from backup <Contributors usernames="AlexTugarev,Furisto,aledbf,csweichel,easyCZ,geropl,sagor999" />
- [#9212](https://github.com/gitpod-io/gitpod/pull/9212) - Use veth instead of slirp4netns without affecting the supervisor <Contributors usernames="aledbf,iQQBot,princerachit,utam0k" />
- [#9082](https://github.com/gitpod-io/gitpod/pull/9082) - Add custom CA cert support to Gitpod services <Contributors usernames="corneliusludmann,csweichel,easyCZ,iamulya,princerachit" />
- [#9185](https://github.com/gitpod-io/gitpod/pull/9185) - Update code to 1.66.1 <Contributors usernames="jeanp413,mustard-mh" />
- [#8955](https://github.com/gitpod-io/gitpod/pull/8955) - Use a pair of veths instead of slirp4netns <Contributors usernames="akosyakov,aledbf,csweichel,iQQBot,kylos101,princerachit,utam0k" />
- [#9003](https://github.com/gitpod-io/gitpod/pull/9003) - upport direct connect workspace via ssh command <Contributors usernames="akosyakov,csweichel,geropl,gtsiolis,iQQBot,loujaybee,mustard-mh" />
- [#8783](https://github.com/gitpod-io/gitpod/pull/8783) - Display warning message when users choose latest IDEUpdate IDE choose preferences UI <Contributors usernames="akosyakov,andreafalzetti,easyCZ,geropl,gtsiolis,iQQBot,jeanp413,loujaybee,mustard-mh" />
- [#9051](https://github.com/gitpod-io/gitpod/pull/9051) - [dashboard] Implement a PaymentContext and use it to hide payment features when payment is disabled <Contributors usernames="AlexTugarev,geropl,jankeromnes" />
- [#9152](https://github.com/gitpod-io/gitpod/pull/9152) - Transformer for MySQL BIGINT type to JS number <Contributors usernames="easyCZ,geropl" />
- [#8630](https://github.com/gitpod-io/gitpod/pull/8630) - Allow to configure JetBrains plugins in .gitpod.yml <Contributors usernames="akosyakov,felladrin,geropl,loujaybee,nandajavarma" />
- [#8841](https://github.com/gitpod-io/gitpod/pull/8841) - Prebuild Detail view buttons are based on Prebuild status, instead of WorkspaceInstance <Contributors usernames="easyCZ,geropl" />
- [#8970](https://github.com/gitpod-io/gitpod/pull/8970) - [dashboard] It's now even easier to contribute: set a couple variables once, contribute for as long as you like. <Contributors usernames="geropl,iQQBot,laushinka,mustard-mh,trumbitta" />
- [#9108](https://github.com/gitpod-io/gitpod/pull/9108) - Bitbucket Server: implements token validation for Git operations. <Contributors usernames="AlexTugarev,geropl,jldec" />
- [#9191](https://github.com/gitpod-io/gitpod/pull/9191) - [ws-manager-bridge] Skip stale prebuild events. <Contributors usernames="easyCZ,geropl" />
- [#9218](https://github.com/gitpod-io/gitpod/pull/9218) - installer: make shortname configurable <Contributors usernames="MrSimonEmms,andrew-farries,easyCZ,geropl" />
- [#9233](https://github.com/gitpod-io/gitpod/pull/9233) - [ws-manager-bridge] Fix statusVersion comparison. <Contributors usernames="easyCZ,jankeromnes" />
- [#9200](https://github.com/gitpod-io/gitpod/pull/9200) - [registry-facade] Fix IPFS/Redis validation <Contributors usernames="akosyakov,aledbf,csweichel,geropl,nandajavarma,utam0k" />
- [#9186](https://github.com/gitpod-io/gitpod/pull/9186) - [image-builder-bob] Update buildkit to v0.10.1 <Contributors usernames="aledbf,sagor999,utam0k" />
- [#9162](https://github.com/gitpod-io/gitpod/pull/9162) - [registry-facade] Revert removal of DisableKeepAlives[registry-facade] Check redis connection on start[registry-facade] Separate Redis manifest cache from IPFS[registry-facade] Check if the keys exist and use MULTI[registry-facade] Use sync.Pool as bufferInclude error in probe log <Contributors usernames="aledbf,corneliusludmann,csweichel" />
- [#9176](https://github.com/gitpod-io/gitpod/pull/9176) - [ws-proxy] Deny HTTP ACME challenges <Contributors usernames="aledbf,csweichel" />
- [#8576](https://github.com/gitpod-io/gitpod/pull/8576) - Allow setting custom workspace timeouts in the Gitpod Installer for self-hosted installations. <Contributors usernames="Furisto,MrSimonEmms,akosyakov,corneliusludmann,jankeromnes,mads-hartmann,princerachit" />
- [#9004](https://github.com/gitpod-io/gitpod/pull/9004) - Fixed one frame running phase when starting workspaceFixed IDE options display incorrectly when restarting the workspaceFixed stopped workspace does not work again if it started in another place <Contributors usernames="akosyakov,andreafalzetti,geropl,mustard-mh" />
- [#9159](https://github.com/gitpod-io/gitpod/pull/9159) - [kots]: update the logo <Contributors usernames="MrSimonEmms,corneliusludmann,gtsiolis" />
- [#9115](https://github.com/gitpod-io/gitpod/pull/9115) - Store WorkspaceInstance.status_version in d_b_prebuild_workspace and count prebuild stale events <Contributors usernames="andrew-farries,easyCZ" />
- [#9121](https://github.com/gitpod-io/gitpod/pull/9121) - [gitpod-db] Don't consider garbage-collected prebuilds as potential bases for incremental prebuilds <Contributors usernames="geropl,jankeromnes" />
- [#8831](https://github.com/gitpod-io/gitpod/pull/8831) - Remove Prebuild action and log view from Project Settings view <Contributors usernames="AlexTugarev,easyCZ,gtsiolis,jldec" />
- [#9116](https://github.com/gitpod-io/gitpod/pull/9116) - ws-manager-bridge skips stale prebuild events <Contributors usernames="AlexTugarev,easyCZ" />
- [#9081](https://github.com/gitpod-io/gitpod/pull/9081) - Add custom CA cert support to workspaces <Contributors usernames="csweichel,sagor999" />
- [#9106](https://github.com/gitpod-io/gitpod/pull/9106) - [registry-facade] Configure credentials for Redis Sentinel <Contributors usernames="aledbf,csweichel" />
- [#9125](https://github.com/gitpod-io/gitpod/pull/9125) - Added requirements to KOTS installation <Contributors usernames="MrSimonEmms,lucasvaltl" />
- [#9083](https://github.com/gitpod-io/gitpod/pull/9083) - [kots]: add a kernel version check to the preflights <Contributors usernames="MrSimonEmms,corneliusludmann" />
- [#9046](https://github.com/gitpod-io/gitpod/pull/9046) - Fixes missing login providers for Gitpod Self-Hosted. <Contributors usernames="AlexTugarev,MrSimonEmms,geropl" />
- [#9052](https://github.com/gitpod-io/gitpod/pull/9052) - [dashboard] Fix Settings menu colors in Dark theme <Contributors usernames="AlexTugarev,jankeromnes" />
- [#9045](https://github.com/gitpod-io/gitpod/pull/9045) - [dashboard] Remove prebuild error message from prebuild log view <Contributors usernames="AlexTugarev,easyCZ,jankeromnes" />
- [#8896](https://github.com/gitpod-io/gitpod/pull/8896) - Adding support for Projects and Prebuilds for Bitbucket Server. <Contributors usernames="AlexTugarev,csweichel,easyCZ,geropl,jankeromnes,jldec" />
- [#9109](https://github.com/gitpod-io/gitpod/pull/9109) - Fixes incremental prebuilds by choosing the right prebuild base. <Contributors usernames="jankeromnes,laushinka" />
- [#8824](https://github.com/gitpod-io/gitpod/pull/8824) - [server] For GitLab projects without an owner avatar, fall back to the namespace avatar, or generate the default GitLab avatar <Contributors usernames="andrew-farries,easyCZ,gtsiolis,jankeromnes" />
- [#8805](https://github.com/gitpod-io/gitpod/pull/8805) - Dashboard reports prebuild status consistently between list view and detail view. <Contributors usernames="AlexTugarev,andrew-farries,easyCZ,gtsiolis,jankeromnes" />
- [#9104](https://github.com/gitpod-io/gitpod/pull/9104) - [installer] Fix registry facade env variables for IPFS and redis <Contributors usernames="aledbf,princerachit" />
- [#8769](https://github.com/gitpod-io/gitpod/pull/8769) - Enable the use of fuse device on cgroup v2 systems <Contributors usernames="Furisto,MrSimonEmms,kylos101,utam0k" />
- [#9005](https://github.com/gitpod-io/gitpod/pull/9005) - Experimental IPFS support for cluster-local image caching <Contributors usernames="Furisto,MrSimonEmms,aledbf,csweichel,nandajavarma,princerachit,sagor999,utam0k" />
- [#9063](https://github.com/gitpod-io/gitpod/pull/9063) - Improve workspace startup time through improved manifest assembly <Contributors usernames="aledbf,csweichel" />
- [#9039](https://github.com/gitpod-io/gitpod/pull/9039) - Removed leftover workspace size limit which could prevent backups from being created. <Contributors usernames="aledbf,csweichel" />
- [#9060](https://github.com/gitpod-io/gitpod/pull/9060) - [kots]: add distribution check to the KOTS preflights <Contributors usernames="MrSimonEmms,nandajavarma" />
- [#8962](https://github.com/gitpod-io/gitpod/pull/8962) - [KOTS]: extract images from the Installer and put in the additionalImages array <Contributors usernames="MrSimonEmms,Pothulapati,akosyakov" />
- [#8940](https://github.com/gitpod-io/gitpod/pull/8940) - Add workspace branch & creation timespan column for Gitpod Jetbrains Gateway plugin workspace panel <Contributors usernames="Sunset17,akosyakov,felladrin,gtsiolis,iQQBot,meysholdt,mustard-mh,yaohui-wyh" />
- [#8941](https://github.com/gitpod-io/gitpod/pull/8941) - [image-bob-builder] Add support for stargz <Contributors usernames="Furisto,aledbf" />
- [#8917](https://github.com/gitpod-io/gitpod/pull/8917) - JetBrains Gateway EAP version is now supported. <Contributors usernames="akosyakov,felladrin" />
