<script lang="ts">
  import type { ImageBox } from "$lib/types/image-box";
  import LinkButton from "$lib/components/ui-library/link-button";
  export let image: ImageBox;
  const { src, alt, text, btnText, imgClass } = image;
</script>

<div
  class="shadow-normal rounded-4xl py-small px-micro sm:p-small max-w-2xl bg-card mb-micro sm:mb-large"
>
  <img {src} {alt} class="h-auto md:h-72 rounded m-auto w-full {imgClass}" />
  <p class="mt-small mb-micro max-w-sm mx-auto">Download {text}</p>
  <LinkButton variant="cta" size="large" href={src} download={alt}
    >{btnText}</LinkButton
  >
</div>
