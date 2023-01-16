<script lang="ts">
  import ButtonsWrapper from "../buttons-wrapper.svelte";
  import ImageLightDark from "../image-light-dark.svelte";
  import Section from "../section.svelte";
  import GeneralCatalyst from "../svgs/about/general-catalyst.svelte";
  import SpeedInvest from "../svgs/about/speed-invest.svelte";
  import Jetbrains from "../svgs/brands/jetbrains.svelte";
  import LinkButton from "../ui-library/link-button/link-button.svelte";
  import FindOutMore from "./find-out-more.svelte";
  import InNews from "./in-news.svelte";
</script>

<style lang="postcss">
  h2.h3 {
    @apply mt-huge lg:mt-44 mb-xx-small;
  }

  p {
    & + & {
      @apply mt-x-small;
    }
  }
</style>

<Section>
  <div class="max-w-[900px] mx-auto">
    <h2 class="h3">
      Make software engineering collaborative and joyful again.
    </h2>

    <p class="text-large">
      Developers write software within languages/frameworks, build tools, glue
      them together to (tool) chains, develop against APIs and communicate and
      collaborate with our colleagues. All of that should be efficient, joyful
      and secure.
    </p>
    <p class="text-large">
      Yet it is not. Devs constantly struggle with larger codebases, cluttered
      dependencies, security policies and unnecessary friction in their
      workflows.
    </p>
    <p class="text-large">
      We want to make developers feel again that everything is at their
      fingertips.
    </p>

    <h2 class="h3">
      Gitpod was founded because we were frustrated by manually setting up and
      maintaining dev environments.
    </h2>

    <p class="text-large">
      We are building Gitpod in the open to easily spin-up fresh dev
      environments for any task. Those ephemeral environments are fast &
      powerful, fully automated & initialized. They empower developers to
      immediately start coding, debugging, and testing their code.
    </p>

    <p class="text-large">Only then developers are always ready-to-code.</p>

    <h2 class="h3">Built on shared principles</h2>

    <p class="text-large">
      Values are important to us. We are developer-led and aim for a
      frictionless experience when interacting with our product, our company and
      our brand: no hurdles, no BS, no unnecessary extra steps.
    </p>

    <p class="text-large">
      We believe in the benefits of an open culture. We are open minded,
      inclusive, transparent and curious. We always remain students of the game,
      not masters of the game. We have opinions, but are not opinionated. We
      integrate, don't dictate.
    </p>

    <FindOutMore />

    <h2 class="h3">Backed by great investors</h2>

    <p class="text-large">
      Founded in 2020, Gitpod Inc. raised over $35m to date from some of the
      world’s most renowned open source investors. Our early backers include
      General Catalyst as well as Speedinvest, Crane and Vertex. We are proud to
      be supported by incredible individuals such as <span class="code"
        ><b>Tom-Preston Werner</b></span
      >, founder and ex-CEO of GitHub, <br /><span class="code"
        ><b>Tobi Lütke</b></span
      >, founder and CEO of Shopify, and
      <span class="code"><b>Kent Beck</b></span>, signatory of the Agile
      Manifesto.
    </p>

    <div
      class="flex flex-wrap items-center justify-center xs:justify-start gap-x-x-small gap-y-micro md:gap-small mt-xx-small"
    >
      <GeneralCatalyst />
      <SpeedInvest />
      <ImageLightDark
        image={{
          src: "/images/about/crane.png",
          darkSrc: "/images/about/crane-dark.png",
          alt: "Crane",
          class: "h-[35px]",
        }}
      />
      <ImageLightDark
        image={{
          src: "/images/about/vertex.png",
          darkSrc: "/images/about/vertex-dark.png",
          alt: "Crane",
          class: "h-[38px]",
        }}
      />
    </div>

    <h2 class="h3">
      Collaboration with strong partners like GitLab,<br
        class="hidden md:block"
      /> JetBrains & Tailscale
    </h2>
    <p>
      We are strong believers in creating better-together partnerships.
      World-leading software companies are teaming up with us to make remote
      development the best choice for developers.
    </p>

    <ButtonsWrapper class="mt-x-small">
      <LinkButton
        href="/blog/gitpod-jetbrains"
        variant="white"
        class="flex items-center"
      >
        <Jetbrains isDark={true} class="mr-micro h-6 w-6" />
        JetBrains announcement
      </LinkButton>
      <LinkButton
        href="/blog/gitlab-integration"
        variant="white"
        class="flex items-center"
      >
        <img src="/svg/gitlab.svg" alt="GitLab" class="mr-micro h-6 w-6" />
        GitLab announcement
      </LinkButton>
      <LinkButton
        href="/blog/tailscale"
        variant="white"
        class="flex items-center"
      >
        <img
          src="/svg/tailscale.svg"
          alt="Tailscale"
          class="mr-micro h-6 w-6 dark:hidden"
        />
        <img
          src="/svg/tailscale-dark.svg"
          alt="Tailscale"
          class="mr-micro h-6 w-6 hidden dark:block"
        />
        Tailscale announcement
      </LinkButton>
    </ButtonsWrapper>

    <InNews />
  </div>
</Section>
