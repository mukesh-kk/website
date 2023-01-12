---
author: corneliusludmann
date: Mon Aug 30 2021 08:08:08 GMT+0000 (UTC)
excerpt: GitLab now has a Gitpod button on MR pages
image: gitlab-header.png
slug: gitlab-mr-gitpod-integration
subtitle: Launch Gitpod workspace from GitLab MR pages with one click
title: New Gitpod Button has landed on GitLab Merge Request Pages
---

<script context="module">
  export const prerender = true;
</script>

Reviewing merge requests is part of a developer's everday life. The quality of code reviews is a crucial aspect of the development process. In reality, it often leads to just skiming the code changes and approving the merge request with a simple “LGTM”. One reason is that doing code reviews requires a context switch for the reviewer. For a careful review one needs to checkout the branch of the merge request, navigate through the code changes, build and test the changed software, … and hope that there will be no configuration drift or other inferences with the existing local development setup.

This is a situation where ephemeral development environments show their full strength. With Gitpod, you get a fresh development environment just for your review. It has everything set-up for reviewing the changes and will be closed once the job is done. For a head-to-head comparison between local and cloud based workflows for MRs I recommend reading [Mike's blog post](/blog/i-said-goodbye-to-local-development-and-so-can-you#switch-context).

## Launch a preconfigured Gitpod workspace from a GitLab merge request

Starting a Gitpod development environment is easy: Just add `gitpod.io/#` in front of a GitLab, GitHub, or Bitbucket URL in your browser's address bar and hit Enter. That's it.

![Gitpod loves GitLab](../../../static/images/blog/gitlab-mr-gitpod-integration/gitpod-loves-gitlab.png)

With the native Gitpod integration in GitLab, it's even easier! Next to the Web IDE button you'll find a Gitpod button in a drop-down menu that [has been introduced in GitLab 13.5](/blog/gitlab-integration). With the [GitLab 14.2 release](https://about.gitlab.com/releases/2021/08/22/gitlab-14-2-released/) you'll find this button on all merge request pages. Just hit the button and a cloud development environment waits for your review.

![Gitpod button on GitLab merge request](../../../static/images/blog/gitlab-mr-gitpod-integration/create-gitpod-in-mr-view.png)

The [GitLab docs](https://docs.gitlab.com/ee/integration/gitpod.html) provide you with further information on how to enable the Gitpod integration in your self-managed GitLab instance and how to use the Gitpod integration.

## Contribution to GitLab awarded with “Golden Fork”

Every release, GitLab selects a community contributor as a [most valuable person](https://about.gitlab.com/community/mvp/) (MVP) of the release which is recognized with the prestigious golden fork. In the 14.2 release Cornelius from Gitpod [has been awarded](https://about.gitlab.com/releases/2021/08/22/gitlab-14-2-released/#mvp) for the contribution of the Gitpod integration in GitLab.

![GitLab MVP of release 14.2](../../../static/images/blog/gitlab-mr-gitpod-integration/gitlab-mvp.png)

## Further reading

- [GitLab 14.2 release blog post](https://about.gitlab.com/releases/2021/08/22/gitlab-14-2-released/)
- [Blog post “Native GitLab Integration”](/blog/gitlab-integration)
- [GitLab docs about the Gitpod integration](https://docs.gitlab.com/ee/integration/gitpod.html)
