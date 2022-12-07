<script lang="ts">
  import GitpodIllustration from "./gitpod-illustration.svelte";

  export let title: string;
  export let text: string = "";

  let clazz = "";
  export { clazz as class };
</script>

<div class={clazz}>
  <h2 class="h3 text-center mb-8">{title}</h2>
  {#if text}
    <p class="text-center">
      {@html text}
    </p>
  {/if}
  <GitpodIllustration />
</div>
