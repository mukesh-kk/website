<script context="module">
  export const prerender = true;
</script>

<script>
  import OpenGraph from "$lib/components/open-graph.svelte";
  import { contactActions } from "$lib/contents/contact";
  import Header from "$lib/components/header.svelte";
  import CardSmall from "$lib/components/card/card-small.svelte";
</script>

<OpenGraph
  data={{
    title: "Contact",
    description:
      "Get product or account support, talk to a member of our sales team, ask our community or view the documentation.",
  }}
/>

<Header
  title="How can we help you?"
  text="Get in touch and let us know how we can help."
  tight={true}
  fullWidth={true}
>
  <div
    slot="content"
    class="grid sm:grid-cols-2 max-w-xl mx-auto xl:max-w-none xl:grid-cols-4 gap-micro justify-center mt-small sm:mb-xxx-large"
  >
    {#each contactActions as action}
      <CardSmall
        card={action}
        btnSize="normal"
        titleClassNames="h4"
        class="px-xx-small lg:px-macro lgx:px-3 2xl:p-x-small"
      />
    {/each}
  </div>
</Header>
