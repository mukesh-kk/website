---
section: projects
title: Incremental Prebuilds
---

<script context="module">
  export const prerender = true;
</script>

# Incremental Prebuilds

Similar to [last successful prebuild](/docs/configure/projects/last-successful-prebuild), incremental prebuilds leverage older prebuilds in order to create new prebuilds faster.

![Enable Incremental Prebuilds](../../../static/images/docs/projects/enable-incremental-prebuilds.webp)

An incremental prebuild is based on an older prebuild that was built for an older commit, in order to reuse pre-existing build artifacts. This is achieved by:

1. Loading the older prebuild
2. Updating the source code to the latest commit
3. Running any `before`, `prebuild`, and `init` tasks again (incremental rebuild)<br>_Note: This means that your init tasks will be run twice on the same checkout, i.e. they need to be reentrant_

## How is a base prebuild selected?

When incremental prebuilds are enabled for a project, and a new prebuild is being triggered, Gitpod will do the following:

1. Retrieve the commit history of the current commit to be built (up to 100 ancestor commits)
2. For each ancestor commit, check if there exists a corresponding prebuild that can be used as a "base":
   - A suitable "base prebuild" must have been successful (i.e. failed, canceled, or timed out prebuilds are not reused)
   - It must be a recent, direct ancestor of the current commit (i.e. not a commit from a different unrelated branch)
   - It must be based on the same project configuration as the current commit (for example, if the Docker image or the `init` tasks have recently been changed, older prebuilds are no longer relevant or useful and cannot be used as a "base")
3. If a suitable base prebuild is found, Gitpod will load it; update the checkout to the latest commit; and then re-run any `before`, `prebuild` and `init` task on top of it
   - If no suitable base prebuild is found, Gitpod will build the new prebuild from scratch (i.e. a non-incremental prebuild)

## When are incremental prebuilds useful?

Incremental prebuilds can significantly speed up most of your prebuilds, especially if:

```
(time_to_load_older_prebuild + incremental_rebuild_duration) < full_prebuild_duration
```

Typically, enabling incremental prebuilds makes sense if:

- Your project's build system benefits from incremental rebuilds (i.e. rebuilds are significantly faster than your initial build)
- Your regular prebuilds take longer than 5 minutes (the longer they take, the bigger the potential speedup is)
