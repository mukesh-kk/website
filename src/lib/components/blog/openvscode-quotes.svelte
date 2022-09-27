<script>
  import { quotes } from "$lib/contents/blog";
  import Carousel from "../carousel.svelte";
</script>

<section class="mt-large">
  <Carousel class="mb-small pr-44">
    {#each quotes as { text, author, jobTitle, companyLogo }}
      <div
        class="text-important text-base p-x-small overflow-hidden rounded-2xl shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out mb-micro flex-shrink-0 w-80 md:w-[500px]"
        style="scroll-snap-align: start;"
      >
        <p class="mb-small">{text}</p>
        <div>
          <span class="font-semibold">{author}</span>
          <br />
          <span>{jobTitle}</span>
        </div>
        <img
          src={companyLogo.src}
          alt={companyLogo.alt}
          class="h-6 mt-micro !rounded-none max-w-[200px]"
        />
      </div>
    {/each}
  </Carousel>
</section>
