<script lang="ts">
  import Card from "$lib/components/ui-library/card";
  import type { verticalFeature } from "../types/feature";
  import LinkButton from "./ui-library/link-button/link-button.svelte";
  export let verticalFeatureData: verticalFeature;
  export let fullWidth: boolean = false;
  let className: string = "";
  export { className as class };
  export let headingLevel: "h2" | "h3" = "h3";
  const headingClassNames =
    "text-h4 leading-[125%] font-semibold text-important mb-micro text-left";
</script>

<Card
  size="medium"
  class="shadow-normal p-xx-small sm:p-x-small md:px-10 md:py-16 flex gap-micro sm:gap-x-small flex-col w-full items-center {fullWidth
    ? ''
    : 'max-w-[400px] md:max-w-[544px]'} {className}"
>
  {#if verticalFeatureData.previewComponent}
    <div
      class="max-h-[334px] max-w-[400px] flex items-center px-xx-small -mb-xx-small lg:mb-0 sm:px-none"
    >
      <svelte:component
        this={verticalFeatureData.previewComponent}
        class="w-full h-full"
      />
    </div>
  {/if}
  <div>
    {#if headingLevel === "h3"}
      <h3 class={headingClassNames}>
        {verticalFeatureData.title}
      </h3>
    {:else}
      <h2 class={headingClassNames}>
        {verticalFeatureData.title}
      </h2>
    {/if}
    <p class="text-large">{@html verticalFeatureData.paragraph}</p>
    <slot name="content" />
    {#if verticalFeatureData.moreButton}
      <LinkButton
        href={verticalFeatureData.moreButton.href}
        size="medium"
        variant={verticalFeatureData.moreButton.type || "primary"}
        class="mt-x-small"
      >
        {verticalFeatureData.moreButton.text}
      </LinkButton>
    {/if}
  </div>
</Card>
