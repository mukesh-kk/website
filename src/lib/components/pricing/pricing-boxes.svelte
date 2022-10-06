<script lang="ts">
  import type { Pricing } from "$lib/types/pricing";
  import PricingBox from "./pricing-box.svelte";

  export let pricingPlans: Pricing[];
</script>

<style lang="postcss">
  /* ! do not remove the following block with the custom random breakpoint value 1250px as it addresses https://github.com/gitpod-io/website/issues/1505  */
  div {
    @media (max-width: 1250px) {
      @apply flex-wrap;
    }
  }
</style>

<div class="flex justify-center">
  {#each pricingPlans as pricing}
    <PricingBox {pricing} />
  {/each}
</div>
