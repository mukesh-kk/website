<script lang="ts">
  import QuickstartSearchItem from "./quickstart-search-item.svelte";
  import QuickstartSearchinput from "./quickstart-searchinput.svelte";
  import { remainingQuickstarts, searchQuery } from "$lib/stores/quickstarts";
</script>

<div class="mb-12">
  <QuickstartSearchinput />
</div>
<div class="grid grid-cols-2 text-center md:text-left md:grid-cols-4 gap-4">
  {#each $remainingQuickstarts as item}
    <QuickstartSearchItem path={item.path} title={item.title} />
  {/each}
</div>
{#if $remainingQuickstarts.length < 1}
  <p>
    Oh no, this quickstart does not exist yet. Please <a
      target="_blank"
      href="https://github.com/gitpod-io/website/issues/new?labels=documentation&title=[Docs%20-%20Quickstart]%20-%20Requesting%20{$searchQuery}"
      >let us know</a
    >.
  </p>
  <p>
    Also note that you are free to install any tools you need for your specific
    use case. Please refer to the <a
      target="_blank"
      href="/docs/configure/workspaces/workspace-image">custom docker image</a
    > documentation for more details.
  </p>
{/if}
