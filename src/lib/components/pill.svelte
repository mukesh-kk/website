<script lang="ts">
  let clazz = "";
  export { clazz as class };
  export let text: string;
  export let variant: "pink" | "orange" = "orange";
  export let tight: boolean = false;
  const capitalised = text.charAt(0).toUpperCase() + text.slice(1);
</script>

<div
  class="inline-block {tight
    ? 'px-2'
    : 'px-3'} py-0.5 text-xs font-semibold text-important dark:text-black rounded-lg shadow-light whitespace-nowrap {clazz}"
  class:bg-salmon={variant === "pink"}
  class:bg-tertiary={variant === "orange"}
>
  {capitalised}
</div>
