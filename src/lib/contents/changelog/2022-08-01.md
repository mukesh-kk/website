---
title: New ports explorer, changelog view, and connection improvements for VS Code
excerpt: New ports explorer, changelog view, and connection improvements for VS Code
date: 2022-08-01
image: 2022-08-01.jpg
alt:
tag:
---

<script>
  import Contributors from "$lib/components/changelog/contributors.svelte";
  import Badge from "$lib/components/changelog/badge.svelte"
</script>

Users of the latest release could notice that we were working on improvements to VS Code Browser and Desktop.
Now they are available in stable release as well via VS Code settings. Key highlights are:

- **[Connection improvements for VS Code Desktop](#connection-improvements-for-vs-code-desktop)** to bring stability and performance.
- **[New ports explorer in VS Code Browser](#new-ports-explorer-in-vs-code-browser)** to align interface with VS Code Desktop.
- **[Latest changelog view in VS Code](#latest-changelog-view-in-vs-code)** to access the latest changelog directly from VS Code Browser or Desktop.

> You can enable `Latest Release` in [your preferences](https://gitpod.io/preferences) and try the latest updates as soon as they are available.

<p><Contributors usernames="mustard-mh,jeanp413,loujaybee,akosyakov" /></p>

### Connection improvements for VS Code Desktop

We developed a new SSH connection mode for VS Code Desktop which brings stability and performance improvements.
This mode can be enabled by setting `gitpod.remote.useLocalApp` to `false` in VS Code settings and will be enabled by default in future releases.

You can learn more about new the approach in its announcement [blog post](https://www.gitpod.io/blog/vscode-desktop-ssh-updates). If you're short of time:

1. Connection has improved stability, with fewer disconnections
2. Approach doesn't overwrite the [`remote.SSH.configFile`](https://code.visualstudio.com/blogs/2019/10/03/remote-ssh-tips-and-tricks#_ssh-configuration-file)
3. No additional binary downloads required or background processes
4. Fewer requests from VS Code to accept the SSH fingerprint
5. Improved operating system support via OpenSSH

### New ports explorer in VS Code Browser

We developed a new ports explorer in VS Code Browser to align the interface with VS Code Desktop.
You can enable, or disable it via the `gitpod.experimental.portsView.enabled` in VS Code settings.
Give the feature a try and we’d love to hear [your feedback](https://github.com/gitpod-io/gitpod/issues/7408).

![New ports explorer in VS Code Browser](/images/changelog/2022-08-01/ports.png)

### Latest changelog view in VS Code

The new VS Code command `Gitpod: Show Release Notes` let you access latest changelog directly from VS Code Browser or Desktop.

![Latest changelog view in VS Code](https://www.gitpod.io/images/changelog/2022-08-01/notes.png)

### Fixes and improvements

- `gp` has now a new `timeout` namespace letting you to [show](https://www.gitpod.io/docs/references/gitpod-cli#show) and [extend](https://www.gitpod.io/docs/references/gitpod-cli#extend) timeout of a running workspace.
- [#11642](https://github.com/gitpod-io/gitpod/pull/11642) - [local-preview] Add separated anonymous telemetry <Contributors usernames="MrSimonEmms,Pothulapati" />
- [#11592](https://github.com/gitpod-io/gitpod/pull/11592) - [dashboard] Replace workspace search alert <Contributors usernames="andrew-farries,easyCZ,geropl,gtsiolis" />
- [#11652](https://github.com/gitpod-io/gitpod/pull/11652) - [dashboard] Fix persistence of checkbox values on settings page <Contributors usernames="andrew-farries,easyCZ" />
- [#11698](https://github.com/gitpod-io/gitpod/pull/11698) - [kots]: put the "run" collectors into the active namespace <Contributors usernames="MrSimonEmms,adrienthebo" />
- [#11630](https://github.com/gitpod-io/gitpod/pull/11630) - [server] fix: new project widget broken if 'null' item(s) received from gh api <Contributors usernames="andrew-farries,gtsiolis,laushinka,lucasvaltl,meysholdt,szab100" />
- [#11543](https://github.com/gitpod-io/gitpod/pull/11543) - [server] Send error message on 401 errors <Contributors usernames="andrew-farries,geropl" />
- [#10731](https://github.com/gitpod-io/gitpod/pull/10731) - [.gitpod.yml generator] Use 'pnpm' package manager when there is a pnpm-lock.yaml file or the package.json specifies it <Contributors usernames="andrew-farries,gengjiawen,jankeromnes" />
- [#11491](https://github.com/gitpod-io/gitpod/pull/11491) - Check the following in cgroup v1/v2Eliminate dockerd rootless mode in cgroup v2 <Contributors usernames="jenting,utam0k" />
- [#11604](https://github.com/gitpod-io/gitpod/pull/11604) - Update docker compose to v2.7.0 <Contributors usernames="aledbf,jenting" />
