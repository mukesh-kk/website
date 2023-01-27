---
section: user-settings
title: Browser Extension
---

<script context="module">
  export const prerender = true;
  import Keybind from "$lib/components/keybind.svelte";
</script>

# Browser Extension

Creating a workspace is as easy as prefixing any GitHub URL with `gitpod.io/#`.

For convenience, we developed a Gitpod browser extension. It adds a button to GitHub, GitLab or Bitbucket that does the
prefixing for you - as simple as that.

![Browser Extension](../../../static/images/docs/browser-extension-lense.png)

We provide the extension for:

- [Chrome](https://chrome.google.com/webstore/detail/gitpod-online-ide/dodmmooeoklaejobgleioelladacbeki) - also works for Edge, Brave and other Chromium-based browsers.
- [Firefox](https://addons.mozilla.org/firefox/addon/gitpod/)

## Access the extension settings

1. Right-click on the Gitpod extension icon.
2. Select `Options` for chrome based browsers. For Firefox, select `Manage Extension` and then `Preferences`.

<img class="shadow-medium w-full rounded-xl max-w-3xl mt-x-small" alt="Gitpod browser extension configuration" src="/images/docs/beta/integrations/new-browser-extension-options.png">

## Use a custom Gitpod instance URL

If you are using custom Gitpod instance (e.g. [dedicated](https://www.gitpod.io/dedicated)) you can still use the browser extension by configuring it with your instance URL

After you have installed the extension go to the options panel and enter your custom Gitpod instance URL.

<img class="shadow-medium w-full rounded-xl max-w-3xl mt-x-small" alt="Gitpod browser extension configuration" src="/images/docs/beta/integrations/browser-extension-options.png">

## Open repositories with <Keybind>.</Keybind> (dot) keybind

Toggle on the `Enable . keybind to open repositories in Gitpod` option in the Gitpod extension [preferences/options](#accessing-the-extension-optionspreferences). After doing this, whenever you hit <Keybind>.</Keybind> on GitHub or GitLab, the current repository will open in Gitpod.

## Source Code

Gitpod's browser extension is open source. You can check out its [source code](https://github.com/gitpod-io/browser-extension), or even open it in Gitpod:

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/gitpod-io/browser-extension)
