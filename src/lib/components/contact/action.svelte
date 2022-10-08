<script lang="ts">
  import { isAnExternalLink } from "$lib/utils/helpers";
  import LinkButton from "$lib/components/ui-library/link-button";

  import type { ContactAction } from "$lib/types/contact-action";

  export let width: string = "";
  let clazz = "";
  export { clazz as class };
  export let btnClass: "primary" | "cta" = "primary";
  export let action: ContactAction;
  export let isTextSmall: boolean = false;
  const { icon, transform, title, text, link } = action;
  const target = isAnExternalLink(link.href) ? "_blank" : undefined;
</script>

<div
  class="flex flex-col justify-between items-center bg-card rounded-2xl mx-macro px-xx-small py-xx-small md:py-small mb-micro md:mb-small shadow-normal {clazz}"
  style="width: {width}"
>
  <div>
    <div class="h-28" style="transform: {transform};">
      <svelte:component this={icon} class="mx-auto mb-x-small h-28" />
    </div>
    <h2 class="h4">{title}</h2>
    <p class="mt-micro mb-x-small" class:text-small={isTextSmall}>{text}</p>
  </div>
  <LinkButton href={link.href} {target} variant={btnClass}
    >{link.text}</LinkButton
  >
</div>
