<script lang="ts">
  import LinkButton from "../ui-library/link-button/link-button.svelte";
</script>

<section class="w-full mt-medium lg:mt-xx-large flex flex-col items-center">
  <header
    class="mb-small  flex flex-col items-center w-full max-w-6xl text-center"
  >
    <h1 class="h1 max-w-3xl">
      Help us remove all friction from the developer experience.
    </h1>
    <LinkButton href="#open-positions" variant="primary" size="large"
      >Explore open positions</LinkButton
    >
  </header>
  <div class="max-w-4xl">
    <img
      class="rounded-2xl h-auto"
      src="/images/blog/gitpod-jetbrains/teaser.jpg"
      alt="screen with gitpod logo standing on desk"
    />
  </div>
</section>
