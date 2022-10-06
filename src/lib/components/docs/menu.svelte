<script lang="ts">
  import MenuSection from "./menu-section.svelte";
  import type { MenuEntry } from "$lib/types/menu-entry";
  export let MENU: MenuEntry[];
</script>

<ul
  class="space-y-2 pb-[100px] self-start max-h-[calc(100vh-6rem)] overflow-auto whitespace-nowrap"
>
  {#each MENU as menuItem}
    <MenuSection {menuItem} />
  {/each}
</ul>
