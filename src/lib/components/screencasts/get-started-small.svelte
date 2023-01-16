<script lang="ts">
  import Card from "../ui-library/card/card.svelte";
  import LinkButton from "../ui-library/link-button/link-button.svelte";
</script>

<Card
  size="medium"
  class="flex items-center mx-auto p-x-small md:py-medium md:px-small gap-small shadow-normal max-w-sm md:max-w-2xl"
>
  <img
    src="/images/screencasts/monitor-plant.png"
    alt="Workspace setup"
    class="w-44 hidden md:block"
  />
  <div>
    <h3 class="h4">Get started</h3>
    <p class="mb-micro">
      Spin up fresh cloud development environments for each task, in the cloud,
      in seconds.
    </p>
    <LinkButton href="/#get-started" variant="primary">Try now</LinkButton>
  </div>
</Card>
