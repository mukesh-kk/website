---
author: jacobparis
date: Wednesday, 8 June 2022 11:00:00 UTC
title: Automate .env files with Gitpod environment variables
slug: automate-env-files-with-gitpod-environment-variables
excerpt: Gitpod's environment variables can be used to securely persist small files between workspaces without committing them to source control. Use this feature to automate the storage and retrieval of a .env file when workspaces are created.
teaserImage: header.png
image: teaser.png
---

<script context="module">
  export const prerender = true;
</script>

Working with ephemeral developer environments has many advantages. When every new workspace starts from a clean slate, you never have to worry about uncommitted changes causing problems.

But sometimes you want uncommitted changes. Some things (configuration, secrets, etc) just shouldn't enter source control.

In a long-lived development environment, you can leave a `.env` file on the file system and it will survive the length of your project. When you integrate with a new service, you add their API keys to the file and be done with it.

With Gitpod, creating a `.env` file works wonderfully for precisely one workspace. You can close and reopen that workspace as many times as you want and your `.env` file will still be there, but those who embrace ephemeral development wholeheartedly and want a new workspace for each task will quickly notice they need to set everything up again.

So how do you persist a file between workspaces without committing it to source control? You store it securely in a database.

The most convenient database to use is Gitpod's workspace environment variable storage. You can encode your `.env` file as a base64 string, and use the `gp` tool to store it in a Gitpod environment variable. You can then automate restoring from the environment variable to keep the .env persisted between workspaces.

The Gitpod CLI is built-in: simply run `gp env DOTENV=value` and you will be able to read `$DOTENV` in every workspace. If you're ready to start persisting files, follow the instructions below.

> Note: The [maximum length of an environment variable value is 32k](https://github.com/gitpod-io/gitpod/blob/main/components/gitpod-protocol/src/protocol.ts#L239-L259), so if you have exceptionally large files to persist, consider an alternative solution, like [an enterprise secrets manager](https://www.jacobparis.com/blog/gitpod-env-1pass).

## Saving the .env file after changes

Base64 outputs text with a standard character set and no whitespace, so it's a good place to start. It does add line breaks though, which the `tr` text replacement utility can delete.

```sh
$ base64 .env

OVRMQVNfVVJEEE1vbmdvZGIrc3sJ2Oi8vbXJnZGV2OlRMfaSnl0T1dFUVNpefFKVmZ
dnVapdGkubW9uZ29hYi5uZXDvQdWRtaXQxdX2Rldj9ydZCDeVdyaQRlcz10cnVlJnc
Ck5FWFRfUFVCTElDX0dPT0dMvRV9QTEEGNfQVBJPUFJemFTeddfgURVREdaSll2WmV

# Remove line breaks
$ base64 .env | tr -d '\\n'

OVRMQVNfVVJEEE1vbmdvZGIrc3sJ2Oi8vbXJnZGV2OlRMfaSnl0T1dFUVNpefFKVmZdnVapdGkubW9uZ29hYi5uZXDvQdWRtaXQxdX2Rldj9ydZCDeVdyaQRlcz10cnVlJncCk5FWFRfUFVCTElDX0dPT0dMvRV9QTEEGNfQVBJPUFJemFTeddfgURVREdaSll2WmV
```

Gitpod's `gp` command line interface provides a quick way to get and set environment variables for the workspace.

Every time you make changes to the `.env` file, run this script to persist it across your Gitpod workspaces.

```sh
$ gp env -e DOTENV="$(base64 .env | tr -d '\\n')"
```

See how this script works at [ExplainShell](https://explainshell.com/explain?cmd=base64+.env+%7C+tr+-d+%27%5C%5Cn%27)

## Restoring your .env in new workspaces

Gitpod will create a terminal for each command in each task in the `.gitpod.yml` file, and those shells will have access to the environment variables set for your Gitpod account.

> Note: this only applies to command scripts. The init and before scripts by default do not load [user-specific environment variables](https://www.gitpod.io/docs/configure/projects/prebuilds#user-specific-environment-variables-in-prebuilds) for security reasons.

Decoding the `$DOTENV` variable and writing to a file is all that's required to restore it and have a populated `.env` waiting for you by the time your new workspace has loaded.

```sh
echo "${DOTENV}" | base64 -d > .env
```

## Improving the developer experience

The real power of Gitpod is in fully automating your developer environment, so while you can manually store and retrieve your `.env` file, you can achieve an even better developer experience by using Gitpod's Start Tasks to run the scripts for common user flows automatically.

When a new developer is onboarding to your repository, they won't have a `$DOTENV` saved from a previous workspace. You can commit a `.env.example` file into the codebase that provides reasonable defaults for new developers. As part of the startup task, copy that example file into a real `.env` file to save the developer from having to do it manually.

Another concern is that if a developer makes local changes to their `.env` but hasn't persisted it yet, a workspace restart (like after a timeout) shouldn't erase their changes. If there is already a `.env` file when a workspace starts, don't try to override it at all.

You can copy the following Gitpod Task directly into your `.gitpod.yml`. For more information, check out the [documentation for Start Tasks](https://www.gitpod.io/docs/configure/workspaces/tasks) on Gitpod

```yml
tasks:
  - name: Restore .env file
    command: |
      if [ -f .env ]; then
        # If this workspace already has a .env, don't override it
        # Local changes survive a workspace being opened and closed
        # but they will not persist between separate workspaces for the same repo
        echo "Found .env in workspace"
      else
        if [ -z "${DOTENV}" ]; then
          # There is no $DOTENV from a previous workspace
          # Default to the example .env
          echo "Setting example .env"
          cp .env.example .env
        else
          # After making changes to .env, run this line to persist it to $DOTENV
          #   gp env DOTENV="$(base64 .env | tr -d '\n')"
          #
          # Environment variables set this way are shared between all your workspaces for this repo
          # The lines below will read $DOTENV and print a .env file
          echo "Restoring .env from Gitpod"
          echo "${DOTENV}" | base64 -d > .env
        fi
      fi
```
