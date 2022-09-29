<script lang="ts">
  import { popularLanguages } from "$lib/stores/languages";
  import LanguageItem from "./popular-language-item.svelte";
</script>

<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
  {#each $popularLanguages as item}
    <LanguageItem language={item} />
  {/each}
</div>
