---
title: September Gitpod Release 2022
excerpt: The latest Gitpod updates for September 2022, including improvements for JetBrains, improving the startup times for large repos and lots of other fixes and improvements.
date: 2022-09-30
image: 2022-09-30.jpg
ogImage: 2022-09-30-og.png
alt:
---

<script>
  import Contributors from "$lib/components/changelog/contributors.svelte";
</script>

Welcome to the September edition of the Gitpod Changelog!

**Key highlights**

- [JetBrains Backend Control Center - Gitpod workspace actions](#jetbrains-backend-control-center---gitpod-workspace-actions)
- [JetBrains Backend Control Center - Workspace Classes](#jetbrains-backend-control-center---workspace-classes)
- [JetBrains Reconnect With Open Windows](#jetbrains-reconnect-with-open-windows)
- [New Ports View in VS Code](#new-ports-view-in-vs-code)
- [SSH Gateway default for Self-Hosted VS Code Desktop Users](#ssh-gateway-default-for-self-hosted-vs-code-desktop-users)
- [Configurable core dump behavior](#configurable-core-dump-behavior)
- [Faster startup times for large repositories](#faster-startup-times-for-large-repositories)
- [Fixes and improvements](#fixes-and-improvements)

### JetBrains Backend Control Center - Gitpod workspace actions

![The Backend Control Center in JetBrains showing various Gitpod workspace actions](/images/jetbrains-gateway/workspace-actions.png)
_Caption: The Backend Control Center in JetBrains showing various Gitpod workspace actions_

If you're a Gitpod VS Code user, you know that in the command palette you can do things like:

1. Stop your workspace
2. Open the Gitpod dashboard
3. Open in VS Code Desktop

...and much more.

However, for JetBrains users, there was no way to access these common Gitpod commands without leaving the workspace. Or worse, opening your workspace using VS Code, rather than your preferred JetBrains IDE. It's important that all the Gitpod editors and IDEs have a first-class experience for our users, no matter their preference, and our Jetbrains IDEs are no exception.

But now, we've added all of the Gitpod workspace actions you could do in VS Code into JetBrains.

You can now access these commands through:

- The Backend Control Center in JetBrains
- Or via the JetBrains IDE search menu

That means from within a JetBrains IDE you can directly:

1. [Open the Gitpod Dashboard](https://gitpod.io/)
2. [Open your workspace context](https://www.gitpod.io/docs/introduction/learn-gitpod/context-url)
3. [Open your user settings](https://gitpod.io/settings)
4. [Manage workspace access control](https://www.gitpod.io/docs/integrations)
5. [Go to the Gitpod documentation](https://gitpod.io/docs)
6. [Report an issue on GitHub](https://github.com/gitpod-io/gitpod/issues/new/choose)
7. [Follow Gitpod on Twitter](https://twitter.com/gitpod)
8. [Access our community server on Discord](https://www.gitpod.io/chat)
9. [Upgrade your Gitpod subscription](https://www.gitpod.io/pricing)
10. [Stop your workspace](https://www.gitpod.io/docs/introduction/learn-gitpod/the-life-of-a-workspace#timeouts)
11. [Extend your workspace timeout](https://www.gitpod.io/docs/introduction/learn-gitpod/the-life-of-a-workspace#timeouts)
12. [Share your a snapshot of your workspace](https://www.gitpod.io/docs/configure/workspaces/collaboration#sharing-snapshots)

All from the comfort of your IDE.

### JetBrains Backend Control Center - Workspace Classes

![The Backend Control Center in JetBrains showing workspace class information (e.g. 6 vCPU, 12GB memory)](/images/jetbrains-gateway/jetbrains-backend-control-center.png)
_Caption: The Backend Control Center in JetBrains showing workspace class information (e.g. 6 vCPU, 12GB memory)_

Did you know that when you're working with JetBrains IDEs in Gitpod you can [monitor the performance of your workspace in real-time](/docs/references/ides-and-editors/intellij#workspace-performance) via the JetBrains Backend Control Center? This feature is useful when your workspace isn't performing as you'd expect and you want to gather more information. In addition to our recent additions of `Workspace CPU` and `Workspace Memory` we've now added the actual workspace class to the information shown in the control center.

... but why? When you work in a cloud developer environment, you should have the flexibility to choose the right performance profile for your project. Recently we've been working to bring to Gitpod a feature we call "Workspaces Classes" [#8261](https://github.com/gitpod-io/gitpod/issues/8261). With Workspaces Classes you'll be able to select workspace specifications that better match your use case. For example, you will be able to get more powerful workspaces to run larger Java projects and IntelliJ.

So since we needed somewhere to show you this Workspace Class information, you can now find it in the JetBrains performance center.

> **Tip:** You can run [`gp top`](https://www.gitpod.io/docs/command-line-interface#top) to see performance info no matter the IDE or editor you're using.

### JetBrains Reconnect With Open Windows

![](/images/jetbrains-gateway/intellij-workspace-already-open.png)

Previously, with JetBrains if you tried to open your workspace twice, the Gitpod JetBrains Gateway plugin would allow you, sometimes leading to odd behaviors or bugs, since JetBrains Gateway is designed to only allow one window to open. Now, when you try to open an already opened window with JetBrains Gateway, you'll get a prompt to remind you that the workspace is already opened.

### New Ports View in VS Code

![The new VS Code Browser ports view, shown at the bottom of VS Code alongside the terminals and output tabs](/images/changelog/2022-08-01/ports.png)
_Caption: The new VS Code Browser ports view, shown at the bottom of VS Code alongside the terminals and output tabs_

You might have seen in our last changelog that [we mentioned a new ports view](https://www.gitpod.io/changelog/new-ports-explorer-changelog-view-and-connection-improvements-for-vs-code#new-ports-explorer-in-vs-code-browser) being added to VS Code (in the browser). At that time we were rolling out the feature to only subsets of our Gitpod users to see how users responded. However, after some good feedback from you (our users) we have pushed the feature out to all users! 🥳

We introduced the new ports view as we wanted to align our experiences on VS Code Desktop with VS Code Browser. We know lots of users like to use Gitpod in the browser sometimes for "smaller changes" like reviewing pull requests. But for more "deep work" many users opt for VS Code Desktop. However and wherever you choose to code, Gitpod will make that as much a comfortable and familiar experience as you're used to.

### SSH Gateway default for Self-Hosted VS Code Desktop Users

We have previously shared about how we [updated the underlying connection method of VS Code Desktop](https://www.gitpod.io/blog/vscode-desktop-ssh-updates) to Gitpod for our [new SSH Gateway approach](/docs/references/ides-and-editors/vscode#connecting-to-vs-code-desktop-ssh). The feature was first released defaulted off for all users. We have since enabled this SSH access method for all users of [gitpod.io](http://gitpod.io/), and now we've enabled the approach for all VS Code Desktop users of Gitpod everywhere, no matter which installation they're using.

### Configurable core dump behavior

Debugging applications in Gitpod that are written with C++, Rust, or Python just got easier.

We've added a new `coreDump` configuration property to the `.gitpod.yml` file, allowing you to configure your workspace core dump behavior. You can enable/disable core dumps, or set soft and hard limits for them. For information on how to configure this property, check out the [core dump property](https://www.gitpod.io/docs/references/gitpod-yml#coredump) of the `.gitpod.yml`

### Faster startup times for large repositories

Are you working with a large git repository? You want to hear about this.

We have changed how files are fetched from git into Gitpod on workspace start, to make your experience faster. In our testing of the changes, we observed differences from around 2m30s down to 40s. If you're using large repositories with Gitpod, give it a try and [let us know](https://gitpod.io/support) about your experience 🚀

### Fixes and improvements

- [#13318](https://github.com/gitpod-io/gitpod/pull/13318) - Keep the last selected team selected <Contributors usernames="gtsiolis,laushinka,svenefftinge" />
- [#13402](https://github.com/gitpod-io/gitpod/pull/13402) - [server] Fix for the inability to delete teams that were not subscribed to usage based pricing <Contributors usernames="andrew-farries,jankeromnes" />
- [#13438](https://github.com/gitpod-io/gitpod/pull/13438) - Fix missing port in parsed clone URL. <Contributors usernames="AlexTugarev,geropl" />
- [#13205](https://github.com/gitpod-io/gitpod/pull/13205) - JetBrains: VM options to install plugins <Contributors usernames="akosyakov,andreafalzetti,filiptronicek,subinamathew" />
- [#12445](https://github.com/gitpod-io/gitpod/pull/12445) - Support for storing VS Code edit sessions in sync server <Contributors usernames="akosyakov,andrew-farries,filiptronicek,jeanp413,mustard-mh" />
- [#13295](https://github.com/gitpod-io/gitpod/pull/13295) - Avoid second prebuild been triggered on same commit. <Contributors usernames="AlexTugarev,geropl" />
- [#13296](https://github.com/gitpod-io/gitpod/pull/13296) - Fail prebuild if image build fails. <Contributors usernames="AlexTugarev,easyCZ" />
- [#13186](https://github.com/gitpod-io/gitpod/pull/13186) - Restrict reuse of phone numbers for verification <Contributors usernames="atduarte,easyCZ,svenefftinge" />
- [#13203](https://github.com/gitpod-io/gitpod/pull/13203) - [server]: Add a liveness probe which fails when the nodejs event loop lag exceeds a certain threshold <Contributors usernames="andrew-farries,easyCZ" />
- [#13080](https://github.com/gitpod-io/gitpod/pull/13080) - JetBrains Gateway: Avoid 30 seconds delay when connecting to a workspace using an expired token <Contributors usernames="andreafalzetti,felladrin" />
- [#13161](https://github.com/gitpod-io/gitpod/pull/13161) - Admin dashboard now has pagination <Contributors usernames="easyCZ,geropl,svenefftinge" />
- [#13108](https://github.com/gitpod-io/gitpod/pull/13108) - Fix reading .gitpod.yml for self-managed GHE instances. <Contributors usernames="AlexTugarev,geropl" />
- [#13065](https://github.com/gitpod-io/gitpod/pull/13065) - Added a usage view that displays past workspace sessions on individual and team accounts. <Contributors usernames="easyCZ,jldec,svenefftinge" />
- [#13084](https://github.com/gitpod-io/gitpod/pull/13084) - Update GoLand IDE image to version 222.4167.25. <Contributors usernames="felladrin" />
- [#13057](https://github.com/gitpod-io/gitpod/pull/13057) - improved automated code configuration service for `go` <Contributors usernames="Siddhant-K-code,svenefftinge" />
- [#13001](https://github.com/gitpod-io/gitpod/pull/13001) - Update GitLab API library, which fixes paginated API requests. <Contributors usernames="AlexTugarev,gtsiolis,metcalfc,svenefftinge" />
- [#13033](https://github.com/gitpod-io/gitpod/pull/13033) - Update PhpStorm IDE image to version 222.4167.33. <Contributors usernames="felladrin" />
- [#13032](https://github.com/gitpod-io/gitpod/pull/13032) - Update PyCharm IDE image to version 222.4167.33. <Contributors usernames="felladrin" />
- [#12670](https://github.com/gitpod-io/gitpod/pull/12670) - Dismiss Usage Limit notifications automatically. <Contributors usernames="AlexTugarev,geropl,jldec,svenefftinge" />
- [#12994](https://github.com/gitpod-io/gitpod/pull/12994) - Update IntelliJ IDEA IDE image to version 222.4167.29. <Contributors usernames="felladrin" />
- [#12412](https://github.com/gitpod-io/gitpod/pull/12412) - Add beta notice and label on usage <Contributors usernames="easyCZ,filiptronicek,gtsiolis,laushinka" />
- [#12852](https://github.com/gitpod-io/gitpod/pull/12852) - Add link to support on phone verification <Contributors usernames="gtsiolis,svenefftinge" />
- [#12833](https://github.com/gitpod-io/gitpod/pull/12833) - Improve fetching repositories loading state <Contributors usernames="gtsiolis,svenefftinge" />
- [#12771](https://github.com/gitpod-io/gitpod/pull/12771) - Show personal Usage page. <Contributors usernames="AlexTugarev,andrew-farries" />
- [#12621](https://github.com/gitpod-io/gitpod/pull/12621) - JetBrains IDEs now have actions related to Gitpod, which can be accessed via Control Center and via the Search Menu. <Contributors usernames="akosyakov,andreafalzetti,felladrin" />
- [#12669](https://github.com/gitpod-io/gitpod/pull/12669) - Reword "Spending Limit" to "Usage Limit" <Contributors usernames="AlexTugarev,andrew-farries,jldec" />
- [#12568](https://github.com/gitpod-io/gitpod/pull/12568) - JetBrains: Provide workspace class info in Backend Control Center <Contributors usernames="akosyakov,andreafalzetti,felladrin" />
- [#12232](https://github.com/gitpod-io/gitpod/pull/12232) - Fixed JetBrains connection loop when connecting twice to the same workspace <Contributors usernames="akosyakov,andreafalzetti,felladrin" />
