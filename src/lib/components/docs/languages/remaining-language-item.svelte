<script lang="ts">
  import LinkButton from "$lib/components/ui-library/link-button";
  import type { PopularItem } from "$lib/types/docs";

  export let language: PopularItem;
</script>

<LinkButton
  href={language.path}
  variant="cta"
  size="large"
  class="flex items-center group"
>
  <span class="truncate">{language.title}</span>
</LinkButton>
