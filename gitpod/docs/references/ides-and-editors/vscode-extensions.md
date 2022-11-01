---
section: ides-and-editors
title: VS Code extensions
---

<script context="module">
  export const prerender = true;
</script>

# VS Code extensions

Gitpod already comes well equipped for most development tasks, and provides language support for the most popular programming languages such as Python, JavaScript, Go, Rust, C/C++, Java, Ruby, and many more out of the box.

Still, you may wish to customize Gitpod, or to extend it with new features. You can do this by installing VS Code extensions.

`youtube: TwXYbZKEuoA`

## Installing an Extension

To install a VS Code extension in Gitpod, simply go to the left vertical menu, and open the Extensions view. There you can search for an extension and install it with one click.

For [VS Code Browser](vscode-browser), we use the [Open VSX](#open-vsx) registry. If you can't find an extension you use in your local VS Code, please read the "[Where do I find extensions?](#where-do-i-find-extensions)" section below.

If the extension is helpful to anyone who works on the project, you can add it to the `.gitpod.yml` configuration file so that it gets installed for anyone who works on the project. To do that:

1. Visit the extension page (where you installed it from)
2. Click the settings icon
3. Select "Add to .gitpod.yml" from the menu

Your project's `.gitpod.yml` is updated automatically and lists the given extension. You can also directly edit this file to install or remove extensions manually.

Here is an example of what a `.gitpod.yml` with installed extensions may look like:

```yaml
vscode:
  extensions:
    - svelte.svelte-vscode
    - bradlc.vscode-tailwindcss@0.6.11
    - https://example.com/abc/releases/extension-0.26.0.vsix
```

You can share the installed extensions with your team by committing the `.gitpod.yml` change and pushing it to your Git repository.

Extensions are installed in the `/workspace/.vscode-remote/extensions/` directory.

## User Extensions

You have two options to install extensions for yourself only:

1. For the current workspace only - if you don't want extensions to be synced across workspaces, select `Install (Do Not Sync)` instead of `Install` when installing new extensions.
2. For all your workspaces - can be useful for extensions that you want to have in all your projects (for example a custom theme), and this doesn't require changing every project's `.gitpod.yml` configuration. **All manually installed extensions are synced across workspaces by default**.

You can read more about why and how extensions are synced on the [Settings Sync](settings-sync) page.

## Built-in Extensions

Gitpod already comes with a number of commonly used VS Code extensions pre-installed by default.

You can view all pre-installed extensions by navigating to VS Code's Extensions section on the left-hand side. In the "Search Extensions in Marketplace" input field, type `@builtin` to see the built-in extensions.

## Use of Microsoft-owned extensions in Gitpod

You can only use extensions available on the [Open VSX](#open-vsx) registry with [VS Code Browser](vscode-browser) on Gitpod. Microsoft only permits use of their marketplace via "Microsoft’s publicly supported interfaces" (see their [ToS](https://cdn.vsassets.io/v/M190_20210811.1/_content/Microsoft-Visual-Studio-Marketplace-Terms-of-Use.pdf) section `1f`), and this restriction applies to the Gitpod VS Code Browser integration. If you wish to use extensions from Microsoft's VS Code Marketplace, you must use [VS Code Desktop](vscode). 

The following extensions are therefore not available in VS Code Browser:

- [Microsoft Pylance](https://marketplace.visualstudio.com/items?itemName=ms-python.vscode-pylance)
- [Microsoft C#](https://marketplace.visualstudio.com/items?itemName=ms-dotnettools.csharp)
- [Microsoft .Net](https://marketplace.visualstudio.com/items?itemName=ms-dotnettools.vscode-dotnet-runtime)
- [Microsoft C++](https://marketplace.visualstudio.com/items?itemName=ms-vscode.cpptools)
- [GitHub Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot)

## Install VS Code extensions from a VSIX file

It is possible to develop, install and test your own custom VS Code extensions in Gitpod. While developing the extension, you can test it by uploading the `.vsix` file to your Gitpod workspace. 

**Please note:** 

* You can install any private extensions using manual VSIX installation. 
* Installing a `.vsix` in Gitpod does not list that extension anywhere public.
* Any `.vsix` referenced in the `.gitpod.yml` must be publicly accessible.

## Open VSX

Open VSX is an open source VS Code extensions registry. For VS Code Browser in Gitpod, we use the public Open VSX instance provided by the [Eclipse Foundation](https://www.eclipse.org/), [open-vsx.org](https://open-vsx.org/).

### Why do we need Open VSX?

VS Code Browser is prohibited from accessing the Microsoft VS Code Extensions marketplace. 

See [Use of Microsoft owned extensions in Gitpod](#use-of-microsoft-owned-extensions-in-gitpod) for more. 

### Where do I find extensions?

If you cannot find an extension by searching in Gitpod using [VS Code Browser](vscode-browser), the extension, in many cases, was not yet added to the [Open VSX](https://open-vsx.org/) registry.

In that case, please reach out to the extension author and politely ask them to publish their extension to the vendor-neutral, open-source Open VSX registry. The ["how to Publish an Extension"](https://github.com/eclipse/openvsx/wiki/Publishing-Extensions) docs provide step-by-step instructions.

> **Note**: `.vsix` files downloaded from the [Visual Studio Marketplace](https://marketplace.visualstudio.com/vscode) should not be installed in Gitpod.

See [Use of Microsoft owned extensions in Gitpod](#use-of-microsoft-owned-extensions-in-gitpod) for more.
