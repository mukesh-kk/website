<script lang="ts">
  import docsCurrentSectionStore from "$lib/stores/docs-current-section";
  import MenuLink from "./menu-link.svelte";

  import type { MenuEntry } from "$lib/types/menu-entry";
  import MenuSubsection from "./menu-subsection.svelte";
  import Pill from "../pill.svelte";
  import {
    getVariantFromStatus,
    isLongDocsMenuEntry,
  } from "$lib/utils/helpers";

  export let menuItem: MenuEntry;

  let isLong: boolean = isLongDocsMenuEntry(menuItem);

  $: isActiveSection = $docsCurrentSectionStore
    ? menuItem.path.indexOf(
        /self-hosted\/\d\.\d\.\d/.test($docsCurrentSectionStore)
          ? $docsCurrentSectionStore.replace(/\d\.\d\.\d/, "latest")
          : $docsCurrentSectionStore
      ) >= 0
    : /\/docs\/?$/.test(menuItem.path);

  const highlightMenuItems = (
    isSectionHeader: boolean,
    isActiveSection: boolean
  ) => {
    const baseClass = "text-black dark:text-white";
    const highlightedClass = `${baseClass} font-semibold pt-5 block`;

    if (!isSectionHeader && !isActiveSection) {
      return "";
    }

    return isSectionHeader ? highlightedClass : baseClass;
  };
</script>

<li data-analytics={`{"position":"sidebar"}`}>
  <div class="pl-6 inline-block text-sm leading-6">
    <MenuLink
      class={highlightMenuItems(menuItem.isSectionHeader, isActiveSection)}
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
    {#if menuItem.subMenu?.length >= 1 && isActiveSection}
      <ul
        class="ml-2 mt-2 border-l space-y-6 lg:space-y-2 border-divider leading-6"
      >
        {#each menuItem.subMenu as sub}
          <MenuSubsection menuItem={sub} />
        {/each}
      </ul>
    {/if}
  </div>
</li>
