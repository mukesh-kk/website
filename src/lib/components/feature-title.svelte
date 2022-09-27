<script lang="ts">
  import Card from "./ui-library/card/card.svelte";
  import type { FeatureTitle as FeatureTitleProps } from "$lib/types/feature-title.type";

  export let featureTitle: FeatureTitleProps;
  export let featureTitlePadding: string;
  const { main, sub, third, swap } = featureTitle;
</script>

<Card
  size="small"
  class="w-full sm:w-[296px] {featureTitlePadding} text-center"
>
  <h2 class="h2 !mb-0">
    <div class={swap ? "text-medium font-normal text-body" : ""}>
      {main}
    </div>
    <div
      class="{!swap
        ? 'text-medium font-normal text-body'
        : ''} mt-macro sm:mt-micro"
    >
      {sub}
    </div>
    {#if third}
      <div class="text-medium font-normal text-body">
        {third}
      </div>
    {/if}
  </h2>
</Card>
