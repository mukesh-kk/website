<script lang="ts" context="module">
  export const getItemId = (index: number, name: string = "testimonial") =>
    `${name}-${index}`;
</script>

<script lang="ts">
  import { onMount } from "svelte";

  let clazz = "";
  let slider: HTMLElement;
  export let currentID: number = 0;
  let testimonialItems: HTMLElement[];
  let mouseDown = false;
  let startX = 0;
  let scrollLeft = 0;
  let grabbing = false;

  onMount(() => {
    testimonialItems = Array.from(
      slider.querySelectorAll("[id*='testimonial-']")
    );
  });

  const detectCurrentItem = () => {
    let currentItem: HTMLElement | Element;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            //check if entry is the last item
            if (index === entries.length - 1) {
              currentID = parseInt(entry.target.id.split("-")[1]);
            }
          }
        });
      },
      {
        root: slider,
        threshold: 0.5,
      }
    );
    testimonialItems.forEach((item) => observer.observe(item));
    const scrollX = slider.scrollLeft;
    currentItem = testimonialItems.reduce((prev, curr) => {
      return Math.abs(curr.offsetLeft - scrollX) <
        Math.abs(prev.offsetLeft - scrollX)
        ? curr
        : prev;
    });
    currentID = parseInt(currentItem.id.replace("testimonial-", ""));
  };

  const mouseDownHandler = (e: MouseEvent) => {
    mouseDown = true;
    grabbing = true;
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
  };

  const mouseUpHandler = () => {
    mouseDown = false;
    grabbing = false;
  };

  const mouseMoveHandler = (e: MouseEvent) => {
    if (!mouseDown) return;
    e.preventDefault();
    detectCurrentItem();
    const x = e.pageX - slider.offsetLeft;
    const walk = x - startX;
    slider.scrollLeft = scrollLeft - walk;
  };

  const scrollHandler = () => {
    detectCurrentItem();
  };

  export { clazz as class };
</script>

<style lang="postcss">
  div {
    scrollbar-width: none;
    -ms-overflow-style: none;
  }

  :global(body.dark) div {
    scrollbar-color: var(--divider) var(--card);
  }

  div::-webkit-scrollbar {
    display: none;
    -webkit-appearance: none;
  }

  div::-webkit-scrollbar:horizontal {
    height: 0.375rem;
  }

  div::-webkit-scrollbar-thumb {
    background-color: var(--divider);
    border-radius: 0.625rem;
    border: 2px solidvar(--white);
  }

  div::-webkit-scrollbar-track {
    border-radius: 0.625rem;
    background-color: var(--white);
  }
</style>

<div
  bind:this={slider}
  on:scroll={scrollHandler}
  on:mousemove={mouseMoveHandler}
  on:mouseleave={mouseUpHandler}
  on:mousedown={mouseDownHandler}
  on:mouseup={mouseUpHandler}
  class="{clazz} flex w-full {grabbing
    ? 'cursor-grabbing'
    : 'snap-x snap-mandatory'}  overflow-x-scroll gap-6"
  dir="ltr"
>
  <slot />
</div>
