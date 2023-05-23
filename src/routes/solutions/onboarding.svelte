<script context="module">
  export const prerender = true;
</script>

<script lang="ts">
  import { onboardFeatures } from "$lib/contents/home/features";
  import Quotes from "$lib/components/quotes.svelte";
  import { quotes } from "$lib/contents/customers";
  import Features from "$lib/components/features.svelte";
  import OpenGraph from "$lib/components/open-graph.svelte";
  import Section from "$lib/components/section.svelte";
  import Quote from "$lib/components/solutions/quote.svelte";
  import AnimatedLogos from "$lib/components/animated-logos.svelte";
  import Explore from "$lib/components/explore.svelte";
</script>

<OpenGraph
  data={{
    description:
      "Gitpod gives a perfect development environment to everyone on the team.",
    title: "Solution: Onboarding - Gitpod",
    keywords:
      "cloud development environment, cde, remote development, developer experience, onboarding",
  }}
/>

<div class="flex flex-col lg:flex-row sm:mt-x-large">
  <div class="items-center justify-between max-w-7xl mx-auto mt-small">
    <h2 class="h1 !mb-micro md:!mb-x-small max-w-xl">
      Onboard developers to new projects quickly
    </h2>
    <p class="text-large max-w-xl">
      Get new team members onboarded and ready-to-code in less than one hour.
    </p>
  </div>
  <Quote
    quote="It takes an hour at most, with training, to get developers coding."
    author={{
      name: "Cooper Benson",
      jobTitle: "Staff Platform Engineer at Quizlet",
    }}
    svgClazz="h-14 w-12"
  />
</div>
<div class="mt-xxx-large mb-x-large sm:mb-0">
  <AnimatedLogos />
</div>
<Section id="new-hire-to-coding-in-under-an-hour">
  <h3 class="text-center text-3xl sm:text-5xl font-bold">
    New hire to coding in under an hour
  </h3>
  <Features features={onboardFeatures} class="!mt-x-large" />
</Section>
<Section>
  <Quotes {quotes} class="max-w-7xl mx-auto" />
</Section>
<Explore />
