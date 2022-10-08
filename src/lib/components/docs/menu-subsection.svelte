<script lang="ts">
  import docsCurrentSubsectionStore from "$lib/stores/docs-current-subsection";
  import type { MenuEntry } from "$lib/types/menu-entry";
  import {
    getVariantFromStatus,
    isLongDocsMenuEntry,
    sanitizeSelfHosted,
  } from "$lib/utils/helpers";
  import Pill from "../pill.svelte";
  import MenuLink from "./menu-link.svelte";
  export let menuItem: MenuEntry;
  let isLong: boolean = isLongDocsMenuEntry(menuItem);

  function findSubSection(section: MenuEntry, currentSubSection: string) {
    if (currentSubSection) {
      const split = section.path.split("/");
      const result = split.includes(sanitizeSelfHosted(currentSubSection));
      return result;
    } else {
      return /\/docs$/.test(section.path);
    }
  }

  $: isActiveSubSection = findSubSection(menuItem, $docsCurrentSubsectionStore);
</script>

<style lang="postcss">
  @media (max-width: 1490px) {
    .link-container :global(a) {
      @apply flex-wrap;
    }
  }
</style>

<li class="flex flex-row items-center" data-analytics={`{"context":"submenu"}`}>
  <div class="text-sm leading-6">
    <div class="link-container">
      <MenuLink
        class="
          {isActiveSubSection ? 'text-black dark:text-white font-semibold' : ''}
          inline-flex items-center -ml-px pl-3 border-l border-transparent dark:hover:border-divider-light hover:border-light-black overflow-hidden
        "
        href={menuItem.path}
      >
        <span class={isLong ? "whitespace-nowrap mr-1 2xl:mr-0" : ""}>
          {menuItem.title}
        </span>
        {#if menuItem.status}
          <Pill
            text={menuItem.status}
            variant={getVariantFromStatus(menuItem.status)}
            class={isLong ? "ml-0 mt-0.5 2xl:ml-1.5 2xl:mt-0" : "ml-1.5"}
            tight={isLong}
          />
        {/if}
      </MenuLink>
    </div>
    {#if menuItem.subMenu && menuItem.subMenu.length > 0 && isActiveSubSection}
      <ul class="mt-2 space-y-6 lg:space-y-2 border-divider leading-6">
        {#each menuItem.subMenu as subsub}
          <li data-analytics={`{"context":"submenu"}`}>
            <MenuLink subMenu={true} href={subsub.path}>
              {subsub.title}
              {#if subsub.status}
                <Pill
                  text={subsub.status}
                  variant={getVariantFromStatus(subsub.status)}
                  class="ml-1.5"
                />
              {/if}
            </MenuLink>
          </li>
        {/each}
      </ul>
    {/if}
  </div>
</li>
