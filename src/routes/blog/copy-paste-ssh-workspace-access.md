---
author: iqqbot, loujaybee
date: Wednesday, 20 April 2022 13:00:00 UTC
excerpt: Easily access your Gitpod workspace by copy/pasting a single SSH command from the gitpod dashboard.
slug: copy-paste-ssh-workspace-access
title: SSH for workspaces as easy as copy/paste
image: header.jpg
teaserImage: header.jpg
---

<script context="module">
  export const prerender = true;
</script>

> **Update (July 2022):** You can now also access workspaces with an [SSH key](/blog/ssh-key-upload).

Developer experience is sometimes about making big changes, such as migrating to a new industry-defining tool or technology. But sometimes developer experience is about paying attention to the little things. Taking actions that we do as developers every day, and making them quicker, easier and removing friction.

Recently, we shipped a feature on Gitpod that we’re excited to share with you, and we hope that it brings some more joy to your developer experience with Gitpod.

**As of today, in Gitpod you can now get access to a Gitpod workspace directly via SSH with a one-liner copy/paste from the Gitpod dashboard.**

## How does workspace access via copy/paste SSH work?

For those using Gitpod, you’ll know that you can already get SSH access into a Gitpod workspace via the [Gitpod Local Companion](https://www.gitpod.io/docs/references/ides-and-editors/local-companion) (currently in beta). However, we still saw the need from our users for a super easy, quick way to get direct SSH access to a workspace.

All you have to do is visit the Gitpod dashboard, click the more actions menu at the right-hand side of your workspace list, copy/paste the SSH command into a terminal, and voila!

You’re SSH’ed into your Gitpod workspace—“ready to code”.

<figure>
    <img src="/images/docs/ssh-copy-paste-dashboard.gif" alt="Copy pasting the SSH command from the dashboard">
    <figcaption>Copy pasting the SSH command from the dashboard</figcaption>
</figure>

You can also copy/paste your SSH access from the workspace start page, which is shown to users who have selected a desktop IDE or editor as their [preference](https://gitpod.io/preferences).

<figure>
    <img src="/images/docs/ssh-copy-paste-workspace-start.gif" alt="Copy pasting the SSH command from the workspace start page">
    <figcaption>Copy pasting the SSH command from the workspace start page</figcaption>
</figure>

**Note:** SSH authentication is provided using a shared workspace token that is refreshed on each workspace start. So, as always, be careful where you copy/paste the link.

If you're one of our many users who lives in the [command-line](/docs/references/ides-and-editors/command-line), rather than in [an editor or IDE](/docs/references/ides-and-editors), you can also combine SSH copy/paste access to Gitpod workspaces with Gitpod features like [dotfiles](https://www.gitpod.io/docs/configure/user-settings/dotfiles), to get your workflow running just the way that you like it.

Now, some of you might be wondering why we’re so excited about SSH copy/paste access to Gitpod workspaces? And that’s because it’s one of the many ways we’re making Gitpod seamless for professional teams to use Gitpod for developing using any language, technology or workflow.

## Remote Development for every team

At Gitpod, we’ve been working very closely with our [customers](https://www.gitpod.io/customers) to remove any friction we see for the professional development teams who are using Gitpod. Any developer should be able to use Gitpod in as seamless way as possible—certainly a challenge!

Because, not all tech companies are set up with the same architecture or technology. Not all developers work in exactly the same way, using the same tools, languages or frameworks. And not all development work looks exactly the same.

But that’s a good thing. Choice and flexibility to choose the right tool for the job is essential. And that’s precisely why we build Gitpod to be flexible, eg. by [building Gitpod on top of ubiquitous technologies like Docker](https://www.gitpod.io/docs/configure/workspaces/workspace-image). We integrate, we don’t dictate.

For editing your code, you can use [VS Code in the browser](https://www.gitpod.io/docs/references/ides-and-editors/vscode-browser), [VS Code on desktop](https://www.gitpod.io/docs/references/ides-and-editors/vscode), and using JetBrains IDE’s via [JetBrains Gateway](https://www.gitpod.io/docs/integrations/jetbrains-gateway). Adding copy/paste SSH support just makes it that little bit easier for developers who prefer to work directly in their terminal, or for those times you need to hop into a Gitpod workspace to execute some commands.

Give the new Gitpod copy/paste SSH access a go, and let us know what you think by [joining the community](https://www.gitpod.io/community). We look forward to hearing from you!
