<script lang="ts">
  export let id: string = "";
  export let style: string = "";
  let clazz = "";
  export { clazz as class };
</script>

<style lang="postcss">
  section {
    @apply mt-xxx-large;

    &:first-of-type:not(:only-of-type) {
      @media (max-width: 768px) {
        @apply mt-small;
      }
    }

    &:last-of-type {
      @apply mb-xxx-large;
    }

    @media (max-width: 972px) {
      @apply mt-x-large;

      &:last-of-type {
        @apply mb-x-large;
      }
    }
  }
</style>

<section {id} class={clazz} {style}>
  <slot />
</section>
