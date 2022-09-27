<script lang="ts">
  export let href: string;
  let clazz = "";
  export { clazz as class };
</script>

<a
  {href}
  class="h3 text-h4 !text-important block no-underline font-semibold transition-all duration-200 hover:underline focus:underline hover:decoration-2 focus:decoration-2 {clazz}"
>
  <slot />
</a>
