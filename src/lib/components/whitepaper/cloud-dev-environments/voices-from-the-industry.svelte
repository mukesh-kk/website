<script lang="ts">
  import Section from "$lib/components/section.svelte";
  import Host from "$lib/components/webinars/host.svelte";

  import { Voices } from "$lib/contents/cloud-dev-environments/whitepaper";
</script>

<Section class="!mb-0">
  <h2 class="h3 mb-micro md:!mb-xx-small">Perspectives</h2>
  <div class="space-y-macro">
    {#each Voices as voice}
      <Host host={voice} />
    {/each}
  </div>
</Section>
