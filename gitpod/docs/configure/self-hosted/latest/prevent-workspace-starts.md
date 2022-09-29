---
section: self-hosted/latest
subsection: troubleshooting
title: Prevent Workspace Starts
---

<script context="module">
  export const prerender = true;
</script>

# Prevent Workspace Starts

It may be necessary for you to prevent users from starting Gitpod workspaces (in a `<namespace>`). Please see the [update guide](./updating) for more information.

> It is required to prevent workspace starts when updating Gitpod and using the [Single Cluster Reference Architecture](../latest/reference-architecture/single-cluster-ref-arch) because it is not highly-available.

This can be done with `kubectl`, after which, users won't be able to start workspaces until the `ws-manager` pod is running again.

> **Caution:** You must [stop running workspaces](./stop-workspaces) and wait for them to terminate before proceeding. Failure to do so can result in user data loss, because the workspaces will not be able to reliably back-up.

To scale-down the `ws-manager` component and prevent workspace starts:

```shell
kubectl scale --replicas=0 deployment/ws-manager -n <namespace>
```

After which, users will receive an error when trying to start workspaces. Once Gitpod is redeployed, this change will be reset automatically and workspaces will be allowed to start again.
