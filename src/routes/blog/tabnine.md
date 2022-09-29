---
author: JohannesLandgraf, mikenikles
date: Wednesday, 06 Oct 2021 13:00:00 UTC
excerpt: Tabnine integrates with Gitpod in browser-based VS Code.
image: gitpod-tabnine.png
slug: tabnine
subtitle:
teaserImage: gitpod-tabnine.png
title: Match made in automation heaven
---

<script context="module">
  export const prerender = true;
</script>

**TL;DR**

- [Tabnine](https://www.tabnine.com/) and Gitpod partner to remove friction from developers' workflows
- Tabnine built a first-class VS Code extension via the [OpenVSX](https://open-vsx.org/) marketplace running on browser-based VS Code

Everything we do at Gitpod centers around the premise of improving the [day-to-day developer experience](https://devxconf.org/manifesto) with automated, ephemeral developer environments. Developer experience is part of our [core company attributes](https://www.notion.so/gitpod/Values-Attributes-2ed4c2f93c84499b98e3b5389980992e) and our guiding product design principle.

> We are building Gitpod to reduce friction and help developers to automate and speed up their workflows so they can get into that magical state of flow that makes software engineering joyful.

## Integrate, don't dictate 👐

That focus on putting developers’ interest first means to be transparent, open and flexible in product design and as a company. To offer choice, embrace our community & ecosystem and give every developer out there the option to work with the tools that fit their workflow. We integrate, don’t dictate - and are not alone in this.

## Tabnine and Gitpod

Tabnine allows you to code faster with a pluggable code completion assistant **that is trained on your specific development style & taste**. Their compliant and privacy-first approach to training data means that their models never share your code with others. With their simple plug-in model they support all popular languages, libraries and work on all IDEs.

We joined forces to use both of our products together in harmony bringing the best of AI code completion and ephemeral developer environments together. This means that a Gitpod workspace removes the friction from setting up and maintaining brittle dev environments, while adding Tabnine to your workspace makes you faster and more efficient when writing code.

In line with our orthogonal product design Tabnine’s pluggable code completion assist can be installed as part of a polished VS Code extension that is available for everybody and pre-installed on a repository level for our Tabnine example templates.

## Getting started

Try out Gitpod & Tabnine yourself by opening one of these different templates. It is as simple as pressing the open in Gitpod button:

- [JS/TypeScript](https://github.com/gitpod-io/template-typescript-node-tabnine)
- [Python](https://github.com/gitpod-io/template-python-flask-tabnine)
- [Go](https://github.com/gitpod-io/template-golang-cli-tabnine)

If you want to add [Tabnine](https://open-vsx.org/extension/TabNine/tabnine-vscode) to your own Gitpod project, go ahead and [install it in with a single click](/docs/references/ides-and-editors/vscode-extensions#installing-an-extension).
