---
title: June Self-Hosted Release
excerpt: We've released a new version of Self-Hosted Gitpod.
date: 2022-06-29
image: 2022-06-29.jpg
alt:
---

<script>
  import Contributors from "$lib/components/changelog/contributors.svelte";
  import Badge from "$lib/components/changelog/badge.svelte"
</script>

We've released a new version of Self-Hosted Gitpod. Update instructions can be found in our [update guide](https://www.gitpod.io/docs/configure/self-hosted/latest/updating). You can read more about how to install it from scratch in our [documentation](https://www.gitpod.io/docs/configure/self-hosted/latest). More details on this release can be found in [GitHub](https://github.com/gitpod-io/gitpod/releases).

> **Note:** If you are on a paid [Self-Hosted plan](../self-hosted), this release will be promoted to your release channel in one week.

For feedback, please raise an [issue](https://github.com/gitpod-io/gitpod/issues/new?assignees=&labels=bug&template=bug_report.yml) or [chat with us](https://www.gitpod.io/chat).

<p><Contributors usernames="nandajavarma,MrSimonEmms,Pothulapati,corneliusludmann,adrienthebo,lucasvaltl" /></p>

### New way to try out Gitpod: Local Preview (alpha)

You can now try out Gitpod Self-Hosted without having to spin up a Kubernetes cluster - via a simple `docker run` command. This will spin up Gitpod locally on your machine and enable you to experience what developing on Gitpod is like. Note that currently, only Linux-based systems are supported (Windows and Mac(Intel) are being worked on) and that unfortunately prebuilds will not work. You can read up on how to get going in the [Local Preview Guide](../docs/configure/self-hosted/latest/local-preview). Local preview is still in [alpha](../docs/help/public-roadmap/release-cycle), so we would appreciate any feedback you may have!

### More flexibility regarding registries for airgapped environments

If you are using Gitpod in an airgapped environment you can now specify the container registry you want to use to store workspace images that Gitpod builds for you. By default, it will use an in-cluster registry. Previously, it would always use the same registry that is used during installation to download the images related to Gitpod.

### Fixes and improvements

- We have added a `customer_id` field to the [telemetry](../docs/configure/self-hosted/latest/telemetry) that is sent from a self-hosted instance. This helps us map an installation to a customer for support purposes. Note that this field is _not_ being populated for users using the community plan and is _only_ relevant to those on a professional plan.

A full list of changes can be found in [the release notes on GitHub](https://github.com/gitpod-io/gitpod/releases).
