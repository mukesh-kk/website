<script lang="ts">
  import FeatureTableHeader from "./feature-table-header.svelte";
  import LinkButton from "$lib/components/ui-library/link-button";
  import FeatureTableItem from "./feature-table-item.svelte";
  import type { FeatureTableColumn } from "../feature-table";
  import Card from "$lib/components/ui-library/card";

  export let featureData: FeatureTableColumn;

  const hasASingleEntry = featureData.enteries.length === 1;
  const firstEntry = featureData.enteries[0];
</script>

<Card size="small" class="p-4" brandShadow={featureData.isHighlighted}>
  <FeatureTableHeader headerData={featureData.header} />
  <div
    class="{!hasASingleEntry
      ? ''
      : 'grid grid-cols-1 auto-rows-[3rem]'} {!firstEntry.users
      ? 'border-t border-divider'
      : ''} inner-grid-desktop"
  >
    {#if hasASingleEntry}
      {#if firstEntry.users}
        <h4 class="h5 text-center border-b border-divider">
          {firstEntry.users}
        </h4>
      {/if}
      {#each firstEntry.items as item}
        <div class="mt-micro">
          <FeatureTableItem definition={item} />
        </div>
      {/each}
    {:else}
      <div class="flex justify-around px-small gap-xx-small">
        {#each featureData.enteries as entry}
          <div class="grid grid-cols-1 auto-rows-[3rem] flex-1">
            <h4 class="h5 text-center border-b border-divider">
              {entry.users}
            </h4>
            {#each entry.items as item}
              <div class="mt-micro">
                <FeatureTableItem definition={item} />
              </div>
            {/each}
          </div>
        {/each}
      </div>
    {/if}
  </div>
  {#if featureData.link}
    <div class="flex justify-center items-start my-x-small">
      <LinkButton
        variant={featureData.isHighlighted ? "primary" : "cta"}
        size="large"
        href={featureData.link.href}>{featureData.link.label}</LinkButton
      >
    </div>
  {/if}
</Card>
