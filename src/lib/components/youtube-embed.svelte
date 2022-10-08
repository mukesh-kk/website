<script context="module" lang="ts">
  declare global {
    interface Window {
      onYouTubeIframeAPIReady: any;
    }
    var YT: any;
  }
</script>

<script lang="ts">
  import { afterUpdate } from "svelte";
  import { trackEvent } from "./segment.svelte";
  import Share from "./share.svelte";
  import Card from "$lib/components/ui-library/card";
  import type { ShareLink } from "$lib/types/share-link";

  export let embedId: string;
  export let title: string;

  export let coverImage: string = null;
  let isConcealed = Boolean(coverImage);

  const randomId = "yt-player-" + Math.random().toString(36).slice(2, 5);
  const VIDEO_PLAYING = 1;
  let videoStarted = false;

  const setUpVideo = () => {
    const onStateChange = (e: any) => {
      if (e.data == VIDEO_PLAYING) {
        if (!videoStarted) {
          trackEvent("screencast_started", {
            id: embedId,
            name: title,
            url: window.location.href,
            path: window.location.pathname,
          });
        }
        videoStarted = true;
      }
    };

    new YT.Player(randomId, {
      events: { onStateChange },
    });
  };

  afterUpdate(() => {
    if (typeof YT === "undefined") {
      var tag = document.createElement("script");
      tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName("script")[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

      // Youtube script will automatically call the following function
      window.onYouTubeIframeAPIReady = () => {
        setUpVideo();
      };
    } else {
      videoStarted = false;
      setUpVideo();
    }
  });

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
      href: `http://www.reddit.com/submit?url=${encodeURIComponent(
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
      href: `http://news.ycombinator.com/submitlink?u=${encodeURIComponent(
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
      <iframe
        id={randomId}
        src={`https://www.youtube-nocookie.com/embed/${embedId}?enablejsapi=1&autoplay=${
          coverImage ? 1 : 0 // Autoplay when revealed from the cover image, but not when there's no cover
        }`}
        {title}
        width="560"
        height="315"
        autoplay={Boolean(coverImage)}
        frameBorder="0"
        class="absolute top-0 left-0 w-full h-full max-w-full"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      />
    {/if}
  </Card>
  <Share
    text="Share this video"
    {shareLinks}
    class="share justify-end mx-auto mt-xx-small"
  />
</div>
