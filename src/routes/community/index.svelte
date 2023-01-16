<script context="module">
  export const prerender = true;
</script>

<script>
  import CommunityLove from "$lib/components/community/community-love.svelte";
  import Contribute from "$lib/components/community/contribute.svelte";

  import OpenGraph from "$lib/components/open-graph.svelte";

  import Hero from "$lib/components/hero.svelte";
  import OverviewCards from "$lib/components/community/overview-cards.svelte";
  import ContributionHighlights from "$lib/components/community/contribution-highlights.svelte";
  import CalloutBoxes from "$lib/components/community/callout-boxes.svelte";
  import Testimonials from "$lib/components/community/testimonials.svelte";
  import Explore from "$lib/components/explore.svelte";
</script>

<OpenGraph
  data={{
    title: "Gitpod Community - Come and hang out with us",
    description:
      "Join the Gitpod community. Browse categories, post your questions, or just chat with other members. On Discord, Twitter, GitHub, YouTube or Reddit.",
    keywords: "community hangout. discord, social",
  }}
/>

<Hero
  class="!mb-0 !mt-small lg:!mt-x-large !pb-micro"
  title="Welcome to our community!"
  text="Our community is a space to learn about Gitpod, connect with others and build cool projects. We’re happy to have you!"
  btnPrimary={{ href: "https://www.gitpod.io/chat", text: "Join now" }}
/>

<OverviewCards />

<Testimonials />

<CommunityLove />

<ContributionHighlights />

<Contribute />

<CalloutBoxes />

<Explore
  contents={{
    title: "Join the community",
    link: {
      href: "https://www.gitpod.io/chat",
      text: "Join the community",
    },
    secondaryLink: null,
    description:
      "Join our developer community from all over the world as they build on cloud developer environments.",
  }}
/>
