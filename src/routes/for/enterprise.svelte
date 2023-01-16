<script context="module">
  export const prerender = true;
</script>

<script lang="ts">
  import UsedBy from "$lib/components/index/used-by.svelte";
  import Explore from "$lib/components/explore.svelte";
  import {
    exploreContents,
    featureCards,
    partnershipCards,
    integrateFeatures,
    otherFeatures,
    quotes,
  } from "$lib/contents/enterprise";
  import Section from "$lib/components/section.svelte";
  import Quotes from "$lib/components/quotes.svelte";
  import SectionCommon from "$lib/components/section-common.svelte";
  import CardSmall from "$lib/components/card/card-small.svelte";
  import Partnership from "$lib/components/enterprise/partnership.svelte";
  import Integrate from "$lib/components/enterprise/integrate.svelte";
  import OpenGraph from "$lib/components/open-graph.svelte";
  import Hero from "$lib/components/hero.svelte";
  import SectionFeatures from "$lib/components/section-features.svelte";
  import { featureTitles } from "$lib/contents/home";
  import FeatureTitles from "$lib/components/feature-titles.svelte";
  import Pill from "$lib/components/pill.svelte";
</script>

<OpenGraph
  data={{
    title: "Gitpod for enterprises",
    description:
      "Gitpod remote developer environments help enterprises ship faster and more securely. Engineering teams improve onboarding, collaboration, and security using Gitpod.",
    keywords:
      "cloud dev environment, remote development, developer onboarding, developer collaboration, cloud development, VDI",
  }}
/>

<Hero
  subtitle="Enterprise"
  title="Engineering Teams get more done with Gitpod"
  text="Unleash developer productivity and collaboration by supercharging how you develop."
  image={{
    src: "/images/enterprise/enter-rug.png",
    darkSrc: "/images/enterprise/enter-rug-dark.png",
    alt: "Enter Rug",
  }}
  btnPrimary={{
    text: "Get a demo",
    href: "/contact/get-demo",
  }}
  btnSecondary={{
    text: "Contact sales",
    href: "/contact/sales?subject=enterprise",
  }}
/>

<FeatureTitles
  {featureTitles}
  featureTitlePadding="px-macro py-xx-small sm:px-small sm:py-x-small"
/>

<UsedBy
  class="py-small"
  title="Used by world-leading companies"
  isCard={false}
/>
<SectionFeatures
  title="Your engineering team, more productive"
  features={otherFeatures}
/>
<SectionCommon title="Your cloud or our cloud">
  <div
    class="flex flex-wrap justify-center mt-small max-w-5xl mx-auto"
    slot="content"
  >
    {#each featureCards as card}
      <CardSmall class="m-macro px-xx-small relative" card={card.card}>
        {#if card.pill}
          <Pill
            class="absolute right-x-small -top-2"
            variant={card.pill.variant}
            text={card.pill.text}
          />
        {/if}
      </CardSmall>
    {/each}
  </div>
</SectionCommon>

<Section>
  <Quotes {quotes} />
</Section>
<Integrate features={integrateFeatures} />
<Partnership partnershipItems={partnershipCards} />
<Explore contents={exploreContents} />
