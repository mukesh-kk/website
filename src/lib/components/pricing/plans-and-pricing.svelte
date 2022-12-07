<script lang="ts">
  import { page } from "$app/stores";
  import PricingBoxes from "./pricing-boxes.svelte";
  import type { Pricing } from "$lib/types/pricing";
  import Header from "../header.svelte";
  import Pill from "../pill.svelte";

  export let pricingPlans: Pricing[] = [];
</script>

<style lang="postcss">
  .active {
    @apply font-bold text-important;
  }
</style>

<Header
  class="md:!mb-small !mb-micro"
  title="Plans and pricing"
  fullWidth={true}
>
  <div slot="content" class="mt-small">
    <ul
      class="flex flex-wrap gap-x-small gap-y-x-small mb-x-small justify-center"
    >
      <li>
        <a
          class="!underline text-[#565252] dark:text-body hover:!decoration-transparent"
          sveltekit:prefetch
          class:active={$page.url.pathname === "/pricing"}
          href="/pricing">SaaS</a
        >
      </li>
      <li>
        <a
          class=" !underline text-[#565252] dark:text-body hover:!decoration-transparent"
          sveltekit:prefetch
          class:active={$page.url.pathname === "/self-hosted"}
          href="/self-hosted">Self-Hosted</a
        >
      </li>
      <li>
        <a
          class="!underline text-[#565252] dark:text-body hover:!decoration-transparent"
          sveltekit:prefetch
          class:active={$page.url.pathname === "/dedicated"}
          href="/dedicated">Dedicated</a
        >
        <Pill text="Soon" variant="pink" />
      </li>
    </ul>
    {#if pricingPlans.length > 0}
      <PricingBoxes {pricingPlans} />
      <p class="mt-micro text-center">
        Can’t find the answer here? Please <a href="/contact/sales"
          >contact sales</a
        >.
      </p>
    {/if}
  </div>
</Header>
