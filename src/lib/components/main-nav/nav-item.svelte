<script lang="ts">
  import { page } from "$app/stores";

  export let navItem: any;
  const { href, highlight, label, isExternal } = navItem;
  const isPrefecthable = isExternal ? undefined : true;

  $: isActivePage =
    $page.url.pathname === "/"
      ? /\/$/.test(href)
      : href.indexOf($page.url.pathname) >= 0;
</script>

<style lang="postcss">
  a {
    @media (min-width: 1190px) {
      @apply text-base;
    }
  }

  .active {
    @apply text-important;
  }

  li {
    list-style-type: none;
  }
</style>

<li>
  <a
    class:active={isActivePage && !isExternal}
    class:flex={highlight}
    aria-label={highlight && `Highlighted page: ${label}`}
    {href}
    on:click
    sveltekit:prefetch={isPrefecthable}
    class="text-important sm:text-body text-p-large hover:text-important focus:text-important active:text-important"
  >
    {label}
    {#if highlight}
      <img src="/indicator.svg" alt="highlight indicator" class="h-1.5 w-1.5" />
    {/if}
  </a>
</li>
