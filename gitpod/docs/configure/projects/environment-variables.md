---
section: projects
title: Environment Variables
---

<script context="module">
  export const prerender = true;
</script>

# Environment Variables

You can pass environment variables into your workspace and use them in your code as usual. Please refer to the documentation of your programming language of choice for details on that.

`youtube: dehln1E8ylY`

## Default Environment Variables

Below are some environment variables which are set automatically by Gitpod and are guaranteed to exist:

- `GITPOD_WORKSPACE_ID`: The Universally Unique Identifier (UUID) associated with the workspace.
- `GITPOD_WORKSPACE_URL`: The unique URL of the workspace.
- `GITPOD_REPO_ROOT`: Path to the directory where your git repository was cloned inside the workspace.

> **Protip:** Try running **`env | grep GITPOD_`** on a workspace terminal to see all the Gitpod specific environment variables. These can be useful for scripting a dynamic workspace behavior.

#### Reserved Prefix

Environment variables beginning with the prefix `GITPOD_` are reserved for internal use by Gitpod and are overridden on every workspace startup. This means that a _user-defined_ variable set with the name `GITPOD_FOOBAR` will be ignored and not accessible in the workspace.

## User-Specific Environment Variables

Gitpod supports encrypted, user-specific environment variables.
They are stored as part of your user settings and can be used to set access tokens, or pass any other kind of user-specific information to your workspaces.

The `DOCKERD_ARGS` environment variable can be used to specify additional arguments to the docker installation running in your workspace. Currently
mapping a user in your container to the gitpod user in your workspace is supported. This helps if you are using an unprivileged user with your containers
(e.g. user 1000 in a node image) but need to edit files with vscode that have been created within the container. The content of the environment variable
should look like this:

```json
{ "remap-user": "1000" }
```

### Ways of setting user-specific environment variables

#### Using the command line: `gp env`

The `gp` CLI prints and modifies the persistent environment variables associated with your user for the current repository.

To set the persistent environment variable `foo` to the value `bar` use:

```sh
gp env foo=bar
```

Beware that this does not modify your current terminal session, but rather persists this variable for the next workspace on this repository.
`gp` can only interact with the persistent environment variables for this repository, not the environment variables of your terminal.
If you want to set that environment variable in your terminal, you can do so using -e:

```sh
eval $(gp env -e foo=bar)
```

To update the current terminal session with the latest set of persistent environment variables, use:

```sh
eval $(gp env -e)
```

To delete a persistent environment variable use:

```sh
gp env -u foo

# And if you want to remove it from your shell session too:
unset foo
```

Note that you can delete/unset variables if their repository pattern matches the repository of this workspace exactly. I.e. you cannot
delete environment variables with a repository pattern of _/foo, foo/_ or _/_.

```sh
Usage:
  gp env [flags]

Flags:
  -e, --export   produce a script that can be eval'ed in Bash
  -h, --help     help for env
  -u, --unset    deletes/unsets persisted environment variables
```

#### Using the account settings

You can also configure and view the persistent environment variables in [your account settings](https://gitpod.io/variables).

![Environment Variables in Account Settings](../../../static/images/docs/beta/configure/environment-variables/environment-variables-account-settings.png)

You can add as many environment variables as you wish.

The repository pattern of each variable determines in what workspace it will be available.
Repository patterns follow the `owner/repository` pattern. You can use a wildcard on either of the two, e.g. `gitpod-io/*` would make that variable available in all repositories owned by `gitpod-io`.
Conversely `*/vscode` would make that variable available on all repositories called `vscode`; this is especially useful for forks.
Subsequently `*/*` makes that variable available in every workspace.

> **Beware:** while the variable values are stored encrypted, they are available as plain text inside a workspace. Be careful when sharing your live workspace or when using `*/*` as repository pattern.

## Project-Specific Environment Variables

Environment variables which are defined in [project](/docs/configure/projects) settings will be visible in prebuilds, and optionally also in workspaces. This is useful for prebuilds to access restricted services.

Important notes:

- Project-Specific Environment Variables will take precedence over [User-Specific Environment Variables](#user-specific-environment-variables)
- The `gp env` command is only linked with [User-Specific Environment Variables](#user-specific-environment-variables) but not Project-Specific Environment Variables. That means, if you set an environment variable with the `gp env` command, it will be saved in [your account settings](https://gitpod.io/variables).

> **Warning:** Care should be taken with secrets. Allowing secrets to be accessed from workspaces will expose those secrets to anyone who can open the workspace.

## Terminal-Specific Environment Variables

You can set environment variables for a Gitpod `task` terminal of VS Code by setting the `env` property within the task definition in your `.gitpod.yml`. Please note that such environment variables will be limited to the `task` terminal and is not globally set across the workspace.

For example:

```yaml
tasks:
  - name: Example of passing an environment variable to a command
    env:
      PRINT_ME: "Hello World!"
    command: echo "$PRINT_ME"
```

See [`.gitpod.yml`](/docs/references/gitpod-yml#tasksnenv) for more details.

## Providing one-time environment variables via URL

> ❗️ This feature is great for setting one-time environment variables for dynamic workspace configurations or setups but is not appropriate for configuring sensitive information, such as passwords or long-lived API tokens. Gitpod and the [Open Web Application Security Project](https://owasp.org/www-community/vulnerabilities/Information_exposure_through_query_strings_in_url) recommends that you do not pass sensitive information through query strings. Refer to [CWE-598](https://cwe.mitre.org/data/definitions/598.html) to learn more about this recommendation.

In addition to user-specific environment variables, Gitpod also allows passing in variables through the `gitpod.io/#` URL.
The syntax for that is:

```
https://gitpod.io/#var=value,var2=value2/https://github.com/my-org/repo-to-work-on
```

The values are [URL encoded](https://www.w3schools.com/tags/ref_urlencode.asp) to allow any non-ascii characters in values.
In case of a conflict, e.g. in the example above if the user already had a variable `var2` set, the user's value would be used.

## Exporting all the Gitpod environment variables that you created

You can run the following command in your Gitpod Workspace terminal to save your environment variables (which you have configured in [Gitpod Environment Variables](https://gitpod.io/variables)) in a different file (e.g.: gitpod.env):

```bash
gp env > gitpod.env
```
