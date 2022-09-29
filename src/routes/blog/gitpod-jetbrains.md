---
author: JohannesLandgraf, akosyakov, loujaybee
date: Thursday, 28 April 2022 11:00:00 UTC
excerpt: Gitpod and JetBrains announce partnership and deep product integration to bring remote development to developers around the world

slug: gitpod-jetbrains
teaserImage: teaser.jpg
image: teaser.jpg
title: Gitpod x JetBrains join forces to solve 'works on my machine' problem
---

<script context="module">
  export const prerender = true;
</script>

<script>
  import Quotes from "$lib/components/blog/gitpod-jetbrains-quotes.svelte";
</script>

**TL;DR**

- [Gitpod and JetBrains announce partnership and deep product integration](https://blog.jetbrains.com/blog/2022/02/24/jetbrains_partners_with_gitpod/) to bring remote development to developers around the world
- Starting today professional software engineers can work in reproducible developer environments provisioned by Gitpod using their favorite desktop IDE from JetBrains including IntelliJ IDEA, PyCharm, GoLand, and PhpStorm
- Gitpod is the first 3rd party service that is natively integrated into JetBrains Gateway for a seamless remote development experience
- Benefit from improved developer experience, security, and collaboration while keeping the local editing experience with all shortcuts, keybindings and themes
- Skip the talking and [get started now](https://www.gitpod.io/docs/integrations/jetbrains-gateway)

Since we started the company, we never wanted to be in the IDE or editor business. In fact, we are quite allergic to people thinking Gitpod is an _online or web IDE_. Gitpod is an open-source orchestration and provisioning platform for automated developer environments.

> **The goal has always been to integrate Gitpod with all editing experiences as soon as they support remote development - independent of the operating system (Windows, MacOS, Linux, Browser).**

Today we are making a big step towards that goal.

<Quotes />

![03](../../../static/images/blog/gitpod-jetbrains/03.jpg)

## Keep your tools, just automate them

If you look at professional software development, JetBrains IDEs remain the gold standard when it comes to programming language intelligence and tooling smartness. This holds true across all major programming languages. Period. Their depth and attention to detail is something we have always admired at Gitpod. We are not alone in this. The number one feature request of our larger customers is to connect their locally running JetBrains IDEs to automated Gitpod workspaces running in the cloud.

We now seamlessly integrate and bundle with their standalone Gateway application. This means we run an instance of your favourite JetBrains IDE on your Gitpod developer environment. All indexing, compiling and language processing happens in the cloud, while a thin client runs locally and provides the rich user experience you are already familiar with from your desktop IDE. To enable this experience we have internally built a [SSH gateway](https://www.gitpod.io/blog/copy-paste-ssh-workspace-access) (which also makes our vim and emacs users happy), re-designing our loading screen and expanding our [/preferences](https://gitpod.io/preferences) to enable both Desktop and Browser based workflows. The result is available in today's beta release.

With our native Gitpod integration in JetBrains Gateway application, professional software developers can connect ephemeral developer environments provisioned by Gitpod to their favorite desktop IDE from JetBrains without any friction. Think power of the cloud including all developer experience, security, and collaboration benefits paired with the world's best professional IDEs.

![01](../../../static/images/blog/gitpod-jetbrains/01.jpg)

## Entering the era of remote development

In August last year, [we shipped a cake to GitHub for their Codespaces launch](https://www.gitpod.io/blog/cake) 🎂. With today's announcement and product partnership, our industry reached a tipping point in the adoption curve of remote development. The large majority of the IDE/editing market now has built-in functionality to connect to developer environments running in the cloud. Keep the editing experience you are used to from your desktop IDE/editor/terminal including all your shortcuts, keybindings and themes that your muscle memory got used to.

Take a step back and look at the benefits which led [companies such as Google, Facebook, LinkedIn and Shopify to move software development to the cloud](https://gitpod.notion.site/Gitpod-Adoption-Stage-1-Educate-ed7b95be23e244c388e46fa3596ff2f5) and form the basis of our [purpose](https://www.notion.so/gitpod/Gitpod-s-Direction-be35d064c0704fbda61c542b84e07ef6):

- **Better developer experience**. Automated setup with cloud-based, remote developer environments connected with a developer’s editing experience of choice. This means developers no longer have to endure nerve-wracking set-up and maintenance of local developer environments. Start coding and get creative with one click - with the tools you are most productive with

- **Efficient multi-track development**. Have multiple workspaces with different configurations open at once - one for your feature, one for reviewing a PR/MR, or one for a bug.

- **Remove the ‘works on my machine’ discussion**. Always start from a clean state - the end of all "works on my machine" situations due to long-living stateful environments. Spin up a workspace, code, push your code, and forget about it. For your next task, you’ll use a fresh dev environment. Onboard new developers with one click.

- **Securing our software supply chain**. No packages or dependencies are downloaded to users' devices. Developer environments run in the cloud and are short-lived, protecting your local machines and other company resources from malicious attacks through execution of arbitrary code.

- **Power of the cloud**. Don't bother upgrading your developer's machine, with cloud-based, remote development the data center becomes your computer.

- **Bringing developer environments closer to production**. Gitpod provisions powerful Linux containers under the hood. Workloads running on production are for a large part similarly running in containers on Linux. One operating system for both development and production.

![02](../../../static/images/blog/gitpod-jetbrains/02.jpg)

## Getting started in 5 minutes

If you are interested in setting up a new Spring Boot project using Gitpod and JetBrains Gateway we wrote a [detailed guide together with JetBrains](https://www.gitpod.io/guides/set-up-spring-boot-application-remotely-with-gitpod-and-jetBrains-gateway). If you want to start your own project with Gitpod in your JetBrains IDE read on or refer to our [documentation](https://www.gitpod.io/docs/integrations/jetbrains-gateway).

`youtube: 8djaRYT2FAY`

1. **Install [JetBrains Gateway](https://www.jetbrains.com/help/idea/remote-development-a.html#gateway)**
2. **Install the [Gitpod plugin](https://plugins.jetbrains.com/plugin/18438-gitpod-gateway)** - Open JetBrains Gateway and you'll see the Gitpod logo on the main page. Simply click "install" to install the Gitpod plugin within JetBrains Gateway.
3. **Update your [Gitpod preferences](https://gitpod.io/preferences)** - Select your preferred JetBrains IDE on the Gitpod preferences page to set your default IDE for future Gitpod workspace starts.
4. **Start (or restart) your workspace** - Either start a workspace directly from within the JetBrains Gateway via the Gitpod plugin OR open a new workspace directly in Gitpod where on workspace start you will be prompted to open your preferred JetBrains IDE for that workspace. That's it.

To guide you and your team through the different adoption phases towards remote software development, other engineering organisations found the following resources helpful:

- [Customer Stories](https://www.gitpod.io/customers)
- [Gitpod Adoption Stage 1 - Educate](https://www.notion.so/gitpod/Gitpod-Adoption-Stage-1-Educate-ed7b95be23e244c388e46fa3596ff2f5)
- [Gitpod Adoption Stage 2 - Configure](https://www.notion.so/gitpod/Gitpod-Adoption-Stage-2-Configure-a02f77be08df452a90cef00fb2d1edac)
- [Gitpod Adoption Stage 3 - Develop](https://www.notion.so/gitpod/Gitpod-Adoption-Stage-3-Develop-1340c1a8740a42118a68dc005a45d701)

And if you haven't done so join our active Discord community - we are here to help! [www.gitpod.io/chat](http://www.gitpod.io/chat)

&nbsp

![05](../../../static/images/blog/gitpod-jetbrains/05.jpg)

## DevX Conf on May 2-3rd

In case you are interested in learning more about remote development, next week we are hosting [devxconf.org](https://devxconf.org/), a virtual & free conference focused around making developers happier/more productive. The first panel will discuss all things [remote development](https://devxconf.org/schedule) and will include folks from JetBrains and Gitpod.
