---
section: gitpod-yml
title: .gitpod.yml
---

<script context="module">
  export const prerender = true;
</script>

# .gitpod.yml

The `.gitpod.yml` file at the root of your project is where you tell Gitpod how to prepare & build your project, start development servers and configure continuous [prebuilds](/docs/configure/projects/prebuilds) for GitHub.

Below is a full reference of all available properties. To see the underlying schema, please refer to [`gitpod-io/gitpod`](https://github.com/gitpod-io/gitpod/blob/main/components/gitpod-protocol/data/gitpod-schema.json) in the [gitpod-io/gitpod](https://github.com/gitpod-io/gitpod) repository.

- [.gitpod.yml](#.gitpod.yml)
  - [`additionalRepositories`](#additionalrepositories)
  - [`checkoutLocation`](#checkoutlocation)
  - [`coreDump`](#coreDump)
  - [`gitConfig`](#gitconfig)
  - [`github`](#github)
    - [`prebuilds.addBadge`](#prebuildsaddbadge)
    - [`prebuilds.addCheck`](#prebuildsaddcheck)
    - [`prebuilds.addComment`](#prebuildsaddcomment)
    - [`prebuilds.addLabel`](#prebuildsaddlabel)
    - [`prebuilds.branches`](#prebuildsbranches)
    - [`prebuilds.master`](#prebuildsmaster)
    - [`prebuilds.pullRequests`](#prebuildspullrequests)
    - [`prebuilds.pullRequestsFromForks`](#prebuildspullrequestsfromforks)
  - [`image`](#image)
    - [`image.file`](#imagefile)
    - [`image.context`](#imagecontext)
  - [`jetbrains`](#jetbrains)
    - [`jetbrains.plugins`](#jetbrainsplugins)
    - [`jetbrains.[product]`](#jetbrainsproduct)
    - [`jetbrains.[product].plugins`](#jetbrainsproductplugins)
    - [`jetbrains.[product].prebuilds`](#jetbrainsproductprebuilds)
    - [`jetbrains.[product].vmoptions`](#jetbrainsproductvmoptions)
  - [`ports`](#ports)
    - [`ports[n].name`](#portsnname)
    - [`ports[n].description`](#portsndescription)
    - [`ports[n].onOpen`](#portsnonopen)
    - [`ports[n].port`](#portsnport)
    - [`ports[n].visibility`](#portsnvisibility)
  - [`tasks`](#tasks)
    - [`tasks[n].before`](#tasksnbefore)
    - [`tasks[n].command`](#tasksncommand)
    - [`tasks[n].env`](#tasksnenv)
    - [`tasks[n].init`](#tasksninit)
    - [`tasks[n].name`](#tasksnname)
    - [`tasks[n].openIn`](#tasksnopenin)
    - [`tasks[n].openMode`](#tasksnopenmode)
    - [`tasks[n].prebuild`](#tasksnprebuild)
    - [`mainConfiguration`](#mainconfiguration)
  - [`vscode`](#vscode)
    - [`vscode.extensions`](#vscodeextensions)
  - [`workspaceLocation`](#workspacelocation)

## `additionalRepositories`

> additionalRepositories is currently in [Beta](/docs/help/public-roadmap/release-cycle). [Send feedback](https://github.com/gitpod-io/gitpod/issues/8623).

Defines additional source control repositories to clone and where the repository is cloned under `/workspaces`

<div class="overflow-x-auto">

| Type     | Default   |
| -------- | --------- |
| `object` | `<empty>` |

</div>

**Demo**

<a href="https://gitpod.io/#https://github.com/gitpod-io/demo-multi-repo-frontend"><img src="https://gitpod-staging.com/button/open-in-gitpod.svg"/></a>

**Example**

```yaml
additionalRepositories:
  - url: https://github.com/gitpod-io/demo-multi-repo-backend
    # checkoutLocation is optional and relative to /workspaces.
    # by default the location defaults to the repository name.
    checkoutLocation: backend
```

When the above configuration is defined then the following additional steps happen when Gitpod workspace is started:

1. If you open a workspace on a branch, Gitpod will clone the same-named branch in all repositories. If such a branch doesn’t exist Gitpod checks out the default branch.
1. The contents of the branch is cloned under `/workspaces/`
1. The contents of `https://github.com/gitpod-io/demo-multi-repo-backend` is cloned to `/workspaces/backend`

After all of the source control repositories have been cloned then the `before`, `init` and `command` [tasks](https://www.gitpod.io/docs/configure/workspaces/tasks) are executed as per normal.

If you need to run commands (such as package installation or compilation) on the source control repositories which have been cloned then change your working directory to the use configured or default `checkoutLocation` location using the `before` task.

**Example**

```yaml
# example .gitpod.yml from https://github.com/gitpod-io/demo-multi-repo-frontend
additionalRepositories:
  - url: https://github.com/gitpod-io/demo-multi-repo-backend
    # checkoutLocation is optional and relative to /workspaces.
    # by default the location defaults to the repository name.
    checkoutLocation: backend

tasks:
  - name: backend
    # change working directory as per configured in `checkoutLocation`
    # which is configured above as `/workspaces/backend`
    before: |
      cd ../backend
    init: |
      echo npm install
    command: |
      echo npm run dev

    # changing of working directory is not required as these tasks will
    # by default by executed in `/workspaces/demo-multi-repo-frontend`
  - name: frontend
    init: |
      echo npm install
      echo npm run build
    command: |
      echo npm run dev
```

## `checkoutLocation`

Define where Gitpod checks out the project's code, relative to `/workspace`.

In most cases, this is not needed. If you work on an older Go project, please see the [Go Language Page](/docs/introduction/languages/go) for more details.

<div class="overflow-x-auto">

| Type     | Default      |
| -------- | ------------ |
| `string` | `/workspace` |

</div>

**Example**

```yaml
checkoutLocation: "go/src/github.com/demo-apps/go-gin-app"
```

## `coreDump`

Define workspace core dump behavior.

For most cases, setting the `coreDump` property is not required. However, it can be a valuable feature to debug C++, or when debugging add-ons in Rust, Python, or node.js.

<div class="overflow-x-auto">

| Type     | Default   |
| -------- | --------- |
| `object` | `<empty>` |

</div>

**Example**

```yaml
coreDump:
  enabled: true
```

You can also set custom size values for the generated core files using the `softLimit` and `hardLimit` values (see example below). The setting `softLimit` configures the upper limit on the size of the core dump file that will be produced if a process receives a core dump signal, while `hardLimit` allows setting a hard limit to act as a ceiling for the soft limit.

```yaml
coreDump:
  enabled: true
  softLimit: <bytes>
  hardLimit: <bytes>
```

For more details, please see the [Linux man page for `getrlimit`](https://man7.org/linux/man-pages/man2/getrlimit.2.html)

## `gitConfig`

Define a workspace's git configuration as key-value pairs.

Please refer to https://git-scm.com/docs/git-config#_values for a list of accepted values.

<div class="overflow-x-auto">

| Type     | Default   |
| -------- | --------- |
| `object` | `<empty>` |

</div>

**Example**

```yaml
gitConfig:
  alias.st: status
  core.autocrlf: input
```

## `github`

Configure the [GitHub Gitpod](https://github.com/apps/gitpod-io) app. At this time, the following configuration is used to configure [continuous prebuilds](/docs/configure/projects/prebuilds) for GitHub repositories.

<div class="overflow-x-auto">

| Type     | Default   |
| -------- | --------- |
| `object` | `<empty>` |

</div>

**Example**

```yaml
github:
  prebuilds:
    master: true
    branches: true
    pullRequests: true
    pullRequestsFromForks: true
    addCheck: false
    addComment: false
    addBadge: true
```

### `prebuilds.addBadge`

Gitpod can modify the description of a pull request to add an “Open in Gitpod” button. This approach produces fewer GitHub notifications than [adding a comment](#prebuildsaddcomment), but can also create a concurrent editing conflict when the bot and a user try to edit the description of a pull request at the same time.

![An Open in Gitpod badge in a PR description](../../../static/images/docs/beta/references/gitpod-yml/references-gitpod-yml-github-badge.png)

<div class="overflow-x-auto">

| Type      | Default |
| --------- | ------- |
| `boolean` | `false` |

</div>

### `prebuilds.addCheck`

Configure whether Gitpod registers itself as a status check to pull requests - much like a continuous integration system would do. By default a failing prebuild would not make the check fail. Set `prevent-merge-on-error` to block PR merging when prebuilds failed.

To learn more about status checks, please see the GitHub documentation [about status checks](https://docs.github.com/en/github/collaborating-with-pull-requests/collaborating-on-repositories-with-code-quality-features/about-status-checks).

![Gitpod status check in a pull request](../../../static/images/docs/beta/references/gitpod-yml/references-gitpod-yml-github-check.png)

<div class="overflow-x-auto">

| Type     | Default                  | Values                                    |
| -------- | ------------------------ | ----------------------------------------- |
| `string` | `prevent-merge-on-error` | `true`, `false`, `prevent-merge-on-error` |

</div>

### `prebuilds.addComment`

Gitpod can add a comment with an “Open in Gitpod” button to your pull requests. Alternatively, you could [add a badge](#prebuildsaddbadge) to the pull request's description.

![An Open in Gitpod badge in a PR comment](../../../static/images/docs/beta/references/gitpod-yml/references-gitpod-yml-github-comment.png)

<div class="overflow-x-auto">

| Type      | Default |
| --------- | ------- |
| `boolean` | `false` |

</div>

### `prebuilds.addLabel`

Deprecated.

### `prebuilds.branches`

Define whether Gitpod creates prebuilds for all branches.

<div class="overflow-x-auto">

| Type      | Default |
| --------- | ------- |
| `boolean` | `false` |

</div>

### `prebuilds.master`

Define whether Gitpod creates prebuilds for the default branch.

<div class="overflow-x-auto">

| Type      | Default |
| --------- | ------- |
| `boolean` | `true`  |

</div>

### `prebuilds.pullRequests`

Define whether Gitpod creates prebuilds for pull requests from the original repository.

<div class="overflow-x-auto">

| Type      | Default |
| --------- | ------- |
| `boolean` | `true`  |

</div>

### `prebuilds.pullRequestsFromForks`

Define whether Gitpod creates prebuilds for pull requests from forks.

<div class="overflow-x-auto">

| Type      | Default |
| --------- | ------- |
| `boolean` | `false` |

</div>

## `image`

Define a custom Docker image to be used for workspaces. To learn more, please review [Custom Docker Image](/docs/configure/workspaces/workspace-image).

Public images are hosted on [Docker Hub](https://hub.docker.com/u/gitpod/) and can be referenced by their name, e.g. `ubuntu:latest`.

To see a list of Gitpod-provided images, please see [gitpod-io/workspace-images](https://github.com/gitpod-io/workspace-images).

<div class="overflow-x-auto">

| Type                 | Default                 |
| -------------------- | ----------------------- |
| `object` or `string` | `gitpod/workspace-full` |

</div>

**Examples**

_With a public image_

```yaml
image: ubuntu:latest
```

_With a custom image_

```yaml
image:
  file: .gitpod.Dockerfile
```

_With an optional context_

```yaml
image:
  file: .gitpod.Dockerfile
  context: ./docker-content
```

### `image.file`

To define a custom Docker image, you can use the following configuration:

For a list of examples, please see https://github.com/gitpod-io/workspace-images.

<div class="overflow-x-auto">

| Type     | Default   |
| -------- | --------- |
| `string` | `<empty>` |

</div>

### `image.context`

Optionally, you can set the `image.context`. This is useful when you want to copy files into the Docker image. The [Docker docs](https://docs.docker.com/engine/reference/builder/#usage) describe this in more detail.

<div class="overflow-x-auto">

| Type     | Default   |
| -------- | --------- |
| `string` | `<empty>` |

</div>

## `jetbrains`

> JetBrains is currently in [Beta](/docs/help/public-roadmap/release-cycle) · [Send feedback](https://github.com/gitpod-io/gitpod/issues/6576).

Define the integration between Gitpod and JetBrains IDEs.

<div class="overflow-x-auto">

| Type     | Default   |
| -------- | --------- |
| `object` | `<empty>` |

</div>

### `jetbrains.plugins`

> JetBrains plugin support (via gitpod.yml) is currently in [Beta](/docs/help/public-roadmap/release-cycle) · [Send feedback](https://github.com/gitpod-io/gitpod/issues/6576).

Define a list of plugins which should be installed for all compatible JetBrains IDEs when starting a workspace. To find the plugin identifier, from the [JetBrains Marketplace](https://plugins.jetbrains.com), find the desired plugin, open the 'Versions' tab, select any version and copy the 'Plugin ID' (like `${publisher}.${name}`).

<div class="overflow-x-auto">

| Type    | Default   |
| ------- | --------- |
| `array` | `<empty>` |

</div>

### `jetbrains.[product]`

> JetBrains is currently in [Beta](/docs/help/public-roadmap/release-cycle) · [Send feedback](https://github.com/gitpod-io/gitpod/issues/6576).

Define the integration between Gitpod and a specific JetBrains IDE. Install plugins and configure prebuilds to speed up the IDE indexing.

Specify the 'product' with one of the following values:

- `intellij`
- `goland`
- `pycharm`
- `phpstorm`

<div class="overflow-x-auto">

| Type     | Default   |
| -------- | --------- |
| `object` | `<empty>` |

</div>

### `jetbrains.[product].plugins`

> JetBrains plugin support (via gitpod.yml) is currently in [Beta](/docs/help/public-roadmap/release-cycle) · [Send feedback](https://github.com/gitpod-io/gitpod/issues/6576).

Define a list of plugins which should be installed for the given JetBrains IDE when starting a workspace. To find the plugin identifier, from the [JetBrains Marketplace](https://plugins.jetbrains.com), find the desired plugin, open the 'Versions' tab, select any version and copy the 'Plugin ID' (like `${publisher}.${name}`).

<div class="overflow-x-auto">

| Type    | Default   |
| ------- | --------- |
| `array` | `<empty>` |

</div>

**Example**

```yaml
jetbrains:
  intellij:
    plugins:
      - zielu.gittoolbox
      - izhangzhihao.rainbow.brackets
```

### `jetbrains.[product].prebuilds`

> JetBrains prebuilds support (via gitpod.yml) is currently in [Alpha](/docs/help/public-roadmap/release-cycle) · [Send feedback](https://github.com/gitpod-io/gitpod/issues/6576).

Define whether Gitpod enables prebuilds for a specific JetBrains IDE.

<div class="overflow-x-auto">

| Type     | Default   |
| -------- | --------- |
| `object` | `<empty>` |

</div>

**Example**

```yaml
jetbrains:
  intellij:
    prebuilds:
      version: stable
```

The `version` is defined as follows:

<div class="overflow-x-auto">

| Type     | Default  | Values                     |
| -------- | -------- | -------------------------- |
| `string` | `stable` | `stable`, `latest`, `both` |

</div>

### `jetbrains.[product].vmoptions`

> Configuration of JVM options (via gitpod.yml) is currently in [Alpha](/docs/help/public-roadmap/release-cycle) · [Send feedback](https://github.com/gitpod-io/gitpod/issues/8704).

Configure JVM options for a specific JetBrains IDE.

<div class="overflow-x-auto">

| Type     | Default   |
| -------- | --------- |
| `string` | `<empty>` |

</div>

**Example**

```yaml
jetbrains:
  intellij:
    vmoptions: "-Xmx4g"
```

## `ports`

Configure how Gitpod treats various ports your application may listen on. You can learn more about this in the [Exposing Ports](/docs/configure/workspaces/ports) documentation.

<div class="overflow-x-auto">

| Type    | Default   |
| ------- | --------- |
| `array` | `<empty>` |

</div>

**Example**

```yaml
ports:
  - name: Website
    port: 3000
    onOpen: open-preview
  - name: VNC
    description: full GUI Virtual Desktop
    port: 6080
    onOpen: open-browser
  - name: Server
    port: 10000
    onOpen: ignore
```

### `ports[n].name`

Define a name for the port, will be shown as a column in the output of `gp ports list` and as a title of port in the `Remote Explorer` under the VS Code Browser sidebar. [More detail](/docs/configure/workspaces/ports#specifying-port-names--descriptions)

<div class="overflow-x-auto">

| Type     | Default   |
| -------- | --------- |
| `string` | `<empty>` |

</div>

### `ports[n].description`

Adds a description to the port, will be shown as a column in the output of `gp ports list` and as a tooltip (on hover) of the port in the `Remote Explorer` in VS Code Browser sidebar.

<div class="overflow-x-auto">

| Type     | Default   |
| -------- | --------- |
| `string` | `<empty>` |

</div>

### `ports[n].onOpen`

Define what to do when Gitpod detects a given port is being listened on.

<div class="overflow-x-auto">

| Type     | Default   | Values                                                                  |
| -------- | --------- | ----------------------------------------------------------------------- |
| `string` | `<empty>` | `open-browser`,<br><br>`open-preview`,<br><br>`notify`,<br><br>`ignore` |

</div>

**Please note:** For JetBrains IDEs connected to Gitpod via [JetBrains Gateway](/docs/integrations/jetbrains-gateway) `open-preview` will behave exactly the same as `open-browser`, as there is no functionality for a web preview in the JetBrains IDE.

### `ports[n].port`

Define a single port or a range of ports, e.g. `3000-3100`.

<div class="overflow-x-auto">

| Type                 | Default   |
| -------------------- | --------- |
| `number` or `string` | `<empty>` |

</div>

### `ports[n].visibility`

Define whether to expose the port publicly or keep it private.

A public port allows you to share a URL for a given port with team members, for example if you want to get their feedback on a new feature you develop.

<div class="overflow-x-auto">

| Type     | Default   | Values                     |
| -------- | --------- | -------------------------- |
| `string` | `private` | `private`,<br><br>`public` |

</div>

## `tasks`

Define how Gitpod prepares & builds your project and how it can start the project's development server(s). To learn more, please visit [Start Tasks](/docs/configure/workspaces/tasks). Each array element opens in its own terminal.

<div class="overflow-x-auto">

| Type    | Default   |
| ------- | --------- |
| `array` | `<empty>` |

</div>

**Example**

```yaml
tasks:
  - before: sh ./scripts/setup.sh
    init: npm install
    command: npm run dev
  - name: Database
    init: sh ./scripts/seed-database.sh
    command: npm start-db
    env:
      DB_HOST: localhost:3306
      DB_USER: readOnlyUser
```

### `tasks[n].before`

A shell command to run before `init` and the main `command`. This command is executed on every start and is expected to terminate. If it fails, the following commands will not be executed.

Learn more about [Start Tasks](/docs/configure/workspaces/tasks) in the docs.

<div class="overflow-x-auto">

| Type     | Default   |
| -------- | --------- |
| `string` | `<empty>` |

</div>

### `tasks[n].command`

The main shell command to run after `before` and `init`. This command is executed last on every start and doesn't have to terminate.

Learn more about [Start Tasks](/docs/configure/workspaces/tasks) in the docs.

<div class="overflow-x-auto">

| Type     | Default   |
| -------- | --------- |
| `string` | `<empty>` |

</div>

### `tasks[n].env`

Define environment variables that will be available in the workspace.

Learn more about [Environment Variables](/docs/configure/projects/environment-variables) in the docs.

<div class="overflow-x-auto">

| Type     | Default   |
| -------- | --------- |
| `object` | `<empty>` |

</div>

### `tasks[n].init`

A shell command to run between `before` and the main `command`.

This task is executed only once. When you start a workspace that does not have a [prebuild](/docs/configure/projects/prebuilds), `init` is executed at workspace start. When you start a workspace that has a prebuild, `init` executes as part of the prebuild, but does NOT execute again at workspace start.

This task is expected to terminate. If it fails, the `command` property will not be executed.

Learn more about [Start Tasks](/docs/configure/workspaces/tasks) in the docs.

<div class="overflow-x-auto">

| Type     | Default   |
| -------- | --------- |
| `string` | `<empty>` |

</div>

### `tasks[n].name`

A name for the task, also shown on the terminal tab.

<div class="overflow-x-auto">

| Type     | Default   |
| -------- | --------- |
| `string` | `<empty>` |

</div>

### `tasks[n].openIn`

Deprecated. This does not have an impact in VS Code.

### `tasks[n].openMode`

Configure how the terminal should be opened relative to the previous task.

<div class="overflow-x-auto">

| Type     | Default   | Values                                                                      |
| -------- | --------- | --------------------------------------------------------------------------- |
| `string` | `<empty>` | `tab-after`,<br><br>`tab-before`,<br><br>`split-right`,<br><br>`split-left` |

</div>

Note: `split-top` and `split-bottom` are deprecated values.

### `tasks[n].prebuild`

Deprecated. Please use the [`init`](#tasksninit) task instead.

### `mainConfiguration`

> mainConfiguration is currently in [Beta](/docs/help/public-roadmap/release-cycle). [Send feedback](https://github.com/gitpod-io/gitpod/issues/8623).

Defines the repository with the main `.gitpod.yml` file and makes it possible to open the same workspace from any issue, branch or other context URL from any repository defined in a multi repository configuration.

<div class="overflow-x-auto">

| Type     | Default   |
| -------- | --------- |
| `string` | `<empty>` |

</div>

**Demo**

<a href="https://gitpod.io/#https://github.com/gitpod-io/demo-multi-repo-backend"><img src="https://gitpod-staging.com/button/open-in-gitpod.svg"/></a>

**Example**

```yaml
mainConfiguration: https://github.com/gitpod-io/demo-multi-repo-frontend
```

## `vscode`

Configure the VS Code editor.

<div class="overflow-x-auto">

| Type     | Default   |
| -------- | --------- |
| `object` | `<empty>` |

</div>

### `vscode.extensions`

Define a list of extensions which should be installed for users of this workspace. The identifier of an extension is always `${publisher}.${name}`. For example: 'vscodevim.vim'.

Please note, Gitpod uses the [Open VSX registry](https://open-vsx.org/) to find extensions. If you cannot find an extension you know exists in your local VS Code, please get in touch with us or open a new PR in the [open-vsx/publish-extensions](https://github.com/open-vsx/publish-extensions) repository to add the extension to Open VSX 🙏.

<div class="overflow-x-auto">

| Type     | Default   |
| -------- | --------- |
| `object` | `<empty>` |

</div>

By default, extensions will use the latest available version unless you use a specific version number. The version number must use semantic versioning rules. If you are interested in importing an extension that is not published on the Open VSX registry you can directly use the full URL.

**Example**

```yaml
vscode:
  extensions:
    - svelte.svelte-vscode
    - bradlc.vscode-tailwindcss@0.6.11
    - https://example.com/abc/releases/extension-0.26.0.vsix
```

## `workspaceLocation`

Define which path Gitpod considers the project's workspace directory, relative to `/workspace`.

In most cases, this is not needed. If you work on an older Go project, please see the [Go Languages](/docs/introduction/languages/go) page for more details.

<div class="overflow-x-auto">

| Type     | Default      |
| -------- | ------------ |
| `string` | `/workspace` |

</div>

**Example**

```yaml
workspaceLocation: "."
```
