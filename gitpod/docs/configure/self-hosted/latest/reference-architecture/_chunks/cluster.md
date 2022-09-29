---
layout: false
---

<script lang="ts">
  import CloudPlatformToggle from "$lib/components/docs/cloud-platform-toggle.svelte";
</script>

The heart of this reference architecture is a **Kubernetes cluster** where all Gitpod components are deployed to. This cluster consists of three node pools:

1. **Services Node Pool**: The Gitpod “app” with all its services is deployed to these nodes. These services provide the users with the dashboard and manage the provisioning of workspaces.
2. **Regular Workspaces Node Pool**: Gitpod deploys the actual workspaces (where the actual developer work is happening) to these nodes.
3. **Headless Workspace Node Pool**: Gitpod deploys the imagebuild and prebuild workspaces (where build work generally demands more CPU and disk) to these needs.

Gitpod services, headless, and regular workspaces have vastly differing resource and isolation requirements. These workloads are separated onto different node pools to provide a better quality of service and security guarantees.

You need to assign the following labels to the node pools to enforce that the Gitpod components are scheduled to the proper node pools:

| Node Pool                    | Labels                                                                                                              |
| ---------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| Services Node Pool           | `gitpod.io/workload_meta=true`,<br/>`gitpod.io/workload_ide=true`,<br/>`gitpod.io/workload_workspace_services=true` |
| Regular Workspace Node Pool  | `gitpod.io/workload_workspace_regular=true`                                                                         |
| Headless Workspace Node Pool | `gitpod.io/workload_workspace_headless=true`                                                                        |

The following table gives an overview of the node types for the different cloud providers that are used by this reference architecture.

|                              | GCP               | AWS           |
| ---------------------------- | ----------------- | ------------- |
| Services Node Pool           | `n2d-standard-4`  | `m6i.xlarge`  |
| Regular Workspace Node Pool  | `n2d-standard-16` | `m6i.4xlarge` |
| Headless Workspace Node Pool | `n2d-standard-16` | `m6i.4xlarge` |

<CloudPlatformToggle id="cloud-platform-toggle-cluster">

<div slot="gcp">

