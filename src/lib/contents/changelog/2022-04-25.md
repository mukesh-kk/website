---
title: Support for Bitbucket Server
excerpt: Gitpod now supports repositories hosted on Bitbucket Server v7.20 or later.
date: 2022-04-25
image: 2022-04-25.jpg
alt:
---

<script>
  import Contributors from "$lib/components/changelog/contributors.svelte";
</script>

Gitpod now works with repositories on your own instance of Bitbucket Server. To set this up, please follow our 2-step guide [in the documentation](/docs/configure/authentication/bitbucket-server).

For feedback, please use the dedicated [feedback issue](https://github.com/gitpod-io/gitpod/issues/9592) or [chat with us](https://www.gitpod.io/chat).

<p><Contributors usernames="AlexTugarev,corneliusludmann,jankeromnes,easyCZ,jldec" /></p>

### Fixes and improvements

- [#9438](https://github.com/gitpod-io/gitpod/pull/9438) - [ws-manager] fix a bug when opening workspace you would be signed out from git and not able to do git commands <Contributors usernames="csweichel,geropl,sagor999" />
- [#9493](https://github.com/gitpod-io/gitpod/pull/9493) - [ws-daemon] Check blkio throttle exists <Contributors usernames="Furisto,aledbf,csweichel,kylos101" />
- [#9488](https://github.com/gitpod-io/gitpod/pull/9488) - fix a dashboard bug where you might end up on a workspace without having access to it <Contributors usernames="easyCZ,geropl" />
- [#9135](https://github.com/gitpod-io/gitpod/pull/9135) - Connect to self-managed Bitbucket Server in Git Integration modal. <Contributors usernames="AlexTugarev,gtsiolis,jldec" />
- [#9460](https://github.com/gitpod-io/gitpod/pull/9460) - fix and improve validation of user environment variables <Contributors usernames="andrew-farries,geropl" />
- [#9455](https://github.com/gitpod-io/gitpod/pull/9455) - [kots]: add an installation status pod <Contributors usernames="MrSimonEmms,nandajavarma" />
- [#9462](https://github.com/gitpod-io/gitpod/pull/9462) - [server] Optimization: Map GitHub API repositories during pagination, not after <Contributors usernames="geropl,jankeromnes" />
- [#9458](https://github.com/gitpod-io/gitpod/pull/9458) - [kots]: move dropImageRepo config to when using local registry <Contributors usernames="MrSimonEmms,corneliusludmann" />
- [#9231](https://github.com/gitpod-io/gitpod/pull/9231) - Allow integrating with 'github.com' without a GitHub App <Contributors usernames="geropl,jankeromnes" />
- [#9445](https://github.com/gitpod-io/gitpod/pull/9445) - Allow to configure JB plugins on repo level per a product, i.e. specific for IntelliJ or GoLand. <Contributors usernames="akosyakov,andreafalzetti,filiptronicek,geropl" />
- [#9328](https://github.com/gitpod-io/gitpod/pull/9328) - [ws-daemon] Remove warning when cpu.stat does not exist <Contributors usernames="aledbf,csweichel" />
- [#9338](https://github.com/gitpod-io/gitpod/pull/9338) - [registry-facade] Do not log warning from local store already exist error <Contributors usernames="aledbf,csweichel" />
- [#9360](https://github.com/gitpod-io/gitpod/pull/9360) - [docker-up] Add docker-compose binary <Contributors usernames="Furisto,aledbf" />
- [#9366](https://github.com/gitpod-io/gitpod/pull/9366) - Automatically block users that are running blacklisted workloads <Contributors usernames="Furisto,atduarte,geropl,sagor999,utam0k" />
- [#9382](https://github.com/gitpod-io/gitpod/pull/9382) - Revert "[ws-daemon] Fix CPU limit annotation" <Contributors usernames="aledbf,sagor999" />
- [#9355](https://github.com/gitpod-io/gitpod/pull/9355) - [ws-manager] add metrics to track initialize and finalize of workspaces <Contributors usernames="jenting,sagor999,utam0k" />
- [#9358](https://github.com/gitpod-io/gitpod/pull/9358) - [ws-proxy] Do not allow ACME challenge to be processed by workspaces to ensure no one can register TLS for gitpod.io through letsencrypt <Contributors usernames="aledbf,sagor999" />
- [#9356](https://github.com/gitpod-io/gitpod/pull/9356) - [docker-up] Set the MTU using ceth0 value <Contributors usernames="MrSimonEmms,aledbf,csweichel,jenting,kylos101,sagor999,utam0k" />
- [#9309](https://github.com/gitpod-io/gitpod/pull/9309) - [ws-daemon] Only limit storage device classes <Contributors usernames="Furisto,aledbf,csweichel,utam0k" />
- [#9335](https://github.com/gitpod-io/gitpod/pull/9335) - Make image-builder available through ws-manager <Contributors usernames="MrSimonEmms,aledbf,corneliusludmann,csweichel,geropl,sagor999" />
- [#9390](https://github.com/gitpod-io/gitpod/pull/9390) - ws-daemon: align to decide if cgroup v2 to fix cgroup v2 with fuse <Contributors usernames="Furisto,csweichel,princerachit,sagor999,utam0k" />
- [#9428](https://github.com/gitpod-io/gitpod/pull/9428) - Add I/O limit plugin for cgroup v1 <Contributors usernames="aledbf,corneliusludmann,csweichel" />
- [#9437](https://github.com/gitpod-io/gitpod/pull/9437) - [ws-daemon] Refactor configuration of I/O limits <Contributors usernames="aledbf,csweichel" />
- [#9155](https://github.com/gitpod-io/gitpod/pull/9155) - [kots]: enable use of a local registry <Contributors usernames="MrSimonEmms,corneliusludmann,csweichel,geropl,mustard-mh,nandajavarma" />
- [#9427](https://github.com/gitpod-io/gitpod/pull/9427) - Allow workspace timeouts to be extended when a user has workspaces in different regions. <Contributors usernames="andrew-farries,geropl" />
- [#9446](https://github.com/gitpod-io/gitpod/pull/9446) - fixed a bug around email address rendering <Contributors usernames="easyCZ,geropl" />
- [#9443](https://github.com/gitpod-io/gitpod/pull/9443) - JetBrains IDEs now start with a terminal opened, displaying an introductory message about Gitpod CLI. <Contributors usernames="akosyakov,felladrin" />
- [#9385](https://github.com/gitpod-io/gitpod/pull/9385) - re-enables blocklisting of email domains <Contributors usernames="AlexTugarev,csweichel,geropl,jakobhero,jankeromnes" />
- [#9409](https://github.com/gitpod-io/gitpod/pull/9409) - block abusers based on email domain suffixes <Contributors usernames="AlexTugarev,geropl,jankeromnes" />
- [#9361](https://github.com/gitpod-io/gitpod/pull/9361) - [werft] Improve findFreeHostPorts speed <Contributors usernames="aledbf,kylos101,mads-hartmann" />
- [#9404](https://github.com/gitpod-io/gitpod/pull/9404) - Fixed a bug where IO limits were not applied to the workspace <Contributors usernames="Furisto,aledbf,csweichel" />
- [#9219](https://github.com/gitpod-io/gitpod/pull/9219) - Stop running prebuilds for projects that did not start a workspace in the last 10+ weeks <Contributors usernames="easyCZ,gtsiolis,jankeromnes" />
- [#9094](https://github.com/gitpod-io/gitpod/pull/9094) - [installer] Disable `definitely-gp` by default <Contributors usernames="MrSimonEmms,Pothulapati,geropl" />
- [#9381](https://github.com/gitpod-io/gitpod/pull/9381) - Update code to 1.66.2 <Contributors usernames="jeanp413,mustard-mh" />
- [#9367](https://github.com/gitpod-io/gitpod/pull/9367) - Update OpenSSH to v9.0 <Contributors usernames="aledbf,mustard-mh" />
