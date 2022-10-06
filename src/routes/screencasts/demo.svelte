<script context="module">
  export const prerender = true;
</script>

<script lang="ts">
  import EditInGitpod from "$lib/components/docs/edit-in-gitpod.svelte";
  import Body from "$lib/components/screencasts/body.svelte";
  import GetStartedSmall from "$lib/components/screencasts/get-started-small.svelte";
  import { demoScreencast } from "$lib/contents/screencasts";
  import { session } from "$app/stores";
  import type { BlogPost } from "$lib/types/blog-post";
  import MoreArticles from "$lib/components/more-articles.svelte";
  import Explore from "$lib/components/explore.svelte";

  const posts = $session.posts.filter((p: BlogPost) =>
    [
      "i-said-goodbye-to-local-development-and-so-can-you",
      "cloud-based-development-for-everyone",
    ].some((slug) => p.slug === slug)
  );
</script>

<Body
  title="Watch a demo"
  description="Unleash developer productivity by supercharging how you develop."
  screencast={demoScreencast}
  hideDescription={true}
>
  <div slot="custom">
    <h2 class="h5 mt-micro mb-2">Gitpod Demo</h2>
    <p>
      See how Gitpod launches a ready-to-code project built on five containers
      using a Node app, .NET app, a Python app as well as Redis and Postgres
      databases with a simple click.
    </p>

    <h3 class="h5 my-xx-small">Try it yourself</h3>
    <EditInGitpod
      text="Open in Gitpod"
      url="https://gitpod.io/#https://github.com/gitpod-io/voting-app"
    />
    <p class="mt-x-small md:mb-24">
      Do you still have questions? <a href="/contact/sales">Contact sales.</a>
    </p>
  </div>
</Body>

<GetStartedSmall />

<MoreArticles
  title="Helpful resources"
  posts={[
    posts[1],
    posts[0],
    {
      title: "Gitpodifying — The Ultimate Guide",
      excerpt:
        "I recently stumbled upon a new project on GitHub that peaked my interest. It proposed a new type of database that I was dying to try out.",
      image: "/images/guides/gitpodify/teaser.jpg",
      type: "guides",
      href: "/guides/gitpodify",
      isNotAnActualPost: true,
    },
  ]}
/>

<Explore
  contents={{
    secondaryLink: {
      href: "/contact/sales",
      text: "Contact Sales",
    },
  }}
/>
