<script lang="ts">
  import Section from "$lib/components/section.svelte";
  import Highlights from "./highlights.svelte";
  import MoreAboutDevx from "./more-about-devx.svelte";
  import ConferenceCard from "./conference-card.svelte";
  import { conferences } from "$lib/contents/events";
</script>

<Section>
  <div class="mb-x-small md:mb-medium">
    <h2 class="text-center h2 mb-macro md:!mb-micro">Conferences</h2>
    <p class="text-large text-center mx-auto max-w-4xl">
      In addition to hosting the annual virtual DevX Conf event, Gitpod is
      involved in sponsoring and speaking at conferences around the world.
    </p>
  </div>
  <div class="flex justify-center gap-xx-small flex-wrap">
    {#each conferences as conference}
      <ConferenceCard {conference} />
    {/each}
  </div>

  <Highlights />

  <MoreAboutDevx />
</Section>
