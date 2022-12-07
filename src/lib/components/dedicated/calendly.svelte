<script lang="ts">
  import { onMount } from "svelte";

  onMount(() => {
    const script = document.createElement("script");
    script.setAttribute(
      "src",
      "https://calendly.com/assets/external/widget.js"
    );

    document.body.appendChild(script);
  });
</script>

<style lang="postcss">
  div :global(iframe) {
    @apply rounded-2xl;
  }
</style>

<svelte:head>
  <link
    href="https://calendly.com/assets/external/widget.css"
    rel="stylesheet"
  />
</svelte:head>

<div>
  <div
    class="calendly-inline-widget"
    data-url="https://calendly.com/d/g7d-vfn-5fw?hide_gdpr_banner=1&primary_color=ffae33"
    style="min-width:250px;height:680px;"
  />
</div>
