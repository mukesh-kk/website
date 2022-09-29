---
section: self-hosted/latest
subsection: operational-guides
title: Updating Gitpod Self-Hosted
---

<script context="module">
  export const prerender = true;
</script>

# How to Update your Gitpod Installation

At first, you must decide on an [update strategy](#update-strategies), and follow related instructions.

After following instructions for your desired update strategy, you need to start the installation admin console. In a terminal with configured `kubectl` run the following command (`<namespace>` is the Kubernetes namespace your Gitpod installation has been installed to):

```shell
$ kubectl kots admin-console --namespace <namespace>
```

Open `http://localhost:8800` (port `8800` is opened on your node on `localhost` only—you may want to forward the port to your workstation to access the admin console). Enter your password. Click on “Check for update”.

> **Note:** For air gapped installations, you need to click `Upload a new version` to upload a new version and then deploy it. A new version is made available to you to download via the download portal provided to you by Gitpod.

When an update is available, you will be asked to deploy the new version. You can run preflight checks on the new version and when you press deploy your current running version will be updated.

In most cases, updates should work without further effort - and your existing data is carried over. In some cases (with breaking changes) we will provide instructions on how to upgrade to a specific version in our [Update Guides](../latest/upgrade-guides).

> Gitpod allows you to [apply custom labels, annotations and environment variables to your resources](./advanced/customization). When using this feature, you will need to manually delete resources that have immutable labels on them for updates to take effect. See the [documentation](./advanced/customization#limitations) for full details.

![kots-admin-dashboard](../../static/images/docs/self-hosted/kots-admin-dashboard.png)

## Update Strategies

You can deploy different strategies to update your Gitpod instance. Each strategy comes with trade-offs regarding downtime, risk, and cost. In any case, you should ensure that the chosen strategy matches your (company’s) risk profile and that every part of your update strategy (incl. rollbacks) is regularly practiced.

Please refer to [Update Guides](../latest/upgrade-guides) to check for breaking changes that need to be handled as part of your upgrade.

### Maintenance Window (Higher downtime, low risk and medium cost) - Recommended

> **Important:** [Single Cluster Reference Architecture](../latest/reference-architecture/single-cluster-ref-arch) is not highly-available, please [stop workspaces](./stop-workspaces) and [prevent workspace starts](./prevent-workspace-starts) prior to proceeding.

In this strategy, you have scheduled maintenance windows where you take down your entire Gitpod installation, update it, test it, and then make it available again. Ideally, this is done during times of low demand, e.g. outside of work hours.

### Secondary Staging Deployment (medium downtime, lower risk, higher cost)

> **Important:** [Single Cluster Reference Architecture](../latest/reference-architecture/single-cluster-ref-arch) is not highly-available, please [stop workspaces](./stop-workspaces) and [prevent workspace starts](./prevent-workspace-starts) prior to proceeding.

In this strategy, you run the newest version of Gitpod on a secondary (staging) cluster to ensure compatibility/fitness of the newest version within your specific environment. Given that you are testing on a secondary cluster, you save on downtime in your primary cluster. If you are confident in the release, you can then also apply the update to your primary cluster. Given that workspace startups may fail for a brief period _during_ the update process, a maintenance window (albeit smaller) will still be required.

### Live update (not available, yet)

> **Important:** Please check back soon, we're planning high-availability [reference architecture](../latest/reference-architecture).

The [Single Cluster Reference Architecture](../latest/reference-architecture/single-cluster-ref-arch) does not support live update. Please choose another update strategy.
