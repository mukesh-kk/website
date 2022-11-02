<script lang="ts" context="module">
  export const prerender = true;

  export async function load({ session }) {
    const customers = session.educationCustomers;
    return { props: { customers } };
  }
</script>

<script lang="ts">
  import Stories from "$lib/components/education/stories.svelte";

  import Header from "$lib/components/education/header.svelte";
  import Integrate from "$lib/components/enterprise/integrate.svelte";
  import Explore from "$lib/components/explore.svelte";
  import Faqs from "$lib/components/faqs/faqs.svelte";
  import UsedBy from "$lib/components/index/used-by.svelte";
  import OpenGraph from "$lib/components/open-graph.svelte";
  import ProgramBenefits from "$lib/components/program-benefits.svelte";
  import SectionFeatures from "$lib/components/section-features.svelte";
  import {
    brands,
    educationFAQ,
    features,
    getStartedFeatures,
    programBenefits,
  } from "$lib/contents/education";
  import { integrateFeatures } from "$lib/contents/enterprise";

  export let customers: any;
</script>

<OpenGraph
  data={{
    title: "Gitpod for Education",
    description:
      "Spend less time on tedious configurations and more time actually teaching. Used by schools, universities, bootcamps and other educational institutions. ",
    keywords: "education, learning, teaching, schools, universities",
  }}
/>

<Header />

<SectionFeatures
  title="Be ready to teach immediately"
  text="Spin up fresh, automated dev environments for each learner, in the cloud, in seconds."
  {features}
/>

<Integrate features={integrateFeatures} />

<ProgramBenefits cards={programBenefits} />

<ProgramBenefits title="Get started with Gitpod" cards={getStartedFeatures} />

<UsedBy
  title="Used by leading educational institutions"
  {brands}
  isCustomerStoriesLinkShown={false}
  class="py-small"
/>

<Stories
  title="Featured Customer Stories"
  text="Read how our customers improved their development workflows"
  id="stories"
  {customers}
  class="max-w-7xl lg:grid-cols-3 xl:px-4 mb-xxx-large"
/>

<Faqs faq={educationFAQ} />

<Explore
  contents={{
    title: "Get Started",
    description: "Be ready to teach with Gitpod in minutes",
    secondaryLink: {
      href: "https://www.gitpod.io/chat",
      text: "Join Discord",
    },
  }}
>
  <ol slot="list" class="list-decimal list-inside mb-x-small">
    <li>Open your project in Gitpod for the first time</li>
    <li>Pre-install system tools with a Dockerfile.</li>
    <li>Run your code automatically with start tasks</li>
  </ol>
</Explore>
