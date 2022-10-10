<script lang="ts">
  import type { Image } from "$lib/types/image";
  export let image: Image;
  const { src, darkSrc, alt, styles } = image;
  let clazz: string = "";
  export { clazz as class };
</script>

<img {src} {alt} style={styles} class="{image.class} dark:hidden {clazz}" />

<img
  src={darkSrc}
  {alt}
  style={styles}
  class="{image.class} hidden dark:block {clazz}"
/>
