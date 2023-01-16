---
section: self-hosted/latest
subsection: reference
title: Self-Hosted Gitpod Releases and Versioning
---

<script context="module">
  export const prerender = true;
</script>

# Self-Hosted Gitpod Releases and Versioning

> ⚠️ **Self-hosted as a product is no longer supported**
>
> The last official update of this product is the [November 2022 self-hosted release](https://www.gitpod.io/changelog/november-self-hosted-release). We no longer sell commercial self-hosted licenses. If you want to self-host Gitpod, you can still request our [free community license](https://www.gitpod.io/community-license). However, we no longer offer support or updates for it. If you are interested in an isolated, private installation of Gitpod, take a look at [Gitpod Dedicated](/dedicated).
> Read [our blog on Gitpod Dedicated](/blog/introducing-gitpod-dedicated) to learn why we made the decision to discontinue self-hosted.

### Release Policy

Gitpod Self-Hosted is released once a month, usually at the end of each month. The versioning schema is: `YYYY.MM.V`. Each new version of self-hosted Gitpod includes all of the changes made to Gitpod up to the release date. This means that the self-hosted version of Gitpod is at most one month behind the SaaS version. Outside of the regular monthly releases, hot-fix releases are possible to add functionality or fix bugs. Hot fix releases increment the `V` in the aforementioned versioning schema.

### Support Policy

Gitpod is committed to supporting the last 2 versions of self-hosted Gitpod with patches and security updates.

### Roll out Policy

New versions are first rolled out to all users that are on the `community` license, i.e. are on the stable branch. Customers with a paid license receive the newest version one week later.

### Testing Policy

<!-- ToDo: link to reference architecture once this is shipped -->

For each release, we validate that core Gitpod workflows function as expected via a series of automated and manual tests. These tests are performed on different Gitpod installations running on our [reference architectures](../latest/reference-architecture). This should help ensure that Gitpod works for you, assuming your architecture is close to the reference architecture.
