<script lang="ts">
  import Section from "../section.svelte";
  import type { Host as HostType } from "$lib/types/host";
  import Host from "./host.svelte";
  export let hosts: HostType[];
</script>

<Section>
  <h2 class="h3">Hosts</h2>
  <div class="space-y-macro mt-x-small">
    {#each hosts as host}
      <Host {host} />
    {/each}
  </div>
</Section>
