<script lang="ts">
  import type { Testimonial } from "$lib/types/testimonial";
  export let testimonial: Testimonial;
  export let id: string = "";

  const { name, avatar, role, org, text, subtext } = testimonial;
  export let grayscale = true;
</script>

<style lang="scss">
  .testimonial {
    @media (max-width: 768px) {
      width: 320px;
    }
  }

  .testimonial :global(a) {
    color: var(--blue);
    font-weight: 600;
  }

  .testimonial :global(p) + :global(p) {
    margin-top: var(--macro);
  }

  .role :global(span) {
    font-weight: bold;
  }

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

<div {id} class="my-2 snap-start relative shrink-0 text-small">
  <div
    class="testimonial stroked stroked-light w-96 p-xx-small overflow-hidden rounded-2xl bg-white dark:bg-card transition-shadow duration-300 ease-in-out text-body"
  >
    {#if text}
      <div>{@html text}</div>
    {/if}
    <div class="mt-4 flex">
      <div
        class="bg-wrapper p-0.5 h-[55px] w-[55px] flex justify-center items-center rounded-full"
      >
        <img
          src={`/images/avatars/${avatar}`}
          alt={name}
          width="50"
          height="50"
          class="rounded-full {grayscale ? 'filter grayscale' : ''}"
        />
      </div>
      <div class="ml-3">
        <p class="mb-0 font-semibold text-small leading-6 text-important">
          {name}
        </p>
        <p class="role">{role} {@html org}</p>
      </div>
    </div>
    {#if subtext}
      <p class="mt-x-small">
        {subtext}
      </p>
    {/if}
  </div>
</div>
