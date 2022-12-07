<script lang="ts">
  import Section from "$lib/components/section.svelte";
  import QuoteNoPersonalInfo from "../quote-no-personal-info.svelte";
  import { Quotes } from "$lib/contents/cde-manifesto";
</script>

<Section class="flex flex-col items-center justify-center w-full">
  <div class="mb-small md:mb-medium">
    <h2 class="text-center h2 mb-macro md:!mb-micro">
      Why does it have to be this way?
    </h2>
    <p class="text-large text-center mx-auto">
      Local development environments are history-dependent, static, and cobbled
      together.
    </p>
  </div>
  <ul class="flex justify-center flex-wrap gap-micro">
    {#each Quotes as { alt, img, text }}
      <li>
        <QuoteNoPersonalInfo {alt} {img} {text} />
      </li>
    {/each}
  </ul>
</Section>
