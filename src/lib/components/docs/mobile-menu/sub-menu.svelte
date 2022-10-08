<script lang="ts">
  // Components
  import MenuItem from "./menu-item.svelte";
  import Pill from "$lib/components/pill.svelte";

  // States
  import topicsState from "../states/topics-state";
  let subMenuState: boolean = false;

  import type { MenuEntry } from "$lib/types/menu-entry";
  import Arrow from "$lib/components/svgs/arrow.svelte";
  export let currentSection: MenuEntry = null;
  export let displayNavigation: boolean = true;
</script>

{#if displayNavigation}
  <button
    class="flex items-center text-important w-full py-3"
    type="button"
    on:click={() => {
      $topicsState = true;
      subMenuState = false;
    }}
  >
    <div class="mr-micro">
      <Arrow width="12" height="12" class="rotate-90" />
    </div>
    All topics
  </button>
{/if}
{#if currentSection?.subMenu}
  <div class="mt-micro rounded-xl shadow-normal bg-card">
    <button
      class="flex items-center py-[13px] px-micro text-black w-full"
      type="button"
      aria-controls="sub-menu"
      aria-expanded={subMenuState}
      on:click={() => (subMenuState = !subMenuState)}
    >
      <div
        class="mr-micro text-left flex-grow flex-shrink w-auto text-important"
      >
        {currentSection?.title}
      </div>
      <div class="flex-grow-0 flex-shrink-0">
        <Arrow
          class={subMenuState ? "rotate-180" : ""}
          height="15"
          width="15"
        />
      </div>
    </button>

    <div
      aria-label={currentSection?.title}
      role="navigation"
      class={`px-4 ${subMenuState ? "block" : "hidden"}`}
      id="sub-menu"
    >
      <ul class="divide-y divide-divider">
        {#each currentSection?.subMenu as sub}
          <MenuItem href={sub.path} onClick={() => (subMenuState = false)}>
            {sub.title}
            {#if sub.status}
              <Pill
                variant={sub.status === "soon" ? "pink" : "orange"}
                text={sub.status}
                class="ml-1.5"
              />
            {/if}
          </MenuItem>
        {/each}
      </ul>
    </div>
  </div>
{/if}
