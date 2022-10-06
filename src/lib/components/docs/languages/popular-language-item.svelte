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
  <div slot="image" class="w-12 flex-shrink-0">
    <img
      class="grayscale group-hover:grayscale-0 transition-all duration-200"
      src={language.icon}
      alt={`${language.title}-icon`}
      width="24px"
    />
  </div>
  <span class="truncate"> More on {language.title}</span>
</LinkButton>
