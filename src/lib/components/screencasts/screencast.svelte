<script lang="ts">
  import type { Screencast } from "$lib/types/screencasts";
  import Duration from "./duration.svelte";
  import Preview from "./preview.svelte";

  export let screencast: Screencast;
  export let screencastNumber: number;
  export let headlineOrder: "h3" | "" = "";
</script>

<article>
  <Preview {headlineOrder} {screencast} {screencastNumber} />
  <div class="pl-micro">
    <Duration duration={screencast.duration} class="text-fine-print" />
    <p>{screencast.description}</p>
  </div>
</article>
