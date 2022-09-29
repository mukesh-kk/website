---
section: self-hosted/latest
subsection: installation-guides
title: K3s Cluster for Gitpod Self-Hosted
---

<script context="module">
  export const prerender = true;
</script>

# How to Create a Cluster with K3s

In this guide, we show you how to set up a Kubernetes cluster with [K3s](https://k3s.io/) that is ready to install Gitpod. In this example we expect to have at least 2 nodes with Ubuntu 20.04 (a single node setup would work as well, see hint below):

- `node0`: main node where the Gitpod service pods will be deployed to
- `node1`: worker node where the Gitpod workspace pods will be deployed to
- optional: one or more additional worker nodes `node2` … `nodeN`

On each node, we [install K3s](https://rancher.com/docs/k3s/latest/en/installation/). We configure K3s by setting the following environment variables on the nodes.

K3s config for main node `node0`:

```shell
export INSTALL_K3S_EXEC="server --disable traefik --flannel-backend=none --node-label gitpod.io/workload_meta=true --node-label gitpod.io/workload_ide=true"
export K3S_CLUSTER_SECRET="<your random secret string that is the same on all nodes>"
```

K3s config for all other nodes:

```shell
export INSTALL_K3S_EXEC="agent --node-label gitpod.io/workload_workspace_services=true --node-label gitpod.io/workload_workspace_regular=true --node-label gitpod.io/workload_workspace_headless=true"
export K3S_CLUSTER_SECRET="<your random secret string that is the same on all nodes>"
export K3S_URL="https://node0:6443"
```

**Hint:** _In case you would like to set up a single node cluster (only the main node) add the `--node-label` arguments of the bottom "other" nodes config to the `INSTALL_K3S_EXEC` variable of the main node config._

After setting the environment variables, install K3s on every node like this:

```shell
$ curl -sfL https://get.k3s.io | sh -
```

Now, you have to install [Calico](https://www.tigera.io/project-calico/). Download the [Calico manifest](https://docs.projectcalico.org/manifests/calico-vxlan.yaml) and add the following line to the `plugins` section of the `cni_network_config`:

```json
"container_settings": { "allow_ip_forwarding": true }
```

The section in the `calico-vxlan.yaml` file should look like this:

```json
[...]
  cni_network_config: |-
    {
      "name": "k8s-pod-network",
      "cniVersion": "0.3.1",
      "plugins": [
        {
          "type": "calico",
          "log_level": "info",
          "log_file_path": "/var/log/calico/cni/cni.log",
          "datastore_type": "kubernetes",
          "nodename": "__KUBERNETES_NODE_NAME__",
          "mtu": __CNI_MTU__,
          "ipam": {
              "type": "calico-ipam"
          },
          "policy": {
              "type": "k8s"
          },
          "kubernetes": {
              "kubeconfig": "__KUBECONFIG_FILEPATH__"
          },
          "container_settings": { "allow_ip_forwarding": true }
        },
[...]
```

Copy that file to `node0` in the following folder (create folder if missing):

```
/var/lib/rancher/k3s/server/manifests/
```

That's it. Your K3s cluster is ready to install Gitpod. The next step is to install cert-manager. Just follow the instructions of the [installation guide](../installing-gitpod#prerequisites) to install !
