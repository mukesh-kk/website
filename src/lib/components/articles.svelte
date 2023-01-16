<script lang="ts">
  import type { BlogPost } from "$lib/types/blog-post";

  import MoreArticles from "$lib/components/more-articles.svelte";
  import { page } from "$app/stores";

  export let title: string;
  export let text: string = "";
  export let slugs: string[];

  const posts = $page.stuff.posts.filter((p: BlogPost) =>
    slugs.some((slug) => p.slug === slug)
  );
</script>

<MoreArticles {title} {text} {posts} {...$$restProps} />
