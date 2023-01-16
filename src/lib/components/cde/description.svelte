<script lang="ts">
  import Section from "$lib/components/section.svelte";
  import Timeline from "./timeline.svelte";
</script>

<Section>
  <div class="mb-0 md:mb-medium">
    <h2 class="text-center !mb-0 h2">Our journey towards CDEs</h2>
  </div>

  <Timeline />
  <p class="max-w-2xl text-p-large mx-auto">
    Twenty-five years ago software engineers started the journey to continuous
    integration; centralised and automated it made all of us more efficient.
    <br /><br />
    Fifteen years later we started the journey to continuous deployment which gave
    teams agency, the power to experiment and learn quickly.
    <br /><br />
    Today we find ourselves on another transformational journey towards “continuous
    development”; from static and brittle development environments to consistently
    reproducible, instant, ephemeral and disposable Cloud Development Environments.
  </p>
</Section>
