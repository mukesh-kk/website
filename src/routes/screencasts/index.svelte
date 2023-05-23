<script context="module">
  export const prerender = true;
</script>

<script>
  import OpenGraph from "$lib/components/open-graph.svelte";
  import { screencasts } from "$lib/contents/screencasts";
  import Explore from "$lib/components/explore.svelte";
  import ScreencastsGrid from "$lib/components/screencasts/screencasts-grid.svelte";
  import Search from "$lib/components/search.svelte";
  import SuggestedTopics from "$lib/components/screencasts/suggested-topics.svelte";
  import Header from "$lib/components/header.svelte";

  let searchTerm = "";
  let tag = "";

  let filteredScreencasts = screencasts;

  $: {
    filteredScreencasts = screencasts.filter((screencast) => {
      const isTitleAMatch = screencast.title
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      const isDescriptionAMatch = screencast.description
        .toLowerCase()
        .includes(searchTerm.toLowerCase());

      return isTitleAMatch || isDescriptionAMatch;
    });
  }

  $: if (tag) {
    filteredScreencasts = screencasts.filter((screencast) =>
      screencast.tags.includes(tag)
    );
    searchTerm = "";
  } else {
    filteredScreencasts = screencasts;
  }
</script>

<OpenGraph
  data={{
    description:
      "Short screencasts to get started and learn how to become always ready-to-code. Set up, configure and customize Gitpod and enter remote development in the cloud.",
    title: "Gitpod Screencasts - Videos, guides and tutorials",
    keywords: "learn, video, tutorial, documentation, onboarding",
  }}
/>

<Header
  title="A video playlist."
  text="Learn how to be always ready-to-code by following these short videos."
  tight={true}
/>

<Search
  bind:value={searchTerm}
  label="Search Screencasts"
  placeholder="Search Screencasts"
  class="md:mt-medium"
/>

<SuggestedTopics currentTopic={tag} on:setTopic={(e) => (tag = e.detail)} />

<section>
  {#if filteredScreencasts.length}
    <ScreencastsGrid screencasts={filteredScreencasts} />
  {:else}
    <p class="text-center text-large">
      Sorry, we couldn't find any results matching your search.
    </p>
  {/if}
</section>

<Explore />
