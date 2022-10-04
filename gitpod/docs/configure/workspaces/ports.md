---
section: workspaces
title: Ports
---

<script context="module">
  export const prerender = true;
  import IdeToggle from "$lib/components/docs/ide-toggle.svelte";
</script>

# Ports

Gitpod supports exposing HTTP ports via a custom domain that is associated with your workspace. You can also use port forwarding, so that you do not need to update your application if it already references the localhost hostname. You can forward all ports using the [local companion](/docs/references/ides-and-editors/local-companion), natively in both [VS Code Desktop](/docs/references/ides-and-editors/vscode), [JetBrains](/docs/integrations/jetbrains-gateway) and also via the [command-line](/docs/references/ides-and-editors/command-line) using SSH.

## Default port behaviors

By default, when a port is opening in a Gitpod workspace, Gitpod will:

1. **Direct HTTP traffic** - When an application starts listening to an HTTP port, Gitpod detects the port and exposes it on a URL that requires authentication. Setting the port to "public" would make the port URL accessible to anyone on the internet (or the installed network if using self-hosted Gitpod).
1. **Notify the user** - Gitpod sends the user a popup notification in their [IDE or editor](/docs/references/ides-and-editors) to let the user know that a port has been detected.

<figure>
<img class="shadow-medium w-full rounded-xl max-w-3xl mt-x-small" alt="Setting a port public/private in VS Code Browser" src="/images/editors/port-notification-vscode.png">
    <figcaption>Setting a port public/private in VS Code Browser</figcaption>
</figure>

<figure>
<img class="shadow-medium w-full rounded-xl max-w-3xl mt-x-small" alt="Setting a port public/private in a JetBrains IDE" src="/images/jetbrains-gateway/jetbrains-notification.png">
    <figcaption>Setting a port public/private in a JetBrains IDE</figcaption>
</figure>

## Accessing port URLs

You can access the dedicated port URL by pre-pending the port number to the workspace URL.

e.g `3000-yourworkspace.ws-eu45.gitpod.io`

You can also print the port URL using the [gp url](/docs/references/gitpod-cli) command (e.g. `gp url 3000`).

And if you prefer listing all open ports URLs at once, use [gp ports list](/docs/references/gitpod-cli) command.

## Configuring port behaviors

To modify or change default port behaviors, update the `ports` section of your [`.gitpod.yml`](/docs/references/gitpod-yml).

All changes to port behaviors take effect immediately, not requiring a workspace restart.

**Note:** Some actions (e.g. setting a port public/private) can be taken via the IDE or editor.

### Configure port opening

The port open event is triggered when a new port is detected as open within the workspace.

Port opening behavior can only be set via the [`.gitpod.yml`](/docs/references/gitpod-yml)

The property `onOpen` configures port opening behaviors:

- `notify` (default) - Show a notification for newly detected ports.
- `open-preview` - Open the port URL in a preview within the editor or IDE.
- `open-browser` - Open the port URL in a browser tab.
- `ignore` - Ignore default behavior (notify).

**Example**: Open a browser tab for port 8080

```yaml
ports:
  - name: Web App
    description: The main application web server
    port: 8080
    onOpen: open-browser
```

### Specifying port names & descriptions

You can give ports a `name` and a `description` (both optional). These properties will help you to add context about what the port is being used for.

