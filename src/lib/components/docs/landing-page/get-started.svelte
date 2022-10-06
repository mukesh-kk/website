<script lang="ts">
  import Card from "$lib/components/ui-library/card";
  import LinkButton from "$lib/components/ui-library/link-button";
  import { getStartedItems } from "$lib/contents/docs/landing-page/get-started";
</script>

<Card
  size="medium"
  background="white"
  class="flex items-center p-xx-small md:p-small gap-small"
>
  <img
    src="/images/docs/book.png"
    class="hidden lg:block"
    width="136"
    height="140"
    alt="book"
  />
  <div class="min-w-0">
    <div
      class="md:text-[28px] md:leading-10 text-xl leading-6 text-important inline-block pb-4 font-semibold"
    >
      How would you like to get started with Gitpod?
    </div>
    <p class="text-p-medium md:leading-[27px] leading-[22px]">
      Learn how to spin up dev environments the way that suits you best –
      reading, watching or start directly with a template.
    </p>
    <div class="flex flex-wrap gap-4 justify-start md:justify-center">
      {#each getStartedItems as getStartedItem}
        <LinkButton sveltekit:prefetch href={getStartedItem.href} variant="cta"
          >{getStartedItem.label}</LinkButton
        >
      {/each}
    </div>
  </div>
</Card>
