<script lang="ts" context="module">
  export const key = Symbol();
</script>

<script lang="ts">
  import { getContext } from "svelte";
  import Octocat from "../svgs/octocat.svelte";

  const numberFormatter = Intl.NumberFormat("en-US", {
    notation: "compact",
    maximumFractionDigits: 1,
    unitDisplay: "long",
  });
  const stars: number = getContext(key);
  let starsFormatted: string;
  if (stars) {
    starsFormatted = numberFormatter.format(stars).toLocaleLowerCase();
  } else {
    starsFormatted = null;
  }
</script>

<style lang="postcss">
  a:hover,
  a:focus {
    :global(path) {
      @apply fill-important;
    }
  }
</style>

<a
  href="https://github.com/gitpod-io/gitpod"
  target="_blank"
  class="flex items-center font-bold text-sm"
>
  <Octocat class="mr-1.5" />
  {starsFormatted}
</a>
