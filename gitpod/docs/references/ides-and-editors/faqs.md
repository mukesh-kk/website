---
section: ides-and-editors
title: FAQs
---

<script context="module">
  export const prerender = true;
</script>

# FAQs

## Is there a limit of IDE/editor connections to Gitpod?

There is no hard-limit about how many IDE/editors can be connected to a running Gitpod workspace. All connected IDEs/editors will have access to the same underlying file system and directories.

## What version of VS Code runs in Gitpod (in the browser)?

VS Code in the browser in Gitpod uses a fork of [VS Code](https://github.com/microsoft/vscode) called [openvscode-server](https://github.com/gitpod-io/openvscode-server). Gitpod actively monitors VS Code's release cycle, and releases the latest version of VS Code shortly after the upstream repository is updated. You can find more information about which version of VS Code is running in the browser by navigating to "Help > About" from a running Gitpod workspace.

## Does Gitpod VS Code settings sync work with other products (e.g. Codespaces)?

Gitpod doesn't currently support settings sync with other hosted VS Code environments, such as [Codespaces](https://github.com/features/codespaces) or [vscode.dev](https://vscode.dev/).

## My VS Code extensions are not syncing, what should I do?

1. When installing an extension in Gitpod using the `Install (Do Not Sync)` option.
2. Extensions defined in [`gitpod.yml`](https://www.gitpod.io/docs/references/gitpod-yml/)
3. Extensions manually installed from a `vsix` file

## Can I use both a desktop IDE and a browser editor in Gitpod?

Yes, you can. Both desktop and browser IDEs/editors have full access to files and directories within the workspace. So, when you connect to your Gitpod workspace from your Desktop you can also access your workspace via your browser. This means browser-based editing can either be used as your first-choice editor, or as a "fall back" alternative option for when you want to make edits on the move. With Gitpod, where and how you edit your code is very flexible.

## What is the preferred IDE/editor for Gitpod?

There are many supported ways to edit your code in Gitpod, there is no preferred experience. Gitpod is intended to be flexible to allow you and your team to use the tools you are most familiar and comfortable with. You can edit code in Gitpod using:

1. [JetBrains IDE's](/docs/references/ides-and-editors) via [JetBrains Gateway](/docs/integrations/jetbrains-gateway)
2. [VS Code in the browser](/docs/references/ides-and-editors/vscode-browser) and [VS Code on desktop](/docs/references/ides-and-editors/vscode)
3. [Command-line](/docs/references/ides-and-editors/command-line) based editors such as Vim

Please see the [IDEs & editors](/docs/references/ides-and-editors) documentation for more details.

## Do I need a license to use JetBrains and Gitpod?

The licensing of Remote Development is handled on the local machine and is covered by your existing active IDE license. See [JetBrains documentation](https://www.jetbrains.com/help/idea/remote-development-starting-page.html#licensing) for more.

## Will Gitpod support all the JetBrains IDE's?

Yes, the plan is to eventually support all of the JetBrains IDE's. Please refer to the [Gitpod roadmap](https://www.gitpod.io/roadmap) for future updates.

## Does Gitpod support the IntelliJ IDEA Community edition?

No, JetBrains Remote Development and Gateway are available only in the IntelliJ IDEA Ultimate edition, please refer to [IntelliJ IDEA FAQ](https://www.jetbrains.com/help/idea/faq-about-remote-development.html#community).

## Will Gitpod support JetBrains Fleet?

[JetBrains Fleet](https://www.jetbrains.com/fleet/) is a next-generation IDE from JetBrains. The currently supported method of using JetBrains IDE's with Gitpod is on desktop via [JetBrains Gateway](/docs/integrations/jetbrains-gateway), please refer to our documentation for current [IDE and editor support](/docs/references/ides-and-editors) and the [Gitpod roadmap](https://www.gitpod.io/roadmap) for future updates.

## Can I use JetBrains Projector with Gitpod?

Gitpod does not officially support [JetBrains Projector](https://lp.jetbrains.com/projector/). Gitpod has support for [JetBrains Gateway](/docs/integrations/jetbrains-gateway), which is the primary tool for remote development when using JetBrains IDE's.
