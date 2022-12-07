<script lang="ts">
  import Card from "$lib/components/card/card.svelte";
  import { highlights } from "$lib/contents/events";
</script>

<div class="mt-small lg:mt-xx-large text-center">
  <h2 class="h4 !mb-x-small">Highlights from DevX Conf</h2>
  <div class="flex justify-center flex-wrap gap-xx-small">
    {#each highlights as highlight}
      <Card
        textAlign="left"
        titleClassNames="!text-left"
        btnSize="medium"
        btnClassNames="self-start mt-xx-small"
        card={highlight}
      />
    {/each}
  </div>
</div>
