<script lang="ts">
  import type { BlogPost } from "$lib/types/blog-post";

  import { page } from "$app/stores";
  import MoreArticles from "../more-articles.svelte";
  import type { tagType } from "$lib/types/blog";

  export let tags: tagType[] | "all" = "all";
  export let title: string;

  // Function for generating a predictable random number
  const prng = function (s: number) {
    var mask = 0xffffffff;
    var m_w = (123456789 + s) & mask;
    var m_z = (987654321 - s) & mask;

    return function () {
      m_z = (36969 * (m_z & 65535) + (m_z >>> 16)) & mask;
      m_w = (18000 * (m_w & 65535) + (m_w >>> 16)) & mask;

      var result = ((m_z << 16) + (m_w & 65535)) >>> 0;
      result /= 4294967296;
      return result;
    };
  };

  // Shuffle array in a predictable way
  function shuffle(array: any[], seed: number) {
    var m = array.length,
      t: any,
      i: any;

    while (m) {
      i = Math.floor(prng(seed)() * m--);

      t = array[m];
      array[m] = array[i];
      array[i] = t;
      ++seed;
    }

    return array;
  }

  const posts = $page.stuff.posts;
  // Filter out the current post and posts older than a year & if slug is a specific one (e.g. /blog/building-for-the-long-run) & then shuffle the array
  $: recentPostsWithoutCurrent = shuffle(
    posts
      .filter((post: BlogPost) => post.slug !== "building-for-the-long-run")
      .filter((post: BlogPost) => $page.url.pathname.indexOf(post.slug) === -1)
      .filter((post) => {
        if (tags === "all") {
          return true;
        }
        if (!post.tags) return false;
        return post.tags.some((t: tagType) => tags.includes(t));
      })
      .filter((post) => {
        const oneYearAgo = new Date();
        oneYearAgo.setFullYear(oneYearAgo.getFullYear() - 1);
        return new Date(post.date) > oneYearAgo;
      }),
    title.length
  )
    .slice(0, 3)
    .sort((a, b) => Date.parse(b.date) - Date.parse(a.date));
</script>

<MoreArticles posts={recentPostsWithoutCurrent} />
