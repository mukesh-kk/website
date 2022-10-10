<script lang="ts">
  // Components
  import MenuItem from "./menu-item.svelte";

  // States
  import topicsState from "../states/topics-state";

  import type { MenuEntry } from "$lib/types/menu-entry";
  export let MENU: MenuEntry[];
</script>

<div role="navigation" aria-label="All topics">
  <ul class="divide-y divide-divider">
    {#each MENU as menuItem}
      <MenuItem
        isHeader={menuItem.isSectionHeader}
        href={menuItem.path}
        showIcon={true}
        onClick={() => ($topicsState = false)}
      >
        {menuItem.title}
      </MenuItem>
    {/each}
  </ul>
</div>
