<script lang="ts">
  import type { Pricing } from "$lib/types/pricing";
  import LinkButton from "$lib/components/ui-library/link-button";
  import Card from "$lib/components/ui-library/card";
  import FeaturesList from "./features-list.svelte";
  import MostPopular from "./most-popular.svelte";

  export let pricing: Pricing;
  const {
    title,
    duration,
    features,
    price,
    btnHref,
    btnText,
    spiced,
    learnMoreHref,
    footnote,
    trackingName,
    plans,
  } = pricing;
</script>

<style lang="postcss">
  .learn-more {
    @apply underline;
  }

  :global(.plan) {
    @apply bg-white;
  }

  :global(body.dark) :global(.plan) {
    @apply dark:bg-bg;
  }

  :global(.crossed-out) {
    @apply line-through;
  }

  :global(.price-small),
  :global(.crossed-out) {
    @apply text-body text-h4 mr-macro;
  }
</style>

<Card
  size="small"
  class="box flex w-full {!plans
    ? 'sm:w-[320px] max-w-xs'
    : 'md:max-w-[720px] max-w-xs'} gap-small {spiced
    ? 'pt-xx-small'
    : 'pt-x-small'} pb-small flex-col justify-between items-center bg-card px-0 mt-0 mx-macro mb-x-small text-center transition-all duration-200"
  brandShadow={spiced}
  stroked={false}
>
  <div class="flex flex-col" class:w-full={plans}>
    {#if spiced}
      <MostPopular class="mb-macro" />
    {/if}
    <h2 class="h4 !mb-0">{title}</h2>
    <div
      class="h4 text-[#666564] dark:text-[#999795] font-bold text-important flex items-center justify-center mt-macro"
    >
      {@html price}
    </div>
    <div class="text-sub font-semibold mt-1">
      {#if duration}
        {duration}
      {:else}
        <span>&nbsp;</span>
      {/if}
    </div>
    {#if features}
      <FeaturesList {features} />
    {/if}
    {#if plans}
      <div
        class="plans flex flex-wrap justify-center gap-micro md:gap-xx-small mx-micro md:mx-x-small"
      >
        {#each plans as { title, features }}
          <Card
            size="small"
            class="pt-x-small px-micro sm:px-x-small pb-small max-w-[310px]"
            background="white"
            stroked={false}
          >
            <h3 class="h4">{title}</h3>
            <FeaturesList {features} />
          </Card>
        {/each}
      </div>
    {/if}
    {#if learnMoreHref}
      <div class="flex flex-1 justify-center items-center">
        <a href={learnMoreHref} class="learn-more">Learn More</a>
      </div>
    {/if}
  </div>
  {#if btnHref && btnText}
    <LinkButton
      variant={spiced ? "primary" : "cta"}
      size="large"
      href={btnHref}
      data-analytics={`{"context":"` + trackingName + `","position":"hero"}`}
      >{btnText}</LinkButton
    >
  {/if}
  {#if footnote}
    <div class="text-p-xsmall px-small text-body">{footnote}</div>
  {/if}
</Card>
