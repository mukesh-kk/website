<script lang="ts">
  import Section from "$lib/components/section.svelte";
  import type { ManifestoBenefit } from "$lib/types/cloud-dev-environments";
  export let benefits: ManifestoBenefit[];
</script>

<Section>
  <div class="mb-small md:mb-medium">
    <h2 class="text-center h2 mb-macro md:!mb-micro">
      The benefit for all software developers
    </h2>

    <p class="text-large text-center mx-auto">
      Following these principles produces characteristics which benefit all
      software developers:
    </p>
  </div>
  <ul
    class="lg:space-y-medium gap-x-small space-y-x-small lg:gap-x-x-large columns-1 lg:columns-2"
  >
    {#each benefits as benefit}
      <li class="break-inside-avoid">
        <h3 class="border-l-4 border-primary mb-macro md:mb-micro pl-xx-small">
          {benefit.heading}
        </h3>
        <p class="text-p-large pl-xx-small">
          {benefit.description}
        </p>
      </li>
    {/each}
  </ul>
</Section>
