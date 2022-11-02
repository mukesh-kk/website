<script lang="ts">
  import Header from "$lib/components/events/kubecon-detroit/header.svelte";
  import OurTalks from "$lib/components/events/kubecon-detroit/our-talks.svelte";
  import OurBooth from "$lib/components/events/kubecon-detroit/our-booth.svelte";
  import PreviousKubecons from "$lib/components/events/kubecon-detroit/previous-kubecons.svelte";
  import Explore from "$lib/components/explore.svelte";
  import OpenGraph from "$lib/components/open-graph.svelte";
</script>

<OpenGraph
  data={{
    title: "Meet Gitpod at KubeCon NA in Detroit",
    description: "Meet Gitpod at KubeCon NA in Detroit",
  }}
/>

<div class="flex flex-col items-center">
  <Header />
  <OurTalks />
  <OurBooth />
  <PreviousKubecons />
  <Explore contents={{ title: "Try it out" }} />
</div>
