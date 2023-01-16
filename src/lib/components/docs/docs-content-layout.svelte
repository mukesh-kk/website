<script>
  /**
   * Typescript is not supported in mdsvex layout files.
   * @see https://github.com/pngwn/MDsveX/issues/116
   */
  import OpenGraph from "../open-graph.svelte";
  import FeedbackWidget from "./feedback-widget.svelte";
  import docsCurrentSectionStore from "$lib/stores/docs-current-section";
  import docsCurrentSubSectionStore from "$lib/stores/docs-current-subsection";
  import PrevNext from "./prev-next.svelte";

  /** @type {string} */
  export let section;
  /** @type {string} */
  export let title;

  /** @type {string}*/
  export let subsection;

  $: $docsCurrentSectionStore = section;
  $: $docsCurrentSubSectionStore = subsection;
</script>

<svelte:head>
  <link rel="stylesheet" href="/prism-solarized-light.min.css" />
</svelte:head>

<OpenGraph
  data={{
    description: "Explore the documentation to learn more about Gitpod",
    title: title ? title : "Gitpod Documentation",
  }}
/>
<div class="flex">
  <div
    class="content-docs prose prose-h1:text-[32px] !prose-pre:rounded-xl md:px-4 max-w-none flex-auto min-w-0 xl:w-2/3"
  >
    <slot />
  </div>
</div>
<FeedbackWidget type="docs" class="my-huge" />
<PrevNext />
