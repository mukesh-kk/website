---
title: VS Code Desktop support
excerpt: It’s here 🎉! Starting today, you can access Gitpod workspaces right from your locally installed VS Code - we call it “VS Code Desktop Support”.
date: 2021-09-15
image: 2021-09-15.jpg
alt: VS Code open in a Gitpod workspace with the option to open in local VS Code displayed
---

<script>
  import Contributors from "$lib/components/changelog/contributors.svelte";
</script>

It’s here 🎉! Starting today, you can access Gitpod workspaces right from your locally installed VS Code - we call it “VS Code Desktop Support”. Yep, that's right - keep your local settings<sup>1</sup> **and** benefit from Gitpod's high-spec servers & automated prebuilds. As you would expect, your code continues to stay in an ephemeral Gitpod workspace which keeps each of your projects nicely isolated from one another.

To get started, all it takes is two steps:

1. Start a new Gitpod workspace ([learn how](/docs/introduction/getting-started) in the docs).
1. Open the command palette (⇧⌘P or Ctrl+Shift+P), type "Open in VS Code" and hit Enter.

This opens your local VS Code, connects to the Gitpod workspace and let's you develop, test & debug your application as if it was running locally.

We continue to enhance this feature, but for now we'd love to hear about your experience. Please let us know in the [feedback issue](https://github.com/gitpod-io/gitpod/issues/5712), contact us via Twitter [@gitpod](https://twitter.com/gitpod) or chat with us at https://www.gitpod.io/chat.

If you are already familiar with the Local Companion app we announced in June, note that VS Code Desktop Support is built on top of it and you can continue to use the Local Companion app independently of VS Code.

<br />
<sup>1</sup> may I add, yes this also means you get to keep your keyboard shortcuts just the way you prefer them. You know, Ctrl/Cmd + W to close an editor tab 😉.

### Fixes and improvements

- [#5511](https://github.com/gitpod-io/gitpod/pull/5511) - **Breaking Change**: Remove Theia settings and point to Code image
- [#5633](https://github.com/gitpod-io/gitpod/pull/5633) - Update code to 1.60.0
- [#4997](https://github.com/gitpod-io/gitpod/pull/4997) - OpenVSX proxy cache
- [#5568](https://github.com/gitpod-io/gitpod/pull/5568) - GitLab users who have not completed the auth process on GitLab will be notified with an error message
- [#5362](https://github.com/gitpod-io/gitpod/pull/5362) - [gitlab] Accept '#' sign in branches / context URLs
- [#5180](https://github.com/gitpod-io/gitpod/pull/5180) - [docker-up] Update docker-compose and slirp4netns
- [#5513](https://github.com/gitpod-io/gitpod/pull/5513) - [code] Add open dashboard menu option to home menu
- [#5456](https://github.com/gitpod-io/gitpod/pull/5456) - vscode desktop on windows

<p><Contributors usernames="aledbf,akosyakov,corneliusludmann,jeanp413,laushinka" /></p>
