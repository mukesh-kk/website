---
section: ides-and-editors
title: IDEs & Editors
---

<script context="module">
  export const prerender = true;
</script>

<script lang="ts">
    import OpenGraph from "$lib/components/open-graph.svelte";
</script>

<OpenGraph
data={{
    description:
      "Connect and integrate Gitpod workspaces with your favourite IDE or editor. VS Code Browser and Desktop. JetBrains. IntelliJ. GoLand. PhpStorm. PyCharm. Vim. Emacs. SSH.",
    title: "Gitpod integrates with VS Code, JetBrains and SSH.",
    keywords: "online IDEs, JetBrains, VS Code, IntelliJ, PHPStorm, PyCharm, Rider, RubyMine, WebStorm, CLion etc.",
  }}
/>

# IDEs & Editors

In line with [our ambition to "remove all friction from the developer experience"](https://www.notion.so/gitpod/Values-Attributes-2ed4c2f93c84499b98e3b5389980992e), Gitpod currently supports many popular IDE/editors e.g. JetBrains and VS Code through both the browser and on desktop. You can even use the command-line directly for editors like Vim (via SSH). There are many ways to configure your IDE/editor in Gitpod to match your preferred workflow or setup.

## Connecting an IDE/editor to Gitpod

The three main ways to edit code or access a Gitpod workspace:

1. **Browser** - Using [VS Code Browser](/docs/references/ides-and-editors/vscode-browser).
2. **SSH** - Using an [SSH key](/docs/references/ides-and-editors/command-line#ssh-key-access) or an [Access Token](/docs/references/ides-and-editors/command-line#access-token-ssh).
3. **Desktop** - Using [VS Code Desktop](ides-and-editors/vscode) or [JetBrains Gateway](/docs/integrations/jetbrains-gateway).

### Supported IDE/editors

- [VS Code Browser](ides-and-editors/vscode-browser)
- [VS Code Desktop](ides-and-editors/vscode)
- [IntelliJ](ides-and-editors/intellij)
- [GoLand](ides-and-editors/goland)
- [PhpStorm](ides-and-editors/phpstorm)
- [PyCharm](ides-and-editors/pycharm)
- [RubyMine](ides-and-editors/rubymine)
- [WebStorm](ides-and-editors/webstorm)
- [Rider](ides-and-editors/rider)
- [CLion](ides-and-editors/clion)
- [Command Line (e.g. Vim)](ides-and-editors/command-line)

### Open Workspace with IDE/editor

You can open a workspace with an IDE/editor by adding the `ide` query parameter to the URL. For example, to open a workspace with IDE (latest/stable), Workspace Class.

For example, to open a workspace with VS Code Browser _(latest)_ & Large workspace, you can use the following URL:

```
https://gitpod.io/?showOptions=true&useLatest=true&editor=code&workspaceClass=g1-large#https://github.com/gitpod-io/website
```

Entities in the URL are separated by `#` and the query parameters are separated by `&`. The following table lists the supported query parameters:

|    Parameter     |         Description         |                                                    Example                                                    |
| :--------------: | :-------------------------: | :-----------------------------------------------------------------------------------------------------------: |
|  `showOptions`   |  Show the UI options menu.  |                                                `true`, `false`                                                |
|     `editor`     |   The IDE/editor to use.    | `code`, `code-desktop`, `intellij`, `goland`, `phpstorm`, `pycharm`, `rubymine`, `webstorm`, `rider`, `clion` |
| `workspaceClass` | The workspace class to use. |                                           `g1-standard`, `g1-large`                                           |
|   `useLatest`    |   Use the latest version.   |                                                `true`, `false`                                                |

After passing the optional parameters, you can add the URL of the repository after `#` that you want to open in Gitpod.
