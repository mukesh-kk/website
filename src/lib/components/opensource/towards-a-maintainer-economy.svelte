<script lang="ts">
  import type { BlogPost } from "$lib/types/blog-post";

  import { session } from "$app/stores";
  import MoreArticles from "../more-articles.svelte";

  const posts: BlogPost[] = [
    $session.posts.find(
      (p: BlogPost) => p.slug === "gitpod-open-source-sustainability-fund"
    ),
    {
      title: "Open-Source Funding during DevX Conf",
      excerpt:
        "It's time to start giving back. Participants voted for their favourite nominated open-source projects and we distributed USD $10,000 between these projects.",
      image: "/images/opensource/devxconf.png",
      isNotAnActualPost: true,
      href: "https://devxconf.org/opensource",
    },
    {
      title: "Platform to Foster OSS Contributions",
      excerpt:
        "We created contribute.dev to showcase open-source project with an automated developer environment. Here new contributors can easily find new projects for frictionless open-source contributions.",
      image: "/images/opensource/contribute.dev.png",
      isNotAnActualPost: true,
      href: "https://contribute.dev",
    },
  ];
</script>

<MoreArticles
  title="Towards a maintainer economy"
  text="Gitpod supports the high achievers that our digital society is built upon."
  {posts}
/>
