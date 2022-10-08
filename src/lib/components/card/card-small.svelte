<script lang="ts">
  import Card from "$lib/components/ui-library/card";
  import Base from "./base.svelte";
  let className: string = "";
  export { className as class };
  import type { Card as CardType } from "$lib/types/card";
  export let card: CardType;
  export let titleClassNames: "h4" | "h5" = "h5";
</script>

<Card size="small" styles="max-width: 315px" class="p-x-small {className}">
  <Base {card} {...$$restProps} {titleClassNames} iconClassNames="h-12 w-14" />
</Card>
