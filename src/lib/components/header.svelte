<script lang="ts">
  export let title: string = "";
  export let text: string = "";
  export let tight: boolean = false;
  export let centered: boolean = true;
  export let textClassNames: string = "text-large";
  export let textAlign: "left" | "center" = "center";
  export let fullWidth: boolean = false;

  let clazz = "";
  export { clazz as class };
</script>

<header
  class:mx-auto={centered}
  class="relative mt-small md:mt-x-large {tight
    ? 'mb-small'
    : 'mb-x-large'} lgx:px-0 {clazz}"
  class:text-center={textAlign === "center"}
  class:max-w-4xl={!fullWidth}
  {...$$restProps}
>
  <slot name="top" />
  {#if title}
    <h1 class="h1 !mb-micro md:!mb-x-small">{@html title}</h1>
  {/if}
  {#if text}
    <p class={textClassNames}>{@html text}</p>
  {/if}
  <slot name="content" />
</header>
