---
section: workspaces
title: Multi-repo
---

<script context="module">
  export const prerender = true;
</script>

# Multi-repo

> {title} is currently in [Beta](/docs/help/public-roadmap/release-cycle) · [Send feedback](https://github.com/gitpod-io/gitpod/issues/8623).

If your software project is comprised of multiple source control repositories it is possible to configure Gitpod to clone these additional repositories through the configuration keys of `additionalRepositories` and `mainConfiguration` in the [.gitpod.yml](/docs/references/gitpod-yml) file which removes the need to run multiple workspaces, and makes it easier to configure services which need to be aware of each other.

## Cloning additional repositories

The `additionalRepositories` key is an array of repositories which contains two properties which define the source control `url` to clone and the `checkoutLocation` of where the repository is cloned is under `/workspaces`

```yaml
# example .gitpod.yml from https://github.com/gitpod-io/demo-multi-repo-frontend
additionalRepositories:
  - url: https://github.com/gitpod-io/demo-multi-repo-backend
    # checkoutLocation is relative to /workspaces
    checkoutLocation: backend
```

When the above configuration is defined then the following additional steps happen when Gitpod workspace is started:

1. If you open a workspace on a branch, Gitpod will clone the same-named branch in all repositories. If such a branch doesn’t exist Gitpod checks out the default branch.
1. The contents of `https://github.com/gitpod-io/demo-multi-repo-frontend` is cloned to `/workspaces/demo-multi-repo-frontend`
1. The contents of `https://github.com/gitpod-io/demo-multi-repo-backend` is cloned to `/workspaces/backend`

After all of the source control repositories have been cloned then the `before`, `init` and `command` [tasks](https://www.gitpod.io/docs/configure/workspaces/tasks) are executed as per normal. If you need to run commands (such as package installation or compilation) on the source control repositories which have been cloned then change your working directory the `checkoutLocation` location using the `before` task.

```yaml
# example .gitpod.yml from https://github.com/gitpod-io/demo-multi-repo-frontend
additionalRepositories:
  - url: https://github.com/gitpod-io/demo-multi-repo-backend
    checkoutLocation: backend

tasks:
  - name: backend
    # change working directory as per configured in `checkoutLocation`
    # which is configured above as `/workspaces/backend`
    before: |
      cd ../backend
    init: |
      echo npm install
    command: |
      echo npm run dev

    # changing of working directory is not required as these tasks will
    # by default by executed in `/workspaces/demo-multi-repo-frontend`
  - name: frontend
    init: |
      echo npm install
      echo npm run build
    command: |
      echo npm run dev
```

Try it out at https://github.com/gitpod-io/demo-multi-repo-frontend

## Delegating configuration

The optional `mainConfiguration` configuration key when configured in additional repositories points to the repository with the main [.gitpod.yml](/docs/references/gitpod-yml) file and makes it possible to open the same workspace from any issue, branch or other context URL from any of the participating repositories. Since the main configuration is used for prebuilds, those will show up under the main project.

```yaml
# example .gitpod.yml from https://github.com/gitpod-io/demo-multi-repo-backend
mainConfiguration: https://github.com/gitpod-io/demo-multi-repo-frontend
```

Try it out at https://github.com/gitpod-io/demo-multi-repo-backend

## Adding additional repo folders to VSCode Explorer

![VSCode workspace folders](.../../../static/images/docs/vscode-workspace-folders.png)

You might want to see the [`additionalRepositories`](#cloning-additional-repositories) on your VSCode.

To do so:
  1. Create a file called `main.code-workspace` (for example) on your main(e.g. frontend) repository that everyone is expected to open via Gitpod.
  2. Now you can define the folder paths:
```json
{
  // All paths are relative to your main repo
  // The additional repos are cloned inside /workspace dir
	"folders": [
		{
			"path": "." // Main repo that you will open in Gitpod (e.g. frontend)
		},
		{
			"path": "../backend" // Additional repo
		},
		{
			"path": "../db" // Additional repo
		},
	],

}
```
  3. Specify your `.code-workspace` file path on `.gitpod.yml`:
```yaml
workspaceLocation: frontend/main.code-workspace # Relative to /workspace dir
```
  4. [See it in action!](/docs/introduction/learn-gitpod/gitpod-yaml#see-it-in-action)

## FAQs

### [Single repo but instances of multiple branches](https://discord.com/channels/816244985187008514/1063202039955476540)
<!-- DISCORD_BOT_FAQ - DO NOT REMOVE -->

If you want to create multiple instances of one repository with different branches, you could use such a method:

```yaml
tasks:
  - name: Multi branch
    before: |
      # Get primary repo dir path and name
      main_repo_dir="${GITPOD_REPO_ROOT}"
      primary_repo_name="${main_repo_dir##*/}"

      # Array for BRANCH name(s).
      extra_clone_branches=(
          backend
          docs
          next
      )

      for reference in "${extra_clone_branches[@]}"; do {
          dir="${main_repo_dir}-${reference}"

          if test ! -e "${dir}" && git -C "${main_repo_dir}" show-ref --quiet "refs/heads/${reference}"; then {
            printf 'INFO: %s\n' "Duplicating ${primary_repo_name} to ${dir} with ${reference} branch"
            cp -ra "${main_repo_dir}" "${dir}"
            git -C "${dir}" checkout "${reference}" 2>&1 | grep -v "Switched to branch '${reference}'"
          } fi
      } done

      # Send signal to awaiting task(s)
      gp sync-done multi_branch

  - name: Some other task
    command: |
      # Wait for multi_branch to avoid race condition
      gp sync-await multi_branch

      echo hello
      true 'something'
```

And to have such a feature built-in, please react with a " 👍 " on this issue: https://github.com/gitpod-io/gitpod/issues/15608
