<script lang="ts">
  import displayBanner from "../stores/display-banner";
</script>

<style lang="postcss">
  main {
    @media (min-width: 1190px) {
      @apply pt-20;
    }
    max-width: 87.5rem;
  }

  .extended {
    @media (min-width: 1190px) {
      @apply pt-20;
    }

    @media (max-width: 1189px) {
      @apply pt-[106px];
    }
  }
</style>

<main
  class:extended={$displayBanner}
  class="pt-14  w-full lg:w-11/12 mx-auto py-macro px-micro md:px-x-small lg:px-0"
  id="main-content"
>
  <slot />
</main>
