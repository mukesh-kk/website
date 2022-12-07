<script lang="ts">
  import Section from "./section.svelte";
  import LinkButton from "$lib/components/ui-library/link-button";
  import ButtonsWrapper from "./buttons-wrapper.svelte";

  let className = "";

  export { className as class };

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
    isCut?: boolean;
  } = { alt: "", src: "" };
  export let btnPrimary: Link;
  export let btnSecondary: Link = null;
  const { src, alt, darkSrc, isCut = true } = image;
</script>

<style lang="postcss">
  :global(section.hero) {
    @apply lg:mb-[14rem];
  }

  :global(section.cut) {
    @apply lg:mb-[300px];
  }

  .h1 {
    @apply mb-micro md:mb-xx-small;
  }
</style>

<Section
  class="{isCut
    ? 'cut flex items-center justify-between'
    : 'hero relative'} text-center lg:text-left pb-x-large lg:pb-0 {className}"
>
  <div
    class="text-box mx-auto {isCut
      ? null
      : 'lg:pt-x-large'} lg:mx-0 max-w-[700px]"
  >
    {#if subtitle}
      <p class="h5 font-bold text-sub mb-xx-small">{subtitle}</p>
    {/if}
    <h1 class="h1">{title}</h1>
    <p class="mx-auto lg:mx-0 max-w-lg lgx:max-w-none text-large mb-x-small">
      {text}
    </p>
    <ButtonsWrapper class="justify-center lg:justify-start">
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
  {#if image.src}
    <img
      class="
      max-w-lg
      -z-10 hidden
      lg:block {darkSrc ? 'dark:lg:hidden' : ''}
      w-[35vw]
      {isCut
        ? 'xl:transform xl:translate-x-24 xl:translate-y-[20%] xl:scale-150'
        : 'absolute right-0 top-1/2 transform -translate-y-[40%]'}
    "
      {src}
      {alt}
    />
    {#if darkSrc}
      <img
        class="
        max-w-lg
        -z-10 hidden
        dark:lg:block
        w-[35vw]
        transfrom
        scale-[1.12]
        {isCut
          ? 'xl:transform xl:translate-x-24 xl:translate-y-[20%] xl:scale-[1.66]'
          : 'absolute right-0 top-1/2 -translate-y-[40%]'}
      "
        src={darkSrc}
        {alt}
      />
    {/if}
  {/if}
</Section>
