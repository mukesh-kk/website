<script lang="ts">
  let clazz = "";

  export { clazz as class };
  export let fillClass = "fill-important";
</script>

<svg
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
  stroke="currentColor"
  stroke-width="1.5"
  {...$$props}
  class="{clazz} transition-all duration-200"
>
  <path
    stroke-linecap="round"
    stroke-linejoin="round"
    d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
    class="{fillClass} transition-all duration-200"
  />
</svg>
