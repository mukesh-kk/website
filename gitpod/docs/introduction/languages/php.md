---
section: languages
title: PHP in Gitpod
---

<script context="module">
  export const prerender = true;
</script>

# PHP in Gitpod

Gitpod supports PHP right out of the box, but more advanced features such as debugging can be configured, so here is how to do it!

> There is also an awesome community project that utilizes [ddev](https://github.com/drud/ddev) with Gitpod and makes things much easier.
> Be sure to check it out first from below!
>
> https://drud.github.io/ddev-gitpod-launcher/
>
> With it, you can run XDebug out of the box, change PHP versions on the fly, and much more!

## Example Repositories

<div class="overflow-x-auto">

| Repository                                                         | Description                                                                    | Try it                                                                                                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------- |
| [symfony-demo](https://github.com/gitpod-io/symfony-demo)          | A PHP/Symfony reference application following best practices                   | [![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/gitpod-io/symfony-demo)                |
| [magento2gitpod](https://github.com/nemke82/magento2gitpod)        | Magento 2 optimized setup for Gitpod: Nginx, MySQL, PHP 7.2, PHP-FPM and more  | [![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/nemke82/magento2gitpod)                |
| [koel](https://github.com/phanan/koel)                             | A personal music streaming server that works                                   | [![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/phanan/koel)                           |
| [drupal](https://github.com/bserem/gitpod-drupal-mysql-starterkit) | Drupal 9 with MySQL, suitable for site building and contrib module development | [![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/bserem/gitpod-drupal-mysql-starterkit) |
| [phpmyadmin](https://github.com/apolopena/gitpod-phpmyadmin)       | A phpMyAdmin example with Node.js, a REST API and MySQL for data persistence   | [![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/apolopena/gitpod-phpmyadmin)           |

</div>

## Switching PHP versions

Gitpod installs PHP from [Ondřej Surý's PPA](https://launchpad.net/~ondrej/+archive/ubuntu/php) in [here](https://github.com/gitpod-io/workspace-images/blob/main/chunks/tool-nginx/Dockerfile). The default version should be set to PHP8.

But let's say you want to switch to PHP7.4, follow along!
At first, add a [.gitpod.Dockerfile](/docs/configure/workspaces/workspace-image) file on your repo with the following content in it:

```dockerfile
# You can find the new timestamped tags here: https://hub.docker.com/r/gitpod/workspace-full/tags
FROM gitpod/workspace-full:2022-05-08-14-31-53

# Change your version here
RUN sudo update-alternatives --set php $(which php7.4)
```

Secondly, reference the above Dockerfile in your `.gitpod.yml` configuration file, like so:

```yaml
image:
  file: .gitpod.Dockerfile
```

Now you can [See it in action on a new workspace](/docs/references/gitpod-yml#see-it-in-action)

## Debugging PHP in Gitpod

![PHP debugging example](../../../static/images/docs/phpDebug.png)

The PHP Debug extension allows debugging PHP applications from within Gitpod.

To get this extension for your project, you must do two things:

First, you must create a [.gitpod.Dockerfile](/docs/configure/workspaces/workspace-image) for your repository:

```dockerfile
FROM gitpod/workspace-full:2022-05-08-14-31-53

RUN sudo install-packages php-xdebug
```

Second, reference the above Dockerfile in a [.gitpod.yml](/docs/references/gitpod-yml) file, and then also install the extension, like so:

```yaml
image:
  file: .gitpod.Dockerfile

vscode:
  extensions:
    - felixfbecker.php-debug
```

Now you can [See it in action on a new workspace](/docs/references/gitpod-yml#see-it-in-action)

Later, you can head over to `Run and Debug` on the left hand side and have fun debugging PHP! You can also create a `launch.json` file.

Finally, here is a full [example repository](https://github.com/gitpod-io/Gitpod-PHP-Debug) containing the complete Gitpod PHP debug configuration described above. You can try it by clicking here:

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/gitpod-io/Gitpod-PHP-Debug)

## PECL Package Manager

Gitpod's default workspace image also comes with the [PECL](https://pecl.php.net/) package manager pre-installed. To install packages with it, you must use `sudo pecl install <EXTENSION>` in your repository's [.gitpod.Dockerfile](/docs/configure/workspaces/workspace-image), e.g. like so:

```dockerfile
FROM gitpod/workspace-full

RUN sudo pecl channel-update pecl.php.net && \
    sudo pecl install <EXTENSION>
```

where `<EXTENSION>` is the PHP extension you want to install, e.g. `xdebug`.

## Further Reading

- <a class="no-nowrap" href="https://notes.etin.space/posts/gitpodifying-a-new-laravel-application">Gitpodifying a new Laravel Application</a> by Etin Obaseki
