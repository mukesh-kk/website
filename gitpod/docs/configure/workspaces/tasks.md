---
section: workspaces
title: Tasks
---

<script context="module">
  export const prerender = true;
</script>

# Tasks

<!--
  Source for diagrams: https://excalidraw.com/#json=5144082254921728,Kl_Vys0jGocSg6BQ9musNw

  ! If you update the diagrams, make sure you replace the above, immutable URL !
-->

To get the most out of ephemeral developer environments, it is important to let Gitpod know how to build your project. We can achieve this by defining `tasks` in the [`.gitpod.yml`](/docs/references/gitpod-yml) configuration file.

> **Note**: In your local developer environment, you likely set up your project only once. If you work in a team, you probably have written instructions on how to get started. With Gitpod, you automate these manual steps so that a new environment can be set up repeatedly by Gitpod.

Tasks are shell scripts that run on top of the Docker image you configure (learn more about [custom Docker images](/docs/configure/workspaces/workspace-image)).

`youtube: fA2fpqP1xaM`

## Execution order

With Gitpod, you have the following three types of tasks:

- `before`: Use this for tasks that need to run before `init` and before `command`. For example, customize the terminal or install global project dependencies.
- `init`: Use this for heavy-lifting tasks such as downloading dependencies or compiling source code.
- `command`: Use this to start your database or development server.

The order in which these tasks execute depends on whether you have [Prebuilds](/docs/configure/projects/prebuilds) configured for your project and which startup scenario applies. Let's look at the details.

