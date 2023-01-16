---
section: self-hosted/latest
subsection: installation-guides
title: TLS configuration for Gitpod Self-Hosted
---

<script context="module">
  export const prerender = true;
</script>

# TLS configuration for Gitpod Self-Hosted

> ⚠️ **Self-hosted as a product is no longer supported**
>
> The last official update of this product is the [November 2022 self-hosted release](https://www.gitpod.io/changelog/november-self-hosted-release). We no longer sell commercial self-hosted licenses. If you want to self-host Gitpod, you can still request our [free community license](https://www.gitpod.io/community-license). However, we no longer offer support or updates for it. If you are interested in an isolated, private installation of Gitpod, take a look at [Gitpod Dedicated](/dedicated).
> Read [our blog on Gitpod Dedicated](/blog/introducing-gitpod-dedicated) to learn why we made the decision to discontinue self-hosted.

To run your own Gitpod instance, you need a TLS certificate for your Gitpod domain. There are three options to provide these TLS certificates.

## Option 1: Cert-Manager

Configure cert-manager to issue these certificates (usually with a DNS-01 challenge and services like [Let's encrypt](https://letsencrypt.org/)). See the [installation guide](../installing-gitpod#prerequisites)) for more information.

![kots-tls-cert-manager](../../static/images/docs/self-hosted/kots-tls-cert-manager.png)

<p align="center"><em>TLS certificates configuration options during the installation process</em></p>

## Option 2: Self-signed by Gitpod

_We usually do not recommend this option for production usage._

Let Gitpod generate self-signed certificates for your installation. This option can be used in case your load balancer does the TLS termination or for testing settings. For the latter case, you need to add the custom [CA](https://en.wikipedia.org/wiki/Certificate_authority) to your browser to let it accept the self-signed certificate. Use this command to export the CA:

```
$ kubectl get secrets -n <namespace> ca-issuer-ca -o jsonpath='{.data.ca\.crt}' | base64 -d > ~/ca.crt
```

![kots-tls-self-signed](../../static/images/docs/self-hosted/kots-tls-self-signed.png)

## Option 3: Bring your own certificate

> ⚠️ **Limitation**
>
> Adding custom CA certificates is currently _not_ supported on **Google Kubernetes Engine (GKE)** because on GKE `containerd` does not support custom certificates.

Upload your own TLS certificate, key, and (optionally) CA certificate. When your TLS certificate is signed by a publicly accepted TLS authority, you just need to upload your certificate and key. In case it is a self-signed certificate (e.g. signed by a corporate CA), you also need to upload your CA.

![kots-tls-bring-own](../../static/images/docs/self-hosted/kots-tls-bring-own.png)
