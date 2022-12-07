<script lang="ts">
  import External from "../svgs/external.svelte";

  export let href: string;
  export let icon: string;
  export let size: "small" | "big" = "small";
  export let variant: "white" | "gray" = "white";
</script>

<style lang="postcss">
  a {
    @apply text-important;
  }
  a,
  span {
    /* Move to markup once src/lib/assets/markdown-commons.scss is gone */
    @apply leading-4;
  }
</style>

<a
  class="inline-flex px-4 text-center leading-4 shadow-light dark:shadow-none font-semibold {variant ===
  'white'
    ? 'bg-card'
    : 'bg-sand-dark dark:bg-light-black'} hover:bg-white focus:bg-tertiary dark:hover:bg-light-black-hover {size ===
  'small'
    ? 'py-2 text-btn-small rounded-xl'
    : 'py-4 text-xl rounded-2xl'}"
  {href}
  target="_blank"
  rel="noopener noreferrer"
  ><span class="">{icon}</span>
  <External class="inline-block my-0 mx-2 h-3 w-3" />
  <slot />
</a>
