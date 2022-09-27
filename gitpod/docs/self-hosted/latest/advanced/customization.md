---
section: self-hosted/latest
title: Applying custom annotations, labels and environment variables
---

<script context="module">
  export const prerender = true;
</script>

# Applying custom annotations, labels and environment variables

In this guide, we expect you to have a cluster up and running that [meets the requirements](../requirements) and has the [required components](../requirements) installed and configured (at least cert-manager is needed).

This guide assumes that you are using our default installation method from our [installation guide](../installing-gitpod).

## Rationale

There are times when it is necessary to add custom annotations, environment variables and labels to your installation in order to add it to your environment. For example, one may need to support specific monitoring and observability software or want to target a specific load balancer type.

## Configuration

Before you start, you will need to create a YAML file that is subsequently used to describe your customizations. The structure is based upon the standard Kubernetes resource definition.

Once created, this file can be uploaded to the Installation Admin UI during installation under the advanced features section (bottom).

![kots-advanced-customization](../../static/images/docs/self-hosted/kots-advanced-customization.png)

### Annotations and labels

For these to be applied to a resource, these must match the `apiVersion`, `kind` and `metadata.name` properties of the target resource. These accept any value that is valid as per the Kubernetes specifications and also an `*` as a wildcard.

Any properties in `metadata.annotations` and `metadata.labels` are then applied to the matching resource(s). These are key/value maps, where both key and value are strings.

**IMPORTANT** You cannot directly customize the properties on a `Pod`. Instead, these will inherit the annotation/label customization from its parent (`Deployment`, `DaemonSet`, `StatefulSet`, `Job` etc).

### Environment variables

For environment variables, these must match `metadata.name`. `apiVersion` and `kind` are ignored as these are only implemented on resources with containers.

Any properties in `spec.env` are then applied. These should have a `name` and `value` as per the Kubernetes specification.

## Example Configuration

```yaml
customization:
  - apiVersion: "*"
    kind: "*"
    metadata:
      name: "*"
      annotations:
        appliedToAll: value
        hello: world
      labels:
        appliedToAll: value
        hello: world
  - apiVersion: "apps/v1"
    kind: "Deployment"
    metadata:
      name: "ws-manager"
      annotations:
        hello: ws-manager
      labels:
        hello: ws-manager
    spec:
      env:
        - name: HELLO
          value: world
```

This example would generate the following spec (these are simplified for readability reasons):

```yaml
---
# apps/v1/DaemonSet ws-daemon
apiVersion: apps/v1
kind: DaemonSet
metadata:
  labels:
    app: gitpod # system-value
    component: ws-daemon # system-value
    appliedToAll: value
    hello: world
  annotations:
    appliedToAll: value
    hello: world
  name: ws-daemon
---
# apps/v1/Deployment ws-manager
apiVersion: apps/v1
kind: Deployment
metadata:
  labels:
    app: gitpod
    component: ws-manager
    appliedToAll: value
    hello: ws-manager
  annotations:
    appliedToAll: value
    hello: ws-manager
  name: ws-manager
spec:
  template:
    # The custom annotations/labels are inherited from the Deployment spec
    metadata:
      annotations:
        appliedToAll: value
        gitpod.io/checksum_config: xxxx
        hello: ws-manager
      labels:
        app: gitpod
        component: ws-manager
        appliedToAll: value
        hello: ws-manager
      name: ws-manager
    spec:
      containers:
        - env:
            - name: HELLO
              value: world
```

In the event of multiple matches, the final matching customization is applied. Therefore, it is a good idea to structure your customization from least to most specific.

> **Important:** System-generated values will never be overridden.

## AWS Proxy Service Example

This is an example configuration for working with [AWS Load Balancer Controllers](https://kubernetes-sigs.github.io/aws-load-balancer-controller/v2.4/) of the [Network Load Balancer](https://kubernetes-sigs.github.io/aws-load-balancer-controller/v2.4/guide/service/nlb/) variety, when deployed in [AWS EKS](https://aws.amazon.com/eks/). This example creates a load balancer with a public IP, references two subnets: `[subnet-012e8ff1de0654321,subnet-0a6d28629bc123456]`, tunes timeouts, and ensures the tags `project:gitpod-docs` and `team:cs` are applied to the AWS resources it creates.

```yaml
---
customization:
  - apiVersion: "*"
    kind: "Service"
    metadata:
      name: "proxy"
      annotations:
        service.beta.kubernetes.io/aws-load-balancer-scheme: "internet-facing"
        service.beta.kubernetes.io/aws-load-balancer-nlb-target-type: "instance"
        service.beta.kubernetes.io/aws-load-balancer-subnets: "subnet-012e8ff1de0654321,subnet-0a6d28629bc123456"
        alb.ingress.kubernetes.io/load-balancer-attributes: "idle_timeout.timeout_seconds=3600"
        service.beta.kubernetes.io/aws-load-balancer-additional-resource-tags: "project=gitpod-docs,team=cs"
```

## Limitations

> This limitation has been removed as of [`2022.08.0`](https://github.com/gitpod-io/gitpod/releases/tag/2022.08.0).

Labels are immutable on some Kubernetes resources, such as `Deployments`, `DaemonSets` and `StatefulSets`.

If you wish to change a label on one of these resources, you must destroy that resource first. This can be achieved by running `kubectl delete <resource> --namespace <namespace> <name>` prior to running the KOTS deployment.

In the event of there being multiple resources that need to be amended, you can run `helm uninstall --namespace <namespace> gitpod`. If you are using an in-cluster database or object storage, you should not run this command without taking a backup of your persistent volumes first.

> **WARNING:** If deleting Kubernetes resources, your Gitpod instance is likely to become inaccessible and unstable. This should not be attempted while it is being used for normal development as data loss is likely.
