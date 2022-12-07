<script lang="ts">
  import { onMount } from "svelte";
  import { slide } from "svelte/transition";
  import displayBanner from "../../stores/display-banner";

  let clazz = "";
  export { clazz as class };
  export let storageKey: string;
  export let display: boolean = false;
  export let location: "top" | "bottom" | "custom";

  let showBanner = false;

  const closeBanner = () => {
    showBanner = false;
    window.localStorage.setItem(storageKey, "true");
    if (clazz.includes("announcement-banner")) {
      displayBanner.set(false);
      document.body.classList.remove("banner-is-shown");
      document.documentElement.classList.remove("display-banner");
    }
  };

  onMount(() => {
    showBanner = !window.localStorage.getItem(storageKey);
    if (clazz.includes("announcement-banner")) {
      displayBanner.set(showBanner && display);
    }
    if (clazz.includes("announcement-banner")) {
      if (display && showBanner) {
        document.documentElement.classList.add("display-banner");
        document.body.classList.add("banner-is-shown");
      } else if (!display || !showBanner) {
        showBanner = false;
        if (clazz === "announcement-banner") {
          document.body.classList.remove("banner-is-shown");
          document.documentElement.classList.remove("display-banner");
        }
      }
    }

    if (storageKey === "cookie-consent-bar" && showBanner) {
      document.body.classList.add("consent-is-shown");
    } else {
      document.body.classList.remove("consent-is-shown");
    }
  });
</script>

<style lang="postcss">
  :global(.banner-is-shown) :global(main > div:first-child) {
    @apply mt-small;
  }

  :global(.display-banner) {
    scroll-padding-top: 8rem;
  }

  .top {
    @apply top-0;
  }

  .bottom {
    @apply bottom-0 fixed z-30;
  }
</style>

{#if showBanner}
  <div
    transition:slide
    class:top={location === "top"}
    class:bottom={location === "bottom"}
    class={clazz}
  >
    <slot {closeBanner} />
  </div>
{/if}
