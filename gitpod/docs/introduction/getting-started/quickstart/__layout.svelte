<script lang="ts">
  import { page } from "$app/stores";
</script>

<svelte:head>
  {#if !$page.url.pathname.endsWith("quickstart")}
    <meta name="robots" content="noindex" />
  {/if}
</svelte:head>

<slot />
