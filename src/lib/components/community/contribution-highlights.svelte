<script lang="ts">
  import { contributionHighlights } from "$lib/contents/community/index";
  import ContributionCard from "./contribution-card.svelte";
  import Section from "$lib/components/section.svelte";

  let months = Object.keys(contributionHighlights).reverse();
  let selectedMonth = months.at(-1);

  let element: HTMLElement;

  function select(month: string) {
    selectedMonth = month;

    // check if element is in view
    const rect = element.getBoundingClientRect();

    if (rect.top < 0 || rect.bottom > window.innerHeight) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }
</script>

<Section>
  <div bind:this={element} class="mb-small md:mb-medium">
    <h2 class="text-center h2 mb-macro md:!mb-micro">
      Contributions of the month
    </h2>

    <p class="text-large max-w-4xl text-center mx-auto">
      Thanks to our amazing community for helping us build Gitpod and spread the
      word around the globe. We are proud that you are here.
    </p>
  </div>

  <ul class="flex flex-wrap justify-center gap-micro">
    {#each contributionHighlights[selectedMonth] || [] as highlight}
      <li>
        <ContributionCard contentCard={highlight} />
      </li>
    {/each}
  </ul>

  <ul class="flex mt-x-small lg:mt-small flex-wrap justify-center gap-micro">
    {#each Object.keys(contributionHighlights).reverse() as month}
      <button
        class:font-bold={selectedMonth === month}
        class:text-important={selectedMonth === month}
        on:click={() => select(month)}
        class="underline hover:text-important hover:decoration-transparent"
      >
        {month}
      </button>
    {/each}
  </ul>
</Section>
