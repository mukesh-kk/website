---
section: self-hosted/latest
subsection: operational-guides
title: Configuring workspace resources and limits
---

<script context="module">
  export const prerender = true;
</script>

# Configuring workspace resources

Configuring workspace resources and limits is essential to balancing the following factors:

- **Workspace performance:** The amount of compute available to each workspace
- **Workspace startup times:** Having smaller workspaces on a node increases the chances of there being space available for another workspace, meaning that a new node does not need to be spun up. On the other extreme: one workspace per node means a new node needs to be spun up for every new workspace
- **Your cost of compute:** The fewer resources your workspaces request, the more you can fit on the node - and the fewer nodes you have to pay for

## How to configure workspace requests and limits

> You should always be setting limits for your workspaces in order to avoid a process taking up the resources of an entire node, starving all other processes. We recommend sizing workspaces onto a node such that `4 cores` and `8 GiB of RAM` are left unused for Gitpod's services (mainly `ws-daemon`) and other processes (e.g. the kubelet).

Currently, workspace resources and limits can be set via a [config-patch](./config-patches).

For example, assuming a machine with 16 CPUs and 64 GB of memory, we recommend the following config-patch:

```yaml
workspace:
  resources:
    requests:
      cpu: "4"
      memory: 16Gi
    limits:
      cpu: "4"
      memory: 16Gi
```

With this configuration, 3 workspaces should fit onto the aforementioned 16 CPU / 64 GB memory node (with CPU cores being the limiting factor). A workspace would always have 4 CPUs and 16 GB of RAM available. These numbers are also used when scheduling workspaces onto pods - workspaces are only scheduled onto nodes that have at least these amounts of resources available.

> This is intentionally on the conservative side due to potential resource conflicts concerning I/O bandwidth.