First, we [create a **service account**](https://cloud.google.com/iam/docs/creating-managing-service-accounts) for the cluster. The service account needs to have the following roles:

| Roles                         |
| ----------------------------- |
| roles/storage.admin           |
| roles/logging.logWriter       |
| roles/monitoring.metricWriter |
| roles/container.admin         |

Run the following commands to create the service account:

```bash
GKE_SA=gitpod-gke
GKE_SA_EMAIL="${GKE_SA}"@"${PROJECT_NAME}".iam.gserviceaccount.com
gcloud iam service-accounts create "${GKE_SA}" --display-name "${GKE_SA}"
gcloud projects add-iam-policy-binding "${PROJECT_NAME}" --member serviceAccount:"${GKE_SA_EMAIL}" --role="roles/storage.admin"
gcloud projects add-iam-policy-binding "${PROJECT_NAME}" --member serviceAccount:"${GKE_SA_EMAIL}" --role="roles/logging.logWriter"
gcloud projects add-iam-policy-binding "${PROJECT_NAME}" --member serviceAccount:"${GKE_SA_EMAIL}" --role="roles/monitoring.metricWriter"
gcloud projects add-iam-policy-binding "${PROJECT_NAME}" --member serviceAccount:"${GKE_SA_EMAIL}" --role="roles/container.admin"
```

After that, we [create a **Kubernetes cluster**](https://cloud.google.com/kubernetes-engine/docs/how-to/creating-a-regional-cluster).

|                           |                                                                                                             |
| ------------------------- | ----------------------------------------------------------------------------------------------------------- |
| Image Type                | `UBUNTU_CONTAINERD`                                                                                         |
| Machine Type              | `e2-standard-2`                                                                                             |
| Cluster Version           | Choose latest from [regular channel](https://cloud.google.com/kubernetes-engine/docs/release-notes-regular) |
| Enable                    | Autoscaling,<br/>Autorepair,<br/>IP Alias,<br/>Network Policy                                               |
| Disable                   | Autoupgrade<br/>`metadata=disable-legacy-endpoints=true`                                                    |
| Create Subnetwork         | `gitpod-${CLUSTER_NAME}`                                                                                    |
| Max Pods per Node         | 10                                                                                                          |
| Default Max Pods per Node | 110                                                                                                         |
| Min Nodes                 | 0                                                                                                           |
| Max Nodes                 | 1                                                                                                           |
| Addons                    | HorizontalPodAutoscaling,<br/>NodeLocalDNS,<br/>NetworkPolicy                                               |
| Region                    | Choose your [region and zones](https://cloud.google.com/compute/docs/regions-zones)                         |

```bash
CLUSTER_NAME=gitpod
REGION=us-central1
GKE_VERSION=1.22.12-gke.1200

gcloud container clusters \
    create "${CLUSTER_NAME}" \
    --disk-type="pd-ssd" --disk-size="50GB" \
    --image-type="UBUNTU_CONTAINERD" \
    --machine-type="e2-standard-2" \
    --cluster-version="${GKE_VERSION}" \
    --region="${REGION}" \
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
    --max-pods-per-node=110 \
    --default-max-pods-per-node=110 \
    --min-nodes=0 \
    --max-nodes=1 \
    --addons=HorizontalPodAutoscaling,NodeLocalDNS,NetworkPolicy
```

Unfortunately, you cannot create a cluster without the default node pool. Since we need a custom node pool, you need to remove the default one.

<!-- Can we re-use the default node pool instead? → https://github.com/gitpod-io/website/pull/2106#discussion_r893885815 -->

```bash
gcloud --quiet container node-pools delete default-pool \
    --cluster="${CLUSTER_NAME}" --region="${REGION}"
```

Now, we are [creating a **node pool**](https://cloud.google.com/kubernetes-engine/docs/how-to/node-pools) **for the Gitpod services**.

|                   |                                                                                     |
| ----------------- | ----------------------------------------------------------------------------------- |
| Image Type        | `UBUNTU_CONTAINERD`                                                                 |
| Machine Type      | `n2d-standard-4`                                                                    |
| Enable            | Autoscaling<br/>Autorepair<br/>IP Alias<br/>Network Policy                          |
| Disable           | Autoupgrade<br/>`metadata=disable-legacy-endpoints=true`                            |
| Create Subnetwork | `gitpod-${CLUSTER_NAME}`                                                            |
| Number of nodes   | 1                                                                                   |
| Min Nodes         | 1                                                                                   |
| Max Nodes         | 50                                                                                  |
| Max Pods per Node | 110                                                                                 |
| Scopes            | `gke-default`,<br/>`https://www.googleapis.com/auth/ndev.clouddns.readwrite`        |
| Region            | Choose your [region and zones](https://cloud.google.com/compute/docs/regions-zones) |
| Node Labels       | `gitpod.io/workload_meta=true`,<br/>`gitpod.io/workload_ide=true`                   |

```bash
gcloud container node-pools \
    create "workload-services" \
    --cluster="${CLUSTER_NAME}" \
    --disk-type="pd-ssd" \
    --disk-size="100GB" \
    --image-type="UBUNTU_CONTAINERD" \
    --machine-type="n2d-standard-4" \
    --num-nodes=1 \
    --no-enable-autoupgrade \
    --enable-autorepair \
    --enable-autoscaling \
    --metadata disable-legacy-endpoints=true \
    --scopes="gke-default,https://www.googleapis.com/auth/ndev.clouddns.readwrite" \
    --node-labels="gitpod.io/workload_meta=true,gitpod.io/workload_ide=true,gitpod.io/workload_workspace_services=true" \
    --max-pods-per-node=110 \
    --min-nodes=1 \
    --max-nodes=4 \
    --region="${REGION}"
```

We are also creating a **node pool for the Gitpod regular workspaces**.

|                   |                                                                                     |
| ----------------- | ----------------------------------------------------------------------------------- |
| Image Type        | `UBUNTU_CONTAINERD`                                                                 |
| Machine Type      | `n2d-standard-16`                                                                   |
| Enable            | Autoscaling,<br/>Autorepair,<br/>IP Alias,<br/>Network Policy                       |
| Disable           | Autoupgrade<br/>`metadata=disable-legacy-endpoints=true`                            |
| Create Subnetwork | `gitpod-${CLUSTER_NAME}`                                                            |
| Number of nodes   | 1                                                                                   |
| Min Nodes         | 1                                                                                   |
| Max Nodes         | 50                                                                                  |
| Max Pods per Node | 110                                                                                 |
| Scopes            | `gke-default`,<br/>`https://www.googleapis.com/auth/ndev.clouddns.readwrite`        |
| Region            | Choose your [region and zones](https://cloud.google.com/compute/docs/regions-zones) |
| Node Labels       | `gitpod.io/workload_workspace_regular=true`                                         |

```bash
gcloud container node-pools \
    create "workload-regular-workspaces" \
    --cluster="${CLUSTER_NAME}" \
    --disk-type="pd-ssd" \
    --disk-size="512GB" \
    --image-type="UBUNTU_CONTAINERD" \
    --machine-type="n2d-standard-16" \
    --num-nodes=1 \
    --no-enable-autoupgrade \
    --enable-autorepair \
    --enable-autoscaling \
    --metadata disable-legacy-endpoints=true \
    --scopes="gke-default,https://www.googleapis.com/auth/ndev.clouddns.readwrite" \
    --node-labels="gitpod.io/workload_workspace_regular=true" \
    --max-pods-per-node=110 \
    --min-nodes=1 \
    --max-nodes=50 \
    --region="${REGION}"
```

We are also creating a **node pool for the Gitpod headless workspaces**.

|                   |                                                                                     |
| ----------------- | ----------------------------------------------------------------------------------- |
| Image Type        | `UBUNTU_CONTAINERD`                                                                 |
| Machine Type      | `n2d-standard-16`                                                                   |
| Enable            | Autoscaling,<br/>Autorepair,<br/>IP Alias,<br/>Network Policy                       |
| Disable           | Autoupgrade<br/>`metadata=disable-legacy-endpoints=true`                            |
| Create Subnetwork | `gitpod-${CLUSTER_NAME}`                                                            |
| Number of nodes   | 1                                                                                   |
| Min Nodes         | 1                                                                                   |
| Max Nodes         | 50                                                                                  |
| Max Pods per Node | 110                                                                                 |
| Scopes            | `gke-default`,<br/>`https://www.googleapis.com/auth/ndev.clouddns.readwrite`        |
| Region            | Choose your [region and zones](https://cloud.google.com/compute/docs/regions-zones) |
| Node Labels       | `gitpod.io/workload_workspace_headless=true`                                        |

```bash
gcloud container node-pools \
    create "workload-headless-workspaces" \
    --cluster="${CLUSTER_NAME}" \
    --disk-type="pd-ssd" \
    --disk-size="512GB" \
    --image-type="UBUNTU_CONTAINERD" \
    --machine-type="n2d-standard-16" \
    --num-nodes=1 \
    --no-enable-autoupgrade \
    --enable-autorepair \
    --enable-autoscaling \
    --metadata disable-legacy-endpoints=true \
    --scopes="gke-default,https://www.googleapis.com/auth/ndev.clouddns.readwrite" \
    --node-labels="gitpod.io/workload_workspace_headless=true" \
    --max-pods-per-node=110 \
    --min-nodes=1 \
    --max-nodes=50 \
    --region="${REGION}"
```

Now, you can **connect `kubectl`** to your newly created cluster.

```bash
gcloud container clusters get-credentials --region="${REGION}" "${CLUSTER_NAME}"
```

After that, you need to create cluster role bindings to allow the current user to create new RBAC rules.

```bash
kubectl create clusterrolebinding cluster-admin-binding \
    --clusterrole=cluster-admin \
    --user="$(gcloud config get-value core/account)"
```

</div>
<div slot="aws">

> **Note:** By default, when Gitpod is being installed using the instructions here, EKS will create a classic load balancer that you can point your DNS entries at. If you are unable to use a AWS Classic Load Balancer (e.g. because you use SSL certificates generated by AWS), please follow [the Setting up your EKS cluster with dual ALB + NLB load balancers guide](../advanced/eks-with-alb-and-nlb) _alongside_ this reference architecture guide.

For `eksctl`, configuring the cluster and the node groups cannot happen simultaneously. You need to deploy the cluster control plane first, do modifications to the network stack (Calico), and then provision the node groups. This ensures you have the maximum number of pods available (110 in most cases) to run Gitpod workspaces.

The example `eksctl` config file includes services accounts that might not be relevant to a particular deployment, but are included for reference.

- `cert-manager` provided for the required cert-manager tooling. If using DNS-01 challenges for Let's Encrypt with a Route53 zone, then enable the cert-manager `wellKnownPolicies` or ensure one exists with permissions to modify records in the zone
- `aws-load-balancer-controller` enables ELB creation for LoadBalancer services and integration with AWS Application Load Balancers
- `cluster-autoscaler` connects to the AWS autoscaler
- `ebs-csi-controller-sa` enables provisioning of the EBS volumes for PVC storage

Provided below is a complete `eksctl` configuration file that will deploy all the components required for an EKS installation to support Gitpod. All references to a `gitpod-cluster.yaml` file refer to this reference.

`eksctl` will be configuring the VPC and networking along with creating the EKS cluster itself, if you need to use pre-existing networking provisioned by another team or department, refer to the [custom VPC documentation](https://eksctl.io/usage/vpc-networking/#use-existing-vpc-other-custom-configuration).

<details>
  <summary  class="text-p-medium">Note on AMI Usage</summary>

In this reference example, the Ubuntu2004 AMI family is used instead of listing a specific AMI ID. This simplifies portability and allows for the use of the built-in bootstrap command instead of having to create a custom one. If you want to do more customization of your bootstrap command or use a static AMI, first, replace `amiFamily: Ubuntu2004` with `ami: ami-customid` where `ami-customid` is from Ubuntu's EKS AMI list or the output from the below command. You will then replace `preBootstrapCommands` with your bootstrap script under a new section labeled `overrideBootstrapCommand`.

```bash
aws ec2 describe-images --owners 099720109477 \
    --filters 'Name=name,Values=ubuntu-eks/k8s_1.22/images/*' \
    --query 'sort_by(Images,&CreationDate)[-1].ImageId' \
    --executable-users all \
    --output text --region us-west-2
```

Refer to `eksctl`'s documentation on [AMI Family](https://eksctl.io/usage/custom-ami-support/) for more information on its behavior.

</details>

<br/>

**`gitpod-cluster.yaml`**

```yaml
apiVersion: eksctl.io/v1alpha5
kind: ClusterConfig
metadata:
  name: gitpod
  region: eu-west-1
  version: "1.22"
  # update tags to ensure all generated resources have atleast these tags applied
  tags:
    department: demo
    project: gitpod

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
  - name: services
    amiFamily: Ubuntu2004
    spot: false
    instanceTypes: ["m6i.xlarge"]
    desiredCapacity: 2
    minSize: 1
    maxSize: 4
    maxPodsPerNode: 110
    disableIMDSv1: false
    volumeSize: 300
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
      # default cluster name ("gitpod"), update this tag to match
      # your cluster (`k8s.io/cluster-autoscaler/<cluster-name>: "owned"`)
      #
      # For example: `k8s.io/cluster-autoscaler/gitpod-corp: "owned"`
      k8s.io/cluster-autoscaler/gitpod: "owned"

    labels:
      gitpod.io/workload_meta: "true"
      gitpod.io/workload_ide: "true"
      gitpod.io/workload_workspace_services: "true"

    preBootstrapCommands:
      - echo "export USE_MAX_PODS=false" >> /etc/profile.d/bootstrap.sh
      - echo "export CONTAINER_RUNTIME=containerd" >> /etc/profile.d/bootstrap.sh
      - sed -i '/^set -o errexit/a\\nsource /etc/profile.d/bootstrap.sh' /etc/eks/bootstrap.sh

  - name: regular-workspaces
    amiFamily: Ubuntu2004
    spot: false
    instanceTypes: ["m6i.4xlarge"]
    desiredCapacity: 2
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
      # default cluster name ("gitpod"), update the tag below to match
      # your cluster (`k8s.io/cluster-autoscaler/<cluster-name>: "owned"`)
      #
      # For example: `k8s.io/cluster-autoscaler/gitpod-corp: "owned"`
      k8s.io/cluster-autoscaler/gitpod: "owned"

    labels:
      gitpod.io/workload_workspace_regular: "true"

    preBootstrapCommands:
      - echo "export USE_MAX_PODS=false" >> /etc/profile.d/bootstrap.sh
      - echo "export CONTAINER_RUNTIME=containerd" >> /etc/profile.d/bootstrap.sh
      - sed -i '/^set -o errexit/a\\nsource /etc/profile.d/bootstrap.sh' /etc/eks/bootstrap.sh
  - name: headless-workspaces
    amiFamily: Ubuntu2004
    spot: false
    instanceTypes: ["m6i.4xlarge"]
    desiredCapacity: 2
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
      # default cluster name ("gitpod"), update the tag below to match
      # your cluster (`k8s.io/cluster-autoscaler/<cluster-name>: "owned"`)
      #
      # For example: `k8s.io/cluster-autoscaler/gitpod-corp: "owned"`
      k8s.io/cluster-autoscaler/gitpod: "owned"

    labels:
      gitpod.io/workload_workspace_headless: "true"

    preBootstrapCommands:
      - echo "export USE_MAX_PODS=false" >> /etc/profile.d/bootstrap.sh
      - echo "export CONTAINER_RUNTIME=containerd" >> /etc/profile.d/bootstrap.sh
      - sed -i '/^set -o errexit/a\\nsource /etc/profile.d/bootstrap.sh' /etc/eks/bootstrap.sh
```

To ensure there are enough IPs and networking policy enforcement is in place, this reference architecture uses Calico for networking. To enable Calico in an EKS installation it must be done after the control plane has been provisioned and before the nodegroups have been created.

First: Run `eksctl` with the `--without-nodegroup` flag to provision just the control plane defined in the `gitpod-cluster.yaml`:

```bash
eksctl create cluster --without-nodegroup --config-file gitpod-cluster.yaml
```

This should result in the following output:

```bash
2022-06-24 09:54:59 [ℹ]  eksctl version 0.102.0-dev+3229f126.2022-06-17T12:44:20Z
2022-06-24 09:54:59 [ℹ]  using region eu-west-1
2022-06-24 09:54:59 [ℹ]  setting availability zones to [eu-west-1c eu-west-1a eu-west-1b]
2022-06-24 09:54:59 [ℹ]  subnets for eu-west-1c - public:192.168.0.0/19 private:192.168.96.0/19
2022-06-24 09:54:59 [ℹ]  subnets for eu-west-1a - public:192.168.32.0/19 private:192.168.128.0/19
2022-06-24 09:54:59 [ℹ]  subnets for eu-west-1b - public:192.168.64.0/19 private:192.168.160.0/19
2022-06-24 09:54:59 [ℹ]  using Kubernetes version 1.22
[...]
2022-06-24 10:11:30 [✔]  EKS cluster "gitpod" in "eu-west-1" region is ready
```

After this command finishes, check that `eksctl` also created the kubeconfig properly by running the command `kubectl get pods -n kube-system`. If deployed correctly one should see the list of pods in a pending state.

```bash
kubectl get pods -n kube-system
```

This should result in:

```bash
NAME                       READY   STATUS    RESTARTS   AGE
coredns-5947f47f5f-69lvv   0/1     Pending   0          26m
coredns-5947f47f5f-srm5t   0/1     Pending   0          26m
```

### Calico Installation

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

### Additional Network configuration

To use RDS in the VPC you will need security groups created and associated with the Services nodegroup before it is launched. RDS does not have to be deployed yet but an additional security group for the Services nodegroup needs to be created and added to your `gitpod-cluster.yaml` before continuing.

Get the ID of the cluster `eksctl` just created. If you kept the tag `project=gitpod` in the `gitpod-cluster.yaml` file, retrieve the id and cidr block with:

```bash
aws ec2 describe-vpcs --filters "Name=tag:project,Values=gitpod" --query 'Vpcs[*].[VpcId, CidrBlock]'
```

This should result in:

```bash
[
    [
        "<VPC ID similar to: vpc-09a109f23dad0a298>",
        "192.168.0.0/16"
    ]
]
```

Create the new security group (we do not need to have rules added to it yet) using the vpc-id from above, note how tags are auto-populated to the security group as well:

```bash
aws ec2 create-security-group --description 'Gitpod Services Nodegroup' --group-name 'gitpod-services' \
--vpc-id <!add VPC ID from above here!> --tag-specifications 'ResourceType=security-group,Tags=[{Key=Name,Value=gitpod-services-sg},{Key=project,Value=gitpod},{Key=department,Value=demo}]'
```

This should return something similar to:

```bash
{
    "GroupId": "<GroupID, similar to: sg-04b9a5f403307efe5>",
    "Tags": [
        {
            "Key": "project",
            "Value": "gitpod"
        },
        {
            "Key": "department",
            "Value": "demo"
        }
    ]
}
```

Update your `gitpod-cluster.yaml` to add the `GroupId` from the previous command to the `securityGroups.attachIDs` list in the `services` `managedNodeGroups`:

```yaml
securityGroups:
  attachIDs: ["<Add your GroupId here, similar to: sg-04b9a5f403307efe5"]
```

Store the `GroupID` for easier reuse when creating the RDS instance later in this guide:

```bash
export SERVICES_SECURITYGROUP_ID="<add GroupID from above here, similar to: sg-04b9a5f403307efe5>"
```

If you destroy this cluster and recreate it, you will need to redo the above step as the old security group would have been deleted along with the VPC.

### SSH Access to nodegroups

`eksctl` allows for [ssh keys](https://eksctl.io/usage/schema/#managedNodeGroups-ssh) to be added to your nodegroups for troubleshooting. By default, the `gitpod-cluster.yaml` does not configure this. AWS Systems Manager is enabled by default, allowing for connectivity [through multiple methods](https://docs.aws.amazon.com/systems-manager/latest/userguide/session-manager-working-with-sessions-start.html) to each instance in your nodegroup.

### Create nodegroups

To ensure that if there are problems deploying the services nodegroup (you provided an incorrect security group ID for example) it can be deleted easily and not require having to delete a partially deployed workspaces nodegroup, create it before the workspaces nodegroup.

Create the services nodegroups with `eksctl create nodegroup --include=services --config-file gitpod-cluster.yaml`:

```bash
eksctl create nodegroup --include=services --config-file gitpod-cluster.yaml
```

This should result in:

```bash
2022-06-24 13:42:01 [ℹ]  nodegroup "services" will use "ami-0793b4124359a6ad7" [Ubuntu2004/1.22]
2022-06-24 13:42:01 [ℹ]  nodegroup "regular-workspaces" will use "ami-0793b4124359a6ad7" [Ubuntu2004/1.22]
2022-06-24 13:42:01 [ℹ]  nodegroup "headless-workspaces" will use "ami-0793b4124359a6ad7" [Ubuntu2004/1.22]
2022-06-24 13:42:03 [ℹ]  combined include rules: services
2022-06-24 13:42:03 [ℹ]  1 nodegroup (services) was included (based on the include/exclude rules)
2022-06-24 13:42:03 [ℹ]  will create a CloudFormation stack for each of 1 managed nodegroups in cluster "gitpod"
[...]
2022-06-24 13:46:22 [✔]  created 1 managed nodegroup(s) in cluster "gitpod"
2022-06-24 13:46:24 [ℹ]  checking security group configuration for all nodegroups
2022-06-24 13:46:24 [ℹ]  all nodegroups have up-to-date cloudformation templates
```

Create the workspaces nodegroups second if the services are deployed correctly.

```bash
eksctl create nodegroup --include=regular-workspaces,headless-workspaces --config-file gitpod-cluster.yaml
```

```bash
2022-06-24 13:55:08 [ℹ]  nodegroup "services" will use "ami-0793b4124359a6ad7" [Ubuntu2004/1.22]
2022-06-24 13:55:08 [ℹ]  nodegroup "regular-workspaces" will use "ami-0793b4124359a6ad7" [Ubuntu2004/1.22]
2022-06-24 13:55:08 [ℹ]  nodegroup "headless-workspaces" will use "ami-0793b4124359a6ad7" [Ubuntu2004/1.22]
2022-06-24 13:55:13 [ℹ]  1 existing nodegroup(s) (services) will be excluded
2022-06-24 13:55:13 [ℹ]  combined include rules: regular-workspaces,headless-workspaces
2022-06-24 13:55:13 [ℹ]  2 nodegroups (headless-workspaces, regular-workspaces) were included (based on the include/exclude rules)
2022-06-24 13:55:13 [ℹ]  will create a CloudFormation stack for each of 2 managed nodegroups in cluster "gitpod"
[...]
2022-06-24 13:59:10 [✔]  created 2 managed nodegroup(s) in cluster "gitpod"
2022-06-24 13:59:13 [ℹ]  checking security group configuration for all nodegroups
2022-06-24 13:59:13 [ℹ]  all nodegroups have up-to-date cloudformation templates
```

You can verify that your installation was deployed properly with the custom `kubectl` command provided below which will let you review maxpods, kernel and containerd versions to ensure they are meeting [our minimum requirements](../../latest/requirements) as intended.

```bash
kubectl get nodes -o=custom-columns="NAME:.metadata.name,\
NODEGROUP:.metadata.labels.eks\.amazonaws\.com/nodegroup,\
RUNTIME:.status.nodeInfo.containerRuntimeVersion,\
MAXPODS:.status.capacity.pods,\
KERNEL:.status.nodeInfo.kernelVersion,\
AMIFAMILY:.status.nodeInfo.osImage,\
K8S:.status.nodeInfo.kubeletVersion,\
Instance-ID:.spec.providerID"
```

Because of how EKS launches instances, coredns may end up running on a single node, which is against best practices. Before continuing to the next steps, restart coredns to ensure it is running on two nodes.

```bash
kubectl rollout restart deployment.apps/coredns -n kube-system
```

### Enable cluster autoscaling

Gitpod's resource usage will vary depending on the number of active workspaces and image prebuilds during the day. The use of a cluster autoscaler is recommended to scale EKS nodes on demand and thus minimize the cost you pay.

```bash
CLUSTER_NAME="gitpod"
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

### Deleting the cluster

In the future to delete this cluster any additional resources added to the VPC will need to be deleted before deleting the cluster, otherwise, cloudformations will fail to delete the VPC and complete deleting the cluster. The alternative is to create a VPC managed separately and install EKS using the additions for working [with existing VPCs](https://eksctl.io/usage/vpc-networking/#use-existing-vpc-other-custom-configuration) in `eksctl`.

The order resources to delete if created:

- RDS First
- RDS security group
- Services Nodegroup
- Services security group
- eksctl delete cluster

Full removal of these installed components would look something like this (commands are grouped for brevity):

```bash
#### delete RDS resources
aws rds delete-db-instance --db-instance-identifier gitpod-instance --skip-final-snapshot --delete-automated-backups
aws ec2 delete-security-group --group-id sg-0e538ccac25bb1387
aws rds delete-db-subnet-group --db-subnet-group-name gitpod-rds

#### delete the services node group
eksctl delete nodegroup --name services --cluster gitpod --disable-eviction --parallel 4 --max-grace-period 0s --wait

#### delete the security group added for rds
aws ec2 delete-security-group --group-id sg-04b9a5f403307efe5
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
