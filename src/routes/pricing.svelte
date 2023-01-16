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
  import PayAsYouGoCard from "$lib/components/pricing/pay-as-you-go-card.svelte";
  import Calculator from "$lib/components/pricing/calculator/index.svelte";
  import Section from "$lib/components/section.svelte";
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

<Section>
  <div class="mb-small md:mb-x-medium">
    <h2 id="cost-estimator" class="text-center h2 mb-macro md:!mb-micro">
      Pricing calculator
    </h2>
    <p class="text-large text-center mx-auto">
      Get a cost estimate for your individual or your team’s usage of Gitpod.
    </p>
    <p class="text-center mx-auto">
      <a href="/docs/configure/billing">Learn more</a> about billing and credits.
    </p>
  </div>
  <Calculator />
</Section>

<UsedBy title="Used by +750k developers" isCard={false} />
<SectionCommon
  titleClassNames="!mb-micro"
  title="Compare features"
  text="Start using Gitpod for free. Upgrade to flexible pricing and create a team in your dashboard any time."
  textClassNames="mb-micro md:mb-small"
  isTitleADeepLink={true}
>
  <div slot="content">
    <FeatureTable tableData={pricingTable} />

    <PayAsYouGoCard class="mt-small md:mt-xx-large" />
  </div>
</SectionCommon>
<Empower />
<Faqs />

<Explore />
