<script lang="ts">
  import type { ManifestoListItem } from "$lib/types/cloud-dev-environments";
  import Section from "$lib/components/section.svelte";

  export let manifestoItems: ManifestoListItem[];
</script>

<Section
  id="principles"
  class="flex flex-col items-center justify-center w-full"
>
  <div class="mb-small md:mb-medium">
    <h2 class="text-center h2 mb-macro md:!mb-micro">Principles of CDEs</h2>

    <p class="text-large text-center mx-auto">
      Cloud Development Environments value the following principles:
    </p>
  </div>
  <ol
    class="list-outside grid-flow-row md:grid-flow-col grid grid-cols-1 md:grid-cols-2 md:grid-rows-4 gap-x-x-small gap-y-small py-0"
  >
    {#each manifestoItems as item, i}
      <li class="break-inside-avoid flex">
        <div class="mr-xx-small font-bold text-primary h4">
          0{i + 1}
        </div>
        <div>
          <h4 class="!sm lg:!sm">
            <span class="text-important">{@html item.heading} </span><span
              class="text-light-grey"
            >
              {item.subHeading}</span
            >
          </h4>
          <p class="text-p-medium">{item.description}</p>
        </div>
      </li>
    {/each}
  </ol>
  <!-- <p class="text-p-large text-center">
    That is, while some of the attributes on the right have served us well in
    the past, we believe the future implores us to embrace the principles on the
    left.
  </p> -->
</Section>
