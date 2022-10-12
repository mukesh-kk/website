---
title: JetBrains desktop available in beta
excerpt: You decide which IDE to use with Gitpod, we provide it to you.
date: 2021-12-09
image: 2021-12-09.jpg
alt: A screenshot of the Gitpod IDE preferences, showing VS Code, VS Code Insiders, IntelliJ, GoLand, PyCharm
---

<script>
  import Contributors from "$lib/components/changelog/contributors.svelte";
</script>

Gitpod currently has **IntelliJ**, **GoLand**, **PhpStorm** and **PyCharm** released in beta. The rest of the JetBrains IDE’s are all coming to Gitpod very soon, watch this space!

Previously, when you loaded a new Gitpod workspace, you would find yourself in a VS Code Browser experience. Using a browser editor like VS Code Browser is the main way Gitpod can get you “ready to code” instantly.

However, whilst we know that VS Code is the [most widely adopted editor on the market](https://insights.stackoverflow.com/survey/2021#section-most-popular-technologies-integrated-development-environment) (which is why we started with VS Code), Gitpod is not only built for VS Code users!

Gitpod is for teams, and companies of all shapes and sizes. We’re here to support, and integrate with as many of the different developer workflows used in modern software development. After all, it’s your dev environment, so you should be able to set it up your way.

**And that’s why today, we’re happy to share that JetBrains desktop is now in beta!**

You can get started using the JetBrains IDE’s today by: heading over to your [Gitpod preferences page](https://gitpod.io/preferences), enabling your favourite JetBrains desktop IDE’s, and restarting any running workspaces. The next time you start a workspace, you’ll be prompted about which editor to use: VS Code Browser, VS Code Desktop, or your preferred JetBrains IDE. However, even when you open a Gitpod workspace with a desktop editor, you still get the ease and developer experience of using VS Code Browser to edit and work on the same workspace and code at the same time, they’re entirely synced.

Work on your desktop if you like, share your workspace if you like, the choice is yours! To keep an eye on which editors we support at any given time, check the [editors docs](/docs/references/ides-and-editors).

We are interested in your feedback and suggestions, please let us know in our dedicated [feedback issue](https://github.com/gitpod-io/gitpod/issues/6576) or [chat with us](https://www.gitpod.io/chat).

<p><Contributors usernames="corneliusludmann,atduarte,akosyakov,loujaybee,filiptronicek" /></p>

### Fixes and improvements

- [#7004](https://github.com/gitpod-io/gitpod/pull/7004) - Add PyCharm desktop IDE.
- [#6847](https://github.com/gitpod-io/gitpod/pull/6847) - The “Your Workspace is Ready” page for desktop IDEs now has “Stop Workspace” and “Go to Dashboard” actions.
- [#6721](https://github.com/gitpod-io/gitpod/pull/6721) - When a user deletes their account, own projects will be deleted and made available to be added again.
- [#6671](https://github.com/gitpod-io/gitpod/pull/6671) - Add VS Code Desktop in the preferences to always open your workspace in VS Code Desktop
- [#6747](https://github.com/gitpod-io/gitpod/pull/6747) - [dashboard] Change default color theme from Light → System
- [#6713](https://github.com/gitpod-io/gitpod/pull/6713) - Allow all team members to cancel a team prebuild
- [#6505](https://github.com/gitpod-io/gitpod/pull/6505) - Open up JetBrains desktop IDE feature (BETA) for all users
- [#6546](https://github.com/gitpod-io/gitpod/pull/6546) - Prebuilds can run for GitLab subgroup projects.
- [#6464](https://github.com/gitpod-io/gitpod/pull/6464) - Switch to shallow git clone and add unshallow feature
- [#6144](https://github.com/gitpod-io/gitpod/pull/6144) - make "snapshots" more reliable

**Self-Hosted**

- [#6621](https://github.com/gitpod-io/gitpod/pull/6621) - Allow use of external container registry
- [#6606](https://github.com/gitpod-io/gitpod/pull/6606) - Add support for GCP CloudSQL
- [#6543](https://github.com/gitpod-io/gitpod/pull/6543) - Make the installer updatable

<p><Contributors usernames="corneliusludmann,csweichel,geropl,jankeromnes,laushinka,MrSimonEmms" /></p>
