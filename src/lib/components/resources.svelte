<script lang="ts">
  import type { Card as CardType } from "$lib/types/card";
  import Card from "./card/card.svelte";

  export let cards: CardType[];
  export let headingLevel: "h3" | "h2" = "h2";
</script>

<div class="flex flex-wrap justify-center mt-small max-w-8xl mx-auto">
  {#each cards as card}
    <Card {card} class="sm:mx-macro mb-micro 2xl:mb-x-small" {headingLevel} />
  {/each}
</div>
