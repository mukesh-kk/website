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
  import Feature from "$lib/components/feature.svelte";
  import Resources from "$lib/components/resources.svelte";
  import AnimatedLogos from "$lib/components/animated-logos.svelte";
  import UsedBy from "$lib/components/index/used-by.svelte";
  import Titles from "$lib/components/index/titles.svelte";
</script>

<OpenGraph
  data={{
    description:
      "Gitpod is a cloud development environment for teams to efficiently and securely develop software. Improve your team's developer experience by coding in a CDE.",
    title: "Gitpod: Always ready to code.",
    keywords:
      "cloud dev environment, cde, remote development, open-source, integration, coding, developer experience, automation",
  }}
/>

<svelte:head>
  <!-- Preloading the IDE screenshots so that the IDE switcher works swiftly -->
  <link rel="preload" as="image" href="/images/index/vscode-desktop.webp" />
  <link rel="preload" as="image" href="/images/index/vscode-browser.webp" />
  <link rel="preload" as="image" href="/images/index/Intellij.webp" />
  <link rel="preload" as="image" href="/images/index/goland.webp" />
  <link rel="preload" as="image" href="/images/index/pycharm.webp" />
  <link rel="preload" as="image" href="/images/index/phpstorm.webp" />
  <link rel="preload" as="image" href="/images/index/rubymine.webp" />
  <link rel="preload" as="image" href="/images/index/vim.webp" />
  <link rel="preload" as="image" href="/images/index/webstorm.webp" />
  <link
    rel="preload"
    as="image"
    href="/images/index/gitpod-browser-extension.webp"
  />
</svelte:head>

<Hero />
<AnimatedLogos />
<Titles />
<ChooseProject />
<div id="choose-project-observer-target-bottom">
  <Features {features} />
</div>
<SectionScreenshot />
<UsedBy title="Used by +750k developers" class="py-small" />
<Features features={otherFeatures} />
<Section>
  <Resources {cards} headingLevel="h2" />
</Section>
<Section>
  <Feature
    feature={{
      title: "Backed by a strong community",
      paragraph:
        "Community is at the heart of Gitpod. <br/><br/>Join 5000+ members on our thriving Discord server to learn, collaborate, and connect with Gitpod developers. ",
      moreButton: {
        text: "Go to community page",
        href: "/community",
      },
      image: {
        src: "/images/community/squad-background.jpg",
        alt: "Community Heroes",
        classNames: "rounded-2xl",
      },
    }}
  />
</Section>
<Testimonials
  title="Trusted by the best developer teams"
  text="Gitpod empowers teams to be always ready to code."
  class="-mb-20"
  {testimonials}
/>
<GetStarted />
<SpinUp />
