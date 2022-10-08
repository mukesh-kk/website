<script lang="ts">
  import type { ShareLink } from "$lib/types/share-link";

  export let text: string;
  export let shareLinks: ShareLink[];
  let clazz = "";
  export { clazz as class };
</script>

<div class="flex flex-col md:flex-row items-center {clazz}">
  <h2 class="h5 md:mr-micro mb-0 text-h6">{text}</h2>
  <div class="flex space-x-macro mt-micro md:mt-0">
    {#each shareLinks as link}
      <a
        href={link.href}
        rel="noreferrer"
        target="_blank"
        data-analytics={`{"variant":"social_media","context":"` +
          (link.name || link.icon.alt).toLowerCase() +
          `_share"}`}
        class="p-1 md:p-0.5 hover:opacity-80 focus:opacity-80"
      >
        {#if link.svg}
          <svelte:component
            this={link.svg}
            class="h-10 w-10 md:h-7 md:w-7 transition-all duration-200"
          />
        {:else}
          <img
            src={link.icon.src}
            alt={link.icon.alt}
            class="h-10 w-10 md:h-7 md:w-7 transition-all duration-200"
          />
        {/if}
      </a>
    {/each}
  </div>
</div>
