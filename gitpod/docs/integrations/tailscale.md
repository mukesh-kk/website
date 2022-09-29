---
section: integrations
title: Tailscale
---

<script context="module">
  export const prerender = true;
</script>

# Tailscale

With Tailscale you can automatically and securely connect your Gitpod workspace to other development resources, whether in the cloud or on prem, such as a production database behind your company’s firewall. You can also spin up several Gitpod workspaces that can talk to each other.

[Tailscale](https://tailscale.com/) is built on top of the point-to-point open-source [WireGuard](https://www.wireguard.com/) protocol which powers an encrypted mesh network or `tailnet`. At Gitpod we are big fans of their product and recently announced an [official partnership](/blog/tailscale) with them.

## Integration

If you’re already using Tailscale, the following steps need to be done (see https://github.com/gitpod-io/demo-tailscale-with-gitpod for a working example):

1. Install `tailscale` through a custom `.gitpod.Dockerfile` by adding the following layer to it.

```Dockerfile
USER root

RUN curl -fsSL https://pkgs.tailscale.com/stable/ubuntu/focal.gpg | sudo apt-key add - \
     && curl -fsSL https://pkgs.tailscale.com/stable/ubuntu/focal.list | sudo tee /etc/apt/sources.list.d/tailscale.list \
     && apt-get update \
     && apt-get install -y tailscale
```

2. Start `tailscale` on workspace start and maintain the machine state across workspaces by adding the following tasks to your `.gitpod.yml`.

```yaml
tasks:
  - name: tailscaled
    command: |
      if [ -n "${TAILSCALE_STATE_MYPROJECT}" ]; then
        # restore the tailscale state from gitpod user's env vars
        sudo mkdir -p /var/lib/tailscale
        echo "${TAILSCALE_STATE_MYPROJECT}" | sudo tee /var/lib/tailscale/tailscaled.state > /dev/null
      fi
      sudo tailscaled
  - name: tailscale
    command: |
      if [ -n "${TAILSCALE_STATE_MYPROJECT}" ]; then
        sudo -E tailscale up
      else
        sudo -E tailscale up --hostname "gitpod-${GITPOD_GIT_USER_NAME// /-}-$(echo ${GITPOD_WORKSPACE_CONTEXT} | jq -r .repository.name)"
        # store the tailscale state into gitpod user
        gp env TAILSCALE_STATE_MYPROJECT="$(sudo cat /var/lib/tailscale/tailscaled.state)"
      fi
```

This configuration will register a Tailscale node based on the following name scheme: `gitpod-{user-name}-{repo-name}`. On first workspace start you will get asked to login through the terminal. When this was successful a Tailscale machine state will be stored in your Gitpod's account. On subsequent starts of workspaces on this project this machine state will be restored.

IF you enable [Tailscale's Magic DNS](https://tailscale.com/kb/1081/magicdns/) you get a stable domain for your project's services that you can reach from any other Tailscale node (e.g. another workspace or your local machine).

> **Warning:** Be aware that starting and connecting multiple workspaces for the same project in parallel results in unreliable network connections.
