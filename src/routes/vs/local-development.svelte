<script context="module">
  export const prerender = true;
</script>

<script>
  import MeetBobAndAlice from "$lib/components/local-development/meet-bob-and-alice.svelte";
  import Explore from "$lib/components/explore.svelte";
  import GitpodVsLocalDevelopmentPost from "$lib/components/local-development-post.svelte";
  import OpenGraph from "$lib/components/open-graph.svelte";
  import CalloutSecondary from "$lib/components/callout-secondary.svelte";
  import Header from "$lib/components/header.svelte";
  import { benefits } from "$lib/contents/local-development";
  import CardSmall from "$lib/components/card/card-small.svelte";
</script>

<style lang="postcss">
  div {
    grid-template-columns: repeat(auto-fill, 314px);

    @media (max-width: 1430px) {
      /* this breakpoint is there to help make sure there are 4 cards in a row on Macbook 13' */
      @apply max-w-4xl mx-auto;
    }

    @media (max-width: 400px) {
      grid-template-columns: none;
    }
  }
</style>

<OpenGraph
  data={{
    title: "Gitpod vs local development - move to the cloud",
    description:
      "Develop like Google, Facebook and Shopify. Spend less time worrying about brittle, local dev environments and leverage the power of the cloud to improve your team’s developer experience.",
    keywords: "local development, cloud, remote development, secure",
  }}
/>

<Header
  title="Gitpod vs local development"
  text="Why should you move your dev environment to the cloud? Here is the answer."
  fullWidth={true}
>
  <div slot="content" class="grid gap-micro justify-center mt-small">
    {#each benefits as benefit}
      <CardSmall card={benefit} headingLevel="h2" />
    {/each}
  </div>
</Header>

<MeetBobAndAlice />

<CalloutSecondary
  title="Feel the difference"
  text="Spin up fresh, automated dev environments for each task, in the cloud, in
  seconds."
/>

<GitpodVsLocalDevelopmentPost
  title="Full blog post"
  text="Read a first-hand developer perspective on switching to remote development."
/>

<Explore />
