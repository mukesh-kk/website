<script>
  import Articles from "$lib/components/articles.svelte";
  import Explore from "$lib/components/explore.svelte";
  import OpenGraph from "$lib/components/open-graph.svelte";
  import gitpodSvelte from "$lib/components/svgs/brands/gitpod.svelte";
  import Card from "$lib/components/ui-library/card";
  import Header from "$lib/components/webinars/header.svelte";
  import Hosts from "$lib/components/webinars/hosts.svelte";
  import Layout from "$lib/components/webinars/layout.svelte";
  import OrganizedBy from "$lib/components/webinars/organized-by.svelte";
  import Register from "$lib/components/webinars/register.svelte";
  import YoutubeEmbed from "$lib/components/youtube-embed.svelte";

  let isRegistrationOpen = true;
</script>

<OpenGraph
  data={{
    title: "Getting started with Gitpod and remote development",
    description:
      "A hands on conversation about remote development using Gitpod. We will talk about how to get started and cover some best practices. You will be able to follow along with a example repository and your own Gitpod account.",
    keywords:
      "panel-discussion, remote development, success-stories, Java, Gitpod",
    image: isRegistrationOpen
      ? "images/webinars/getting-started-with-nuaware-register.png"
      : "images/webinars/getting-started-with-nuaware-past.png",
    imageTwitter: isRegistrationOpen
      ? "images/webinars/getting-started-with-nuaware-register.png"
      : "images/webinars/getting-started-with-nuaware-past.png",
  }}
/>

<div class="flex items-start">
  <Layout>
    <Header
      title="Getting started with Gitpod and remote development"
      label="Workshop"
      date="November 15 – 10:00 am PDT"
      duration="60min"
      webinarDescription="A hands on conversation about remote development using Gitpod. We will talk about how to get started and cover some best practices. You will be able to follow along with a example repository and your own Gitpod account."
    >
      <div slot="additionalHosts">
        <img
          src="https://www.nuaware.com/hubfs/raw_assets/public/nuaware/website/img/logo.png"
          alt="Nuaware"
          class="h-10 -mt-2"
        />
      </div>
    </Header>

    {#if isRegistrationOpen}
      <Register
        toType="getting-started-with-nuaware"
        class="lgx:hidden"
        eventType="workshop"
      />
    {:else}
      <div class="lgx:hidden">
        <Card
          size="medium"
          class="pt-small md:pt-large px-3 sm:px-xx-small pb-micro md:pb-xx-small w-[95vw] lg:w-[auto]"
        >
          <YoutubeEmbed
            title="Getting started with Gitpod and remote development"
            embedId="wqM7mIIn4z4"
          />
        </Card>
      </div>
    {/if}

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
      <Hosts
        hosts={[
          {
            avatar: {
              src: "/images/webinars/chad-metcalf.jpg",
            },
            name: "Chad Metcalf",
            jobTitle: "Plays a developer on YouTube",
            companyLogo: {
              component: gitpodSvelte,
              props: {
                class: "h-6",
              },
            },
            text: `Chad joined Gitpod because he believed developers are asked to do too much. The "developer commute" gets longer everyday. Today he works with customers on using Gitpod to shorten that commute so developers can skip the environment bus and get teleported straight to work. Before Gitpod, Chad worked at a number of startups including Cloudera, Docker, and Puppet. Long ago in a galaxy far away he was a C++ developer working on unmanned ground robots.`,
          },
        ]}
      />

      <OrganizedBy>
        <img src="/images/gitpod-logo.svg" alt="Gitpod" class="h-10 w-10" />
        <img
          src="https://www.nuaware.com/hubfs/raw_assets/public/nuaware/website/img/logo.png"
          alt="Nuaware"
          class="h-10 -mt-[0.0125rem]"
        />
      </OrganizedBy>
    </div>
  </Layout>

  {#if isRegistrationOpen}
    <Register
      toType="getting-started-with-nuaware"
      class="hidden lgx:block"
      eventType="workshop"
    />{:else}
    <div class="hidden lgx:block max-w-2xl">
      <Card
        size="medium"
        class="pt-small md:pt-large px-3 sm:px-xx-small pb-micro md:pb-xx-small w-[95vw] lg:w-[auto]"
      >
        <YoutubeEmbed
          title="Getting started with Gitpod and remote development"
          embedId="wqM7mIIn4z4"
        />
      </Card>
    </div>
  {/if}
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
