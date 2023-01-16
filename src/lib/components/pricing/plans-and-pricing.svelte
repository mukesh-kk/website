<script lang="ts">
  import PricingBoxes from "./pricing-boxes.svelte";
  import type { Pricing } from "$lib/types/pricing";
  import Header from "../header.svelte";
  import { isEurope } from "$lib/utils/helpers";

  export let pricingPlans: Pricing[] = [];
</script>

<style lang="postcss">
  .active {
    @apply font-bold text-important;
  }
</style>

<Header
  class="md:!mb-small !mb-micro"
  title="Flexible, predictable pricing"
  text="Always 500 credits free. Pay-as-you-scale with usage-based pricing."
  fullWidth={true}
>
  <div slot="content" class="mt-small">
    {#if pricingPlans.length > 0}
      <PricingBoxes {pricingPlans} />
      <p class="mt-micro text-center">
        All prices excluding VAT. 1 credit = {isEurope() ? "€" : "$"}0.036. See
        complete <a href="/pricing#compare-features">feature table</a>.
      </p>
    {/if}
  </div>
</Header>
