---
author: JohannesLandgraf
date: Thursday, 3 November 2022 00:00:00 UTC
excerpt: Announcing our $25m Series A led by Tom Preston-Werner (Founder of GitHub) with existing investors increasing ownership and pebblebed, MongoDB Ventures, GTMfund, Tobi Lutke, Kent Beck and Oliver Pomel joining the round
slug: future-of-software-cdes
image: teaser.jpg
teaserImage: teaser.jpg
title: The future of writing software happens in Cloud Development Environments (CDEs)
---

<script context="module">
  export const prerender = true;
</script>

<script>
  import Quotes from "$lib/components/blog/cde-quotes.svelte";
  import Download from "$lib/components/whitepaper/cloud-dev-environments/download.svelte";
</script>

**TL;DR**

- From static and brittle development environments to consistently reproducible, instant, ephemeral Cloud Development Environments (CDEs)

- Announcing our $25m Series A led by Tom Preston-Werner (Founder of GitHub) with existing investors increasing ownership and pebblebed, MongoDB Ventures, GTMfund, Tobi Lutke, Kent Beck, and Oliver Pomel joining the round

Developers brought creative workflows of almost all knowledge workers to the cloud. At the same time, the workflow of writing software itself never left local computers. The hours of yak-shaving and friction this causes every week wastes calories and drags us away from flow. Gitpod exists to change that: from history-dependent cobbled local development environments to consistently reproducible, instant, ephemeral Cloud Development Environments (CDEs).

It feels good to give what we have been working on over the last years a name and shape the principles of it. CDEs lower the barrier and increase the ceiling - they enable more people to do more. For us, they are our internal product north star. We believe that the principles define the convenience threshold that, when surpassed, will make working with CDEs the standard for developers. Not because your engineering organisation dictates that, but because the developer experience is faster, more joyful, collaborative and secure.

Developing software in the cloud is not about simply replicating an existing local workflow to somebody else's machine that happens to run remotely in a datacenter. Remote development is not the solution. The ‘works on my machine’ problem continues to exist - it just moves from a local computer to a computer in the cloud. Long-lived development environments are stateful and brittle, wasting countless hours due to drifting configuration within software teams. We believe that the true opportunity is to remove friction and relentlessly improve the developer experience with the automation, collaboration and security benefits that the cloud provides.

- **No more configuration drift.** CDEs are automatically created afresh for every task. This way code and development environment always align, and all contributors operate from a consistent configuration. No more “works on my machine”.

- **Peace of mind.** CDEs are independent of each other. Breaking one has no effect on others. Because CDEs are ephemeral, mistakes are no longer costly. No more struggling to “fix your laptop” after upgrading to the latest version of something.

- **Parallelism and multi-track development.** CDEs are plentiful. Quickly reviewing the change of someone else no longer means you have to “stash” or replace what you’re currently working on. Parallel activities can coexist independently. Inviting peers to what you’re currently doing does not break their current work stream.

- **Space to learn and play.** CDEs remove barriers to play, learn and experiment with code, projects and repositories. Because there is no setup effort, and no risk of breaking the environment you’re working in, CDEs offer a great space to explore and learn about new technologies.

- **Safe and Secure.** Cloud Development Environments are short-lived, which shortens the attack windows in which resources, secrets or infrastructure could be at risk. Because CDEs are ephemeral, secrets and other credentials should be tightly scoped and short-lived, i.e. should they get compromised they would not be of much use for long. Cloud development environments are isolated from other work which reduces the impact of supply chain attacks. E.g. arbitrary code execution as part of a software build can only affect what’s in the CDE, and not everything that’s running on your laptop.

## Principles

CDEs value the following principles:

- **Ephemeral** _over long lived_  
  A fresh, disposable development environment for every task.

- **Reproducible** _over cobbled together_  
  Consistently replicable without manual intervention.

- **Effortless** _over arduous_  
  With minimal friction and difficulty.

- **Independent** _over tangled_  
  Isolated and self-sufficient.

- **Abundant** _over scarce_  
  Instantaneously obtainable, seemingly infinite.

- **Powerful** _over constrained_  
  Supports the most expansive development activities.

- **Equitable** _over requiring specialised skills_  
  Lowers the barrier to software development.

- **Collaborative** _over solitary_  
  Enables collaboration across time, space and practice.

You can read more under [www.gitpod.io/cde](/cde).

  <Quotes />

## $25m Series A to cross the convenience threshold for CDEs

We are proud that Tom Preston-Werner leads our $25m Series A with his largest investment to date in a private company. All existing investors including General Catalyst, Crane Venture Partners, Vertex Ventures US and Speedinvest are participating. New investors include amongst others pebblebed; GTMfund; MongoDB Ventures; Tobi Lütke (CEO Shopify) and Olivier Pomel (CEO Datadog) and Kent Beck, (signatory of the Agile Manifesto). We also extend our leadership with [Mike Brevoort](https://www.linkedin.com/in/mikebrevoort/) as Head of Product, [Matthew Du Pont](https://www.linkedin.com/in/matthewfdupont/), Head of Sales and [Sara Parker](https://www.linkedin.com/in/hellofromspark/), Head of Customer Success & Support. [Sven](https://www.linkedin.com/in/efftinge/) decided to follow his passion and became Gitpod’s first Technical Fellow a couple of weeks ago - [since that decision, he has the biggest smile on his face since we met.](/blog/svens-new-role)

So.. what will we do with the additional capital? We want CDEs to become the standard for modern software development. Everybody is rallied around crossing the convenience threshold and we will work on the following areas:

- **Performance and Security** - CDEs should be available in an instant - seemingly infinite and secure. Customers trust Gitpod with their code, their data and their time. With this comes a great responsibility. Last week we announced our [SOC2 Type II](https://www.gitpod.io/blog/gitpod-is-soc-2-type-ii-compliant) compliance. Roadmap items include dramatically faster startup times, improved resiliency and a new Gitpod Cloud offering for larger companies.

- **Integrations** - Gitpod is a next-generation developer experience platform empowering developers to seamlessly assemble all of the resources they need, just in time. We are fostering a community of partners to create an ecosystem around better templates, plugins, provisioning and integrations. Roadmap items include a workspace plugin system, APIs, and increased extensibility.

- **Collaboration** - software development teams collaborate across time, team and roles. CDEs will create entirely new opportunities for team members to work more closely together. Roadmap items include preview environments and new collaborative workflows.

We want to build a lasting company on top of a paradigm shift that will change how the world writes software - for the better.

<Download
      class="mx-auto lg:m-0"
      toType="cde-whitepaper"
      eventType="Whitepaper"
    />
