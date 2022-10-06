<script lang="ts">
  import { page } from "$app/stores";
  import type { OpenGraph } from "$lib/types/open-graph";

  export let data: OpenGraph;

  const {
    description,
    image = "images/media-image.jpg",
    title,
    keywords = "dev environment, developer environment, devops, cloud ide, github ide, gitlab ide, javascript, online ide, web ide, code review",
    type = "website",
    imageTwitter = "images/twitter-preview.jpg",
    norobots = false,
  } = data || {};

  const url = $page.url;

  const isCustomTwitterImage = imageTwitter !== "images/twitter-preview.jpg";
</script>

<svelte:head>
  <title>{title}</title>
  <meta name="keywords" content={keywords} />
  <meta name="description" content={description} />

  {#if norobots}
    <meta name="robots" content="noindex" />
  {/if}

  <!-- https://ogp.me -->
  <!-- url for OG-Image needs to be hardcoded, otherwise it would be resolved to
  `http://sveltekit-prerender` -->
  <meta property="og:image" content="https://www.gitpod.io/{image}" />
  <meta property="og:description" content={description} />
  <meta property="og:title" content={title} />
  <meta property="og:type" content={type} />
  <meta property="og:url" content={url.toString()} />

  <!-- https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/markup -->
  <meta
    name="twitter:card"
    content={isCustomTwitterImage ? "summary_large_image" : "summary"}
  />
  <meta name="twitter:site" content="@gitpod" />
  <meta name="twitter:creator" content="@gitpod" />
  <meta name="twitter:image" content="https://www.gitpod.io/{imageTwitter}" />
</svelte:head>
