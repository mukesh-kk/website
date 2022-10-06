<script lang="ts">
  import { page } from "$app/stores";
  import { goto } from "$app/navigation";
  import Toggle from "../toggle.svelte";
  import PricingBoxes from "./pricing-boxes.svelte";
  import type { Pricing } from "$lib/types/pricing";
  import Header from "../header.svelte";

  export let pricingPlans: Pricing[];

  let toggled: boolean = false;

  const handleChange = (e: Event) => {
    const slug = $page.url.pathname.split("/")[1];
    toggled = (<HTMLInputElement>e.target).checked;
    setTimeout(() => {
      if (slug === "pricing") {
        if (toggled) {
          goto("/self-hosted");
        } else {
          goto("/pricing");
        }
      } else {
        if (toggled) {
          goto("/pricing");
        } else {
          goto("/self-hosted");
        }
      }
    }, 400);
  };
</script>

<Header title="Plans and pricing" fullWidth={true}>
  <div slot="content" class="mt-small">
    <Toggle
      id="pricing"
      class="mb-xx-small"
      labelLeft="SaaS"
      labelRight="Self-Hosted"
      on:change={handleChange}
      isInversed={$page.url.pathname.includes("self-hosted")}
      checked={toggled}
    />
    <PricingBoxes {pricingPlans} />
    <p class="mt-micro text-center">
      Can’t find the answer here? Please <a href="/contact/sales"
        >contact sales</a
      >.
    </p>
  </div>
</Header>
