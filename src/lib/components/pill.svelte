<script lang="ts">
  let clazz = "";
  export { clazz as class };
  export let text: string;
  export let variant: "pink" | "orange" | "gray" | "violet" = "orange";
  export let tight: boolean = false;
  $: capitalised = text.charAt(0).toUpperCase() + text.slice(1);
</script>

<div
  class="inline-block {tight
    ? 'px-2'
    : 'px-3'} py-0.5 text-xs font-semibold text-important rounded-lg shadow-light {variant ===
  'gray'
    ? 'bg-sand-dark dark:bg-light-black'
    : 'dark:text-black'} whitespace-nowrap {clazz}"
  class:bg-salmon={variant === "pink"}
  class:bg-tertiary={variant === "orange"}
  class:bg-violet={variant === "violet"}
>
  {capitalised}
</div>
