<script lang="ts">
  import Section from "./section.svelte";
  import Card from "$lib/components/ui-library/card";
  import LinkButton from "$lib/components/ui-library/link-button";
  import type { ExploreSection } from "$lib/types/explore-section";
  import ButtonsWrapper from "./buttons-wrapper.svelte";

  export let contents: ExploreSection = {};

  const {
    title = "Get Started <span>for&nbsp;Free</span>",
    description = "Spin up fresh, automated dev environments for each task, in the cloud, in seconds.",
    note = "",
    link = {
      text: "Try now",
      href: "https://gitpod.io/workspaces",
    },
    secondaryLink = {
      text: "Get a demo",
      href: "/contact/get-demo",
    },
    useKumquatIllustration = false,
  } = contents;
</script>

<style lang="postcss">
  :global(section) :global(.explore) {
    @media (max-width: 830px) {
      @apply flex-col mx-auto;
      max-width: 345px;
    }
  }

  .h1 {
    @apply mb-micro;

    @media (max-width: 830px) {
      @apply mb-macro;

      :global(span) {
        @apply hidden;
      }
    }
  }

  .explore__text {
    @apply px-large;
    flex: 0 0 45%;

    @media (max-width: 1280px) {
      @apply pr-0 md:pl-small lg:pl-large;
    }

    @media (max-width: 830px) {
      @apply pt-xx-small px-xx-small;
    }
  }

  .explore__paragraph {
    @apply mb-x-small;
    max-width: 510px;

    @media (max-width: 830px) {
      @apply max-w-sm mb-xx-small;
    }
  }

  .explore__illustration {
    flex: 1;
    border-top-right-radius: inherit;
    border-bottom-right-radius: inherit;

    @media (min-width: 1280px) {
      background: none !important;
    }
  }

  .explore__illustration .small {
    @apply hidden;
  }

  .explore__illustration img {
    @apply float-right;
    border-radius: inherit;

    @media (max-width: 1280px) {
      display: none;
    }
  }

  @media (max-width: 830px) {
    .explore__illustration {
      background: none !important;
    }

    .explore__illustration img {
      @apply hidden;
    }

    .explore__illustration .small {
      @apply block;
    }

    :global(body.dark) .small-light {
      @apply hidden !important;
    }

    :global(body.light) .small-dark {
      @apply hidden !important;
    }
  }

  .kumquat-illustration {
    background: url("/images/kumquat.png");
    @apply bg-cover;
  }
</style>

<Section>
  <Card
    size="medium"
    class="shadow-normal flex xl:items-center max-w-none text-left explore"
  >
    <div class="explore__text md:py-medium xl:py-0">
      <h2 class="h1">{@html title}</h2>
      <p class="explore__paragraph text-p-large">
        {@html description}
      </p>
      <slot name="list" />
      {#if note}
        <p class="h5 font-semibold text-important mb-x-small md:-mt-micro">
          {note}
        </p>
      {/if}
      <ButtonsWrapper class="pb-small sm:pb-micro md:pb-0">
        <LinkButton
          size="large"
          variant="primary"
          href={link.href}
          target={link.href.startsWith("http") ? "_blank" : null}
          >{link.text}</LinkButton
        >
        {#if secondaryLink}
          <LinkButton
            variant="cta"
            size="large"
            href={secondaryLink.href}
            target={secondaryLink.href.startsWith("http") ? "_blank" : null}
            >{secondaryLink.text}</LinkButton
          >
        {/if}
      </ButtonsWrapper>
    </div>
    <div
      class="explore__illustration w-full bg-cover bg-left bg-[url('/images/illustration-grid.png')] dark:bg-[url('/images/illustration-grid-dark.png')]"
      class:kumquat-illustration={useKumquatIllustration}
    >
      <img
        src="/images/{useKumquatIllustration
          ? 'kumquat.png'
          : 'illustration-grid.png'}"
        alt="Gitpod in a Nutshell"
        class="dark:hidden"
      />
      <img
        src="/images/{useKumquatIllustration
          ? 'kumquat.png'
          : 'illustration-grid-dark.png'}"
        alt="Gitpod in a Nutshell"
        class="hidden dark:block"
      />
      <img
        src="/images/{useKumquatIllustration
          ? 'kumquat.png'
          : 'illustration-small.png'}"
        class:pt-micro={useKumquatIllustration}
        class="small small-light"
        alt="Gitpod in a Nutshell"
      />
      <img
        src="/images/{useKumquatIllustration
          ? 'kumquat.png'
          : 'illustration-small-dark.png'}"
        class:pt-micro={useKumquatIllustration}
        class="small small-dark hidden dark:block"
        alt="Gitpod in a Nutshell"
      />
    </div>
  </Card>
</Section>
