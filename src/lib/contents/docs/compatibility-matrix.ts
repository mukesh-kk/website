import type { Matrix } from "$lib/types/matrix";

export const compatibilityMatrix: Matrix[] = [
  {
    name: "Browser", // RESPONSIBLE TEAM: WEBAPP
    relevance: "users", // this is optional used for filtering based on relevance.
    components: [
      {
        name: "Google Chrome",
        availibility: "supported",
        limitations: null,
        policy: {
          text: "current version",
          description: null,
        },
        supportedVersions: "current version",
      },
      {
        name: "Safari",
        availibility: "supported",
        limitations: null,
        policy: {
          text: "current version",
          description: null,
        },
        supportedVersions: "current version",
      },
      {
        name: "Firefox",
        availibility: "supported",
        limitations: null,
        policy: {
          text: "current version",
          description: null,
        },
        supportedVersions: "current version",
      },
    ],
  },
  {
    name: "IDE", // RESPONSIBLE TEAM: IDE
    relevance: "users",
    components: [
      {
        name: "VS Code Browser",
        availibility: "supported",
        limitations: null,
        policy: {
          text: "current version",
          description: null,
        },
        supportedVersions: "current version",
      },
      {
        name: "VS Code Desktop",
        availibility: "supported",
        limitations:
          'An OpenSSH client needs to be installed on your machine. Further, we recommend you <a href="../configure/ssh#upload-an-ssh-key-to-gitpod" target="_blank">upload your SSH keys to Gitpod</a>. For more information, see the <a href="../configure/ssh" target="_blank">configure SSH</a> page.',
        policy: {
          text: "current version",
          description: null,
        },
        supportedVersions: "current version",
      },
      {
        name: "IntelliJ IDEA",
        availibility: "supported",
        limitations:
          'Requires the latest version of JetBrains Gateway to be installed which can be installed via the <a href="https://www.jetbrains.com/toolbox-app/" target="_blank">JetBrains Toolbox</a>. We recommend using the JetBrains Toolbox to allow for auto-updates.',
        policy: {
          text: "current version",
          description: null,
        },
        supportedVersions: "current version",
      },
      {
        name: "GoLand",
        availibility: "supported",
        limitations:
          'Requires the latest version of JetBrains Gateway to be installed which can be installed via the <a href="https://www.jetbrains.com/toolbox-app/" target="_blank">JetBrains Toolbox</a>. We recommend using the JetBrains Toolbox to allow for auto-updates.',
        policy: {
          text: "current version",
          description: null,
        },
        supportedVersions: "current version",
      },
      {
        name: "PyCharm",
        availibility: "supported",
        limitations:
          'Requires the latest version of JetBrains Gateway to be installed which can be installed via the <a href="https://www.jetbrains.com/toolbox-app/" target="_blank">JetBrains Toolbox</a>. We recommend using the JetBrains Toolbox to allow for auto-updates.',
        policy: {
          text: "current version",
          description: null,
        },
        supportedVersions: "current version",
      },
      {
        name: "CLI (SSH)",
        availibility: "supported",
        limitations:
          'An OpenSSH client needs to be installed on your machine. Further, we recommend you <a href="../configure/ssh#upload-an-ssh-key-to-gitpod" target="_blank">upload your SSH keys to Gitpod</a>. For more information, see the <a href="../configure/ssh" target="_blank">configure SSH</a> page.',
        policy: {
          text: "current version",
          description: null,
        },
        supportedVersions: "current version",
      },
    ],
  },
  {
    name: "Source Control Management System (SCM)", // RESPONSIBLE TEAM: WEBAPP
    relevance: "everyone",
    components: [
      {
        name: "GitHub.com",
        availibility: "supported",
        limitations: null,
        policy: {
          text: "current version",
          description: null,
        },
        supportedVersions: "current version",
      },
      {
        name: "GitHub Enterprise Server",
        availibility: "supported",
        limitations: null,
        policy: {
          text: "all officially supported versions",
          description: null,
        },
        supportedVersions:
          ' <a href="https://docs.github.com/en/enterprise-server@3.6/admin/all-releases#currently-supported-releases" target=”_blank">see currently supported versions</a>',
      },
      {
        name: "GitLab.com",
        availibility: "supported",
        limitations: null,
        policy: {
          text: "current version",
          description: null,
        },
        supportedVersions: "current version",
      },
      {
        name: "GitLab Self-Managed",
        availibility: "supported",
        limitations: null,
        policy: {
          text: "all officially supported versions",
          description: null,
        },
        supportedVersions:
          ' <a href="https://docs.gitlab.com/ee/policy/maintenance.html" target=”_blank">see support policy</a>',
      },
      {
        name: "Bitbucket.org",
        availibility: "supported",
        limitations: null,
        policy: {
          text: "current version",
          description: null,
        },
        supportedVersions: "current version",
      },
      {
        name: "Bitbucket Server",
        availibility: "supported",
        limitations: null,
        policy: {
          text: "> v7.20 (Jan 2022)",
          description: null,
        },
        supportedVersions: "> v7.20 (Jan 2022)",
      },
    ],
  },
  {
    name: "Operating System (Kernel)", // RESPONSIBLE TEAM: WORKSPACE
    relevance: "self-hosted admins",
    components: [
      {
        name: "Linux Kernel",
        availibility: "supported",
        limitations: null,
        policy: {
          text: "> 5.4",
          description: null,
        },
        supportedVersions: "5.4 < x < 5.15",
      },
    ],
  },
  {
    name: "Operating System (Distribution)", // RESPONSIBLE TEAM: WORKSPACE
    relevance: "self-hosted admins",
    components: [
      {
        name: "Ubuntu",
        availibility: "supported",
        limitations: null,
        policy: {
          text: "20.04 and 22.04",
          description: null,
        },
        supportedVersions: "20.04 and 22.04",
      },
      {
        name: "Amazon Linux",
        availibility: "untested",
        limitations: null,
        policy: {
          text: "",
          description: null,
        },
        supportedVersions: "",
      },
    ],
  },
  {
    name: "Orchestration System", // RESPONSIBLE TEAM: WORKSPACE
    relevance: "self-hosted admins",
    components: [
      {
        name: "Kubernetes",
        availibility: "supported",
        limitations:
          "- Nodes with at least 4 vCPU and 16GB of RAM are expected <br/> - Your Kubernetes cluster must allow Gitpod to run privileged pods and manage PodSecurityPolicies, because Gitpod depends on these privileges to provide workspace isolation.",
        policy: {
          text: "the last three minor releases",
          description: null,
        },
        supportedVersions: "1.22, 1.23 and 1.24",
      },
    ],
  },
  {
    name: "Orchestration Platform", // RESPONSIBLE TEAM: WORKSPACE
    relevance: "self-hosted admins",
    components: [
      {
        name: "Amazon Elastic Kubernetes Service (EKS)",
        availibility: "supported",
        limitations: null,
        policy: {
          text: "see Kubernetes support policy",
          description: null,
        },
        supportedVersions: "see Kubernetes support policy",
      },
      {
        name: "Google Kubernetes Engine (GKE)",
        availibility: "supported",
        limitations:
          '- <a href="https://cloud.google.com/kubernetes-engine/docs/concepts/dataplane-v2" target=”_blank">Dataplane V2</a> unsupported, <br/> - Not supported in combination with <a href="https://github.com/gitpod-io/gitpod/issues/11168">self-signed certs</a>.',
        policy: {
          text: "see Kubernetes support policy",
          description: null,
        },
        supportedVersions: "see Kubernetes support policy",
      },
      {
        name: "Azure Kubernetes Service (AKS)",
        availibility: "supported",
        limitations: null,
        policy: {
          text: "see Kubernetes support policy",
          description: null,
        },
        supportedVersions: "see Kubernetes support policy",
      },
      {
        name: "K3s",
        availibility: "untested",
        limitations:
          'Please see the <a href="https://www.gitpod.io/docs/configure/self-hosted/latest/cluster-set-up/on-k3s" target=”_blank">K3s Guide</a> for instructions on how to set up k3s',
        policy: {
          text: "see Kubernetes support policy",
          description: null,
        },
        supportedVersions: "see Kubernetes support policy",
      },
    ],
  },
  {
    name: "Container Runtime", // RESPONSIBLE TEAM: WORKSPACE
    relevance: "self-hosted admins",
    components: [
      {
        name: "containerd",
        availibility: "supported",
        limitations: "Socket access required",
        policy: {
          text: "1.5 and 1.6.",
          description:
            "Version 1.6 is being used by Gitpod SaaS and we recommend it over version 1.5.",
        },
        supportedVersions: "1.5 and 1.6.",
      },
    ],
  },
  {
    name: "Container Network Interface (CNI)", // RESPONSIBLE TEAM: WORKSPACE
    relevance: "self-hosted admins",
    components: [
      {
        name: "Calico VXLAN",
        availibility: "supported",
        limitations: null,
        policy: {
          text: "current version",
          description: null,
        },
        supportedVersions: "current version",
      },
    ],
  },
  {
    name: "Certificate Management Tools", // RESPONSIBLE TEAM: WORKSPACE
    relevance: "self-hosted admins",
    components: [
      {
        name: "Cert Manager",
        availibility: "supported",
        limitations:
          "Cert-Manager is required even if you don't use it for your own certificates because Gitpod uses it internally.",
        policy: {
          text: "> 1.5",
          description:
            'Gitpod uses <a href="https://cert-manager.io/docs/usage/certificate/#creating-certificate-resources" target=”_blank”>secretTemplate</a>- currently this means only versions above 1.5 are supported. and requires cert-manager <a href="https://cert-manager.io/docs/reference/api-docs/#cert-manager.io%2fv1" target=”_blank”>API v1</a>- currently this means only versions above 1.5 are supported.',
        },
        supportedVersions: "> 1.5",
      },
    ],
  },
  {
    name: "Object Storage", // RESPONSIBLE TEAM: WORKSPACE
    relevance: "self-hosted admins",
    components: [
      {
        name: "AWS S3",
        availibility: "supported",
        limitations: null,
        policy: {
          text: "current version",
          description: null,
        },
        supportedVersions: "current version",
      },
      {
        name: "Google Cloud Storage (GCS)",
        availibility: "supported",
        limitations: null,
        policy: {
          text: "current version",
          description: null,
        },
        supportedVersions: "current version",
      },
      {
        name: "Azure",
        availibility: "supported",
        limitations: null,
        policy: {
          text: "current version",
          description: null,
        },
        supportedVersions: "current version",
      },
      {
        name: "MiniIO backed by in-cluster storage",
        availibility: "supported",
        limitations:
          "This can be installed automatically during set-up. Not recommended when using Gitpod on an ongoing basis - there is a risk of data loss if the cluster goes down.",
        policy: {
          text: "",
          description: null,
        },
        supportedVersions: "",
      },
    ],
  },
  {
    name: "Image Registry", // RESPONSIBLE TEAM: WORKSPACE
    relevance: "self-hosted admins",
    components: [
      {
        name: "MinIO backed by AWS S3",
        availibility: "supported",
        limitations: null,
        policy: {
          text: "",
          description: null,
        },
        supportedVersions: "",
      },
      {
        name: "Amazon Elastic Container Registry (ECR)",
        availibility: "not-supported",
        limitations:
          'Amazon Elastic Container Registry (ECR) does not implement the <a href="https://docs.docker.com/registry/spec/api/">Docker Registry HTTP API V2</a> spec fully. The spec expects that, if an image is pushed to a repository that doesn’t exist, it creates the repository before uploading the image. Amazon ECR does not do this: if the repository doesn’t exist, it will error on push. We advise to use MinIO backed by S3 instead.',
        policy: {
          text: "",
          description: null,
        },
        supportedVersions: "",
      },
      {
        name: "Google Container Registry (GCR)",
        availibility: "supported",
        limitations: null,
        policy: {
          text: "current version",
          description: null,
        },
        supportedVersions: "current version",
      },
      {
        name: "Google Artifact Registry (GAR)",
        availibility: "supported",
        limitations: null,
        policy: {
          text: "current version",
          description: null,
        },
        supportedVersions: "current version",
      },
      {
        name: "Azure Container Registry (ACR)",
        availibility: "supported",
        limitations: null,
        policy: {
          text: "current version",
          description: null,
        },
        supportedVersions: "current version",
      },
      {
        name: "Artifactory",
        availibility: "untested",
        limitations: null,
        policy: {
          text: "",
          description: null,
        },
        supportedVersions: "",
      },
      {
        name: "Other Docker Registry API compliant registries",
        availibility: "untested",
        limitations:
          'Any image registry that implements the <a href="https://docs.docker.com/registry/spec/api/">Docker Registry HTTP API V2</a> spec should work, however we cannot guarantee that it will. ',
        policy: {
          text: "",
          description: null,
        },
        supportedVersions: "",
      },
      {
        name: "In-cluster registry",
        availibility: "supported",
        limitations:
          "This can be installed automatically during set-up. Not recommended when using Gitpod on an ongoing basis - there is a risk of data loss if the cluster goes down.",
        policy: {
          text: "",
          description: null,
        },
        supportedVersions: "",
      },
    ],
  },
  {
    name: "Database", // RESPONSIBLE TEAM: WEBAPP
    relevance: "self-hosted admins",
    components: [
      {
        name: "External MySQL Database",
        availibility: "supported",
        limitations:
          "Database instance must have a database with the name `gitpod` in it.",
        policy: {
          text: "5.7",
          description: null,
        },
        supportedVersions: "5.7",
      },
      {
        name: "In-cluster MySQL database",
        availibility: "supported",
        limitations:
          "This can be installed automatically during set-up. Not recommended when using Gitpod on an ongoing basis - there is a risk of data loss if the cluster goes down.",
        policy: {
          text: "",
          description: null,
        },
        supportedVersions: "",
      },
    ],
  },
];

export const filterMatrixByRelevance = (relevance: string) =>
  relevance === "all"
    ? compatibilityMatrix
    : compatibilityMatrix.filter((matrix) =>
        matrix.relevance === "everyone" ? true : matrix.relevance === relevance
      );
