<script lang="ts">
  import {
    compatibilityMatrix,
    filterMatrixByRelevance,
  } from "$lib/contents/docs/compatibility-matrix";
  import type { Matrix } from "$lib/types/matrix";
  import GreyDash from "../svgs/grey-dash.svelte";
  import RedCross from "../svgs/red-cross.svelte";
  import GreenTick from "../svgs/green-tick.svelte";
  import Tooltip from "../tooltip.svelte";
  import Select from "../ui-library/select/select.svelte";
  import { fade } from "svelte/transition";
  import { afterNavigate } from "$app/navigation";

  let matrixToRender: Matrix[] = compatibilityMatrix;
  let selectValue = "All";

  const handleChange = (e: Event) => {
    const relevance = (e.target as any).value.toLowerCase();
    matrixToRender = filterMatrixByRelevance(relevance);
  };

  afterNavigate(() => {
    if (window.location.search.includes("user")) {
      selectValue = "Users";
      matrixToRender = filterMatrixByRelevance("users");
    } else if (window.location.search.includes("admin")) {
      selectValue = "Self-Hosted Admins";
      matrixToRender = filterMatrixByRelevance("self-hosted admins");
    }
  });
</script>

<style lang="postcss">
  .wrapper {
    --col-1: 143px;
    --col-2: 178px;
    --col-3: 100px;
    --col-4: 173px;
    --col-5: 196px;

    @media (max-width: 767px) {
      --col-1: 133px;
      --col-2: 133px;
      --col-3: 85px;
      --col-4: 173px;
      --col-5: 156px;
    }
  }

  .wrapper > * {
    min-width: calc(
      var(--col-1) + var(--col-2) + var(--col-3) + var(--col-4) + var(--col-5)
    );
  }

  header {
    & > * {
      @apply px-3 md:px-xx-small py-2 md:py-3;

      &:nth-child(1) {
        flex: 0 0 var(--col-1);
        @apply border-r border-divider;
      }

      &:nth-child(2) {
        flex: 0 0 var(--col-2);
      }

      &:nth-child(3) {
        flex: 0 0 var(--col-3);
      }

      &:nth-child(4) {
        flex: 0 0 var(--col-4);
      }

      &:nth-child(5) {
        flex: 0 0 var(--col-5);
      }
    }
  }

  .body {
    & > * {
      &:first-child {
        flex: 0 0 var(--col-1);
        tranfrom: scale(10);
      }

      &:last-child {
        flex: 1;
      }
    }
  }

  .row {
    & > * {
      @apply flex items-center;
      &:nth-child(1) {
        flex: 0 0 var(--col-2);
      }

      &:nth-child(2) {
        flex: 0 0 var(--col-3);
      }

      &:nth-child(3) {
        flex: 0 0 var(--col-4);
      }

      &:nth-child(4) {
        flex: 0 0 var(--col-5);
      }
    }
  }

  .bg {
    @apply bg-card;
  }

  .bg:nth-of-type(even),
  header {
    @apply bg-sand-dark;
  }

  :global(body.dark) {
    .bg:nth-of-type(even),
    header {
      background: rgba(0, 0, 0, 0.4);
    }
  }

  .relevant > :global(*) {
    &:first-child {
      flex: 0 0 100px;

      @media (max-width: 767px) {
        flex: 0 0 90px;
      }
    }

    &:last-child {
      background-size: 0.8em auto, 100%;
    }
  }

  .status {
    p {
      @apply flex items-center my-0 text-xs;
    }
  }
</style>

<div
  class="flex flex-wrap gap-xx-small justify-center xl:justify-between mt-x-small mb-micro md:mb-3"
>
  <div class="relevant flex items-center justify-between w-100">
    <Select
      label="Relevant for"
      value={selectValue}
      name="for"
      options={["All", "Users", "Self-Hosted Admins"]}
      class="flex"
      labelClassNames="font-bold text-important text-medium mr-micro mb-0"
      style="padding: 4px 40px 4px var(--micro)"
      on:change={handleChange}
    />
  </div>

  <div class="flex flex-wrap justify-center status gap-3 sm:gap-micro">
    <p>
      <GreenTick class="mr-1 sm:mr-3 h-6 w-6" />
      supported
    </p>
    <p>
      <GreyDash title="untested" class="mr-1 sm:mr-3 h-6 w-6" />
      untested
    </p>
    <p>
      <RedCross class="mr-1 sm:mr-3 h-6 w-6" />
      not supported
    </p>
  </div>
</div>

<div
  class="wrapper relative bg text-small divide-y divide-divider bg-card rounded-t-2xl overflow-x-auto"
>
  <header class="flex font-bold rounded-t-2xl">
    <div>Category</div>
    <div>Component</div>
    <div class="text-center md:text-left">Status</div>
    <div>Support Policy</div>
    <div>Supported Versions</div>
  </header>
  {#key matrixToRender}
    {#each matrixToRender as { name, components }, i}
      <div class="body flex bg" in:fade={{ delay: i * 20 }}>
        <div
          class="pl-3 md:pl-xx-small flex items-center border-r border-divider"
        >
          {@html name}
        </div>
        <div class="flex flex-col justify-center divide-y divide-divider">
          {#each components as { name, availibility, limitations, policy, supportedVersions }}
            <div class="flex row py-macro md:py-micro">
              <div class="pl-3 md:pl-xx-small">{@html name}</div>
              <div class="justify-center">
                {#if availibility === "supported"}
                  <GreenTick />
                {:else if availibility === "not-supported"}
                  <RedCross />
                {:else}
                  <GreyDash title="untested" />
                {/if}
                {#if limitations}
                  <Tooltip title={limitations} />
                {/if}
              </div>
              <div class="px-3 md:px-xx-small">
                {@html policy.text}
                {#if policy.description}
                  <Tooltip title={policy.description} />
                {/if}
              </div>
              <div class="px-3 md:px-xx-small">
                {@html supportedVersions}
              </div>
            </div>
          {/each}
        </div>
      </div>
    {/each}
  {/key}
</div>
