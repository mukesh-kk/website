---
title: Introducing Teams and Projects
excerpt: Teams & projects - it's now all at your fingertips.
date: 2021-10-15
image: 2021-10-15.jpg
alt: Two overlapping screenshots that show the Teams & Projects user interface
---

<script>
  import Contributors from "$lib/components/changelog/contributors.svelte";
</script>

Up until today, you must have felt at times that your Gitpod dashboard is a pretty empty place 😔. All you had, besides settings and stuff, was a list of your active workspaces (not even old ones without changing the filter - yep yep, we fixed that too 😉).

> We are so stoked to announce **Teams & Projects (& Prebuilds)** available in beta 🎉

To get started right away, [gitpod.io/new](https://gitpod.io/new).

**Teams**

You can now create teams (as many as you want) and invite your co-workers, friends & family to collaborate on your projects.

**Projects**

Remember `.gitpod.yml`, checked in to your project's root directory? It's still the first place we look for Gitpod configuration, but when you create a project in the Gitpod dashboard, we now do our best to be smart and suggest a sensible default configuration for your project (insert something something machine learning - jk, there's no magic).

**Bonus - Prebuilds 🤩**

Nobody asked me, but if they had I would have said the announcement should have been Teams, Projects & Prebuilds 😅. How come?

For the first time ever, we now show you each and every prebuild we run for your project! Check the status, view the logs or trigger new prebuilds from within the dashboard.

When you use the new onboarding workflow at [gitpod.io/new](https://gitpod.io/new), we help you kick off your first prebuild. With prebuilds, Gitpod builds your dev environment for each change you push to your repository. This means, when you're ready to open a new workspace, it'll already have all init start tasks executed.

You can learn more [in the docs](/docs/configure).

Expect more updates to all this over time. For now we'd love to hear about your experience. Please let us know in the [feedback issue](https://github.com/gitpod-io/gitpod/issues/5095), contact us via Twitter [@gitpod](https://twitter.com/gitpod) or chat with us at https://www.gitpod.io/chat.

<p><Contributors usernames="AlexTugarev,gtsiolis,jankeromnes,svenefftinge" /></p>

### Fixes and improvements

- [#6171](https://github.com/gitpod-io/gitpod/pull/6171) - Enable setting of DB username with DB_USERNAME envvar <Contributors usernames="AlexTugarev,JanKoehnlein,MrSimonEmms" />
- [#6185](https://github.com/gitpod-io/gitpod/pull/6185) - Add 'New Workspace' context menu option to all Projects cards <Contributors usernames="gtsiolis,jankeromnes" />
- [#6187](https://github.com/gitpod-io/gitpod/pull/6187) - [projects] Fix Project card bottom row layout <Contributors usernames="gtsiolis,jankeromnes" />
- [#6074](https://github.com/gitpod-io/gitpod/pull/6074) - Truncate commit message on branches and prebuilds <Contributors usernames="geropl,gtsiolis" />
- [#5802](https://github.com/gitpod-io/gitpod/pull/5802) - Update Kubernetes dependencies to v0.22.2Update controller-runtime to v0.10.1 <Contributors usernames="akosyakov,aledbf,csweichel,geropl,jankeromnes" />
- [#6158](https://github.com/gitpod-io/gitpod/pull/6158) - Fix: Ensures that string-based env values defined in `.gitpod.yml` are not set with enclosing quotation marks. <Contributors usernames="akosyakov,iQQBot,loujaybee" />
- [#6090](https://github.com/gitpod-io/gitpod/pull/6090) - [image-builder-mk3] Fix image build error "did not produce a workspace image" <Contributors usernames="aledbf,csweichel" />
- [#6218](https://github.com/gitpod-io/gitpod/pull/6218) - [ws-manager] Introduce stoppedByRequest annotation marking workspaces explicitly stopped using a `StopWorkspace` call <Contributors usernames="aledbf,csweichel" />
- [#6164](https://github.com/gitpod-io/gitpod/pull/6164) - Add admission constraints to support fine-grained cluster selection <Contributors usernames="aledbf,csweichel,geropl,meysholdt,princerachit" />
- [#6107](https://github.com/gitpod-io/gitpod/pull/6107) - Fix re-running a Prebuild with a different out-of-repo configuration <Contributors usernames="AlexTugarev,jankeromnes" />
- [#6166](https://github.com/gitpod-io/gitpod/pull/6166) - [gitpod-protocol] Adjust typescript GRPC options <Contributors usernames="JanKoehnlein,aledbf,csweichel,geropl,laushinka" />
- [#6163](https://github.com/gitpod-io/gitpod/pull/6163) - Refactor GRPC TLS connection defaults <Contributors usernames="aledbf,csweichel" />
- [#6069](https://github.com/gitpod-io/gitpod/pull/6069) - Allow importing of Helm dependencies <Contributors usernames="MrSimonEmms,aledbf,corneliusludmann,csweichel,geropl" />
- [#6095](https://github.com/gitpod-io/gitpod/pull/6095) - VS Code: Add a Get Started with Gitpod walk-through <Contributors usernames="akosyakov,corneliusludmann,loujaybee,mikenikles" />
