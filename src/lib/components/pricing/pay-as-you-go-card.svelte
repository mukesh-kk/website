<script lang="ts">
  import Card from "$lib/components/ui-library/card/card.svelte";
  import { isEurope } from "../../utils/helpers";

  let className: string = "";

  export { className as class };
</script>

<style lang="postcss">
  table {
    border-spacing: 0;
  }
</style>

<Card
  size="medium"
  class="flex max-w-7xl justify-between items-center mx-auto flex-wrap gap-y-x-small md:gap-medium shadow-normal p-x-small md:p-x-large {className}"
>
  <div class="max-w-md">
    <h2 class="h3 !mb-micro md:!mb-x-small">Flexible Pricing</h2>
    <p class="text-p-large">
      Gitpod usage is measured in credits. Larger workspace classes use credits
      at a faster rate.<br /><br /> 1 credit = {isEurope() ? "€" : "$"}0.036
    </p>
  </div>
  <div>
    <table class="rounded-2xl text-p-small border-separate overflow-hidden">
      <thead class="bg-sand-dark dark:bg-divider text-important">
        <th
          class="py-micro text-left px-xx-small border-r border-divider dark:border-grey"
          >Workspaces</th
        >
        <th class="py-micro text-left px-xx-small">Usage rate</th>
      </thead>
      <tr>
        <td
          class="py-micro px-xx-small border-r border-l border-b border-sand-dark dark:border-divider"
          ><p class="font-bold text-important">Standard</p>
          up to 4 cores, 8 GB RAM, 30GB storage</td
        >
        <td
          class="py-micro px-xx-small border-b border-r border-sand-dark dark:border-divider"
          ><p class="font-bold text-important">
            {isEurope() ? "€" : "$"}0.36/hour
          </p>
          (10 credits)</td
        >
      </tr>
      <tr>
        <td
          class="py-micro px-xx-small rounded-bl-2xl border-r border-l border-b dark:border-divider border-sand-dark"
          ><p class="font-bold text-important">Large</p>
          up to 8 cores, 16GB RAM, 50GB storage</td
        >
        <td
          class="py-micro px-xx-small border-r border-b rounded-br-2xl dark:border-divider border-sand-dark"
          ><p class="font-bold text-important">
            {isEurope() ? "€" : "$"}0.72/hour
          </p>
          (20 credits)</td
        >
      </tr>
    </table>
    <p class="text-fine-print mt-micro">
      Note: metered usage includes prebuilds. Storage metering will begin in
      2023.
    </p>
  </div>
</Card>
