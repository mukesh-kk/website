<script lang="ts">
  import Carousel from "../carousel.svelte";
  import Section from "../section.svelte";
  import Testimonial from "./testimonial.svelte";
  import type { Testimonial as TestimonialType } from "$lib/types/testimonial.type";

  export let testimonials: TestimonialType[];
  export let title: string = "";
  export let text: string = "";

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
    <Carousel>
      {#each testimonials as testimonial}
        <Testimonial {testimonial} />
      {/each}
    </Carousel>
  </div>
</Section>
