---
title: Feedback widget for dashboard
excerpt: Inspired by the feedback form for Gitpod, we've added a similar Feedback feature in the Gitpod dashboard.
date: 2022-05-23
image: 2022-05-23.jpg
alt:
---

<script>
  import Contributors from "$lib/components/changelog/contributors.svelte";
  import Badge from "$lib/components/changelog/badge.svelte"
</script>

Users are more likely to provide feedback, the easier we make it for them.

Inspired by the feedback form for Gitpod [docs pages](https://www.gitpod.io/docs/configure), we've added a similar Feedback feature in the Gitpod dashboard.

One click is enough to tell us how you feel, or write a quick note, all without leaving the page.

<p><Contributors usernames="laushinka,gtsiolis,andrew-farries,jakobhero" /></p>

### Roadmap updates

<div class="mt-medium">

**Public API** - Roadmap issue: [#7900](https://github.com/gitpod-io/gitpod/issues/7900) <Badge text="alpha" variant="pink" class="ml-1.5 bg-salmon" />

- [#10052](https://github.com/gitpod-io/gitpod/pull/10052) - [public-api] Publish typescript definitions to NPM <Contributors usernames="andrew-farries,easyCZ" />
- [#10060](https://github.com/gitpod-io/gitpod/pull/10060) - Enable gRPC reflection for the public API <Contributors usernames="Furisto,andrew-farries,easyCZ,jenting" />
- [#10068](https://github.com/gitpod-io/gitpod/pull/10068) - Implement `GetOwnerToken` rpc on the public API <Contributors usernames="andrew-farries,easyCZ" />

</div>
<div class="mt-medium">

**JetBrains** - Roadmap issue: [#7956](https://github.com/gitpod-io/gitpod/issues/7956) <Badge text="beta" variant="pink" class="ml-1.5 bg-tertiary" />

- [#10123](https://github.com/gitpod-io/gitpod/pull/10123) - Terminate IDEs gracefully on workspace shutdown <Contributors usernames="akosyakov,felladrin,jeanp413,mustard-mh" />

</div>
<div class="mt-medium">

**Preferences**

- [#10136](https://github.com/gitpod-io/gitpod/pull/10136) - Update dotfiles layout in user preferences <Contributors usernames="andrew-farries,gtsiolis" />
- [#10135](https://github.com/gitpod-io/gitpod/pull/10135) - Update spacing between theme options <Contributors usernames="gtsiolis,jankeromnes" />
- [#10111](https://github.com/gitpod-io/gitpod/pull/10111) - Update dashboard theme selection components on user preferences <Contributors usernames="andrew-farries,easyCZ,gtsiolis" />

</div>

### Fixes and improvements

- [#10154](https://github.com/gitpod-io/gitpod/pull/10154) - [server] Skip GitHub App prebuilds when the repository has no prebuild task(s) or .gitpod.yml <Contributors usernames="AlexTugarev,andrew-farries,jankeromnes" />
- [#10061](https://github.com/gitpod-io/gitpod/pull/10061) - Users can send feedback from the Dashboard. <Contributors usernames="andrew-farries,gtsiolis,jakobhero,jldec,laushinka" />
- [#9976](https://github.com/gitpod-io/gitpod/pull/9976) - Avoid prebuilding repositories were no workspaces were started recently. <Contributors usernames="AlexTugarev,geropl,jankeromnes,svenefftinge" />
- [#10031](https://github.com/gitpod-io/gitpod/pull/10031) - Fix credential errors when json key is used as secret in image-builder-mk3 <Contributors usernames="jenting,princerachit" />
- [#10058](https://github.com/gitpod-io/gitpod/pull/10058) - [code] Update VS Code to 1.67.0 <Contributors usernames="iQQBot,mustard-mh" />
- [#8041](https://github.com/gitpod-io/gitpod/pull/8041) - Implement a new Team billing where Team Owners can conveniently manage a paid plan for their Team <Contributors usernames="AlexTugarev,jankeromnes,jldec,mads-hartmann" />
- [#10034](https://github.com/gitpod-io/gitpod/pull/10034) - [ws-manager-bridge] Fix cluster role binding to scrape metrics <Contributors usernames="andrew-farries,easyCZ" />
- [#10042](https://github.com/gitpod-io/gitpod/pull/10042) - Fix prebuild updates <Contributors usernames="AlexTugarev,andrew-farries,geropl" />
- [#10053](https://github.com/gitpod-io/gitpod/pull/10053) - [prebuild] fix incorrect handling of failed prebuilds <Contributors usernames="geropl,jenting,sagor999" />
- [#10012](https://github.com/gitpod-io/gitpod/pull/10012) - [ws-daemon] fix some workspaces fail to shutdown correctly if git operation was interrupted due to workspace termination <Contributors usernames="aledbf,sagor999" />
- [#9862](https://github.com/gitpod-io/gitpod/pull/9862) - Add `disableWorkspaceGarbageCollection` experimental installer config flag <Contributors usernames="Pothulapati,andrew-farries,geropl" />
- [#9867](https://github.com/gitpod-io/gitpod/pull/9867) - Add `webapp.server.blockedRepositories` experimental installer config flag <Contributors usernames="Pothulapati,andrew-farries,easyCZ,geropl" />
- [#10020](https://github.com/gitpod-io/gitpod/pull/10020) - [common-go] Add file watcher, [registry-facade] Refactor watch of configuration file[ws-daemon], refactor watch of configuration file <Contributors usernames="aledbf,csweichel,easyCZ,jenting,sagor999,utam0k" />
- [#9995](https://github.com/gitpod-io/gitpod/pull/9995) - [ws-daemon] Remove stray IO limiter warnings <Contributors usernames="csweichel,utam0k" />
- [#9492](https://github.com/gitpod-io/gitpod/pull/9492) - Remove stargz snapshotter from image build <Contributors usernames="AlexTugarev,Furisto,aledbf,csweichel,geropl,kylos101" />
- [#10094](https://github.com/gitpod-io/gitpod/pull/10094) - Fix conflicting auth selection for image-builder-bob <Contributors usernames="princerachit,sagor999" />
- [#10127](https://github.com/gitpod-io/gitpod/pull/10127) - [installer] Use installation shortname when constructing ws-manager URL templates <Contributors usernames="andrew-farries,sagor999" />
- [#10114](https://github.com/gitpod-io/gitpod/pull/10114) - eccomp notify: correction of system call name in the log. <Contributors usernames="sagor999,utam0k" />
- [#10082](https://github.com/gitpod-io/gitpod/pull/10082) - [ws-daemon] add log entry when ready probe fails <Contributors usernames="csweichel,sagor999" />
