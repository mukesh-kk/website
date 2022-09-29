---
section: self-hosted/latest
subsection: installation-guides
title: Local Preview of Gitpod Self-Hosted
---

<script context="module">
  export const prerender = true;
</script>

<script lang="ts">

  import BigPill from "$lib/components/big-pill.svelte";
  import Tooltip from "$lib/components/tooltip.svelte";
</script>

# How to Install the Local Preview of Gitpod Self-Hosted

| <!-- Our markdown parser does not support tables without a header --> | <!-- -->                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| --------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Status:                                                               | <BigPill text="beta" class="ml-1.5" />                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| Intended for:                                                         | The Local Preview allows you to experience Gitpod Self-Hosted on your local machine without having to set up a Kubernetes cluster. It is purely intended for testing purposes. Please see the [installation guides section](./installation-guides) for recommended sustainable installation methods. <!-- To Do : replace link to getting started with reference architectures once these are fully ready-->                                                                                                                                                                                          |
| Limitations:                                                          | - Performance is limited by the capabilities of your machine. Your experience is likely to be better when using the SaaS version ([gitpod.io](/docs/introduction/getting-started)) or when running on one of our [reference architectures](./reference-architecture) <br /> - Minimum of 4 cores and 6GB of ram required. **Macs with Apple Silicon (e.g. M1) are currently not supported.** See [the relevant issue](https://github.com/gitpod-io/gitpod/issues/11309) for more information <br /> - [Prebuilds](/docs/configure/projects/prebuilds) are not supported because they require webhooks |

The Local Preview of Gitpod Self-Hosted is the easiest way to try out Gitpod locally in situations where you cannot use the SaaS version ([gitpod.io](/docs/introduction/getting-started)) and cannot easily spin up a Kubernetes cluster to use the [Proof-of-Value Reference Architecture](./reference-architecture/proof-of-value). It allows you to try Gitpod Self-Hosted locally with minimal effort and resource requirements. As a result, this is **not intended for production** nor continuous usage. Please refer to the [installation guide](./installing-gitpod) for instructions on how to install Gitpod for continuous usage. <!-- To Do : replace link to getting started with reference architectures once these are fully ready-->

This install method runs a [K3s](https://k3s.io/) cluster inside a Docker container. Self-signed certificates are automatically created and a Gitpod instance using these certificates will be installed into the `k3s` cluster. See our [TLS](./advanced/tls) page for more information about Gitpod and certificates.

## 1. Running the Docker container

Run the following command to get the `local-preview` Docker container up and running:

```bash
docker run -p 443:443 --privileged --name gitpod -it --mount type=volume,source=gitpod,destination=/var/gitpod eu.gcr.io/gitpod-core-dev/build/local-preview
```

Unpacking the above command:

- `-p 443:443` to map the `443` container port to host.
- `--privileged` to be able to run docker (and hence `k3s`) inside the container. This is necessary.
- `--name gitpod` to set the name of the docker container for further access.
- `--rm` to delete the Docker container after stopping.
- `--mount type=volume,source=gitpod,destination=/var/gitpod` to create a volume called `gitpod`, and mounting it to the container.

> **Note:** By default, `preview.gitpod-self-hosted.com` is the DOMAIN to access Gitpod which routes to `127.0.0.1` localhost IP address. To use another host network IP Address, the `DOMAIN` environment can be set accordingly via an `-e` flag in the above command. This is useful to share access to the Gitpod Self-Hosted instance running on your machine within your local network. For Example, `192.168.0.42` Host Network IP would be `192-168-0-42.nip.io`, set by appending `-e DOMAIN=192-168-0-42.nip.io`.

## 2. Accessing Gitpod

> **Note:** It usually takes around 5 minutes to go from the `starting Gitpod` status to `Gitpod is running`. Among other things, this will depend on the speed of your internet connection. Once Gitpod is ready, it will look as follows:

![gitpod is ready](../../static/images/docs/self-hosted/local-preview-ready.png)

As this is a self-signed instance of Gitpod, the Gitpod root CA cert has to be imported into your browser manually to access the full functionality of Gitpod. The certificate can be retrieved by running the following:

```bash
docker cp gitpod:/var/gitpod/gitpod-ca.crt $HOME/gitpod-ca.crt
```

This certificate is saved at `$HOME/gitpod-ca.crt` and can then be loaded into your browser. Most browsers also require a restart before they can start to use the imported certificate. For instructions on how to load the certificate, choose your setup below:

<details>
  <summary  class="text-p-medium">Chrome on Windows</summary>

<div class="not-prose" style="position: relative; padding-bottom: 56.25%; height: 0;"><iframe src="https://www.loom.com/embed/1814061fbd9c4be7b18d8ae8919cabc6" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>
</details>
<details>
  <summary  class="text-p-medium">Edge on Windows</summary>

<div class="not-prose" style="position: relative; padding-bottom: 56.25%; height: 0;"><iframe src="https://www.loom.com/embed/ee3051ac367140c3a2f60cd4e15a0192" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>

</details>

<details>
  <summary  class="text-p-medium">Firefox on Windows</summary>

<div class="not-prose" style="position: relative; padding-bottom: 56.25%; height: 0;"><iframe src="https://www.loom.com/embed/513796d28a2647dba2cdd8f9312d4f98" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>

</details>

<details>
  <summary  class="text-p-medium">Google Chrome on MacOS</summary>

<div class="not-prose" style="position: relative; padding-bottom: 56.25%; height: 0;"><iframe src="https://www.loom.com/embed/39e870e6f91c4f5bad1550f3647fed29" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>

</details>

<details >
  <summary  class="text-p-medium">Mozilla Firefox on MacOS</summary>

<div class="not-prose" style="position: relative; padding-bottom: 56.25%; height: 0;"><iframe src="https://www.loom.com/embed/2ce25cf844744359ae2b14263d9c2fb0" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>

</details>

<br/>

Once the certificate is loaded and Gitpod is ready, the URL to access the Gitpod instance would be `https://preview.gitpod-self-hosted.com` unless the `DOMAIN` environment is overridden in which case the same has to be used.

You should be greeted by the following screen:

![welcome screen](../../static/images/docs/self-hosted/welcome-screen.png)

You will then be asked to configure a git integration:

![git integration setup](../../static/images/docs/self-hosted/git-integration-setup.png)

This git integration will also serve as the way that you and your users get authenticated against your Gitpod installation. You can find out more in the [Integrations](/docs/integrations) section.

> **Important:** Public (SaaS) Source Control Management Systems (SCMs) (i.e. [GitLab.com](http://Gitlab.com), [GitHub.com](http://github.com/) and [Bitbucket.org](http://Bitbucket.org)) are **not** integrated by default with a Self-Hosted Gitpod instance because OAuth apps are tied to domains. Therefore, these public SCMs need to be integrated manually with an OAuth application you specifically create for your domain. This is done similarly to how it is done for the private/self-hosted versions of each SCM. As such their respective guides also apply here:
>
> - Follow [these](/docs/configure/authentication/gitlab#registering-a-self-hosted-gitlab-installation) steps to integrate [`GitLab.com`](https://gitlab.com/) with your self-hosted Gitpod instance. You will need to enter `gitlab.com` as the `Provider Host Name` in the New Git Integration Modal.
> - Follow [these](/docs/configure/authentication/github-enterprise) steps to integrate [`GitHub.com`](http://github.com) with your self-hosted Gitpod instance. You will need to enter `github.com` as the `Provider Host Name` in the New Git Integration Modal.
> - Follow [these](/docs/configure/authentication/bitbucket-server) steps to integrate [`Bitbucket.org`](https://bitbucket.org/) with your self-hosted Gitpod instance. Select `Bitbucket` as the `Provider Type` in the New Git Integration Modal. For bitbucket.org this requires configuring an "OAuth consumer" on a "workspace". This is slightly different from the documented Bitbucket Server integration. See [gitpod PR #9894](https://github.com/gitpod-io/gitpod/pull/9894#pullrequestreview-969013833) for an example.

> **Note:** Your first workspace start can take a bit of time because the workspace image first needs to be built and then downloaded. Subsequent workspace starts should be much quicker.

Once you are all set up, you can visit the [getting started with Gitpod page](/docs/introduction/getting-started) to start learning about using Gitpod.
