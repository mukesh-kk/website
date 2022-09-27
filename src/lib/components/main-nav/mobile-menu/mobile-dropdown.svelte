<script lang="ts">
  import Arrow from "$lib/components/svgs/arrow.svelte";
  import { links } from "$lib/contents/dropdown";
  import { page } from "$app/stores";

  let shown: boolean = false;
</script>

<button
  class="flex items-center text-p-large text-left hover:text-important focus:text-important hover:bg-sand-light focus:bg-sand-light dark:hover:bg-light-black dark:focus:bg-light-black {shown
    ? 'font-semibold text-important'
    : 'text-body'}"
  on:click={() => (shown = !shown)}
>
  Resources
  <Arrow
    class="ml-1.5 h-3 w-3 transform {shown ? 'rotate-180' : ''}"
    fillClass={shown ? "fill-important" : "fill-body"}
  />
</button>

{#if shown}
  <div class="flex flex-col text-p-large">
    {#each links as { href, text }}
      <a
        {href}
        class="py-macro no-underline text-body hover:bg-sand-light focus:bg-sand-light dark:hover:bg-light-black dark:focus:bg-light-black {$page
          .url.pathname === '/'
          ? /\/$/.test(href)
          : href.indexOf($page.url.pathname) >= 0
          ? '!text-important'
          : ''}"
      >
        {text}
      </a>
    {/each}
  </div>
{/if}
