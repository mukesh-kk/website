<script lang="ts">
  import Section from "../section.svelte";
  import { benefits } from "$lib/contents/community/hereos";
  import CardSmall from "../card/card-small.svelte";
</script>

<Section class="text-center">
  <h2>Your benefits</h2>
  <p class="text-large max-w-4xl mx-auto">
    This is not a paid position, but in exchange for contributing to Gitpod, you
    will get access to some great and exclusive rewards and perks.
  </p>
  <div
    class="grid gap-micro justify-center mx-auto mt-small max-w-[648px] lg:max-w-[980px] md:grid-cols-2 lg:grid-cols-[316px,316px,316px]"
  >
    {#each benefits as benefit}
      <CardSmall card={benefit} />
    {/each}
  </div>
</Section>
