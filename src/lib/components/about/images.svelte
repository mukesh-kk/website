<script lang="ts">
  import type { Image } from "$lib/types/image";
  export let images: Image[];

  let clazz = "";
  export { clazz as class };
</script>

<ul
  class="{clazz} flex basis-1/4 my-8 mx-auto justify-center space-x-1 sm:space-x-4"
>
  {#each images as { src, alt }}
    <li>
      <img class="w-full rounded-2xl" {src} {alt} height="310" width="310" />
    </li>
  {/each}
</ul>
