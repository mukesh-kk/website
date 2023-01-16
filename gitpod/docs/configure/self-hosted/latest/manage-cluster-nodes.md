---
section: self-hosted/latest
subsection: troubleshooting
title: Manage Cluster Nodes
---

<script context="module">
  export const prerender = true;
</script>

# Manage Cluster Nodes

> ⚠️ **Self-hosted as a product is no longer supported**
>
> The last official update of this product is the [November 2022 self-hosted release](https://www.gitpod.io/changelog/november-self-hosted-release). We no longer sell commercial self-hosted licenses. If you want to self-host Gitpod, you can still request our [free community license](https://www.gitpod.io/community-license). However, we no longer offer support or updates for it. If you are interested in an isolated, private installation of Gitpod, take a look at [Gitpod Dedicated](/dedicated).
> Read [our blog on Gitpod Dedicated](/blog/introducing-gitpod-dedicated) to learn why we made the decision to discontinue self-hosted.

Sometimes nodes become unhealthy, or you need to prevent the autoscaler from removing the node from your cluster.

## Avoiding Node Scale-down

If you wish to cordon a node with terminating workspaces, or, keep a node so you have time to manually backup user data:

```shell
# reference: https://github.com/kubernetes/autoscaler/blob/master/cluster-autoscaler/FAQ.md#how-can-i-prevent-cluster-autoscaler-from-scaling-down-a-particular-node
$ kubectl annotate node <nodename> cluster-autoscaler.kubernetes.io/scale-down-disabled=true
```

## Handling Unhealthy Nodes

Prevent new workspaces from being scheduled to a node if they become unhealthy:

```shell
$ kubectl cordon <nodename>
```
