<script context="module">
  export const prerender = true;
</script>

<script lang="ts">
  import Explore from "$lib/components/explore.svelte";
  import FeatureTitles from "$lib/components/feature-titles.svelte";
  import Header from "$lib/components/header.svelte";
  import ImageLightDark from "$lib/components/image-light-dark.svelte";
  import OpenGraph from "$lib/components/open-graph.svelte";
  import Celebrate from "$lib/components/team/celebrate.svelte";
  import CoreValues from "$lib/components/team/core-values.svelte";
  import Join from "$lib/components/team/join.svelte";
  import LifeAtGitpod from "$lib/components/team/life-at-gitpod.svelte";
  import MeetTheTeam from "$lib/components/team/meet-the-team.svelte";
  import Offsite from "$lib/components/team/offsite.svelte";
  import { featureTitles } from "$lib/contents/team";
</script>

<OpenGraph
  data={{
    title: "The people behind Gitpod – Fully remote, distributed worldwide",
    description:
      "Gitpod started with a small team in Germany. Now, our fully remote team is distributed across the globe. Check out our map to see where our team members are located.",
    keywords: "gitpod, team, about, map, remote",
  }}
/>

<Header
  title="We’re the people behind Gitpod"
  text="Gitpod started with a small team in Germany. Now, our fully remote team is distributed across the globe."
  fullWidth={true}
>
  <ImageLightDark
    slot="content"
    image={{
      src: "/images/team/map-light.svg",
      darkSrc: "/images/team/map-dark.svg",
      alt: "World Map of Gitpodders",
    }}
    class="mt-x-small md:mt-medium w-full max-w-[1091px] mx-auto"
  />
</Header>

<FeatureTitles {featureTitles} swap={true} />

<MeetTheTeam />

<CoreValues />

<Offsite />

<Celebrate />

<LifeAtGitpod />

<Join />

<Explore
  contents={{
    title: "We're hiring",
    description:
      "Help us shape Gitpod’s future from anywhere in the world. Come join us!",
    link: {
      text: "See open positions",
      href: "https://www.gitpod.io/careers",
    },
    secondaryLink: null,
  }}
/>
