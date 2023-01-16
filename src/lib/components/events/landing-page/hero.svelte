<script lang="ts">
  import Section from "$lib/components/section.svelte";

  export let subtitle: string = "";
  export let title: string;
  export let text: string;
  export let image: {
    src: string;
    alt: string;
    darkSrc?: string;
    isCut?: boolean;
  };
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
    : 'hero relative'} text-center lg:text-left"
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
  </div>
  <img
    class="
        max-w-lg
        -z-10 hidden
        lg:block {darkSrc ? 'dark:lg:hidden' : ''}
        w-[35vw]
        scale-75
        {isCut
      ? 'xl:transform xl:translate-x-12'
      : 'absolute right-0 top-1/2 transform -translate-y-[50%]'}
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
          scale-75
          {isCut
        ? 'xl:transform xl:translate-x-12 xl:translate-y-[20%]'
        : 'absolute right-0 top-1/2 -translate-y-[50%]'}
        "
      src={darkSrc}
      {alt}
    />
  {/if}
</Section>
