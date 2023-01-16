<script lang="ts">
  // @ts-nocheck
  import { createPopperActions } from "svelte-popperjs";

  const [popperRef, popperContent] = createPopperActions();

  const popperOptions = {
    placement: "top-start",
    modifiers: [
      {
        name: "offset",
        options: {
          offset: ({ placement }) => {
            if (placement === "top-start") return [-8, 8];
            return [8, 8];
          },
        },
      },
    ],
  } as any;

  let clazz = "";
  export { clazz as class };

  export let title: string = "";
  let isRendered: boolean = false;
</script>

<style lang="postcss">
  .tooltip {
    @apply w-auto text-card bg-dark-grey text-xs py-macro px-2.5 rounded-xl normal-case font-normal z-50;

    &::before {
      content: "";
      @apply absolute block h-10 left-0 w-full -z-10;
      bottom: -60%;
    }
  }

  :global(body.dark) {
    .tooltip {
      @apply text-important;

      :global(a) {
        @apply text-important;
      }
    }
  }

  .tooltip :global(a) {
    @apply text-card;
  }
  .arrow,
  .arrow::before {
    @apply absolute w-3 h-3 bg-inherit;
  }

  .arrow {
    @apply invisible;
  }

  .arrow::before {
    @apply visible;
    content: "";
    transform: rotate(45deg);
  }
</style>

<span
  on:mouseleave={() => {
    isRendered = false;
  }}
>
  <button
    on:mouseover={() => (isRendered = true)}
    on:focus={() => {
      isRendered = true;
    }}
    on:blur={() => {
      isRendered = false;
    }}
    class={clazz}
  >
    <slot />

    <svg
      width="20"
      height="20"
      use:popperRef
      viewBox="0 0 21 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.5 10.5C0.5 7.84784 1.55357 5.3043 3.42893 3.42893C5.3043 1.55357 7.84784 0.5 10.5 0.5C13.1522 0.5 15.6957 1.55357 17.5711 3.42893C19.4464 5.3043 20.5 7.84784 20.5 10.5C20.5 13.1522 19.4464 15.6957 17.5711 17.5711C15.6957 19.4464 13.1522 20.5 10.5 20.5C7.84784 20.5 5.3043 19.4464 3.42893 17.5711C1.55357 15.6957 0.5 13.1522 0.5 10.5V10.5Z"
        class="fill-sand-dark dark:fill-dark-grey"
      />
      <path
        d="M11.385 12.335C11.385 11.45 11.58 11.045 12.24 10.535L12.81 10.115C13.455 9.635 14.13 8.705 14.13 7.625C14.13 5.84 12.72 4.73 10.845 4.73C8.58 4.73 7.14 6.11 7.14 8.315H9.135C9.135 6.98 9.765 6.335 10.815 6.335C11.685 6.335 12.225 6.845 12.225 7.685C12.225 8.18 12 8.645 11.46 9.065L10.935 9.47C9.96 10.22 9.615 10.865 9.615 12.335H11.385V12.335ZM11.64 15.5V13.265H9.375V15.5H11.64V15.5Z"
        fill="var(--sub)"
        class="fill-sub dark:fill-body"
      />
    </svg>
  </button>

  {#if isRendered}
    <div
      class="tooltip max-w-[220px] text-important"
      use:popperContent={popperOptions}
    >
      {@html title}
      <div class="arrow -z-10" data-popper-arrow />
    </div>
  {/if}
</span>
