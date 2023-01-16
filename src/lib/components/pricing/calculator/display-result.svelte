<script lang="ts">
  import LinkButton from "$lib/components/ui-library/link-button/link-button.svelte";
  import { isEurope } from "$lib/utils/helpers";
  import TickList from "$lib/components/tick-list.svelte";
  export let members: number;
  export let workspaceHours: number;
  export let largeWorkspaces: number;
  export let standardWorkspaces: number;

  const largeWorkspacePrice = 0.72;
  const standardWorkspacePrice = 0.36;

  $: monthlyHours = workspaceHours * 4.3;

  $: calculatedPrice =
    standardWorkspacePrice *
      (standardWorkspaces / 100) *
      members *
      monthlyHours +
    largeWorkspacePrice * (largeWorkspaces / 100) * members * monthlyHours;

  $: usedCredits =
    10 * monthlyHours * (standardWorkspaces / 100) +
    20 * monthlyHours * (largeWorkspaces / 100);

  $: displayValue = getResult(members, usedCredits, calculatedPrice);

  const getResult = (
    members: number,
    usedCredits: number,
    calculatedPrice: number
  ) => {
    switch (members) {
      case 1:
        if (usedCredits <= 500) {
          return 0;
        }
        if (usedCredits <= 1000) {
          return 9;
        } else {
          return 9 + (usedCredits - 1000) * 0.036;
        }

      default:
        return calculatedPrice;
    }
  };
</script>

<div class="flex flex-col">
  <p class="font-bold text-body">For all members per month</p>
  <p class="text-grey">(excl. VAT)</p>
  <p class="h2 mt-micro font-bold text-important">
    {members >= 100
      ? "custom"
      : `${isEurope() ? "€" : "$"}${displayValue
          .toFixed(0)
          .toString()
          .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`}
  </p>
  <div>
    {#if members >= 100}
      <p>
        For large teams of 100+, please contact sales to receive a custom quote.
      </p>
      <br />
      <LinkButton
        variant="primary"
        size="large"
        href="/contact/sales?subject=enterprise"
      >
        Talk to Sales
      </LinkButton>
    {:else if members === 1}
      <div class="mb-xx-small">
        {#if displayValue < 9}
          <TickList
            textClassNames="max-w-sm"
            list={["Includes 500 free credits per month for personal usage"]}
          />
        {:else}
          <TickList
            textClassNames="max-w-sm"
            list={[
              "Fixed price includes 1,000 credits for up to 100 hours per month",
              "Once 1,000 credits are used up, continue with pay-as-you-go",
            ]}
          />
        {/if}
      </div>
      <LinkButton size="large" variant="primary" href="https://gitpod.io/login"
        >Start for free</LinkButton
      >
    {:else}
      <div class="mb-xx-small">
        <TickList
          textClassNames="max-w-sm"
          list={[
            "Pay for total team usage, not individual plans",
            "Manage billing from a central account",
          ]}
        />
      </div>
      <LinkButton
        href="https://gitpod.io/teams/new"
        variant="primary"
        size="large">Create team for free</LinkButton
      >
    {/if}
  </div>
</div>
