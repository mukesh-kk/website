---
title: Tailscale on Gitpod
excerpt: Connect your Gitpod workspace to other resources & services, whether in the cloud or on-prem.
date: 2021-10-29
image: 2021-10-29.jpg
alt:
---

<script>
  import Contributors from "$lib/components/changelog/contributors.svelte";
</script>

With the availability of Tailscale support, you can connect Gitpod workspaces to other resources & services needed. Think of a database hosted behind a corporate firewall or in your on-prem data center.

Equally exciting is the possibility to connect multiple Gitpod workspaces with each other. Imagine a project with microservices which all have their own git repository. Configure Tailscale in each repository and once you start workspaces, the individual services will be able to communicate with each other.

You can learn more about this topic in our [Network Bridging](https://www.gitpod.io/docs/integrations/tailscale) documentation. Alternatively, we have a [template repository](https://github.com/gitpod-io/demo-tailscale-with-gitpod) with the required configuration you can apply to your own projects.

Please let us know what you think via Twitter [@gitpod](https://twitter.com/gitpod) or chat with us at https://www.gitpod.io/chat.

<p><Contributors usernames="AlexTugarev,csweichel,geropl" /></p>

### Fixes and improvements

- [#5865](https://github.com/gitpod-io/gitpod/pull/5865) - Make it possible to cancel pending or running Prebuilds <Contributors usernames="AlexTugarev,csweichel,gtsiolis,jankeromnes" />
- [#6273](https://github.com/gitpod-io/gitpod/pull/6273) - Deleted team's name can be reused. <Contributors usernames="JanKoehnlein,bigint,gtsiolis,laushinka" />
- [#6312](https://github.com/gitpod-io/gitpod/pull/6312) - `/admin`: Improve performance of workspace queries <Contributors usernames="JanKoehnlein,geropl" />
- [#6048](https://github.com/gitpod-io/gitpod/pull/6048) - Replace /workspaces → /projects as default landing page for both users and teams <Contributors usernames="gtsiolis,jankeromnes,jldec,laushinka" />
- [#6038](https://github.com/gitpod-io/gitpod/pull/6038) - Truncate workspace context in the workspace deletion modal <Contributors usernames="gtsiolis,iQQBot,svenefftinge" />
- [#6409](https://github.com/gitpod-io/gitpod/pull/6409) - Experimental support for `CAP_NET_ADMIN` in workspaces <Contributors usernames="AlexTugarev,JanKoehnlein,corneliusludmann,csweichel,geropl" />
- [#6234](https://github.com/gitpod-io/gitpod/pull/6234) - Validate the cluster is in a state for Gitpod to be installed to <Contributors usernames="MrSimonEmms,aledbf,csweichel" />
- [#6265](https://github.com/gitpod-io/gitpod/pull/6265) - Installation config validation <Contributors usernames="MrSimonEmms,csweichel,princerachit" />
- [#6338](https://github.com/gitpod-io/gitpod/pull/6338) - Automated workspace deployment framework and design proposal and prelim checkin for workspace cluster creation <Contributors usernames="csweichel,princerachit" />
- [#6453](https://github.com/gitpod-io/gitpod/pull/6453) - [ws-manager]: Add check for IdeImage not being present in the spec <Contributors usernames="MrSimonEmms,csweichel" />
- [#6348](https://github.com/gitpod-io/gitpod/pull/6348) - Switch from dropbear to OpenSSH <Contributors usernames="akosyakov,aledbf,csweichel,iQQBot" />
- [#6389](https://github.com/gitpod-io/gitpod/pull/6389) - Always enable the New Workspace button on the Configuration Page. <Contributors usernames="AlexTugarev,gptest1,gtsiolis,jldec,svenefftinge" />
