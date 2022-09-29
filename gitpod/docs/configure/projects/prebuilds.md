---
section: projects
title: Prebuilds
---

<script context="module">
  export const prerender = true;
</script>

# Prebuilds

Prebuilds reduce wait time, by installing dependencies or running builds **before** you start a new workspace.

`youtube: ZtlJ0PakUHQ`

## gitpod.yml

In the example below, the `init` task installs npm packages into the node_modules directory of the workspace. The `command` task runs 'npm start' on every workspace startup.

```yaml
tasks:
  - init: |
      npm install
  - command: |
      npm start
```

## Prebuilds are shared

Gitpod can trigger a prebuild whenever there is a commit to a repository. That prebuild will then be used for all new workspaces opened on that branch. This is ideal for working together on branches for testing or code reviews.

Prebuild users will see a message in their workspace terminal like this:

```txt
🤙 This task ran as a workspace prebuild
```

## Workspace directory only

Prebuilds save **only** the workspace directory. Other directories like the home directory are not saved by prebuilds.

To use global installs like 'npm install -g', we suggest using a custom Dockerfile or a `before` task, which runs before the init task, and runs again before the command task.

## Projects and prebuilds

[Projects](/docs/configure#projects) are a convenient way to manage prebuilds and workspaces for your repository.

To create a new project:

- Go to https://gitpod.io/new.
- If necessary, you will be prompted for additional authorization to install and configure the Gitpod GitHub app,
  so that Gitpod can watch your repositories and trigger prebuilds.
- Select the repository for your project.
- To share projects with other users, create the project in a team, otherwise use your own account.
- A sample `.gitpod.yml` with an init task will be included in your next workspace (unless the file already exists.)

#### Project environment variables

Environment variables which are defined in project settings will be visible in prebuilds. This is useful for prebuilds to access restricted services.

**WARNING**
Care should be taken with secrets in prebuilds. Do not save secrets in a way which could leak into workspaces. This especially true for public repositories.

## Configuring prebuilds manually.

#### GitHub

To enable prebuilt workspaces for a GitHub repository, follow these steps:

1. Go to the [Gitpod GitHub app](https://github.com/apps/gitpod-io) and click `Configure`
2. Choose the organization or account you wish to install the Gitpod app for, then click `Install`
3. You will be forwarded to Gitpod where you can confirm the installation

#### GitLab

To enable prebuilt workspaces for a GitLab repository, follow these steps:

1. Allow Gitpod to install repository webhooks, by granting `api` permissions in [Git Provider Integrations](https://gitpod.io/integrations)
2. Trigger a first prebuild manually, by prefixing the repository URL with `gitpod.io/#prebuild/` e.g. like so:

```
gitpod.io/#prebuild/https://gitlab.com/gitpod-io/gitpod
```

This will [start a prebuild](#manual-execution-of-prebuild), and also install a webhook that will trigger new Gitpod prebuilds for every new push to any of your branches to your repository.

If you want to trigger new Gitpod prebuilds for specific branches only, you can configure this in your GitLab [project settings](https://docs.gitlab.com/ee/user/project/integrations/webhooks.html#branch-filtering).

#### Bitbucket

To enable prebuilt workspaces for a Bitbucket repository, follow these steps:

1. Allow Gitpod to install repository webhooks, by granting `webhook` permissions in [Git Provider Integrations](https://gitpod.io/integrations)
2. Trigger a first prebuild manually, by prefixing the repository URL with `gitpod.io/#prebuild/` e.g. like so:

```
gitpod.io/#prebuild/https://bitbucket.org/gitpod-io/gitpod
```

This will [start a prebuild](#manual-execution-of-prebuild), and also install a webhook that will trigger new Gitpod prebuilds for every new push to any of your branches to your repository.

### Manual prebuilds

It is also possible to trigger a new prebuild manually using the `gitpod.io/#prebuild/` URL prefix:

```
https://gitpod.io/#prebuild/https://github.com/ORG/REPO
```

## Configure prebuilds

By default, Gitpod prepares prebuilt workspaces for all changes on the default branch and for pull/merge requests coming from the same repository.

> **Note**: Prebuilds are executed as the user who enabled them. This means that if you want to use
> prebuilds on a private repository, you must give Gitpod access to private repositories.

Prebuilds are configured in your repository's [`.gitpod.yml`](/docs/references/gitpod-yml) file with the following start tasks:

- `before`
- `init`

Note the absence of the `command` task. Since this task may potentially run indefinitely, e.g. if you start a dev server, Gitpod does not execute the `command` task during prebuilds.

Prebuilds have a timeout of 1 hour. If your `before` and `init` tasks combined exceed 1 hour, your prebuild will fail. Subscribe to [this issue](https://github.com/gitpod-io/gitpod/issues/6283) for updates when this limit will be lifted.

Each prebuild starts with a clean environment. In other words, Gitpod does not cache artifacts between prebuilds.

Incremental Prebuilds use an earlier, successful Prebuild as the base. This can reduce the duration of your Prebuilds significantly, especially if they normally take more than ten minutes to complete. Incremental Prebuilds can be found under the project settings in your Gitpod dashboard.

## GitHub-specific configuration

The `github` `prebuilds` section in the `.gitpod.yml` file configures when prebuilds are run.
By default, prebuilds are run on push to the default branch and for each pull request coming from the same repository.
Additionally, you can enable prebuilds for all branches (`branches`) and for pull requests from forks (`pullRequestsFromForks`).

> **Note:** The Gitpod GitHub app has no equivalent for GitLab or Bitbucket yet, so this entire section is GitHub-specific for now.

```yaml
github:
  prebuilds:
    # enable for the default branch (defaults to true)
    master: true
    # enable for all branches in this repo (defaults to false)
    branches: false
    # enable for pull requests coming from this repo (defaults to true)
    pullRequests: true
    # enable for pull requests coming from forks (defaults to false)
    pullRequestsFromForks: false
    # add a check to pull requests (defaults to true)
    addCheck: true
    # add a "Review in Gitpod" button as a comment to pull requests (defaults to false)
    addComment: false
    # add a "Review in Gitpod" button to the pull request's description (defaults to false)
    addBadge: false
```

#### Additional GitHub integration

Once the GitHub app is installed, Gitpod can add helpful annotations to your pull requests.

#### Checks

By default, Gitpod registers itself as a check to pull requests - much like a continuous integration system would do.

The default behavior, however, would not make the checks fail when the prebuild failed.
This can be enabled with the following snippet:

```yaml
github:
  prebuilds:
    addCheck: prevent-merge-on-error
```

You can disable this behaviour in the `.gitpod.yml` file in your default branch:

```yaml
github:
  prebuilds:
    addCheck: false
```

#### Comment

Gitpod can add a comment with an "Open in Gitpod" button to your pull requests.

You can enable this behaviour in the `.gitpod.yml` file in your default branch:

```yaml
github:
  prebuilds:
    addComment: true
```

#### Badge

Instead of adding a comment, Gitpod can also modify the description of a pull request to add the "Open in Gitpod" button.
This approach produces fewer GitHub notifications, but can also create a concurrent editing conflict when the bot and a user try to edit the description of a pull request at the same time.

You can enable this behaviour in the `.gitpod.yml` file in your default branch:

```yaml
github:
  prebuilds:
    addBadge: true
```

The `addComment` and `addBadge` behaviours are not mutually exclusive (i.e. enabling one does not disable the other).
If you don't want the comments to be added, disable them using `addComment: false`.

## User specific environment variables in prebuilds

It is not necessarily best practice to have user specific environment variables in a prebuild `init` block, but sometimes there are build time requirements that mean certain tokens need setting or files need creating. Environment variables defined within your Gitpod Variables preferences are not imported by default, but they can be accessed with the following command within a `before` or `init` block:

```yaml
tasks:
  - init: |
      eval $(command gp env -e)
      echo "Hello ${MY_VAR}"
```

After that, the available environment variables will be installed into the rest of you shell script and can be accessed normally.
