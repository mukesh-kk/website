---
section: languages
title: Go in Gitpod
---

<script context="module">
  export const prerender = true;
</script>

# Go in Gitpod

Gitpod includes Go in the default image, but if you need to customize your Go version or IDE setup in Gitpod, this guide will help you.

## Prerequisites

This guide assumes familiarity with:

[Docker](https://docs.docker.com/), [YAML](https://yaml.org/spec/1.1/), [Linux](https://www.linux.org/), [Bash](https://www.gnu.org/savannah-checkouts/gnu/bash/manual/bash.html) and Linux [environment variables](https://wiki.archlinux.org/title/environment_variables).

## Getting started / Quick Start

`youtube: w65POyu3ZUQ`

To see a full working Go application, take a look at [gitpod-samples/template-golang-cli](https://github.com/gitpod-samples/template-golang-cli). To update an existing Go application, follow the steps below in this guide.

<a href="https://gitpod.io/#https://github.com/gitpod-samples/template-golang-cli">
    <img src="https://gitpod.io/button/open-in-gitpod.svg" alt="Push" align="center" >
</a>

## Installing Dependencies

### The default base image

The default Gitpod workspace image default is [workspace-full](https://github.com/gitpod-io/workspace-images) based on [Ubuntu](https://ubuntu.com/).

This base image includes:

- [Go](https://golang.org/) `v1.19.1` (`go version`)

> **Note:** We discuss how to set up a [custom base image](/docs/introduction/languages/go#setting-up-a-custom-dockerfile) later in the guide.

### Updating Go Versions

Gitpod uses the latest stable version of Go by default. If you want to use a different version, you can use the [Go Version Manager](https://github.com/moovweb/gvm) to install and manage multiple versions of Go or you can following their [official guide](https://go.dev/doc/manage-install).

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

4. Update your `.gitpod.Dockerfile` to install your preferred [dependency versions](https://go.dev/project)

```dockerfile
# You can find the new timestamped tags here: https://hub.docker.com/r/gitpod/workspace-base/tags
FROM gitpod/workspace-base:latest

# Change your version here
ENV GO_VERSION=1.17

# For ref, see: https://github.com/gitpod-io/workspace-images/blob/61df77aad71689504112e1087bb7e26d45a43d10/chunks/lang-go/Dockerfile#L10
ENV GOPATH=$HOME/go-packages
ENV GOROOT=$HOME/go
ENV PATH=$GOROOT/bin:$GOPATH/bin:$PATH
RUN curl -fsSL https://dl.google.com/go/go${GO_VERSION}.linux-amd64.tar.gz | tar xzs \
    && printf '%s\n' 'export GOPATH=/workspace/go' \
                      'export PATH=$GOPATH/bin:$PATH' > $HOME/.bashrc.d/300-go
```

5. Commit and push both `.gitpod.yml` and `.gitpod.Dockerfile`

```bash
git commit -m "configuring gitpod with go" && git push
```

6. Start a **new workspace** from the branch with the committed `.gitpod.Dockerfile`

For example, opening: `gitpod.io/#https://github.com/gitpod-io/gitpod`

7. Test your dependencies are correct in the new workspace

```bash
go version
```

> **Note:** If your changes are not taking effect, ensure your workspace is building from the correct [context](/docs/introduction/learn-gitpod/context-url), where your `gitpod.yml` or `gitpod.Dockerfile` are checked in to version control and are on the branch or commit that you are opening.

See [configure Docker](/docs/configure/workspaces/workspace-image) for more.

### Using the `dep` dependency manager in Gitpod

If your project uses the [`dep` _(deprecated - v0.5.4)_](https://golang.github.io/dep/) dependency manager then you need to add a [.gitpod.Dockerfile](/docs/configure/workspaces/workspace-image) to your project. A basic example that extends the default workspace image might be something like:

```dockerfile
FROM gitpod/workspace-full

USER gitpod

RUN sudo apt-get install go-dep
```

Also, don't forget to reference the above Dockerfile in your `.gitpod.yml` configuration file, like so:

```YAML
image:
  file: .gitpod.Dockerfile

tasks:
  - init: dep ensure

vscode:
  extensions:
    - golang.go
    - premparihar.gotestexplorer
```

## Debugging your Go application in Gitpod

### Debugging your Go applications in VS Code

Here is a quick clip on how to automatically configure debugging for Go!

<figure>
<video controls playsinline autoplay loop muted class="shadow-medium w-full rounded-xl max-w-3xl mt-x-small" alt="Go debugging example" src="/images/docs/GoDebug.webm" type="video/webm"></video>
    <figcaption>Go debugging example</figcaption>
</figure>

So, basically in this video we:

1. First, open the Go file that we want to debug
2. Then, go to the debug menu and select "Add Configuration..."
3. Next, in the dropdown choose "Go launch file"
4. Finally, start debugging your Go program!

You can also create the Go debug configuration file manually

To start debugging your Go application in Gitpod, please create a new directory called `.theia/`, and inside add a file called `launch.json`, finally, add the following to it:

```json
{
  // Use IntelliSense to learn about possible attributes.
  // Hover to view descriptions of existing attributes.
  "version": "0.2.0",
  "configurations": [
    {
      "name": "Launch file",
      "type": "go",
      "request": "launch",
      "mode": "debug",
      "program": "${file}"
    }
  ]
}
```

Then, simply open the Go file you want to debug, open the Debug panel (in the left vertical toolbar, click the icon with the crossed-out-spider), and click the green "Run" button.

<br>

To see a basic repository with Go debugging, please check out [gitpod-samples/template-golang-cli](https://github.com/gitpod-samples/template-golang-cli):

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/gitpod-samples/template-golang-cli)

### Debugging your Go applications in GoLand

Steps to debug your Go application in GoLand:

1. Open your project in Gitpod with GoLand.
2. Open the `main.go` file in the editor.
3. Click on the `Run` menu and select `Edit Configurations...`.
4. Click on the `+` button and select `Go Application`.
5. In the `Go Application` window, enter the name of the configuration and the path to the file you want to debug.
6. Click on the `Apply` button.
7. Click on the `Debug` button to start debugging your Go application.

<img class="shadow-medium rounded-xl max-w-xl mt-x-small" src="/images/docs/goland-debug.webp" alt="Debug on GoLand in Gitpod" loading="lazy"/>

### Using `$GOPATH`

Older Go projects without module support need a <a href="https://golang.org/doc/code.html#Organization" target="_blank">specific workspace layout</a>:
the source code of your repository and its dependencies must be in the directories

```sh
src/[repository-provider]/[repository-owner]/[repository-name]
```

in the `$GOPATH`. Using the `.gitpod.yml` file, you can bring about such a workspace layout. Here is
how we do that for the example <a href="https://github.com/gitpod-io/definitely-gp/blob/master/go-gin-app/.gitpod.yml" target="_blank">go-gin-app</a> repository:

```yaml
---
checkoutLocation: "src/github.com/demo-apps/go-gin-app"
workspaceLocation: "."
tasks:
  - init: |
      cd /workspace/src/github.com/demo-apps/go-gin-app &&
      go get -v ./... &&
      go build -o app
    command: |
      cd /workspace/src/github.com/demo-apps/go-gin-app &&
      ./app
```

In more detail:

- By default, Gitpod clones the repository into the directory `/workspace`, which becomes the
  root directory for the workspace. With [`checkoutLocation`](/docs/references/gitpod-yml#checkoutlocation) and [`workspaceLocation`](/docs/references/gitpod-yml#workspacelocation) you can
  change this behavior (the paths are taken relative to `/workspace`).
- Gitpod preconfigures the `$GOPATH` environment variable to include the directory `/workspace/go`.
- With `go get -v ./...` we retrieve the sources of the dependencies from GitHub.
- To build the app, we run `go build -o app`.
- Lastly, we start the application.

## Example Repositories

Here are a few Go example projects that are already automated with Gitpod:

|                       Repository                       |                        Description                        |                                                                                                                        Try It |
| :----------------------------------------------------: | :-------------------------------------------------------: | ----------------------------------------------------------------------------------------------------------------------------: |
| [prometheus](https://github.com/prometheus/prometheus) | The Prometheus monitoring system and time series database | [![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/prometheus/prometheus) |
| [go-swagger](https://github.com/go-swagger/go-swagger) | A simple yet powerful representation of your RESTful API  | [![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/go-swagger/go-swagger) |
| [go-gin-app](https://github.com/gitpod-io/go-gin-app)  |               Gin example running in Gitpod               |  [![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/gitpod-io/go-gin-app) |
| [gosh-terminal](https://github.com/gosh-terminal/gosh) |  A terminal implemented in Go where you can do anything   |    [![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/gosh-terminal/gosh) |

## Further Reading

- [VSCode/Go Documentation](https://code.visualstudio.com/docs/languages/go) The stuff here also applies to Gitpod!
- [JetBrains/GoLand Documentation](https://www.jetbrains.com/help/go) The stuff here also applies to Gitpod!
- [VSCode/Go debugging](https://github.com/Microsoft/vscode-go/wiki/Debugging-Go-code-using-VS-Code) VSCode's Documentation on Go debugging
