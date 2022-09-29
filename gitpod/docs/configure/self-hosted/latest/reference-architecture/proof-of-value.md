---
section: self-hosted/latest
subsection: installation-guides
title: "Proof-of-Value Reference Architecture"
---

<script context="module">
  export const prerender = true;
</script>

<script lang="ts">
  import CloudPlatformToggle from "$lib/components/docs/cloud-platform-toggle.svelte";
  import Preparations from "./_chunks/preparations.md";
  import Networking from "./_chunks/networking.md";
  import BigPill from "$lib/components/big-pill.svelte";
</script>

# Proof-of-Value Reference Architecture

|               |                                                                                                                                                                                                                                                                                                                  |
| ------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Status:       | <BigPill text="alpha" variant="pink" class="ml-1.5" />                                                                                                                                                                                                                                                           |
| Intended for: | Trying out Gitpod in a representative way but with only the minimum of infrastructure required                                                                                                                                                                                                                   |
| Limitations:  | - Not intended for long-term, production usage <br/> - Higher risk of data loss due to in-cluster dependencies - if you lose your cluster, you may lose your data <br/> - Data is not carried over when moving to the [Single Cluster Reference Architecture](./single-cluster-ref-arch) for production purposes |

## Overview

This reference architecture provides you with a setup where all components that are needed to operate Gitpod are deployed within the Kubernetes cluster. In contrast to a production-oriented setup, this means that the required database, object storage, well as a registry are deployed for you within the cluster. All cluster services and workspaces are deployed on a single autoscaling node group.

> If you are looking for a scalable and reliable way to run Gitpod, please take a look at our [Single Cluster Reference Architecture](./single-cluster-ref-arch).

## Cloud Provider Preparations

<Preparations />

## Kubernetes Cluster

The heart of this reference architecture is a **Kubernetes cluster** where all components are deployed to. This cluster has a single node pool that needs to have all of the following labels:

- `gitpod.io/workload_meta=true`
- `gitpod.io/workload_ide=true`
- `gitpod.io/workload_workspace_services=true`
- `gitpod.io/workload_workspace_regular=true`
- `gitpod.io/workload_workspace_headless=true`

The following table gives an overview of the node types for the different cloud providers that are used by this reference architecture.

|                  | GCP               | AWS           |
| ---------------- | ----------------- | ------------- |
| Gitpod Node Pool | `n2d-standard-16` | `m6i.4xlarge` |

<CloudPlatformToggle id="cloud-platform-toggle-cluster">

<div slot="gcp">

