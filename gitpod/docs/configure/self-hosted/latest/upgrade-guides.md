---
section: self-hosted/latest
subsection: reference
title: Upgrade Guides and Breaking Changes
---

<script context="module">
  export const prerender = true;
</script>

# Upgrade Guides and Breaking Changes

This page informs you if there are specific considerations to take into account when upgrading to a specific version. If no breaking changes and thus specific recommendations when updating are mentioned here (or if they do not apply to you), please follow the normal upgrade procedure mentioned on the [Updating your Gitpod Installation](../latest/updating) page.

## 2022.09

### Security

This release includes security fixes addressing information leakage in logs; see the [security announcement log](https://www.gitpod.io/security/log) for more information.

### Breaking Changes

- [Single Cluster Reference Architecture](https://www.gitpod.io/docs/configure/self-hosted/latest/reference-architecture/single-cluster-ref-arch) changes:
  - Regular workspaces and headless workspaces are isolated to separate node pools to help avoid noisy neighbor issues between the two and guarantee maximum performance for workspaces
  - Workspace Services (such as `ws-manager`) are deployed to the services nodepool to prevent potential service degradation from high `ws-daemon` memory use.
  - We've increased the default node size to 16 core / 64 GB nodes. This is to allow for more workspaces per node, and avoid the scenario where there is just one workspace per node. We've also added [documentation](https://www.gitpod.io/docs/configure/self-hosted/latest/configuring-workspace-resources) to detail our recommendations around workspace resources.

## 2022.08

> There is no expected impact from these changes if using KOTS. These are documented for transparency purposes only.
> **Custom labels from the pod selector labels removed**

[11954](https://github.com/gitpod-io/gitpod/pull/11954): remove custom labels from the pod selector labels. This removes this [limitation](https://www.gitpod.io/docs/configure/self-hosted/latest/advanced/customization#limitations) so this is a long-term improvement. The impact of this should be handled transparently for you by the KOTS installer.

**Usage of PodSecurityPolicies removed**

[12336](https://github.com/gitpod-io/gitpod/pull/12336): Removal of PodSecurityPolicies. These were deprecated from Kubernetes 1.21 and removed from 1.25. This allows Gitpod to run on Kubernetes 1.25+, which is scheduled for imminent release. If you have PodSecurityPolicies enabled on your cluster, we suggest you disable them as soon as possible. If an installation is deployed to a cluster with PSPs enabled, you will need to add `experimental.common.usePodSecurityPolicies = true` to a [config-patch file](./config-patches) - however, do note that this is deprecated and exists to ease the transition away from PSPs.

## 2022.07

### Setting the service type of the proxy component

You can now configure the service type of the proxy service in the installation UI (see image below) - you do not need to upload a `.yaml` file as a [config patch](./config-patches) anymore to configure this. However, having it in the config patch will still work until December.

![proxy service type UI](../../static/images/docs/self-hosted/proxy-service-type-ui.png)

### Setting the default workspace image and which image registries the default image can be pulled from

We've moved the configuration of the default workspace image and the default base image registry whitelist out of the experimental section of the [config-patch](../latest/config-patches) file. The latter was also renamed. Using them in the experimental section will still work for the time being (until approx. December 2022).

**Before:**

```yaml
experimental:
  webApp:
    server:
      defaultBaseImageRegistryWhitelist:
        - <allowed registries>
    workspaceDefaults:
      workspaceImage: <path to your default workspace image>
```

**After:**

```yaml
workspace:
  workspaceImage: <path to your default workspace image>
containerRegistry:
  privateBaseImageAllowList:
    - <allowed registries>
```
