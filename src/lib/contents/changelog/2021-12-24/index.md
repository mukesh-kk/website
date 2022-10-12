---
title: Self-managed k3s on GCP
excerpt: We recently moved some of our workloads from the managed Google Kubernetes Engine to self-managed k3s on GCP.
date: 2021-12-24
image: 2021-12-24.jpg
alt:
---

<script>
  import Contributors from "$lib/components/changelog/contributors.svelte";
</script>

Gitpod's services run on Kubernetes and are what you would consider a "classic cloud-native application". When you start a workspace for your project, we also run that on Kubernetes, but the requirements are very different from what Gitpod services need.

To run your workspaces, we deeply integrate with the Kernel, the container runtime and the Kubernetes control plane.

Up until recently, everything above ran on Google Cloud's Kubernetes Engine (GKE). This continues to be the case for Gitpod's services, but we moved user workspaces to self-managed k3s on GCP.

In short, this move brings better performance that will benefit your daily work, but also gets us closer to upstream and provides us with more flexibility. It is a foundation we put in place to build upon in the weeks and months to come!

Before you decide to follow our lead though, please see our CTO Chris' [in-depth explanation](https://twitter.com/csweichel/status/1468239388115099669) of benefits, gotchas and overall details of this migration.

<p><Contributors usernames="aledbf,csweichel" /></p>

### Fixes and improvements

- [#7312](https://github.com/gitpod-io/gitpod/pull/7312) - Profile of the user who already added a project is linked. <Contributors usernames="jldec,laushinka" />
- [#7177](https://github.com/gitpod-io/gitpod/pull/7177) - Allow auth provider secrets to be passed in via a secret <Contributors usernames="MrSimonEmms,corneliusludmann,csweichel,jankeromnes,kylos101,laushinka" />
- [#7012](https://github.com/gitpod-io/gitpod/pull/7012) - Allow setting a name and a description for each port on .gitpod.yml <Contributors usernames="akosyakov,felladrin,geropl,gtsiolis,meysholdt" />
- [#7354](https://github.com/gitpod-io/gitpod/pull/7354) - Fix Team Workspace Success Criteria dashboard <Contributors usernames="aledbf,kylos101" />
- [#7107](https://github.com/gitpod-io/gitpod/pull/7107) - [installer]: update docker-registry to allow for pod security policy application <Contributors usernames="MrSimonEmms,aledbf" />
- [#6827](https://github.com/gitpod-io/gitpod/pull/6827) - 1. [installer] Add a namespace for the cert-manager self-signing issuer so it can be uninstalled using the configmap.2. [installer] Set EnableLocalApp to true by default. <Contributors usernames="MrSimonEmms,csweichel,geropl,iQQBot,kylos101,mads-hartmann,meysholdt" />
- [#7206](https://github.com/gitpod-io/gitpod/pull/7206) - [installer]: correct the starts_with validation on the config <Contributors usernames="MrSimonEmms,princerachit" />
- [#7200](https://github.com/gitpod-io/gitpod/pull/7200) - [installer]: separate server and IDE components <Contributors usernames="JanKoehnlein,MrSimonEmms,akosyakov,corneliusludmann,iQQBot,jeanp413" />
- [#7163](https://github.com/gitpod-io/gitpod/pull/7163) - Improved start page when a GitHub app is not installed. <Contributors usernames="gtsiolis,jankeromnes,jldec,laushinka" />
