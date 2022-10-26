---
section: learn-gitpod
title: Localhost in Gitpod
---

<script context="module">
  export const prerender = true;
</script>

# Localhost in Gitpod

With Gitpod, you can develop software like you never have before. Using the power of remote development you can access more powerful resources than your local machine ever could, run many workspaces in parallel (one for each task) and more!

Yet, when you first work with Gitpod, you might need to make some small tweaks to your existing projects, including defining all your configurations in code, so that you can really embrace the ephemeral nature of Gitpod. At Gitpod, we like to call this process _Gitpodifying_ 🍊.

A common question users ask when Gitpodifying is: "_What happens to localhost?_"

## Gitpodifiying Localhost

If you're new to software development, you might not have heard of `localhost`, yet. If you use Gitpod only in the browser, you may never need to learn about localhost.

However, if you do need `localhost` to work with your application or project, there are a couple of different options available to you. Let's explore them.

### Option 1: Update code references

The most simple option to managing localhost is to swap any existing references in your code.

Use `GITPOD_WORKSPACE_URL` to check if you're running in a Gitpod environment.

Here's an example, using JavaScript:

<!-- TODO: This is not the right env variable as we need `gp url 3000`, not `gp url` -->

```js
//Before
const host = "localhost:3000"

// After
const gitpodWorkspaceURL = process.env.GITPOD_WORKSPACE_URL;
const host = gitpodWorkspaceURL ?? "localhost:3000
```

With this approach, you do not need to setup any port forwarding to make `localhost` work for your application, and you can access your workspace directly on the workspace's public URL.

See [Workspace URLs](/docs/configure/workspaces/workspace-urls) for more.

### Option 2: Use a Desktop IDE

If you cannot swap references to localhost in your code because:

- You cannot update `localhost` references in your application
- The framework you are working with assumes `localhost`

When you edit code in Gitpod in the browser editor, there is no running process on your machine, which is required for Gitpod to set up port forwarding for localhost automatically for you.

A solution is to swap to using a desktop IDE or editor. Both VS Code Desktop and JetBrains forward ports automatically that are defined in your `.gitpod.yml`. Go to user preferences to change your IDE or editor preference, and restart your workspace.

<!-- TODO: Add link to JetBrains or VS Code pages on port forwarding -->

### Option 3: Via SSH

If needed, you can manually forward ports using direct SSH access to your workspace via an OpenSSH client. To access a workspace via SSH, go to the Gitpod dashboard, and select "_connect via SSH_" for any running workspace.

> **Tip:** You can use the simple copy and paste SSH command for quick access, however we recommend [uploading an SSH public key](/docs/configure/user-settings/ssh) to Gitpod for added security and ease of use.

See [Ports](/docs/configure/workspaces/ports#port-forwarding) for more on port forwarding.

### Option 4: Local Companion (beta)

Gitpod has beta support for a tool called, Local Companion, which will automatically forward all ports of your workspace to localhost.

See [Local Companion](/docs/references/ides-and-editors/local-companion) for more.
