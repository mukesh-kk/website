<script context="module">
  export const prerender = true;
</script>

<script lang="ts">
  import {
    ManifestoItems,
    ManifestoBenefits,
  } from "$lib/contents/cde-manifesto";
  import List from "$lib/components/cde/list.svelte";
  import Description from "$lib/components/cde/description.svelte";
  import Benefits from "$lib/components/cde/benefits.svelte";
  import Explore from "$lib/components/explore.svelte";
  import Whitepaper from "$lib/components/cde/whitepaper.svelte";
  import Hero from "$lib/components/cde/hero.svelte";
  import ThisWay from "$lib/components/cde/this-way.svelte";
  import Voices from "$lib/components/cde/voices.svelte";
  import OpenGraph from "../lib/components/open-graph.svelte";
</script>

<OpenGraph
  data={{
    title: "CDEs: Cloud Development Environments by Gitpod",
    description:
      "CDEs offer ready-to-code, secure and collaborative workspaces for software development in the cloud. CDEs solve the works-on-my-machine problem.",
  }}
/>

<Hero
  subtitle="CDE"
  title="Cloud development environments (CDEs)"
  text="CDEs bring the creative workflow of writing software to the cloud."
  image={{
    src: "/images/cde/hero.png",
    alt: "Spawning new development environments on click",
    darkSrc: "/images/cde/hero-dark.png",
  }}
  btnPrimary={{
    text: "Principles of CDEs",
    href: "#principles",
  }}
/>
<ThisWay />
<Description />
<List manifestoItems={ManifestoItems} />
<Voices />
<Benefits benefits={ManifestoBenefits} />

<Whitepaper />
<Explore contents={{ title: "Get started" }} />
