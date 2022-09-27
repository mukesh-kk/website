<script>
  import { jetbrains_quotes } from "$lib/contents/blog";
  import Carousel from "../carousel.svelte";
</script>

<section class="mt-large">
  <Carousel class="mb-small pr-44">
    {#each jetbrains_quotes as { text, author, jobTitle, companyLogo }}
      <div
        class="text-black text-base p-x-small overflow-hidden rounded-2xl shadow-md bg-white dark:bg-card hover:shadow-xl transition-shadow duration-300 ease-in-out mb-micro snap-start w-80 md:w-[500px] flex-shrink-0"
      >
        <p class="mb-small">{text}</p>
        <div>
          <span class="font-semibold">{author}</span>
          <br />
          <span>{jobTitle}</span>
        </div>
        {#if companyLogo.src}
          <img
            src={companyLogo.src}
            alt={companyLogo.alt}
            class="h-6 max-w-[200px] mt-micro"
          />
        {:else}
          <svelte:component
            this={companyLogo}
            class="h-6 max-w-[200px] mt-micro"
          />
        {/if}
      </div>
    {/each}
  </Carousel>
</section>
