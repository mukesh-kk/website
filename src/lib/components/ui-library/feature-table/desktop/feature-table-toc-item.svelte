<script lang="ts">
  import QaTooltip from "$lib/components/qa-tooltip.svelte";
  import type { FeatureTocItem, FeatureTocItemType } from "../feature-table";
  export let type: FeatureTocItemType;
  export let definition: FeatureTocItem;
</script>

<div class="flex items-start">
  {#if type === "tooltip"}
    <QaTooltip text={definition.text} tooltip={definition.tooltip} />
  {/if}
  {#if type === "text"}
    {definition.text}
  {/if}
  {#if type === "image"}
    {#if definition.image && definition.image.path}
      <img
        class="mr-2"
        src={definition.image.path}
        alt={definition.image.alt}
        width="24"
      />
    {:else}
      <svelte:component this={definition.image} width="24" class="mr-2" />
    {/if}
    {definition.text}
  {/if}
</div>
