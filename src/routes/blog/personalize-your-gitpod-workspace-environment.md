---
author: nancy-chauhan, Siddhant-K-code
date: Thursday, 14 July 2022 11:00:00 UTC
title: Personalize your Gitpod Workspace Environments
slug: personalize-your-gitpod-workspace-environment
excerpt: With Gitpod, switching to remote development becomes frictionless 🚀 You Can personalize your Gitpod workspaces as you configure your IDE Settings & Custom dotfiles.
teaserImage: header.png
image: header.png
---

<script context="module">
  export const prerender = true;
</script>

We know how important it is for you to customize and perfect your development environment. Of course, you want either your favourite IDE from JetBrains, VS Code as your editor, or even vim. You want your optimal configuration of keyboard shortcuts, spaces vs tabs, editor extensions like [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode), editor themes like [Dracula theme](https://draculatheme.com/), and fonts like [FiraCode](https://github.com/tonsky/FiraCode).

With Gitpod, switching to remote development is frictionless 🚀 You can personalize your Gitpod workspaces by configuring your IDE Settings, custom dotfiles and IDE or editor of your choice. Gitpod helps you to get the best of both worlds: ephemeral workspaces and personalization consistent across all Gitpod dev environments.✨

In this article, we'll show you three features in Gitpod for personalisation:

1. How to configure your IDE and editor
2. How to configure Dotfiles
3. How to configure VS Code settings sync
   <br><br>

# 1. IDEs & Editor

Gitpod currently supports various popular IDEs & Editors 🎉. You can edit code in Gitpod using:

- [JetBrains IDE’s](https://www.gitpod.io/docs/references/ides-and-editors) via [JetBrains Gateway](https://www.gitpod.io/docs/integrations/jetbrains-gateway)
- [VS Code in the browser](https://www.gitpod.io/docs/references/ides-and-editors/vscode-browser) and [VS Code on desktop](https://www.gitpod.io/docs/references/ides-and-editors/vscode)
- [Command-line-based](https://www.gitpod.io/docs/references/ides-and-editors/command-line) editors such as Vim

<figure>
<video playsinline autoplay no-controls loop muted class="shadow-medium w-full rounded-xl max-w-3xl mt-x-small" alt="Updating Gitpod IDE preferences to {title}" src="/images/editors/select-jetbrains-ide.mp4"></video>
    <figcaption style="text-align: center;" >Updating Gitpod IDE preferences to choose IDE/editor of your choice</figcaption>
</figure>

To configure a specific IDE or editor of your choice for all new workspaces:

1. You will need to update your [user preferences](https://gitpod.io/preferences).
2. For changes to get reflected, you have to restart a workspace. To read more about this in detail, you can refer to the following [doc](https://www.gitpod.io/docs/references/ides-and-editors).
   <br><br>

# 2. Dotfiles

Dotfiles are a collective name for a user's configuration files. As with any configuration file, Dotfiles are used to customize your environment according to personal requirements. For example: customizing your `git` environment using the `.gitconfig` file, your bash/ zsh shell using the `.bashrc` file or `.zshrc` file, or your `vim` editor using `.vimrc`, all these are done using dotfiles. These can also be fully functional scripts.

Configure Dotfiles in Gitpod [Preferences](https://gitpod.io/preferences) to be loaded on every new workspace.

Dotfiles is not to be confused with the `.gitpod.yml`. Dotfiles are personal to you & they contain all your config settings and preferences that can be consistent and reused across all Gitpod workspaces. Whereas `.gitpod.yml` is used to prepare the dev environment for your project. The `gitpod.yml` is a project-specific file that you check into the root of your repository.

> Note: You should not necessarily use dotfiles to install heavy applications & libraries and instead use Dockerfiles to leverage the [build cache](https://docs.docker.com/develop/develop-images/dockerfile_best-practices/#leverage-build-cache). You can configure custom docker image for your project and can read more about it from [here](https://www.gitpod.io/docs/configure/workspaces/workspace-image).

## How Do Dotfiles Work in a Gitpod Workspace?

<figure class="flex flex-col items-center text-center">
  <img src="/images/blog/personalize-your-gitpod-workspace-environment/dotfiles.png" alt="Multiple services can communincate with each-other when running on the same machine" width="700" />
</figure>

When you create a new Gitpod workspace, the Dotfiles loading process first looks in your [preferences](https://gitpod.io/preferences) to get your dotfiles repository address. If found, the repository is cloned to your new workspace as `.dotfiles` in the `$HOME` directory, before searching for [executable](https://www.gitpod.io/docs/configure/user-settings/dotfiles#:~:text=Make%20sure%20to%20make%20your%20installation%20script%20executable%20with%20chmod%20755%20%3Cinstall%2Dscript%2Dname%3E.sh%20before%20committing%20and%20pushing%20to%20your%20dotfiles%20repository.) scripts like `install.sh`, `bootstrap.sh` (for the exact script names, see the [configure Dotfiles](https://www.gitpod.io/docs/configure/user-settings/dotfiles#:~:text=following%20install%20scripts) page). The dotfiles are synchronously set up before Gitpod starts to handle the `.gitpod.yml` [start tasks](https://www.gitpod.io/docs/configure/workspaces/tasks).

This loading procedure will be repeated each time you create a new Gitpod Workspace. Refer to the [configure Dotfiles](/docs/configure/user-settings/dotfiles) page in our docs to learn more.

## Getting started with Dotfiles in Gitpod

The following video shows an example of how to setup Dotfiles, by configuring [`deno`](https://deno.land/) in our Gitpod Workspace.

<p align="center">
    <iframe title="loom" width="640" height="360" src="https://www.loom.com/embed/d7185cfb6ca54fdeb521073057dc2715" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
</p>

> **Important:** Your installation script should be executable. Enter `chmod 755 <install-script-name>.sh` before committing and pushing it to your dotfiles repository.

1. Add the URL of your dotfiles repository in [`/preferences`](https://gitpod.io/preferences)
2. Save the configuration

All your dotfiles will be configured automatically from the next time you create a new Gitpod Workspace.

> You Can Refer this [demo-dotfiles template](https://github.com/gitpod-io/demo-dotfiles) to Bring your dotfiles to Gitpod.

<br>

# 3. VS Code settings sync 🔁

[Settings Sync](https://code.visualstudio.com/docs/editor/settings-sync) in VS Code lets you always work with your favorite editor setup by sharing your VS Code configuration such as settings, keybindings, and installed extensions across your machines.

While working with Gitpod, you start a new workspace for every task. With Settings Sync, you can avoid resetting your environment for each new workspace 🧡

For VS Code in the browser Gitpod enables Settings Sync by default. Settings Sync keeps polling the backend to ensure your settings are stored, which gets pushed to the Gitpod's server after the first sync. You can learn more about personalizing your workspace in this [video](https://www.gitpod.io/screencasts/personalise-your-workspace).

## Getting started with Settings Sync in VS Code Desktop

`youtube: wMW2JrCqVA4`

1. Install and enable the [Gitpod extension](https://marketplace.visualstudio.com/items?itemName=gitpod.gitpod-desktop).
2. Using the [Command Palette](https://code.visualstudio.com/api/ux-guidelines/command-palette) select: "Settings Sync: Enable signing in with Gitpod".
   With this your preferences will be stored in Gitpod’s server.
3. Restart your VS Code Desktop application.
   > **Important:** You must entirely close VS Code Desktop for changes to take effect.
4. Enable Settings Sync from the Manage gear menu at the bottom of the Activity Bar. Authenticate with Gitpod to enable settings sync.

Read more in the [VS Code Setting Sync](https://www.gitpod.io/docs/references/ides-and-editors/settings-sync) documentation.

## Power of customization

Customizing the settings and tools to your preferences and workflows is an important step when using any development environment. Let us know how personalizing your Gitpod workspace environment makes you more productive by [joining our community](https://www.gitpod.io/community) ✨

If you have any questions, drop by our community [Discord server](https://gitpod.io/chat).
