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
