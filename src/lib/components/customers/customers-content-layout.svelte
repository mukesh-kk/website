<script>
  /**
   * Typescript is not supported in mdsvex layout files.
   * @see https://github.com/pngwn/MDsveX/issues/116
   */
  import OpenGraph from "../open-graph.svelte";

  import Share from "../share.svelte";
  import MoreCustomersStories from "./more-customers-stories.svelte";

  const baseUrl = "https://www.gitpod.io/customers/";
  export let slug;
  export let title;
  export let pageTitle;
  export let pageDescription;
  export let keywords;
  export let image;
  export let norobots = false;

  const shareLinks = [
    {
      href: `https://twitter.com/intent/tweet?text=${encodeURIComponent(
        `${title} ${baseUrl}${slug}`
      )}`,
      icon: {
        src: "/svg/brands/twitter.svg",
        alt: "Twitter",
      },
      trackingName: "twitter",
    },
    {
      href: `http://www.reddit.com/submit?url=${encodeURIComponent(
        `${baseUrl}${slug}&title=${title}`
      )}`,
      icon: {
        src: "/svg/brands/reddit.svg",
        alt: "Reddit",
      },
      trackingName: "reddit",
    },
    {
      href: `http://news.ycombinator.com/submitlink?u=${encodeURIComponent(
        `${baseUrl}${slug}`
      )}&t=${encodeURIComponent(title)}`,
      icon: {
        src: "/svg/brands/hackernews.svg",
        alt: "HackerNews",
      },
      trackingName: "hackernews",
    },
  ];
</script>

<OpenGraph
  data={{
    title: pageTitle,
    keywords,
    description: pageDescription,
    type: "article",
    image: `images/customers/${slug}/${image}`,
    imageTwitter: `images/customers/${slug}/${image}`,
    norobots,
  }}
/>

<slot />

<div class="max-w-3xl mx-auto">
  <Share
    text="Share this story"
    {shareLinks}
    class="border-t border-solid border-divider pt-xx-small md:pt-micro mt-small"
  />
</div>

<MoreCustomersStories />
