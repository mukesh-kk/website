---
section: self-hosted/helm-deprecated
title: Configure the VSX registry used by your Gitpod Self-Hosted installation
---

<script context="module">
  export const prerender = true;
</script>

# Configure the VSX registry used by your Gitpod Self-Hosted installation

> ⚠️ **Deprecated Content**
>
> The content of this page assumes you are using Helm, which is now deprecated. Please use the [Installer](../../latest) instead.

Gitpod uses the public [OpenVSX](https://open-vsx.org) registry as only products produced by Microsoft may access the Visual Studio Code Marketplace. This document explains how Gitpod Self-Hosted can be configured in air-gapped scenarios to connect to a private OpenVSX registry.

## Configuration

To connect to private OpenVSX registry, perform the following steps:

1.  Merge the following into your `values.custom.yaml`:

    ```yaml
    components:
      openVsxProxy:
        vsxRegistryUrl: open-vsx.org
    ```

    Replace `open-vsx.org` with the domain your registry is available at.

2.  Do a `helm upgrade --install -f values.custom.yaml gitpod gitpod.io/gitpod --version=0.10.0` to apply the changes.

## Additional resources

- https://github.com/gitpod-io/gitpod/blob/cfb528c5daf5115b666ec7404bfe25d9fc9598d6/chart/values.yaml#L137
