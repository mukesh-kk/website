<script lang="ts">
  import Card from "$lib/components/ui-library/card";
  import LinkButton from "$lib/components/ui-library/link-button/link-button.svelte";
</script>

<div class="flex mt-small lg:mt-xx-large justify-center">
  <Card
    class="py-small md:p-medium shadow-normal w-full max-w-lg px-x-small"
    size="medium"
  >
    <div class="flex flex-col justify-between w-full">
      <h3>More about DevX</h3>
      <p class="text-left mb-x-small">
        To learn more about our involvement in the world of developer
        experience, check out the DevX Community and previous conferences.
      </p>
      <div class="flex gap-micro">
        <LinkButton
          href="https://www.developerexperience.us"
          variant="primary"
          size="medium">DevX Community</LinkButton
        >
        <LinkButton href="https://devxconf.org/" variant="cta" size="medium"
          >DevX Conf</LinkButton
        >
      </div>
    </div>
  </Card>
</div>
