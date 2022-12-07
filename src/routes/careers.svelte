<script lang="ts" context="module">
  export const load: Load = async ({ fetch }) => {
    const res = await fetch(
      "https://boards-api.greenhouse.io/v1/boards/gitpod/jobs"
    );
    if (!res.ok) {
      return {
        error: new Error("Failed to fetch job board"),
        status: 500,
      };
    }
    const data = await res.json();
    return {
      props: { data },
    };
  };
</script>

<script lang="ts">
  import OpenGraph from "$lib/components/open-graph.svelte";
  import Description from "$lib/components/careers/description.svelte";
  import Header from "$lib/components/careers/header.svelte";
  import WhatWeOffer from "$lib/components/careers/what-we-offer.svelte";
  import OpenPositions from "$lib/components/careers/open-positions.svelte";
  import type { Load } from "@sveltejs/kit";
  import type { GreenhouseResponse } from "$lib/types/careers";

  export let data: GreenhouseResponse;
</script>

<OpenGraph
  data={{
    description: "Come join our fast-growing, venture-backed team.",
    title: "Careers at Gitpod",
  }}
/>
<Header />
<Description />
<WhatWeOffer />
<OpenPositions openPositions={data} />
