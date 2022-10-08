<script lang="ts">
  import FeatureTableItemMobile from "./feature-table-item-mobile.svelte";
  import LinkButton from "$lib/components/ui-library/link-button";
  import Card from "$lib/components/ui-library/card";
  import FeatureTableHeaderMobile from "./feature-table-header-mobile.svelte";
  import type { FeatureTableColumn } from "../feature-table";

  export let featureData: FeatureTableColumn;
  const hasASingleEntry = featureData.enteries.length === 1;
  const firstEntry = featureData.enteries[0];

  let isShown: boolean = false;
</script>

<Card
  size="small"
  class="p-x-small max-w-[400px] mx-auto"
  brandShadow={featureData.isHighlighted}
>
  <FeatureTableHeaderMobile headerData={featureData.header} bind:isShown>
    {#if isShown}
      <div
        class="{!hasASingleEntry
          ? 'space-y-micro'
          : 'grid grid-cols-1 auto-rows-[4rem] gap-8'} pt-4 mb-4 text-center inner-grid-mobile"
      >
        {#if hasASingleEntry}
          {#if firstEntry.users}
            <h4 class="h5 text-center mt-x-small">
              {firstEntry.users}
            </h4>
          {/if}
          {#each firstEntry.items as item}
            <FeatureTableItemMobile definition={item} />
          {/each}
        {:else}
          {#each featureData.enteries as entry}
            <div
              class="grid grid-cols-1 auto-rows-[4rem] gap-8 bg-white dark:bg-bg rounded-2xl p-xx-small text-center"
            >
              {#if firstEntry.users}
                <h4 class="h5 text-center border-b border-divider mt-micro">
                  {entry.users}
                </h4>
              {/if}
              {#each entry.items as item}
                <FeatureTableItemMobile definition={item} />
              {/each}
            </div>
          {/each}
        {/if}
      </div>
      {#if featureData.link}
        <div
          class="flex justify-center items-center"
          class:mt-x-small={!hasASingleEntry}
        >
          <LinkButton
            size="large"
            href={featureData.link.href}
            variant={featureData.isHighlighted ? "primary" : "cta"}
            >{featureData.link.label}</LinkButton
          >
        </div>
      {/if}
    {/if}
  </FeatureTableHeaderMobile>
</Card>
