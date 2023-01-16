<script lang="ts">
  import ButtonsWrapper from "./buttons-wrapper.svelte";

  import Section from "./section.svelte";
  import LinkButton from "./ui-library/link-button";
  export let title: string;
  export let text: string;
  export let isGetADemoLinkShown: boolean = true;
  export let link: { href: string; text: string } = {
    href: "https://gitpod.io/workspaces/",
    text: "Start for free",
  };
</script>

<Section class="text-center">
  <h2>{title}</h2>
  <p class="text-large mb-x-small max-w-4xl mx-auto">
    {@html text}
  </p>
  <ButtonsWrapper class="justify-center">
    <LinkButton variant="primary" size="large" href={link.href}>
      {link.text}
    </LinkButton>
    {#if isGetADemoLinkShown}
      <LinkButton
        variant="cta"
        size="large"
        href="/contact/sales?subject=enterprise"
      >
        Talk to sales
      </LinkButton>
    {/if}
  </ButtonsWrapper>
  <slot name="image" />
  <slot name="image-mobile" />
</Section>
