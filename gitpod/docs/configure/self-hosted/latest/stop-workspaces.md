---
section: self-hosted/latest
subsection: troubleshooting
title: Stop Workspaces
---

<script context="module">
  export const prerender = true;
</script>

# Stop Workspaces

> ⚠️ **Self-hosted as a product is no longer supported**
>
> The last official update of this product is the [November 2022 self-hosted release](https://www.gitpod.io/changelog/november-self-hosted-release). We no longer sell commercial self-hosted licenses. If you want to self-host Gitpod, you can still request our [free community license](https://www.gitpod.io/community-license). However, we no longer offer support or updates for it. If you are interested in an isolated, private installation of Gitpod, take a look at [Gitpod Dedicated](/dedicated).
> Read [our blog on Gitpod Dedicated](/blog/introducing-gitpod-dedicated) to learn why we made the decision to discontinue self-hosted.

Sometimes it becomes necessary to stop Gitpod workspaces (in a `<namespace>`). Usually this needs to be done when updating Gitpod. Please see the [update guide](./updating) for more information.

This can be done with `kubectl`, and when done so, the IDE is closed, data in `/workspace` is backed up, and then the pod finally terminates.

## A Single Workspace

```shell
$ kubectl delete pods <workspace-or-headless-pod-name> -n <namespace>
```

## All Workspaces

> **Caution**: This will delete all actively running workspaces.

Can be done prior to outage windows, or for troubleshooting.

```shell
$ kubectl delete pods -l component=workspace -n <namespace>
```
