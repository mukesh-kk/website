<script lang="ts">
  import type { Features } from "$lib/types/pricing";
  import QaTooltip from "../qa-tooltip.svelte";

  export let features: Features;
</script>

<style lang="postcss">
  li::before {
    content: url("/tick.svg");
    @apply absolute inline-block -left-7 sm:-left-9;
    height: 1.375rem;
    width: 1.375rem;

    @media (max-width: 375px) {
      @apply h-5 w-5;
    }
  }
</style>

<ul class="inline-flex flex-col ml-x-small mt-xx-small space-y-micro text-left">
  {#each features as feature}
    <li class="relative inline-flex text-important">
      {#if typeof feature !== "string"}
        <QaTooltip text={feature.text} tooltip={feature.tooltip} />
      {:else}
        {feature}
      {/if}
    </li>
  {/each}
</ul>
