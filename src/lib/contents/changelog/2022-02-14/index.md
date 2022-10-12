---
title: New workspace images built with Dazzle v2
excerpt: More lightweight, reliable and about 5x faster to build.
date: 2022-02-14
image: 2022-02-14.jpg
alt: The Dazzle logo
---

<script>
  import Contributors from "$lib/components/changelog/contributors.svelte";
</script>

By default, your Gitpod workspaces are based on a Docker image called `gitpod/workspace-full`. It contains all sorts of tools, SDKs and languages you may need — so you are ready-to-code with no friction.

What if you were only interested in Rust though, or Node.js LTS? You could create a custom Dockerfile, tell Gitpod about it and all would be fine. It would even be pretty simple to do.

At Gitpod, we are all about removing friction and frequently ask ourselves, "How can we improve?". So we came up with an even easier solution. We are now in a position to create much more fine-grained workspace images!

To start this next era, we recently built a whole bunch of new images with [Dazzle v2](https://github.com/gitpod-io/dazzle). Dazzle is a Docker/OCI image builder and its goal is to build independent layers where a change to one layer does _not_ invalidate the ones sitting "above" it.

Compared to the previous version of Dazzle, the new v2 is about 5x faster, more reliable and less hacky 🔨.

Here is a list of what you can use today:

- `gitpod/workspace-c`
- `gitpod/workspace-clojure`
- `gitpod/workspace-go`
- `gitpod/workspace-node`
- `gitpod/workspace-node-lts`
- `gitpod/workspace-python`
- `gitpod/workspace-ruby-2`
- `gitpod/workspace-ruby-3`
- `gitpod/workspace-rust`

For an up-to-date list of available images, please [refer to this list](https://github.com/gitpod-io/workspace-images/blob/master/dazzle.yaml).

In your `.gitpod.yml`, all you need to do is add the following line:

```yaml
image: gitpod/workspace-xyz
```

As if this wasn't exciting enough, this new solution lays the foundation for some very cool features you will be able to leverage directly to create custom images for your workspaces.

To tease this a bit more, imagine a future where you can pick & choose which tools you'd like to install in your workspace and Gitpod will automagically provide them to you at lightspeed, or thereabouts.

We are interested in your feedback and suggestions, please let us know in our dedicated [feedback issue](https://github.com/gitpod-io/gitpod/issues/8207) or [chat with us](https://www.gitpod.io/chat).

<p><Contributors usernames="csweichel,princerachit,kylos101" /></p>

### Fixes and improvements

- [#8119](https://github.com/gitpod-io/gitpod/pull/8119) - Added support for Git LFS during content init <Contributors usernames="csweichel,kylos101" />
- [#8134](https://github.com/gitpod-io/gitpod/pull/8134) - Enable id check for seccomp notify <Contributors usernames="Furisto,utam0k" />
- [#8139](https://github.com/gitpod-io/gitpod/pull/8139) - Improved workspace memory-pressure eviction resilience <Contributors usernames="csweichel,sagor999" />
- [#8161](https://github.com/gitpod-io/gitpod/pull/8161) - Add workspace start request debug logging to ws-manager <Contributors usernames="csweichel,sagor999" />
- [#8179](https://github.com/gitpod-io/gitpod/pull/8179) - A bit of improvements to cache_reclaim <Contributors usernames="sagor999,utam0k" />
- [#8132](https://github.com/gitpod-io/gitpod/pull/8132) - [GitHub] Fix the user account picked for a prebuild. <Contributors usernames="AlexTugarev,geropl,jldec,svenefftinge" />
- [#8143](https://github.com/gitpod-io/gitpod/pull/8143) - Update code to 1.64.2 <Contributors usernames="filiptronicek,jeanp413" />
- [#8112](https://github.com/gitpod-io/gitpod/pull/8112) - Autofix: upgrade-nvm-tools <Contributors usernames="autofix-bot,felladrin,iQQBot,jankeromnes" />
- [#8099](https://github.com/gitpod-io/gitpod/pull/8099) - fix dashboard contextURL handling <Contributors usernames="JanKoehnlein,akosyakov,geropl,jankeromnes" />
- [#7569](https://github.com/gitpod-io/gitpod/pull/7569) - Support private dotfiles repo <Contributors usernames="csweichel,gtsiolis,iQQBot,mustard-mh" />
- [#8100](https://github.com/gitpod-io/gitpod/pull/8100) - Make `ContextURL.parseToURL` support the newly-accepted `git@[host]:[user]/[repo].git` format <Contributors usernames="akosyakov,geropl,jankeromnes" />
- [#8036](https://github.com/gitpod-io/gitpod/pull/8036) - Refactor dynamic CPU limiting to provide fairer scheduling. <Contributors usernames="corneliusludmann,csweichel,sagor999,utam0k" />
- [#8093](https://github.com/gitpod-io/gitpod/pull/8093) - Fix wrong token selection if multiple found for a profile. <Contributors usernames="AlexTugarev,geropl,jankeromnes" />
- [#7715](https://github.com/gitpod-io/gitpod/pull/7715) - [server][dashboard] Improve 'New Workspace' modal with a search input, keyboard navigation, and a new context URL suggestion API <Contributors usernames="AlexTugarev,JanKoehnlein,filiptronicek,gtsiolis,jankeromnes,jldec,svenefftinge" />
- [#7833](https://github.com/gitpod-io/gitpod/pull/7833) - Fix Bitbucket push event handling <Contributors usernames="AlexTugarev,geropl,gtsiolis,jankeromnes" />
- [#8073](https://github.com/gitpod-io/gitpod/pull/8073) - configure basic rate-limiting for `startWorkspace <Contributors usernames="geropl,jankeromnes" />
- [#7727](https://github.com/gitpod-io/gitpod/pull/7727) - [installer]: add jaeger sampling options to the tracing object <Contributors usernames="JanKoehnlein,MrSimonEmms,aledbf,corneliusludmann,kylos101,sagor999" />
- [#7923](https://github.com/gitpod-io/gitpod/pull/7923) - Improved in-transit security of user environment variables <Contributors usernames="AlexTugarev,akosyakov,csweichel,geropl,jankeromnes" />
- [#7968](https://github.com/gitpod-io/gitpod/pull/7968) - Fix missing status updates for prebuilds. <Contributors usernames="AlexTugarev,laushinka" />
- [#7940](https://github.com/gitpod-io/gitpod/pull/7940) - reduce idle DB load on SH installations <Contributors usernames="AlexTugarev,geropl" />
- [#7978](https://github.com/gitpod-io/gitpod/pull/7978) - [gitlab] user-scoped env vars can now be filtered for nested repos on Gitlab <Contributors usernames="AlexTugarev,JanKoehnlein" />
- [#7882](https://github.com/gitpod-io/gitpod/pull/7882) - Admins can do a text search for projects and their associated prebuilds. <Contributors usernames="JanKoehnlein,gtsiolis,jldec,laushinka" />
- [#7951](https://github.com/gitpod-io/gitpod/pull/7951) - [server] Support 'git@[host]:[user]/[repo].git' format in context URLs <Contributors usernames="AlexTugarev,JanKoehnlein,jankeromnes" />
- [#7839](https://github.com/gitpod-io/gitpod/pull/7839) - [installer]: put component ownership under webapp/workspace teams <Contributors usernames="MrSimonEmms,aledbf,csweichel,kylos101,princerachit" />
- [#7926](https://github.com/gitpod-io/gitpod/pull/7926) - [wa-manager] Refactor connectToWorkspaceDaemon helper <Contributors usernames="aledbf,csweichel,utam0k" />
