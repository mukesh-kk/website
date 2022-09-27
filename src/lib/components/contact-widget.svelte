<script lang="ts">
  import Chat from "./svgs/icons/chat.svelte";
  import File from "./svgs/icons/file.svelte";
  import Headphones from "./svgs/icons/headphones.svelte";
  import Play from "./svgs/icons/play.svelte";
  import LinkButton from "./ui-library/link-button/link-button.svelte";
  import { fade } from "svelte/transition";
  import { onMount } from "svelte";
  import Close from "./svgs/icons/close.svelte";

  let areButtonsShown: boolean = false;
  let isToggleShown: boolean = false;
  let linksWrapper: HTMLElement;
  let iconWrapper: HTMLElement;
  let isButtonActive: boolean = false;

  const buttons: {
    text: string;
    href: string;
    icon: {
      component: any;
      size?: any;
    };
  }[] = [
    {
      text: "Schedule a demo",
      href: "/contact/get-demo",
      icon: {
        component: Play,
        size: "h-[12.94px] w-[10.78px]",
      },
    },
    {
      text: "Contact Sales",
      href: "/contact/sales",
      icon: {
        component: Headphones,
        size: "h-[14.38px] w-[20.48px]",
      },
    },
    {
      text: "Get support",
      href: "/contact/support",
      icon: {
        component: Chat,
        size: "h-[13.33px] w-[16.74px]",
      },
    },
    {
      text: "View documentation",
      href: "/docs",
      icon: {
        component: File,
        size: "h-[17.28px] w-[14.78px]",
      },
    },
  ];

  const handleClickOutside = (e: Event) => {
    if (e.target !== linksWrapper && e.target !== iconWrapper) {
      areButtonsShown = false;
    }
  };

  onMount(() => {
    window.addEventListener("click", handleClickOutside);
    const query = window.matchMedia("(max-width: 900px)");

    if (query.matches) {
      setTimeout(() => {
        isToggleShown = true;
      }, 5000);
    } else {
      setTimeout(() => {
        isToggleShown = true;

        setTimeout(() => {
          areButtonsShown = true;
        }, 500);
      }, 5000);
    }

    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  });
</script>

<style lang="postcss">
  :global(body.consent-is-shown) .parent {
    @apply bottom-[105px] md:bottom-2;
  }

  .icon-wrapper {
    &::before {
      content: "";
      @apply absolute rounded-full top-0 right-0 bottom-0 left-0 z-50;
    }
  }

  button.stroked {
    &:hover,
    &:focus {
      &::after {
        @apply bg-white;
      }
    }
  }

  :global(body.dark) button.stroked {
    &:hover,
    &:focus {
      &::after {
        @apply bg-black;
      }
    }
  }
</style>

<div
  class="fixed bottom-2 right-2 sm:right-4 flex flex-col items-end z-50 parent"
  data-analytics={`{"context":"contact_widget"}`}
>
  {#if areButtonsShown}
    <div
      in:fade={{ duration: 400 }}
      out:fade={{ duration: 100 }}
      bind:this={linksWrapper}
      class="stroked stroked-sand flex flex-col rounded-2xl mb-3 p-micro pt-x-small shadow-light
      "
    >
      <div
        data-analytics={`{"label":"Close Contact Widget"}`}
        class="absolute -top-2 -right-2"
      >
        <button
          on:click={() => (areButtonsShown = false)}
          aria-label="Close the menu"
          class="h-12 w-12 flex items-center justify-center rounded-full"
          on:mouseenter={() => {
            isButtonActive = true;
          }}
          on:mouseleave={() => {
            isButtonActive = false;
          }}
          on:focus={() => {
            isButtonActive = true;
          }}
          on:blur={() => {
            isButtonActive = false;
          }}
        >
          <Close class="h-2.5 w-2.5" active={isButtonActive} />
        </button>
      </div>
      <div class="before" />
      <div class="space-y-macro max-w-[195px]">
        {#each buttons as { href, text, icon }}
          <LinkButton
            {href}
            variant="white"
            textAlign="left"
            class="inline-flex items-center group"
            style="padding: 0.25rem var(--micro)"
          >
            <div
              slot="image"
              class="flex items-center justify-center h-6 w-6 mr-2"
            >
              <svelte:component
                this={icon.component}
                class="{icon.size} filter grayscale group-hover:grayscale-0 transition-all duration-200"
              />
            </div>
            {text}
          </LinkButton>
        {/each}
      </div>
    </div>
  {/if}

  {#if isToggleShown}
    <div data-analytics={`{"label":"Hide/Show Contact Widget"}`}>
      <button
        in:fade={{ duration: 200 }}
        class="stroked flex group justify-center items-center bg-card h-12 w-12 rounded-full shadow-normal"
        on:click={() => {
          areButtonsShown = !areButtonsShown;
        }}
      >
        <div class="icon-wrapper" bind:this={iconWrapper}>
          <svelte:component
            this={Chat}
            class="h-6 w-6 transition-all duration-200"
            id="toggle-button"
          />
        </div>
      </button>
    </div>
  {/if}
</div>
