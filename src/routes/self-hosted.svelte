<script context="module">
  export const prerender = true;
</script>

<script>
  import Explore from "$lib/components/explore.svelte";
  import Faqs from "$lib/components/self-hosted/faqs.svelte";
  import OpenGraph from "$lib/components/open-graph.svelte";
  import PlansAndPricing from "$lib/components/pricing/plans-and-pricing.svelte";
  import { pricingPlans } from "$lib/contents/self-hosted";
  import ViewAllFeatures from "$lib/components/self-hosted/view-all-features.svelte";
  import Card from "$lib/components/ui-library/card/card.svelte";
  import LinkButton from "$lib/components/ui-library/link-button";
  import DedicatedInfo from "$lib/components/pricing/dedicated-info.svelte";
  import Section from "$lib/components/section.svelte";
</script>

<OpenGraph
  data={{
    description:
      "Deploy and operate Gitpod yourself. Install Gitpod Self-Hosted on GKE, EKS, AKS or Kubernetes. Made for teams. Free for up to 10 users.",
    title: "Gitpod Self-Hosted - Run Gitpod on your infrastructure",
    keywords:
      "self-hosted, self-managed, download, installation, infrastructure, kubernetes, deploy, teams",
  }}
/>
<PlansAndPricing {pricingPlans} />
<DedicatedInfo />
<Section>
  <Card
    size="medium"
    class="flex items-center max-w-2xl mx-auto p-x-small md:px-small md:py-medium gap-medium shadow-normal"
  >
    <img
      src="/images/support/monitor.png"
      alt="Monitor"
      class="w-40 dark:hidden"
    />
    <img
      src="/images/support/monitor-dark.png"
      alt="Monitor"
      class="w-40 hidden dark:block transform scale-110"
    />
    <div>
      <h2 class="h4">Get a demo</h2>
      <p class="mb-micro">
        And learn how your engineering organization can scale with Gitpod.
      </p>
      <LinkButton href="/contact/get-demo" variant="primary">
        Get a demo
      </LinkButton>
    </div>
  </Card>
</Section>
<ViewAllFeatures />
<Faqs />
<Explore
  contents={{
    title: "Install <div class='whitespace-nowrap inline'>Self-Hosted</div>",
    description: `
      Install Gitpod Self-Hosted on GKE, EKS, and AKS.
    `,
    link: {
      href: "/docs/configure/self-hosted/latest",
      text: "View installation guide",
    },
  }}
/>
