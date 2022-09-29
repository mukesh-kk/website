---
author: ghuntley
date: Tuesday, 24 August 2021 09:00:00 UTC
excerpt: Running workshops is easier and more productive with Gitpod. That’s a bold statement and by the end this tale I hope you’ll be nodding your head but until then mash this button to launch the Nix Operating System in your browser.
image: teaser.png
slug: workshops-as-code
subtitle:
teaserImage: teaser.png
title: Workshops as code
---

<script context="module">
  export const prerender = true;
</script>

**TL;DR**

- Running workshops is easier and more productive with Gitpod.
- There is an entire class of problems that attendees and educators continue to put up with when they shouldn’t need to because these concerns can be removed through automation.
- People attend workshops because they want to learn about what is being taught and what device they are using, or how the device configured should not matter.
- Hosting a workshop on Gitpod is as simple as supplying a `Dockerfile` and then specifying the commands to execute in a Git repository hosted on either GitHub, GitLab or BitBucket.
- DataStax have integrated their cloud-native database-as-a-service product offering with Gitpod.
- Pulumi run their workshops with Gitpod, and we would love to work with you to integrate your workshop.

Folks in technical education, I have a hot-tip for you - **Running workshops is easier and more productive with Gitpod**. That’s a bold statement, and by the end of this tale, I hope you’ll be nodding your head but until then, mash this button to launch the Nix Operating System in your browser:

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/gitpod-io/template-nixos)

