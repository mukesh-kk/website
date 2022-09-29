---
author: svenefftinge, JohannesLandgraf
date: Fr, 13 Aug 2021 3:00:00 UTC
excerpt: By 2023 working with ephemeral cloud-based dev environments will be the standard, just like CI/CD is today.
image: teaser.jpg
slug: cloud-based-development-for-everyone
teaserImage: teaser.jpg
title: Cloud-based development for everyone
subtitle:
---

<script context="module">
  export const prerender = true;
</script>

**TL;DR**

- [Welcome to the party, GitHub Codespaces!](/blog/github-codespaces)
- Gitpod is now free for public **and private** repositories!

At Gitpod, [we believe](https://www.notion.so/gitpod/Gitpod-s-Direction-be35d064c0704fbda61c542b84e07ef6) that

> **By 2023 working with ephemeral cloud-based dev environments will be the standard. Just like CI/CD is today.**

This week, we got a step closer to our product vision becoming a reality. We welcome Microsoft and GitHub Codespaces to join forces in improving the developer experience status quo with ephemeral, cloud-based developer environments. The obligatory [cake](https://twitter.com/gitpod/status/1425494676237340672?s=20) is on its way to our friends at GitHub and VS Code! 🎂

## Software development moves to the cloud

Today's modern engineering teams use automation everywhere. They automate infrastructure, CI/CD build pipelines, linting, formatting and even writing code, and numerous other places where automation is used to help teams avoid costly errors and focus on product and customer value.

Developer environments, however, have not experienced this same adoption rate. They are brittle, an intimidating hurdle during onboarding and a constant source of friction during development.

The question is not if but when ephemeral, container-based dev environments are becoming the norm. Based on conversations with users there are a couple of recurring reasons accelerating this:

- **Multi-track development** (develop and review complicated features with ease)
- **Local machine limits** (larger workloads, more data, more dependencies, more testing)
- **Security** (no source code on laptops policies)
- **Consistency** (end of all “works on my machine” problems)
- **Onboarding** (shave off a few initial days of tedious workspace setups)
- **Remote work** (fully distributed or hybrid companies)

Google, Facebook and a few others have internally built solutions for these issues for a few years already. Gitpod and GitHub Codespaces bring container-based development in the cloud to the rest of the world.

### Ephemeral Developer Environments

Putting developer experience first means working in developer environments that are fast, secure and most importantly **ephemeral**. Just moving your manually created and maintained dev environment to the cloud wouldn’t quite cut it. To get rid of configuration drift and “works on my machine” issues, we need to continuously create fresh dev environments based on configuration as code. Only then you are [**always ready-to-code™**](/).

For your day-to-day workflow this means that your developer environments become:

- **Task-based** - for each Git context you start them, you code, you push your code, and you forget about them. For your next task, you’ll use a fresh one.
- **Prebuilt** - Gitpod continuously builds all your Git branches like a CI server. Whenever your code changes (i.e. when new commits are pushed to your repository), Gitpod will prebuild workspaces, i.e. run the init commands in your .gitpod.yml configuration file before you even start a workspace.
- **Shareable** - similar to preview environments in CI/CD dev environments ephemeral dev environments become easily shareable with your colleagues via a URL.

In the screencast below, [@paulienuh](https://twitter.com/paulienuh) explains how that workflow has supercharged our development velocity while developing Gitpod in Gitpod.

`youtube: n7Ca3jHFtZg`

The peace of mind, productivity boost and collaboration benefits you are experiencing once you adopt that task-based workflow make you never want to go back.

## Gitpod dev environments are available to everyone — today

Starting today our free tier is **open to every developer** with a GitLab, GitHub, and/or Bitbucket account. You will have access to both public and private repositories for 50 hours per month for free.

Go ahead and experience the peace of mind and productivity boost on your own.

Learn how to [use Gitpod](/docs/introduction/getting-started) in less than 5 minutes!
