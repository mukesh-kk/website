<script>
  import Carousel from "../carousel.svelte";

  import { Voices } from "$lib/contents/blog/cde-quotes";
</script>

<style lang="scss">
  .bg-wrapper {
    background-image: linear-gradient(
      to right,
      var(--white),
      var(--brand-ripe)
    );
    flex: 0 0 55px;
  }

  :global(body.dark) .bg-wrapper {
    background-image: linear-gradient(
      to right,
      var(--black),
      var(--brand-ripe)
    );
  }
</style>

<section class="mt-large">
  <Carousel class="mb-small pr-44">
    {#each Voices as { img, text, avatar, role, org, name, alt }}
      <div
        class="text-black text-base p-x-small overflow-hidden rounded-2xl shadow-md bg-white dark:bg-card hover:shadow-xl transition-shadow duration-300 ease-in-out mb-micro snap-start w-80 md:w-[500px] flex-shrink-0"
      >
        <div>
          {#if img}
            <img src={img} {alt} class="rounded-2xl mb-xx-small" />
          {/if}
          <div>{@html text}</div>
        </div>
        <div class="mt-x-small flex">
          <div
            class="bg-wrapper p-0.5 h-[55px] w-[55px] flex justify-center items-center rounded-full"
          >
            <img
              src={`/images/avatars/${avatar}`}
              alt={name}
              width="50"
              height="50"
              class="!rounded-full"
            />
          </div>
          <div class="ml-3">
            <p class="!mb-0 font-semibold text-small leading-6 text-important">
              {name}
            </p>
            <div class="role !m-0">
              {role ? role : ""}
              {@html org ? org : ""}
            </div>
          </div>
        </div>
      </div>
    {/each}
  </Carousel>
</section>
