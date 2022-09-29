---
author: ghuntley
date: Wednesday, 16 Feb 2022 06:00:00 UTC
excerpt: We're launching our open source program to help you build great things without friction, for free.
slug: gitpod-for-opensource
subtitle:
teaserImage: teaser.jpg
image: teaser.jpg
title: Introducing Gitpod for Open Source
---

<script context="module">
  export const prerender = true;
</script>

**TL;DR**

- Today we are announcing our “[Gitpod for Open Source](/for/opensource)” program.
- Gitpod has formed a new team to support open source (ps [we are hiring](https://www.gitpod.io/careers)) and personalized support is now available to open source maintainers / communities.
- complimentary [Gitpod Self-Hosted licenses](/self-hosted) are now available for projects that maintain their independence via running their own infrastructure (ie Haskell, Drupal, Rust). Apply via [this form](/for/opensource).
- Free and open source software projects aligned with [FOSSHost](https://fosshost.org/about) can request an account upgrade to a complimentary professional open source account via [this form](/for/opensource).
- Over 18,000 people in the GitHub ecosystem have been pre-qualified for complimentary professional open source accounts with unlimited hours. If you are in the short-list your account will be automatically upgraded either upon account creation or when you next start a workspace with your existing account. No action is required.
  - If you had published a Visual Studio Code extension, Emacs or Vim plugin on GitHub before this blog post went live then you are likely on the shortlist.
  - If your membership was public before this blog post went live on one of more of the following GitHub organizations then you are likely on the shortlist:

> alpinelinux, angular, apache, apple, archlinux, babel, caddyserver, cake-build, cakephp, centos, clojure, cncf, cockroachdb, curl, darktable-org, dart-lang, django, docker, dotnet, eclipse, elastic, elixir-lang, endeavouros-team, erlang, expressjs, facebook, flutter, fody, freebsd, fsprojects, ghc, gnome, golang, haproxy, hashicorp, haskell, homebrew, illumos, jaegertracing, jetbrains, julialang, jruby, k3s-io, kubernetes, laravel, libressl-portable, llvm, lua, maintainers, mathworks, microsoft, moby, mongodb, mono, mozilla, mysql, neovim, netbsd, nginx, nixos, nodejs, npm, obsproject, ohmyzsh, open-telemetry, openjdk, openresty, openssl, particular, perl, phoenixframework, php, pnpm, postgres, python, r-lib, rails, redhat-developer, redis, rethinkdb, rstudio, ruby, rust-lang, scala, serilog, sixlabors, sparklemotion, spring-projects, statiqdev, sveltejs, symfony, tailwindlabs, tc39, tmux, twbs, videolan, vim, vuejs, wolfssl, womenwhocode and xunit

- Projects, communities and maintainers that use GitLab (or Bitbucket) or that are not in the above list can use [this form](/for/opensource) to request an upgrade of your account to our complimentary professional open-source plan.

Howdy folks,

I’m gonna assume this is the first time you have heard about Gitpod and build from there because context is important. Gitpod is an open-core open source project and company that provides reproducible software developer environments. Gitpod can be consumed as a service or [Self-Hosted on your own infrastructure](/self-hosted).

> “Gitpod totally changed the development velocity for RedwoodJS — it removed any issues related to configurations of dev environments and made it incredibly easy to contribute. Reviewing pull requests is delightful because they are prebuilt and ready for review!”
>
> **_Tom Preston-Werner, Co-founder of RedwoodJS (and GitHub)_**

Similar to developer experience, Open Source is part of Gitpod’s DNA. It wouldn’t have been possible for us to create Gitpod without all of the amazing open-source work it’s built upon. And still, we’re developing huge parts of Gitpod out in the open. Not only is Gitpod an open source company, but our product is positioned to remove one of the biggest hurdles before developers can contribute to open source: setting up the developer environment..

> “I'm using Gitpod almost daily when trying out new technologies, working on OSS PRs/repros or when giving demos. Welcome to the promised land of cloud developer environments.”
>
> **_Johannes Schickling, Co-founder of Prisma_**

If we critically look at how commercial software is currently developed, people have cobbled-together sets of build tools, packages, runtime environments, and IDEs that they all desperately try to maintain as needed to ship their own software to their customers.

That’s a rather simplistic view of the world however. Software in 2022 is made up of other software and a myriad of tools that are built and maintained almost exclusively by unpaid volunteers. Each one of these open source dependencies also have cobbled-together sets of build tools, packages, runtime environments that are needed to produce the artifacts that are needed by the consuming software.

These toolchains can be incompatible with each other thus introducing friction and risk that contributing patches back to open source projects will break the ability to ship software to customers. To make matters worse, this problem can be easily solved and an incredible amount of time is expended on toolchain setup activities that are no longer required because Docker now exists.

Consider the common scenario where people work different Python apps with different dependencies (including C/FFI) running against different Python environments. What if you didn’t have to remember to run the right commands and click the right buttons in your editor to get everything working correctly? Instead, you just clicked a button and spun up an environment isolated from everything else, with the right tools and packages and runtime environment for that codebase?

> Cloud-based, reproducible developer environments are a sleeper technology that’s going to ramp up for a decade in usage until, one day, everyone will be “behind the times” if they’re not already using them. I see it as similar to git, where the possibilities are endless, the model is superior, work evolves around it as an ecosystem builds up around it, and then it’s the new normal.
>
> **_Phillip Carter, Senior Product Manager at Honeycomb_**

That isn’t some dream. It’s actually possible today, and it's only going to become more capable and widespread over time. By converting the steps in an open-source project’s ‘CONTRIBUTING.md’ into a Dockerfile contributors that use Gitpod can spin up an environment with a single button press, author contributions, debug it, do whatever from any device and from anywhere. Everyone can contribute even if they don't have access to powerful (expensive) computers.

Gitpod is equally delightful for open source maintainers as well:

- Code anywhere, on any device. No need for over powered laptops, a chrome book and even an iPad will work just fine.
  Gitpod prebuilds developer environments whenever there's a commit to a repository or a pull-request is raised.
- Gone are the days of typing “git clone” && “git pull” by hand. Open each pull–request you wish to review in a new browser tab or another desktop editor window and everything is restored, precompiled and ready to go.
- With Gitpod, people can contribute to your project with a single click. Tedious environment setups, contributing guides and maintenance activities no longer exist. You'll receive more contributions and contributions are easier to review!
- By using Gitpod, no packages or dependencies are downloaded to your devices which helps contain security incidents by inhibiting malicious actors pivoting towards completely compromising your workstation.

> “With Gitpod, I can review any pull request in a full coding environment where I can edit, build, and test the contribution, by just prepending "http://gitpod.io#". Gitpod makes the pull-request review process so much nicer for me and I no longer have to do any local checkouts.”
>
> **_Julius Volz, Co-founder of Prometheus_**

# Benefits

- People and projects who qualify for Gitpod’s Open Source program are provided with unlimited hours for usage on public repos. Contributors to an open-source project are provided with a generous free plan for up to 50h a month, including private repos.
- complimentary [Gitpod Self-Hosted](/self-hosted) licenses are available for projects that maintain their independence via running their own infrastructure (ie Haskell, Drupal, Rust).
- Personalized support is now available to open source maintainers / communities.

# Who is eligible?

To qualify for Gitpod’s Open Source program, you need to meet one of this criteria:

- You are a maintainer, core contributor to a well-established free software or open-source project.
- You regularly contribute to free software or open source communities in other ways (e.g. producing regular content like blog posts, videos, live streams, translations, or organizing meet-ups, conferences, hackathons, etc).
- You are an author, core contributor of extensions for editors such as VSCode, VIM, Emacs, et al. or of developer tools such as build systems, programming languages, compilers, and editor tooling such as Language Server Protocol (LSP) implementations.
- A significant part of your income (employment or via community support) is from maintaining or producing open source work.

## How do I apply?

Via [this form](/for/opensource) but you might not need to. Over 18,000 people in the GitHub ecosystem have been pre-qualified for complimentary professional open source accounts with unlimited hours. If you are in the short-list your account will be automatically upgraded either upon account creation or when you next start a workspace. No action is required.

- If you had published a Visual Studio Code extension, Emacs or Vim plugin on GitHub before this blog post went live then you are likely on the shortlist.

- If your membership was public before this blog post went live on one of more of the following GitHub organizations then you are likely on the shortlist:

> alpinelinux, angular, apache, apple, archlinux, babel, caddyserver, cake-build, cakephp, centos, clojure, cncf, cockroachdb, curl, darktable-org, dart-lang, django, docker, dotnet, eclipse, elastic, elixir-lang, endeavouros-team, erlang, expressjs, facebook, flutter, fody, freebsd, fsprojects, ghc, gnome, golang, haproxy, hashicorp, haskell, homebrew, illumos, jaegertracing, jetbrains, julialang, k3s-io, kubernetes, laravel, libressl-portable, llvm, lua, maintainers, mathworks, moby, mongodb, mono, mozilla, mysql, neovim, netbsd, nginx, nixos, nodejs, npm, obsproject, ohmyzsh, open-telemetry, openjdk, openresty, openssl, particular, perl, phoenixframework, php, pnpm, postgres, python, r-lib, rails, redhat-developer, redis, rethinkdb, rstudio, rust-lang, scala, serilog, sixlabors, sparklemotion, spring-projects, statiqdev, sveltejs, symfony, tailwindlabs, tc39, tmux, twbs, videolan, vim, vuejs, wolfssl, womenwhocode and xunit

For projects, communities and maintainers that use GitLab (or Bitbucket) or that are not in the above list please use this [application form](/for/opensource) to request an upgrade of your account to our complimentary professional open-source plan.

## How do I know if my account has been pre-qualified?

Start a Gitpod workspace then head to [your dashboard](https://gitpod.io/plans). If you don't have an account then you can create one by [starting any workspace (ie. such as Doom)](https://gitpod.io/#https://github.com/gitpod-io/doom). If you see “You are currently using the Professional Open Source plan” on [your dashboard](https://gitpod.io/plans) then your account has been upgraded.

## How do I get started?

You can start your first Gitpod workspace by prefixing https://gitpod.io# to your project's source control address.

For example:

https://github.com/gitpod-io/doom becomes https://gitpod.io#https://github.com/gitpod-io/doom

## Recommended Reading

- [https://www.gitpod.io/screencasts/getting-started-with-gitpod](/screencasts/getting-started-with-gitpod)
- [https://www.gitpod.io/docs/configure/projects/prebuilds](/docs/configure/projects/prebuilds)
- [https://www.gitpod.io/docs/configure/user-settings/dotfiles](/docs/configure/user-settings/dotfiles)
- [https://www.gitpod.io/docs/references/gitpod-yml](/docs/references/gitpod-yml)

## Anything else?

Email me at [geoff@gitpod.io](mailto:geoff@gitpod.io?subject=Gitpod%20for%20OSS). Happy hacking!

ps. If your open-source software appears in our bill of materials then Gitpod would like to unconditionally shout you [some beers](https://github.com/moby/buildkit/issues/2525) or [more](/blog/devxconf-wrap) as our way of saying thank-you. Thanks for reading 🧡
