<script lang="ts">
  import type { CardBackground, CardSize } from "./card";

  let className: string = "";
  export { className as class };
  export let background: CardBackground = "card";
  export let brandShadow: boolean = false;
  export let size: CardSize;
  export let styles: string = "";
  export let stroked: boolean = true;
</script>

<style lang="postcss">
  .small {
    @apply rounded-2xl;
  }
  .medium {
    @apply rounded-2xl md:rounded-5xl;
  }

  .white {
    @apply bg-white;
  }

  :global(body.dark) .white {
    @apply bg-bg;
  }

  .card {
    @apply bg-card;
  }

  .brand {
    @apply shadow-highlight;
  }
</style>

<div
  style={styles}
  class="{background} {size} {className}"
  class:brand={brandShadow}
  class:stroked
  class:stroked-light={background === "white"}
  {...$$restProps}
>
  <slot />
</div>
