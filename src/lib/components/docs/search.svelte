<script lang="ts" context="module">
  declare global {
    type docsearchParamType = {
      appId: string;
      apiKey: string;
      indexName: string;
      inputSelector: string;
      debug: boolean;
    };
    interface Window {
      docsearch: (param: docsearchParamType) => void;
    }
  }
</script>

<script lang="ts">
  import { onMount } from "svelte";
  import topicsState from "./states/topics-state";
  import { page } from "$app/stores";
  import MagGlass from "../svgs/mag-glass.svelte";
  import { isMac } from "$lib/utils/helpers";
  let clazz = "";
  export { clazz as class };
  export let containerClasses = "";
  export let iconClasses = "";
  export let placeholder = "Quick search";
  export let isBgWhite: boolean = false;

  const docSearchJSVersion = "2.6.3";
  export let docSearchInputSelector = "search-doc-input";

  let docSearchInput: HTMLInputElement;
  let docSearchScript: HTMLScriptElement;
  let docSearchScriptLoaded = false;
  let isSupportPage = $page.url.pathname.includes("support");

  $: if (docSearchInput && (docSearchScript || docSearchScriptLoaded)) {
    window.docsearch &&
      window.docsearch({
        appId: "QZ9BJ7JSAP",
        apiKey: "5de60226283bd5a67c57b3f711b62b2d",
        indexName: "gitpod",
        inputSelector: `#${docSearchInputSelector}`,
        // Set debug to true to inspect the dropdown
        debug: false,
      });
  }

  const processDocSearchScriptLoadEvent = () => {
    docSearchScriptLoaded = true;
  };

  const handleBodyKeyDown = (event: KeyboardEvent) => {
    if ((event.ctrlKey || event.metaKey) && event.key === "k") {
      event.preventDefault();
      docSearchInput.focus();
    }
  };

  onMount(() => {
    if (!navigator.userAgent.toLowerCase().match(/mobile/i)) {
      const platformKey = isMac() ? "⌘" : "Ctrl";
      placeholder += ` ${platformKey}+K`;
    }
  });
</script>

<style lang="postcss">
  .narrow-search {
    @apply lg:w-3/4;
  }

  .input-container:not(.topics-active) {
    @apply hidden lg:block;
  }

  :global(.algolia-autocomplete) {
    display: block !important; /* DocSearch adds inline styles, !important helps us take control */
  }

  :global(.algolia-autocomplete .ds-dropdown-menu [class^="ds-dataset-"]) {
    @apply rounded-xl !important;
  }
  :global(.algolia-autocomplete .ds-dropdown-menu) {
    @apply rounded-xl;
  }

  :global(div
      .algolia-autocomplete.algolia-autocomplete-left
      .ds-dropdown-menu),
  :global(div
      .algolia-autocomplete.algolia-autocomplete-right
      .ds-dropdown-menu) {
    left: 0 !important; /* DocSearch adds inline styles, !important helps us take control */
    min-width: unset;
    max-width: unset;
    @apply lg:w-[500px];
  }
  :global(.algolia-docsearch-suggestion--category-header) {
    @apply mt-4;
  }

  :global(.algolia-autocomplete .algolia-docsearch-suggestion--highlight) {
    @apply text-secondary;
  }

  :global(.algolia-autocomplete .algolia-docsearch-suggestion--title) {
    @apply text-black font-semibold;
  }

  :global(.algolia-docsearch-suggestion--highlight) {
    box-shadow: none !important;
    @apply !text-secondary;
  }
</style>

<svelte:head>
  <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/docsearch.js@{docSearchJSVersion}/dist/cdn/docsearch.min.css"
  />
  <script
    on:load={processDocSearchScriptLoadEvent}
    bind:this={docSearchScript}
    src="https://cdn.jsdelivr.net/npm/docsearch.js@{docSearchJSVersion}/dist/cdn/docsearch.min.js"></script>
</svelte:head>

<svelte:body on:keydown={handleBodyKeyDown} />

<div class="items-center flex my-4 lg:my-0  lg:mb-8">
  <div class="w-full sm:px-4">
    <div
      class={`w-full input-container relative ${
        $topicsState || isSupportPage ? "topics-active" : ""
      } ${containerClasses}`}
    >
      <label for={docSearchInputSelector} class="sr-only">Search</label>
      <MagGlass
        class="absolute top-1/2 z-10 left-3 -translate-y-1/2 pointer-events-none h-xx-small w-xx-small lef {iconClasses}"
        alt="Search"
        aria-hidden="true"
      />
      <input
        bind:this={docSearchInput}
        type="search"
        {placeholder}
        id={docSearchInputSelector}
        class="box-border text-base rounded-2xl {isBgWhite
          ? 'bg-card'
          : 'dark:bg-light-black bg-sand-dark'} block w-full text-p-medium h-small pl-11 pr-3 py-2 border border-transparent leading-5 text-important placeholder:text-body dark:active:shadow-slight focus:outline-none focus:bg-none focus:border-transparent focus:shadow-md focus:bg-card focus:ring-transparent focus:text-important {clazz}"
      />
    </div>
  </div>
</div>
