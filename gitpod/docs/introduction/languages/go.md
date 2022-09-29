---
section: languages
title: Go in Gitpod
---

<script context="module">
  export const prerender = true;
</script>

# Go in Gitpod

Gitpod supports Go right out of the box, but there are still ways to optimize your Go experience within Gitpod.

## Example Repositories

Here are a few Go example projects that are already automated with Gitpod:

<div class="overflow-x-auto">

| Repository                                             | Description                                               |                                                                                                                        Try It |
| ------------------------------------------------------ | --------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------: |
| [prometheus](https://github.com/prometheus/prometheus) | The Prometheus monitoring system and time series database | [![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/prometheus/prometheus) |
| [go-swagger](https://github.com/go-swagger/go-swagger) | A simple yet powerful representation of your RESTful API  | [![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/go-swagger/go-swagger) |
| [go-gin-app](https://github.com/gitpod-io/go-gin-app)  | Gin example running in Gitpod                             |  [![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/gitpod-io/go-gin-app) |
| [gosh-terminal](https://github.com/gosh-terminal/gosh) | A terminal implemented in Go where you can do anything    |    [![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/gosh-terminal/gosh) |

</div>

## Workspace Configuration

### VSCode Extensions

<div class="overflow-x-auto">

| Name                                                                                               | Description                                                                                |
| -------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------ |
| [Go Test Explorer](https://marketplace.visualstudio.com/items?itemName=premparihar.gotestexplorer) | Provides Test Explorer for Go which allows you to run your tests at the click of a button! |

</div>

To install Go Test Explorer for your repository, add the following to your [.gitpod.yml](/docs/references/gitpod-yml)

```YAML
vscode:
  extensions:
    - premparihar.gotestexplorer
```

### **[Start-up tasks](/docs/configure/workspaces/tasks)**

Here is how to have your dependencies automatically fetched before you open your Gitpod workspace!

```yaml
tasks:
  - init: go get -v -t -d ./...
```

A full example of a [.gitpod.yml](/docs/references/gitpod-yml) file might look like this

```yaml
image: gitpod/workspace-full

tasks:
  - init: go get -v -t -d ./...

vscode:
  extensions:
    - premparihar.gotestexplorer
```

### Using the `dep` dependency manager in Gitpod

If your project uses the [`dep`](https://golang.github.io/dep/) dependency manager then you need to add a [.gitpod.Dockerfile](/docs/configure/workspaces/workspace-image) to your project. A basic example that extends the default workspace image might be something like:

```dockerfile
FROM gitpod/workspace-full

USER gitpod

RUN brew install dep
```

Also, don't forget to reference the above Dockerfile in your `.gitpod.yml` configuration file, like so:

```YAML
image:
  file: .gitpod.Dockerfile

tasks:
  - init: dep ensure

vscode:
  extensions:
    - premparihar.gotestexplorer
```

# Installing custom `go` version on a minimal workspace

Let's say you want go v1.17, follow along!
At first, add a [.gitpod.Dockerfile](/docs/configure/workspaces/workspace-image) file on your repo with the following content in it:

```dockerfile
# You can find the new timestamped tags here: https://hub.docker.com/r/gitpod/workspace-base/tags
FROM gitpod/workspace-base:2022-04-26-07-40-59

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

Secondly, reference the above Dockerfile in your `.gitpod.yml` configuration file, like so:

```yaml
image:
  file: .gitpod.Dockerfile
```

Now you can [See it in action on a new workspace](/docs/references/gitpod-yml#see-it-in-action)

## Debugging

Here is a quick clip on how to automatically configure debugging for Go!

![Go debugging example](../../../static/images/docs/GoDebug.gif)

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

To see a basic repository with Go debugging enabled, please check out [gitpod-io/Gitpod-Go-Debug](https://github.com/gitpod-io/Gitpod-Go-Debug):

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/gitpod-io/Gitpod-Go-Debug)

## Using `$GOPATH`

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
  - init: >
      cd /workspace/src/github.com/demo-apps/go-gin-app &&
      go get -v ./... &&
      go build -o app
    command: >
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

## Further Reading

- [VSCode/Go Documentation](https://code.visualstudio.com/docs/languages/go) The stuff here also applies to Gitpod!
- [VSCode/Go debugging](https://github.com/Microsoft/vscode-go/wiki/Debugging-Go-code-using-VS-Code) VSCode's Documentation on Go debugging
