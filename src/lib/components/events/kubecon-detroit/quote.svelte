<script lang="ts">
  import type { Testimonial } from "$lib/types/testimonial";
  export let quote: Testimonial;

  const { name, avatar, role, org, text, alt, img } = quote;
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

<div
  class="testimonial stroked py-small px-xx-small stroked-light max-w-sm p-xx-small overflow-hidden rounded-2xl flex flex-col justify-between bg-white dark:bg-card transition-shadow duration-300 ease-in-out text-body"
>
  <div>
    {#if img}
      <img src={img} {alt} class="rounded-2xl mb-xx-small" />
    {/if}
    <div>{@html text}</div>
  </div>
  <div class="mt-4 flex">
    <div
      class="bg-wrapper p-0.5 h-[55px] w-[55px] flex justify-center items-center rounded-full"
    >
      <img
        src={`/images/avatars/${avatar}`}
        alt={name}
        width="50"
        height="50"
        class="rounded-full"
      />
    </div>
    <div class="ml-3">
      <p class="mb-0 font-semibold text-small leading-6 text-important">
        {name}
      </p>
      <p class="role">{role ? role : ""} @{@html org}</p>
    </div>
  </div>
</div>
