<script context="module">
  export const load = async ({ fetch, url }) => {
    const slug = url.pathname.replace(/\//g, "__");
    const res = await fetch(`/api/${slug}.docs.json`);
    try {
      const data = await res.clone().json();
      return { props: { docsMeta: data } };
    } catch (e) {
      return {
        error: e,
      };
    }
  };
</script>

<script lang="ts">
  import Menu from "$lib/components/docs/menu.svelte";
  import MobileMenu from "$lib/components/docs/mobile-menu/index.svelte";
  import Search from "$lib/components/docs/search.svelte";
  import "$lib/assets/markdown-commons.scss";
  import { MENU } from "$lib/contents/docs/menu";
  import { docsMeta as docsMetaStore } from "$lib/stores/docs-meta";
  import OnThisPageNav from "$lib/components/navigation/on-this-page-nav.svelte";
  import type { DocsMeta } from "$lib/types/docs-meta";
  import EditInGitpod from "$lib/components/docs/edit-in-gitpod.svelte";
  import displayBanner from "$lib/stores/display-banner";

  export let docsMeta: DocsMeta;

  $: docsMetaStore.set(docsMeta);
</script>

<style lang="postcss">
  .extended-sticky {
    @apply top-36;
  }
</style>

<div class="pb-10 lg:flex lg:pt-10">
  <div
    class:extended-sticky={$displayBanner}
    class="hidden z-20 sticky top-24 self-start lg:block lg:w-1/5"
  >
    <Search docSearchInputSelector="algolia-mobile" />
    <Menu {MENU} />
  </div>
  <div class="lg:w-3/5 lg:pl-4">
    <div class="block lg:hidden">
      <Search />
    </div>
    <MobileMenu {MENU} />
    <div class="lg:border-l lg:border-r lg:border-divider">
      <slot />
    </div>
  </div>
  <div
    class:extended-sticky={$displayBanner}
    class="lg:w-1/5 flex-col top-24 self-start sticky gap-4 pl-8 hidden lg:flex max-w-none flex-auto min-w-0"
  >
    <div class="lg:mb-4">
      <EditInGitpod isIndex={docsMeta.isIndex} />
    </div>
    <OnThisPageNav />
  </div>
</div>
