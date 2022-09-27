<script lang="ts">
  import { page } from "$app/stores";
  import LogoTextless from "../svgs/logo-textless.svelte";

  const BASE_PATH =
    "https://gitpod.io#https://github.com/gitpod-io/website/tree/main/src/routes";
  const currentPage =
    $page.url.pathname === "/docs"
      ? `${$page.url.pathname}/index`
      : $page.url.pathname;
  export let url: string = "";

  const href = url || `${BASE_PATH}${currentPage}.md`;
  export let renderedOn: "desktop" | "mobile" = "desktop";
  export let text: string = "";
</script>

<style lang="postcss">
  a.stroked:hover,
  a.stroked:focus {
    &::after {
      @apply bg-white;
    }
  }

  :global(body.dark) a.stroked {
    &:hover,
    &:focus {
      &::after {
        @apply bg-light-black;
      }
    }
  }
</style>

<div class="flex flex-shrink-0">
  <a
    {href}
    target="_blank"
    class="
      inline-flex stroked  after:dark:hover:bg-light-black after:!filter-none py-3 px-4 items-center justify-center bg-bg dark:bg-card rounded-2xl text-important dark:text-white shadow-light dark:shadow-none font-semibold hover:bg-card focus:bg-card dark:hover:bg-light-black dark:focus:bg-light-black
    "
    rel="noopener"
    data-analytics={`{"variant":"open_in_gitpod"}`}
  >
    <span>
      <LogoTextless {renderedOn} />
    </span>
    <span class="ml-3">
      {#if text}
        {text}
      {:else}
        Edit in Gitpod
      {/if}
    </span>
  </a>
</div>
