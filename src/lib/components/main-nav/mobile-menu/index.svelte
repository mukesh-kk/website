<script lang="ts">
  import { onMount } from "svelte";
  import { navigating } from "$app/stores";
  import { showHideOverflowY } from "$lib/utils/helpers";

  import LoginButton from "../login-button.svelte";
  import NavItem from "../nav-item.svelte";
  import DashboardButton from "../dashboard-button.svelte";
  import menuState from "./state";
  import DemoButton from "../demo-button.svelte";
  import MobileDropdown from "./mobile-dropdown.svelte";

  export let isLoggedIn: boolean;

  onMount(() => {
    const handleTabletChange = (e: any) => {
      if (e.matches) {
        $menuState = false;
        showHideOverflowY(false);
      }
    };

    let query = window.matchMedia("(min-width: 1190px)");
    query.addEventListener("change", handleTabletChange);
  });

  const toggle = () => {
    $menuState = !$menuState;
    showHideOverflowY(false);
  };

  $: if ($navigating) {
    $menuState = false;
    showHideOverflowY(false);
  }
</script>

<style lang="postcss">
  .nav-items > :global(*:not(:last-child)) {
    @apply py-macro border-b border-divider;
  }

  .nav-items > :global(a) {
    &:hover,
    &:focus {
      @apply bg-sand-light;
    }
  }

  :global(body.dark) .nav-items > :global(a) {
    &:hover,
    &:focus {
      @apply bg-light-black;
    }
  }

  /* Always make sure to keep the media query intact with one specified above in the matchMedia call. */
  @media (min-width: 1190px) {
    .nav-items {
      @apply hidden;
    }
  }

  @media (max-height: 525px) {
    .nav-items {
      @apply pb-20;
    }
  }
</style>

{#if $menuState}
  <div
    class="nav-items absolute flex flex-col py-x-small px-micro md:px-x-small w-screen bg-card z-10 shadow-md max-h-screen overflow-y-auto"
  >
    <NavItem
      navItem={{
        href: "/docs",
        label: "Docs",
      }}
    />
    <NavItem
      navItem={{
        href: "/cde",
        label: "CDE",
      }}
    />
    <MobileDropdown />
    <NavItem
      navItem={{
        href: "/for/enterprise",
        label: "Enterprise",
      }}
    />
    <NavItem
      navItem={{
        href: "/customers",
        label: "Customers",
        highlight: true,
      }}
    />
    <NavItem
      navItem={{
        href: "/pricing",
        label: "Pricing",
      }}
    />
    <div class="flex flex-col items-center pt-x-small space-y-micro">
      {#if isLoggedIn}
        <DashboardButton />
      {:else}
        <DemoButton
          class="text-lg h-8 w-28 button flex-shrink-0"
          on:click={toggle}
        />
        <LoginButton />
      {/if}
    </div>
  </div>
{/if}
