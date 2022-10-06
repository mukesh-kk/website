<script lang="ts">
  import Feature from "./feature.svelte";
  import type { Feature as FeatureType } from "$lib/types/feature";

  export let features: FeatureType[];
  export let headingLevel: "h2" | "h3" = "h2";
</script>

{#each features as feature}
  <Feature feature={{ ...feature, headingLevel }} />
{/each}
