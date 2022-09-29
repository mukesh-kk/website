---
author: jeanp413, akosyakov, loujaybee
date: Thursday, 04 Nov 2021 15:00:00 UTC
excerpt: Thanks Microsoft for open-sourcing VS Code Server
image: vscodeserver.jpg
slug: vscode-server
subtitle:
teaserImage: vscodeserver.jpg
title: Thanks Microsoft for open-sourcing VS Code Server 👐
---

<script context="module">
  export const prerender = true;
</script>

**TL;DR**

- After [Gitpod launched OpenVSCode Server](/blog/openvscode-server-launch) in September, Microsoft now open-sourced the server code powering VS Code remote development and GitHub Codespaces
- Within a few days we switched Gitpod VS Code and OpenVSCode Server Insiders builds to the upstream implementation
- Today, we release Gitpod VS Code and OpenVSCode Server with these changes

<br>

When we launched our [history of the last four years of Cloud IDEs](/blog/cloud-ide-history) on Oct 20, we spoke about the road ahead:

> As VS Code and cloud-based, remote development continues to grow in popularity, we hope to see the server-side implementation powering GitHub Codespaces being open-sourced in the upstream repository by Microsoft.

A month after [we released OpenVSCode Server](/blog/openvscode-server-launch), we are excited to see that Microsoft open-sourced their [server implementation](https://github.com/microsoft/vscode/commit/822f995357f725216cdee6e05f1f1552ccbbd882) for running VS Code in the browser—the release happened faster than we anticipated 🚀 ! First and foremost we want to say **thank you to the excellent VS Code team**. The community deserves that the most popular developer tool of the planet keeps its open nature.

While [we won’t send them a cake this time 🎂](/blog/cake), we wanted to share our take on the release, our nightly sync jobs that enable us to run the latest VS Code in Gitpod and the future of OpenVSCode Server.

## Why OpenVSCode Server in the first place?

In September we announced [OpenVSCode Server](https://github.com/gitpod-io/openvscode-server), an open-source project that runs upstream VS Code on a remote machine accessed through a modern web browser. The OpenVSCode Server project is officially backed by our partners from GitLab, VMware, Uber, SAP, Sourcegraph, RStudio, SUSE, Tabnine, Render and TypeFox.

Publishing OpenVSCode Server was motivated by the fact that Microsoft hadn’t at the time published any source code for their own implementation of a server that was able to run Visual Studio Code, which Microsoft uses to power GitHub Codespaces and their remote extensions. Since many developers and organisations wanted to run VS Code as a full web application in their daily workflows with the same low-footprint technique used by Gitpod and Codespaces, we decided to [share our own server implementation](/blog/openvscode-server-launch) with everyone.

## How We Keep Up To Date With VS Code

As you may know, [we provide Insiders builds](https://github.com/gitpod-io/openvscode-releases) for Gitpod VS Code and OpenVSCode Server. This process is possible thanks to a couple of GitHub actions we’ve set up. We noticed the VS Code Server changes immediately and started working on integrating them. By now, we have been running the latest builds in production for more than a week and today we are releasing the builds for everybody.

These [GitHub actions](https://github.com/gitpod-io/openvscode-releases) run daily to update OpenVSCode Server with the latest upstream changes, run integration and smoke tests, and make a GitHub pre-release along with publishing the updated [docker image](https://hub.docker.com/r/gitpod/openvscode-server) to Docker Hub under the Insiders tag.

This release process allows OpenVSCode Server to get the latest updates from the upstream VS Code code and make new stable releases on the same day as VS Code. We also use the same release process with our VS Code Insiders version that we use inside Gitpod, which enables Gitpod users to go into their gitpod settings and swap their [IDE configuration for the VSCode Insiders](https://gitpod.io/preferences) with the latest features and fixes from VSCode.

## The Future of OpenVSCode Server

Unfortunately, the changes from Microsoft don't give us a full standalone implementation for VS Code Server yet, while the server source code is now also open-sourced and you can build VS Code yourself, you cannot use the extensions marketplace as it is restricted to only be used by Microsoft products.

So OpenVSCode Server adds some much-needed, yet minimal changes on top of VS Code to:

- enable the marketplace using [Open VSX](/blog/open-vsx)
- enable HTTPS and WebSocket Secure (wss) by default

Try the new 1.62 OpenVSCode Server or the Insiders version and don’t forget to [leave feedback and file any GitHub issues](https://github.com/gitpod-io/openvscode-server) if you need!

You can also quickly explore the latest version of VS Code from within Gitpod, all you have to do is prefix a GitHub URL with `gitpod.io/#https://github.com/example-org/your-repo` (or install the [browser extension](/docs/configure/user-settings/browser-extension#browser-extension)) to get started.

And why not, because [Gitpod is free for up to 50 hours a month](/pricing).
