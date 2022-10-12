---
title: Automatic preview page reloads
excerpt: No more manually refreshing pages to see if your server is ready - let us do that automatically.
date: 2021-10-01
image: 2021-10-01.jpg
alt:
---

<script>
  import Contributors from "$lib/components/changelog/contributors.svelte";
</script>

A small, but mighty improvement to your web application preview. No more manual page refresh when you open the preview before the application's port is ready.

Gitpod now reloads the page every five seconds, automatically. Once your application listens on a port, the preview will reload and you're ready to code.

Please let us know what you think via Twitter [@gitpod](https://twitter.com/gitpod) or chat with us at https://www.gitpod.io/chat.

<p><Contributors usernames="csweichel,princerachit,rohan-patra" /></p>

### Fixes and improvements

- [#5836](https://github.com/gitpod-io/gitpod/pull/5836) - Make it possible to re-trigger failed or timed out Prebuilds <Contributors usernames="AlexTugarev,gtsiolis,jankeromnes" />
- [#5640](https://github.com/gitpod-io/gitpod/pull/5640) - [Teams & Projects] Ask for authorization when viewing a project of a provider without connection <Contributors usernames="AlexTugarev,JanKoehnlein,gtsiolis,jankeromnes" />
- [#5967](https://github.com/gitpod-io/gitpod/pull/5967) - [teams] Fix joining teams from different DB region <Contributors usernames="AlexTugarev,gtsiolis,jankeromnes" />
- [#5572](https://github.com/gitpod-io/gitpod/pull/5572) - Refactor integration tests using [sigs.k8s.io/e2e-framework](https://sigs.k8s.io/e2e-framework) <Contributors usernames="aledbf,corneliusludmann,csweichel,geropl,jankeromnes,rl-gitpod" />
- [#5935](https://github.com/gitpod-io/gitpod/pull/5935) - [dashboard] fix accumulating websocket connections <Contributors usernames="geropl,jankeromnes" />
- [#5897](https://github.com/gitpod-io/gitpod/pull/5897) - [workspace] Make the workspace stopping mechanism more deterministic <Contributors usernames="aledbf,csweichel,geropl" />
- [#5918](https://github.com/gitpod-io/gitpod/pull/5918) - [prebuilds] fix prebuild logs with multiple tasks <Contributors usernames="akosyakov,geropl" />
- [#5693](https://github.com/gitpod-io/gitpod/pull/5693) - [image-builder] Include environment variables in the built workspace image <Contributors usernames="aledbf,corneliusludmann,csweichel" />
- [#5920](https://github.com/gitpod-io/gitpod/pull/5920) - [db] add missing index `d_b_prebuild_workspace.buildWorkspaceId <Contributors usernames="AlexTugarev,geropl,meysholdt" />
- [#5899](https://github.com/gitpod-io/gitpod/pull/5899) - fix log format for meta components <Contributors usernames="AlexTugarev,geropl" />
- [#5787](https://github.com/gitpod-io/gitpod/pull/5787) - improve websocket reconnection handling in the frontend <Contributors usernames="akosyakov,geropl" />
