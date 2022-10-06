<script lang="ts">
  import type { Project } from "$lib/types/project";
  import LinkButton from "$lib/components/ui-library/link-button";
  import Button from "$lib/components/ui-library/button";

  export let project: Project;

  const { logo, alt, title, githubUrl, trackingName } = project;
</script>

<style lang="postcss">
  h4 {
    @apply text-p-medium mb-0;
  }

  :global(body.dark) div :global(a:hover) {
    :global(h4) {
      @apply text-black;
    }

    :global(button) {
      @apply bg-black text-important;
    }
  }
</style>

<div>
  <LinkButton
    class="flex h-14 items-center justify-between group !p-3"
    variant="cta"
    size="large"
    href={`https://gitpod.io#${githubUrl}`}
    target="_blank"
    aria-label={alt}
    data-analytics={`{"context":"example_workspace","label":"` +
      trackingName +
      `"}`}
    rel="noopener"
  >
    <div class="flex items-center">
      <img
        src={`/${logo}`}
        {alt}
        class="mr-macro transition-all duration-200 delay-[50ms] grayscale group-focus:grayscale-0 group-hover:grayscale-0"
        width="24"
        height="24"
      />
      <h4 class="text-important transition-all duration-200 delay-[50ms]">
        {title}
      </h4>
    </div>
    <Button
      class="hidden transition-all duration-200 delay-[50ms] group-hover:inline-block"
      variant="tertiary"
      size="medium">Launch workspace</Button
    >
  </LinkButton>
</div>
