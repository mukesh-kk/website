---
author: JohannesLandgraf, svenefftinge, akosyakov
date: Tuesday, 28 Sep 2021 13:00:00 UTC
excerpt: Run the latest VS Code on a remote machine accessed through a modern web browser - from any device, from anywhere.
image: teaser2.jpg
slug: openvscode-server-launch
subtitle:
teaserImage: teaser2.jpg
title: VS Code in the browser for everyone
---

<script context="module">
  export const prerender = true;
</script>

<script>
  import OpenvscodeLaunchPartners from "$lib/components/blog/openvscode-launch-partners.svelte";
  import Quotes from "$lib/components/blog/openvscode-quotes.svelte";
</script>

**TL;DR**

- Gitpod introduces open-source project [OpenVSCode Server](https://github.com/gitpod-io/openvscode-server/) that runs the latest VS Code on a remote machine accessed through a modern web browser.
- The project is backed by GitLab, VMware, Uber, SAP, Sourcegraph, RStudio, SUSE and many others.

In retrospect the second half of 2021 will mark an important turning point for remote, cloud-based developer environments. After two years GitHub managed to ship Codespaces (& [received a cake 🎂](/blog/cake)). With JetBrains’ [remote development support](https://youtrack.jetbrains.com/issue/IDEA-226455#focus=Comments-27-5192116.0-0) developers will be able to choose between IDEs to access Gitpod's ephemeral, cloud-based developer environments later this year. For those who like the convenience of a browser, we have great news to share today.

We are excited to announce [OpenVSCode Server](https://github.com/gitpod-io/openvscode-server/) - an open-source project that makes running VS Code in a browser easily accessible for all developers and organisations. [OpenVSCode Server](https://github.com/gitpod-io/openvscode-server/) runs upstream VS Code on a remote machine accessed through a modern web browser - from any device, from anywhere.

> **Unlike other attempts, this project is based on a minimal set of changes and uses the same architecture that powers both Gitpod and GitHub Codespaces at scale.**

The project is officially backed by our partners from GitLab, VMware, Uber, SAP, Sourcegraph, RStudio, SUSE, Tabnine, Render and TypeFox.

<Quotes />

## Goals

We have been approached by individual developers and large organisations asking how we manage to always run the latest VS Code in Gitpod given that Microsoft doesn't publish the source code they use to enable GitHub Codespaces. Since many developers and organisations want to adopt the approach within their own products and daily workflows with the same low-footprint technique like Gitpod, we decided to share this with everyone.

The project has the following long-standing objectives:

1. Enable every developer to run the latest VS Code in the browser based on the same architecture that powers both Gitpod and GitHub Codespaces
2. Eliminate the need for bad forks of VS Code that introduce unnecessary complexity
3. Provide a straightforward upgrade path and low maintenance effort
4. Demonstrate that professional software development in the cloud is a reality today
5. Offer a browser-based VS Code distribution that is free from the control of Microsoft in addition to the vendor neutral [OpenVSX extension registry](https://open-vsx.org/)

## Benefits

We shared and tested the project with several developers and asked them about the benefits of OpenVSCode Server. Below is a list of the most common responses:

- **Use the power of the cloud** - dependencies, compilation, testing, large data sets can all be run on machines far more powerful than your laptop
- **Remote access** - you can access those machines from any device such as iPads and Chromebooks via a web browser with the familiar VS Code experience
- **Save battery & data** - as all CPU and RAM intensive tasks run on the remote machine you will preserve battery life and keep your data plan under control
- **Keep your source secure** - you keep your dev environment centralized and secure, away from your local machine

## Getting started

Getting started is as simple as a one-line `docker run` command and starting [localhost:3000](localhost:3000).

```shell
docker run -it --init -p 3000:3000 -v "$(pwd):/home/workspace:cached" gitpod/openvscode-server
```

To run VS Code on the cloud provider of your choice we created [guides](https://github.com/gitpod-io/openvscode-server/tree/docs/guides/) for [AWS](https://github.com/gitpod-io/openvscode-server/tree/docs/guides/aws-ec2), [Azure](https://github.com/gitpod-io/openvscode-server/tree/docs/guides/azure-vm), [Digital Ocean](https://github.com/gitpod-io/openvscode-server/tree/docs/guides/digital-ocean), [GCP](https://github.com/gitpod-io/openvscode-server/tree/docs/guides/gcp-gce), [Railway](https://github.com/gitpod-io/openvscode-server/tree/docs/guides/railway) and [Render](https://github.com/gitpod-io/openvscode-server/tree/docs/guides/render).

A big thank you to all our engineers involved in making this happen, specifically [Anton](https://github.com/akosyakov), [Jean Pierre](https://github.com/jeanp413), [Filip](https://github.com/filiptronicek) and [Mike](https://github.com/mikenikles)!

`youtube: qGR7rgqjdiY`

### How is this different to Gitpod?

Gitpod is all about removing friction from the developer experience by provisioning and orchestrating [automated, ephemeral developer environments](/blog/cloud-based-development-for-everyone#ephemeral-developer-environments) for you and your team. An IDE is just one building block of a working cloud based developer environment, in addition to the operating system, databases, compilers and all the other tools you need to be productive. At Gitpod we want to support the IDE or editor you like best, and providing VS Code through the web browser is just one possibility. Alternatively, you can access your Gitpod workspaces [through SSH](/blog/local-app), [local VS Code](/docs/references/ides-and-editors/vscode) and soon your favorite Jetbrains IDEs.

- If you want one-click, fully automated developer environments that give yourself and your team an unparalleled productivity boost try [Gitpod](https://gitpod.io/workspaces/).

- If you have a machine somewhere which you would like to access with VS Code through a browser, check out [OpenVSCode Server](https://github.com/gitpod-io/openvscode-server/).

<OpenvscodeLaunchPartners />
