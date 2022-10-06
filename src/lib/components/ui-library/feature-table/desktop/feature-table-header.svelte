<script lang="ts">
  import MostPopular from "$lib/components/pricing/most-popular.svelte";
  import type { FeatureTableHeader } from "../feature-table";

  export let isToc: boolean = false;
  export let headerData: FeatureTableHeader = { headline: "" };
</script>

<div class="h-40 flex flex-col justify-center items-center space-y-4">
  {#if !isToc}
    {#if headerData.image && headerData.image.path}
      <img
        src={headerData.image.path}
        alt={headerData.image.alt}
        class={headerData.image.height || "h-10"}
      />
    {:else}
      <svelte:component this={headerData.image} class="h-10" />
    {/if}
    <div class="text-center">
      {#if headerData.isMostPopular}
        <MostPopular
          class="absolute left-1/2 -translate-x-1/2 -translate-y-8"
        />
      {/if}
      <h3>{@html headerData.headline}</h3>
      {#if headerData.subtitle}
        <p class="mt-micro">{headerData.subtitle}</p>
      {/if}
    </div>
  {/if}
</div>
