<script lang="ts">
  import QaTooltip from "$lib/components/qa-tooltip.svelte";
  import GreyDash from "$lib/components/svgs/grey-dash.svelte";
  import GreenTick from "$lib/components/svgs/green-tick.svelte";
  import { isEurope } from "$lib/utils/helpers";
  export let definition: any;
</script>

{#if definition.list}
  <div class="flex flex-col justify-center px-8">
    <div class="font-bold  mb-2">{definition.term}</div>
    <ul class="list-disc list-outside text-left">
      {#each definition.list as item}
        <li>
          {@html item}
        </li>
      {/each}
    </ul>
  </div>
{:else}
  <div class="flex items-center flex-col justify-center">
    <div class="font-bold  mb-2">
      <div class="flex items-start">
        {#if definition.type === "tooltip"}
          <QaTooltip text={definition.term} tooltip={definition.data.tooltip} />
        {:else}
          <span
            class={definition.isHeadline
              ? "text-black dark:text-important font-semibold text-p-medium"
              : "text-[#565252] dark:text-important"}>{definition.term}</span
          >
        {/if}
      </div>
    </div>
    {#if definition.text}
      {@html `${definition.isCurrency ? (isEurope() ? "€" : "$") : ""}${
        definition.text
      }`}
    {/if}
    {#if definition.availability}
      <GreenTick />
    {/if}
    {#if definition.availability === false}
      <GreyDash />
    {/if}
  </div>
{/if}
