<script lang="ts" context="module">
  const url = "/api/layout";
  export const load: Load = async ({ fetch }) => {
    const res = await fetch(url, {
      headers: { "content-type": "application/json" },
    });
    if (res.ok) {
      const data = await res.clone().json();
      return {
        props: {
          bannerData: data.banner,
          stars: data.stars,
        },
      };
    }
    return {
      status: res.status,
      error: new Error(`Could not load ${url}`),
    };
  };
</script>

<script lang="ts">
  import type { Load } from "@sveltejs/kit";
  import { page } from "$app/stores";
  import { onMount, setContext } from "svelte";
  import Segment from "$lib/components/segment.svelte";
  import LayoutMain from "$lib/components/layout-main.svelte";
  import LayoutRoot from "$lib/components/layout-root.svelte";
  import Nav from "$lib/components/main-nav/index.svelte";
  import Footer from "$lib/components/footer/index.svelte";
  import CookieConsent from "$lib/components/banners/cookie-consent.svelte";
  import { key } from "$lib/components/banners/announcement.svelte";
  import type { BannerData } from "$lib/types/banner.type";
  import { isEurope, removeTrailingSlash } from "$lib/utils/helpers";
  import Cookies from "js-cookie";
  import { cookies } from "$lib/constants";
  import ContactWidget from "$lib/components/contact-widget.svelte";
  import { key as starsKey } from "$lib/components/main-nav/github-stars.svelte";

  export let bannerData: BannerData;

  export let stars: number;

  setContext(starsKey, stars);
  setContext(key, bannerData);

  onMount(() => {
    Cookies.set(cookies.NECESSARY, "true", { expires: 365 });

    if (Cookies.get(cookies.ANALYTICAL) !== "false" && !isEurope()) {
      Cookies.set(cookies.ANALYTICAL, "true", { expires: 365 });
    }

    if (Cookies.get(cookies.ANALYTICAL) === "true") {
      Cookies.set(cookies.VISITED, "true", { expires: 365 });
    }
  });

  $: if ($page.url.pathname) {
    // Workaround until https://github.com/sveltejs/kit/issues/2664 is fixed
    if (typeof window !== "undefined" && window.location.hash) {
      const deepLinkedElement = document.getElementById(
        window.location.hash.substring(1)
      );
      if (deepLinkedElement) {
        deepLinkedElement.scrollIntoView();
      }
    }
  }
</script>

<style>
  :global(#svelte-announcer) {
    @apply sr-only;
  }

  :global(html) {
    scroll-padding-top: 6rem;
  }
</style>

<svelte:head
  ><link
    rel="canonical"
    href={removeTrailingSlash(`https://www.gitpod.io${$page.url.pathname}`)}
  /></svelte:head
>

<LayoutRoot>
  <Nav />
  <ContactWidget />
  <LayoutMain>
    <slot />
  </LayoutMain>
  <Footer />
</LayoutRoot>
<CookieConsent />
<Segment />
