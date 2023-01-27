<script>
  import FeedbackWidget from "../docs/feedback-widget.svelte";
  import PostContentLayout from "../post-content-layout.svelte";
  import Newsletter from "$lib/components/forms/newsletter.svelte";
</script>

<PostContentLayout
  imagesDirectoryName="guides"
  baseUrl="https://www.gitpod.io/guides/"
  {...$$restProps}
>
  <slot />
</PostContentLayout>
<FeedbackWidget type="guides" class="mt-large mb-huge" />

<Newsletter
  title="Stay in the loop"
  description="Get a weekly email with our latest thinking, news, and insights."
/>
