<script lang="ts">
  import DeepLink from "./deep-link.svelte";
  import Section from "./section.svelte";
  export let title: string;
  export let text: string = "";
  export let titleClassNames: string = "";
  export let isTitleADeepLink: boolean = false;
  export let textClassNames: string = "";
</script>

<Section {...$$restProps}>
  <div class="text-center">
    {#if isTitleADeepLink}
      <DeepLink {titleClassNames} text={title} />
    {:else}
      <h2 class={titleClassNames}>{title}</h2>
    {/if}
    {#if text}
      <p class="text-large {textClassNames}">
        {@html text}
      </p>
    {/if}
  </div>
  <slot name="content" />
</Section>
