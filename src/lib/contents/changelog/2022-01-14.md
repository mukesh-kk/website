---
title: Dotfiles support in Beta
excerpt: Dotfiles support now available in Beta to anyone.
date: 2022-01-14
image: 2022-01-14.jpg
alt: A screenshot of the Dotfiles configuration options, asking for a Dotfiles repository URL.
---

<script>
  import Contributors from "$lib/components/changelog/contributors.svelte";
</script>

Happy new year from us at Gitpod 🥂!

We kick off 2022 with the availability of dotfiles support for anyone - currently in Beta.

If you are already familiar with dotfiles, [configure it in your Gitpod preferences](https://gitpod.io/preferences). All we need is a URL to your dotfiles repository. We will do the rest whenever you start a new Gitpod workspace. Enjoy 😊.

**What are dotfiles, anyway?**

You may have seen a `.bashrc` file or similar in a Unix environment. Basically, a place for you to configure and customize your shell. The operating system runs commands in these dotfiles automatically. This ensures your environment always has your customizations applied when you start your computer.

Dotfiles allow you to really customize your workflow and hence can increae your productivity significantly. It's well worth looking into.

With today's announcement, you can now leverage these exact same files in all your Gitpod workspaces! This removes one more friction for anyone who's been on the fence as to whether or not cloud-based developer environments are worth exploring. Invest an hour today, you may like what you find. Start at [gitpod.io/preferences](https://gitpod.io/preferences).

Please try it out and share your experience with us and the Gitpod community. You can [learn more about Dotfiles](/docs/configure/user-settings/dotfiles) in the documentation.

We are interested in your feedback and suggestions, please let us know in our dedicated [feedback issue](https://github.com/gitpod-io/gitpod/issues/7603) or [chat with us](https://www.gitpod.io/chat).

<p><Contributors usernames="axonasif,csweichel,filiptronicek,gtsiolis,JanKoehnlein,jldec" /></p>

### Fixes and improvements

- [#7387](https://github.com/gitpod-io/gitpod/pull/7387) - Provide SLSA/in-toto provenance for the build <Contributors usernames="JanKoehnlein,MrSimonEmms,akosyakov,corneliusludmann,csweichel,laushinka,loujaybee" />
- [#7606](https://github.com/gitpod-io/gitpod/pull/7606) - Removed "workspaces" from projects and teams and have a single global workspaces list, that shows all my workspaces.Made the single "workspaces" list the default landing place in the dashboard. <Contributors usernames="JanKoehnlein,jldec,svenefftinge" />
- [#7504](https://github.com/gitpod-io/gitpod/pull/7504) - The GraphQL API has been removed <Contributors usernames="AlexTugarev,JanKoehnlein,gtsiolis" />
- [#7241](https://github.com/gitpod-io/gitpod/pull/7241) - Route users to Discord for support <Contributors usernames="JanKoehnlein,ghuntley,gtsiolis,kylos101" />
- [#7503](https://github.com/gitpod-io/gitpod/pull/7503) - [installation-telemetry]: initial commit plus installer setup <Contributors usernames="MrSimonEmms,corneliusludmann,csweichel" />
- [#7535](https://github.com/gitpod-io/gitpod/pull/7535) - [GitHub] Optionally prevent merging pull requests when prebuilds fail. <Contributors usernames="JanKoehnlein,svenefftinge" />
- [#7578](https://github.com/gitpod-io/gitpod/pull/7578) - Add bottom padding for Projects, Branches, and Prebuilds pages <Contributors usernames="AlexTugarev,gtsiolis" />
- [#7596](https://github.com/gitpod-io/gitpod/pull/7596) - [installer] Adjust rabbitmq helm chart probes configuration <Contributors usernames="MrSimonEmms,aledbf" />
- [#7156](https://github.com/gitpod-io/gitpod/pull/7156) - [Installer]: simplify container image mirroring <Contributors usernames="MrSimonEmms,corneliusludmann,csweichel,laushinka,meysholdt" />
- [#7508](https://github.com/gitpod-io/gitpod/pull/7508) - [installer]: use a pointer deref if the ssh gateway secret does not exist <Contributors usernames="MrSimonEmms,iQQBot" />
- [#7391](https://github.com/gitpod-io/gitpod/pull/7391) - Use repository org and name for workspace ids. <Contributors usernames="JanKoehnlein,akosyakov,csweichel,geropl,svenefftinge" />
- [#7512](https://github.com/gitpod-io/gitpod/pull/7512) - [ws-manager] Adjust probe InitialDelaySeconds <Contributors usernames="aledbf,kylos101" />
- [#7510](https://github.com/gitpod-io/gitpod/pull/7510) - [installer] Adjust default MySQL value <Contributors usernames="MrSimonEmms,aledbf,csweichel" />
- [#7463](https://github.com/gitpod-io/gitpod/pull/7463) - Adds analytic tracking to git commands requiring the git credential manager (remote-facing commands) <Contributors usernames="JanKoehnlein,akosyakov,filiptronicek" />
- [#7511](https://github.com/gitpod-io/gitpod/pull/7511) - [installer] Adjust mysql helm chart probes configuration <Contributors usernames="MrSimonEmms,aledbf,csweichel,iQQBot" />
