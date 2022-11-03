<script lang="ts">
  import Arrow from "../svgs/careers/arrow.svelte";
  import type { GreenhouseResponse } from "$lib/types/careers";
  export let openPositions: GreenhouseResponse;
</script>

<section
  class="lg:mt-xx-large mt-medium mb-medium lg:mb-xx-large max-w-3xl mx-auto"
>
  <h2 id="open-positions" class="h3 md:!mb-xx-small">Open positions</h2>
  {#if openPositions.meta.total < 1}
    Unfortunately, there are no open positions currently...
  {:else}
    <ul class="space-y-micro">
      {#each openPositions.jobs as job}
        <li>
          <a
            rel="noreferrer"
            target="_blank"
            class="w-full dark:text-important text-p-large hover:bg-white focus:bg-white text-important dark:hover:bg-light-black-hover dark:focus:bg-light-black-hover bg-card flex justify-between items-center rounded-2xl dark:bg-light-black p-x-small"
            href={job.absolute_url}
          >
            {job.title}
            <Arrow />
          </a>
        </li>
      {/each}
    </ul>
  {/if}
</section>
