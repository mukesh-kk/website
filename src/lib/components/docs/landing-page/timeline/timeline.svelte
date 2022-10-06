<script lang="ts" context="module">
  export const contextKeyChangelogEntries = {};
</script>

<script lang="ts">
  import type { ChangelogEntry } from "$lib/types/changelog-entry";
  import { getContext } from "svelte";
  import TimelineItem from "./timeline-item.svelte";

  const numberOfEntriesToDisplay = 5;
  const changelogEntries: ChangelogEntry[] = getContext(
    contextKeyChangelogEntries
  );
</script>

<section id="timeline">
  <div class="container order-2 mb-8  mx-auto flex flex-wrap">
    <div class="flex flex-wrap w-full">
      {#each changelogEntries.slice(0, numberOfEntriesToDisplay) as entry}
        <TimelineItem timelineItem={entry} />
      {/each}
    </div>
  </div>
</section>
