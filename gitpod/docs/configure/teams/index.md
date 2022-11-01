---
section: teams
title: Teams
---

<script context="module">
  export const prerender = true;
</script>

# Teams

> {title} is currently in [Beta](/docs/help/public-roadmap/release-cycle) · [Send feedback](https://github.com/gitpod-io/gitpod/issues/5095).

Teams are used to share [Projects](/docs/configure/projects) amongst team members.

There are two roles within a Gitpod team **team owners** and **team members**. Team members and owners can view branches and prebuilds for the projects within a team. Team members can open new workspaces directly from a branch in the dashboard. Team owners can manage other team members, reset user invite URLs, and manage [Team billing](/docs/configure/billing/team-billing).

To collaborate with others on projects you can create a **Team** and invite others as team members.

### View teams

To view all your teams, click on the scope selector on the left of the top bar.

### Create a team

To create a new team:

1. On the top bar, click on the scope selector and select _New Team_.
2. Next, you will be asked for a team name that will serve also as the team slug.

### Add members to a team

Once you create a team you can invite members by using the unique invite URL from the Members page within a team.

### Change member permissions

New members will join with a _Member_ role which you can later change if needed from the Members list using the more actions button. See [Roles](#roles) below.

### Remove a member from a team

You can remove a team member form the Members list using the more actions button while hovering over the user entry.

### Filter members in a team

On the Members page you can filter users by membership role using the filters above the Members list.

### Leaving a team

You can leave a team using the more actions button in the Members list while hovering over your user entry.

## Roles

| Permission             | Owner | Member |
| ---------------------- | ----- | ------ |
| Manage Team Members    | Yes   | No     |
| Delete Team            | Yes   | No     |
| Manage Team billing    | Yes   | No     |
| Edit Project Settings  | Yes   | No     |
| Edit Project Variables | Yes   | No     |
| Invite Team Members    | Yes   | Yes    |
| Add Projects.          | Yes   | Yes    |
| Remove Projects.       | Yes   | Yes    |
| Add Projects           | Yes   | Yes    |
| View Branches          | Yes   | Yes    |
| View Prebuilds         | Yes   | Yes    |
| Trigger Prebuilds      | Yes   | Yes    |
