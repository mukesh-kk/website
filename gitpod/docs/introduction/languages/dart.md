---
section: languages
title: Dart in Gitpod
---

<script context="module">
  export const prerender = true;
</script>

# Dart in Gitpod

## Example Repositories

Here are a few Dart example projects that are already automated with Gitpod:

<div class="overflow-x-auto">

| Repository                                                                | Description                                                 | Try it                                                                                                                             |
| ------------------------------------------------------------------------- | ----------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| [Flutter Hello World Demo](https://github.com/gitpod-io/template-flutter) | The Flutter hello world demo template configured for Gitpod | [![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/gitpod-io/template-flutter) |

</div>

## Installing Dart

To install the Dart SDK in Gitpod one must add the following to your [.gitpod.Dockerfile](/docs/configure/workspaces/workspace-image)

```dockerfile
RUN brew tap dart-lang/dart && brew install dart
```

## VSCode Extensions

### Dart

This Extension adds cool syntax highlighting

![Syntax highlighting example](../../../static/images/docs/AfterSyntaxHighlighting.png)

It adds [IntelliSense](https://code.visualstudio.com/docs/editor/intellisense) support for autocompletion

![Dart IntelliSense example](../../../static/images/docs/DartIntellisenseExample.png)

## Try it

Here is a hello world example of a [Gitpodified](/guides/gitpodify) project running in the browser, try it!

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/gitpod-io/Gitpod-Dart)
