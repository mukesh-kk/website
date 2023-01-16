<script lang="ts">
  import { faqsKey } from "./faqs.svelte";
  import { getContext, onMount } from "svelte";
  import { stringToBeautifiedFragment } from "$lib/utils/helpers";
  import Arrow from "../svgs/arrow.svelte";

  export let title: string;
  let details: HTMLElement;
  let summary: HTMLElement;
  let content: HTMLElement;
  let animation: any;
  let isClosing: boolean = false;
  let isExpanding: boolean = false;

  $: isActive = $activeFaq === title;

  const setActive = ({ target }) => {
    const open = target.open;
    if (open) {
      $activeFaq = title;
    }
    // closing the faq that was active, no faq will remain open
    if (isActive && !open) {
      shrink();
    }
  };

  const onAnimationFinish = (open: boolean) => {
    isActive = open;
    animation = null;
    isClosing = false;
    isExpanding = false;
    details.style.height = details.style.overflow = "";
  };

  const expand = () => {
    isExpanding = true;

    const startHeight = `${details.offsetHeight}px`;
    const endHeight = `${summary.offsetHeight + content.offsetHeight}px`;

    if (animation) {
      animation.cancel();
    }

    animation = details.animate(
      {
        height: [startHeight, endHeight],
      },
      {
        duration: 300,
        easing: "cubic-bezier(0, 0.55, 0.45, 1)",
      }
    );

    animation.onfinish = () => onAnimationFinish(true);
    animation.oncancel = () => (isExpanding = false);
  };

  const open = () => {
    details.style.height = `${details.offsetHeight}px`;
    content.style.opacity = "1";
    isActive = true;

    window.requestAnimationFrame(() => expand());
  };

  const shrink = () => {
    isClosing = true;
    const startHeight = `${details.offsetHeight}px`;
    const endHeight = `${summary.offsetHeight}px`;
    content.style.opacity = "0";

    if (animation) {
      animation.cancel();
    }

    animation = details.animate(
      {
        height: [startHeight, endHeight],
      },
      {
        duration: 300,
        easing: "cubic-bezier(0, 0.55, 0.45, 1)",
      }
    );

    animation.onfinish = () => onAnimationFinish(false);
    animation.oncancel = () => (isClosing = false);
  };

  const handleClick = (e: Event) => {
    e.preventDefault();
    details.style.overflow = "hidden";

    if (isClosing || !isActive) {
      open();
    } else if (isExpanding || isActive) {
      shrink();
    }
  };

  const activeFaq: any = getContext(faqsKey);
  const fragment = stringToBeautifiedFragment(title);

  onMount(() => {
    isActive = fragment === window.location.hash.substring(1);
    content.style.opacity = "0";
    content.style.transition = "all 500ms cubic-bezier(0.16, 1, 0.3, 1)";
  });
</script>

<style lang="postcss">
  details:global(a) {
    @apply font-semibold;
  }

  .h4 {
    @apply mb-0;
  }

  .faq__text {
    @apply pt-0;
  }

  .faq__text :global(p) + :global(p) {
    @apply mt-x-small;
  }

  @media (max-width: 375px) {
    .faq__text {
      @apply -translate-y-0.5;
    }
  }

  summary::-webkit-details-marker {
    @apply hidden;
  }
</style>

<details
  class="faq group bg-sand-dark dark:bg-card border border-solid border-transparent focus:border-white dark:hover:border-black dark:focus:border-black hover:border-white rounded-2xl"
  open={isActive}
  on:toggle={setActive}
  id={fragment}
  data-analytics={`{"context":"faq"}`}
  bind:this={details}
>
  <summary
    class="outline-none list-none"
    bind:this={summary}
    on:click={handleClick}
  >
    <div class="faq__top flex items-center p-x-small lgx:p-medium">
      <h3 class="h4 faq__title flex-1 inline-block w-5/6">{title}</h3>
      <Arrow
        width="24"
        height="24"
        class="group-open:rotate-180 ml-macro h-6 w-6 outline-none transition-all duration-200"
      />
    </div>
  </summary>
  <div
    class="faq__text text-large p-x-small lgx:p-medium -translate-y-2 sm:-translate-y-4 lg:-translate-y-8"
    bind:this={content}
  >
    <slot />
  </div>
</details>
