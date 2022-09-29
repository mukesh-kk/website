---
section: user-settings
title: Browser Extension
---

<script context="module">
  export const prerender = true;
</script>

# Browser Extension

Creating a workspace is as easy as prefixing any GitHub URL with `gitpod.io/#`.

For convenience, we developed a Gitpod browser extension. It adds a button to GitHub, GitLab or Bitbucket that does the
prefixing for you - as simple as that.

![Browser Extension](../../../static/images/docs/browser-extension-lense.png)

We provide the extension for:

- [Chrome](https://chrome.google.com/webstore/detail/gitpod-online-ide/dodmmooeoklaejobgleioelladacbeki) - also works for Edge, Brave and other Chromium-based browsers.
- [Firefox](https://addons.mozilla.org/firefox/addon/gitpod/)

## Use with Gitpod Self-Hosted

If you are using Gitpod Self-Hosted you can still use the browser extension by configuring it with your self-hosted URL.

After you have installed the extension go to the options panel and enter your Gitpod Self-Hosted URL.

<img class="shadow-medium w-full rounded-xl max-w-3xl mt-x-small" alt="Gitpod browser extension configuration" src="/images/docs/beta/integrations/browser-extension-options.png">

### Accessing the options on Chrome

A user can view an extension's options by right-clicking the extension icon in the toolbar then selecting options or by navigating to the extension management page at chrome://extensions, locating the desired extension, clicking Details, then selection the options link.

### Accessing the options on Firefox

An Options page enables you to define preferences for your extension that your users can change. Users can access the options page for an extension from the browser's add-ons manager.

## Source Code

Gitpod's browser extension is open source. You can check out its [source code](https://github.com/gitpod-io/browser-extension), or even open it in Gitpod:

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/gitpod-io/browser-extension)
