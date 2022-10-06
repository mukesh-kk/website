---
section: languages
title: Ruby in Gitpod
---

<script context="module">
  export const prerender = true;
</script>

# Ruby in Gitpod

It's relatively easy to set up your Ruby project in Gitpod.

## Ruby Versions

As of this writing, Gitpod comes with Ruby 3.1 pre-installed in the [gitpod/workspace-full](https://hub.docker.com/r/gitpod/workspace-full).

To use a different Ruby version, you can [change the base image](https://www.gitpod.io/docs/configure/workspaces/workspace-image#configure-a-public-docker-image) to one of the following:

- [gitpod/workspace-ruby-2](https://hub.docker.com/r/gitpod/workspace-ruby-2)
- [gitpod/workspace-ruby-3.0](https://hub.docker.com/r/gitpod/workspace-ruby-3.0)

These images are automatically updated every week with the latest ruby patch versions.

To use a fixed version, you may use a [custom Dockerfile](https://www.gitpod.io/docs/configure/workspaces/workspace-image#configure-a-custom-dockerfile).

```dockerfile
FROM gitpod/workspace-full
USER gitpod

# Install Ruby version 2.7.6 and set it as default
RUN _ruby_version=ruby-2.7.6 \
    && printf "rvm_gems_path=/home/gitpod/.rvm\n" > ~/.rvmrc \
    && bash -lc "rvm reinstall ${_ruby_version} && \
                 rvm use ${_ruby_version} --default" \
    && printf "rvm_gems_path=/workspace/.rvm" > ~/.rvmrc \
    && printf "{ rvm use \$(rvm current); } >/dev/null 2>&1\n" >> "$HOME/.bashrc.d/70-ruby"
```

> 💡 Explanation: Gitpod initially [sets up RVM](https://github.com/gitpod-io/workspace-images/blob/481f7600b725e0ab507fbf8377641a562a475625/chunks/lang-ruby/Dockerfile#L11-L26) in `/home/gitpod/.rvm`, but then later switches the RVM configuration directory to `/workspace/.rvm`, so that any user-made changes (like installing new gems) are persisted within a Gitpod workspace. However, during the Dockerfile build, the `/workspace` directory doesn't exist yet, so we temporarily reset RVM's configuration directory to `/home/gitpod/.rvm`.

## Example Repositories

Here are a few Ruby example projects that are already automated with Gitpod:

<div class="overflow-x-auto">

| Repository                                                           | Description                                              | Try it                                                                                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| [Ruby on Rails template](https://github.com/gitpod-io/ruby-on-rails) | Ruby on Rails template with a PostgreSQL database        | [![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/gitpod-io/ruby-on-rails) |
| [Forem](https://github.com/forem/forem)                              | The platform that powers [dev.to](https://dev.to)        | [![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/forem/forem)             |
| [GitLab](https://gitlab.com/gitlab-org/gitlab)                       | The open source end-to-end software development platform | [![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://gitlab.com/gitlab-org/gitlab)       |

 </div>

## VSCode Extensions

Here are a few useful extensions that you'll likely want to install in your Ruby project.

### [Ruby Test Explorer](https://marketplace.visualstudio.com/items?itemName=connorshea.vscode-ruby-test-adapter)

With the Ruby test explorer, you can run unit tests from within the Gitpod UI.
![Ruby test explorer example](../../../static/images/docs/ruby_test_ui.png)
To add this extension to your repository, simply add these lines to your [.gitpod.yml](/docs/references/gitpod-yml) configuration file:

```YAML
vscode:
  extensions:
    - connorshea.vscode-ruby-test-adapter@0.9.0
    - hbenl.vscode-test-explorer@2.21.1
```

## Ruby On Rails

So, you want to write your cool new Ruby On Rails application in Gitpod? Well, here is an idea of how to do it. Please take a look at our [minimal Rails example](https://github.com/gitpod-io/Gitpod-Ruby-On-Rails) running in Gitpod:

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/gitpod-io/Gitpod-Ruby-On-Rails)
