<script lang="ts">
  import MagGlass from "./svgs/mag-glass.svelte";

  export let value: string;
  let clazz = "";
  export let label: string;
  export { clazz as class };
  export let placeholder: string = "Search";
</script>

<div
  class="relative bg-card rounded-xl max-w-lg mx-auto shadow-normal mb-12 pl-6 sm:pl-7 {clazz}"
>
  <label for="search" class="sr-only">{label}</label>
  <MagGlass
    class="absolute top-1/2 left-3 -translate-y-1/2 pointer-events-none h-xx-small w-xx-small"
    alt="Search"
    aria-hidden="true"
  />
  <input
    type="text"
    {placeholder}
    bind:value
    id="search"
    class="border-none rounded-[inherit] box-border block w-full text-p-medium h-small pl-4 pr-3 py-2 border border-transparent bg-transparent leading-5 text-important placeholder-text-body focus:outline-none focus:bg-none focus:border-transparent focus:ring-transparent focus:text-important"
  />
</div>
