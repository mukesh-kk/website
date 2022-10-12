---
title: Hello Dark mode
excerpt: We heard you and implemented a dashboard dark mode 🌑! Head over to https://gitpod.io/preferences to pick the light or dark theme. Alternatively, select "System" and let us pick the theme that matches your system settings.
date: 2021-04-30
image: 2021-04-30.png
alt: Redesigned Gitpod dashboard
---

<script>
  import Contributors from "$lib/components/changelog/contributors.svelte";
</script>

We heard you and implemented a dashboard dark mode ([PR #3901](https://github.com/gitpod-io/gitpod/pull/3901)) 🌑! Head over to https://gitpod.io/preferences to pick the light or dark theme. Alternatively, select "System" and let us pick the theme that matches your system settings.

If you have specific feedback related to dark mode, please let us know in our [feedback issue #3727](https://github.com/gitpod-io/gitpod/issues/4100) 🙏🏻.

### Fixes and improvements

- [#3940](https://github.com/gitpod-io/gitpod/pull/3940) - Add OAuth2 host check (credit: [Joern Schneeweisz](https://gitlab.com/joernchen) from the GitLab Security Research Team).
- [#4051](https://github.com/gitpod-io/gitpod/pull/4051) - Ask user for confirmation before deleting an environment variable.
- [#4069](https://github.com/gitpod-io/gitpod/pull/4069) - Fix loading Gitpod's dashboard in Safari less than v14.
- [#3830](https://github.com/gitpod-io/gitpod/pull/3830) - Optimize Gitpod's dashboard to make it lighter and load faster.
- [#4018](https://github.com/gitpod-io/gitpod/pull/4018) - Make the Docker daemon in workspaces auto-start when needed by introducing a socket activated 'sudo docker-up'.
- [#3945](https://github.com/gitpod-io/gitpod/pull/3945) - UX: Fix accidental workspace deletion when using the 'Enter' key.
- [#3938](https://github.com/gitpod-io/gitpod/pull/3938) - Also show environment variables with identical names but different scopes in the dashboard.
- [#3866](https://github.com/gitpod-io/gitpod/pull/3866) - Fix quantity type conversion in Team plans.

<p><Contributors usernames="jankeromnes,meysholdt,gtsiolis,svenefftinge,filiptronicek,akosyakov,aledbf,Divlo,AlexTugarev,csweichel,apolopena" /></p>
