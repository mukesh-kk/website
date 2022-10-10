<script lang="ts" context="module">
  export const prerender = true;

  export async function load({ session }) {
    const posts = session.posts;
    return { props: { posts } };
  }
</script>

<script lang="ts">
  import type { BlogPost } from "$lib/types/blog-post";
  import OpenGraph from "$lib/components/open-graph.svelte";
  import PostPreview from "$lib/components/blog/post-preview.svelte";
  import Section from "$lib/components/section.svelte";
  import Header from "$lib/components/header.svelte";

  export let posts: BlogPost[];
</script>

<style lang="postcss">
  .blog-layout {
    @apply mb-xx-large;

    @media (max-width: 972px) {
      @apply mb-x-large;
    }
  }
</style>

<div class="blog-layout">
  <OpenGraph
    data={{
      description:
        "The latest news, articles, and opinions around developer experience and remote development in the cloud.",
      title: "Gitpod Blog - News, ideas and background stories",
      keywords: "blog, tutorial, news, articles",
    }}
  />
  <Header
    title="Blog"
    text="The latest news, articles, and opinions around developer <br class='hidden sm:block'/>experience and remote development in the cloud."
    fullWidth={true}
    textClassNames="mb-small text-large"
  >
    <div
      slot="content"
      class="grid m-auto max-w-7xl w-full gap-6 grid-cols-none justify-center md:grid-cols-2 lg:grid-cols-3"
    >
      {#each posts.slice(0, 6) as post}
        <div class="flex justify-center min-w-[20rem] max-w-sm">
          <PostPreview {post} type="blog" isMostRecent />
        </div>
      {/each}
    </div>
  </Header>

  <Section>
    <h2 class="mb-small text-center">Previous posts</h2>
    <div
      class="previous grid m-auto max-w-7xl w-full gap-6 grid-cols-none justify-center md:grid-cols-2 lg:grid-cols-3"
    >
      {#each posts.slice(6) as post}
        <div class="flex justify-center min-w-[20rem] max-w-sm">
          <PostPreview {post} type="blog" />
        </div>
      {/each}
    </div>
  </Section>
</div>
