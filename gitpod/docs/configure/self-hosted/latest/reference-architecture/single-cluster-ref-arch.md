---
section: self-hosted/latest
subsection: installation-guides
title: "Single-Cluster Reference Architecture"
---

<script context="module">
  export const prerender = true;
</script>

<script lang="ts">

  import Overview from "./_chunks/overview.md";
  import Preparations from "./_chunks/preparations.md";
  import Cluster from "./_chunks/cluster.md";
  import Networking from "./_chunks/networking.md";
  import Registry from "./_chunks/registry.md";
  import Database from "./_chunks/database.md";
  import Storage from "./_chunks/storage.md";
  import Install from "./_chunks/install.md";
  import BigPill from "$lib/components/big-pill.svelte";
  import Tooltip from "$lib/components/tooltip.svelte";
</script>

# Single-Cluster Reference Architecture for Production Purposes

|                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |                                                                                                                                                                                                                                                                                                                                                                                                                             |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Status:                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | <BigPill text="alpha" class="ml-1.5" />                                                                                                                                                                                                                                                                                                                                                                                     |
| Intended for:                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | Continous usage of Gitpod at a company-wide scale in a reliable way by leveraging popular cloud provider services such as S3 and RDS.                                                                                                                                                                                                                                                                                       |
| Limitations:                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | - This is bound to a single cluster. Deploying in several regions currently requires setting up several Gitpod installations <br /> - Creates external dependencies for Gitpod componenents (object storage, registry, database) <br /> - This is not highly available and requires downtime to upgrade (high availability requires a governed workspace cluster, which is beyond the scope of this reference architecture) |
| Terraform: <Tooltip title="These terraform configurations enable you to create the architecture described in <br /> this document in an automated way. We use these scripts internally to test new <br />releases against this architecture. They should be seen as examples that you can <br /> use to create your own environment."/>                                                                                                                                                                | - [Example Terraform configuration for GCP](https://github.com/gitpod-io/gitpod/tree/main/install/infra/single-cluster/gcp) <br /> - [Example Terraform configuration for AWS](https://github.com/gitpod-io/gitpod/tree/main/install/infra/single-cluster/aws)                                                                                                                                                              |
| Cost Estimates: <Tooltip title="These cost estimates do not include egress. However, we typically see egress cost to be an <br />additional 15% on top of the estimates here.  These estimates are just examples, <br /> the exact cost will depend on your set-up and usage profile - your cost <em>will</em> deviate.  <br />With  the configuration in these estimates, you are able to run 36 concurrent basic <br />  workspaces - assuming the same density as currently used in Gitpod SaaS."/> | High-level cost estimates\*: <br /> - [GCP](https://cloudpricingcalculator.appspot.com#!?id=53d776be-60fa-4fe9-a64b-ae4c80e74645) <br /> - [AWS](https://calculator.aws/#/estimate?id=6df1417288724042faf49eed70fb8ea0f6e80c13)                                                                                                                                                                                             |

This guide describes a single-cluster reference architecture for Gitpod aimed at production environments: continuous deployments of Gitpod used in anger by your engineers. It consists of a Kubernetes cluster, cert-manager, external MySQL database, external OCI image registry, and external object storage. It includes instructions on how to set up this reference architecture on the officially supported cloud providers.

This reference architecture can be used as a blueprint for your Gitpod installation: Start with this reference architecture and adapt it to your needs. The reference architecture as described in this guide is what Gitpod supports, and is used to test against every self-hosted Gitpod release.

To use Gitpod, you also need a Git source code management system (SCM) like GitLab, GitHub, or Bitbucket. You will find the supported SCMs in the [product compatibility matrix](/docs/references/compatibility?admin) your own SCM is beyond the scope of this guide. However, you can simply use the cloud versions of GitLab, GitHub, or Bitbucket as well as the possible existing installation in your corporate network.

## Overview

<Overview />

## Cloud Provider Preparations

<Preparations />

## Kubernetes Cluster

<Cluster />

## Networking

<Networking />

## Object Storage

<Storage />

## OCI Image Registry

<Registry />

## Database

<Database />

## Install Gitpod

<Install />
