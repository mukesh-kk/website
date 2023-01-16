---
author: michaelaring
date: Thursday, 22 Dec 2022 16:00:00 UTC
excerpt: CDEs like Gitpod enable efficient container development on Apple M1. If you use an ARM-based device like an M1 or M2 Mac, you can move the workload of your applications to run in an x86-based Linux container in the cloud.
slug: better-container-development-on-apple-m1-macbooks-with-gitpod
teaserImage: teaser.webp
image: teaser.webp
title: Better container development on Apple M1 Macbooks with Gitpod
---

<script context="module">
  export const prerender = true;
</script>

<script>
  import LinkButton from "$lib/components/ui-library/link-button/link-button.svelte"
</script>

**TL;DR**

- Apple M1 and M2 are not compatible with a lot of old and specialized software
- Existing workarounds like Rosetta or Docker Desktop aren’t optimized for all software written for x86-based hardware
- Gitpod moves the workload to a Linux container in the cloud and creates a uniform developer experience for everyone on the team independent of their hardware

Apple’s introduction of M1 system-on-a-chip (SoC) processors in late 2020 marked a shift away from traditional x86 processors, and a step towards an ARM architecture across their devices. The key benefits of the M1 are high performance, energy efficiency, and importantly, the same CPU architecture type of their iPad and iPhone devices. Starting at [a thousand dollars per machine](https://www.apple.com/macbook-air-m1/specs/), developers get computers with 3.5x improved CPU performance and 2x improved battery life over their old MacBooks running on Intel’s architecture.

Unfortunately, the difference in CPU architectures can lead to unexpected bugs in libraries originally written for x86-64.

The M1 is based on [ARM architecture](https://en.wikipedia.org/wiki/AArch64), which is different from the x86 architecture used in most personal computers and servers. This means that the M1 is not natively compatible with all software that is available for x86 devices. Although Apple is working towards making a wider range of software available for M1 devices, developers frequently face compatibility issues.

In fact, the Apple M1 compatibility problem in container development even sparked the creation of a dedicated website: [Is Apple Silicon ready?](https://isapplesiliconready.com/)

## Existing workarounds

[Rosetta](https://developer.apple.com/documentation/virtualization/running_intel_binaries_in_linux_vms_with_rosetta) is a virtualization layer provided by Apple to translate the x86-64 instructions to ARM-compatible instructions. It makes applications require more resources and run more slowly. An alternative, Docker Desktop on Mac M1 is considered a [“best-effort” solution](https://docs.docker.com/desktop/troubleshoot/known-issues/) that has to emulate Intel images for programs that don’t support ARM architecture. This can cause the program to break, run more slowly, and consume more resources.

As an example, existing containers written for the x86 CPU architecture can be built using [QEMU and Docker buildx](https://www.docker.com/blog/multi-arch-images/), allowing you to build containers for multiple platforms in a single command.

This comes with a speed tradeoff during build processes. Some organizations find the speed worth it, and others set up [dedicated systems for build processes on native architecture](https://docs.docker.com/engine/reference/commandline/buildx_create/#driver-opt).

If you use an ARM-based device like an M1 or M2 Mac, you can move the working load of your applications to run in an x86-based Linux container in the cloud with Gitpod.

## CDEs help with developing x86-64 software on Mac

Cloud development environments like Gitpod offer a robust solution to do container development for x86-64 software on Apple M1. Gitpod enables you to use any Linux-based software, CLIs, or developer tools to use in your daily routine with more power and without hardware limitations. The setup cost is minimal as new users can start from any Git repository at the click of a button. Additionally, using Gitpod eliminates the need to pay for a Docker Desktop license.

> “CDEs are like perfectly configured, high-powered developer laptops that you can use and discard as easily as sticky notes. One perfect laptop for every project you work on, so you can say goodbye to dependency collision issues between unrelated projects.
>
> Never again stress over updating your operating system, only to spend the next three days figuring out why iconv won't link properly anymore or spend hours tracking down why that one header file can't be found. Less time on StackOverflow means more time creating awesome stuff.
>
> Need to work on that project from five years ago? What do you think the probability is that your dev environment is still compatible? Exactly. CDEs make working on old stuff a breeze.”
>
> ~ [Tom Preston-Werner](https://twitter.com/mojombo/status/1588263791598325761)

Using a CDE like Gitpod for software development, the laptop layer is abstracted away and every engineer gets access to a standardized development environment. This is most relevant to engineering teams that use different types of computers. Regardless of whether your team runs Mac with Intel, Mac with ARM, Linux, or Windows machines, everyone will get a uniform developer experience. The CDE does not dictate the choice of the editor and other developer tools, however. Running Gitpod, engineers can continue to use their local VS Code or JetBrains IDE but their code runs in a [CDE](/cde) in the cloud.

If you encounter M1 and M2 compatibility issues in your engineering org, [contact us](/contact/sales) to learn about our enterprise solutions. If you want to get a better idea of how a CDE works, spin up a Gitpod workspace from any git repository just now.

<LinkButton href="https://gitpod.io/login" variant="primary" size="large">Get started for free</LinkButton>
