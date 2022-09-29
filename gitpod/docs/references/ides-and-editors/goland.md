---
section: ides-and-editors
title: GoLand
---

<!--
  This document is auto generated from generators/ide/jb-product.md
  Edit this file instead and run `yarn generate:jb`to apply.
-->

<script context="module">
  export const prerender = true;
</script>

<!-- prettier-ignore -->
# GoLand

> {title} is currently in [Beta](/docs/help/public-roadmap/release-cycle) · [Send feedback](https://github.com/gitpod-io/gitpod/issues/6576).

## Getting started

1. **Install [JetBrains Gateway](https://www.jetbrains.com/help/go/remote-development-a.html#gateway)** - With the [JetBrains Gateway and Gitpod](/docs/integrations/jetbrains-gateway) plugin you can create and manage your latest 20 Gitpod workspaces.
2. **Install the Gitpod plugin** - Open JetBrains Gateway and you'll see the Gitpod logo on the main page. Click "install" to install the [Gitpod plugin](https://plugins.jetbrains.com/plugin/18438-gitpod-gateway) for JetBrains Gateway.
3. **Update your Gitpod preferences** - Select {title} on the [Gitpod preferences page](https://gitpod.io/preferences) which will set {title} as your default IDE for future workspace starts.
4. **Start (or restart) your workspace** - Either start a workspace directly from within the [JetBrains Gateway](/docs/integrations/jetbrains-gateway) via the Gitpod plugin **OR** open a new workspace directly in Gitpod where on workspace start you will be prompted to open {title} for that workspace.

<figure>
<video playsinline autoplay no-controls loop muted class="shadow-medium w-full rounded-xl max-w-3xl mt-x-small" alt="Updating Gitpod IDE preferences to {title}" src="/images/editors/select-jetbrains-ide.mp4"></video>
    <figcaption>Updating Gitpod IDE preferences to {title}</figcaption>
</figure>

<figure>
<video playsinline autoplay no-controls loop muted class="shadow-medium w-full rounded-xl max-w-3xl mt-x-small" alt="Opening a JetBrains IDE from Gitpod" src="/images/editors/opening-the-thin-jetbrains-client.mp4"></video>
    <figcaption>Opening a JetBrains IDE from Gitpod</figcaption>
</figure>

<figure>
<video playsinline autoplay no-controls loop muted  class="shadow-medium w-full rounded-xl max-w-3xl mt-x-small" alt="Updating the Gitpod plugin in JetBrains Gateway" src="/images/editors/update-jetbrains-gateway-settings.mp4"></video>
    <figcaption>Updating the Gitpod plugin in JetBrains Gateway</figcaption>
</figure>

<figure>
<video playsinline autoplay no-controls loop muted class="shadow-medium w-full rounded-xl max-w-3xl mt-x-small" alt="Opening a JetBrains IDE from Gateway" src="/images/editors/open-from-jetbrains-gateway.mp4"></video>
    <figcaption>Opening a JetBrains IDE from Gateway</figcaption>
</figure>

**Important:** You must restart any started workspaces for your IDE preferences to take effect.

## Install Plugins

> This section relates to plugin management when using JetBrains IDEs in a remote development context. For information on regular plugin management, refer to <a href="https://www.jetbrains.com/help/go/managing-plugins.html" target="_blank">{title} docs</a>.

Unlike with regular development, JetBrains [Remote development](https://www.jetbrains.com/help/go/remote-development-overview.html#defs) with {title} allows users to install plugins in different locations:

- [**{title} backend plugins**](#install-on-title-backend) - The JetBrains {title} backend runs within the remote Gitpod workspace. Backend plugins contribute functionality for IDE experiences relating to the filesystem, tools or languages and frameworks. When installed, **a backend plugin only applies to the currently running Gitpod workspace** and is not associated with a user. However, a plugin can be [preconfigured for all users of a repository](#preconfigure-for-repository) so that the plugin is enabled with every workspace start. It is not currently possible to install a backend plugin that applies to all workspaces of a Gitpod user or team.
- [**JetBrains Client plugins**](#install-on-jetbrains-client) - The JetBrains client runs on the users local machine and can be thought of as the user interface to the remote {title} backend. Client plugins are different to backend plugins as they contribute to the user interface aspect of the IDE experience (e.g. keyboard shortcuts and themes). Once installed, **a client plugin is enabled for all Gitpod workspaces the user opens** (if the workspace is running the exact same version of the {title} backend where the plugin was initially installed).
- [**JetBrains Gateway plugins**](/docs/integrations/jetbrains-gateway#getting-started) - The JetBrains Gateway is an application downloaded onto a users local machine which allows users to start JetBrains Clients that are compatible with the {title} backend, running in a Gitpod workspace. JetBrains Gateway plugins are installed directly in JetBrains Gateway and contribute to remote development connection experiences (e.g. the [Gitpod JetBrains Gateway](https://plugins.jetbrains.com/plugin/18438-gitpod-gateway) plugin).

### Install on JetBrains Client

The JetBrains client runs on the users local machine and can be thought of as the user interface to the remote {title} backend. Client plugins contribute to the user interface aspect of the IDE experience (e.g. keyboard shortcuts and themes).

Once installed, **a client plugin is enabled for all Gitpod workspaces the user opens** (if the workspace is running the exact same version of the {title} backend where the plugin was initially installed).

To install a plugin on **JetBrains Client** follow these steps:

- In **JetBrains Client** open the IDE settings and select **Plugins**.
- Find the plugin in the **Marketplace** and click **Install**.

<figure>
<img class="shadow-medium w-full rounded-xl max-w-3xl mt-x-small" alt="Install a plugin on JetBrains Client" src="/images/editors/install-local-jb-plugin.png">
    <figcaption>Install a plugin on JetBrains Client</figcaption>
</figure>

### Install on {title} backend

The JetBrains {title} backend runs within the remote Gitpod workspace. Backend plugins contribute functionality requiring access to IDE experiences such as the remote filesystem (e.g. contributing support of languages and frameworks).

When installed, **a backend plugin only applies to the currently running Gitpod workspace** and is not associated with a user. However, a plugin can be [preconfigured for all users of a repository](#preconfigure-for-repository) so that the plugin is enabled with every workspace start.

It is not currently possible to install a backend plugin that applies to all workspaces of a Gitpod user or team.

#### Install for your current workspace

You can install a plugin only for **your current workspace** following these steps:

- In **JetBrains Client** open the IDE settings and select **Plugins On Host**.
- Find the plugin in the **Marketplace** and click **Install**.

<figure>
<img class="shadow-medium w-full rounded-xl max-w-3xl mt-x-small" alt="Install a plugin on {title} backend" src="/images/editors/install-remote-jb-plugin.png">
    <figcaption>Install a plugin on {title} backend</figcaption>
</figure>

#### Preconfigure for repository

> JetBrains plugin support is currently in [Beta](/docs/help/public-roadmap/release-cycle) · [Send feedback](https://github.com/gitpod-io/gitpod/issues/6576).

You can share a plugin on **{title} backend** with everybody working on the repository by adding it to [.gitpod.yml](/docs/references/gitpod-yml) and pushing to your Git repository.
Each workspace is preconfigured with plugins from the `gitpod.yml` configuration file. For example:

```yaml
jetbrains:
  goland:
    plugins:
      - zielu.gittoolbox
      - izhangzhihao.rainbow.brackets
```

You can find the **pluginId** on the [JetBrains Marketplace](https://plugins.jetbrains.com) page:

- Find a page of the required plugin.
- Select the **Versions** tab.
- Click any version to copy the **pluginId** (short name such as `org.rust.lang`) of the plugin you want to install.

#### Install for your user

It is not yet possible to install plugins on **{title} backend** for your user to share across all your Gitpod workspaces.

## Indexing using Prebuilds

> JetBrains Prebuilds is currently in [Alpha](/docs/help/public-roadmap/release-cycle) · [Send feedback](https://github.com/gitpod-io/gitpod/issues/6576).

When you open the project {title} starts indexing to load modules and
enable the core functionality like code completion and navigation.
Depending on the size of your project indexing speed can vary significantly.

You can speed up the indexing of a project by applying these [general recommendations](https://www.jetbrains.com/help/go/indexing.html).
Gitpod prebuilds allow you to improve it further by indexing before you start a new workspace.

To leverage it:

- configure prebuilds for your repository, refer to [Prebuilds](/docs/configure/projects/prebuilds);
- enable indexing for {title} in prebuilds by editing [.gitpod.yml](/docs/references/gitpod-yml) in your repository:

```yaml
jetbrains:
  goland:
    prebuilds:
      version: stable
```

- push changes to your Git repository to apply.

The `version` property allows you to control whether to index for `stable`, `latest`, or `both` versions of {title} compatible with Gitpod.
Users can switch between `stable` and `latest` versions of {title} on the [user preferences](https://gitpod.io/preferences) page.

## Configure JVM options

> Configuration of JVM options is currently in [Alpha](/docs/help/public-roadmap/release-cycle) · [Send feedback](https://github.com/gitpod-io/gitpod/issues/8704).

You can adjust JVM options for {title} backend, especially if you want to increase the `-Xmx` memory size. For example:

```yaml
jetbrains:
  goland:
    vmoptions: "-Xmx4g"
```

For more detailed information on JVM options, refer to [Common JVM Options](https://www.jetbrains.com/help/go/tuning-the-ide.html#common-jvm-options) from JetBrains documentation.

## Workspace performance

When using a Gitpod workspace you might experience performance issues caused by:

- An application using more resources than expected
- Resource consumption in adjacent containers running on the workspace node.

In your JetBrains IDE within the JetBrains Gateway [Backend Control Center](https://www.jetbrains.com/help/idea/work-inside-remote-project.html#control_center) you can find two metrics relating to your running workspace: `Workspace CPU` and `Workspace Memory`.

The remaining metrics you can find in the Backend Control Center regarding the node that your workspace is running on, and not the workspace itself.

> **Note:** Performance information shown in the Backend Control Center is the same as the information that is shown when running the command [`gp top`](/docs/references/gitpod-cli#top) in your workspace, see the [Command Line Interface](/docs/references/gitpod-cli) documentation for more.

![jetbrains performance](/images/jetbrains-gateway/jetbrains-performance-center.png)

## FAQs

- For the questions about supported IDEs and Editors in Gitpod, refer to [FAQs](/docs/references/ides-and-editors/faqs).

- For the general questions about JetBrains Remote Development, refer to refer to the general IDE <a href="https://www.jetbrains.com/help/go/faq-about-remote-development.html" target="_blank">{title} FAQ</a>.

### Are there any JetBrains optimizations I can make if my workspace is slow?

Debugging performance can be challenging, as performance issues can depend on many factors such as how Gitpod is configured (if you're operating Gitpod on Self-Hosted). However, there are some ways you can gather performance information and optimise your JetBrains IDE setup with Gitpod:

1. Firstly, to gather information on performance, you can [view workspace performance metrics from within the IDE](/docs/references/ides-and-editors/intellij#workspace-performance) in the Backend Control Center, or by using [`gp top`](/docs/references/gitpod-cli#top).
2. You may also want to try adjusting the Max Heap Size allocated to the JetBrains Backend in the Settings tab of the Backend Control Center. If updating this setting helps your performance, you can set the `vmoptions` value for your JetBrains IDE in your `.gitpod.yml`.

> **Note:** If the performance metrics show that your workspace is hitting its resource limits, and you are using Gitpod Self-Hosted, it might make sense to consider changing the resource configuration for your workspaces. This can be done via a [config-patch](/docs/configure/self-hosted/latest/config-patches). Configuring workspace resources is not yet available on SaaS.

## Troubleshooting

- [What should I do if JetBrains Gateway and Gitpod aren’t working?](/docs/help/troubleshooting#what-should-i-do-if-jetbrains-gateway-and-gitpod-arent-working)
- [Gitpod logs in JetBrains Client](/docs/help/troubleshooting#gitpod-logs-in-jetbrains-client)
- [Gitpod logs in JetBrains Gateway](/docs/help/troubleshooting#gitpod-logs-in-jetbrains-gateway)
