---
title: VS Code Desktop Settings Sync
excerpt: Sync your settings between VS Code Desktop and the browser
date: 2022-05-09
image: 2022-05-09.jpg
alt:
---

<script>
  import Contributors from "$lib/components/changelog/contributors.svelte";
</script>

Gitpod is built to be flexible. It’s important that our users can develop with the tools that make sense for their current task and use the tools they are most comfortable with. We “integrate, don’t dictate”. This design principle extends also to our [IDE and editor integrations](https://www.gitpod.io/docs/references/ides-and-editors) where we have multiple options in the browser and on desktop both VS Code and JetBrains (also see: [our partnership with JetBrains](https://www.gitpod.io/blog/gitpod-jetbrains)).

We encourage Gitpod users to use [one workspace per task](https://www.gitpod.io/docs/introduction/learn-gitpod/one-workspace-per-task#ephemeral-vs-long-lived), move their development configurations to code, and embrace ephemerality to really get the most out of Gitpod. However, those users who choose to swap between VS Code Desktop and VS Code in the browser for editing code will have noticed that their VS Code settings (themes, plugins, and fonts, etc) weren’t kept in sync.

But since we know just how important it is for our users to have their setups and configurations just as they like them, we’re excited to let you know that **[VS Code settings sync](https://www.gitpod.io/docs/references/ides-and-editors/settings-sync) now works between VS Code Desktop and the browser in Gitpod**

**Note:** VS Code browser settings are already synced by default.

To enable VS Code settings sync on your desktop:

1. Open your Gitpod workspace in VS Code Desktop
2. Use the command palette to select “Settings Sync: Enable signing in with Gitpod”
3. Restart your VS Code Desktop
4. Resolve any settings conflicts between your browser and desktop

And you’re set! All your theme, plugins, and other settings will be synced in real-time and be reflected also when you’re working in VS Code in the browser.

Check out the [VS Code settings sync documentation](https://www.gitpod.io/docs/references/ides-and-editors/settings-sync) for more details.

<p><Contributors usernames="akosyakov,filiptronicek,jeanp413" /></p>

### Fixes and improvements

- [#8248](https://github.com/gitpod-io/gitpod/pull/8248) - Add user environment variable name length and value length validation in settings UI modal. <Contributors usernames="JanKoehnlein,geropl,gtsiolis,jankeromnes,meysholdt,randomir" />
- [#9831](https://github.com/gitpod-io/gitpod/pull/9831) - Add `staticMessagebusPassword` config flag to use a fixed message bus password in the installer <Contributors usernames="andrew-farries,corneliusludmann,geropl" />
- [#9823](https://github.com/gitpod-io/gitpod/pull/9823) - Change icon spacing in license page <Contributors usernames="andrew-farries,gtsiolis,nandajavarma" />
- [#9803](https://github.com/gitpod-io/gitpod/pull/9803) - [ws-manager] fix sometimes workspaces fail with backup not found error <Contributors usernames="princerachit,sagor999" />
- [#9654](https://github.com/gitpod-io/gitpod/pull/9654) - fix account deletion failing on bad DB state <Contributors usernames="easyCZ,geropl" />
- [#9795](https://github.com/gitpod-io/gitpod/pull/9795) - Make sure the server mounts the github app secret when an app is specified in the installer <Contributors usernames="andrew-farries,geropl" />
- [#9793](https://github.com/gitpod-io/gitpod/pull/9793) - Add `disableDbMigration` config flag to the installer to disable db migrations <Contributors usernames="andrew-farries,corneliusludmann,geropl" />
- [#9788](https://github.com/gitpod-io/gitpod/pull/9788) - Allow setting `ide-proxy` and `openvsx-proxy` service annotations via the installer. <Contributors usernames="akosyakov,andrew-farries,corneliusludmann" />
- [#9773](https://github.com/gitpod-io/gitpod/pull/9773) - Allow setting `proxy` service annotations via the installer. <Contributors usernames="MrSimonEmms,andrew-farries,corneliusludmann,easyCZ,geropl" />
- [#9756](https://github.com/gitpod-io/gitpod/pull/9756) - Make `runDbDeleter` for the server configurable via the installer <Contributors usernames="andrew-farries,corneliusludmann,easyCZ,geropl" />
- [#9764](https://github.com/gitpod-io/gitpod/pull/9764) - Allow `proxy` service to configure a static IP via the installer <Contributors usernames="andrew-farries,corneliusludmann,easyCZ,geropl" />
- [#9786](https://github.com/gitpod-io/gitpod/pull/9786) - Use a special domain name for SSH Gateway <Contributors usernames="akosyakov,geropl,iQQBot" />
- [#9727](https://github.com/gitpod-io/gitpod/pull/9727) - Fix readiness probe issue in registry-facace when configured registry address contains a port <Contributors usernames="aledbf,corneliusludmann,csweichel" />
- [#9738](https://github.com/gitpod-io/gitpod/pull/9738) - Use link component class for the editor selection modal <Contributors usernames="andreafalzetti,gtsiolis,laushinka" />
- [#9760](https://github.com/gitpod-io/gitpod/pull/9760) - Allow `ws-manager-bridge` service to skip registering itself as a workspace, via the installer. <Contributors usernames="MrSimonEmms,andrew-farries,geropl" />
- [#9343](https://github.com/gitpod-io/gitpod/pull/9343) - [dashboard] add license tab to the admin dashboard <Contributors usernames="corneliusludmann,gtsiolis,jldec,lucasvaltl,nandajavarma" />
- [#9589](https://github.com/gitpod-io/gitpod/pull/9589) - Refactor backups <Contributors usernames="Pothulapati,aledbf,csweichel,jenting,mustard-mh" />
- [#9699](https://github.com/gitpod-io/gitpod/pull/9699) - [docker-up] Update docker compose to 2.5.0 <Contributors usernames="aledbf,sagor999" />
- [#9708](https://github.com/gitpod-io/gitpod/pull/9708) - [image-builder-bob] Update buildkit to v0.10.2 <Contributors usernames="aledbf,sagor999" />
- [#9635](https://github.com/gitpod-io/gitpod/pull/9635) - [registry-facade] Adjust IPFS client Add options <Contributors usernames="MrSimonEmms,aledbf,sagor999" />
- [#9732](https://github.com/gitpod-io/gitpod/pull/9732) - [content-service] Fix backup restoration <Contributors usernames="MrSimonEmms,akosyakov,aledbf,geropl,kylos101,mustard-mh" />
- [#9768](https://github.com/gitpod-io/gitpod/pull/9768) - [ws-manager] Reduce readiness probe initialDelaySeconds <Contributors usernames="aledbf,kylos101,sagor999" />
- [#9778](https://github.com/gitpod-io/gitpod/pull/9778) - [image-builder] Improve error handling (no more "hostname required") <Contributors usernames="aledbf,csweichel" />
- [#9213](https://github.com/gitpod-io/gitpod/pull/9213) - [supervisor]: Remove slirp4netns <Contributors usernames="iQQBot,mustard-mh,utam0k" />
- [#9706](https://github.com/gitpod-io/gitpod/pull/9706) - [supervisor]: Improve IDE readiness probe <Contributors usernames="aledbf,jeanp413" />
- [#9432](https://github.com/gitpod-io/gitpod/pull/9432) - Prompt first-time users to choose their default IDE <Contributors usernames="AlexTugarev,akosyakov,andreafalzetti,gtsiolis,iQQBot,loujaybee,mustard-mh" />
- [#9731](https://github.com/gitpod-io/gitpod/pull/9731) - [kots]: automatically enable shiftfs support if cluster supports it <Contributors usernames="MrSimonEmms,corneliusludmann" />
- [#9741](https://github.com/gitpod-io/gitpod/pull/9741) - [kots]: improve installer job failure recovery <Contributors usernames="MrSimonEmms,corneliusludmann" />
- [#9701](https://github.com/gitpod-io/gitpod/pull/9701) - [kots] support s3 backend in incluster registry <Contributors usernames="MrSimonEmms,Pothulapati" />
- [#9614](https://github.com/gitpod-io/gitpod/pull/9614) - Improved security by removing unneeded privileges from the server component. <Contributors usernames="geropl,meysholdt" />
- [#9613](https://github.com/gitpod-io/gitpod/pull/9613) - Support custom CA certs for SCM systems <Contributors usernames="Pothulapati,aledbf,csweichel,geropl" />
- [#9622](https://github.com/gitpod-io/gitpod/pull/9622) - [dashboard] Disable search indexing of all web app pages <Contributors usernames="geropl,jankeromnes" />
- [#9545](https://github.com/gitpod-io/gitpod/pull/9545) - Allow resource requests and limits for each component to be configurable through the installer <Contributors usernames="andrew-farries,corneliusludmann,geropl,mustard-mh,sagor999" />
- [#9269](https://github.com/gitpod-io/gitpod/pull/9269) - [devx]: Activated "format on save" for TypeScript and JavaScript <Contributors usernames="andrew-farries,geropl,iQQBot,laushinka,trumbitta" />
- [#9630](https://github.com/gitpod-io/gitpod/pull/9630) - Allow `disableDynamicAuthProviderLogin`, `enableLocalApp` and `defaultBaseImageRegistryWhitelist` server config to be configurable via the installer <Contributors usernames="andrew-farries,corneliusludmann,geropl" />
- [#9717](https://github.com/gitpod-io/gitpod/pull/9717) - Allow chargebee payment config to be specified via the installer for SaaS installations. <Contributors usernames="andrew-farries,corneliusludmann,geropl" />
- [#9718](https://github.com/gitpod-io/gitpod/pull/9718) - [KOTS]: configure blockNewUsers <Contributors usernames="MrSimonEmms,corneliusludmann" />
