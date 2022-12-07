<script lang="ts">
  export let img: string;
  export let alt: string;
  export let text: string;
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
  class="testimonial stroked py-x-small px-xx-small stroked-light max-w-sm p-xx-small overflow-hidden rounded-2xl flex flex-col justify-between bg-white dark:bg-card transition-shadow duration-300 ease-in-out text-body"
>
  <div class="flex">
    <div
      class="bg-wrapper p-0.5 h-[55px] w-[55px] flex justify-center items-center rounded-full"
    >
      <img
        src={img}
        {alt}
        width="50"
        height="50"
        class="rounded-full bg-card aspect-square object-cover"
      />
    </div>
    <div class="ml-3">
      <p class="mb-0 text-p-medium leading-6">
        {text}
      </p>
    </div>
  </div>
</div>
