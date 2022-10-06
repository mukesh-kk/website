<script lang="ts">
  import Base from "./base.svelte";
  import Card from "$lib/components/ui-library/card";
  import type { Card as CardType } from "$lib/types/card";
  let className: string = "";
  export { className as class };
  export let card: CardType;
</script>

<Card size="small" class="py-small px-x-small {className}">
  <Base {card} {...$$restProps} iconClassNames="h-28" />
</Card>
