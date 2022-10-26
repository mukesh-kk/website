# Gitpod Website

[![Gitpod Ready-to-Code](https://img.shields.io/badge/Gitpod-ready--to--code-908a85?logo=gitpod)](https://gitpod.io/#https://github.com/gitpod-io/website)
[![Pull Requests Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://makeapullrequest.com)

> This repository contains the website hosted on [www.gitpod.io](https://www.gitpod.io).

Gitpod removes all friction from the developer experience to be always ready-to-code and makes software engineering more collaborative, joyful, and secure.

## Issues

**Mandatory labels:**

- A `team: x` - Which team the issue belongs to
- A `section: x` - Which area of docs it corresponds to (helps understand ownership)
- A `type: x` - e.g. `bug`, `suggestion`, `question`

Issues without `status: backlog` require triage ([link](https://github.com/gitpod-io/website/issues?q=is%3Aopen+-label%3A%22status%3A+backlog%22+))

## CLI Commands

- Generate blog post:

  ```sh
  npm run generate:blog-post
  ```

- Generate JetBrains pages:

  ```sh
  npm run generate:jb
  ```

### Generate Changelog

> **Note**: Add `CHANGELOG_GITHUB_ACCESS_TOKEN` to environment variables. Create a personal access token at [GitHub Settings](https://github.com/settings/tokens/new?scopes=repo,user)

```sh
npm run generate:changelog
```

## Tech stack

- [Svelte](https://svelte.dev)
- [SvelteKit](https://kit.svelte.dev)
- [mdsvex](https://mdsvex.com)
- [Tailwind CSS](https://tailwindcss.com)
- [Netlify](https://www.netlify.com)

## Contribute

Contributing is as easy as starting a new workspace:

[![Open in Gitpod](https://www.gitpod.io/svg/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/gitpod-io/website)
