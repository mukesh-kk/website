---
title: April Self-Hosted Release
excerpt: A new release of Gitpod Self-Hosted is availaible which includes support for self-signed certs and facilitates installing Gitpod in air gapped environments.
date: 2022-04-28
image: 2022-04-28.png
alt:
---

<script>
  import Contributors from "$lib/components/changelog/contributors.svelte";
</script>

We've released a new version of Self-Hosted Gitpod. You can read more on how to install it in our [documentation](https://www.gitpod.io/docs/configure/self-hosted/latest). More details on this release can be found in [GitHub](https://github.com/gitpod-io/gitpod/releases).

For feedback, please raise an [issue](https://github.com/gitpod-io/gitpod/issues/new?assignees=&labels=bug&template=bug_report.yml) or [chat with us](https://www.gitpod.io/chat).

<p><Contributors usernames="nandajavarma,MrSimonEmms,Pothulapati,corneliusludmann,lucasvaltl" /></p>

### Fixes and improvements

**Self-signed certificates (beta)**

You can now use self-signed certificates (certificates that are not signed by a known public certificate authority) for your self-hosted Gitpod installation. This is especially useful if you want to run Gitpod in a corporate environment that uses a corporate certificate authority. You can find out more about self-signed certs in our [TLS configuration guide](https://www.gitpod.io/docs/configure/self-hosted/latest/advanced/tls).

Note: Self-signed certs are currently not supported on Google Cloud Platform (GKE) because you cannot get containerd to trust other certificates without being restarted.

**Support for installing Gitpod in air gapped Environments**

We've made it easier to install Gitpod in air gapped environments (an environment that is isolated to and from the internet). You can now get everything that you need to install Gitpod in a single bundle that you can then install into your air-gapped environment. You can learn more about installing in air gapped environments in our [documentation](https://www.gitpod.io/docs/configure/self-hosted/latest/advanced/air-gap).

**Improved Documentation**

We've been working on our documentation which now includes a revamped [installation guide](https://www.gitpod.io/docs/configure/self-hosted/latest/installing-gitpod) and a more detailed explanation of [requirements](https://www.gitpod.io/docs/configure/self-hosted/latest/cluster-requirements) Gitpod has on the cluster it runs on, as well as which [components](https://www.gitpod.io/docs/configure/self-hosted/latest/requirements) are needed to support it.

A full list of changes can be found on [GitHub](https://github.com/gitpod-io/gitpod/releases).