> **Caveats**
>
> - Any file changes made outside of `/workspace` file hierarchy from `init` tasks will be lost on workspace start when prebuilds are enabled. [Learn more](/docs/configure/projects/prebuilds#workspace-directory-only)
> - User specific environment variables are not loaded automatically for `init` and `before` tasks but can be loaded if you want. [Learn more](/docs/configure/projects/prebuilds#user-specific-environment-variables-in-prebuilds)

### Prebuild and New Workspaces

In this startup scenario, you can see how Prebuilds impact the execution order of tasks:

![Start tasks for Prebuilds & New Workspace](../../../static/images/docs/beta/configure/start-tasks/prebuilds-new-workspace-light-theme.png)
![Start tasks for Prebuilds & New Workspace](../../../static/images/docs/beta/configure/start-tasks/prebuilds-new-workspace-dark-theme.png)

The `init` task is where you want to do the heavy lifting, things like:

- Download & install dependencies
- Compile your source code
- Run your test suite
- Any other long-running, terminating processes necessary to prepare your project

As displayed in the diagram above, we highly recommend you enable Prebuilds for your project. In that case, Gitpod executes the `before` and most importantly, `init` tasks automatically for each new commit to your project.

By the time you start a new workspace, all that's left to do is execute the `before` (optional) and `command` tasks. The latter most often starts a database and/or development server.

> Let Gitpod run the time-consuming `init` tasks continuously behind the scene so you and anyone who opens your project on Gitpod doesn't have to wait.

### Restart a Workspace

When you restart a workspace, Gitpod already executed the `init` task ([see above](#prebuild-and-new-workspaces)) either as part of a Prebuild or when you started the workspace for the first time.

As part of a workspace restart, Gitpod executes the `before` and `command` tasks:

![Restart a workspace](../../../static/images/docs/beta/configure/start-tasks/restart-workspace-light-theme.png)
![Restart a workspace](../../../static/images/docs/beta/configure/start-tasks/restart-workspace-dark-theme.png)

### Start a Snapshot

When you start a snapshot, Gitpod already executed the `init` task ([see above](#prebuild-and-new-workspaces)) either as part of a Prebuild or when you or a team member started the snapshot's initial workspace for the first time.

As part of starting a snapshot, Gitpod executes the `before` and `command` tasks:

![Start a snapshot](../../../static/images/docs/beta/configure/start-tasks/start-snapshot-light-theme.png)
![Start a snapshot](../../../static/images/docs/beta/configure/start-tasks/start-snapshot-dark-theme.png)

## Configure the terminal

You can configure where terminals open using the `openMode` properties below.
Please note that this information is used if no previous terminals in the layout exist.
Snapshots will first try to reuse existing terminals in the layout, before opening new ones.

```yaml
tasks:
  - name: Static Server
    command: python3 -m http.server 8080
  - name: DB Server
    command: sh ./scripts/start-db.sh
    openMode: split-right
```

### openMode

You can configure how the terminal should be opened relative to the previous task.

<div class="overflow-x-auto">

| openMode                 | Description                                                |
| ------------------------ | ---------------------------------------------------------- |
| `openMode: tab-after`    | Opens in the same tab group right after the previous tab   |
| `openMode: tab-before`   | Opens in the same tab group left before the previous tab   |
| `openMode: split-right`  | Splits and adds the terminal to the right                  |
| `openMode: split-left`   | Splits and adds the terminal to the left                   |
| `openMode: split-top`    | **Deprecated**. Splits and adds the terminal to the top    |
| `openMode: split-bottom` | **Deprecated**. Splits and adds the terminal to the bottom |

</div>

## Example Tasks

The examples below are common use cases you can get inspired by and adjust for your project's needs.

> **Note**: `before` and `init` tasks need to terminate while `command` can run indefinitely (i.e. until cancelled with Ctrl + C). This is because `before` and `init` may run as part of a prebuild and if these tasks do not terminate, the prebuild will eventually fail with a timeout.

### One-line tasks

Each task contains a single `npm` command. The `init` task terminates once the dependencies are installed while the `command` task starts a development server and does not terminate.

```yaml
tasks:
  - name: Dev Server
    init: npm install
    command: npm run dev
```

### Multi-line tasks

To run multiple commands for a given task, you can use the `|` notation where each line below (make sure you indent correctly) runs in sequence once the previous command terminates.

In the following example, the `init` task installs dependencies and configures a database. Then, the `command` task starts the dev server(s).

> **Note**: In case of multiple terminals, there is no guarantee on the order in which tasks execute. The only guarantee you have is that `before`, `init` and `command` execute in that sequence **per terminal**.

```yaml
tasks:
  - name: Dependencies & Database
    init: |
      npm install
      npm run configure-database
    command: npm run dev
```

### Wait for commands to complete

When working with multiple terminals, you may have a situation where terminal 1 runs build scripts and terminal 2 and 3 require that these scripts complete first. This can be achieved with [`gp sync-await`](/docs/references/gitpod-cli#sync-await) and [`gp sync-done`](/docs/references/gitpod-cli#sync-done).

```yaml
tasks:
  - name: Rails
    init: >
      bundle install &&
      yarn install --check-files &&
      rails db:setup &&
      gp sync-done bundle # 'bundle' is an arbitrary name
    command: rails server

  - name: Webpack
    init: gp sync-await bundle # wait for the above 'init' to finish
    command: bin/webpack-dev-server

  - name: Redis
    init: gp sync-await bundle
    command: redis-server

  - name: Sidekiq
    init: gp sync-await bundle
    command: sidekiq
```

### Wait for a port to be available

Let's say you have a web app dev server that takes a moment to start up to listen on port 3000. Once it's up and running, you want to run end-to-end tests against `http://localhost:3000`.

You can achieve this with two terminals and the `gp ports await` CLI command.

```yaml
tasks:
  - name: Dev Server
    init: npm install
    command: npm run dev

  - name: e2e Tests
    command: |
      gp ports await 3000
      npm run test
```

### Immediately exit for any command failure within a task

If you wish to halt an entire task with for an error within the task script, then you could do the following:
```
tasks:
  - init: |
      (
        set -e # Tells bash to immediately exit on failure off a command
        bundle install
        yarn install --frozen-lockfile
        bundle exec rake
        bundle exec nanoc compile
      )
```

Gitpod starts all your `tasks` inside separate `bash` (`$SHELL`) shells. Gitpod can only assert the exit status of the shell process of a task. Normally `bash` or other shells don't halt on a failure of a command unless you explicitly ask it to. `bash` only inherits the last exit status of a script run with it before it's own `exit`. Hence Gitpod can't determine if all of your commands inside the `init` task succeeded. To have that effect, you can put `set -e;` on top of task shell-commands and wrap your whole task-script with `()` to configure that particular task shell to halt and immediately exit with an error code for a failure of any command. This can be specially helpful for prebuilds (i.e `init` tasks)

### Missing examples?

We'd love to hear from you if you have specific questions or ideas for additional examples. Please click the following link to open a pre-configured GitHub issue: [Ask for a new Start Task example](https://github.com/gitpod-io/website/issues/new?title=[Start+Task+Example]&labels=documentation).
