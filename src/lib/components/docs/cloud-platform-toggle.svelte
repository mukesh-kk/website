<script lang="ts">
  // Couldn't create this component entirely dynamic, because Slots can't be named dynamically
  // Had to use !important to make sure the styles from tailwinds prose-class are overridden
  import type { comparisonItem } from "$lib/types/docs";

  export let items: comparisonItem[] = [
    {
      mobileTitle: "GCP",
      title: "Google Cloud Platform (GCP)",
      value: 1,
      slotName: "gcp",
    },
    {
      mobileTitle: "AWS",
      title: "Amazon Web Services (AWS)",
      value: 2,
      slotName: "aws",
      hidden: false, // hidden since it is not ready to publish yet
    },
    {
      mobileTitle: "Azure",
      title: "Microsoft Azure",
      value: 3,
      slotName: "azure",
      hidden: true, // hidden since it is not ready to publish yet
    },
  ];
  let activeValue = 1;

  const clickHandler = (tabValue: number) => () => (activeValue = tabValue);

  export let id = "cloud-platform-toggle";

  export let open = false;
</script>

<details open={open || null} {id}>
  <summary class="text-p-medium"
    ><b>Cloud provider specific instructions</b></summary
  >

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
    {#if $$slots.gcp}
      {#if activeValue === 1}
        <div
          class="px-4 py-4 rounded-b-2xl rounded-tr-2xl border-t-0 bg-white dark:bg-card"
        >
          <slot name="gcp" />
        </div>
      {/if}
    {/if}
    {#if $$slots.aws}
      {#if activeValue === 2}
        <div
          class="px-4 py-4 rounded-b-2xl rounded-tr-2xl border-t-0 bg-white dark:bg-card"
        >
          <slot name="aws" />
        </div>
      {/if}
    {/if}
    {#if $$slots.azure}
      {#if activeValue === 3}
        <div
          class="px-4 py-4 rounded-b-2xl rounded-tr-2xl border-t-0 bg-white dark:bg-card"
        >
          <slot name="azure" />
        </div>
      {/if}
    {/if}
  </div>
</details>
