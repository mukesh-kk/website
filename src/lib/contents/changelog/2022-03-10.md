---
title: Support for GitHub Enterprise Server
excerpt: Gitpod now supports repositories hosted on GitHub Enterprise Server.
date: 2022-03-10
image: 2022-03-10.jpg
alt:
---

<script>
  import Contributors from "$lib/components/changelog/contributors.svelte";
</script>

Gitpod now works with public, private, or internal repositories on your own instance of GitHub Enterprise (GHE). To set this up, please follow our 2-step guide [in the documentation](/docs/configure/authentication/github-enterprise).

For feedback, please use the dedicated [feedback issue](https://github.com/gitpod-io/gitpod/issues/8929) or [chat with us](https://www.gitpod.io/chat).

<p><Contributors usernames="AlexTugarev,andrew-farries,geropl,jankeromnes" /></p>

### Fixes and improvements

- [#8533](https://github.com/gitpod-io/gitpod/pull/8533) - Update k8s go dependencies to v1.23.4Update prometheus to v1.12.1 [CVE-2022-21698](https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2022-21698)Update containerd to v1.6.0 <Contributors usernames="ArthurSens,MrSimonEmms,aledbf,csweichel,geropl,iQQBot,sagor999" />
- [#8578](https://github.com/gitpod-io/gitpod/pull/8578) - Support user-modifiable cgroupv2 structure <Contributors usernames="MrSimonEmms,aledbf,csweichel" />
- [#8583](https://github.com/gitpod-io/gitpod/pull/8583) - Remove unused pod labels <Contributors usernames="MrSimonEmms,aledbf,sagor999" />
- [#8580](https://github.com/gitpod-io/gitpod/pull/8580) - [installer] Registry facade should not use a port from node ports range <Contributors usernames="MrSimonEmms,aledbf,csweichel,iQQBot,sagor999" />
- [#8555](https://github.com/gitpod-io/gitpod/pull/8555) - Add docker images for gpctl and kubecdl <Contributors usernames="csweichel,kylos101,princerachit,sagor999,utam0k" />
- [#8590](https://github.com/gitpod-io/gitpod/pull/8590) - Update the docs for cgroup v2 <Contributors usernames="csweichel,utam0k" />
- [#8471](https://github.com/gitpod-io/gitpod/pull/8471) - Support cpu limiting using cgroup v2 <Contributors usernames="Furisto,aledbf,csweichel,utam0k" />
- [#8629](https://github.com/gitpod-io/gitpod/pull/8629) - Disable cache reclaim when cgroup v2 <Contributors usernames="Furisto,utam0k" />
- [#8550](https://github.com/gitpod-io/gitpod/pull/8550) - Add support for private registries <Contributors usernames="aledbf,csweichel,geropl,jankeromnes,jmls,sagor999,utam0k" />
- [#8632](https://github.com/gitpod-io/gitpod/pull/8632) - Admins cannot search empty strings or partial matches on workspace search. <Contributors usernames="geropl,gtsiolis,laushinka" />
- [#8574](https://github.com/gitpod-io/gitpod/pull/8574) - Support GitHub Enterprise <Contributors usernames="AlexTugarev,andrew-farries,geropl,jankeromnes" />
- [#8689](https://github.com/gitpod-io/gitpod/pull/8689) - [kots]: create dev channels in KOTS and formalise the release process <Contributors usernames="MrSimonEmms,Pothulapati,corneliusludmann" />
- [#8568](https://github.com/gitpod-io/gitpod/pull/8568) - Rate-limit workspace prebuilds to 50 per minute (rolling-window) by default, configurable through config. <Contributors usernames="andrew-farries,easyCZ,geropl,jankeromnes" />
- [#8633](https://github.com/gitpod-io/gitpod/pull/8633) - [kots]: make the self-hosted cert more explicitly selectable <Contributors usernames="MrSimonEmms,Pothulapati" />
- [#8486](https://github.com/gitpod-io/gitpod/pull/8486) - improve robustness of startWorkspaceimprove feedback for errors during cluster selectionimprove monitoring for cluster selection errors <Contributors usernames="AlexTugarev,geropl" />
- [#8547](https://github.com/gitpod-io/gitpod/pull/8547) - [installer]: add annotation to make DB resources restart if changes <Contributors usernames="MrSimonEmms,geropl" />
- [#8622](https://github.com/gitpod-io/gitpod/pull/8622) - [installer] Add network policy for registry-facade access to coredns <Contributors usernames="Pothulapati,aledbf" />
- [#8562](https://github.com/gitpod-io/gitpod/pull/8562) - Fix user detail bug that fetches all workspaces. <Contributors usernames="JanKoehnlein,geropl,gtsiolis,laushinka" />
- [#8558](https://github.com/gitpod-io/gitpod/pull/8558) - [dashboard] Don't always print 'Connecting to workspace logs...' (it's somewhat misleading) <Contributors usernames="geropl,jankeromnes" />
- [#8546](https://github.com/gitpod-io/gitpod/pull/8546) - Link to privacy policy from login page <Contributors usernames="geropl,gtsiolis,jldec" />
- [#8395](https://github.com/gitpod-io/gitpod/pull/8395) - [kots]: add the KOTS installation manifests <Contributors usernames="MrSimonEmms,corneliusludmann" />
- [#8503](https://github.com/gitpod-io/gitpod/pull/8503) - Free text search on workspace admin dashboard is not enabled anymore. <Contributors usernames="geropl,gtsiolis,laushinka" />
- [#8363](https://github.com/gitpod-io/gitpod/pull/8363) - Remove ghost from the codebase <Contributors usernames="MrSimonEmms,aledbf,csweichel,geropl,kylos101,mads-hartmann,mustard-mh,princerachit" />
- [#8477](https://github.com/gitpod-io/gitpod/pull/8477) - Renamed `danger-use-unsupported-config` flag in the installer to `use-experimental-config <Contributors usernames="MrSimonEmms,Pothulapati,corneliusludmann,csweichel,mustard-mh" />
- [#8527](https://github.com/gitpod-io/gitpod/pull/8527) - [installer]: correct the stored config to include apiVersion <Contributors usernames="MrSimonEmms,corneliusludmann" />
- [#8519](https://github.com/gitpod-io/gitpod/pull/8519) - Try harder to update workspace annotation to prevent workspace from being marked as failed erroneously. <Contributors usernames="Furisto,sagor999" />
- [#7831](https://github.com/gitpod-io/gitpod/pull/7831) - Git Integrations UI – improve handling of host name. <Contributors usernames="AlexTugarev,JanKoehnlein,Shulammite-Aso,csweichel,gtsiolis,meysholdt" />
- [#8428](https://github.com/gitpod-io/gitpod/pull/8428) - Deal with when cpu.cfs_quota_us is negative <Contributors usernames="kylos101,sagor999,utam0k" />
- [#8435](https://github.com/gitpod-io/gitpod/pull/8435) - Docker in workspaces now allows mapping the user id of a container user to the workspace gitpod user <Contributors usernames="Furisto,iQQBot,kylos101,mikenikles,utam0k" />
- [#8463](https://github.com/gitpod-io/gitpod/pull/8463) - Improve handling of an error when pod fails to start due to out of memory error on the node <Contributors usernames="aledbf,sagor999" />
- [#8460](https://github.com/gitpod-io/gitpod/pull/8460) - [installer]: remove jaeger operator from the config <Contributors usernames="MrSimonEmms,corneliusludmann" />
- [#8402](https://github.com/gitpod-io/gitpod/pull/8402) - Admins can find teams, see team details, and change a team member's role. <Contributors usernames="gtsiolis,jldec,laushinka,svenefftinge" />
- [#8211](https://github.com/gitpod-io/gitpod/pull/8211) - Add Replicated as a Gitpod license evaluator <Contributors usernames="MrSimonEmms,corneliusludmann,csweichel,geropl" />
- [#8330](https://github.com/gitpod-io/gitpod/pull/8330) - Improve error handling for workspace cluster register & updateShow all admission constraints for workspace cluster list <Contributors usernames="geropl,kylos101,sagor999" />
- [#8307](https://github.com/gitpod-io/gitpod/pull/8307) - Add max lifetime timeout for a workspace <Contributors usernames="csweichel,princerachit,sagor999" />
- [#8389](https://github.com/gitpod-io/gitpod/pull/8389) - [installer] Ensure multiple ws-proxy replicas are scheduled in different nodes <Contributors usernames="aledbf,sagor999" />
- [#8401](https://github.com/gitpod-io/gitpod/pull/8401) - Make `-c` optional in installer, while allowing the passed config to be flexible <Contributors usernames="MrSimonEmms,Pothulapati,corneliusludmann" />
- [#8373](https://github.com/gitpod-io/gitpod/pull/8373) - Show correct admin telemetry settings during first visit <Contributors usernames="AlexTugarev,Pothulapati,corneliusludmann" />
- [#8376](https://github.com/gitpod-io/gitpod/pull/8376) - Remove Jaeger operator <Contributors usernames="JanKoehnlein,MrSimonEmms,corneliusludmann" />
- [#8266](https://github.com/gitpod-io/gitpod/pull/8266) - Make Open VSX upstream URL configurable in the installer for air-gap installations <Contributors usernames="MrSimonEmms,Pothulapati,akosyakov,corneliusludmann,csweichel" />
- [#8380](https://github.com/gitpod-io/gitpod/pull/8380) - Pre-populate Cmd+O modal and sort suggested context URLs by most-recently-used first <Contributors usernames="JanKoehnlein,jankeromnes" />
