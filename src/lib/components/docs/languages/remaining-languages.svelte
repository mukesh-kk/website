<script lang="ts">
  import { remainingLanguages } from "$lib/stores/languages";
  import LanguageItem from "./remaining-language-item.svelte";
</script>

<div class="grid grid-cols-2 md:grid-cols-3 gap-4">
  {#each $remainingLanguages as item}
    <LanguageItem language={item} />
  {/each}
</div>
