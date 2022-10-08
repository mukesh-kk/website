<script>
  import Articles from "$lib/components/articles.svelte";
  import Explore from "$lib/components/explore.svelte";
  import OpenGraph from "$lib/components/open-graph.svelte";
  import Card from "$lib/components/ui-library/card";
  import Header from "$lib/components/webinars/header.svelte";
  import Hosts from "$lib/components/webinars/hosts.svelte";
  import Layout from "$lib/components/webinars/layout.svelte";
  import OrganizedBy from "$lib/components/webinars/organized-by.svelte";
  import YoutubeEmbed from "$lib/components/youtube-embed.svelte";
  import { hosts } from "$lib/contents/webinars/java-panel-discussion";
</script>

<OpenGraph
  data={{
    title: "Success and failure stories of Java developers shifting to remote",
    description:
      "Open conversation about Java remote development covering best practices. What does not work well yet, and what had to click to make it work.",
    keywords:
      "panel-discussion, remote development, success-stories, Java, Gitpod",
    image: "images/webinars/java-panel-discussion.png",
    imageTwitter: "images/webinars/java-panel-discussion.png",
  }}
/>

<svelte:head>
  <link rel="preload" as="image" href="/images/illustration-crop.png" />
  <link rel="preload" as="image" href="/images/illustration-crop-dark.png" />
</svelte:head>

<div class="flex items-start">
  <Layout>
    <Header
      title="Success & failure stories of Java developers shifting to remote"
      label="Panel Discussion"
      date="Past Event"
      duration="30min"
      webinarDescription="Open conversation about Java remote development covering best practices. What does not work well yet, and what had to click to make it work."
    />

    <div class="lgx:hidden ">
      <Card
        size="small"
        class="px-3 sm:px-xx-small py-micro md:py-xx-small max-w-full shadow-normal"
      >
        <h2 class="text-xl font-bold mb-6">Watch the recording</h2>

        <div class="flex">
          <YoutubeEmbed
            coverImage="/images/webinars/java-panel-discussion.png"
            title="Success and failure stories of Java developers shifting to remote"
            embedId="Tgb7CBoqoqg"
          />
        </div>
      </Card>
    </div>

    <div class="max-w-[560px]">
      <!-- <InThisWebinar>
        <svelte:fragment slot="list-items">
          <li>
            Success & failure stories of Java developers shifting to remote
          </li>
          <li>
            How to use Gitpod remote dev environments with the IntelliJ IDE that
            runs on your computer
          </li>
        </svelte:fragment>
      </InThisWebinar> -->
      <Hosts {hosts} />
      <OrganizedBy>
        <img src="/images/gitpod-logo.svg" alt="Gitpod" class="h-10 w-10" />
      </OrganizedBy>
    </div>
  </Layout>

  <div
    class="hidden lgx:block mt-small md:mt-x-large sticky top-40 left-full lg:pr-16 max-w-2xl flex-1"
  >
    <div class="">
      <Card size="small" class="p-xx-small shadow-normal">
        <h2 class="text-xl font-bold mb-6">Watch the recording</h2>

        <div class="flex">
          <YoutubeEmbed
            coverImage="/images/webinars/java-panel-discussion.png"
            title="Success and failure stories of Java developers shifting to remote"
            embedId="Tgb7CBoqoqg"
          />
        </div>
      </Card>
    </div>
  </div>
</div>

<Articles
  title="Additional resources"
  text="If you are curious to learn more on remote development, 
    have a read through these blog posts."
  textMaxW="max-w-2xl"
  slugs={[
    "gitpod-jetbrains",
    "cloud-based-development-for-everyone",
    "i-said-goodbye-to-local-development-and-so-can-you",
  ]}
/>

<Explore contents={{ title: "Try it out" }} />
