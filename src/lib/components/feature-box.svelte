<script lang="ts">
  import Feature from "./feature.svelte";
  import type { Feature as FeatureType } from "$lib/types/feature";
  import Card from "$lib/components/ui-library/card";
  export let feature: FeatureType;
</script>

<style lang="postcss">
  div :global(.feature-box:not(:last-child)) {
    @apply mb-xx-small !important;
  }

  div :global(.feature-box section) {
    @apply m-0 !important;
  }

  div :global(.feature-box:last-of-type) {
    @apply mb-xx-large;

    @media (max-width: 972px) {
      @apply mb-x-large;
    }
  }
</style>

<div>
  <Card
    size="medium"
    class="feature-box shadow-normal py-small px-xx-small sm:p-small lg:p-16 max-w-7xl mx-auto"
  >
    <Feature feature={{ ...feature, showTheMediaFirstOnMobile: true }} />
  </Card>
</div>
