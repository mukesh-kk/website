<script lang="ts">
  import type { ManifestoListItem } from "$lib/types/cloud-dev-environments";
  import Section from "$lib/components/section.svelte";

  export let manifestoItems: ManifestoListItem[];
</script>

<style lang="postcss">
  ol {
    list-style-type: decimal-leading-zero;
  }
</style>

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
    class="list-outside columns-1 md:columns-2 gap-xx-large space-y-small py-0 p-medium"
  >
    {#each manifestoItems as item}
      <li
        class="marker:mr-x-small marker:font-bold break-inside-avoid marker:text-primary marker:text-h4"
      >
        <h3 class="!mb-macro lg:!mb-xx-small">
          <span class="text-important">{@html item.heading} </span><span
            class="text-light-grey"
          >
            {item.subHeading}</span
          >
        </h3>
        <p class="text-p-large">{item.description}</p>
      </li>
    {/each}
  </ol>
  <!-- <p class="text-p-large text-center">
    That is, while some of the attributes on the right have served us well in
    the past, we believe the future implores us to embrace the principles on the
    left.
  </p> -->
</Section>
