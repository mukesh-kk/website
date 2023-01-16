<script context="module">
  export const prerender = true;
</script>

<script lang="ts">
  import Signup from "$lib/components/dedicated/signup.svelte";
  import OpenGraph from "$lib/components/open-graph.svelte";
  import Header from "$lib/components/header.svelte";
  import Hero from "$lib/components/dedicated/hero-text.svelte";
  import Pill from "$lib/components/pill.svelte";
</script>

<OpenGraph
  data={{
    title: "Gitpod Dedicated: an isolated, single-tenant installation",
    keywords: "dedicated, single-tenant, isolated, managed, private",
    description:
      "Get your private instance of Gitpod. Gitpod Dedicated is the right choice for large companies with high security and compliance requirements.",
  }}
/>

<Header
  class="md:!mb-small !mb-micro"
  title="Gitpod Dedicated"
  titleInline={true}
  fullWidth={true}
>
  <Pill slot="annotation" class="align-top" text="soon" variant="pink" />
</Header>
<div class="flex lgx:justify-start items-start mb-xxx-large">
  <div class="max-w-2xl justify-left">
    <Hero />
  </div>
  <div class="max-w-2xl justify-center">
    <Signup class="lgx:hidden mx-auto" toType="dedicated-signup" />
  </div>
  <Signup toType="dedicated-signup" class="hidden lgx:block" />
</div>
