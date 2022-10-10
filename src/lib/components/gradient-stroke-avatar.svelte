<script lang="ts">
  import type { Image } from "$lib/types/image";
  export let image: Image;
  const { src, alt, styles } = image;
</script>

<style lang="postcss">
  div {
    background-image: linear-gradient(
      to right,
      var(--white),
      var(--brand-ripe)
    );
  }

  :global(body.dark) div {
    background-image: linear-gradient(
      to right,
      var(--black),
      var(--brand-ripe)
    );
  }
</style>

<div class="flex items-center justify-center h-[55px] w-[55px] rounded-full">
  <img
    {src}
    {alt}
    style={styles}
    class="{image.class} rounded-full h-[50px] w-[50px] grayscale"
  />
</div>
