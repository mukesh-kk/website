---
section: self-hosted/latest
subsection: installation-guides
title: Component Customization
---

<script context="module">
  export const prerender = true;
</script>

# Component Customization

> ⚠️ **Self-hosted as a product is no longer supported**
>
> The last official update of this product is the [November 2022 self-hosted release](https://www.gitpod.io/changelog/november-self-hosted-release). We no longer sell commercial self-hosted licenses. If you want to self-host Gitpod, you can still request our [free community license](https://www.gitpod.io/community-license). However, we no longer offer support or updates for it. If you are interested in an isolated, private installation of Gitpod, take a look at [Gitpod Dedicated](/dedicated).
> Read [our blog on Gitpod Dedicated](/blog/introducing-gitpod-dedicated) to learn why we made the decision to discontinue self-hosted.

In this guide, we expect you to have a cluster up and running that [meets the requirements](../requirements) and has the [required components](../requirements) installed and configured (at least cert-manager is needed).

This guide assumes that you are using our default installation method from our [installation guide](../installing-gitpod).

## Rationale

Gitpod self-hosted is built to work by default, but it also has to be incredibly flexible. Our installation defaults will work for the vast majority of users, but there will be occassions when it does not. In order to add more flexibility, you have the ability to customise some of Gitpod's components.

In your KOTS dashboard, you will need to enable advanced options. This will enable the "Components" section.

![kots-advanced](../../static/images/docs/self-hosted/kots-advanced.png)

### Proxy service type

All web traffic enters the application through the `Proxy` component. By default, this is a `LoadBalancer` type which will expose the application through the cloud provider's load balancer.

Under certain circumstances, this may be undesirable. Under the "Advanced" section, you may select a different service type - all [Kubernetes service types](https://kubernetes.io/docs/concepts/services-networking/service/#publishing-services-service-types) are supported, except `ExternalName`. If you are using anything other than `LoadBalancer`, you are responsible for configuring your network to route traffic through to the `proxy` service.
