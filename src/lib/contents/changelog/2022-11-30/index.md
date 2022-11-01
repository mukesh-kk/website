---
title: October Gitpod Release 2022
excerpt: The latest Gitpod updates for October 2022, including new JetBrains IDEs, private workspace images and lots of other fixes and improvements.
date: 2022-10-31
image: 2022-10-31.jpg
ogImage: 2022-10-31-og.jpg
alt:
---

<script>
  import Contributors from "$lib/components/changelog/contributors.svelte";
  import LinkButton from "$lib/components/ui-library/link-button/link-button.svelte"
</script>

Welcome to the October 2022 edition of the Gitpod Changelog!

**Key highlights**

- [Even more power! ⚡ Try large workspaces with usage-based billing 🎉](#even-more-power--try-large-workspaces-with-usage-based-billing)
- [Start workspaces based on existing prebuilds ⚡️](#start-workspaces-based-on-existing-prebuilds)
- [RubyMine and Webstorm IDEs now in beta 🚀](#rubymine-and-webstorm-ides-now-in-beta)
- [New "exposed ports" view in VS Code Desktop 🔌](#new-exposed-ports-view-in-vs-code-desktop)
- [Ports sorting now based on your gitpod.yml definition ⏬](#ports-sorting-now-based-on-your-gitpodyml-definition)
- [Easily find information about your workspace with `gp info` ℹ️](#easily-find-information-about-your-workspace-with-gp-info)
- [VS Code ports view is now responsive ⏩](#vs-code-ports-view-is-now-responsive)
- [Projects now only created under teams, not personal accounts ⚠️](#projects-now-only-created-under-teams-not-personal-accounts)
- [Using private workspace images (Alpha) 🔐](#using-private-workspace-images-alpha)

## Even more power! &#x26A1; Try large workspaces with usage-based billing &#x1F389;

> **Important:** Prices and terms are subject to change.

With [usage-based billing](https://www.gitpod.io/docs/configure/billing/usage-based-billing) you get early access to [workspace classes](https://www.gitpod.io/docs/configure/workspaces/workspace-classes), allowing you to customize your workspace resources. To get access to [usage-based billing](https://www.gitpod.io/docs/configure/billing/usage-based-billing) either for teams or individual users, please [contact us](https://www.gitpod.io/contact/support).

**How does usage-based billing work?**

- [Individual users](/docs/configure/billing/usage-based-billing#configure-personal-billing) receive 500 free credits per month on the free plan, these credits are equivalent to 50 Standard workspace hours or 25 Large workspace hours.
- For users who upgrade to the personal paid plan at €/$ 9.00 per month, workspace usage allowance increases to 1000 credits.
- The standard pay-as-you-go rate for paid users, and [for teams](/docs/configure/billing/usage-based-billing#configure-team-billing), is €/$ 0.036 per credit.
- Existing paid plans need to be cancelled for usage-based billing to work.

<br/>

<LinkButton href="/contact/support" size="medium" variant="primary">I want early access!</LinkButton>

## Start workspaces based on existing prebuilds ⚡️

![Prebuild Detail page - Start new (workspace with this prebuild) button](/images/changelog/2022-10-31/start-new-workspace-with-this-prebuild.jpg)
_Start a new workspace based on an existing prebuild_

You can now start workspaces using existing prebuilds. This helps when you have a repo with many commits, so you're not left waiting for the latest prebuild to finish. To get started, select a prebuild from your project prebuild list, and click "**New Workspace (with this prebuild)**"

## JetBrains RubyMine and WebStorm IDEs now in beta &#x1F680;

![JetBrains RubyMine and WebStorm logos connected to a Gitpod logo](/images/blog/webstorm-rubymine-now-in-beta/webstorm-rubymine-announcement-gitpod.webp)

We are continuing to expand support for JetBrains IDEs as part of our [official partnership](https://www.gitpod.io/blog/gitpod-jetbrains) with [JetBrains](https://www.jetbrains.com/).

See the [RubyMine & WebStorm announcement](https://www.gitpod.io/blog/webstorm-rubymine-now-in-beta) for more.

## New "exposed ports" view in VS Code Desktop &#x1F50C;

![A panel in VS Code Desktop listing open ports in the workspace](/images/editors/vscode-exposed-ports.png)

To give you all the power of Gitpod, we've added a new tab, <kbd>EXPOSED PORTS</kbd>, which gives you additional functionality in addition to the regular ports view of _Remote - SSH_, like port visibility (public/private).

> **Note:** Due to constraints with [Remote - SSH extension](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-ssh), we cannot extend the default VS Code ports view.

## Ports sorting now based on your gitpod.yml definition &#x23EC;

Ports shown in all Gitpod clients are now ordered based on:

1. The order of the ports definition in the `.gitpod.yml`
2. All other ports are numerically sorted in ascending order.

This change applies to all of VS Code, JetBrains IDEs, SSH and the Gitpod CLI.

Example output of `gp ports list`:

```sh
| PORT  | STATUS         | URL                            | NAME & DESCRIPTION |
| ----- | -------------- | ------------------------------ | ------------------ |
| 3000  | open (public)  | https://3000-repo...gitpod.io  | Web Server Preview |
| 5900  | open (private) | https://5900-repo...gitpod.io  | Postgres Database  |
| 5555  | open (private) | https://5555-repo...gitpod.io  |                    |
| 36341 | open (private) | https://36341-repo...gitpod.io |                    |
```

See [ports](/docs/configure/workspaces/ports) documentation for more.

<!-- https://github.com/gitpod-io/gitpod/pull/13788 -->

## Easily find information about your workspace with `gp info` ℹ️

You can now display information about the current [workspace](/docs/configure/workspaces) (such as the workspace ID and URL) and also the [workspace class](/docs/configure/workspaces/workspace-classes), using the new command from [Gitpod CLI](/docs/references/gitpod-cli) called `gp info`.

**Example output:**

```sh
  Workspace ID    : gitpodio-gitpod-4q1200dvfcf
  Instance ID     : 8a6188a3-4c7f-49fe-aa4d-db968c11e183
  Workspace class : Large: Up to 8 vCPU, 16GB memory, 50GB disk
  Workspace URL   : https://gitpodio-gitpod-4q1200dvfcf.ws-eu67.gitpod.io
  Cluster host    : ws-eu67.gitpod.io
```

See the [Gitpod CLI](/docs/references/gitpod-cli#info) reference page for more.

> [Default environment variables](/docs/configure/projects/environment-variables#default-environment-variables) will soon be deprecated, please update all scripts to use `gp info --json`.

## VS Code ports view is now responsive &#x23E9;

<figure>
<video controls playsinline autoplay loop muted class="shadow-medium w-full rounded-xl max-w-3xl mt-x-small" alt="Responsive ports view in VS Code" src="/images/changelog/2022-10-31/responsive-ports.webm" type="video/webm"></video>
    <figcaption><i>New ports view on left navigation, with responsive design</i></figcaption>
</figure>

The ports view in VS Code is now responsive depending on the ports view width. The view defaults to the bottom VS Code navigation bar, however, the ports view can be drag-and-dropped to the sidebar if you prefer. You can access all port actions as normal on all views. In larger views, more information about your ports is shown.

<!-- TODO: Should this wording not be visibilty? -->

For feedback let us know on the [ports experience GitHub issue](https://github.com/gitpod-io/gitpod/issues/9262).

## Projects now only created under teams, not personal accounts ⚠️

- You can no longer create Gitpod Projects under personal accounts.
- All projects must now be created as part of a team.
- Existing personal projects will continue to work.

## Using private workspace images is now in alpha

Did you know that you can [use a private Docker image](https://www.gitpod.io/docs/configure/workspaces/workspace-image#use-a-private-docker-image) with Gitpod? Private Docker image support for workspace images has been possible for some time, however it was an undocumented feature. We've now updated our documentation so that you can more easily give try out the feature. As the feature is currently alpha, please [raise an issue](https://github.com/gitpod-io/gitpod/issues/new/choose) for any feedback.

<!--- BEGIN_AUTOGENERATED_CHANGES -->

## Dashboard

- [#14054](https://github.com/gitpod-io/gitpod/pull/14054) - Update usage-based billing balance used progress indicator height <Contributors usernames="gtsiolis,filiptronicek,jankeromnes" />
- [#14056](https://github.com/gitpod-io/gitpod/pull/14056) - Port 3000 not showing if no `.gitpod.yml` in project <Contributors usernames="mustard-mh,Siddhant-K-code,easyCZ" />
- [#13744](https://github.com/gitpod-io/gitpod/pull/13744) - Prevent removing the owners of a team if the team size is 1 (or less) <Contributors usernames="easyCZ,jankeromnes" />
- [#13621](https://github.com/gitpod-io/gitpod/pull/13621) - Fix rendering Personal/Team billing menu entries <Contributors usernames="geropl,laushinka" />
- [#13414](https://github.com/gitpod-io/gitpod/pull/13414) - Deprecation of the ability to create projects under an individual account for new users. <Contributors usernames="svenefftinge,easyCZ,gtsiolis,jldec" />
- [#13538](https://github.com/gitpod-io/gitpod/pull/13538) - Update "Open Source" plan name to "Free" plan <Contributors usernames="gtsiolis,andrew-farries,filiptronicek" />

## Docs

- [#2683](https://github.com/gitpod-io/website/pull/2683) - Add Azure single-cluster guide <Contributors usernames="adrienthebo,MrSimonEmms,filiptronicek,mrzarquon,utam0k" />
- [#2919](https://github.com/gitpod-io/website/pull/2919) - Add an example for installing docker in a custom workspace image <Contributors usernames="WVerlaek,atduarte,filiptronicek,kylos101,utam0k" />
- [#2908](https://github.com/gitpod-io/website/pull/2908) - Instruct users to ensure they have Tailscale 1.32 or later <Contributors usernames="mrzarquon,Siddhant-K-code,filiptronicek,kylos101,sagor999" />
- [#2886](https://github.com/gitpod-io/website/pull/2886) - New section on configuring a custom Dockerfile with non-gitpod base image <Contributors usernames="WVerlaek,axonasif,filiptronicek,jenting,kylos101" />

## Gitpod CLI

- [#14040](https://github.com/gitpod-io/gitpod/pull/14040) - Bugfix: avoid failure on `ports list` when port is not exposed <Contributors usernames="andreafalzetti,felladrin,filiptronicek" />
- [#13788](https://github.com/gitpod-io/gitpod/pull/13788) - Display sorted ports with both `gp-cli` and VSCode Browser `PortsView` <Contributors usernames="mustard-mh,akosyakov,easyCZ,filiptronicek,iQQBot" />
- [#13607](https://github.com/gitpod-io/gitpod/pull/13607) - `gp top` table output updated to match `gp info` <Contributors usernames="WVerlaek,andreafalzetti,filiptronicek" />

## JetBrains

- [#13990](https://github.com/gitpod-io/gitpod/pull/13990) - Update JetBrains Backend Plugin to work with EAP IDEs v223.7126 <Contributors usernames="andreafalzetti,felladrin" />
- [#14182](https://github.com/gitpod-io/gitpod/pull/14182) - Fix 'gp open' command to open files in JetBrains Client instead of the backend IDE <Contributors usernames="felladrin,akosyakov,andreafalzetti" />
- [#13966](https://github.com/gitpod-io/gitpod/pull/13966) - Fixed the "Learn More" button behavior from JetBrains Gateway home screen. <Contributors usernames="felladrin,andreafalzetti" />
- [#13836](https://github.com/gitpod-io/gitpod/pull/13836) - Update GoLand IDE image to version 222.4345.24. <Contributors usernames="felladrin" />
- [#13747](https://github.com/gitpod-io/gitpod/pull/13747) - Fixed auto-port-forwarding on JetBrains EAP IDEs <Contributors usernames="felladrin,andreafalzetti" />
- [#13797](https://github.com/gitpod-io/gitpod/pull/13797) - Update PyCharm IDE image to version 222.4345.23. <Contributors usernames="felladrin" />
- [#13758](https://github.com/gitpod-io/gitpod/pull/13758) - Update RubyMine IDE image to version 222.4345.14. <Contributors usernames="felladrin" />
- [#13757](https://github.com/gitpod-io/gitpod/pull/13757) - Update WebStorm IDE image to version 222.4345.14. <Contributors usernames="felladrin" />
- [#13759](https://github.com/gitpod-io/gitpod/pull/13759) - Update PhpStorm IDE image to version 222.4345.15. <Contributors usernames="felladrin" />
- [#13642](https://github.com/gitpod-io/gitpod/pull/13642) - Update IntelliJ IDEA IDE image to version 222.4345.14. <Contributors usernames="felladrin, filiptronicek" />

## VS Code

### VS Code Browser

- [#13838](https://github.com/gitpod-io/gitpod/pull/13838) - Make the VS Code <kbd>PORTS</kbd> view responsive <Contributors usernames="mustard-mh,filiptronicek,iQQBot" />
- [#14102](https://github.com/gitpod-io/gitpod/pull/14102) - Fixes default location of the <kbd>Ports</kbd> view <Contributors usernames="mustard-mh,filiptronicek,jeanp413" />
- [#13844](https://github.com/gitpod-io/gitpod/pull/13844) - Fix the <kbd>PORTS</kbd> view address opening twice in some browsers <Contributors usernames="mustard-mh,filiptronicek,iQQBot" />

### VS Code Desktop

- [#26](https://github.com/gitpod-io/gitpod-vscode-desktop/pull/26) - Add `Install Local Extensions` command to explicitly install local extensions.
  On connection try to install local extensions but quietly without notifications. <Contributors usernames="akosyakov,mustard-mh" />

## Workspace

- [#13495](https://github.com/gitpod-io/gitpod/pull/13495) - All running processes receive a SIGTERM when a workspace shuts down. <Contributors usernames="svenefftinge,akosyakov,csweichel,easyCZ" />
- [#13268](https://github.com/gitpod-io/gitpod/pull/13268) - Show an error if the workspace's persistent volume is smaller than the restore volume snapshot <Contributors usernames="jenting,utam0k" />

### Workspace Images

- [#956](https://github.com/gitpod-io/workspace-images/pull/956) - Use tailscale 1.32 or later and avoid DNS issues <Contributors usernames="kylos101,aledbf,atduarte,mrzarquon,sagor999" />
- [#953](https://github.com/gitpod-io/workspace-images/pull/953) - Update `brew` layer to get recent versions of all available homebrew packages <Contributors usernames="andrew-farries,aledbf,sagor999" />

## Fixes and improvements

- [#14238](https://github.com/gitpod-io/gitpod/pull/14238) - Deactivate team scope selector on personal usage <Contributors usernames="gtsiolis,jankeromnes" />
- [#14081](https://github.com/gitpod-io/gitpod/pull/14081) - Show warning for inactive projects and allow to resume prebuilds again. <Contributors usernames="AlexTugarev,geropl,gtsiolis,jankeromnes" />
- [#13831](https://github.com/gitpod-io/gitpod/pull/13831) - Reliably close Workspaces which fail to start for whatever reason <Contributors usernames="geropl,easyCZ" />
- [#13801](https://github.com/gitpod-io/gitpod/pull/13801) - Implement a 'Use Last Successful Prebuild' workspace creation mode <Contributors usernames="jankeromnes,geropl,mbrevoort" />
- [#13664](https://github.com/gitpod-io/gitpod/pull/13664) - Enable the protected secrets by default <Contributors usernames="kylos101,jenting,nandajavarma,svenefftinge,utam0k" />
- [#13768](https://github.com/gitpod-io/gitpod/pull/13768) - Add support for opening specific prebuilds <Contributors usernames="jankeromnes,csweichel,geropl,svenefftinge" />
- [#13822](https://github.com/gitpod-io/gitpod/pull/13822) - Support multi-line environment variables in SSH <Contributors usernames="iQQBot,filiptronicek,mustard-mh" />
- [#13745](https://github.com/gitpod-io/gitpod/pull/13745) - Fix branch context for BitBucket Server <Contributors usernames="AlexTugarev,easyCZ" />
- [#2975](https://github.com/gitpod-io/website/pull/2975) - Moves this release back to 2022-10-27 <Contributors usernames="mrzarquon,lucasvaltl" />
- [#2959](https://github.com/gitpod-io/website/pull/2959) - Add October 2022 self-hosted release note <Contributors usernames="nandajavarma,MrSimonEmms,Siddhant-K-code,adrienthebo,lucasvaltl" />
- [#2951](https://github.com/gitpod-io/website/pull/2951) - Documented private Docker registries support <Contributors usernames="atduarte,Siddhant-K-code,kylos101" />
- [#2966](https://github.com/gitpod-io/website/pull/2966) - Fixes typo and capitalization in SCM names <Contributors usernames="mrzarquon,securitymirco" />

<!--- END_AUTOGENERATED_CHANGES -->
