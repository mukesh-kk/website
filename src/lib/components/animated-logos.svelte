<script lang="ts">
  import { logosAnimated } from "$lib/contents/home";
  import { onMount } from "svelte";

  let sequence = [];

  for (let i = 0; i < logosAnimated.length; i += 3) {
    sequence.push(i);
  }

  onMount(() => {
    const logosWrappers = Array.from(
      document.querySelectorAll(".logos-wrapper")
    );

    const sleep = (ms: number) => new Promise((res) => setTimeout(res, ms));

    logosWrappers.forEach(async (logoWrapper, i) => {
      const logos = Array.from(logoWrapper.children);
      await sleep(2000 * i);

      setInterval(() => {
        let temp = logos[0];
        logos[0] = logos[1];
        logos[1] = logos[2];
        logos[2] = temp;

        logos[0].classList.add("hide", "to-top");
        logos[1].classList.remove("hide", "to-top", "to-bottom");
        logos[2].classList.add("hide", "to-bottom");
      }, 8000);
    });
  });
</script>

<style lang="postcss">
  .logos-wrapper {
    @apply relative;

    :global(svg) {
      @apply absolute top-0 w-full h-full;
      transition: all 2.4s cubic-bezier(0.25, 1, 0.5, 1);
    }

    :global(.hide) {
      @apply opacity-0;
    }

    :global(.to-top) {
      transform: scale(0.5) translateY(-100px);
    }

    :global(.to-bottom) {
      transform: scale(0.5) translateY(100px);
    }
  }
</style>

<section class="mt-small md:mt-x-large">
  <h2 class="h5 text-center">Unleashing developer teams at</h2>
  <div class="flex justify-center gap-xx-small sm:gap-20 mt-large sm:mt-20">
    {#each sequence as i}
      <div class="logos-wrapper h-5 w-24 sm:h-8 sm:w-32">
        <svelte:component this={logosAnimated[i].logo} class="hide to-top" />
        {#if logosAnimated[i + 1] !== undefined}
          <svelte:component this={logosAnimated[i + 1].logo} />
        {/if}
        {#if logosAnimated[i + 2] !== undefined}
          <svelte:component
            this={logosAnimated[i + 2].logo}
            class="hide to-bottom"
          />
        {/if}
      </div>
    {/each}
  </div>
</section>
