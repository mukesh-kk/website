---
author: securitymirco
date: Thursday, 27 Oct 2022 11:00:00 UTC
excerpt: We are delighted to announce that Gitpod is officially SOC 2 Type II compliant effective today! 🚀
image: teaser.webp
slug: gitpod-is-soc-2-type-ii-compliant
teaserImage: teaser.webp
title: Gitpod is SOC 2 Type II compliant
---

<script context="module">
  export const prerender = true;
</script>

We are delighted to announce that Gitpod is officially SOC 2 Type II compliant effective today 🥳. From the very beginning this has been a team effort. It involves every part of our organization, which is committed to continuously improve our security posture by designing, implementing and maintaining appropriate controls.

Interested in the details? 🕵️‍♂️ You can request a copy of our report by submitting our [contact form](https://www.gitpod.io/contact/sales) and signing a non-disclosure agreement.

## What was SOC 2 again?

SOC 2 is the “golden standard” of security frameworks based on the [Trust Services Criteria](https://us.aicpa.org/content/dam/aicpa/interestareas/frc/assuranceadvisoryservices/downloadabledocuments/trust-services-criteria.pdf) maintained by the [American Institute of Certified Public Accountants (AICPA)](https://www.aicpa.org/). It defines criteria for managing customer data and is well-recognized among companies across the globe 🌍. For many, SOC 2 compliance is the requirement before considering a new vendor.

SOC 2 shares similarities to [ISO 27001](https://www.iso.org/isoiec-27001-information-security.html), and comes with a top-down approach to implement security policies/technical controls that cover aspects of encryption, information handling, vulnerability and risk management as well as incident response, and business continuity.

Type I audits focus on one specific point in time while Type II audits capture a period of 6-12 months while also considering the effectiveness of controls. We skipped Type I in favor of a Type II as we know this would provide better assurance to you about our security program. 🚀

## Gitpod Security Program

We acknowledge the relevance of providing a secure product and hence go beyond the scope of SOC 2 in protecting customer data and strive to improve everyday. In the following we want to highlight some key-aspects of our security program:

👀 Gitpod is Open Source - ensuring [more transparency](https://www.gitpod.io/blog/opensource) and eyes on the code to spot issues

☁️ Gitpod is 100% cloud based - storage, computing resources and physical security measures are provided by the [Google Cloud Platform (GCP)](https://cloud.google.com/security/compliance)

📦 Gitpod workspaces are isolated - each workspace operates in their own set of Linux namespaces, so that they cannot interfere with each other

🧰 Gitpod integrates with best-in-breed solutions such as [Tailscale](https://tailscale.com/) - to provide the best possible user experience and [secured access to remote development environments](https://www.gitpod.io/blog/tailscale)

🔑 Gitpod is passwordless - authentication to Gitpod is established via OAuth with code repositories like GitHub, GitLab and Bitbucket

🔒 Data is encrypted - during transit (TLS 1.2 or above) and at rest (AES 256)

✔️ Artifact provenance - Gitpod artifacts produce [SLSA Level 1 compliant provenance](https://www.gitpod.io/blog/securing-the-software-supply-chain-at-gitpod-with-slsa) allowing you to understand what went into our builds

📢 Vulnerability Disclosure - we encourage feedback from Security Researches to help improve our security https://www.gitpod.io/security/report

👮‍♂️ Security Governance - we continuously monitor our environment to detect and respond to emerging threats

## Last but not least

Want to find out more? Visit our [Security Website](https://www.gitpod.io/security) or [reach out to us](https://www.gitpod.io/contact) anytime. We are thrilled for what comes next in an ever evolving landscape 🚀
