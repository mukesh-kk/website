<script lang="ts">
  import type { BlogPost } from "$lib/types/blog-post";

  import PostPreview from "./blog/post-preview.svelte";
  import Section from "./section.svelte";

  export let posts: BlogPost[];
  export let title: string = "More articles";
  export let text: string = "";
  export let textMaxW: string = "max-w-4xl";
  export let type: "blog" | "guides" | "customers" = "blog";
</script>

<Section>
  <h2 class="text-center text-h2" class:mb-small={!text}>{title}</h2>
  {#if text}
    <p class="text-center text-large mb-small mx-auto {textMaxW}">
      {text}
    </p>
  {/if}
  <div
    class="grid m-auto max-w-7xl w-full gap-6 grid-cols-none justify-center md:grid-cols-2 lg:grid-cols-3"
  >
    {#each posts as post}
      <div class="flex justify-center min-w-[20rem] max-w-sm">
        <PostPreview {post} {type} isMostRecent headlineOrder="h3" />
      </div>
    {/each}
  </div>
</Section>
