<script context="module">
  export const prerender = true;
</script>

<script lang="ts">
  import { testimonials } from "$lib/contents/home/index";
  import {
    features,
    otherFeatures,
    secondaryFeatures as cards,
  } from "$lib/contents/home/features";

  import Features from "$lib/components/features.svelte";
  import ChooseProject from "$lib/components/index/choose-project.svelte";
  import Hero from "$lib/components/index/hero.svelte";
  import SectionScreenshot from "$lib/components/index/section-ides.svelte";
  import Testimonials from "$lib/components/index/testimonials.svelte";
  import GetStarted from "$lib/components/index/get-started/index.svelte";
  import OpenGraph from "$lib/components/open-graph.svelte";
  import SpinUp from "$lib/components/index/spin-up.svelte";
  import Section from "$lib/components/section.svelte";
  import Resources from "$lib/components/resources.svelte";
  import AnimatedLogos from "$lib/components/animated-logos.svelte";
  import UsedBy from "$lib/components/index/used-by.svelte";
  import Titles from "$lib/components/index/titles.svelte";
</script>

<OpenGraph
  data={{
    description:
      "Gitpod is an open-source developer platform for remote development. Accelerate your teams developer experience, remote collaboration and security - to ship new products faster and more securely.",
    title: "Gitpod: Always ready to code.",
    keywords:
      "cloud dev environment, remote development, open-source, integration, coding, developer experience, automation",
  }}
/>

<svelte:head>
  <!-- Preloading the IDE screenshots so that the IDE switcher works swiftly -->
  <link rel="preload" as="image" href="/images/index/vscode-desktop.png" />
  <link rel="preload" as="image" href="/images/index/vscode-browser.png" />
  <link rel="preload" as="image" href="/images/index/goland.png" />
  <link rel="preload" as="image" href="/images/index/pycharm.png" />
  <link rel="preload" as="image" href="/images/index/phpstorm.png" />
  <link rel="preload" as="image" href="/images/index/Intellij.png" />
</svelte:head>

<Hero />
<AnimatedLogos />
<Titles />
<ChooseProject />
<div id="choose-project-observer-target-bottom">
  <Features {features} />
</div>
<SectionScreenshot />
<UsedBy title="Used by 500k+ developers" class="py-small" />
<Features features={otherFeatures} />
<Section>
  <Resources {cards} headingLevel="h2" />
</Section>
<Testimonials
  title="Trusted by the best developer teams"
  text="Gitpod empowers teams to be always ready to code."
  class="-mb-20"
  {testimonials}
/>
<GetStarted />
<SpinUp />
