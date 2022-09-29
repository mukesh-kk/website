---
section: self-hosted/helm-deprecated
title: Troubleshooting Gitpod Self-Hosted
---

<script context="module">
  export const prerender = true;
</script>

# Troubleshooting Gitpod Self-Hosted

> ⚠️ **Deprecated Content**
>
> The content of this page assumes you are using Helm, which is now deprecated. Please use the [Installer](../latest) instead.

This section should solve all errors that might come up during installation of Gitpod.

## 1. `ws-daemon` is stuck in `Init: 0/1`

`kubectl describe pod ws-daemon-...` gives:
`MountVolume.SetUp failed for volume "node-fs1" : hostPath type check failed: /run/containerd/io.containerd.runtime.v1.linux/k8s.io is not a directory`

### Solution

1.  `ssh` onto the node, `mount | grep rootfs` and find the directory where your containers are stored. Common paths are:

    - `/run/containerd/io.containerd.runtime.v1.linux/k8s.io`
    - `/run/containerd/io.containerd.runtime.v1.linux/moby`
    - `/run/containerd/io.containerd.runtime.v2.task/k8s.io`

2.  _Merge_ the following into your `values.custom.yaml`:

    ```
    components:
      wsDaemon:
        containerRuntime:
          nodeRoots:
          - <your path here>
    ```

3.  Do an `helm upgrade --install -f values.custom.yaml gitpod gitpod.io/gitpod --version=0.10.0` to apply the changes.

> Example: For `k3s` a common configuration looks like this:

```yaml
components:
  wsDaemon:
    containerRuntime:
      containerd:
        socket: /var/run/k3s/containerd/containerd.sock
      nodeRoots:
        - /var/run/k3s/containerd/io.containerd.runtime.v2.task/k8s.io
```

## 2. `helm install` fails with: "minio access key is required, please add a value to your values.yaml"

Since `0.7.0` minio requires custom credentials to be configured.

### Solution

1.  Follow the [Upgrade Guide](./updating).

## 3. After upgrade, the `minio` Pod is stuck in `ContainerCreating`

This is caused by a bug in the minio Helm chart which blocks itself on updates.

### Solution

1.  `kubectl scale deployments/minio --replicas=0`

1.  `kubectl scale deployments/minio --replicas=1`

1.  Wait until the pod comes up.

## 3. `agent-smith` daemonset fails in deployment

In the v0.10.0 release `agent-smith` is [incorrectly enabled](https://github.com/gitpod-io/gitpod/issues/4885#issuecomment-884205801) in Gitpod Self-Hosted.

### Solution

Add the following to your `values.yaml` file to disable agent-smith:

```yaml
components:
  agentSmith:
    disabled: true
```

## 4. Workspaces stopping once container image downloaded

This may be caused by your host operating system not supporting shiftfs. Check the `ws-daemon` logs for an error message like `"error","message":"cannot mount shiftfs mark"` to confirm.

Further proof can be found by checking if the shiftfs kernel module is present on your host operating system:

```shell
find /lib/modules/ -name '*shiftfs*'
```

If this returns nothing, shiftfs is not supported by your instance and you will need to use fuse instead.

### Solution

Add the following to your `values.yaml` file to use fuse-overlayfs:

```yaml
components:
  wsDaemon:
    userNamespaces:
      fsShift: fuse
```

## 5. Create workspace results in `7 PERMISSION_DENIED: cannot resolve workspace image` error

<!-- svelte-ignore a11y-img-redundant-alt -->

![Request createWorkspace failed with message: 7 PERMISSION_DENIED: cannot resolve workspace image: not authorized Unknown Error](../../../static/images/docs/self-hosted/troubleshooting/registry-unauthorized.jpeg)

If you are using the internal Docker registry, you will need to specify the username and password so your Gitpod instance can access it.

### Solution

Add the following to your `values.yaml` file to authorize the Docker registry:

```yaml
components:
  docker-registry:
    authentication:
      username: gitpod
      password: gitpod
```

> Replace these with your own values.
