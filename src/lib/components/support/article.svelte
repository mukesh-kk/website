<script lang="ts">
  import type { Article } from "$lib/types/article";
  import LinkButton from "$lib/components/ui-library/link-button";
  export let article: Article;
  const { title, text, slug } = article;
</script>

<div class="max-w-xl py-medium px-micro sm:p-large">
  <h3>{title}</h3>
  <p class="py-x-small text-p-large">{text}</p>
  <LinkButton variant="secondary" size="medium" href="/blog/{slug}"
    >Read blog post</LinkButton
  >
</div>
