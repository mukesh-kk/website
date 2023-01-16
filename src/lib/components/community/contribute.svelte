<script>
  import Card from "$lib/components/ui-library/card";
  import LinkButton from "$lib/components/ui-library/link-button/link-button.svelte";
</script>

<Card
  size="medium"
  class="flex md:mt-xx-large mt-small items-center max-w-3xl mx-auto px-xx-small py-small md:px-medium md:py-medium md:pl-x-large gap-medium shadow-normal"
>
  <img
    src="/images/illustration-bricks.png"
    alt="Plant"
    class="hidden dark:hidden md:block w-32"
  />
  <img
    src="/images/illustration-bricks.png"
    alt="Plant"
    class="hidden dark:md:block w-32"
  />
  <div>
    <h2 class="h4">Contribute to Gitpod</h2>
    <p class="mb-x-small">
      We appreciate contributions to Gitpod!
      <br /><br />
      Create a tutorial, write a blog post, or build an integration to your favorite
      tool. Showcase your Gitpod project in our weekly community office hour. What
      idea do you have?
    </p>
    <LinkButton
      variant="primary"
      size="medium"
      href="/docs/help/contribute/content">More on how to contribute</LinkButton
    >
  </div>
</Card>
