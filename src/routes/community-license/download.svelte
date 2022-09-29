<script context="module">
  export const prerender = true;
</script>

<script>
  import Header from "$lib/components/header.svelte";
  import OpenGraph from "$lib/components/open-graph.svelte";
  import LinkButton from "$lib/components/ui-library/link-button/link-button.svelte";
</script>

<OpenGraph
  data={{
    description: "Request a free community license",
    title: "Community License",
    norobots: true,
  }}
/>

<Header
  title="Download the license file"
  text="The file needs to be uploaded during the installation process.<br class='hidden sm:block' />View our <a href='/docs/configure/self-hosted/latest'>getting started</a> guides for instructions how to do so."
>
  <LinkButton
    variant="primary"
    size="large"
    href="/Community.yaml"
    download="Community.yaml"
    slot="content"
    class="mt-x-small"
  >
    Download
  </LinkButton>
</Header>