You can execute [`gp ports list`](/docs/references/gitpod-cli#list-1) to output a table-formatted list of ports along with their status, URL, name and description.

<figure>
    <img class="shadow-medium w-full rounded-xl max-w-3xl mt-x-small" alt="Display port name and description on vscode Remote Explorer" src="/images/docs/ports-with-name-cmd.png" />
    <figcaption>Display ports info with gp cli</figcaption>
</figure>

The port's name and description will be displayed in the Remote Explorer of VS Code Browser's sidebar immediately after you change them in your [`.gitpod.yml`](/docs/references/gitpod-yml).

<figure>
    <img class="shadow-medium w-full rounded-xl max-w-3xl mt-x-small" alt="Display port name and description on vscode Remote Explorer" src="/images/docs/ports-with-name-vscode.png" />
    <figcaption>Display port name and description on VS Code Browser's Remote Explorer</figcaption>
</figure>

The property `visibility` configures who can access a port:

- `private` (default) - Only allow users with workspace access to access the port.
- `public` - Allows everyone with the port URL to access the port.

### Configure port visibility

Port visibility can be set in [`.gitpod.yml`](/docs/references/gitpod-yml), changed via [the Gitpod CLI](/docs/references/gitpod-cli), or manually changed within the IDE or editor.

<IdeToggle id="ide-toggle-ports">

<div slot="jetbrains">
    <p>Using the <a href="/docs/references/gitpod-cli#visibility">Gitpod CLI with ports visibility</a> in the terminal.</p>
</div>

<div slot="vscodebrowser">
    <figure>
    <img class="shadow-medium w-full rounded-xl max-w-3xl mt-x-small" alt="Setting a port public/private in VS Code Browser" src="/images/editors/toggle-port-visibility-vscode.png">
        <figcaption>Setting a port public/private in VS Code Browser</figcaption>
    </figure>
</div>

<div slot="vscodedesktop">
    <p>Using the <a href="/docs/references/gitpod-cli#visibility">Gitpod CLI with ports visibility</a> in the terminal.</p>
</div>

</IdeToggle>

### Configure port ranges

All port configurations can be applied to ranges as well as single ports.

**Example:** Prevent notifications for ports between 3000 and 8999.

Ports won't be shown in VS Code Browser's Remote Explorer or in the `gp` CLI until they are opened.

```yaml
ports:
  - port: 3000-8999
    onOpen: ignore
```

## Port forwarding

There are two types of port forwarding: local and remote.

Local port forwarding allows you to forward a port running in your Gitpod workspace to access via your localhost hostname. Remote port forwarding exposes a locally running process to use in your workspace. Remote port forwarding is not currently supported.

### Local port forwarding

<IdeToggle id="ide-toggle-ports">

<div slot="jetbrains">
    <p>To forward a port in JetBrains, navigate to the preferences page in the <a href="/docs/integrations/jetbrains-gateway">JetBrains Gateway</a> client to select the port and protocol to be forwarded.</p>
    <figure>
    <img class="shadow-medium w-full rounded-xl max-w-3xl mt-x-small" alt="Port forwarding in a JetBrains IDE" src="/images/jetbrains-gateway/port-forward-jetbrains.png">
        <figcaption>Port forwarding in a JetBrains IDE</figcaption>
    </figure>
</div>

<div slot="vscodebrowser">
    <p>Using the <a href="/docs/references/ides-and-editors/local-companion">Local Companion</a>, you can automatically forward all ports from your workspace to localhost. Setting up port forwarding for VS Code Browser allows you to use a project already configured with <code>localhost</code> without requiring any code changes.</p>
</div>

<div slot="vscodedesktop">
    <p>With VS Code Desktop, all ports are automatically forwarded, allowing you to access any forwarded ports on your localhost address. You can also manually forward a port using the ports view.</p>

    <figure>
    <img class="shadow-medium w-full rounded-xl max-w-3xl mt-x-small" alt="Port forwarding in VS Code Desktop" src="/images/editors/port-forwarding-vscode-desktop.png">
        <figcaption>Port forwarding in VS Code Desktop</figcaption>
    </figure>

</div>

</IdeToggle>

### Local port forwarding via SSH

Using [SSH command-line](/docs/references/ides-and-editors/command-line) access to your workspace, ports can also be forwarded manually using tools such as the OpenSSH remote login client.

**Example:** Forwarding port `3000` to `localhost:3000`

`ssh -L 3000:localhost:3000 <workspace-ssh-connection>`

### Cross-Origin Resource Sharing (CORS)

If you start a server on a private port, let's say 5001, and want to connect to it from your web application which runs on a different port, e.g. 3000, you have to configure your requests. This is necessary because Gitpod requires credentials for private ports. Without credentials, Gitpod cannot verify that the request is made by an authorized user.

**Configure your web application**

To make this work, your web application's `fetch` request needs to have the `credentials: "include"` option set. See the [MDN doc's `credentials` description](https://developer.mozilla.org/en-US/docs/Web/API/fetch) for more details.

**Configure your server**

In your server (the one on port 5001 in the above example), you have to configure the response to include the `Access-Control-Allow-Credentials` header. Without it, your browser rejects the response and you see CORS errors in the browser console.
