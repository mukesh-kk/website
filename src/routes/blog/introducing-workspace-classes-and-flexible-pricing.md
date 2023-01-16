---
author: michaelaring, jldec, atduarte
date: Thursday, 8 Dec 2022 12:00:01 UTC
excerpt: Workspace classes give you access to workspaces with more computational power. You can choose between standard and large workspaces, unlocking more powerful CDEs and new use cases. Workspace classes are made possible by a new flexible pricing model.
slug: introducing-workspace-classes-and-flexible-pricing
teaserImage: teaser.jpg
image: teaser.jpg
title: Introducing workspace classes and flexible pricing
---

<script context="module">
  export const prerender = true;
</script>

Today, we are announcing workspace classes and flexible pricing 🎉

Workspace classes give you access to workspaces with more computational power. You can choose between standard and large workspaces, unlocking more powerful [CDEs](/cde) and new use cases. Workspace classes are made possible by a new flexible pricing model. Gitpod usage is now measured in credits and you are charged based on your usage. Our free tier remains virtually unchanged and you can continue to use Gitpod for up to 50 hours per month for free.

Continue to read below on why we are making this change or go straight to the documentation for configuring [workspace classes](/docs/configure/workspaces/workspace-classes) and [billing](/docs/configure/billing).

## Workspace classes

Different projects and workloads require different amounts of computational power and developers want the flexibility to choose the workspace size that best fits their needs.

Until now, all Gitpod workspaces were given the same computational resources - up to 4 vCPUs, 8GB RAM and 30GB of storage. Starting today developers can choose a larger option of up to 8 vCPUs, 16GB RAM and 50GB of storage. ⚡

| Workspace Class | vCPUs   | RAM        | Storage |
| --------------- | ------- | ---------- | ------- |
| Standard        | Up to 4 | Up to 8GB  | 30GB    |
| Large           | Up to 8 | Up to 16GB | 50GB    |

To get started head over to your Gitpod project settings and select the desired workspace class. This option is available to free tier users, and to paid subscribers with the new flexible pricing. If you are on one of our old plans, consider switching now to access large workspace classes.

We are thrilled to be able to offer this new level of flexibility and we can't wait to see what developers will create with it. We believe that the added flexibility will help developers to be more productive and efficient, and we are excited to see how it will improve their Gitpod experience. 🚀

**How you can help us:** We are just getting started! 👀Head over to [Issue 13950](https://github.com/gitpod-io/gitpod/issues/13950) and share your feedback on workspace classes and your need for even more powerful machines.

## Flexible Pricing

Our new pricing model allows us to bring the benefits of workspace classes to all of our users.

Instead of billing for each user based on their monthly plan, Gitpod can now charge for usage based on how long workspaces run, and the resources consumed by different workspace classes.

### How does flexible pricing work?

[Individual users](/docs/configure/billing#configure-personal-billing) on the free plan can use up to 500 credits each month. This is equivalent to 50 standard workspace hours.

Individual users who upgrade to paid billing at $9.00 per month can use up to 1,000 credits, and pay for additional usage beyond that, at the pay-as-you-go rate of $0.036 per credit.

With [team billing](/docs/configure/billing#configure-team-billing), Gitpod will meter the usage of team members on team projects, and charge that usage to the team billing account, at the same pay-as-you-go rate of $0.036 per credit.

|                                              | Free                   | Paid Users              | Paid Teams              |
| -------------------------------------------- | ---------------------- | ----------------------- | ----------------------- |
| Base price                                   | $0/mo                  | $9/mo                   | $0/mo                   |
| Credits included in base price               | 500                    | 1000                    | 0                       |
| Additional credits available with paid plans | none (Upgrade to paid) | Pay-as-you-go Unlimited | Pay-as-you-go Unlimited |
| Price per additional credit                  | n/a (Upgrade to paid)  | $0.036                  | $0.036                  |

### What changes today?

Workspace classes and the new pricing are now generally available for all Gitpod users.

**If you are already a paying Gitpod user,** you can switch to the new pricing model or stay on your existing paid plan. In order to access large workspaces and pay-as-you-go, you will first need to cancel your old plan. Existing plans will keep working until the end of March, 2023.

**If you are a free Gitpod user,** you can continue using Gitpod for free. Users on the Free plan can use up to 500 credits each month without charge. That is equivalent to 50 hours of Standard workspace usage. You don’t need a credit card to use Gitpod.

**If you are new to Gitpod,** you can [sign up](https://gitpod.io/workspaces/) and start using Gitpod for free. If you are interested, check out all our features and prices on the new [pricing page](/pricing).

### Gitpod for startups, students, and open source

[Gitpod for Open Source](/for/opensource) users will now receive 2,500 credits per month on their free plan.

[Gitpod for Startups](/for/startups) participants will receive a discount of 50% on their team usage. Existing Gitpod for Startups participants can continue using their old plans.

[Students and educators](/for/education) are encouraged to check out the generous new free and paid offerings described above. Our pricing plans which require student verification have been discontinued. Existing paid student plans will keep working.

PS: we’ve also announced Gitpod Dedicated, a fully-isolated, private installation of Gitpod managed by us. [Read blog post](/blog/introducing-gitpod-dedicated).
