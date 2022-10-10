<script lang="ts">
  import type { Quote } from "$lib/types/quote";
  import Card from "$lib/components/ui-library/card";
  export let quotes: Quote[];
  let selectedQuote: Quote = quotes[0];
  import LinkButton from "$lib/components/ui-library/link-button";
  import { onMount } from "svelte";
  import { fade, scale } from "svelte/transition";

  let clazz = "";
  export { clazz as class };

  let isHovered = false;
  let interval: any;

  const buttonImageClassNames =
    "h-7 w-20 sm:h-9 sm:w-28 transition group-hover:opacity-100 group-focus:opacity-100 group-focus:filter-none group-hover:filter-none";

  const swiper = () => {
    if (isHovered) return;
    let currentIndex = quotes.findIndex(
      (quote) => quote.text === selectedQuote.text
    );
    if (currentIndex === quotes.length - 1) {
      currentIndex = 0;
      selectedQuote = quotes[0];
    } else {
      selectedQuote = quotes[currentIndex + 1];
    }
  };

  onMount(() => {
    interval = setInterval(swiper, 10000);

    return () => {
      clearInterval(interval);
    };
  });
</script>

<Card
  size="medium"
  class="shadow-normal quotes pt-micro px-0 sm:px-xx-small sm:pt-x-small sm:pb-micro md:pb-medium lg:px-small mx-auto {clazz}"
>
  <div class="max-w-4xl mx-auto">
    <div class="flex justify-around flex-wrap max-w-3xl mx-auto">
      {#each quotes as quote}
        <button
          class="flex justify-center py-3 group mx-xx-small sm:mx-micro transition-all duration-200"
          class:opacity-60={selectedQuote !== quote}
          class:grayscale={selectedQuote !== quote}
          on:mouseenter={(e) => {
            const target = e.target;
            // @ts-ignore
            Array.from(target.parentElement.children).map((button) =>
              // @ts-ignore
              button.classList.add("opacity-60", "grayscale")
            );
            // @ts-ignore
            e.target.classList.remove("opacity-60", "grayscale");
            isHovered = true;
          }}
          on:mouseleave={() => (isHovered = false)}
          on:click={() => (selectedQuote = quote)}
        >
          {#if quote.companyLogo.src}
            <img
              src={quote.companyLogo.src}
              alt={quote.companyLogo.alt}
              class={buttonImageClassNames}
            />
          {:else}
            <svelte:component
              this={quote.companyLogo}
              inActive={selectedQuote !== quote}
              {...quote.companyLogoProps}
              class={buttonImageClassNames}
            />
          {/if}
        </button>
      {/each}
    </div>
    {#key selectedQuote}
      <div
        class="items-start justify-center mt-macro md:mt-small text-center md:text-left flex-wrap md:flex h-auto"
      >
        <div class="w-full md:w-1/2">
          <img
            src={selectedQuote.img.src}
            alt={selectedQuote.img.alt}
            class:square={selectedQuote.img.square}
            class="w-full sm:rounded-3xl mx-auto {selectedQuote.img.square
              ? 'max-w-[50%] md:max-w-[65%] rounded-3xl'
              : ''}"
            in:scale={{ duration: 2500, start: 0.97, delay: 100 }}
          />
        </div>
        <div
          class="text flex w-full md:w-1/2 justify-center flex-col flex-1 px-xx-small py-xx-small md:py-0 sm:pl-x-small lg:pl-small lg:pr-0"
          in:fade={{ delay: 100 }}
        >
          <p class="text-large">
            &ldquo;{selectedQuote.text}&rdquo;
          </p>

          <p class="font-bold mt-xx-small">
            {selectedQuote.author}, {selectedQuote.jobTitle}
          </p>

          {#if selectedQuote.link}
            <div class="mt-xx-small">
              <LinkButton
                href={selectedQuote.link.href}
                variant="tertiary"
                size="medium">{selectedQuote.link.text}</LinkButton
              >
            </div>
          {/if}
        </div>
      </div>
    {/key}
  </div>
</Card>
