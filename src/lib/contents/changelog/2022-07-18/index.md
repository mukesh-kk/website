---
title: Bring your own workspace SSH keys
excerpt: Upload your own public SSH keys to access your workspace
date: 2022-07-18
image: 2022-07-18.jpg
alt:
---

<script>
  import Contributors from "$lib/components/changelog/contributors.svelte";
  import Badge from "$lib/components/changelog/badge.svelte"
</script>

SSH (secure shell) is a critical protocol for remote development.
Both [JetBrains](https://www.jetbrains.com/help/idea/remote-development-a.html) IDEs and the [VS Code](https://code.visualstudio.com/docs/remote/remote-overview) editor use SSH as their remote development foundation. So, a big focus at Gitpod has been on improving performance and usability for connecting using SSH.

Which is why today **we're excited to announce that in Gitpod you can now upload your own public keys to access your workspace.** In addition, we've also removed the requirement for a mandatory public key to be available when access Gitpod using SSH with an Access Token.
With SSH public key upload you can now:

1. Re-connect to workspaces without needing to go back to the Gitpod dashboard.
2. Benefit from improved security when accessing your workspace with a private key.

See [the announcement post](https://www.gitpod.io/blog/ssh-key-upload) for details on the use-cases, benefits and how to get started using your own key pair with Gitpod today.

<p><Contributors usernames="iqqbot,mustard-mh" /></p>

### Roadmap updates

<div class="mt-medium">

**JetBrains** - Roadmap issue: [#7956](https://github.com/gitpod-io/gitpod/issues/7956) <Badge text="beta" variant="orange" class="ml-1.5" />

- [#11209](https://github.com/gitpod-io/gitpod/pull/11209) - Add support for JetBrains Gateway v222.3345.1 and later. <Contributors usernames="akosyakov,felladrin,loujaybee" />
- [#11307](https://github.com/gitpod-io/gitpod/pull/11307) - Gitpod Plugin for JetBrains IDEs was updated to respect network proxies. <Contributors usernames="akosyakov,felladrin" />

</div>

### Fixes and improvements

<div class="mt-small">

#### Gitpod Core

- [#11409](https://github.com/gitpod-io/gitpod/pull/11409) - Improve Git Integration validation by testing if host is reachable. <Contributors usernames="AlexTugarev,MrSimonEmms,geropl,jldec" />
- [#11400](https://github.com/gitpod-io/gitpod/pull/11400) - Switch to http/1.1 for gitlab.com repositories <Contributors usernames="aledbf,jenting,kylos101" />
- [#11341](https://github.com/gitpod-io/gitpod/pull/11341) - [local-preview] show `DOMAIN` in the output <Contributors usernames="Pothulapati,adrienthebo" />
- [#11237](https://github.com/gitpod-io/gitpod/pull/11237) - [kots]: add node CPU/memory check tests to workspace node only <Contributors usernames="MrSimonEmms,lucasvaltl,nandajavarma" />
- [#11253](https://github.com/gitpod-io/gitpod/pull/11253) - Requests on ws-proxy won't contain the port anymore on the "X-Forwarded-Host" header. It will contain only the host. If you need the port, you can get it from the "X-Forwarded-Port" header. <Contributors usernames="aledbf,felladrin" />
- [#11208](https://github.com/gitpod-io/gitpod/pull/11208) - Users can see their billable sessions. <Contributors usernames="andrew-farries,laushinka" />
- [#11205](https://github.com/gitpod-io/gitpod/pull/11205) - Minor fixes to the old Team Subscription UI <Contributors usernames="andrew-farries,geropl" />
- [#11192](https://github.com/gitpod-io/gitpod/pull/11192) - Make prebuild logs responsive for small viewports <Contributors usernames="andrew-farries,geropl,gtsiolis,laushinka" />
- [#11232](https://github.com/gitpod-io/gitpod/pull/11232) - Fix an issue that was causing the workspace to frequently timeout when using a JetBrains IDE. <Contributors usernames="akosyakov,felladrin,mustard-mh" />
- [#11268](https://github.com/gitpod-io/gitpod/pull/11268) - [installer]: add test for customization of proxy service <Contributors usernames="MrSimonEmms,nandajavarma" />

</div>

#### Gitpod VSCode Browser

- [#379](https://github.com/gitpod-io/openvscode-server/pull/379) - Fix `.gitpod.yml` `ports.onOpen` not working on workspace startup <Contributors usernames="jeanp413,mustard-mh" />
- [#378](https://github.com/gitpod-io/openvscode-server/pull/378) - Remove heartbeat in gitpod-remote VS Code plugin <Contributors usernames="jeanp413" />

#### Gitpod VSCode Desktop

- [#6](https://github.com/gitpod-io/gitpod-vscode-desktop/pull/6) - Fix auth validation <Contributors usernames="jeanp413" />
- [#5](https://github.com/gitpod-io/gitpod-vscode-desktop/pull/5) - Use new getSSHPublicKeys api method <Contributors usernames="jeanp413" />
