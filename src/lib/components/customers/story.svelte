<script lang="ts">
  import BannerBg from "../banner-bg.svelte";

  import Section from "../section.svelte";
  export let bannerImg: string;
  export let text: string;
</script>

<style lang="postcss">
  :global(nav.toc) {
    @apply hidden;
  }

  :global(blockquote) {
    @apply bg-transparent border-l-4 border-primary pl-xx-small py-0 sm:m-small rounded-none !important;
  }

  :global(blockquote) :global(p) {
    @apply text-h6 text-important font-semibold !important;
  }

  :global(code) {
    @apply bg-tertiary rounded-xl px-macro py-1;
  }
</style>

<Section>
  <div class="text-center max-w-3xl mx-auto">
    <h2 class="h2">Full customer story</h2>
    <p>{text}</p>
  </div>

  <div class="prose max-w-3xl mx-auto mt-x-large">
    <BannerBg {bannerImg} />
    <slot />
  </div>
</Section>
