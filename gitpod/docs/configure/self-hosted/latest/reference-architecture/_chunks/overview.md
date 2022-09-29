---
layout: false
---

![Reference Architecture Overview](../../../static/images/docs/self-hosted/reference-architecture/ReferenceArchitecture.png)

The diagram above gives an overview of the reference architecture. Starting from the user’s workstation, access is provided using a layer 4 (L4) load balancer. An internal proxy distributes this traffic within Gitpod.

The cluster-external components are accessed by a specific set of components as shown in the diagram. The external components are:

- **MySQL database**
- **Source Control Management (SCM)**, e.g. GitLab, GitHub, GitHub Enterprise, BitBucket, or BitBucket Server
- **Object Storage**, e.g. Google Cloud Storage or Amazon S3
- **OCI Image Registry**, e.g. Google Artifact Registry.<br/>
  _Note: This registry is used by Gitpod to cache images, and store images it builds on behalf of users. This is **not** the registry that contains the images of Gitpod’s services._

In addition, the diagram indicates the different node pools within the cluster. Notice that we separate any user workloads from Gitpod’s services (except for `ws-daemon`). In this reference architecture, we create two node pools: the services node pool (upper half in the diagram) and the workspaces node pool (lower half in the diagram).
