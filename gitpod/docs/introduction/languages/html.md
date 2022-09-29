---
section: languages
title: HTML & CSS in Gitpod
---

<script context="module">
  export const prerender = true;
</script>

# HTML & CSS in Gitpod

Gitpod has great HTML and CSS support. In fact, Gitpod was made with web development in mind. And, depending on your needs, you may want to customize this experience further!

## Example Repositories

Here are a few HTML/CSS example projects that are already automated with Gitpod:

<div class="overflow-x-auto">

| Repository                                                                 | Description                                                                   | Try it                                                                                                                                   |
| -------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| [Front-End-Checklist](https://github.com/thedaviddias/Front-End-Checklist) | The perfect Front-End Checklist for modern websites and meticulous developers | [![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/thedaviddias/Front-End-Checklist) |
| [Devhints](https://github.com/rstacruz/cheatsheets)                        | TL;DR for developer documentation - a ridiculous collection of cheatsheets    | [![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/rstacruz/cheatsheets)             |

</div>

## [emmet](https://emmet.io/) &nbsp;Support

![emmet demo](../../../static/images/docs/emmet.png)
Gitpod comes with [emmet](https://emmet.io/) support right out of the box giving you access to powerful snippets and completions

## Live Preview

![Live Preview Demo](../../../static/images/docs/html-preview.png)
With Gitpod you can open a preview for HTML files while you are coding. You can do this by opening a web server `python -m http.server 8000`.

You can also automate this in your [`.gitpod.yml`](/docs/references/gitpod-yml) file, so that every time you start a new workspace your preview is ready to go. For example:

```yaml
tasks:
  - name: Start web server
    init: python -m http.server 8000

ports:
  - port: 8000
    onOpen: open-preview
```

## Try It!

Want to see a minimal example in action? Try it out by opening an example on Gitpod:

[![gitpod-io/Gitpod-Web-Development-Example](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/gitpod-io/Gitpod-Web-Development-Example)
