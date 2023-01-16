<script context="module">
  export const prerender = true;
</script>

<script>
  import {
    programBenefits,
    cards,
    exploreContents,
    features,
  } from "$lib/contents/opensource";

  import SectionFeatures from "$lib/components/section-features.svelte";
  import ProgramBenefits from "$lib/components/program-benefits.svelte";
  import Eligibility from "$lib/components/eligibility.svelte";
  import Faqs from "$lib/components/opensource/faqs.svelte";
  import OpenGraph from "$lib/components/open-graph.svelte";
  import SectionCommon from "$lib/components/section-common.svelte";
  import Explore from "$lib/components/explore.svelte";
  import ActionsSpeakLouderThanWords from "$lib/components/opensource/towards-a-maintainer-economy.svelte";
  import CardSmall from "$lib/components/card/card-small.svelte";
  import Header from "$lib/components/header.svelte";
  import Quotes from "$lib/components/quotes.svelte";
  import LinkButton from "$lib/components/ui-library/link-button";
  import { quotes } from "$lib/contents/opensource";
</script>

<OpenGraph
  data={{
    description:
      "Spend less time reviewing pull-requests, on-boarding contributors and more time on building great things. Upgrade your account to our complimentary Open Source plan.",
    title: "Gitpod for Open Source",
  }}
/>

<Header
  title="Gitpod for Open Source"
  text="Spend less time reviewing pull-requests, on-boarding contributors and more time on building great things. <strong>Upgrade your account to our complimentary Open Source plan.</strong>"
  textClassNames="text-large max-w-4xl mx-auto"
  fullWidth={true}
>
  <div slot="content">
    <LinkButton
      variant="primary"
      size="large"
      href="https://docs.google.com/forms/d/1TE0YGgnUpHxQIH-2Sibn4LldB2ZLlhc_nQo90bJya3w/viewform?edit_requested=true"
      class="mt-x-small mb-medium">Apply now</LinkButton
    >
    <Quotes {quotes} />
  </div>
</Header>

<SectionFeatures
  title="Be always ready-to-code"
  text="Spin up fresh cloud development environments for each task, in the cloud, in
  seconds."
  {features}
/>

<ProgramBenefits cards={programBenefits} />

<Eligibility
  text="To qualify for Gitpod’s Opensource program, need to meet one of these criteria: (If it is approved, we will send you an email)"
  list={[
    "You are a maintainer, core contributor to a well-established free software or open-source project.",
    "You regularly contribute to free software or open source communities in other ways (e.g. producing regular content like blog posts, videos, live streams, translations, or organizing meet-ups, conferences, hackathons, etc).",
    "You are an author, core contributor of extensions for editors such as VSCode, VIM, Emacs, et al. or of developer tools such as build systems, programming languages, compilers, and editor tooling such as Language Server Protocol (LSP) implementations.",
    "A significant part of your income (employment or via community support) is from maintaining or producing open source work.",
  ]}
  link={{
    href: "https://docs.google.com/forms/d/1TE0YGgnUpHxQIH-2Sibn4LldB2ZLlhc_nQo90bJya3w/viewform?edit_requested=true",
    text: "Apply now",
  }}
  ulMaxWidth="638px"
/>

<Faqs />

<SectionCommon
  title="Open source is in our&nbsp;DNA"
  text="Gitpod is open-source and so are all the tools we develop and contribute to."
>
  <div
    class="flex flex-wrap justify-center mt-small max-w-5xl mx-auto"
    slot="content"
  >
    {#each cards as card}
      <CardSmall class="m-macro px-xx-small" {card} />
    {/each}
  </div>
</SectionCommon>

<ActionsSpeakLouderThanWords />

<Explore contents={exploreContents} />
