---
author: nancy-chauhan, Siddhant-K-code
date: Thursday, 1 September 2022 02:00:00 UTC
excerpt: This guide, will show you how you can set up AWS SSO & AWS ECR on Gitpod ephemeral workspace
slug: integrate-aws-cli-ecr
teaserImage: header.jpg
image: teaser.jpg
title: Integrate AWS Single Sign-On (SSO) and Amazon Elastic Container Registry (ECR) with Gitpod
---

<script context="module">
  export const prerender = true;
</script>

A common use case in organizations for developers, when working on Gitpod ephemeral environment, is the need to access various AWS services. For instance, sometimes developers need to pull or push images from or to [AWS ECR](https://aws.amazon.com/ecr/). These images can be private, so some authentication is required, usually [AWS SSO](https://docs.aws.amazon.com/singlesignon/latest/userguide/getting-started.html). AWS SSO is a cloud SSO service that makes it easy to centrally manage SSO access to multiple AWS accounts and enterprise applications.

In this guide, we will show you how you can set up AWS SSO & AWS ECR on Gitpod ephemeral workspace. In 3 simple steps, we will:

1. Install `aws-cli`
2. Setup `aws-sso`
3. Access `aws ecr`

All these steps would be automated. So you will always get a ready-to-use workspace with AWS CLI configured, including all the required secrets. This lets you work on many ephemeral workspaces at once frictionlessly as you will not have to install or configure the settings multiple times ✨

> **tl;dr;** You need to configure AWS secrets, add [this configuration shell script](https://github.com/gitpod-io/demo-aws-with-gitpod/blob/main/configure_aws_with_gitpod.sh) in your project & [this task](https://github.com/gitpod-io/demo-aws-with-gitpod/blob/main/.gitpod.yml#L15-L17) in your `.gitpod.yml` for ready-to-code Gitpod Workspace 🚀

# Overview

We will provide you with a setup that will provision AWS CLI and enable SSO when you open a new ephemeral Gitpod workspace. The flow diagram below describes how we have done it in our [demo-aws-with-gitpod](https://github.com/gitpod-io/demo-aws-with-gitpod) template repo in 3 steps:

<figure class="flex flex-col items-center text-center">
  <img src="/images/guides/integrate-aws-cli-ecr/flow-diagram.png" alt="Flow Diagram of Integration of AWS CLI & Gitpod" width="700"/>
  <figcaption>Flow Diagram of Integration of AWS CLI & Gitpod</figcaption>
</figure>

1. **Command Task execution**

As you open a new gitpod workspace, it gets configured through `.gitpod.yml file`, located at the root of your project. This initiates the [config script](https://github.com/gitpod-io/demo-aws-with-gitpod/blob/main/configure_aws_with_gitpod.sh).

2. **Installation**

The config script automates the whole process of installing CLI and ECR helper whenever you open a new Gitpod workspace.

3. **Configuration**

We will use some public configuration options from the SSO like AWS_SSO_REGION, AWS_SSO_URL etc. and add those as environment variables at [Gitpod settings](https://gitpod.io/variables). It lets you configure the persistent env variables into your workspace and use them in your code.

Let's understand the Installation, Configuration and Usage steps in detail.

# 💻 Installation

We will discuss various installation steps and show you a snippet of the configuration script. You can find these lines of code here in the [config script](https://github.com/gitpod-io/demo-aws-with-gitpod/blob/e61392ed478bd6cfea94fcb29e6318d6a52efb2e/configure_aws_with_gitpod.sh).

## Install AWS CLI on Gitpod

To Install [AWS CLI](https://aws.amazon.com/cli/) on Gitpod, you need to run a certain set of commands given in [AWS CLI docs](https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html). To automate it, we wrote it as a shell script so that you don't need to run those commands every time.

```sh
curl -fSsl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip"
unzip -qq awscliv2.zip
sudo ./aws/install --update
rm awscliv2.zip
```

In the above script, we download the AWS CLI zip, unzip it & execute that to install AWS CLI, following which we remove the zip. To automatically get credentials for Amazon ECR, we would need to install ECR-Credential Helper.

## Install ECR-Credential Helper on Gitpod

The following script installs the ECR-Credential Helper:

```sh
if [ ! -f /usr/local/bin/docker-credential-ecr-login ]; then
    echo "Installing ecr-login helper"
    OLD_DIR="$PWD"
    TMP_DIR="$(mktemp -d)"
    cd "${TMP_DIR}" || exit 1
    ECR_LATEST=$(curl -s https://api.github.com/repos/awslabs/amazon-ecr-credential-helper/releases/latest | jq -r ".tag_name")
    curl -o docker-credential-ecr-login -fSsL "https://amazon-ecr-credential-helper-releases.s3.us-east-2.amazonaws.com/${ECR_LATEST##*v}/linux-amd64/docker-credential-ecr-login"
    curl -o docker-credential-ecr-login.sha256 -fSsL "https://amazon-ecr-credential-helper-releases.s3.us-east-2.amazonaws.com/${ECR_LATEST##*v}/linux-amd64/docker-credential-ecr-login.sha256"
    sha256sum -c docker-credential-ecr-login.sha256
    sudo mv docker-credential-ecr-login /usr/local/bin/docker-credential-ecr-login
    sudo chmod +x /usr/local/bin/docker-credential-ecr-login
    cd "${OLD_DIR}" || exit 1
    rm -rf "${TMP_DIR}"
fi
```

## (Optional) Install AWS Session Manager Plugin

This is an optional step, but you should first install the Session Manager plugin on your local machine. This facilitates the AWS CLI to start and end sessions that connect you to your managed nodes.

```sh
if ! command -v session-manager-plugin; then
    echo "Installing AWS session manager plugin"

      TMP_DIR="$(mktemp -d)"
      cd "$TMP_DIR" || exit 1

      curl "https://s3.amazonaws.com/session-manager-downloads/plugin/latest/ubuntu_64bit/session-manager-plugin.deb" -o "session-manager-plugin.deb"
      sudo dpkg -i "session-manager-plugin.deb"

      cd "$OLD_DIR"
      rm -rf "$TMP_DIR"
fi
```

# 🧪 Configuration

## Configure AWS Environment Variables in Gitpod

AWS CLI requires some environment variables to be configured for executing AWS CLI commands. To avoid configuring this every time you spawn a new gitpod ephemeral environment, you can add it with the following Key-Value Map in [Gitpod Environment Variables settings](https://gitpod.io/variables):

`AWS_SSO_URL`
`AWS_SSO_REGION`
`AWS_ACCOUNT_ID`
`AWS_ROLE_NAME`
`AWS_REGION`

You can read more about Configuring the Environment Variables in our [documentation](https://www.gitpod.io/docs/configure/projects/environment-variables#using-the-account-settings)

## Configure AWS environment variable on Gitpod Workspace

To use configured env variables with aws cli, we need to set the variables in `home/gitpod/.aws/config` :

```sh
[[ -d /home/gitpod/.aws ]] || mkdir /home/gitpod/.aws
cat <<- AWSFILE > /home/gitpod/.aws/config
[default]
sso_start_url = ${AWS_SSO_URL}
sso_region = ${AWS_SSO_REGION}
sso_account_id = ${AWS_ACCOUNT_ID}
sso_role_name = ${AWS_ROLE_NAME}
region = ${AWS_REGION}
AWSFILE
```

## Configure Docker config to use ECR-Login

To use the ECR-Credential helper, we need to update the docker configs :

```sh
# if we don't have a .docker/config.json, create:

if [ ! -d /home/gitpod/.docker ]; then
    mkdir -p /home/gitpod/.docker && echo '{}' > /home/gitpod/.docker/config.json
elif [ ! -f /home/gitpod/.docker/config.json ]; then
    echo '{}' > /home/gitpod/.docker/config.json
fi
```

# 🚀 Usage

Now we have the whole [AWS Configuration shell script](https://github.com/gitpod-io/demo-aws-with-gitpod/blob/HEAD/configure_aws_with_gitpod.sh) ready. To execute this script at the start of your workspace, you need to add a [command task](https://www.gitpod.io/docs/configure/workspaces/tasks#:~:text=compiling%20source%20code.-,command,-%3A%20Use%20this%20to) in your [`.gitpod.yml`](https://www.gitpod.io/docs/references/gitpod-yml/#gitpodyml) file.

```yml
tasks:
  - name: Initialize & Configure AWS
    command: bash $GITPOD_REPO_ROOT/configure_aws_with_gitpod.sh
```

In [demo-aws-with-gitpod](https://github.com/gitpod-io/demo-aws-with-gitpod) template repo, `configure_aws_with_gitpod.sh` is in the root directory of the repository. You can replace it with your own script’s path in `command` task.

You can find the example [`.gitpod.yml`](https://github.com/gitpod-io/demo-aws-with-gitpod/blob/main/.gitpod.yml) file here for your reference.

> **Bonus Tip** ✨: You can save more time in starting your workspace by using Gitpod Prebuilds. It will prebuild your workspace & directly load that previously built container image to boot it up even faster.

Congratulations 🎉 Now, you are ready to use AWS CLI to access AWS ECR through SSO, to use private registries/images. You can also watch the following video, which thoroughly walks you through the whole process:

`youtube: JR3fhDYEwFg`

## 📖 Recommended Reading

### Gitpod

- [Build Projects in a Gitpod Ephemeral Dev Environment — The Ultimate Guide](https://www.gitpod.io/guides/guide-ephemeral-dev-environment-on-gitpod)
- [One workspace per task](https://www.gitpod.io/docs/introduction/learn-gitpod/one-workspace-per-task)
- [Environment variables](https://www.gitpod.io/docs/configure/projects/environment-variables#using-the-account-settings)
- [Custom Docker Image](https://www.gitpod.io/docs/configure/workspaces/workspace-image)
- [Config `.gitpod.yml`](https://www.gitpod.io/docs/references/gitpod-yml)

### AWS

- [Automatically gets credentials for Amazon ECR on docker push/docker pull](https://github.com/awslabs/amazon-ecr-credential-helper)
- [AWS CLI Command Reference // login](https://awscli.amazonaws.com/v2/documentation/api/latest/reference/sso/login.html)
- [Using Amazon ECR with the AWS CLI](https://docs.aws.amazon.com/AmazonECR/latest/userguide/getting-started-cli.html)
- [AWS Systems Manager Session Manager](https://docs.aws.amazon.com/systems-manager/latest/userguide/session-manager.html)

### Docker

- [Docker command line configuration files](https://docs.docker.com/engine/reference/commandline/cli/#configuration-files)
