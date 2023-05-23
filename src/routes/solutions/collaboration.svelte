<script context="module">
  export const prerender = true;
</script>

<script lang="ts">
  import { testimonials } from "$lib/contents/home/index";
  import { collaborationFeatures } from "$lib/contents/home/features";

  import Features from "$lib/components/features.svelte";
  import Testimonials from "$lib/components/index/testimonials.svelte";
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
    title: "Solution: Collaboration - Gitpod",
    keywords:
      "cloud development environment, cde, remote development, developer experience, collaboration, snapshot, workspace sharing",
  }}
/>

<div class="flex flex-col lg:flex-row sm:mt-x-large">
  <div
    class="items-center justify-between max-w-7xl mx-auto mt-small md:my-x-large"
  >
    <h2 class="h1 !mb-micro md:!mb-x-small max-w-xl">
      How Gitpod improves collaboration
    </h2>
    <p class="text-large max-w-xl">
      Gitpod gives a perfect development environment to everyone on the team.
    </p>
  </div>
  <Quote
    quote="
    With Gitpod, I can review any PR in a coding environment where I can edit, build and test the contribution, by just prepending <span class='text-dark-grey inline-block px-micro mt-macro bg-tertiary rounded-xl justify-center text-lg font-normal'><code>gitpod.io/#</code></span>"
    author={{
      name: "Johannes Schickling",
      jobTitle: "Co-founder at Prisma",
    }}
    svgClazz="h-20 w-20"
  />
</div>
<div class="mt-xxx-large mb-24 sm:mb-0">
  <AnimatedLogos />
</div>
<Section id="frictionless-collaboration">
  <h3 class="text-center text-3xl sm:text-5xl font-bold">
    Frictionless collaboration
  </h3>
  <p
    class="text-center text-lg sm:text-2xl mt-xx-small mb-x-small mx-auto max-w-2xl"
  >
    Learn <a href="/customers/quizlet"
      >how Quizlet enhanced collaboration with designers and product managers
      using Gitpod</a
    >.
  </p>
</Section>
<Features features={collaborationFeatures} class="!mt-x-large" />
<Section>
  <Testimonials
    title="Trusted by the best developer teams"
    text="Gitpod empowers teams to be always ready-to-code."
    class="-mb-20"
    {testimonials}
  />
</Section>
<Explore />
