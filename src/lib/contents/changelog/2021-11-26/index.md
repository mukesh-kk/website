---
title: Gitpod Self-Hosted installers
excerpt: Installing Gitpod Self-Hosted is a whole lot simpler now.
date: 2021-11-26
image: 2021-11-26.jpg
alt:
---

<script>
  import Contributors from "$lib/components/changelog/contributors.svelte";
</script>

If you prefer to install Gitpod in your own environment, we are pleased to announce this process has become a whole lot simpler.

Say hello to `make install` 🎉!

Yes really, our shiny new installer scripts take care of the heavy lifting while all we ask from you is to configure a file or two (depending on your hosting provider) and you're up and running in no time.

Get started today with installer guides for:

- [Amazon Elastic Kubernetes Service](https://github.com/gitpod-io/gitpod-eks-guide) (EKS)
- [Google Kubernetes Engine](https://github.com/gitpod-io/gitpod-gke-guide) (GKE)
- [Microsoft Azure Kubernetes Service](https://github.com/gitpod-io/gitpod-microsoft-aks-guide) (AKS)

Please let us know what you think via Twitter [@gitpod](https://twitter.com/gitpod) or chat with us at https://www.gitpod.io/chat.

<p><Contributors usernames="MrSimonEmms,csweichel" /></p>

### Fixes and improvements

- [#6652](https://github.com/gitpod-io/gitpod/pull/6652) - Bitbucket-only users get an error message now on _New Project_ page <Contributors usernames="AlexTugarev,JanKoehnlein,geropl,gtsiolis" />
- [#6775](https://github.com/gitpod-io/gitpod/pull/6775) - make DB layer more robust against odd DB values <Contributors usernames="JanKoehnlein,geropl,jankeromnes" />
- [#6847](https://github.com/gitpod-io/gitpod/pull/6847) - The “Your Workspace is Ready” page for desktop IDEs now has “Stop Workspace” and “Go to Dashboard” actions. <Contributors usernames="JanKoehnlein,corneliusludmann" />
- [#6031](https://github.com/gitpod-io/gitpod/pull/6031) - add `GIT_AUTHOR_EMAIL` to the environment variables mentioned in account settings <Contributors usernames="DetachHead,JanKoehnlein,akosyakov,csweichel,iQQBot,jankeromnes,laushinka,loujaybee,meysholdt" />
- [#6883](https://github.com/gitpod-io/gitpod/pull/6883) - [dashboard][server] Make all project slugs unique within a team or user account by adding a unique suffix <Contributors usernames="JanKoehnlein,jankeromnes" />
- [#6702](https://github.com/gitpod-io/gitpod/pull/6702) - Add container registry and database secret checks <Contributors usernames="MrSimonEmms,csweichel" />
- [#6716](https://github.com/gitpod-io/gitpod/pull/6716) - Configure and validate the external database <Contributors usernames="MrSimonEmms,csweichel" />
- [#6753](https://github.com/gitpod-io/gitpod/pull/6753) - [installer]: fix the auth provider config <Contributors usernames="MrSimonEmms,kylos101" />
- [#6682](https://github.com/gitpod-io/gitpod/pull/6682) - [gpctl] Support forceful cluster de-registration <Contributors usernames="aledbf,csweichel,geropl" />
- [#6760](https://github.com/gitpod-io/gitpod/pull/6760) - [installer]: fix jaeger operator misconfiguration <Contributors usernames="MrSimonEmms,kylos101" />
- [#6733](https://github.com/gitpod-io/gitpod/pull/6733) - [ws-daemon] Fix resource leak during proc mounts <Contributors usernames="aledbf,csweichel" />
- [#6745](https://github.com/gitpod-io/gitpod/pull/6745) - Configure Azure blob storage for installer <Contributors usernames="MrSimonEmms,csweichel" />
- [#6860](https://github.com/gitpod-io/gitpod/pull/6860) - [image-builder] Fix authentication issues with external registries <Contributors usernames="MrSimonEmms,csweichel" />
- [#6862](https://github.com/gitpod-io/gitpod/pull/6862) - Apply node affinities to components <Contributors usernames="MrSimonEmms,csweichel" />
- [#6870](https://github.com/gitpod-io/gitpod/pull/6870) - [ws-proxy] Improve TLS default configuration <Contributors usernames="aledbf,corneliusludmann,csweichel" />
- [#6893](https://github.com/gitpod-io/gitpod/pull/6893) - Set internal certs to 90 day duration <Contributors usernames="MrSimonEmms,aledbf,csweichel" />
- [#6892](https://github.com/gitpod-io/gitpod/pull/6892) - Change Minio to forked version <Contributors usernames="MrSimonEmms,csweichel" />
