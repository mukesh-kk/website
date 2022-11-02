---
title: September Self-Hosted Release
excerpt: We've released a new version of Self-Hosted Gitpod 🎉.
date: 2022-10-07
image: 2022-10-07.jpg
tag: self-hosted
alt:
---

<script>
  import Contributors from "$lib/components/changelog/contributors.svelte";
  import Badge from "$lib/components/changelog/badge.svelte"
</script>

We've released a new version of Self-Hosted Gitpod. Update instructions can be found in our [update guide](https://www.gitpod.io/docs/configure/self-hosted/latest/updating). You can read more about how to install it in our [documentation](https://www.gitpod.io/docs/configure/self-hosted/latest). More details on this release can be found on [GitHub](https://github.com/gitpod-io/gitpod/releases).

> **Note:** If you are on a paid [Self-Hosted plan](../self-hosted), this release will be promoted to your release channel in one week.

For feedback, please raise an [issue](https://github.com/gitpod-io/gitpod/issues/new?assignees=&labels=bug&template=bug_report.yml) or [chat with us](https://www.gitpod.io/chat).

<p><Contributors usernames="nandajavarma,MrSimonEmms,Pothulapati,corneliusludmann,adrienthebo,lucasvaltl" /></p>

### Security

This release includes security fixes addressing information leakage in logs; see the [security announcement log](https://www.gitpod.io/security/log) for more information.

### 2022.09.2 hotfix (published on 21.7.2022)

This hotfix includes:

- [#13934](https://github.com/gitpod-io/gitpod/pull/13934) Fix for an issue where secrets could end up in logs because the installer was logging the env var object. For more information, see the [security announcement log](../security/log#update-21102022)
- [#13959](https://github.com/gitpod-io/gitpod/pull/13959) This fix adds a checkbox to enable the HTTP proxy settings. Proxy settings were sometimes being incorrectly applied before this. Now, the values are still taken from the KOTS CLI input variables, but will not be applied until the option is configured in the UI.

### 2022.09.1 hotfix (published on 14.7.2022)

[#13821](https://github.com/gitpod-io/gitpod/pull/13821) This hotfix includes a change to fix the regression caused by `protected_secrets` (see [security announcement log](../security/log) for more information) when working with self-signed certs.

### Highlights

#### Preflight checks on the Gitpod configuration

[#12015](https://github.com/gitpod-io/gitpod/issues/12015) We know that some of you are using [config patches](https://www.gitpod.io/docs/configure/self-hosted/latest/config-patches) to configure additional aspects of Gitpod, such as the resources that workspaces use. Up until now, there was no validation on these patches and thus it was difficult to debug if there was an issue with them. This has changed now - there is a preflight check that validates these (and the Gitpod configuration as a whole), and then informs you where to look to find any errors.

#### Additional safeguards during updates

[#13215](https://github.com/gitpod-io/gitpod/pull/13215) During updates, we recommend that you do not have any workspaces running to prevent data loss (see [update guide](https://www.gitpod.io/docs/configure/self-hosted/latest/updating)). There is now a preflight check that checks for running workspaces before you deploy and fails if it finds any running ones. If an update is deployed anyways, running workspaces will be stopped for you. Note that users will see their workspaces stopped arbitrarily.

### Breaking changes

- [Single Cluster Reference Architecture](https://www.gitpod.io/docs/configure/self-hosted/latest/reference-architecture/single-cluster-ref-arch) changes:
  - Regular workspaces and headless workspaces are isolated to separate node pools to help avoid noisy neighbor issues between the two and guarantee maximum performance for workspaces
  - Workspace Services (such as `ws-manager`) are deployed to the services nodepool to prevent potential service degradation from high `ws-daemon` memory use.
  - We've increased the default node size to 16 core / 64 GB nodes. This is to allow for more workspaces per node, and avoid the scenario where there is just one workspace per node. We've also added [documentation](https://www.gitpod.io/docs/configure/self-hosted/latest/configuring-workspace-resources) to detail our recommendations around workspace resources.

### Fixes and improvements

[#12196](https://github.com/gitpod-io/gitpod/issues/12196) The KOTS installer script is used to generate a config file out of the values inserted into the KOTS UI. We've refactored large parts of it to turn it from a bash script into a part of the installer image. This improves reliability and predictability for you and maintainability for us. It also allows us to call this during preflight checks, enabling us to provide the preflight checks for config patches mentioned above.

A full list of changes can be found in [the release notes on GitHub](https://github.com/gitpod-io/gitpod/releases).
