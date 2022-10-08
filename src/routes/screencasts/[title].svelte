<script lang="ts" context="module">
  import { screencasts } from "$lib/contents/screencasts";

  export const prerender = true;
  export const load = async function ({ params }) {
    const { title } = params;
    const screencast = screencasts.find(
      (s) => stringToBeautifiedFragment(s.title.slice(0, -3)) === title
    );
    return { props: { screencast } };
  };
</script>

<script lang="ts">
  import type { Screencast as ScreencastType } from "$lib/types/screencasts";
  import { stringToBeautifiedFragment } from "$lib/utils/helpers";
  import CalloutSecondary from "$lib/components/callout-secondary.svelte";
  import Explore from "$lib/components/explore.svelte";
  import SectionCommon from "$lib/components/section-common.svelte";
  import ScreencastsGrid from "$lib/components/screencasts/screencasts-grid.svelte";
  import { beforeUpdate, onMount } from "svelte";
  import { afterNavigate } from "$app/navigation";
  import Body from "$lib/components/screencasts/body.svelte";

  export let screencast: ScreencastType;

  let nextScreencasts = screencasts.slice(screencasts.indexOf(screencast) + 1);

  beforeUpdate(() => {
    nextScreencasts = screencasts.slice(screencasts.indexOf(screencast) + 1);
  });

  let isAMobileDevice = false;

  onMount(() => {
    let query = window.matchMedia("(max-width: 768px)");
    const handler = () => {
      if (query.matches) {
        isAMobileDevice = true;
      } else {
        isAMobileDevice = false;
      }
    };
    query.addEventListener("change", handler);

    return () => {
      query.removeEventListener("change", handler);
    };
  });

  afterNavigate(() => {
    window.scrollTo(0, 0);
  });
</script>

<Body {screencast} />

{#if nextScreencasts.length}
  <SectionCommon title="Next up...">
    <ScreencastsGrid
      headlineOrder="h3"
      screencasts={nextScreencasts.slice(0, isAMobileDevice ? 3 : 6)}
      slot="content"
    />
  </SectionCommon>
{/if}

<CalloutSecondary
  title="View full screencast playlist"
  text="Have a look at our full playlist to learn even more about specific topics."
  link={{
    href: "/screencasts",
    text: "View all screencasts",
  }}
  isGetADemoLinkShown={false}
/>

<Explore />
