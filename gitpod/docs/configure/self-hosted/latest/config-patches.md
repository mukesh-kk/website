---
section: self-hosted/latest
subsection: troubleshooting
title: Config Patches
---

<script context="module">
  export const prerender = true;
</script>

# Gitpod Configuration Patches

> ⚠️ **Self-hosted as a product is no longer supported**
>
> The last official update of this product is the [November 2022 self-hosted release](https://www.gitpod.io/changelog/november-self-hosted-release). We no longer sell commercial self-hosted licenses. If you want to self-host Gitpod, you can still request our [free community license](https://www.gitpod.io/community-license). However, we no longer offer support or updates for it. If you are interested in an isolated, private installation of Gitpod, take a look at [Gitpod Dedicated](/dedicated).
> Read [our blog on Gitpod Dedicated](/blog/introducing-gitpod-dedicated) to learn why we made the decision to discontinue self-hosted.

Further customization of your installation is possible within the installation UI, where Gitpod can provide you with a config patch to tailor the installation to your specific needs. In the “Additional Options” section, click the “Enable additional options” checkbox, and upload the file in the “Gitpod config patch” field.

![config patch](../../static/images/docs/self-hosted/config-patch.png)

The patch file is effectively a patch for the internally used [Gitpod Installer config file](https://github.com/gitpod-io/gitpod/blob/main/install/installer/example-config.yaml). It gives you access to all configuration options that Gitpod accepts - even those not present in the UI. All values that are set in the patch file will override the generated config file values.
