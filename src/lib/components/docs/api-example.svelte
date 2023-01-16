<script lang="ts">
  // Couldn't create this component entirely dynamic, because Slots can't be named dynamically
  // Had to use !important to make sure the styles from tailwinds prose-class are overridden
  import type { comparisonItem } from "$lib/types/docs";

  export let items: comparisonItem[] = [
    {
      mobileTitle: "cURL",
      title: "cURL",
      value: 1,
      slotName: "curlExample",
    },
    {
      mobileTitle: "Go",
      title: "Go ",
      value: 2,
      slotName: "goExample",
      hidden: false,
    },
    {
      mobileTitle: "Response",
      title: "Response",
      value: 3,
      slotName: "responseExample",
      hidden: false,
    },
  ];
  let activeValue = 1;

  const clickHandler = (tabValue: number) => () => (activeValue = tabValue);

  export let id = "api-example";

  export let open = false;
</script>

<style lang="postcss">
  article :global(p) {
    @apply mb-0;
  }
</style>

<div class="text-lg"><b>Method Example:</b></div>
<div class="my-8 mt-0">
  <ul class="flex flex-wrap !pl-0 !mb-0">
    {#each items as item}
      {#if Object.keys($$slots).includes(item.slotName) && !item.hidden}
        <li class="before:!hidden !m-0 !p-0">
          <span
            class="rounded-t-2xl cursor-pointer px-4 py-2 hidden md:block {activeValue ===
            item.value
              ? 'bg-white dark:bg-card'
              : 'bg-sand-dark dark:bg-light-black'} transition-all duration-200"
            on:click={clickHandler(item.value)}>{item.title}</span
          >
          <span
            class="rounded-t-2xl cursor-pointer px-4 py-2 md:hidden block {activeValue ===
            item.value
              ? 'bg-white dark:bg-card'
              : 'bg-sand-dark dark:bg-light-black'} transition-all duration-200"
            on:click={clickHandler(item.value)}>{item.mobileTitle}</span
          >
        </li>
      {/if}
    {/each}
  </ul>
  {#if $$slots.curlExample}
    {#if activeValue === 1}
      <article
        class="px-4 py-4 rounded-b-2xl rounded-tr-2xl border-t-0 bg-white dark:bg-card"
      >
        <slot name="curlExample" />
      </article>
    {/if}
  {/if}
  {#if $$slots.goExample}
    {#if activeValue === 2}
      <article
        class="px-4 py-4 rounded-b-2xl rounded-tr-2xl border-t-0 bg-white dark:bg-card"
      >
        <slot name="goExample" />
      </article>
    {/if}
  {/if}
  {#if $$slots.responseExample}
    {#if activeValue === 3}
      <article
        class="px-4 py-4 rounded-b-2xl rounded-tr-2xl border-t-0 bg-white
          dark:bg-card"
      >
        <slot name="responseExample" />
      </article>
    {/if}
  {/if}
</div>
<!-- </details> -->