First, we [create a **service account**](https://cloud.google.com/iam/docs/creating-managing-service-accounts) for the cluster. The service account needs to have the following roles:

| Roles                         |
| ----------------------------- |
| roles/logging.logWriter       |
| roles/monitoring.metricWriter |
| roles/container.admin         |

Run the following commands to create the service account:

```bash
GKE_SA=gitpod-gke
GKE_SA_EMAIL="${GKE_SA}"@"${PROJECT_NAME}".iam.gserviceaccount.com
gcloud iam service-accounts create "${GKE_SA}" --display-name "${GKE_SA}"
gcloud projects add-iam-policy-binding "${PROJECT_NAME}" --member serviceAccount:"${GKE_SA_EMAIL}" --role="roles/logging.logWriter"
gcloud projects add-iam-policy-binding "${PROJECT_NAME}" --member serviceAccount:"${GKE_SA_EMAIL}" --role="roles/monitoring.metricWriter"
gcloud projects add-iam-policy-binding "${PROJECT_NAME}" --member serviceAccount:"${GKE_SA_EMAIL}" --role="roles/container.admin"
```

After that, we [create a **Kubernetes cluster**](https://cloud.google.com/kubernetes-engine/docs/how-to/creating-a-regional-cluster).

|                   |                                                                                                                                                                                                                        |
| ----------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Image Type        | `UBUNTU_CONTAINERD`                                                                                                                                                                                                    |
| Machine Type      | `n2d-standard-16`                                                                                                                                                                                                      |
| Cluster Version   | Choose latest from [regular channel](https://cloud.google.com/kubernetes-engine/docs/release-notes-regular)                                                                                                            |
| Enable            | Autoscaling,<br/>Autorepair,<br/>IP Alias,<br/>Network Policy                                                                                                                                                          |
| Disable           | Autoupgrade<br/>`metadata=disable-legacy-endpoints=true`                                                                                                                                                               |
| Create Subnetwork | `gitpod-${CLUSTER_NAME}`                                                                                                                                                                                               |
| Number of nodes   | 1                                                                                                                                                                                                                      |
| Min Nodes         | 1                                                                                                                                                                                                                      |
| Max Nodes         | 50                                                                                                                                                                                                                     |
| Max Pods per Node | 110                                                                                                                                                                                                                    |
| Addons            | HorizontalPodAutoscaling,<br/>NodeLocalDNS,<br/>NetworkPolicy                                                                                                                                                          |
| Scopes            | `gke-default`,<br/>`https://www.googleapis.com/auth/ndev.clouddns.readwrite`                                                                                                                                           |
| Region            | Choose your [region and zones](https://cloud.google.com/compute/docs/regions-zones)                                                                                                                                    |
| Node Labels       | `gitpod.io/workload_meta=true`,<br/>`gitpod.io/workload_ide=true`,<br/>`gitpod.io/workload_workspace_services=true`,<br/>`gitpod.io/workload_workspace_regular=true`,<br/>`gitpod.io/workload_workspace_headless=true` |

```bash
CLUSTER_NAME=gitpod
REGION=us-central1-b
GKE_VERSION=1.21.12

gcloud container clusters \
    create "${CLUSTER_NAME}" \
    --disk-type="pd-ssd" \
    --disk-size="100GB" \
    --image-type="UBUNTU_CONTAINERD" \
    --machine-type="n2d-standard-16" \
    --cluster-version="${GKE_VERSION}" \
    --zone="${ZONE}" \
    --service-account "${GKE_SA_EMAIL}" \
    --num-nodes=1 \
    --no-enable-basic-auth \
    --enable-autoscaling \
    --enable-autorepair \
    --no-enable-autoupgrade \
    --enable-ip-alias \
    --enable-network-policy \
    --create-subnetwork name="gitpod-${CLUSTER_NAME}" \
    --metadata=disable-legacy-endpoints=true \
    --scopes="gke-default,https://www.googleapis.com/auth/ndev.clouddns.readwrite" \
    --node-labels="gitpod.io/workload_meta=true,gitpod.io/workload_ide=true,gitpod.io/workload_workspace_services=true,gitpod.io/workload_workspace_regular=true,gitpod.io/workload_workspace_headless=true" \
    --min-nodes=1 \
    --max-nodes=50 \
    --addons=HorizontalPodAutoscaling,NodeLocalDNS,NetworkPolicy
```

Now, you can **connect `kubectl`** to your newly created cluster.

```bash
gcloud container clusters get-credentials --zone="${ZONE}" "${CLUSTER_NAME}"
```

After that, you need to create cluster role bindings to allow the current user to create new RBAC rules.

```bash
kubectl create clusterrolebinding cluster-admin-binding \
    --clusterrole=cluster-admin \
    --user="$(gcloud config get-value core/account)"
```

</div>

<div slot="aws">

For `eksctl`, configuring the cluster and the node groups cannot happen simultaneously. You need to deploy the cluster control plane first, do modifications to the network stack (Calico), and then provision the node groups. This ensures you have the maximum number of pods available (110 in most cases) to run Gitpod workspaces.

The example `eksctl` config file includes services accounts that might not be relevant to a particular deployment, but are included for reference.

- `cert-manager` provided for the required cert-manager tooling. If using DNS-01 challenges for Let's Encrypt with a Route53 zone, then enable the cert-manager `wellKnownPolicies` or ensure one exists with permissions to modify records in the zone
- `aws-load-balancer-controller` enables ELB creation for LoadBalancer services and integration with AWS Application Load Balancers
- `cluster-autoscaler` connects to the AWS autoscaler
- `ebs-csi-controller-sa` enables provisioning of the EBS volumes for PVC storage
- `external-dns` creates DNS records for external-facing Gitpod services

Provided below is a complete `eksctl` configuration file that will deploy all the components required for an EKS installation to support Gitpod. All references to a `gitpod-cluster.yaml` file refer to this reference.

**`gitpod-cluster.yaml`**

```yaml
apiVersion: eksctl.io/v1alpha5
kind: ClusterConfig
metadata:
  name: gitpod-pov
  region: eu-west-1
  version: "1.22"
  # Update tags on your other Gitpod AWS resources (such as securitygroup rules)
  # to match these tags.
  tags:
    department: eng
    team: selfhosted
    owner: alt
    project: gitpod-pov

iam:
  withOIDC: true

  serviceAccounts:
    - metadata:
        name: aws-load-balancer-controller
        namespace: kube-system
      wellKnownPolicies:
        awsLoadBalancerController: true
    - metadata:
        name: ebs-csi-controller-sa
        namespace: kube-system
      wellKnownPolicies:
        ebsCSIController: true
    - metadata:
        name: cluster-autoscaler
        namespace: kube-system
      wellKnownPolicies:
        autoScaler: true
    - metadata:
        name: cert-manager
        namespace: cert-manager
      wellKnownPolicies:
        certManager: true
    - metadata:
        name: external-dns
        namespace: external-dns
      wellKnownPolicies:
        externalDNS: true

# Uncomment and update for your region if you wish to use fewer availability zones
# availabilityZones:
#   - eu-west-1a
#   - eu-west-1b
#   - eu-west-1c

# By default we create a dedicated VPC for the cluster
# You can use an existing VPC by supplying private and/or public subnets. Please check
# https://eksctl.io/usage/vpc-networking/#use-existing-vpc-other-custom-configuration
vpc:
  autoAllocateIPv6: false
  nat:
    # For production environments use HighlyAvailable, for an initial deployment Single adequate
    # HighlyAvailable will consume 3 Elastic IPs so ensure your region has capacity before using
    # https://eksctl.io/usage/vpc-networking/#nat-gateway
    gateway: Single

  # Cluster endpoints and public access
  # Private access ensures that nodes can communicate internally in case of NAT failure
  # For customizing for your environment review https://eksctl.io/usage/vpc-cluster-access/
  clusterEndpoints:
    privateAccess: true
    publicAccess: true
  publicAccessCIDRs: ["0.0.0.0/0"]

# Logging settings
cloudWatch:
  clusterLogging:
    enableTypes: ["*"]

# Nodegroups / Compute settings
managedNodeGroups:
  - name: default
    amiFamily: Ubuntu2004
    spot: false
    instanceTypes: ["m6i.4xlarge"]
    desiredCapacity: 1
    minSize: 1
    maxSize: 50
    maxPodsPerNode: 110
    disableIMDSv1: false
    volumeSize: 512
    volumeType: gp3
    volumeIOPS: 6000
    volumeThroughput: 500
    ebsOptimized: true
    privateNetworking: true
    propagateASGTags: true

    iam:
      attachPolicyARNs:
        - arn:aws:iam::aws:policy/AmazonEC2ContainerRegistryReadOnly
        - arn:aws:iam::aws:policy/AmazonEKSWorkerNodePolicy
        - arn:aws:iam::aws:policy/AmazonEKS_CNI_Policy
        - arn:aws:iam::aws:policy/ElasticLoadBalancingFullAccess
        - arn:aws:iam::aws:policy/AmazonSSMManagedInstanceCore

    tags:
      k8s.io/cluster-autoscaler/enabled: "true"
      # Important - If you change the name of your EKS cluster from the
      # default cluster name ("gitpod-pov"), update this tag to match
      # your cluster (`k8s.io/cluster-autoscaler/<cluster-name>: "owned"`)
      #
      # For example: `k8s.io/cluster-autoscaler/gitpod-corp-pov: "owned"`
      k8s.io/cluster-autoscaler/gitpod-pov: "owned"

    labels:
      gitpod.io/workload_meta: "true"
      gitpod.io/workload_ide: "true"
      gitpod.io/workload_workspace_regular: "true"
      gitpod.io/workload_workspace_services: "true"
      gitpod.io/workload_workspace_headless: "true"

    preBootstrapCommands:
      - echo "export USE_MAX_PODS=false" >> /etc/profile.d/bootstrap.sh
      - echo "export CONTAINER_RUNTIME=containerd" >> /etc/profile.d/bootstrap.sh
      - sed -i '/^set -o errexit/a\\nsource /etc/profile.d/bootstrap.sh' /etc/eks/bootstrap.sh
```

To ensure there are enough IPs and networking policy enforcement is in place, this proof of value reference architecture uses Calico for networking. To enable Calico in an EKS installation it must be done after the control plane has been provisioned and before the nodegroups have been created.

First: Run `eksctl` with the `--without-nodegroup` flag to provision just the control plane defined in the `gitpod-cluster.yaml`:

```bash
eksctl create cluster --without-nodegroup --config-file gitpod-cluster.yaml
```

This should result in the following output:

```
2022-08-11 22:10:23 [ℹ]  eksctl version 0.107.0
2022-08-11 22:10:23 [ℹ]  using region eu-west-1
2022-08-11 22:10:23 [ℹ]  setting availability zones to [eu-west-1b eu-west-1a eu-west-1c]
2022-08-11 22:10:23 [ℹ]  subnets for eu-west-1b - public:192.168.0.0/19 private:192.168.96.0/19
2022-08-11 22:10:23 [ℹ]  subnets for eu-west-1a - public:192.168.32.0/19 private:192.168.128.0/19
2022-08-11 22:10:23 [ℹ]  subnets for eu-west-1c - public:192.168.64.0/19 private:192.168.160.0/19
2022-08-11 22:10:23 [ℹ]  using Kubernetes version 1.22
[...]
2022-08-11 22:27:06 [✔]  EKS cluster "gitpod-pov" in "eu-west-1" region is ready
```

After this command finishes, check that `eksctl` also created the kubeconfig properly by running the command `kubectl get pods -n kube-system`. If deployed correctly one should see the list of pods in a pending state.

```bash
kubectl get pods -n kube-system
```

This should result in:

```
NAME                       READY   STATUS    RESTARTS   AGE
coredns-5947f47f5f-79vqv   0/1     Pending   0          22m
coredns-5947f47f5f-97f8m   0/1     Pending   0          22m
```

**Calico Installation**

This is following the instructions provided by [Tigera](https://projectcalico.docs.tigera.io/getting-started/kubernetes/managed-public-cloud/eks).

To install Calico, first remove the default AWS-provided networking component:

```bash
kubectl delete daemonset -n kube-system aws-node
```

Install the Calico manifest:

```bash
kubectl apply -f https://projectcalico.docs.tigera.io/manifests/calico-vxlan.yaml
```

Now configure Calico for EKS-specific support with the following command:

```bash
kubectl -n kube-system set env daemonset/calico-node FELIX_AWSSRCDSTCHECK=Disable
```

**SSH Access to nodegroups**

`eksctl` allows for [ssh keys](https://eksctl.io/usage/schema/#managedNodeGroups-ssh) to be added to your nodegroups for troubleshooting. By default, the `gitpod-cluster.yaml` does not configure this. AWS Systems Manager is enabled by default, allowing for connectivity [through multiple methods](https://docs.aws.amazon.com/systems-manager/latest/userguide/session-manager-working-with-sessions-start.html) to each instance in your nodegroup.

**Create the gitpod nodegroup**

Once the Calico CNI has been provisioned the gitpod nodegroup can be created.

Create the Gitpod nodegroup:

```bash
eksctl create nodegroup --include=default --config-file gitpod-cluster.yaml
```

This should result in:

```
2022-08-11 22:52:10 [ℹ]  nodegroup "default" will use "ami-0733d755ed2c97a4d" [Ubuntu2004/1.22]
2022-08-11 22:52:13 [ℹ]  combined include rules: default
2022-08-11 22:52:13 [ℹ]  1 nodegroup (default) was included (based on the include/exclude rules)
2022-08-11 22:52:13 [ℹ]  will create a CloudFormation stack for each of 1 managed nodegroups in cluster "gitpod-pov"
[...]
2022-08-11 22:56:53 [ℹ]  node "ip-192-168-104-44.eu-west-1.compute.internal" is ready
2022-08-11 22:56:53 [✔]  created 1 managed nodegroup(s) in cluster "gitpod-pov"
2022-08-11 22:56:57 [ℹ]  checking security group configuration for all nodegroups
2022-08-11 22:56:57 [ℹ]  all nodegroups have up-to-date cloudformation templates
```

You can verify that your installation was deployed properly with the custom `kubectl` command provided below which will let you review maxpods, kernel and containerd versions to ensure they are meeting [our minimum requirements](../../latest/cluster-set-up) as intended.

```bash
kubectl get nodes -o=custom-columns="NAME:.metadata.name,\
RUNTIME:.status.nodeInfo.containerRuntimeVersion,\
MAXPODS:.status.capacity.pods,\
KERNEL:.status.nodeInfo.kernelVersion,\
AMIFAMILY:.status.nodeInfo.osImage,\
K8S:.status.nodeInfo.kubeletVersion,\
Instance-ID:.spec.providerID"
```

**Enable cluster autoscaling**

Gitpod's resource usage will vary depending on the number of active workspaces and image prebuilds during the day. The use of a cluster autoscaler is recommended to provision and remove EKS nodes on demand.

```bash
CLUSTER_NAME="gitpod-pov"
AWS_REGION="eu-west-1"

helm repo add autoscaler https://kubernetes.github.io/autoscaler
helm repo update
helm upgrade \
    --atomic \
    --cleanup-on-fail \
    --install \
    --namespace kube-system \
    --reset-values \
    --wait \
    --set cloudProvider=aws \
    --set awsRegion=$AWS_REGION \
    --set autoDiscovery.clusterName=$CLUSTER_NAME \
    --set rbac.serviceAccount.create=false \
    --set rbac.serviceAccount.name=cluster-autoscaler \
    --set securityContext.fsGroup=65534 \
    --set extraArgs.skip-nodes-with-local-storage=false \
    --set extraArgs.skip-nodes-with-system-pods=false \
    --set extraArgs.expander=least-waste \
    --set extraArgs.balance-similar-node-groups=true \
    --set extraArgs.scale-down-utilization-threshold=0.2 \
    --set extraArgs.v=2 \
    autoscaler autoscaler/cluster-autoscaler
```

**Deleting the cluster**

When deleting this cluster following your proof of value evaluation, any additional resources added to the VPC will need to be deleted before deleting the cluster, otherwise, cloudformations will fail to delete the VPC and complete deleting the cluster. The alternative is to create a VPC managed separately and install EKS using the additions for working [with existing VPCs](https://eksctl.io/usage/vpc-networking/#use-existing-vpc-other-custom-configuration) in `eksctl`.

Full removal of the installed components would look something like this (commands are grouped for brevity):

```bash
eksctl delete cluster --name gitpod --force --disable-nodegroup-eviction --wait

#### The following removal steps are optional; if you plan on creating another Gitpod installation then the S3 bucket,
#### access account, key, and policy can be kept for later use.

#### delete s3 resources
aws s3 rm s3://${S3_BUCKET_NAME} --recursive
aws s3 rb s3://${S3_BUCKET_NAME} --force

#### delete iam resources
aws iam detach-user-policy --user-name gitpod-s3-access --policy-arn 'arn:aws:iam::12344:policy/gitpod_s3_access_policy'

# delete access keys:
aws iam list-access-keys --user-name gitpod-s3-access
aws iam delete-access-key --user-name gitpod-s3-access --access-key-id AKI---------
aws iam delete-user --user-name gitpod-s3-access

# ensure that nothing else is attached to this policy
aws iam list-entities-for-policy --policy-arn 'arn:aws:iam::12344:policy/gitpod_s3_access_policy'
aws iam delete-policy --policy-arn 'arn:aws:iam::12344:policy/gitpod_s3_access_policy'
```

</div>

</CloudPlatformToggle>

## Networking

<Networking />

## Install Gitpod

Congratulations. You have set up your cluster. Now, you are ready to install Gitpod. Follow the instructions of the [installation guide](../installing-gitpod).

If you followed the steps to create your infrastructure of this guide, you need to use the following config settings for your Gitpod installation:

| General settings |                    |
| ---------------- | ------------------ |
| Domain name      | value of `$DOMAIN` |

Keep cert-manager selected for the TLS certificates options.

| TLS certificates            | &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; |
| --------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Self-signed TLS certificate | no                                                                                                                                                                                                                       |
| cert-manager                | yes                                                                                                                                                                                                                      |
| Issuer name                 | `gitpod-issuer`                                                                                                                                                                                                          |
| Issuer type                 | Select “cluster issuer”                                                                                                                                                                                                  |

| Additional features                                                     | &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; |
| ----------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Allow login to your workspace via SSH (if you wish to use desktop IDEs) | ✅                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
