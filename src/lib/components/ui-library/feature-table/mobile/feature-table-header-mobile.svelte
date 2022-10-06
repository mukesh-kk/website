<script lang="ts">
  import MostPopular from "$lib/components/pricing/most-popular.svelte";

  import Arrow from "$lib/components/svgs/arrow.svelte";

  import type { FeatureTableHeader } from "../feature-table";

  export let headerData: FeatureTableHeader;
  const toggleIsShown = () => {
    isShown = !isShown;
  };
  export let isShown: boolean;
</script>

<div class="mb-x-small flex flex-col justify-center items-center">
  <div
    class="pb-x-small flex flex-col justify-center items-center space-y-4 border-b-2 border-divider w-64"
  >
    {#if headerData.image}
      <img
        src={headerData.image.path}
        alt={headerData.image.alt}
        class="h-10"
      />
    {/if}
    <div class="text-center">
      {#if headerData.isMostPopular}
        <MostPopular class="mb-macro" />
      {/if}
      <h3>{headerData.headline}</h3>
      {#if headerData.subtitle}
        <p>{headerData.subtitle}</p>
      {/if}
    </div>
  </div>
  <slot />
  <button class="pt-x-small w-64" on:click={() => toggleIsShown()}>
    <div>
      <span
        class="underline hover:decoration-transparent transition-all delay-[50ms] underline-offset-[0.25em] duration-200"
      >
        {#if isShown}
          Hide features
        {:else}
          View all features
        {/if}
      </span>
    </div>
    <Arrow
      class="h-6 w-6 mt-macro mx-auto duration-200 {isShown
        ? 'rotate-180'
        : ''}"
    />
  </button>
</div>
