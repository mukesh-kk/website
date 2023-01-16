<script lang="ts">
  import type { BlogPost } from "$lib/types/blog-post";

  import { page } from "$app/stores";
  import MoreArticles from "../more-articles.svelte";

  const recentPosts = $page.stuff.posts.slice(0, 4);
  $: recentPostsWithoutCurrent = recentPosts
    .filter((post: BlogPost) => $page.url.pathname.indexOf(post.slug) === -1)
    .slice(0, 3);
</script>

<MoreArticles posts={recentPostsWithoutCurrent} />
