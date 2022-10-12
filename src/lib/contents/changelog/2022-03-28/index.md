---
title: docker run --privileged
excerpt: You can now run privileged containers in Gitpod!
date: 2022-03-28
image: 2022-03-28.jpg
alt:
---

<script>
  import Contributors from "$lib/components/changelog/contributors.svelte";
</script>

You can now run privileged containers in Gitpod!

```shell
# example
docker run --privileged -it busybox sh
```

Prior to [the fix](https://github.com/gitpod-io/gitpod/pull/8827), users were getting [an error](https://github.com/gitpod-io/gitpod/issues/2459), and it prevented them from running privileged workloads.

The host file system, in this case, is your Gitpod workspace. Don't worry, it's ephemeral!

<p><Contributors usernames="Furisto,utam0k" /></p>

### Fixes and improvements

- [#8459](https://github.com/gitpod-io/gitpod/pull/8459) - Made the `gitpod.io/cpuLimit` annotation work again <Contributors usernames="Furisto,csweichel,iQQBot,princerachit,sagor999" />
- [#8918](https://github.com/gitpod-io/gitpod/pull/8918) - [ws-proxy] Configure kube-rbac <Contributors usernames="aledbf,princerachit" />
- [#8845](https://github.com/gitpod-io/gitpod/pull/8845) - Update buildkit to v0.10.0 <Contributors usernames="MrSimonEmms,aledbf,csweichel,kylos101,princerachit" />
- [#8941](https://github.com/gitpod-io/gitpod/pull/8941) - [image-bob-builder] Add support for stargz <Contributors usernames="Furisto,aledbf" />
- [#8878](https://github.com/gitpod-io/gitpod/pull/8878) - fix findPrebuildsWithWorkpace query <Contributors usernames="AlexTugarev,geropl" />
- [#8875](https://github.com/gitpod-io/gitpod/pull/8875) - Remove truncation and overflow team invitation URL <Contributors usernames="andrew-farries,gtsiolis" />
- [#8772](https://github.com/gitpod-io/gitpod/pull/8772) - Update team deletion confirmation modal <Contributors usernames="easyCZ,gtsiolis" />
- [#8890](https://github.com/gitpod-io/gitpod/pull/8890) - Added a new root cmd to Gitpod CLI. The tasks cmd allows listing tasks and attaching to them. <Contributors usernames="andreafalzetti,felladrin" />
- [#8914](https://github.com/gitpod-io/gitpod/pull/8914) - Add sudo permission to custom images, force NOPASSWD <Contributors usernames="iQQBot,mustard-mh" />
- [#8867](https://github.com/gitpod-io/gitpod/pull/8867) - [kots]: configure werft build command <Contributors usernames="MrSimonEmms,Pothulapati,corneliusludmann" />
- [#8683](https://github.com/gitpod-io/gitpod/pull/8683) - Added first draft of a public API <Contributors usernames="AlexTugarev,akosyakov,aledbf,csweichel,easyCZ,geropl,jankeromnes,svenefftinge" />
- [#8857](https://github.com/gitpod-io/gitpod/pull/8857) - [KOTS]: add recommended preflights <Contributors usernames="MrSimonEmms,Pothulapati,nandajavarma" />
- [#8892](https://github.com/gitpod-io/gitpod/pull/8892) - [kots]: escape golang template variables for Helm resources <Contributors usernames="MrSimonEmms,Pothulapati" />
- [#8844](https://github.com/gitpod-io/gitpod/pull/8844) - [kots] Add a pre-flight check for `cert-manager <Contributors usernames="MrSimonEmms,Pothulapati" />
- [#8835](https://github.com/gitpod-io/gitpod/pull/8835) - Rerunning prebuilds direct to the prebuild logs view, and rerunning is not allowed from the /prebuilds page. <Contributors usernames="gtsiolis,jldec,laushinka" />
- [#8821](https://github.com/gitpod-io/gitpod/pull/8821) - fix missing index on Workspace (id, deleted) <Contributors usernames="easyCZ,geropl" />
- [#8825](https://github.com/gitpod-io/gitpod/pull/8825) - [server] Improve GitHub Enterprise avatars handling <Contributors usernames="gtsiolis,jankeromnes,jldec" />
- [#8854](https://github.com/gitpod-io/gitpod/pull/8854) - fix broken image builds <Contributors usernames="AlexTugarev,geropl" />
- [#8858](https://github.com/gitpod-io/gitpod/pull/8858) - [gitpod-db] add index on `workspaceDB.Type` Column <Contributors usernames="Pothulapati,geropl" />
- [#8871](https://github.com/gitpod-io/gitpod/pull/8871) - [kots]: remove wait-for-jobs <Contributors usernames="MrSimonEmms,nandajavarma" />
- [#8870](https://github.com/gitpod-io/gitpod/pull/8870) - [kots]: remove GCP DNS resolver <Contributors usernames="MrSimonEmms,nandajavarma" />
- [#8827](https://github.com/gitpod-io/gitpod/pull/8827) - Allow use of the --privileged flag with docker. <Contributors usernames="Furisto,kylos101,utam0k" />
- [#8837](https://github.com/gitpod-io/gitpod/pull/8837) - [installer]: allow for minified config YAML <Contributors usernames="MrSimonEmms,nandajavarma" />
- [#8785](https://github.com/gitpod-io/gitpod/pull/8785) - [kots] Remove `cert-manager` from the Gitpod package <Contributors usernames="MrSimonEmms,Pothulapati" />
- [#8808](https://github.com/gitpod-io/gitpod/pull/8808) - [loadgen] Update benchmark images <Contributors usernames="aledbf,kylos101" />
- [#8742](https://github.com/gitpod-io/gitpod/pull/8742) - Enable egress metrics for agent-smith <Contributors usernames="Furisto,kylos101,princerachit" />
- [#8822](https://github.com/gitpod-io/gitpod/pull/8822) - [kots]: removed the cert-manager issuers <Contributors usernames="MrSimonEmms,Pothulapati,corneliusludmann" />
- [#8491](https://github.com/gitpod-io/gitpod/pull/8491) - [kots]: use Helm for the Installer job <Contributors usernames="MrSimonEmms,Pothulapati,corneliusludmann,csweichel,geropl" />
- [#8721](https://github.com/gitpod-io/gitpod/pull/8721) - Document ClusterService rpcs and messages <Contributors usernames="easyCZ,geropl" />
- [#8699](https://github.com/gitpod-io/gitpod/pull/8699) - Clarified wording of "timeout" feature on the settings/plans page <Contributors usernames="gtsiolis,jankeromnes,lucasvaltl" />
- [#8718](https://github.com/gitpod-io/gitpod/pull/8718) - ws-manager-bridge logs WorkspaceStatus events <Contributors usernames="easyCZ,geropl,jankeromnes" />
- [#8644](https://github.com/gitpod-io/gitpod/pull/8644) - Fix setting sync limit failure in some cases <Contributors usernames="akosyakov,easyCZ,geropl,jeanp413,mustard-mh" />
- [#8793](https://github.com/gitpod-io/gitpod/pull/8793) - fix caching of GitHub server-server queries <Contributors usernames="andrew-farries,geropl" />
- [#8593](https://github.com/gitpod-io/gitpod/pull/8593) - Make the licensing match what's advertised <Contributors usernames="MrSimonEmms,corneliusludmann,geropl" />
- [#8770](https://github.com/gitpod-io/gitpod/pull/8770) - [kubecdl] Fix server name pattern <Contributors usernames="aledbf,kylos101" />
- [#8741](https://github.com/gitpod-io/gitpod/pull/8741) - Update code to 1.65.2 <Contributors usernames="iQQBot,mustard-mh" />
