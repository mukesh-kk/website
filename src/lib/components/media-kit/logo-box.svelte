<script lang="ts">
  import type { Logo } from "$lib/types/logo";
  import LinkButton from "$lib/components/ui-library/link-button";

  export let logo: Logo;
  const { src, alt, text, srcPNG, isDark } = logo;
  const svgSrc = `/svg/media-kit/${src}`;
</script>

<style lang="postcss">
  .logo-box {
    width: 480px;

    @media (max-width: 50px) {
      width: 100%;
    }
  }

  :global(body.dark) .logo-box:not(.dark) :global(a) {
    @apply shadow-sm;
  }
</style>

<div
  class="logo-box px-small py-medium sm:p-large rounded-4xl shadow-normal md:mx-micro mb-micro md:mb-small {isDark
    ? 'dark bg-black dark:bg-card text-white'
    : 'bg-white text-dark-grey'}"
>
  <img src={svgSrc} {alt} class="mx-auto" />
  <p class="mt-medium mb-micro">Download {text}</p>
  <div class="flex justify-center items-center flex-wrap gap-4">
    <LinkButton
      style="min-width: 0"
      variant="primary"
      size="large"
      download={src}
      href={svgSrc}>SVG</LinkButton
    >
    <LinkButton
      style="min-width: 0"
      variant="cta"
      size="large"
      href={`/images/media-kit/${srcPNG}`}
      download={srcPNG}
    >
      PNG
    </LinkButton>
  </div>
</div>
