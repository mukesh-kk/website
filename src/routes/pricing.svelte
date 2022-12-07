<script context="module">
  export const prerender = true;
</script>

<script>
  import Explore from "$lib/components/explore.svelte";
  import Faqs from "$lib/components/pricing/faqs.svelte";
  import OpenGraph from "$lib/components/open-graph.svelte";
  import PlansAndPricing from "$lib/components/pricing/plans-and-pricing.svelte";
  import { pricingPlans, pricingTable } from "$lib/contents/pricing";
  import UsedBy from "$lib/components/index/used-by.svelte";
  import Empower from "$lib/components/pricing/empower.svelte";
  import FeatureTable from "$lib/components/ui-library/feature-table/feature-table.svelte";
  import SectionCommon from "$lib/components/section-common.svelte";
  import DedicatedInfo from "$lib/components/pricing/dedicated-info.svelte";
</script>

<OpenGraph
  data={{
    description:
      "Gitpod is always free for 50h/month. Upgrade to unlock more hours and features. SaaS and Self-Hosted. Contact Sales.",
    title: "Plans and Pricing - Gitpod",
    keywords: "Pricing Gitpod, costs, free, saas, fees, self-hosted",
  }}
/>
<PlansAndPricing {pricingPlans} />

<DedicatedInfo />
<UsedBy class="py-small" title="Used by 750k+ developers" />
<SectionCommon
  title="Compare features"
  text="Choose the plan that fits your needs. You can always start for free."
  textClassNames="mb-xx-small"
  isTitleADeepLink={true}
>
  <FeatureTable slot="content" tableData={pricingTable} />
</SectionCommon>
<Empower />
<Faqs />

<Explore />
