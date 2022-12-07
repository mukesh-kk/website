<script lang="ts">
  import LiteYouTube from "svelte-lite-youtube-embed";
  import { trackEvent } from "./segment.svelte";
  import Share from "./share.svelte";
  import Card from "$lib/components/ui-library/card";
  import type { ShareLink } from "$lib/types/share-link";

  export let embedId: string;
  export let title: string;
  export let coverImage: string = null;
  let isConcealed = Boolean(coverImage);

  const videoLoadedSuccessfully = () => {
    trackEvent("screencast_started", {
      id: embedId,
      name: title,
      url: window.location.href,
      path: window.location.pathname,
    });
  };

  export const youtubeURL = `https://youtube.com/watch?v=${embedId}`;

  const shareLinks: ShareLink[] = [
    {
      href: `https://twitter.com/intent/tweet?text=${encodeURIComponent(
        youtubeURL
      )}`,
      icon: {
        src: "/svg/brands/twitter.svg",
        alt: "Twitter",
      },
      trackingName: "twitter",
    },
    {
      href: `https://www.reddit.com/submit?url=${encodeURIComponent(
        youtubeURL
      )}`,
      icon: {
        src: "/svg/brands/reddit.svg",
        alt: "Reddit",
      },
      trackingName: "reddit",
    },
    {
      name: "Hacker News",
      href: `https://news.ycombinator.com/submitlink?u=${encodeURIComponent(
        youtubeURL
      )}`,
      icon: {
        src: "/svg/brands/hackernews.svg",
        alt: "HackerNews",
      },
      trackingName: "hackernews",
    },
  ];
</script>

<style lang="postcss">
  div :global(.youtube::after) {
    display: block;
    content: "";
    padding-top: 56.25%;
  }
  div :global(.lite-youtube) {
    max-width: 100%;
  }
</style>

<div class="flex-grow">
  <Card
    size="small"
    class="relative overflow-hidden max-w-full shadow-normal aspect-video"
    stroked={false}
  >
    {#if isConcealed}
      <button
        on:click={() => {
          isConcealed = false;
        }}
        class="block relative group"
      >
        <span class="sr-only">Play video</span>
        <img src={coverImage} alt={title} class="rounded-lg" />

        <!-- Play button overlay  -->
        <div class="pointer-events-none" aria-hidden>
          <div
            class="absolute inset-0 flex justify-center items-center opacity-75 group-hover:opacity-100"
          >
            <div class="w-24 h-24 rounded-full bg-black" />
          </div>
          <div class="absolute inset-0 flex justify-center items-center">
            <!-- CSS Triangle for play button -->
            <div
              class="h-0 w-0 ml-2
            border-t-[1rem] border-t-transparent
            border-l-[2rem] border-l-white
            border-b-[1rem] border-b-transparent"
            />
          </div>
        </div>
      </button>
    {:else}
      <div class=".lite-youtube">
        <LiteYouTube
          videoId={`${embedId}`}
          videoTitle={`${title}`}
          params="enablejsapi=1"
          posterQuality="maxresdefault"
          noCookie={true}
          on:iframeLoaded={videoLoadedSuccessfully}
        />
      </div>
    {/if}
  </Card>
  <Share
    text="Share this video"
    {shareLinks}
    class="share justify-end mx-auto mt-xx-small"
  />
</div>
