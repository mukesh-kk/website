---
author: JohannesLandgraf, svenefftinge, mbrevoort
date: Thursday, 8 Dec 2022 13:00:00 UTC
excerpt: Announcing limited availability for Gitpod Dedicated - a secure installation of Gitpod managed by us for you
slug: introducing-gitpod-dedicated
teaserImage: teaser.jpg
image: teaser.jpg
title: "Introducing Gitpod Dedicated: our enterprise cloud offering"
---

<script context="module">
  export const prerender = true;
</script>

<script>
  import Signup from "$lib/components/dedicated/signup.svelte"
</script>

**TL;DR**

- Gitpod Dedicated is our new enterprise cloud product - a secure installation of Gitpod managed by us for you
- Gitpod exists to remove friction from the developer experience, and the best way to do that is with a managed product in the cloud
- We no longer actively support self hosting Gitpod

In December 2019, we [announced](/blog/self-host-your-gitpod) that it was possible to self-host Gitpod. Our goal was to make Gitpod accessible for teams that cannot use a SaaS offering. We tried hard to provide a decent self-hosted installation and operation experience by shipping our [own installer](/blog/gitpod-installer) to reduce configuration complexity, regular releases of self-hosted with in-depth reference architectures, support for [GKE](https://cloud.google.com/kubernetes-engine), [AKS](https://azure.microsoft.com/en-us/products/kubernetes-service/), and [EKS](https://aws.amazon.com/eks), and the release of [Gitpod Local Preview](/docs/configure/self-hosted/latest/local-preview). We have been working closely with various companies and helped them to install and operate their self-hosted Gitpod installation.

Despite all that effort, self-hosted Gitpod has been increasingly difficult for us to support and it has shown to be a burden for our clients to manage and operate their own Gitpod instances. The open-ended requirements to run on commoditised Kubernetes services (GKE, AKS, EKS) forced us to manage variance and prevented us from driving innovation and fully realizing the potential of [Cloud Development Environments (CDEs)](/cde). There must be a better way to get Gitpod in the hands of those who can’t use our SaaS offering.

## Gitpod Dedicated managed by us, for your organization

Customers choose our SaaS product for convenience. They want to be ready to code and productive in an instant. Customers choose to self-host because of the security benefits it enables through isolation. This is especially important in environments that are highly regulated or have specific data residency rules. Gitpod Dedicated combines the convenience of SaaS with the security benefits of self-hosting.

Gitpod Dedicated is the same Gitpod that you know and love, but as a customer you get a completely isolated, single tenant instance of Gitpod that we create and manage just for you. This allows us to combine the efficiency and ease of use of a managed cloud offering with the security, isolation and compliance characteristics you get from having your own dedicated instance.

Gitpod Dedicated will be initially available in AWS because that’s where the majority of our customers are. We can run in your cloud account or ours, in the region of your choice, and customers will have the ability to manage encryption keys for data at rest. Every detail of Gitpod Dedicated has been designed to meet the security requirements of our enterprise customers.

#### Join the waitlist

We are excited to announce limited availability of Gitpod Dedicated for enterprise customers and an expanded beta in 2023. Sign-up for the waitlist and receive bi-weekly architecture and product updates.

<div class="my-micro">
<Signup class="!mx-auto !left-0" toType="dedicated-signup" />
</div>

## Ending support for Self Hosted and moving our source code to the open-source AGPL licence

We have decided to stop supporting self-hosting Gitpod for the reasons mentioned above. The focus on Gitpod SaaS and Gitpod Dedicated enables us to ship improvements much faster.

We know that some members of our community will be disappointed by our decision to end Gitpod self-hosted as a product. And we apologize for any inconvenience or stress this may cause. We did not take this decision lightly. We will continue to adhere to any existing contractual agreements with our customers regarding support and security fixes.

We have informed our enterprise customers about this decision and have been pleasantly surprised by the excitement around Gitpod Dedicated. For the community, the end of self-hosted as a product means:

- The November 22 release will be our last Self-Hosted release. Both the product and its documentation will be frozen.
- You will be able to continue installing and using the [currently available free KOTS based community edition](/community-license) until January 24.
- We will move all of our source code to open-source AGPL and remove the proprietary Enterprise License from our source code.

We originally [open sourced Gitpod](https://www.gitpod.io/blog/opensource) because working in open source is in our DNA. Everything we have created over the past 10 years, including [Theia](https://github.com/eclipse-theia/theia), [Xtext](https://github.com/eclipse/xtext), [Open VSX](https://github.com/eclipse/openvsx), and many other projects have been open source. This stays true for Gitpod. What is going to change is, that we are focused on creating the best managed experience possible, rather than trying to make it as flexible as possible for self-hosting.

As we close 2022 by introducing new workspace classes, flexible pricing and a new enterprise cloud offering, we couldn’t be more excited for 2023. Our vision for [Cloud Development Environments (CDEs)](/cde) is ambitious, and we are just getting started. There’s still a long way to go to remove all friction from the developer experience to be always ready-to-code and make software engineering more collaborative, joyful, and secure.

PS: today, we also launched larger workspaces and flexible pricing. [Read the launch blog post](/blog/introducing-workspace-classes-and-flexible-pricing).
