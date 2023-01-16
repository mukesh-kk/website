<script lang="ts">
  import Section from "$lib/components/section.svelte";
  import Quote from "$lib/components/events/kubecon-detroit/quote.svelte";

  import { Voices } from "$lib/contents/cde-manifesto";
</script>

<Section class="!mb-0">
  <h2 class="text-center h2 mb-macro md:!mb-medium">Perspectives</h2>
  <ul class="gap-micro flex justify-center flex-wrap">
    {#each Voices as voice}
      <li>
        <Quote quote={voice} />
      </li>
    {/each}
  </ul>
</Section>
