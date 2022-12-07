<script lang="ts">
  export let href: string;
  export let rel: string = "";
  export let target: string = "";
  export let analytics: string = "";
  export let highlight = false;

  let clazz: string = "";
  export { clazz as class };
</script>

<style lang="postcss">
  .highlight {
    @apply relative;
    &::after {
      content: url("/indicator.svg");
      @apply absolute -top-3 -right-2;
    }
  }
</style>

<a
  sveltekit:prefetch
  {href}
  {rel}
  {target}
  data-analytics={analytics}
  on:click
  class:highlight
  class="
    text-body
    no-underline
    focus:text-important
    hover:text-important
    active:text-important
    {clazz}
  "
>
  <slot />
</a>
