<script lang="ts">
  import Card from "$lib/components/ui-library/card";
  import LinkButton from "$lib/components/ui-library/link-button";
  import Pill from "../../pill.svelte";
  export let conference: {
    text: string;
    buttonText?: string;
    img: string;
    imgDark?: string;
    href?: string;
    alt: string;
    year: string;
  };
</script>

<Card
  class="flex flex-col w-full relative gap-xx-small max-w-sm py-small justify-between px-xx-small md:px-x-small"
  size="small"
>
  <Pill
    class="absolute right-x-small -top-2"
    variant="gray"
    text={conference.year}
  />
  <div class="flex flex-col items-center">
    <img
      class="w-44 dark:hidden h-16 mb-x-small"
      src={conference.img}
      alt={conference.alt}
    />
    {#if conference.imgDark}
      <img
        class="w-44 hidden dark:block h-16 mb-x-small"
        src={conference.imgDark}
        alt={conference.alt}
      />
    {/if}

    <p class="text-center">
      {conference.text}
    </p>
  </div>
  {#if conference.buttonText}
    <div class="flex justify-center">
      <LinkButton href={conference.href} variant="cta" size="medium"
        >{conference.buttonText}</LinkButton
      >
    </div>
  {/if}
</Card>
