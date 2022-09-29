---
section: integrations
title: JetBrains Gateway
---

<script context="module">
  export const prerender = true;
</script>

# JetBrains Gateway

> {title} is currently in [Beta](/docs/help/public-roadmap/release-cycle) · [Send feedback](https://github.com/gitpod-io/gitpod/issues/6576).

[JetBrains Gateway](https://www.jetbrains.com/remote-development/gateway/) is your single entry point to all remote development environments when using JetBrains IDE's. JetBrains Gateway is a compact desktop app that allows you to work remotely with a JetBrains IDE without downloading the full IDE. Gitpod works with JetBrains Gateway via a custom Gitpod [JetBrains Gateway plugin](https://plugins.jetbrains.com/plugin/18438-gitpod-gateway).

Using JetBrains Gateway on Desktop with Gitpod, allows you to:

1. Create a new Gitpod workspace
2. View and open your 20 latest Gitpod workspaces

All without leaving needing to leave your desktop.

## JetBrains IDE support

JetBrains Gateway is the underlying technology which enables the Gitpod integration. Support for JetBrains IDEs will be rolled out incrementally. The [JetBrains Gateway plugin](https://plugins.jetbrains.com/plugin/18438-gitpod-gateway) is a standalone feature, so its release cycle is independent individual JetBrains IDE support.

- [IntelliJ](/docs/references/ides-and-editors/intellij)
- [GoLand](/docs/references/ides-and-editors/goland)
- [PhpStorm](/docs/references/ides-and-editors/phpstorm)
- [PyCharm](/docs/references/ides-and-editors/pycharm)

## Getting started

`youtube: 8djaRYT2FAY`

1. **Install [JetBrains Gateway](https://www.jetbrains.com/help/idea/remote-development-a.html#gateway)** - With the [JetBrains Gateway and Gitpod](/docs/integrations/jetbrains-gateway) plugin you can create and manage your latest 20 Gitpod workspaces.
2. **Install the Gitpod plugin** - Open JetBrains Gateway and you'll see the Gitpod logo on the main page. Click "install" to install the [Gitpod plugin](https://plugins.jetbrains.com/plugin/18438-gitpod-gateway) for JetBrains Gateway.
3. **Update your Gitpod preferences** - Select your preferred JetBrains IDE on the [Gitpod preferences page](https://gitpod.io/preferences) which will set your default IDE for future workspace starts.
4. **Start (or restart) your workspace** - Either start a workspace directly from within the [JetBrains Gateway](/docs/integrations/jetbrains-gateway) via the Gitpod plugin **OR** open a new workspace directly in Gitpod where on workspace start you will be prompted to open your preferred JetBrains IDE for that workspace.

### How does JetBrains and Gitpod work?

On Gitpod workspace start, a JetBrains IDE is loaded into your workspace according to your preferences. When you start a workspace the JetBrains Gateway application downloads a thin client which then connects to your Gitpod workspace.

Since [JetBrains Gateway](https://www.jetbrains.com/remote-development/gateway/) downloads the thin client for you, **you do not need to download, open or modify your JetBrains IDE directly**. JetBrains licensing still applies, but is applied to the connecting thin client, not the backend running in your Gitpod workspace.

### Setting a JetBrains IDE as a preference

To start a workspace using JetBrains from your browser, you need to first set your preferred JetBrains IDE as your user preference.

<figure>
<video playsinline autoplay no-controls loop muted class="shadow-medium w-full rounded-xl max-w-3xl mt-x-small" alt="Updating Gitpod IDE preferences to {title}" src="/images/editors/select-jetbrains-ide.mp4"></video>
    <figcaption>Updating Gitpod IDE preferences to a JetBrains IDE</figcaption>
</figure>

### Opening a JetBrains IDE from Gitpod

When starting a new workspace from Gitpod in the browser (with a JetBrains IDE set as your preference) you will see a prompt to open JetBrains Gateway. Clicking the prompt will immediately launch JetBrains Gateway and begin downloading the IDE thin client. The downloaded thin client will exactly match the IDE running in your Gitpod workspace.

<figure>
<video playsinline autoplay no-controls loop muted class="shadow-medium w-full rounded-xl max-w-3xl mt-x-small" alt="Opening a JetBrains IDE from Gitpod" src="/images/editors/opening-the-thin-jetbrains-client.mp4"></video>
    <figcaption>Opening JetBrains Gateway from Gitpod</figcaption>
</figure>

### Updating the Gitpod plugin in JetBrains Gateway

Since Gitpod and JetBrains works via JetBrains Gateway, you do not need to download a JetBrains IDE. Also, **you do not need to alter your plugin settings in your JetBrains IDE**. All setup and configuration for Gitpod and JetBrains is completed within JetBrains Gateway.

<figure>
<video playsinline autoplay no-controls loop muted  class="shadow-medium w-full rounded-xl max-w-3xl mt-x-small" alt="Updating the Gitpod plugin in JetBrains Gateway" src="/images/editors/update-jetbrains-gateway-settings.mp4"></video>
    <figcaption>Updating the Gitpod plugin in JetBrains Gateway</figcaption>
</figure>

### Opening a JetBrains IDE from JetBrains Gateway

You can also start, and connect to Gitpod workspaces directly from JetBrains Gateway. Click Gitpod in the left-hand side of JetBrains Gateway, and paste a source control context URL directly to start a new workspace, or click connect on a running or stopped workspace.

<figure>
<video playsinline autoplay no-controls loop muted class="shadow-medium w-full rounded-xl max-w-3xl mt-x-small" alt="Opening a JetBrains IDE from Gateway" src="/images/editors/open-from-jetbrains-gateway.mp4"></video>
    <figcaption>Opening a JetBrains IDE from Gateway</figcaption>
</figure>

## Configuring the JetBrains Gateway Host

By default the JetBrains Gateway Gitpod plugin points to `gitpod.io` as the default host for listing, opening and managing Gitpod workspaces.

If you're using Gitpod [Self-Hosted](/docs/configure/self-hosted/latest), to update the host:

1. Open JetBrains Gateway
2. Navigate to "preferences" (OSX) or "settings" (Windows/Linux)
3. Search for "Gitpod" (or find it under "tools")
4. Modify the `Gitpod Host` field

<figure>
<img class="shadow-medium w-full rounded-xl max-w-3xl mt-x-small" alt="Setting the Gitpod host in the JetBrains Gateway plugin" src="/images/jetbrains-gateway/jetbrains-gateway-host.png">
    <figcaption>Setting the Gitpod host in the JetBrains Gateway plugin (OSX)</figcaption>
</figure>

## Configuring JetBrains Gateway Networking

The following diagram details how the JetBrains Gateway client connects and communicates with Gitpod workspaces, for situations such as configuring corporate networking requirements.

1. **JetBrains.com** - The JetBrains IDE thin client images are downloaded dynamically from JetBrains Gateway to match the exact IDE that is running in Gitpod. Access to jetbrains.com must be granted for an air-gapped Gitpod installation with JetBrains Gateway configuration to work.
2. **JetBrains Gateway** - The JetBrains Gateway client is the component which fetches information about Gitpod workspaces, pulled from the Gitpod API via HTTPS.
3. **JetBrains Thin Client** - The thin client connects to the Gitpod workspace via SSH, routed via the workspace proxy ("ws-proxy"). The SSH server (SSH Gateway) runs in the workspace proxy, not in the workspace directly.

![JetBrains networking setup](/images/editors/jetbrains-architecture-dark-theme.png)
![JetBrains networking setup](/images/editors/jetbrains-architecture-light-theme.png)

## Troubleshooting

- [What should I do if JetBrains Gateway and Gitpod aren’t working?](/docs/help/troubleshooting#what-should-i-do-if-jetbrains-gateway-and-gitpod-arent-working)
- [Gitpod logs in JetBrains Gateway](/docs/help/troubleshooting#gitpod-logs-in-jetbrains-gateway)
- [Gitpod logs in JetBrains Client](/docs/help/troubleshooting#gitpod-logs-in-jetbrains-client)
