---
section: projects
title: Projects
---

<script context="module">
  export const prerender = true;
</script>

# Projects

Projects live under a Gitpod team. They connect Gitpod to a git repository. A Gitpod project can only have one git repository, and a git repository can only belong to one project.

A project is required in order to trigger [prebuilds](/docs/configure/projects/prebuilds) on a repository. Team members use the project to configure and view prebuilds.

With [team billing](/docs/configure/billing#configure-team-billing), all project usage such as workspaces and prebuilds, may be billed to the team.

Projects have a static URL based on the team and project name, for example:

`https://gitpod.io/t/<team>/<project>`

### View projects

The Projects page for a team shows a card for each project.

Cards show the name, repository URL, quick links to project branches and prebuilds, and the branch and timestamp of the latest prebuild.

### Add a new project

To add a new project, click on _New Project_ on the Projects page for the team, and select a repository from the list.

The list will show repositories from one of your git providers. Select a different provider if necessary. You may also be prompted to configure our [GitHub app](/docs/configure/authentication/github#authorizing-github-webhooks), the first time a project is created for a GitHub account. The new project will be associated with the current team selected in the dashboard.

### Configure a project

Team members can configure Prebuilds, and set the workspace class used for project workspaces, in project settings.

![Project Settings](../../../static/images/docs/project-settings.png)

### Remove a project

You can remove a project using the "Remove project" action from a project card.


## FAQs

### [New Project page is stuck at fetching repositories](https://discord.com/channels/816244985187008514/1056255866791272488)
<!-- DISCORD_BOT_FAQ - DO NOT REMOVE -->

To identify the problem: check browser console logs.

Possible solution(s):

- Try to disconnect Git(Hub/Lab) or Bitbucket from https://gitpod.io/integrations, then reconnect.
- Make sure correct scopes are set for those Git integration providers as well.
