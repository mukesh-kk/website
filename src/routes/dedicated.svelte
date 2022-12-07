<script context="module">
  export const prerender = true;
</script>

<script lang="ts">
  import Signup from "$lib/components/dedicated/signup.svelte";
  import OpenGraph from "$lib/components/open-graph.svelte";
  import PlansAndPricing from "$lib/components/pricing/plans-and-pricing.svelte";
  import Hero from "$lib/components/dedicated/hero-text.svelte";
</script>

<OpenGraph
  data={{
    title: "Gitpod Dedicated: an isolated, single-tenant installation",
    keywords: "dedicated, single-tenant, isolated, managed, private",
    description:
      "Get your private instance of Gitpod. Gitpod Dedicated is the right choice for large companies with high security and compliance requirements.",
  }}
/>
<PlansAndPricing />
<div class="flex justify-center lgx:justify-start items-start mb-xxx-large">
  <div class="max-w-2xl">
    <Hero />

    <Signup class="lgx:hidden mx-auto" toType="dedicated-signup" />
  </div>
  <Signup toType="dedicated-signup" class="hidden lgx:block" />
</div>
