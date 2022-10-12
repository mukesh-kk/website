---
title: Project-level environment variables
excerpt: By defining environment variables at a project level, they are made available to prebuilds, and optionally to workspaces too.
date: 2022-01-31
image: 2022-01-31.jpg
alt: Gitpod Dashboard Settings Tab overview
---

<script>
  import Contributors from "$lib/components/changelog/contributors.svelte";
</script>

It's time to bring environment variables to Projects, and with that to Prebuilds as well!

Environment variables can now be set for individual Projects, which automatically makes them available when Gitpod runs a Prebuild for your project.

By default, these environment variables are **not accessible in workspaces**. You can, if you desire so, make them available in workspaces too. However, keep in mind that if you do so, anyone who starts a Gitpod workspace for your project will see the value of these environment variables.

To get started, make sure you have created a project at [gitpod.io/new](https://gitpod.io/new). You will then be able to visit its _Settings_ page, where you find a new _Variables_ section.

We are interested in your feedback and suggestions, please let us know in our dedicated [feedback issue](https://github.com/gitpod-io/gitpod/issues/7860) or [chat with us](https://www.gitpod.io/chat).

<p><Contributors usernames="AlexTugarev,JanKoehnlein,geropl,gtsiolis,jankeromnes,jldec,shaal" /></p>

### Fixes and improvements

- [#7895](https://github.com/gitpod-io/gitpod/pull/7895) - werft run github -j .werft/clean-up-werft-build-nodes.yaml -f <Contributors usernames="mads-hartmann,ArthurSens" />
- [#7873](https://github.com/gitpod-io/gitpod/pull/7873) - [Installer]: release 2022.01 <Contributors usernames="MrSimonEmms,corneliusludmann" />
- [#7769](https://github.com/gitpod-io/gitpod/pull/7769) - [installer] Add missing kube-rbac-proxy container in ws-manager deployment <Contributors usernames="MrSimonEmms,aledbf" />
- [#7774](https://github.com/gitpod-io/gitpod/pull/7774) - [installer] Do not start binaries in verbose mode <Contributors usernames="MrSimonEmms,aledbf" />
- [#7362](https://github.com/gitpod-io/gitpod/pull/7362) - - Refactor JB integration to connect over SSH instead of CWM links.- Provide Gitpod integration in JB Gateway. <Contributors usernames="akosyakov,gtsiolis,iQQBot,jankeromnes,mustard-mh" />
- [#7732](https://github.com/gitpod-io/gitpod/pull/7732) - [Dashboard]: add send telemetry to admin settings <Contributors usernames="MrSimonEmms,geropl,gtsiolis" />
- [#7801](https://github.com/gitpod-io/gitpod/pull/7801) - [installer]: add namespace to validate cluster command <Contributors usernames="MrSimonEmms,corneliusludmann" />
- [#7837](https://github.com/gitpod-io/gitpod/pull/7837) - Fix "token not found" issues. <Contributors usernames="AlexTugarev,geropl" />
- [#7430](https://github.com/gitpod-io/gitpod/pull/7430) - Remove ws-scheduler component <Contributors usernames="MrSimonEmms,aledbf,csweichel,geropl,iQQBot,jankeromnes" />
- [#7760](https://github.com/gitpod-io/gitpod/pull/7760) - Support heartbeats from SSH sessions <Contributors usernames="aledbf,csweichel,iQQBot" />
- [#7591](https://github.com/gitpod-io/gitpod/pull/7591) - [server]: Create installation admin controller <Contributors usernames="MrSimonEmms,corneliusludmann,geropl" />
- [#7752](https://github.com/gitpod-io/gitpod/pull/7752) - [installer] Fix invalid tag name for image build template <Contributors usernames="aledbf,corneliusludmann" />
- [#7302](https://github.com/gitpod-io/gitpod/pull/7302) - [dashboard] Error messages on workspace creation when the repository is not found, will now also display the name of the repository <Contributors usernames="Siddhant-K-code,gtsiolis,iQQBot,jankeromnes,trumbitta" />
- [#7753](https://github.com/gitpod-io/gitpod/pull/7753) - Improved feedback when content initialisation fails <Contributors usernames="Furisto,csweichel" />
- [#7514](https://github.com/gitpod-io/gitpod/pull/7514) - Autofix: upgrade-nvm-tools <Contributors usernames="akosyakov,autofix-bot,jankeromnes" />
- [#7730](https://github.com/gitpod-io/gitpod/pull/7730) - [installation-telemetry]: log data sent to Segment <Contributors usernames="MrSimonEmms,corneliusludmann" />
- [#7472](https://github.com/gitpod-io/gitpod/pull/7472) - [ws-manager] Improve workspaces PodAffinity <Contributors usernames="MrSimonEmms,aledbf,corneliusludmann,csweichel" />
- [#7657](https://github.com/gitpod-io/gitpod/pull/7657) - Make proc mounts more reliable which affects parallel Docker container startup <Contributors usernames="aledbf,csweichel" />
- [#7623](https://github.com/gitpod-io/gitpod/pull/7623) - [installer] Fix ws-daemon image pull policy <Contributors usernames="aledbf,kylos101" />
- [#7656](https://github.com/gitpod-io/gitpod/pull/7656) - [installer] Fix lifecycle PostStart label update <Contributors usernames="aledbf,csweichel,iQQBot" />
- [#7670](https://github.com/gitpod-io/gitpod/pull/7670) - [installer] Fix registry-facade ClusterRoleBinding name <Contributors usernames="aledbf,kylos101" />
- [#7660](https://github.com/gitpod-io/gitpod/pull/7660) - [installer] Switch default log level to info <Contributors usernames="MrSimonEmms,aledbf,csweichel,geropl,jeanp413" />
- [#7687](https://github.com/gitpod-io/gitpod/pull/7687) - [installer] Telemetry should not run in workspace clusters <Contributors usernames="MrSimonEmms,aledbf" />
- [#7633](https://github.com/gitpod-io/gitpod/pull/7633) - Admin users can download the account statement. <Contributors usernames="JanKoehnlein,laushinka" />
- [#7295](https://github.com/gitpod-io/gitpod/pull/7295) - Introduce Project-level environment variables <Contributors usernames="AlexTugarev,JanKoehnlein,geropl,gtsiolis,jankeromnes,jldec,shaal" />
- [#7659](https://github.com/gitpod-io/gitpod/pull/7659) - [dashboard] Don't offer to add common email domains as a verified student domains in Admin <Contributors usernames="jankeromnes,laushinka" />
- [#7625](https://github.com/gitpod-io/gitpod/pull/7625) - [installer] Fix mysql image pull policy <Contributors usernames="aledbf,corneliusludmann" />
- [#7642](https://github.com/gitpod-io/gitpod/pull/7642) - [Installer]: remove the deprecated TypeORM migration command <Contributors usernames="MrSimonEmms,corneliusludmann" />
