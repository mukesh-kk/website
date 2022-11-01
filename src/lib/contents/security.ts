import type { Action } from "$lib/types/action";

import type { Card } from "$lib/types/card";

export const secureParagraphs = [
  "Storing copies of your source code locally on countless unsecured devices and networks is a bad practice. At the same time, it has become a reality for many organisations to enable their employees to work remotely with BYOD policies.",
  "With Gitpod, your source code is safely stored in the cloud and never stored locally. Either on the carbon-neutral Google Cloud Platform with our SaaS solution or on your own cloud infrastructure with Gitpod Self-Hosted. Our native integrations with GitHub, GitLab and Bitbucket create a single access point to your intellectual property, no matter where your developers are and what device they use for it.",
  "No packages or dependencies are downloaded to users' devices. Gitpod developer environments run in the cloud and are short-lived, protecting your local machines and other corporate resources from malicious attacks through the execution of arbitrary code.",
];

export const programFeatures: Card[] = [
  {
    title: "Compliance",
    text: "<p>Gitpod maintains compliance with the European General Data Protection Regulation (GDPR) and provides users with the ability to access and control the information that is collected about them. To clients we provide a Data Processing Agreement (DPA) incorporating the Standard Contractual Clauses (SCC) for International Data Transfer. </p><p> Gitpod is built with security in mind and we continuously invest in security best practices. We are conducting annual SOC 2 Type II audits to assess the appropriateness of our controls. You can request a copy of our SOC 2 report under a Non-Disclosure Agreement (NDA).</p>",
    icon: {
      src: "/svg/security/compliance.svg",
    },
    transform: "scale(1.5) translateY(.2rem)",
  },
  {
    title: "Environment Isolation",
    text: '<p>Each Gitpod workspace or prebuild runs on a secured single-use container providing fast startup times without compromising on security</p><p>We create separate user, PID, mount and network namespaces for each Gitpod workspace, and establish an unprivileged node user as root within that user namespace. More details on the technical approach can be found <a href="https://www.youtube.com/watch?v=iYLCHQgj0fE" target="_blank" rel="noreferrer">in this talk</a> from our Head of Engineering as well as in this <a href="https://kinvolk.io/blog/2020/12/improving-kubernetes-and-container-security-with-user-namespaces/"  rel="noreferrer" target="_blank">blog post</a> from the container security experts at Kinvolk who stress-tested our namespace layering implementation.</p>',
    icon: {
      src: "/svg/icons/secure.svg",
      alt: "Chat",
    },
    transform: "scale(.8)",
  },
  {
    title: "Open source",
    text: '<p>Built-in the open, our source code and how Gitpod is developed are publicly available for review by everyone. Our security posture, disclosure policy and speed in vulnerability handling is highlighted in the following <a href="https://about.gitlab.com/blog/2021/07/08/two-bugs-and-a-quick-fix-in-gitpod/" rel="noreferrer" target="_blank">blog post</a> from the security research team at GitLab.</p><p>In addition to this, we acknowledge the importance of giving back to the community and have taken steps to support the software supply chain of Gitpod and our customers through the creation of a monetary fund for supporting open-source maintainers.</p>',
    icon: {
      src: "/svg/icons/team.svg",
      alt: "Open source",
    },
  },
  {
    title: "Authentication and Authorization",
    text: "<p>Gitpod uses your Git provider's SSO and, by default, all workspaces connections are private and authenticated, making them accessible only by the creator.</p><p>Prebuild logs are readable by all members of the corresponding team and no one else.</p>",
    icon: {
      src: "/svg/icons/lock.svg",
      alt: "Authentication and Authorization",
    },
  },
  {
    title: "Encryption",
    text: "<p>All data, including workspace backups and environment variables, is encrypted at rest using AES256; and all connections to the Gitpod app, website, workspaces and workspaces' endpoints are encrypted in transit (TLS).</p>",
    icon: {
      src: "/svg/icons/file.svg",
    },
  },
  {
    title: "Provenance",
    text: "<p> Gitpod generates SLSA level 1 compliant provenance. Starting with this level, build systems are required to keep a record of their involvement, which sources went into the build process, and which process was used. All this data is recorded using in-toto attestations and published alongside the actual build artifacts.</p>",
    icon: {
      src: "/svg/security/provenance.svg",
    },
    transform: "scale(1.5) translateY(.2rem)",
  },
];

export const thanksAction: Action = {
  title: "Thanks",
  description:
    "Big thanks to the following people who responsibly disclosed their security findings.",
  link: {
    href: "/security/thanks",
    text: "View contributors",
  },
};

export const reportAction: Action = {
  title: "Security Vulnerability Disclosure Policy",
  description:
    "We welcome feedback from security researchers and the general public to help improve our security.",
  link: {
    href: "/security/report",
    text: "View report process",
  },
};
export const assessmentAction: Action = {
  title: "View our Security Self-Assessment",
  description:
    "You can find our CAIQ self-asssessment inside the Cloud Security Alliance STAR Registry. A framework dedicated to providing an industry-accepted way of transperency around cloud security controls.",
  link: {
    href: "https://cloudsecurityalliance.org/star/registry/gitpod-gmbh",
    text: "View our Self-Assessment",
  },
};
