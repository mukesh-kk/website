<script>
  import Header from "../header.svelte";
  import Quote from "../quote.svelte";
  import LinkButton from "../ui-library/link-button/link-button.svelte";
</script>

<Header
  title="Gitpod for Education"
  text="Spend less time on tedious configurations and more time actually teaching"
>
  <div slot="content">
    <LinkButton
      href="/docs/introduction/getting-started"
      variant="primary"
      size="large"
      class="mt-x-small mb-small">Get started</LinkButton
    >
    <Quote
      quote="I would rather close down the academy than stop using Gitpod."
      author={{
        name: "Alejandro Sanchez",
        jobTitle: "Founder at 4Geeks",
      }}
    />
  </div>
</Header>
