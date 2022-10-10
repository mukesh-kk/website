<script lang="ts">
  import { isAnExternalLink } from "$lib/utils/helpers";
  import LinkButton from "$lib/components/ui-library/link-button";
  import type { Feature } from "$lib/types/feature";
  import Console from "./console.svelte";
  import Section from "./section.svelte";
  import ButtonsWrapper from "./buttons-wrapper.svelte";
  import Lottie from "./lottie.svelte";
  import TickList from "./tick-list.svelte";

  export let feature: Feature;
  const {
    moreButton,
    secondaryButton,
    paragraph,
    title,
    featureList,
    terminal,
    image,
    previewComponent,
    lottie,
    showTheMediaFirstOnMobile,
    footnote,
    headingLevel,
  } = feature;
</script>

<style lang="postcss">
  :global(.feature-container-section:nth-of-type(even)) .preview,
  :global(.feature-box:nth-of-type(even))
    :global(.feature-container-section)
    .preview {
    @apply col-start-1;
    @apply row-start-1;
  }

  .feature :global(code) {
    @apply py-1 px-2 rounded-xl bg-tertiary text-dark-grey;
    white-space: break-spaces;
  }

  .buttons-wrapper {
    @apply flex justify-center items-center flex-wrap space-x-4;
  }

  .component-container > :global(*) {
    height: 100%;
    width: 100%;
  }
</style>

<Section class="feature-container-section">
  <div
    class="feature md:grid justify-center items-center md:grid-cols-2 lg:gap-32 md:gap-small flex {showTheMediaFirstOnMobile
      ? 'flex-col-reverse'
      : 'flex-col'}"
  >
    <div
      class="{showTheMediaFirstOnMobile ? 'mt-x-small' : 'mb-x-small'} md:my-0"
    >
      <div class="text-large">
        {#if headingLevel === "h3"}
          <h3 class="h3">{@html title}</h3>
        {:else}
          <h2 class="h3">{@html title}</h2>
        {/if}
        <p
          class="mt-micro"
          class:mb-xx-small={moreButton || secondaryButton}
          class:md:mb-x-small={moreButton || secondaryButton}
        >
          {@html paragraph}
        </p>
        {#if featureList}
          <TickList list={featureList} />
        {/if}
      </div>
      <ButtonsWrapper class={!moreButton && !secondaryButton ? "hidden" : ""}>
        {#if moreButton}
          <LinkButton
            href={moreButton.href}
            size="medium"
            variant={moreButton.type || "primary"}
            >{moreButton.text}
          </LinkButton>
        {/if}
        {#if secondaryButton}
          <LinkButton
            variant="secondary"
            size="medium"
            href={secondaryButton.href}
            target={isAnExternalLink(secondaryButton.href)
              ? "_blank"
              : undefined}>{secondaryButton.text}</LinkButton
          >
        {/if}
      </ButtonsWrapper>
    </div>
    <div
      class="preview w-full col-start-1 row-start-1 md:col-start-auto md:row-start-auto"
    >
      {#if terminal}
        <Console
          source={terminal.source}
          dark={terminal.dark}
          narrow={terminal.narrow}
          shadow={terminal.shadow}
          skipToEnd={terminal.skipToEnd}
        />
      {/if}
      {#if image}
        <img
          src={image.src}
          alt={image.alt}
          class="{image.classNames} mx-auto {image.darkSrc
            ? 'dark:hidden'
            : ''}"
          style={image.styles}
        />
        {#if image.darkSrc}
          <img
            src={image.darkSrc}
            alt={image.alt}
            class="{image.classNames} mx-auto hidden dark:block"
            style={image.styles}
          />
        {/if}
      {/if}
      <div class="component-container">
        {#if previewComponent}
          <svelte:component this={previewComponent} />
        {/if}
      </div>
      {#if lottie}
        <Lottie {lottie} />
      {/if}
      {#if footnote}
        <p class="fine-print mt-x-small max-w-md mx-auto">{@html footnote}</p>
      {/if}
    </div>
  </div>
</Section>
