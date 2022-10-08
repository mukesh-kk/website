<script lang="ts" context="module">
  import { formatDate, stringToBeautifiedFragment } from "$lib/utils/helpers";
  import type { ChangelogEntry as ChangelogEntryType } from "$lib/types/changelog-entry";
  import BackLink from "$lib/components/changelog/back-link.svelte";

  export const prerender = true;

  const reverseHtmlEscaping = (slug: string) => slug.replace(/&amp;/g, "&");

  export async function load({ params, session }) {
    const changelogEntry: ChangelogEntryType = session.changelogEntries.find(
      (entry: ChangelogEntryType) =>
        stringToBeautifiedFragment(entry.title) ===
        reverseHtmlEscaping(params.slug)
    );
    return { props: { changelogEntry } };
  }
</script>

<script lang="ts">
  import Wrapper from "$lib/components/changelog/wrapper.svelte";
  import OpenGraph from "$lib/components/open-graph.svelte";
  import "$lib/assets/markdown-commons.scss";
  export let changelogEntry: ChangelogEntryType;
  const { date, title, excerpt, content, image, alt, ogImage } = changelogEntry;
</script>

<style lang="postcss">
  .entry :global(img) {
    @apply rounded-tl-lg rounded-tr-lg sm:rounded-tl-2xl sm:rounded-tr-2xl;
  }
</style>

<OpenGraph
  data={{
    description: excerpt,
    title,
    type: "article",
    image: `images/changelog/${ogImage ? ogImage : image}`,
    imageTwitter: `images/changelog/${ogImage ? ogImage : image}`,
    norobots: true,
  }}
/>

<Wrapper class="pt-small pb-x-large md:pb-xx-large">
  <div class="entry max-w-[800px] mx-auto flex flex-col md:flex-row">
    <div class="content-changelog">
      <BackLink />
      <img
        src="/images/changelog/{image}"
        class="rounded-xl sm:rounded-3xl"
        {alt}
      />
      <div class="mt-xx-small">
        <p>{formatDate(date)}</p>
        <h2 class="!text-h3">
          {title}
        </h2>
        {@html content}
      </div>
    </div>
  </div>
</Wrapper>
