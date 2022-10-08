<script lang="ts">
  import LinkButton from "$lib/components/ui-library/link-button";
  import type { Action } from "$lib/types/action";
  export let action: Action;
  const { title, description, link } = action;
  let clazz = "";

  export { clazz as class };
</script>

<div class="max-w-xs {clazz}">
  <h2 class="h3">{title}</h2>
  <p class="mt-micro mb-x-small">
    {description}
  </p>
  <LinkButton variant="cta" size="medium" href={link.href}
    >{link.text}</LinkButton
  >
</div>
