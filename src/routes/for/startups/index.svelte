<script context="module">
  export const prerender = true;
</script>

<script>
  import {
    exploreContents,
    features,
    programBenefits as cards,
  } from "$lib/contents/startups";
  import ProgramBenefits from "$lib/components/program-benefits.svelte";
  import Eligibility from "$lib/components/eligibility.svelte";
  import Faqs from "$lib/components/startups/faqs.svelte";
  import Explore from "$lib/components/explore.svelte";
  import OpenGraph from "$lib/components/open-graph.svelte";
  import SectionFeatures from "$lib/components/section-features.svelte";
  import SectionCommon from "$lib/components/section-common.svelte";
  import FeatureBox from "$lib/components/feature-box.svelte";
  import Header from "$lib/components/header.svelte";
  import LinkButton from "$lib/components/ui-library/link-button";
  import Quotes from "$lib/components/quotes.svelte";
  import { quotes } from "$lib/contents/customers";
</script>

<style lang="postcss">
  :global(.feature-box) :global(.preview) {
    @apply col-start-2 !important;
  }
</style>

<OpenGraph
  data={{
    title: "Gitpod for Startups",
    description:
      "Apply for our startup program and use Gitpod at a 50% discount for up to 2 years with unlimited users and usage. ",
    keywords: "startup, discount",
  }}
/>

<Header
  title="Gitpod for Startups"
  text="Spend less time worrying about brittle, local dev environments and more time
  on building great things."
  data-analytics={`{"position":"hero"}`}
  style="max-width: 1000px"
  textClassNames="text-large max-w-2xl mx-auto"
>
  <div slot="content">
    <p
      class="h5 text-important font-semibold max-w-2xl mx-auto mt-micro mb-x-small"
    >
      Use all our services at a 50% discount, for up to 2 years.
    </p>
    <LinkButton
      variant="primary"
      size="large"
      href="https://docs.google.com/forms/d/e/1FAIpQLSc-Vaelz0yG-XkuN2CYyUtZz0khhwMaju4oSLdMNIzoMkpHug/viewform"
      target="_blank">Apply now</LinkButton
    >
    <Quotes class="mt-small" {quotes} />
  </div>
</Header>

<SectionFeatures title="Accelerate your workflow" {features} />

<ProgramBenefits
  text="<a href='https://bit.ly/3liFICY' target='_blank'>Apply now</a> and receive these unique benefits."
  {cards}
/>

<Eligibility
  text="To qualify for Gitpod’s startup program, your company needs to:"
  list={[
    "have raised no more than $10M in funding",
    "be founded less than 3 years ago",
    "have not been on any paid plan yet",
  ]}
  link={{ href: "https://bit.ly/3liFICY", text: "Apply now" }}
  ulMaxWidth="365px"
/>

<SectionCommon
  title="Helpful resources"
  text="If you are still uncertain about moving your local dev environment to the
    cloud, this blog post will clear your thoughts."
  textClassNames="max-w-3xl mx-auto mb-small"
>
  <FeatureBox
    feature={{
      title: "Gitpod vs Local Development",
      paragraph:
        "Why should you move dev environment to the cloud? Here is the answer.",
      moreButton: {
        text: "View Gitpod vs Local Dev",
        href: "/vs/local-development",
      },
      image: {
        src: "/images/startups/bob-alice.png",
        alt: "Bob and Alice",
      },
    }}
    slot="content"
  />
</SectionCommon>

<Faqs />

<Explore contents={exploreContents} />
