---
title: Synchronize Theia user settings with VS Code
excerpt: We recently launched support for VS Code. If you switch your editor to VS Code, your user settings and extensions configured in Theia will be synchronized with VS Code automatically when you start a new workspace (unless you manually uploaded an extension).
date: 2021-02-28
image: 2021-02-28.jpg
alt: VS Code on Gitpod
---

<script>
  import Contributors from "$lib/components/changelog/contributors.svelte";
</script>

We recently launched [support for VS Code](/blog/root-docker-and-vscode#vs-code).

If you switch your editor to VS Code, your user settings and extensions configured in Theia will be synchronized with VS Code automatically when you start a new workspace (unless you manually uploaded an extension).

### Fixes and improvements

- [#3087](https://github.com/gitpod-io/gitpod/pull/3087) - Remove the privileged feature flag.
- [#3175](https://github.com/gitpod-io/gitpod/pull/3175) - Fix Env Var context parsing.
- [#3177](https://github.com/gitpod-io/gitpod/pull/3177) - [supervisor] Let supervisor fail when first IDE start fails.
- [#3182](https://github.com/gitpod-io/gitpod/pull/3182) - [registry-facade] Remove feature flag.
- [#3228](https://github.com/gitpod-io/gitpod/pull/3228) - Allow air-gap Gitpod installations.
- Improved workspace startup time in high-load situations.
- Started to [adopt the controller framework](https://kubernetes.io/docs/concepts/architecture/controller/) which will lead to Gitpod producing less load on the Kubernetes API.

<p><Contributors usernames="akosyakov,svenefftinge,csweichel,AlexTugarev,corneliusludmann,geropl,aledbf" /></p>
