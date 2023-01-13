<script lang="ts">
  import { links, templates } from "$lib/contents/dropdown";
  import { onMount } from "svelte";

  import { fade } from "svelte/transition";
  import Arrow from "../svgs/arrow.svelte";
  import FullArrowRight from "../svgs/full-arrow-right.svelte";
  import displayBanner from "$lib/stores/display-banner";

  let shown: boolean = false;
  let buttonEl: HTMLButtonElement;
  let wrapperEl: HTMLDivElement;
  let linksGrid: HTMLDivElement;

  const handleClickOutside = (e: Event) => {
    const target = e.target;

    if (target !== buttonEl && target !== wrapperEl && target !== linksGrid) {
      shown = false;
    }
  };

  onMount(() => {
    window.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  });
</script>

<style lang="postcss">
  a.card {
    &:hover,
    &:focus {
      @apply border-divider text-body bg-sand-light;
    }
  }

  :global(body.dark) a.card {
    &:hover,
    &:focus {
      @apply bg-card;
    }
  }

  button {
    @apply relative;

    &::after {
      content: "";
      @apply absolute w-full h-full;
    }
  }

  .extended {
    @apply top-[125px];
  }
</style>

<button
  on:click={() => (shown = !shown)}
  class="flex items-center text-base transition-all duration-200 hover:text-important focus:text-important"
  bind:this={buttonEl}
  aria-expanded={shown}
  aria-haspopup="menu"
>
  Resources
  <Arrow
    class="ml-1.5 h-3 w-3 transform {shown ? 'rotate-180' : ''}"
    fillClass={shown ? "fill-important" : "fill-body"}
  />
</button>

{#if shown}
  <div
    class:extended={$displayBanner}
    class="fixed top-20 left-0 w-screen flex justify-center bg-bg border-divider !m-0 shadow-md"
    in:fade={{ duration: 300 }}
    bind:this={wrapperEl}
  >
    <div
      class="grid grid-cols-2 gap-x-small pt-xx-small pb-xx-small"
      bind:this={linksGrid}
    >
      {#each links as { href, text, description }}
        <a
          class="
            card
            py-micro
            pl-xx-small
            pr-medium
            text-p-small
            rounded-lg
            border
            border-transparent
		      "
          aria-selected={false}
          on:click={() => (shown = false)}
          {href}
        >
          <p class="text-important font-bold mb-1">{text}</p>
          <p>{description}</p>
        </a>
      {/each}
    </div>
    <div class="border-l border-divider">
      <div class="text-important font-bold gap-x-small pt-xx-small ml-14">
        Templates
      </div>
      <div class="list-none">
        {#each templates as { href, text }}
          <a class="!important" {href}>
            <p class="mb-1 ml-14 my-2 card">
              {text}
            </p>
          </a>
        {/each}
      </div>
      <a
        class="flex ml-14 text-xs my-2 !important"
        href="/docs/introduction/getting-started/quickstart"
      >
        <FullArrowRight width="12" heightt="12" />
        <p>View all</p>
      </a>
    </div>
  </div>
{/if}
