---
section: self-hosted/latest
subsection: troubleshooting
title: Config Patches
---

<script context="module">
  export const prerender = true;
</script>

# Gitpod Configuration Patches

Further customization of your installation is possible within the installation UI, where Gitpod can provide you with a config patch to tailor the installation to your specific needs. In the “Additional Options” section, click the “Enable additional options” checkbox, and upload the file in the “Gitpod config patch” field.

![config patch](../../static/images/docs/self-hosted/config-patch.png)

The patch file is effectively a patch for the internally used [Gitpod Installer config file](https://github.com/gitpod-io/gitpod/blob/main/install/installer/example-config.yaml). It gives you access to all configuration options that Gitpod accepts - even those not present in the UI. All values that are set in the patch file will override the generated config file values.
