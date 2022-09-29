---
section: projects
title: Projects
---

<script context="module">
  export const prerender = true;
</script>

# Projects

> {title} is currently in [Beta](/docs/help/public-roadmap/release-cycle) · [Send feedback](https://github.com/gitpod-io/gitpod/issues/5095).

Projects are the connection between Gitpod and a remote git repository.

You can create a project on your personal account or on any of the teams you are a member of.

On GitHub, the connection is established through the [GitHub App](https://github.com/marketplace/gitpod-io) while on GitLab and Bitbucket, the connection exists through an active webhook.

Projects have a static URL based on the team project name, for example:

`https://gitpod.io/t/<team>/<project>`

### View projects

Project cards include information like repository name, repository URL, quick links to project branches and prebuilds as well as branch and timestamp information for the latest prebuild.

### Add a new project

To add a new project:

1. Click on the _New Project_ button on the Projects page.
2. You can select a provider where the repository exists. By default, the wizard will default to the first provider you authorized with when you signed up with Gitpod.
3. You will need to install the GitHub app or have proper permissions to install a webhook for GitLab and Bitbucket before selecting a repository.
4. If you are trying to add a project from your personal account, you'll be prompted to optionally create a team for the new project. By default, the wizard will automatically associate a project to a team if you initiated the process from the team page.
5. Last but not least, you'll be redirected to the configuration page of the new project.

### Configure a project

Once you add a project, Gitpod tries to automatically detect any project configuration by looking for a `.gitpod.yml` file inside the repository. If no such file exists, Gitpod tries to guess the project type and build configuration to suggest a `.gitpod.yml` boilerplate.

If Gitpod can't detect the project type based on the source code of the project, you get a commented `.gitpod.yml` that you need to adjust before running a successful prebuild.

Once you are happy with the configuration, you can try to execute a prebuild and then open a new workspace.

The configuration will be stored in a Gitpod database together with other project information until you decide to persist the changes in the repository by creating a `.gitpod.yml` file at the root of your project. A `.gitpod.yml` file in your project takes precedence over configuration stored in the Gitpod database.

### Remove a project

You can remove a project by using the more actions button while hovering over a project card.
