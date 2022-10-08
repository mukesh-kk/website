<script lang="ts">
  import GreyDash from "$lib/components/svgs/grey-dash.svelte";
  import GreenTick from "$lib/components/svgs/green-tick.svelte";
  import type { FeatureItemDetail } from "../feature-table";
  export let definition: FeatureItemDetail;
</script>

<style lang="postcss">
  :global(.code) {
    @apply p-micro bg-white rounded-2xl text-base text-sub my-macro;
  }
  :global(body.dark) :global(.code) {
    @apply bg-bg;
  }
  :global(.code) :global(span) {
    color: #65a30d;
  }
</style>

{#if definition.list}
  <div class="flex flex-col justify-start px-8">
    <ul class="list-disc list-outside ">
      {#each definition.list as item}
        <li class="">
          {@html item}
        </li>
      {/each}
    </ul>
  </div>
{:else}
  <div class="flex items-start justify-center">
    {#if definition.text}
      {@html definition.text}
    {/if}
    {#if definition.availability}
      <GreenTick />
    {/if}
    {#if definition.availability === false}
      <GreyDash />
    {/if}
  </div>
{/if}
