---
title: Open in Gitpod
excerpt: Type cmd-O (ctrl-O on Windows) to start a new workspace.
date: 2022-02-21
image: 2022-02-21.jpg
alt: A screenshot of the "Open in Gitpod" dialog with an input field to search for repositories and examples.
---

<script>
  import Contributors from "$lib/components/changelog/contributors.svelte";
</script>

It's even easier now to open a repository in a new Gitpod workspace.

Type cmd+O (ctrl-O on Windows) while on any page in the dashboard at gitpod.io.

This will pop up an input where you can paste a [context URL](/docs/introduction/learn-gitpod/context-url) for a git repository, and immediately open a workspace, just like you are used to with the `gitpod.io/#` prefix.

Instead of pasting a URL, you can start typing the name of a repository, and Gitpod will suggest repositories from recent workspaces, as well as from your connected git provider. Even our popular example [template repositories](/docs/introduction/getting-started#popular-templates) can be opened this way.

Always ready to code 🚀

<p><Contributors usernames="jankeromnes,svenefftinge,gtsiolis,JanKoehnlein,jldec" /></p>

### Fixes and improvements

- [#8234](https://github.com/gitpod-io/gitpod/pull/8234) - Add stress test for mount proc <Contributors usernames="Furisto,utam0k" />
- [#7523](https://github.com/gitpod-io/gitpod/pull/7523) - messagebus: remove cross-cluster dependency <Contributors usernames="JanKoehnlein,corneliusludmann,geropl" />
- [#8275](https://github.com/gitpod-io/gitpod/pull/8275) - Update the usage of nsinsider. <Contributors usernames="csweichel,utam0k" />
- [#8288](https://github.com/gitpod-io/gitpod/pull/8288) - [installer] Installer does not set default nameserver settings for workspaces anymore <Contributors usernames="corneliusludmann,csweichel" />
- [#8289](https://github.com/gitpod-io/gitpod/pull/8289) - Improve handling of "Out of Memory" error when starting up workspaces <Contributors usernames="aledbf,csweichel,kylos101,princerachit,sagor999" />
- [#8067](https://github.com/gitpod-io/gitpod/pull/8067) - [server]: Add `totalUsers`, `totalWorkspaces`, and `totalInstances` fields to telemetry data <Contributors usernames="Pothulapati,corneliusludmann,laushinka" />
- [#8270](https://github.com/gitpod-io/gitpod/pull/8270) - [self-hosted] Skip MinIO client configuration in the MinIO container because it breaks air-gap installations. <Contributors usernames="MrSimonEmms,corneliusludmann" />
- [#8086](https://github.com/gitpod-io/gitpod/pull/8086) - Bitbucket Server: Authorize with Bitbucket Server 7.20 and start workspaces. <Contributors usernames="AlexTugarev,corneliusludmann,jldec" />
- [#8227](https://github.com/gitpod-io/gitpod/pull/8227) - [server] Disable `perMessageDeflate` on websockets <Contributors usernames="AlexTugarev,geropl" />
