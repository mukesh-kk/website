---
section:
title: Introduction
---

<script lang="ts" context="module">
  export const prerender = true;
  export async function load({ session }) {
    return { props: { changelogEntries: session.changelogEntries } };
  }
</script>

<script lang="ts">
  import { setContext } from "svelte";
  import GetStarted from "$lib/components/docs/landing-page/get-started.svelte";
  import Timeline, { contextKeyChangelogEntries } from "$lib/components/docs/landing-page/timeline/timeline.svelte";
  import OpenGraph from "$lib/components/open-graph.svelte";

  export let changelogEntries;

  setContext(contextKeyChangelogEntries, changelogEntries);
</script>

<OpenGraph
data={{
    description:
      "Explore our docs to learn how to set up and configure your cloud developer environment. Quickstart. Getting started. Configure. Develop. IDEs. Editors. Integrations. Self-Hosted. Supply Chain Security.",
    title: "Gitpod Documentation - Educate, Configure, Develop",
    keywords: "documentation, how to, education, learn",
  }}
/>

<GetStarted />

## Latest updates

<Timeline />

To see all updates view our [changelog](/changelog)
