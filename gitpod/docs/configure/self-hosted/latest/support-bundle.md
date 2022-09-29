---
section: self-hosted/latest
subsection: troubleshooting
title: Support Bundles
---

<script context="module">
  export const prerender = true;
</script>

# Generating a Support Bundle

Something is wrong with your Gitpod installation? This guide shows you how you can create a support bundle.

At first, you need to start the installation admin console. In a terminal with configured `kubectl` run the following command (`<namespace>` is the Kubernetes namespace your Gitpod installation has been installed to):

```shell
$ kubectl kots admin-console --namespace <namespace>
```

Open your favorite browser and go to `http://localhost:8800` (port `8800` is opened on your node on `localhost` only--you may want to forward the port to your workstation to access the admin console). Enter your password and click on “Troubleshoot” in the top menu. Click “Analyze Gitpod” to create a support bundle that contains relevant logs and configs.

![kots-troubleshoot](../../static/images/docs/self-hosted/kots-troubleshoot.png)

Creating the support bundle will take some while. Once it is ready, you can inspect the content. Nothing will be shared with us unless you have explicitly chosen to do so.

![kots-troubleshoot](../../static/images/docs/self-hosted/kots-support-bundle-analysis.png)
