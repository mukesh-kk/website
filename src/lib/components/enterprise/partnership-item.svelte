<script lang="ts">
  import Card from "$lib/components/ui-library/card";
  import type { PartnershipCard } from "$lib/types/enterprise";
  import LinkButton from "../ui-library/link-button/link-button.svelte";
  export let partnershipData: PartnershipCard;
</script>

<Card class="flex gap-8  items-center justify-center flex-col p-8" size="small">
  {#if partnershipData.imgDark}
    <img
      class="dark:hidden"
      src={partnershipData.img.src}
      width="48"
      height="48"
      alt={partnershipData.img.alt}
    />
    <img
      src={partnershipData.imgDark.src}
      width="48"
      height="48"
      class="hidden dark:block"
      alt={partnershipData.imgDark.alt}
    />
  {:else if partnershipData.img}
    <img
      src={partnershipData.img.src}
      width="48"
      height="48"
      alt={partnershipData.img.alt}
    />
  {/if}
  {#if partnershipData.svg}
    <svelte:component
      this={partnershipData.svg.component}
      width="48"
      height="48"
      {...partnershipData.svg.props}
    />
  {/if}
  <div class="text-3xl text-important font-semibold">
    {@html partnershipData.title}
  </div>
  <LinkButton
    sveltekit:prefetch
    href={partnershipData.link.href}
    variant="cta"
    size="medium">{partnershipData.link.text}</LinkButton
  >
</Card>
