<script lang="ts">
  import Section from "$lib/components/section.svelte";
  import WebinarCard from "./webinar-card.svelte";
  import { webinars } from "$lib/contents/events";
</script>

<Section>
  <div class="mb-x-small md:mb-medium">
    <h2 class="text-center h2 mb-macro md:!mb-micro">Webinars</h2>
    <p class="text-large text-center mx-auto">
      Take a look at our webinars and&nbsp;panel&nbsp;discussions.
    </p>
  </div>
  <div class="flex gap-xx-small flex-wrap justify-center">
    {#each webinars as webinar}
      <WebinarCard {webinar} />
    {/each}
  </div>
</Section>
