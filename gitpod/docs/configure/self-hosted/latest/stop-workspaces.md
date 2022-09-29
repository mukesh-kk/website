---
section: self-hosted/latest
subsection: troubleshooting
title: Stop Workspaces
---

<script context="module">
  export const prerender = true;
</script>

# Stop Workspaces

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
