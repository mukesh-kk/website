---
section: authentication
title: Authentication
---

<script context="module">
  export const prerender = true;
</script>

# Authentication

Gitpod comes with integrations for [GitLab](/docs/configure/authentication/gitlab), [GitHub](/docs/configure/authentication/github), and [Bitbucket](/docs/configure/authentication/bitbucket) projects. It also provides a [browser extension](/docs/configure/user-settings/browser-extension) or a [browser bookmarklet](/docs/configure/user-settings/browser-bookmarklet) for Chromium-based browsers (Chrome, Edge, Brave) and Firefox.

`youtube: nXMlnMEP784`


## FAQs

### [How to get SCM API token from Gitpod's GitLab, GitHub or Bitbucket integration as environment variable](https://discord.com/channels/816244985187008514/1061997373817094236)
<!-- DISCORD_BOT_FAQ - DO NOT REMOVE -->

Run `gp init` on your terminal or manually create a file called `.gitpod.yml`
- Put the following line in your `.gitpod.yml`:

```yaml
image:
  file: .gitpod.Dockerfile
```
- Create a file called `.gitpod.Dockerfile` and put the following content in it:
```dockerfile
FROM gitpod/workspace-full

RUN file="$HOME/.bashrc.d/770-scm_token.sh" \
    && printf '%s\n' 'if [[ "${GITPOD_WORKSPACE_CONTEXT_URL:-}" == *gitlab* ]]; then : "gitlab"; else : "github"; fi; scm_name="$_"' > "${file}" \
    && printf 'export SCM_TOKEN="$(%s)"\n' "gp credential-helper get <<<host=\${scm_name}.com | sed -n 's/^password=//p'" >> "${file}"
```
- Follow [see in action](/docs/introduction/learn-gitpod/gitpod-yaml#see-it-in-action)

Now you can use `$SCM_TOKEN` environment variable after you commit and create a new workspace, this variable will contain an API token based on the Git context (i.e. Gitlab/GitHub/Bitbucket)
