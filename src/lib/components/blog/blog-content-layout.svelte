<script lang="ts">
  import RecentArticlesPreview from "./recent-articles-preview.svelte";
  import PostContentLayout from "../post-content-layout.svelte";
  import FeedbackWidget from "../docs/feedback-widget.svelte";
  import DigestHeader from "./digest-header.svelte";
  import Newsletter from "$lib/components/forms/newsletter.svelte";
  const { type, tags, title } = $$restProps;
</script>

<PostContentLayout
  imagesDirectoryName="blog"
  baseUrl="https://www.gitpod.io/blog/"
  {...$$restProps}
>
  <slot />
  {#if type === "digest"}
    <DigestHeader />
  {/if}
</PostContentLayout>

{#if type === "digest"}
  <FeedbackWidget class="mt-large mb-huge" type="digests" />
{/if}
<RecentArticlesPreview {tags} {title} />

<Newsletter
  title="Stay in the loop"
  description="Get a weekly email with our latest thinking, news, and insights."
/>
