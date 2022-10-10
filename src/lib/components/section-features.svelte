<script lang="ts">
  import type { Feature as FeatureType } from "$lib/types/feature";
  import FeatureBoxes from "./feature-boxes.svelte";
  import Features from "./features.svelte";

  import Section from "./section.svelte";
  export let title: string;
  export let text: string = "";
  export let features: FeatureType[];
  export let type: "box" = null;
</script>

<style lang="postcss">
  .top {
    @media (min-width: 973px) {
      @apply -mb-16;
    }
  }
</style>

<Section>
  <div class="text-center" class:top={!type} class:mb-small={type}>
    <h2>{title}</h2>
    {#if text}
      <p class="text-large">{text}</p>
    {/if}
  </div>
  {#if type === "box"}
    <FeatureBoxes {features} />
  {:else}
    <Features {features} headingLevel="h3" />
  {/if}
</Section>
