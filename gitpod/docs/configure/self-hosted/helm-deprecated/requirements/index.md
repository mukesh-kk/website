---
section: self-hosted/helm-deprecated
title: Installation requirements for Gitpod Self-Hosted
---

<script context="module">
  export const prerender = true;
</script>

# Installation requirements for Gitpod Self-Hosted

> ⚠️ **Deprecated Content**
>
> The content of this page assumes you are using Helm, which is now deprecated. Please use the [Installer](../latest) instead.

This page details the software and hardware requirements for installing Gitpod Self-Hosted on your own infrastructure.

## Supported Kubernetes distributions

Gitpod Self-Hosted runs well on:

- Amazon Elastic Kubernetes Service
- Google Kubernetes Engine
- K3s
- Microsoft Azure Kubernetes Service

## Incompatible Kubernetes distributions

These platforms do not currently work with Gitpod Self-Hosted but we would like to support them in the future. Gitpod is an open-source project, maybe you could contribute the required changes to help get them working sooner?

- [Red Hat® OpenShift®](https://github.com/gitpod-io/gitpod/issues/5409)
- [Rancher Kubernetes Engine (RKE)](https://github.com/gitpod-io/gitpod/issues/5410)

If you are considering purchasing a commercial license for Gitpod Self-Hosted and need one of the above platforms then please [contact us](/contact/sales) to start discussions about making support for them happen sooner.

## Minimum Kubernetes requirements

We strongly recommend deploying a dedicated kubernetes cluster just for Gitpod Self-Hosted.

Here are the minimum requirements:

- Either Ubuntu 18.04 with ≥ v5.4 kernel or Ubuntu 20.04 with ≥ v5.4 kernel.
- Calico for the networking overlay and network policy.
- Kubernetes ≥ 1.18.
- containerd ≥ 1.2.
- helm ≥ 3.6.

## Minimum compute resources

If you want to run Gitpod Self-Hosted at home we recommend at minimum 2vCPU's and 8GB of memory. For a better experience we recommend at least 4vCPUs and 16GB RAM for workspace nodes. For cost efficiency, we recommend enabling cluster-autoscaling when running on a commercial cloud provider.

## Runtime requirements

### DNS

Gitpod requires a domain (or sub-domain on a domain) that is resolvable by your name servers. As Gitpod launches services and workspaces on additional subdomains it also needs two wildcard domains.

For example:

```
your-domain.com
*.your-domain.com
*.ws.your-domain.com
```

or

```
gitpod.your-domain.com
*.gitpod.your-domain.com
*.ws.gitpod.your-domain.com
```

### Ingress

- Gitpod is designed to serve traffic directly to your local network or internet.
- Wrapping Gitpod Self-Hosted behind proxies such as nginx or configurations where URLs are rewritten are not supported.

### SSL

- Gitpod requires trusted HTTPS certificates. While there is no hard requirement on any certificate authority, we recommend using an [ACME certificate](https://caddyserver.com/docs/automatic-https#acme-challenges) issuer (such as [ZeroSSL](https://zerossl.com) or [LetsEncrypt](https://letsencrypt.org)) to automatically renew and install certificates as we do for [gitpod.io](https://gitpod.io).
- Installation of Gitpod with SSL certificates signed with your own CA are not currently supported. This scenario is desired and we would welcome help getting [this community pull-request](https://github.com/gitpod-io/gitpod/pull/2984) merged.
- The HTTPS certificates for your domain must include `your-domain.com`, `*.your-domain.com` and `*.ws.your-domain.com`. Beware that wildcard certificates are valid for one level only (i.e. `*.a.com` is not valid for `c.b.a.com`)

### Storage

- Either Google Cloud Storage or Amazon S3 or MinIO Storage.

### Database

- Gitpod uses a MySQL database to store user data.
- By default Gitpod ships with a MySQL database built-in and data is stored using a Kubernetes PersistentVolume.
- For production settings, we recommend operating your own MySQL database (version v5.7 or newer).

## Supported web browsers

Gitpod Self-Hosted works with the following browsers:

- Mozilla Firefox
- Google Chrome
- Apple Safari (iPad OS and Desktop)
- Microsoft Edge (Chromium)
