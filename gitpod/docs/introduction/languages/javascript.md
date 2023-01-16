---
section: languages
title: JavaScript in Gitpod
---

<script context="module">
  export const prerender = true;
</script>

# JavaScript in Gitpod

Gitpod comes with great built-in support for JavaScript, TypeScript, and tools like Node.js, npm, pnpm & yarn pre-installed with [Gitpod workspace image](https://www.gitpod.io/docs/configure/workspaces/workspace-image). This guide walks you through how to fully configure a JavaScript application using Gitpod.

## Prerequisites

This guide assumes familiarity with:

[Docker](https://docs.docker.com/), [YAML](https://yaml.org/spec/1.1/), [Linux](https://www.linux.org/), [Bash](https://www.gnu.org/savannah-checkouts/gnu/bash/manual/bash.html) and Linux [environment variables](https://wiki.archlinux.org/title/environment_variables).

## Getting started / Quick Start

`youtube: w65POyu3ZUQ`

To see a full working Node/TypeScript application, take a look at [gitpod-samples/template-typescript-node](https://github.com/gitpod-samples/template-typescript-node). To update an existing JavaScript application, follow the steps below in this guide.

<a href="https://gitpod.io/#https://github.com/gitpod-samples/template-typescript-node">
    <img src="https://gitpod.io/button/open-in-gitpod.svg" alt="Push" align="center" >
</a>

## Installing dependencies

### The default base image

The default Gitpod workspace image default is [workspace-full](https://github.com/gitpod-io/workspace-images) based on [Ubuntu](https://ubuntu.com/).

Along with other languages and tools, this base image includes:

- [Node.js](https://nodejs.org/en/) `v16.18.1` (`node -v`)
- [Node Package Manager - npm](https://www.npmjs.com/) `v8.19.2` (`npm -v`)
- [Node Version Manager - nvm](https://nvm.sh) `0.39.0` (`nvm -v`)

> **Note:** We discuss how to set up a [custom base image](/docs/introduction/languages/javascript#setting-up-a-custom-dockerfile) later in the guide.

### Updating Node Versions

Gitpod comes with the latest stable Node.js version pre-installed but let's say your project uses a different version of `node` (say `14.8.0` for example), well the good news is that Gitpod also comes with `nvm` (a tool used to manage multiple active Node.js versions) installed. To install and configure the desired version of node: `nvm install 14.8.0` and `nvm use 14.8.0` (you can also use `nvm alias default 14.8.0` to set the default version of node) or you can setup [custom Dockerfile](/docs/introduction/languages/javascript#setting-up-a-custom-dockerfile) to install the desired version of node & other required tools.

### Setting up a custom Dcokerfile

`youtube: jFsbmcXCRf8`

To ensure Gitpod workspaces always start with the correct dependencies, configure a Dockerfile:

1. Create a `.gitpod.yml`

```bash
touch .gitpod.yml
```

2. Create a custom Dockerfile

```bash
touch .gitpod.Dockerfile
```

3. Reference your newly created Dockerfile in your `.gitpod.yml`

```yaml
image:
  file: .gitpod.Dockerfile
```

4. Update your `.gitpod.Dockerfile` to install your dependency versions

```dockerfile
FROM gitpod/workspace-full:latest

RUN bash -c 'VERSION="14.8.0" \
    && source $HOME/.nvm/nvm.sh && nvm install $VERSION \
    && nvm use $VERSION && nvm alias default $VERSION'

RUN echo "nvm use default &>/dev/null" >> ~/.bashrc.d/51-nvm-fix
```

5. Commit and push both `.gitpod.yml` and `.gitpod.Dockerfile`

```bash
git commit -m "configuring gitpod with javascript" && git push
```

6. Start a **new workspace** from the branch with the committed `.gitpod.Dockerfile`

For example, opening: `gitpod.io/#https://github.com/gitpod-io/gitpod`

7. Test your dependencies are correct in the new workspace

```bash
node -v
```

> **Note:** If your changes are not taking effect, ensure your workspace is building from the correct [context](/docs/introduction/learn-gitpod/context-url), where your `gitpod.yml` or `gitpod.Dockerfile` are checked in to version control and are on the branch or commit that you are opening.

See [configure Docker](/docs/configure/workspaces/workspace-image) for more.

## Build and run your application

### Building a JavaScript application

To build your application, you'll need to configure a [start task](/docs/configure/workspaces/tasks).

Start tasks are processes that are initiated on every workspace start. Depending on your project setup, start tasks can be used to build your application, run your application directly, or start any necessary tools for the application to run, such as starting database processes.

1. Add the command to build your application to your `.gitpod.yml`

**Example with npm**

```yaml
tasks:
  - init: npm install && npm run build
```

**Example with yarn**

```yaml
tasks:
  - init: yarn install && yarn build
```

2. **Optional:** Validate by stopping and starting (restart) your workspace

```bash
gp stop
```

3. **Optional:** Validate your commands by running [`gp tasks`](/docs/references/gitpod-cli#tasks)

```shell
gp tasks
```

> **Tip:** If you're using [VS Code Browser](/docs/references/ides-and-editors/vscode-browser) or [VS Code Desktop](/docs/references/ides-and-editors/vscode), then your tasks will open as terminal windows. You can configure their layout using the [openMode](/docs/configure/workspaces/tasks#openmode) property.

> **Note:** We are using the `init` property so that we can perform application building during a [prebuild](/docs/configure/projects/prebuilds), for increased performance. We'll discuss prebuilds more later on.

See [start tasks](/docs/configure/workspaces/tasks) and [.gitpod.yml reference](/docs/references/gitpod-yml) for more.

### Running a JavaScript application

To run your application, you have two options:

1. **Update your start task command** - Starting your application using the `command` start task will run the start process on workspace start. With both [VS Code Browser](/docs/references/ides-and-editors/vscode) and [VS Code Desktop](/docs/references/ides-and-editors/vscode-browser), tasks are automatically opened in the terminal(s). With [IntelliJ](/docs/references/ides-and-editors/intellij) / [JetBrains Gateway](/docs/integrations/jetbrains-gateway), configured tasks can be viewed by running `gp tasks` in the workspace.

#### Using start tasks to run JavaScript

1. Add a `command` for starting your application to your `.gitpod.yml`

**Example with npm**

```yaml
tasks:
  - init: npm install && npm run build
    command: npm run dev
```

**Example with yarn**

```yaml
tasks:
  - init: yarn install && yarn build
    command: yarn start
```

2. **Optional:** Validate by stopping and starting (restart) your workspace

```bash
gp stop
```

3. **Optional:** Validate your commands by running [`gp tasks`](/docs/references/gitpod-cli#tasks)

```shell
gp tasks
```

### Using ESLint for linting

If your project's `package.json` does not mention ESLint as a dependency then you have to install it first. For installing it add the following to the end of the `init` phase of your [.gitpod.yml](/docs/references/gitpod-yml) as shown:

```yaml
tasks:
  - init: npm install && npm run build && npm install -g eslint
```

and then search for `eslint` in the extensions tab and then install it from there using the install button as shown in the screenshot.

![Install ESLint in Gitpod](.../../../static/images/docs/eslint-extension.png)

### Hot Module Replacement (HMR)

Especially when it comes to Frontend Projects, the dev-server should be able to auto-reload on file changes. The implementation varies from server to server. To make this work, some additional config is required:

### Vite

In your `.gitpod.yml` file, you should export the workspace url for the port your server runs into the environment.

```yaml title=".gitpod.yml"
tasks:
  - init: npm install
    command: |
      export HMR_HOST=`gp url 5173`
```

After exporting it to the environment, the URL can be accessed in the `vite.config.js`. With the following snippet, you are able to configure HMR to work inside Gitpod, as well as on localhost.

```js title="vite.config.js"
const config = () => ({
  server: {
    hmr: {
      clientPort: process.env.HMR_HOST ? 443 : 5173,
      host: process.env.HMR_HOST
        ? new URL(process.env.HMR_HOST).hostname
        : "localhost",
    },
  },
});

export default config;
```

### Webpack

Similar to the setup in Vite, the setup for Webpack consists of two steps: exporting the URL to the environment and consuming the environment variable in the config:

```yaml title=".gitpod.yml"
tasks:
  - init: npm install
    command: |
      export HMR_HOST=`gp url 3000`
```

After the workspace URL with the given port is exported to the environment, it can be used in the `webpack.config.js` to determine the right port and hostname.

```js title="webpack.config.js"
module.exports = {
  devServer: {
    client: {
      webSocketURL: {
        hostname: process.env.HMR_HOST
          ? new URL(process.env.HMR_HOST).hostname
          : "localhost",
        port: process.env.HMR_HOST ? 443 : 3000,
        protocol: "wss",
      },
    },
  },
};
```

### Use of Private Packages

If you want to use private packages from npm or yarn on Gitpod, you can use the [`NPM_TOKEN`](https://docs.npmjs.com/creating-and-viewing-access-tokens) environment variable. You can set it in your [Gitpod user settings](/docs/configure/projects/environment-variables#using-the-account-settings).

## Debug your JavaScript application in Gitpod

### Debugging JavaScript applications in VS Code

To debug your application, you can use the [VS Code Browser](/docs/references/ides-and-editors/vscode-browser) or [VS Code Desktop](/docs/references/ides-and-editors/vscode) IDE. You can start debugging by clicking the `Debug` button in the IDE's status bar or by pressing `F5` or following the steps below:

![Debugger Option in Gitpod VS Code](.../../../static/images/docs/debugger-option-vscode.webp)

_You Can follow [this official blog](https://code.visualstudio.com/docs/editor/debugging) for more._

### Debugging JavaScript applications in JetBrains IDE (WebStorm)

To debug your application, you can use the [WebStorm](/docs/references/ides-and-editors/webstorm) IDE. You can start debugging by clicking the `Add Configurations` button in the IDE's top status bar.

![Debugger Option in Gitpod WebStorm](.../../../static/images/docs/debugger-option-webstorm.webp)

_You Can follow [this official blog](https://blog.jetbrains.com/webstorm/2018/01/how-to-debug-with-webstorm/) for more._

## Example Repositories

Here are a few JavaScript/TypeScript example projects that are automated with Gitpod:

|                          Repository                          |                                       Description                                       |                                                              Try it                                                               |
| :----------------------------------------------------------: | :-------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------------------------------: |
|    [Tesseract.js](https://github.com/naptha/tesseract.js)    |                     Pure JavaScript OCR for more than 100 Languages                     |    [![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/naptha/tesseract.js)    |
| [freeCodeCamp](https://github.com/freeCodeCamp/freeCodeCamp) | [freeCodeCamp.org](https://www.freecodecamp.org/)'s open source codebase and curriculum | [![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/freeCodeCamp/freeCodeCamp) |
|     [Mozilla PDF.js](https://github.com/mozilla/pdf.js)      |                     PDF.js is a PDF viewer that is built with HTML5                     |      [![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/mozilla/pdf.js)       |

## Recommended Reading

- [Build Projects in a Gitpod Ephemeral Dev Environment — The Ultimate Guide](/guides/guide-ephemeral-dev-environment-on-gitpod)
- [Sustainable Node.js development with only a browser](/blog/node-js-development).
- [Developing a Nuxt.js app entirely in your browser](/blog/developing-nuxtjs-in-browser)
- [Gitpodifying — The Ultimate Guide](/guides/gitpodify)
- [Debugging Node.js applications in Theia](/blog/node-js-gitpod)
