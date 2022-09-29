---
author: JohannesLandgraf, csweichel
date: Tuesday, 26 Oct 2021 13:00:00 UTC
excerpt: Tailscale and Gitpod partner to enable secure and professional software development from anywhere.
image: header.jpg
slug: tailscale
subtitle:
teaserImage: header.jpg
title: Tailscale x Gitpod
---

<script context="module">
  export const prerender = true;
</script>

**TL;DR**

- Tailscale and Gitpod partner to enable secure, professional software development from anywhere

> We mentioned this already a [couple of times](/blog/cloud-based-development-for-everyone): in retrospect **the second half of 2021 will mark the tipping point for remote, cloud-based development.**

With [VS Code remote](https://code.visualstudio.com/docs/remote/remote-overview) and [Jetbrains' remote development support](https://youtrack.jetbrains.com/issue/IDEA-226455#focus=Comments-27-5290105.0-0), more than [80% of developers](https://insights.stackoverflow.com/survey/2021#section-most-popular-technologies-integrated-development-environment) will use an IDE with built-in functionality to connect to developer environments running in the cloud.

![Stackoverflow Survey 2021](../../../static/images/blog/cloud-ide-history/stackoverflow-ide.jpg)

Gitpod provisions and orchestrates remote developer environments enabling you to develop from anywhere ([even from an iPad traversing Australia 🏕](https://ghuntley.com/anywhere/)). Today, all of this gets even more connected & secure. We are excited to announce a [partnership with our friends at Tailscale](https://www.tailscale.com/blog/gitpod). Secure, ephemeral developer environments as part of your private network.

[Tailscale](https://tailscale.com/) is built on top of the point-to-point open-source [WireGuard](https://www.wireguard.com/) protocol which powers an encrypted mesh network or 'tailnet' that directly connects your developer environment to your resources as well as your colleagues' developer environments. We have been big fans of the product for quite some time.

## Remote development at its finest

You can now automatically and securely connect your Gitpod workspace to other development resources, whether in the cloud or on prem, such as a production database behind your company's firewall. You can also spin up several Gitpod workspaces that can talk to each other.

To connect any new dev environment, spin up a workspace in Gitpod and authenticate to Tailscale with an [auth key](https://tailscale.com/kb/1085/auth-keys/). We recommend setting an ephemeral auth key as an [environment variable](https://gitpod.io/variables) so you do not pollute your list of Tailscale nodes once you experienced the magic of [ephemeral dev environments 🪄](/docs#ephemeral). You’ll also need to add a task to start up Tailscale as well as set a network variable as part of your `.gitpod.yml` configuration file.

> Check out our [docs](/docs/integrations/tailscale) and/or the Tailscale repo for a [sample `.gitpod.Dockerfile` and `.gitpod.yml` to get started](https://github.com/gitpod-io/demo-tailscale-with-gitpod).

With Gitpod and Tailscale you can:

- Securely access a cloud or on-prem resource, like a production database
- Spin up a fleet of connected Gitpod workspaces
- Share a staged resource with a colleague, as part of a review
- Access a package registry
- Complete a coding interview

What Big Tech such as [Google, Facebook or Shopify](https://twitter.com/jmwind/status/1331364214582222854?s=20) has been doing for years is now accessible for the rest of the world: secure remote development in the cloud.

## Securing your software supply chain in a distributed world

In a distributed world remote development is an important lever to counter the increasing threat of [source integrity and supply chain attacks](https://opensource.googleblog.com/2021/10/protect-your-open-source-project-from-supply-chain-attacks.html) for your project & team. Our partnership with Tailscale marks the first step of a series of articles that will raise awareness around that topic.

Software development without sandboxes is a security risk. For approximately 4 hours last week, a widely utilized NPM package, `ua-parser-js`, was [embedded with a malicious script](https://www.rapid7.com/blog/post/2021/10/25/npm-library-ua-parser-js-hijacked-what-you-need-to-know/) intended to install a coinminer, harvest user/credential information and to compromise developer endpoints.

With Gitpod, no packages or dependencies are downloaded to users' devices which contain security incidents and inhibits malicious actors pivoting towards completely compromising developer endpoints. Gitpod workspaces are short-lived sandboxes and protect your local machine from arbitrary code execution coming from a dependency in your code—so that you can run only what you trust locally.

To test that we encourage you to run [`rm -rf`](https://github.com/gitpod-io/rm-rf) in a Gitpod workspace as many times as you want! If the destructive joy is diminishing in utility you can revert to [playing Doom inside Gitpod 🔫](https://twitter.com/GeoffreyHuntley/status/1451065894637998083?s=20).
