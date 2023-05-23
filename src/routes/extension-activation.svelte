<script context="module">
  export const prerender = true;
</script>

<script lang="ts">
  import Feature from "$lib/components/feature.svelte";
  import { feature } from "$lib/contents/extension-activation";
  import OpenGraph from "$lib/components/open-graph.svelte";
  import Header from "$lib/components/header.svelte";

  const currentBrowser =
    ["Opera", "Chrome", "Firefox", "IE"].find(
      (browser) =>
        typeof window !== "undefined" &&
        window.navigator.userAgent.includes(browser)
    ) || "Chrome";
</script>

<OpenGraph
  data={{
    description:
      "The Gitpod browser extension has been successfully installed.",
    title: "Extension Activation",
    norobots: true,
  }}
/>

<Header
  title="Gitpod CDEs for {currentBrowser} is Now Active"
  text="The browser extension has been installed."
  class="max-w-6xl !text-left md:!text-center justify-start"
/>

<Feature {feature} />
