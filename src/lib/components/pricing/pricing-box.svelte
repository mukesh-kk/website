<script lang="ts">
  import type { Pricing } from "$lib/types/pricing";
  import LinkButton from "$lib/components/ui-library/link-button";
  import Card from "$lib/components/ui-library/card";
  import FeaturesList from "./features-list.svelte";
  import { isEurope } from "$lib/utils/helpers";
  // import MostPopular from "./most-popular.svelte";

  export let pricing: Pricing;
  const {
    title,
    features,
    price,
    btnHref,
    btnText,
    spiced,
    learnMoreHref,
    description,
    footnote,
    trackingName,
    prependedPrice,
    showCurrency,
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
    ? 'sm:w-full max-w-[368px]'
    : 'md:max-w-[720px] max-w-xs'} gap-small {spiced
    ? 'pt-xx-small'
    : 'pt-x-small'} p-x-small flex-col justify-between items-start bg-card mt-0 mx-macro mb-micro md:mb-x-small text-center transition-all duration-200"
  brandShadow={spiced}
  stroked={true}
>
  <div class="flex flex-col text-left w-full">
    <!-- {#if spiced}
      <MostPopular class="mb-macro" />
    {/if} -->
    <p class="text-grey mb-micro font-bold">
      {@html `${prependedPrice ? prependedPrice : ""} ${
        showCurrency ? (isEurope() ? "€" : "$") : ""
      }${price}`}
    </p>
    <h2 class="h4 !mb-1">{title}</h2>
    {#if description}
      <p class="font-bold mb-x-small">{description}</p>{/if}

    {#if features}
      <FeaturesList class="!mt-0" {features} />
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
            stroked={true}
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
    <div>
      <LinkButton
        variant={spiced ? "primary" : "cta"}
        size="large"
        href={btnHref}
        data-analytics={`{"context":"` + trackingName + `","position":"hero"}`}
        >{btnText}</LinkButton
      >
    </div>
  {/if}
  {#if footnote}
    <div class="text-p-xsmall px-small text-body">{footnote}</div>
  {/if}
</Card>
