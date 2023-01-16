<script context="module">
  export const prerender = true;
</script>

<script lang="ts">
  import CalloutCard from "$lib/components/card/callout-card.svelte";
  import Header from "$lib/components/header.svelte";
  import OpenGraph from "$lib/components/open-graph.svelte";
  import LinkButton from "$lib/components/ui-library/link-button/link-button.svelte";
  import Signup from "$lib/components/dedicated/signup.svelte";
  import Hero from "$lib/components/dedicated/hero-text.svelte";
</script>

<OpenGraph
  data={{
    description: "Request a free community license",
    title: "Community License",
    norobots: true,
  }}
/>

<Header>
  <div slot="content">
    <h1 class="h2">Signup for Gitpod Dedicated</h1>
  </div>
</Header>

<div class="flex lgx:justify-start items-start mb-xxx-large">
  <div class="max-w-2xl justify-left">
    <Hero />
  </div>
  <div class="max-w-2xl justify-center">
    <Signup class="lgx:hidden mx-auto" toType="dedicated-signup" />
  </div>
  <Signup toType="dedicated-signup" class="hidden lgx:block" />
</div>

<Header tight={true}>
  <div slot="content">
    <h1 class="h3">Download the license file</h1>
  </div>
</Header>

<CalloutCard class="text-black text-p-small max-w-xl gap-small mx-auto my-8">
  <p>
    The last official update of this product is the
    <a
      class="dark:hover:text-black !underline"
      href="https://www.gitpod.io/changelog/november-self-hosted-release"
      >November 2022 self-hosted release</a
    >. However, we no longer offer support or updates for it and no longer sell
    commercial self-hosted licenses. If you are interested in an isolated,
    private installation of Gitpod, take a look at
    <a class="dark:hover:text-black !underline" href="/dedicated"
      >Gitpod Dedicated</a
    >.
    <br />
    <br />
    Read
    <a
      class="dark:hover:text-black !underline"
      href="/blog/introducing-gitpod-dedicated">our blog on Gitpod Dedicated</a
    > to learn why we made the decision to discontinue self-hosted.
  </p>
</CalloutCard>

<Header
  title=""
  text="The file needs to be uploaded during the installation process.<br class='hidden sm:block' />View our <a href='/docs/configure/self-hosted/latest'>getting started</a> guides for instructions how to do so."
>
  <LinkButton
    variant="primary"
    size="large"
    href="/Community.yaml"
    download="Community.yaml"
    slot="content"
    class="mt-x-small"
  >
    Download
  </LinkButton>
</Header>
