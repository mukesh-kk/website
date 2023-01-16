---
section: projects
title: Last Successful Prebuild
---

<script context="module">
  export const prerender = true;
</script>

# Last Successful Prebuild

> {title} is currently in [Alpha](/docs/help/public-roadmap/release-cycle) · [Send feedback](https://github.com/gitpod-io/gitpod/issues/15310).

Similar to [incremental prebuilds](/docs/configure/projects/incremental-prebuilds), last successful prebuild leverages older prebuilds in order to create new workspaces faster.

![Use Last Successful Prebuild](../../../static/images/docs/projects/use-last-successful-prebuild.webp)

When enabled, new workspaces may start based on a prebuild that was built for an older commit, in order to reuse any existing build artifacts. This is achieved by:

1. Loading the older prebuild
2. Updating the source code to the latest commit
3. Running any `before`, `prebuild`, and `init` tasks again interactively (incremental rebuild)<br>_Note: This means that your init tasks will be run twice on the same checkout, i.e. they need to be reentrant_

Thus, your new workspace will both:

- _load quickly_: no waiting, even if a newer prebuild is still being computed (i.e. you'll never see the "Prebuild in Progress" screen again ⏩)
- and it will be _ready quickly_: your IDE Terminal will run either no build at all (if none is needed), or just a quick incremental rebuild (faster than a full build ♻️)

## Skip Prebuilds

When Gitpod can leverage older prebuilds to start your workspaces faster, you no longer necessarily need to create a new prebuild for every commit that is pushed to your repository.

This is where the ability to skip prebuilds becomes helpful: For example, you could decide to only trigger a new prebuild every 5 commits, or every 10 commits.

The ideal number depends on your project. For example:

- If you push new commits to your repository very frequently, you may want a higher number (especially if your prebuilds also take a long time to build)
- On the other hand, if your prebuilds finish quickly, and you typically don't push new commits very often, it may be fine to not skip any prebuild (i.e. `skip prebuilds = 0`)

Please feel free to adjust and experiment with this value.
