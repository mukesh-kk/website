<script lang="ts">
  import Card from "$lib/components/ui-library/card/card.svelte";
  import LinkButton from "$lib/components/ui-library/link-button/link-button.svelte";

  export let buttonLabel: string;
  export let href: string;
  export let heading: string;
  export let description: string;
</script>

<Card
  class="flex shadow-normal py-small md:p-x-large px-xx-small flex-col justify-between"
  size="medium"
>
  <div class="flex mb-x-small flex-col">
    <h3 class="h3 mb-micro md:!mb-x-small">{heading}</h3>
    <p class="text-p-large">{@html description}</p>
  </div>
  <div>
    <LinkButton variant="primary" size="medium" {href}>{buttonLabel}</LinkButton
    >
  </div>
</Card>
