<script lang="ts" context="module">
  export const prerender = true;
</script>

<script lang="ts">
  import CompanyBenefits from "$lib/components/customers/company-benefits.svelte";
  import Stories from "$lib/components/customers/stories.svelte";
  import Explore from "$lib/components/explore.svelte";
  import Hero from "$lib/components/hero.svelte";
  import Testimonials from "$lib/components/index/testimonials.svelte";
  import UsedBy from "$lib/components/index/used-by.svelte";
  import OpenGraph from "$lib/components/open-graph.svelte";
  import Quotes from "$lib/components/quotes.svelte";
  import SectionFeatures from "$lib/components/section-features.svelte";
  import Section from "$lib/components/section.svelte";
  import { developFeature, quotes, benefits } from "$lib/contents/customers";
  import { testimonials } from "$lib/contents/home/index";
  import { page } from "$app/stores";

  let customers = $page.stuff.customers;
</script>

<style lang="postcss">
  :global(.feature-box) :global(.preview) {
    @apply col-start-2 !important;
  }
</style>

<OpenGraph
  data={{
    title: "Customer stories - Gitpod",
    description:
      "Learn how other companies leverage Gitpod to improve their developer experience, remote collaboration and security.",
    keywords:
      "case study, customer story, experience, review, benefit, companies",
  }}
/>

<Hero
  title="You are in good company"
  text="Learn how other customers leverage Gitpod to improve their developer experience, remote collaboration and security."
  image={{
    src: "/images/customers/hero.png",
    alt: "Workspace setup",
    isCut: false,
  }}
  btnPrimary={{
    href: "#stories",
    text: "View stories",
  }}
  btnSecondary={{
    href: "/contact/sales?subject=enterprise",
    text: "Contact sales",
  }}
/>

<CompanyBenefits {benefits} class="lg:pt-16" />

<Section>
  <Quotes {quotes} />
</Section>

<SectionFeatures
  title="Accelerate your workflow"
  text="Spin up fresh, cloud development environments for each task, fully automated, in seconds."
  features={[{ ...developFeature, headingLevel: "h3" }]}
  type="box"
/>

<Stories
  title="Featured Customer Stories"
  text="Read how our customers improved their development workflows"
  id="stories"
  {customers}
  class="max-w-7xl lg:grid-cols-3 xl:px-4"
/>

<UsedBy
  isCard={false}
  class="py-small"
  title="Trusted by +750k developers"
  isCustomerStoriesLinkShown={false}
/>

<Testimonials {testimonials} style="margin-top: var(--small);" />

<Explore
  contents={{
    description:
      "Spin up fresh cloud development environments for each task, in the cloud, in seconds - no contracts or banking details&nbsp;required.",
    secondaryLink: {
      href: "https://www.notion.so/gitpod/Gitpod-Onboarding-Guides-Stages-1-3-d97968210ad2408789e968597fe4633c",
      text: "View onboarding guides",
    },
  }}
/>
