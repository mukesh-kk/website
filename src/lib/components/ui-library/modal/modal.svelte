<script lang="ts">
  import { showHideOverflowY } from "$lib/components/ui-library/utils/show-hide-overflow-y";

  import { createEventDispatcher, onMount } from "svelte";
  import { focusTrap } from "svelte-focus-trap";
  let backdrop: HTMLElement;
  export let buttonClassNames: string = "right-6 top-6";

  export let isOpen: boolean = false;

  $: {
    if (typeof document !== "undefined") {
      if (isOpen) {
        showHideOverflowY(true);
      } else {
        showHideOverflowY(false);
      }
    }
  }

  const dispatch = createEventDispatcher();

  let closeEl: HTMLButtonElement;
  let focusedEl: HTMLElement;

  $: if (isOpen) {
    if (typeof document !== "undefined")
      focusedEl = <HTMLElement>document.activeElement;
    closeEl && closeEl.focus();
  }

  const closeModal = () => {
    dispatch("close");
    focusedEl && focusedEl.focus();
    focusedEl = null;
  };

  const handleKeydown = (event: KeyboardEvent) => {
    if (event.key === "Escape") {
      closeModal();
    }
  };

  const handleBackDropClick = (e: Event) => {
    if (e.target === backdrop) {
      closeModal();
    }
  };

  onMount(() => {
    window.addEventListener("click", handleBackDropClick);

    return () => {
      window.removeEventListener("click", handleBackDropClick);
    };
  });
</script>

<svelte:window on:keydown={handleKeydown} />

{#if isOpen}
  <div
    class="modal bg-[rgb(0,0,0)]/70 fixed top-0 left-0 w-full h-screen flex justify-center items-center z-[100000]"
    use:focusTrap
    bind:this={backdrop}
  >
    <div class="flex justify-center items-center relative">
      <button
        class="absolute z-10 h-10 w-10 md:h-5 md:w-5 flex items-center justify-center {buttonClassNames}"
        bind:this={closeEl}
        aria-label="close this popup"
        on:click={closeModal}
      >
        <svg
          width="12"
          height="12"
          viewBox="0 0 14 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Close</title>
          <path
            d="M13 1L1 13M1 1L13 13L1 1Z"
            stroke="var(--important)"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>
      <slot />
    </div>
  </div>
{/if}
