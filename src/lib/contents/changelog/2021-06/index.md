---
title: Introducing the Gitpod Local Companion app
excerpt: As of today, you can access your Gitpod workspace from your local environment 🎉!
date: 2021-06-30
image: 2021-06-30.jpg
alt: Gitpod Local Companion
---

<script>
  import Contributors from "$lib/components/changelog/contributors.svelte";
</script>

As of today, you can access your Gitpod workspace from your local environment 🎉!

**Why does this matter?**
Imagine you start a development server for your web application in Gitpod. You can preview that online at a https://nnnn-x.y.gitpod.io URL, where "nnnn" is the port your dev server listens on. Sometimes though, development features such as live reloading may not be compatible with that URL format and rather require something like http://localhost:10000 to communicate with the dev server.

With the Gitpod Local Companion app, localhost URLs can now access your dev server running in a Gitpod workspace. The best part of that: It works with any TCP port. You could run a MySQL database in your Gitpod workspace and access the database with your favourite GUI through localhost:3306.

To learn more and get started today, please see [our introduction blog post](/blog/local-app).

### Fixes and improvements

- [#4548](https://github.com/gitpod-io/gitpod/pull/4548) - **Breaking Change**: Make ports configured in `.gitpod.yml` private by default when no value for `visibility` is given (was public). This change is for security reasons.
- [#4614](https://github.com/gitpod-io/gitpod/pull/4614) - Added a deprecation warning for Theia.
- [#4543](https://github.com/gitpod-io/gitpod/pull/4543) - Deprecate `prebuild` task in `gitpod.yml`.
- [#4542](https://github.com/gitpod-io/gitpod/pull/4542) - Remove `ide` task in `gitpod.yml`.
- [#4524](https://github.com/gitpod-io/gitpod/pull/4524) - Remove deprecated `openModes` in `.gitpod.yml.
- [#4633](https://github.com/gitpod-io/gitpod/pull/4633) - Fix gp open/preview to await till VS Code UI is available.
- [#3259](https://github.com/gitpod-io/gitpod/issues/3259) - Support VS Code web extensions which are running in a browser worker, ([particularly Vim](https://github.com/gitpod-io/gitpod/issues/3259#issuecomment-864355629)).
- [#2879](https://github.com/gitpod-io/gitpod/pull/2879) - Fix unvalidated redirects (credit: [Arif Khan](https://twitter.com/payloadartist) from SaveBreach Team).
- [#4580](https://github.com/gitpod-io/gitpod/pull/4580) - Support workspace sharing from VS Code.
- [#4627](https://github.com/gitpod-io/gitpod/pull/4627) - Deprecate user uploaded extensions.
- [#4560](https://github.com/gitpod-io/gitpod/pull/4560) - Fix out of order typing in terminals.
- [#4589](https://github.com/gitpod-io/gitpod/pull/4589) - Add dodo to animals (thanks [@a2br](https://github.com/a2br)!).
- [#4287](https://github.com/gitpod-io/gitpod/pull/4287) - Modify the "New Git Integration" experience to align with provider terminology (thanks @jordanhailey!).
- [#4401](https://github.com/gitpod-io/gitpod/pull/4401), [#4490](https://github.com/gitpod-io/gitpod/pull/4490), [#4571](https://github.com/gitpod-io/gitpod/pull/4571) - Implement a new Teams UI in the dashboard (behind a feature flag).

<p><Contributors usernames="akosyakov,csweichel,rl-gitpod,jordanhailey,gtsiolis,corneliusludmann,meysholdt,JanKoehnlein,jankeromnes,svenefftinge,gtsiolis,AlexTugarev" /></p>
