<script lang="ts">
  import Section from "../section.svelte";
  import Testimonial from "./testimonial.svelte";
  import type { Testimonial as TestimonialType } from "$lib/types/testimonial";
  import Carousel, { getItemId } from "$lib/components/index/carousel.svelte";
  import { scrollIntoView } from "$lib/utils/helpers";

  export let testimonials: TestimonialType[];
  export let title: string = "";
  export let text: string = "";

  let currentID: number = 0;

  const sequence: number[] = [];

  for (let i = 0; i < testimonials.length; i += 3) {
    sequence.push(i);
  }

  $: activeSequenceNumber = sequence.reduce((prev, curr) => {
    return Math.abs(curr - currentID) < Math.abs(prev - currentID)
      ? curr
      : prev;
  });

  let clazz = "";
  export { clazz as class };
</script>

<Section class={clazz} {...$$restProps}>
  <div class="row">
    <div class="text-center">
      {#if title}
        <h2>{title}</h2>
      {/if}
      {#if text}
        <p class="text-large mt-xx-small mb-medium">
          {text}
        </p>
      {/if}
    </div>

    <Carousel bind:currentID>
      {#each testimonials as testimonial, index}
        <Testimonial id={getItemId(index)} {testimonial} />
      {/each}
    </Carousel>
    <div class="flex mt-micro justify-center space-x-micro">
      {#each sequence as number}
        <button
          on:click={() => {
            activeSequenceNumber = number;
            scrollIntoView(`#${getItemId(number)}`);
          }}
          title="Carousel item"
          class="inline-block h-[15px] w-[15px] {number === activeSequenceNumber
            ? 'bg-light-grey dark:bg-body'
            : 'bg-divider dark:bg-light-black'}  rounded-full transition-all duration-200"
        />
      {/each}
    </div>
  </div>
</Section>
