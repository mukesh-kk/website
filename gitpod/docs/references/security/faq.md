---
section: security
title: Security FAQ
---

<script context="module">
  export const prerender = true;
</script>

# Security FAQ

## What type of data does Gitpod collect?

To provide you with a user account, Gitpod will be processing basic personal information (such as name, username, email) from your code repositories user account(Github, Gitlab or Bitbucket). Furthermore Gitpod will have access to code repositories authorised by you including all data it contains.

## Are Gitpod integrations with code repositories secure?

Access to code repositories is achieved via OAuth tokens. When granting Gitpod access to a repository, an authorization token will be generated covering the scope you have defined. It is possible to revoke and re-authorize anytime.

## Is my data and secrets in Gitpod secured?

All Workspace content as well as any environment remain encrypted at rest (via AES256) and in-transit (TLS 1.2). Be aware that you can start sharing your workspaces and snapshots too, this will make its content available to others.

## Is it reasonable to put Kubernetes cluster connection information on Gitpod?

Regardless of which secrets you will be putting into Gitpod, they will all be secured in the same manner so this is primarily a question of your overall risk appetite. When sharing a workspace or snapshots you want to make sure they are authorised to know this information.

## Are Gitpod workspaces perfectly isolated?

[Gitpod workspaces are Kubernetes pods](https://www.gitpod.io/blog/workspace-networking). Each workspace operates in their own set of Linux namespaces, so that they cannot interfere with each other. We have shared the details of this setup [publicly](https://www.youtube.com/watch?v=iYLCHQgj0fE)

## How is your Infrastructure secured?

Gitpod is 100% cloud based. Computing, Network and Storage resources are provided by Google’s comprehensively secure and compliant Cloud Platform (GCP). You can review Google’s security certifications and controls at https://cloud.google.com/security/compliance. Gitpod’s Cloud Infrastructure is subject to frequent security assessments such as pentestings, performed by an independent third-party.

## Can I restrict access to shared workspaces?

Users must have access to the underlying git repo to be able to open [snapshots](https://www.gitpod.io/docs/configure/workspaces/collaboration#sharing-snapshots) of a workspace. When sharing a running workspace, knowing the URL is sufficient to access the workspace.

## Can Gitpod Staff look into client code repositories?

For support purposes and with your consent, a selected group of Gitpod staff can look into the workspace content and therefore related code repositories to help with troubleshooting. Of course, this would only work with repositories Gitpod has been granted access to. This type of access is subject to logging and is continuously reviewed.

## Is Gitpod scanning Workspace for Source Code?

No, Gitpod does not scan Workspaces for source code.

## If we accidentally commit a secret in our Github repo and spin up a Gitpod instance containing that secret, is Gitpod performing any secret analysis and scrubbing?

We are not scanning the source code within workspaces for secrets.

## I think I have found a vulnerability, where do I report it?

We value feedback from Security Researchers around the globe. Please report any security issues or concerns via security@gitpod.io or https://www.gitpod.io/security/. The more details you can provide, the easier it will be for us to triage and fix the issue.

## Is Gitpod GDPR compliant?

Yes, Gitpod is GDPR compliant and by default only relies on basic personal information to provide you with an user account. Gitpod provides you with a Data Processing Agreement incorporating the standard contractual clauses for international data transfers. You can find more information within our [Trust Center](https://app.safebase.io/portal/71ccd717-aa2d-4a1e-942e-c768d37e9e0c/preview?product=default&itemName=legal&source=click)

## Is Gitpod SOC 2 or ISO 27001 compliant?

Gitpod is SOC 2 Type II compliant with annual audits being performed by an independent third-party, to assess the overall appropriateness of our security controls. You can request a copy of our report along with other security documentation inside our [Trust Center](https://app.safebase.io/portal/71ccd717-aa2d-4a1e-942e-c768d37e9e0c/preview?product=default) (NDA required).

## Is Gitpod HIPAA or PCI-DSS compliant?

Gitpod is not intended nor designed to process HIPPA or PCI DSS relevant data. Be sure to filter data to prevent it from being sent to our service to cope with compliance requirements.

## How does Gitpod Dedicated differentiate from gitpod.io?

In Gitpod Dedicated, you will be provided with your own entirely isolated deployment managed by Gitpod Staff.
