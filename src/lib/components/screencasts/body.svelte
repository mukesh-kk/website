<script lang="ts">
  import { stringToBeautifiedFragment } from "$lib/utils/helpers";

  import LinkButton from "../ui-library/link-button/link-button.svelte";
  import Duration from "./duration.svelte";
  import { screencasts } from "$lib/contents/screencasts";
  import type { Screencast } from "$lib/types/screencasts";
  import YoutubeEmbed from "../youtube-embed.svelte";
  import Header from "../header.svelte";
  import OpenGraph from "../open-graph.svelte";
  export let title: string = "";
  export let description: string = "";
  export let screencast: Screencast;
  export let hideDescription: boolean = false;
</script>

<OpenGraph
  data={{
    description: screencast.description,
    title: screencast.title,
  }}
/>

<Header
  title={title || screencast.title}
  text={description || screencast.description}
  tight={true}
  textClassNames="mb-small text-large max-w-4xl mx-auto"
  fullWidth={true}
>
  <div slot="content">
    <div class="max-w-full w-[990px] mx-auto">
      <YoutubeEmbed embedId={screencast.youtubeId} title={screencast.title} />
    </div>

    <div class="max-w-lg mx-auto mt-24 text-left">
      <Duration duration={screencast.duration} />
      {#if screencast.description && !hideDescription}
        <p class="h5 text-important font-bold font mt-macro mb-xx-small">
          {screencast.description}
        </p>
      {/if}
      <slot name="custom" />
      {#if screencast.relatedDocs}
        <p class="mt-xx-small mb-x-small">
          Related docs:
          {#each screencast.relatedDocs as relatedDoc, i}
            <a href={relatedDoc.path}>{relatedDoc.title}</a>
            {screencast.relatedDocs.length > 0 &&
            screencast.relatedDocs[i + 1] &&
            !screencast.relatedDocs[i + 2]
              ? " and "
              : screencast.relatedDocs.length > 0 &&
                screencast.relatedDocs[i + 1]
              ? ", "
              : ""}
          {/each}
        </p>
      {/if}
      {#if screencast.nextScreencast}
        <div class="text-center">
          <LinkButton
            variant="primary"
            size="large"
            href="/screencasts/{stringToBeautifiedFragment(
              screencasts[screencast.nextScreencast].title.slice(0, -3)
            )}"
          >
            View next screencast
          </LinkButton>
        </div>
      {/if}
    </div>
  </div>
</Header>
