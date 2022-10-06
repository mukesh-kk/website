<script lang="ts">
  import type { Brand } from "$lib/types/brand";

  export let brand: Brand;

  const { logo, transform, className } = brand;
</script>

<style lang="postcss">
  .brand {
    @apply max-h-14;
    flex-basis: calc(14% - 1.375rem);
    min-width: 130px;
    display: flex;
    border: 2px solid transparent;
    justify-content: center;
    margin: var(--micro) 0.75rem;
  }
</style>

<div class="brand">
  <svelte:component
    this={logo}
    style={`transform: ${transform}; width: 5.9375rem; height: 100%;`}
    class={className}
  />
</div>
