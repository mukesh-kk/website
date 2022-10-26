<script context="module">
  export const prerender = true;
</script>

<script>
  import AdditionalImages from "$lib/components/media-kit/additional-images.svelte";
  import ColorsSection from "$lib/components/media-kit/colors-section.svelte";
  import LogoSection from "$lib/components/media-kit/logo-section.svelte";
  import OpenGraph from "$lib/components/open-graph.svelte";
  import Header from "$lib/components/header.svelte";
</script>

<OpenGraph
  data={{
    description:
      "Hi! We’ve put together some assets to help you use our brand and assets inclding our logo and trademarks, without having to negotiate legal agreements for each use. Please contact us for any intended use not covered by these guidelines.",
    title: "Media kit",
  }}
/>

<Header
  title="Media kit"
  text="We’ve put together some assets to help you use our brand."
>
  <img
    slot="content"
    src="/images/media-kit/media-kit.png"
    alt="Gitpod Illustration"
    class="mt-small rounded-4xl w-full"
  />
</Header>

<LogoSection />
<ColorsSection />
<AdditionalImages />
