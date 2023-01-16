<script lang="ts" context="module">
  export const prerender = true;

  export const load: Load = async () => {
    const guides = await getGuides();
    return { props: { guides } };
  };
</script>

<script lang="ts">
  import OpenGraph from "$lib/components/open-graph.svelte";
  import PostPreview from "$lib/components/blog/post-preview.svelte";
  import Write from "$lib/components/guides/write.svelte";
  import Header from "$lib/components/header.svelte";
  import type { Load } from "@sveltejs/kit";
  import { getGuides } from "$lib/utils/content";

  export let guides = [];
</script>

<OpenGraph
  data={{
    description: "Follow these guides to use Gitpod with any project",
    title: "Guides",
  }}
/>

<Header
  title="Guides"
  text="Follow these guides to use Gitpod with any project"
  tight={true}
/>

<div
  class="grid justify-items-center grid-cols-1 md:grid-cols-2 max-w-4xl m-auto lg:max-w-full lg:grid-cols-1 gap-xx-small"
>
  {#each guides as guide}
    <PostPreview post={guide} layout="row" type="guides" isMostRecent />
  {/each}
</div>

<Write />