Yup, that’s right, running an operating system in your browser is now possible in 2021. In 2019, which now seems like an eternity thanks COVID19, I was invited to deliver a workshop at [Compose](https://www.composeconference.org/2019-melbourne/speakers/#geoff-javier) on NixOS.

![Credit: Javier Candeira](../../../static/images/blog/workshops-as-code/nixos-compose-workshop.jpg)
_Photo Credit: [Javier Candeira](https://twitter.com/candeira)_

NixOS is an exciting up-and-coming in the DevOps space because it provides declarative and [reproducible](https://nix.dev/tutorials/declarative-and-reproducible-developer-environments#declarative-and-reproducible-developer-environments) environments supported by powerful [testing primitives](https://github.com/gitpod-io/template-nixos/blob/main/test.nix). One may say NixOS is “an overnight success that is 18 years in the making” as many [industry leaders are switching](https://twitter.com/mitchellh/status/1346136404682625024).

Anyway, I was in complete shock when circa 50 people registered to attend the workshop. So let’s glance past the entire topic of building workshop courseware for a moment and instead focus on the logistics of running a workshop.

One of the biggest challenges of running a workshop is ensuring attendees **do all the prerequisite activities before turning up**. For the NixOS workshop at Compose the steps were:

- Downloading upwards of 4Gb of software from the internet (ie. 200gb of data).
- Downloading and installing Virtual Box
- Downloading and installing the Virtual Box Extension Pack.
- Creating a virtual machine.

It’s important to remember that the reason people attend workshops is that they want to **learn about what is being taught**. People are willing to do prerequisite activities and put up with waiting for that half of the class that didn’t do the prerequisites to pass around that USB stick but already from the get go your workshop is off to a bad start and precious time is slipping.

![Credit: SpongeBob SquarePants](../../../static/images/blog/workshops-as-code/20mins-later.png)
_Credit: [SpongeBob SquarePants](https://en.wikipedia.org/wiki/SpongeBob_SquarePants)_

Suppose you were to once again peek at the [prerequisite activities](https://github.com/ghuntley/ghuntley/tree/trunk/workshops/nixos-workshop/modules/00-prerequisites) of the NixOS workshop. In that case, you’ll notice a line item - “Create a virtual machine”. At the time, the step appeared to be a simple request, but it wasn’t. People turned up with Chromebooks and laptops running macOS, Linux and _shudder_ windows devices enrolled under group policy with admin rights disabled.

Fortunately, with some support from the lovely folks from the [QFPL](https://qfpl.io/) who ran around and helped reconfigure peoples devices (where possible), the workshop was able to start and was successful.

Afterwards, feedback was collected, and one item stuck out - **what device attendees are using or how the device is configured should not matter** . People should be able to rock up to your workshop and do it on an iPad Pro or from [a forest with marginal 4G internet connectivity](https://news.ycombinator.com/item?id=26284635).

![Credit: Geoffrey Huntley](../../../static/images/blog/workshops-as-code/vanlife.jpg)
_Credit: [Geoffrey Huntley](https://ghuntley.com)_

Now granted, not every workshop requires people to install or configure virtual machines, but in the CNCF space, I often see people asking attendees to create a Kubernetes cluster as a prerequisite to learning. I’ll be frank here - **there is an entire class of problems that attendees and educators continue to put up with when they shouldn’t need to because these concerns can be removed through automation**.

By taking lessons learned from the infrastructure-as-code movement and converting workshops to Docker images, workshops become repeatable and reproducible. By utilising products such as Gitpod to consume, build and execute your `Dockerfile` then attendees no longer need to download or configure your software. All they need is a browser.

A Gitpod workspace gives you the same capabilities (yes, even root, Docker & qemu) as a Linux machine that is [already pre-built](/docs/configure/projects/prebuilds), works on any device from anywhere and that launches in seconds.

<!-- ![Credit: Geoffrey Huntley](../../../static/images/blog/workshops-as-code/teaser.jpg) -->

![Docker Compose Configuration](../../../static/images/blog/workshops-as-code/docker-compose.png)

Hosting a workshop on Gitpod is as simple as supplying a [Dockerfile](https://github.com/gitpod-io/template-nixos/blob/main/.gitpod.Dockerfile) and then specifying the [commands to execute](https://github.com/gitpod-io/template-nixos/blob/main/.gitpod.yml) in a Git repository that is hosted on either GitHub, GitLab or BitBucket.

Launching a workshop on Gitpod is as easy as prefixing any Git URL with `gitpod.io/#`. Thus if the workshop was hosted at `https://github.com/gitpod-io/template-nixos` then `https://gitpod.io/#https://github.com/gitpod-io/template-nixos` is the link that would be shared with attendees.

Alternatively, you could embed this button into the README of your workshop materials:

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/gitpod-io/template-nixos)

However, if you want to take it to 11, maybe you’ll consider embedding Gitpod?

> My mind is blown (🤯). Cédrick Lunven just showed me Gitpod with a full demo configured and ready to run. 2021 is a great time to be running workshops online!
>
> - Jonathan Ellis (co-founder and CTO of DataStax)

For the last couple of months, Gitpod has been working with DataStax who has integrated their cloud-native database-as-a-service product offering with Gitpod.

![Datastax Astra DB is a cloud-native database-as-a-service built on Apache Cassandra that is designed to simplify cloud-native application development](../../../static/images/blog/workshops-as-code/datastax.png)

Let’s peek under the hood how the integration works from top to bottom:

1. DataStax have created self-paced workshops which are [hosted on GitHub](https://github.com/DataStax-Academy?type=source).
1. These workshops are listed within Astra DB (which is DataStax’s DBaaS offering)
1. On each workshop, there is a button to launch the workshop on Gitpod.
1. DataStax prompts the user to select which managed database the workshop should use, and non-sensitive information is passed through to Gitpod [as environment variables](/docs/configure/projects/environment-variables#provide-env-vars-via-url) via the URL:

> https://gitpod.io/#ASTRA_DB_ID=6677d1aa-2a69-4739-ba5d-26fdef15d8ae,ASTRA_DB_KEYSPACE=Workshop,ASTRA_DB_REGION=us-east1,ASTRA_DB_USERNAME=/https://github.com/DataStax-Examples/todo-astra-jamstack-netlify

[Chris Coyier](https://css-tricks.com/video-screencasts/209-a-netflix-clone-with-datastax-astra-and-netlify/) recently sat down and pair-programmed with [David Jones-Gilardi](https://twitter.com/sonicdmg) of DataStax and Chris’s mind was also blown. In the video below, David doesn’t even use any local software other than a web browser. All code editing was done in Gitpod.

`youtube: sPnBN-RhzQQ`

The Infrastructure as Software company [Pulumi](https://www.pulumi.com/) has also been using Gitpod as an option for attendees taking part in their instructor-led workshops because Gitpod enables them to spend less time configuring prerequisites and enables people to focus on what matters: **the educational content**.

![Stuff like gitpod makes doing workshops so much easier I can’t believe how we used to do this stuff before - Matty Stratton](../../../static/images/blog/workshops-as-code/pulumi.png)
_https://twitter.com/mattstratton/status/1426213495826096131?s=20_

🎉 Thanks for reading! Hopefully, you’re convinced and can see the benefits of defining your workshops as code by now. As [recently announced](/blog/cloud-based-development-for-everyone), Gitpod is available to everyone, and our free tier is open to every developer with a GitLab, GitHub, and/or Bitbucket account.

If you need help integrating with Gitpod or automating your existing workshop schedule a ☕️ catchup with me via https://ghuntley.com/meet or geoff@gitpod.io. 🧡
