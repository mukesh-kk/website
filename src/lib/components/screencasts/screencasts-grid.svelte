<script lang="ts">
  import type { Screencast as ScreencastType } from "$lib/types/screencasts";
  import Screencast from "./screencast.svelte";
  export let screencasts: ScreencastType[];
  export let headlineOrder: "h3" | "" = "";
</script>

<style lang="postcss">
  div {
    grid-template-columns: repeat(auto-fill, minmax(20rem, 25rem));
  }
</style>

<div
  class="grid justify-center gap-y-medium gap-x-5 m-x-small px-5"
  data-analytics={`{"context":"grid"}`}
>
  {#each screencasts as screencast}
    <Screencast
      {headlineOrder}
      {screencast}
      screencastNumber={screencast.nextScreencast ||
        screencast.screencastNumber}
    />
  {/each}
</div>
