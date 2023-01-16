<script context="module">
  export const prerender = true;
</script>

<script>
  import CalloutSecondary from "$lib/components/callout-secondary.svelte";
  import FeatureBox from "$lib/components/feature-box.svelte";
  import Header from "$lib/components/header.svelte";
  import OpenGraph from "$lib/components/open-graph.svelte";
  import Section from "$lib/components/section.svelte";
  import FeatureTable from "$lib/components/ui-library/feature-table/feature-table.svelte";
  import {
    automationFirstFeature,
    codespacesComparison,
  } from "$lib/contents/codespaces";
  import FeatureBoxes from "$lib/components/vs/feature-boxes.svelte";
  import Combined from "$lib/components/vs/combined.svelte";
  import VerticalFeature from "$lib/components/vertical-feature.svelte";
  import { carbonNeutralFeature } from "$lib/contents/home/features";
  import SectionCommon from "$lib/components/section-common.svelte";
  import { featureCards } from "$lib/contents/enterprise";
  import CardSmall from "$lib/components/card/card-small.svelte";
  import Pill from "$lib/components/pill.svelte";
  import opensourceSvelte from "$lib/components/svgs/opensource.svelte";
</script>

<OpenGraph
  data={{
    description:
      "Why choose Gitpod over GitHub Codespaces? Gitpod is the faster, more resource-efficient, open-source alternative that integrates with your individual stack.",
    title: "Gitpod vs GitHub Codespaces - what makes Gitpod different?",
    keywords: "Codespaces, alternative, differences",
  }}
/>

<Header
  title="Gitpod vs GitHub Codespaces"
  text="Gitpod is the faster, more resource-efficient, open-source platform that
  integrates with your individual stack."
  tight={true}
/>

<FeatureBoxes>
  <FeatureBox
    feature={{
      title: "Open Source",
      paragraph:
        "Gitpod puts developers first and seemlessly integrates with your existing tools & workflows.",
      featureList: [
        "Contribute to Gitpod and build your own integrations and customizations",
        '<p>Check Gitpod\'s <a href="https://github.com/gitpod-io/gitpod">open code base</a> and join our vibrant <a href="https://www.gitpod.io/community">developer community</a></p>',
        "Work just as smoothly with GitHub, GitLab and Bitbucket",
      ],
      previewComponent: opensourceSvelte,
    }}
  />
  <FeatureBox
    feature={{
      title: "Flexible Deployment",
      paragraph:
        "Gitpod is available as multi-tenant or single-tenant solution. For maximum flexibility and minimal setup time, use Gitpod in our secure cloud. Alternatively, get a dedicated, private instance of Gitpod managed by us. <a href='/pricing' target='_blank'>Compare Options</a>",
      image: {
        src: "/images/github-codespaces/gitpod-dedicated.webp",
        darkSrc: "/images/github-codespaces/gitpod-dedicated.webp",
        alt: "Gitpod Dedicated",
        classNames: "rounded-5xl w-80 h-auto",
      },
    }}
  />
  <FeatureBox
    feature={{
      title: "Resource Efficient",
      paragraph:
        "Instead of running on expensive VMs, Gitpod provisions secure containers and achieves best-in-class resource-efficiency with scalable workspaces running on shared high-powered cloud servers. <a href='https://www.researchgate.net/publication/333096446_Reduced_carbon_emission_and_optimized_power_consumption_technique_using_container_over_virtual_machine' target='_blank'>Helping our planet</a> 🌱.",
      image: {
        src: "/images/github-codespaces/VMs.webp",
        darkSrc: "/images/github-codespaces/VMs.webp",
        alt: "GitHub Codespaces using Virtual Machines",
        classNames: "rounded-5xl w-80 h-auto",
      },
    }}
  />
</FeatureBoxes>

<Section>
  <h2 class="text-center mb-x-small md:mb-small">Compare features</h2>
  <FeatureTable tableData={codespacesComparison} />
</Section>

<CalloutSecondary
  title="Ready to feel the difference?"
  text="Spin up an example workspace now, just link your git provider"
/>

<Combined>
  {#each [automationFirstFeature, carbonNeutralFeature] as verticalFeatureData}
    <VerticalFeature {verticalFeatureData} fullWidth={true} headingLevel="h2" />
  {/each}
</Combined>

<!-- svelte-ignore missing-declaration -->
<SectionCommon title="Your cloud or our cloud">
  <div
    class="flex flex-wrap justify-center mt-small max-w-5xl mx-auto"
    slot="content"
  >
    {#each featureCards as card}
      <CardSmall class="m-macro px-xx-small relative" card={card.card}>
        {#if card.pill}
          <Pill
            class="absolute right-x-small -top-2"
            variant={card.pill.variant}
            text={card.pill.text}
          />
        {/if}
      </CardSmall>
    {/each}
  </div>
</SectionCommon>
