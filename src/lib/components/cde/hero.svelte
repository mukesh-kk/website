<script lang="ts">
  import Section from "$lib/components/section.svelte";
  import LinkButton from "$lib/components/ui-library/link-button";
  import ButtonsWrapper from "$lib/components/buttons-wrapper.svelte";

  type Link = {
    text: string;
    href: string;
    onClickHandler?: () => void;
  };

  export let subtitle: string = "";
  export let title: string;
  export let text: string;
  export let image: {
    src: string;
    alt: string;
    darkSrc?: string;
  };
  export let btnPrimary: Link;
  export let btnSecondary: Link = null;
  const { src, alt, darkSrc } = image;
</script>

<Section class="flex items-center justify-between text-left">
  <div class="text-box mx-auto lg:mx-0 max-w-[700px]">
    {#if subtitle}
      <p class="h5 font-bold text-sub mb-xx-small">{subtitle}</p>
    {/if}
    <h1 class="h1 !mb-micro md:!mb-xx-small">{title}</h1>
    <p class="mx-0 max-w-lg text-large mb-x-small">
      {text}
    </p>
    <ButtonsWrapper class="justify-start">
      {#if btnPrimary}
        <LinkButton
          size="large"
          variant="primary"
          href={btnPrimary.href}
          on:click={btnPrimary.onClickHandler}
        >
          {btnPrimary.text}
        </LinkButton>
      {/if}
      {#if btnSecondary}
        <LinkButton
          variant="cta"
          size="large"
          href={btnSecondary.href}
          on:click={btnPrimary.onClickHandler}
        >
          {btnSecondary.text}
        </LinkButton>
      {/if}
    </ButtonsWrapper>
  </div>
  <img
    class="transform xl:-translate-y-[30%] xl:-translate-x-[20%] xl:scale-150 max-w-lg -z-10 hidden lg:block {darkSrc
      ? 'dark:lg:hidden'
      : ''} w-[35vw]"
    {src}
    {alt}
  />
  {#if darkSrc}
    <img
      class="max-w-lg -z-10 hidden dark:lg:block w-[35vw] transfrom xl:-translate-y-[30%] xl:-translate-x-[20%] xl:scale-150"
      src={darkSrc}
      {alt}
    />
  {/if}
</Section>
