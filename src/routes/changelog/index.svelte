<script lang="ts" context="module">
  export const prerender = true;
  export async function load({ session }) {
    const changelogEntries = session.changelogEntries;
    return { props: { changelogEntries } };
  }
</script>

<script lang="ts">
  import type { ChangelogEntry as ChangelogEntryType } from "$lib/types/changelog-entry";

  import OpenGraph from "$lib/components/open-graph.svelte";
  import "$lib/assets/markdown-commons.scss";
  import TwitterFollowButton from "$lib/components/t-button.svelte";
  import { formatDate, stringToBeautifiedFragment } from "$lib/utils/helpers";
  import ChangelogDate from "$lib/components/changelog/changelog-date.svelte";
  import ChangelogLink from "$lib/components/changelog/changelog-link.svelte";
  import Wrapper from "$lib/components/changelog/wrapper.svelte";
  import Header from "$lib/components/header.svelte";
  import LinkButton from "$lib/components/ui-library/link-button";
  import ButtonsWrapper from "$lib/components/buttons-wrapper.svelte";

  export let changelogEntries: ChangelogEntryType[];
</script>

<OpenGraph
  data={{
    description:
      "A sum-up of Gitpod’s latest product improvements, feature releases and community contributions.",
    title: "Gitpod Changelog - Latest releases and product updates",
    type: "website",
    keywords:
      "updates, product, changes, features, releases, bugs, fixes, version, updates, improvements",
    // Update this each monthly release and enter the changelog URL into https://cards-dev.twitter.com/validator to force twitter to refresh it
    image: "images/changelog/2022-09-30-og.png",
    imageTwitter: "images/changelog/2022-09-30-og.png",
  }}
/>

<div class="flex">
  <div class="hidden w-4/12 flex-shrink-0 md:block" />
  <Header
    centered={false}
    title="Changelog"
    text="A sum-up of Gitpod’s latest product improvements, feature releases<br class='hidden xl:block'> and community contributions."
    class="w-full"
    textAlign="left"
  >
    <ButtonsWrapper slot="content" class="pt-x-small">
      <TwitterFollowButton variant="primary" />
      <LinkButton
        target="_blank"
        data-analytics={`{"context":"dashboard"}`}
        href="https://gitpod.io/notifications"
        variant="secondary"
        size="medium">Signup for the Newsletter</LinkButton
      >
    </ButtonsWrapper>
  </Header>
</div>

<div
  class="flex flex-col space-y-x-large md:space-y-xxx-large divide-y divide-divider"
>
  {#each changelogEntries as { date, title, content, image, alt }, i}
    <div
      class="changelog-entry flex flex-col md:flex-row last:pb-x-large md:last:pb-xxx-large {i !==
        0 &&
        i !== changelogEntries.length &&
        'pt-x-large md:pt-xxx-large'}"
    >
      <ChangelogDate
        date={formatDate(date)}
        href={`/changelog/${stringToBeautifiedFragment(title)}`}
      />
      <Wrapper class="content-changelog w-full md:w-8/12">
        <img
          src="/images/changelog/{image}"
          class="rounded-3xl"
          width="800"
          height="435"
          loading={i === 0 ? "eager" : "lazy"}
          decoding="async"
          {alt}
        />
        <h2>
          <ChangelogLink
            href={`/changelog/${stringToBeautifiedFragment(title)}`}
          >
            {title}
          </ChangelogLink>
        </h2>
        {@html content}
      </Wrapper>
    </div>
  {/each}
</div>
