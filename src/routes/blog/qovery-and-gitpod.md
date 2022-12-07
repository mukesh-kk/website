---
author: evoxmusic, Albanetonnellier, nancy-chauhan
date: Tuesday, 22 November 2022 11:00:00 UTC
title: Gitpod x Qovery - Develop, Deploy and Run applications with Gitpod and Qovery
slug: qovery-and-gitpod
excerpt: Gitpod, integrated into the Qovery console, will work on the developer experience, helping to have a complete cloud development environment for the developers anywhere in no time. In this blog we will learn how can we develop and run applications using Qovery and Gitpod.
teaserImage: header.png
image: header.png
---

<script context="module">
  export const prerender = true;
</script>

As a developer, how can you increase your velocity to ship? And how can you test what you are about to ship in Production to avoid bad surprises?

That's where Gitpod and Qovery come to the rescue:

- [Gitpod](https://www.gitpod.io/) will focus on the developer experience, ensuring that individual developers and teams are productive enough and can ship fast.
- While [Qovery](https://www.qovery.com/) helps developers to be autonomous enough to ship in production and correctly manage their applications.

In this blog we will learn how can we develop and run applications using Qovery and Gitpod:

- [What is Gitpod](#what-is-gitpod)
- [What is Qovery](#what-is-qovery)
- [How Gitpod and Qovery Makes Sense Together](#how-gitpod-and-qovery-makes-sense-together)
- [Make a Hotfix with Qovery and Gitpod](#make-a-hotfix-with-qovery-and-gitpod)
- [Try a New Feature Before Pushing it to Production](#try-a-new-feature-before-pushing-it-to-production)
- [Example Scenario - Sample application on Qovery x Gitpod](#example-scenario---sample-application-on-qovery-x-gitpod)

# What is Gitpod?

Gitpod is an open-source remote development platform for remote development. It provides an automated setup with cloud-based, remote developer environments connected with a developer's [editing experience of choice](https://www.gitpod.io/docs/references/ides-and-editors), making developer experiences better. Gitpod's [Cloud Development Environments (CDEs)](https://www.gitpod.io/cde) help developers to be always ready-to-code from any device, from anywhere.

Rather than having a single static environment (like your local machine), Gitpod encourages you to codify your dev environment as code. With your project codified, you'll be able to spin up a new workspace, start coding and throw away the workspace when you're done. You can have multiple workspaces with different contexts open at once - one for your feature, one for a bug, or one for your code review directly in Gitpod.

# What is Qovery?

[Qovery](https://www.qovery.com/) is a platform delivering Environments as a Service in your Cloud, where you can build, deploy and test in production-like environments. Qovery turns app deployment and environment provisioning on AWS a breeze. Developers can instantly spin up production-like environments and start shipping in seconds.

Qovery introduced the concept of on-demand environments where dev teams can test code changes in isolation by generating Preview environments on every Pull Request.

A preview environment is as good as other deployment environments, e.g., Production, Staging, etc., because it is equipped with everything needed for proper testing in isolation. That includes infrastructure, updated products, integrations, databases, configuration, etc. A preview environment is better than traditional deployment environments because it is super easy to provision and de-provision a preview environment.

Perfectly integrated with the developer's workflows, the Qovery UI simplifies deployment, debugging, and monitoring from a unified interface. Qovery is pluggable and ready for whatever you may hold. You can grow your stack without re-tooling and disrupting your DevOps team.

# How Gitpod and Qovery Makes Sense Together

Gitpod, integrated into the Qovery console, will work on the developer experience, helping to have a complete cloud development environment for the developers anywhere in no time. On the other side, Qovery will help developer teams be autonomous enough to ship in production and test features in dynamic production-like environments. Let's see how it works behind the scenes and explore real-life examples.

## The Magic Behind it

Qovery is a product that integrates into your working environment, meaning that you can connect it directly to the git account of your choice; it will take the applications from those VCS providers. You can also note that it’s integrated in the same way with Gitpod as it’s working on Git, so when you make a change with Gitpod, Qovery detect the change and react to it. You can also integrate your CI/CD, Container Registry if you want to deploy an already build container image. There are several interfaces, such as a web interface, CLI, API and even a Terraform Provider. All the actions you will perform on those interfaces are applied to your Cloud Infrastructure as you connect your Cloud Provider account when registering in just 30 min.

<figure class="flex flex-col items-center text-center">
  <img src="/images/blog/qovery-and-gitpod/interfaces.png" alt="interfaces" width="600" />
</figure>

## Make a Hotfix with Qovery and Gitpod

Let's say you are a developer working in a production environment and need to change quickly because something went wrong! Here are the steps to follow:

1. The Gitpod integration on the [Qovery console](https://console.qovery.com/) will allow you to make changes by clicking on the "edit code" button in the interface.

<figure class="flex flex-col items-center text-center">
  <img src="/images/blog/qovery-and-gitpod/frontend-hotfix.png" alt="hotfix" width="600" />
</figure>

2. By clicking on this "edit code" button on one of your applications, you will be redirected to Gitpod, which will already be connected to your Git account. Thus, without leaving your browser or any installation needed, you can quickly change on Gitpod with all the correct dependencies loaded and the same complete environment.

3. To describe your workspace you can configure it through a `.gitpod.yml` file, located at the root of your project, written in YAML syntax. You can read more about it in [Gitpod Documentation](https://www.gitpod.io/docs/introduction/learn-gitpod/gitpod-yaml).

Here is the example:

```yaml
# Commands to start on workspace startup
tasks:
  - name: Setup & Build
    before: yarn global add express
    init: yarn install
    command: yarn build

# Ports to expose on workspace startup
ports:
  - port: 3000
    onOpen: open-preview
    name: Website
    description: Website Preview
```

3. After committing and pushing from Gitpod on your necessary changes, Qovery will automatically re-deploy the new version without any downtime. You can even head to the deployment logs on the Qovery interface to see what happens in real-time such as the rebuild.

## Try a New Feature Before Pushing it to Production

Now let’s say that you or someone from your team wants to try out a new feature or a change before pushing it into production! Here are the steps to follow:

1. You can use the [Preview Environment](https://www.qovery.com/preview-environments) feature from Qovery that you can turn on from your Environment Settings.

2. For every single pull request that you create for your application, a new environment will be spun up with all the dependencies so you will be able to test that feature. When you close the pull request or merge back, the environment will disappear, so you won’t pay for resources that you are no longer consuming.

3. Once the Preview Environment feature is activated, you can follow the same steps as for the first use case, where you click on the “edit button” that will redirect you to Gitpod, but this time, we are just going to create a new branch.

4. Once your new branch is created on the Gitpod browser interface, make the change wanted on your code, and then you can commit your branch.

<figure class="flex flex-col items-center text-center">
  <img src="/images/blog/qovery-and-gitpod/new-feature.png" alt="hotfix" width="300" />
</figure>

5. Going back to the Qovery interface, you can find the Git provider button that will redirect your repository, where you can create a merge request (also called a pull request, depending on your Git provider).

6. After creating your merge request, you will see that a new environment has been created on Qovery, which is a full-stack environment with Frontend, Backend, API Gateway. So you can test it and change it in a production-like environment without impacting your production or any other environments.

## Example Scenario - Sample application on Qovery x Gitpod

In this Demo, Nancy (Gitpod) and Romaric (Qovery), will show you how you can easily Develop, Deploy and Run applications on AWS with Gitpod and Qovery!

`youtube: QPXeCmbl2d0`

Whether you need to do a hotfix because you messed up something or want to try a new feature before pushing it to production, Gitpod and Qovery are here for you.
The power of Gitpod and Qovery combined makes managing the environment and development easy and straightforward. Don’t wait for one more second and improve your velocity and autonomy today!

If you have any questions about configuring and running your project, drop by [Gitpod’s community Discord](https://discord.com/invite/gitpod) server or [Qovery Discord Server](https://discord.gg/qovery). We would love to hear your feedback in the Community.
