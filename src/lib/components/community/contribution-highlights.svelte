<script lang="ts">
  import ContributionCard from "./contribution-card.svelte";
  import Section from "$lib/components/section.svelte";
  import {
    contributionHighlights,
    contributionMonths,
  } from "$lib/contents/community/index";

  // last item of contributionsMonth
  let selectedMonth = contributionMonths[contributionMonths.length - 1];
  $: highlights = contributionHighlights.filter(
    (highlight) => highlight.date === selectedMonth
  );

  let element: HTMLElement;

  const clickHandler = (month: string) => {
    selectedMonth = month;

    //check if element is in view
    const rect = element.getBoundingClientRect();

    if (rect.top < 0 || rect.bottom > window.innerHeight) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
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
    {#each highlights as highlight}
      <li>
        <ContributionCard contentCard={highlight} />
      </li>
    {/each}
  </ul>
  <ul class="flex mt-x-small lg:mt-small flex-wrap justify-center gap-micro">
    {#each contributionMonths as month}
      <button
        class:font-bold={selectedMonth === month}
        class:text-important={selectedMonth === month}
        on:click={() => clickHandler(month)}
        class="underline hover:text-important hover:decoration-transparent"
        >{month}</button
      >
    {/each}
  </ul>
</Section>
