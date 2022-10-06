<script lang="ts">
  // Components
  import MobileMenuTopics from "./topics.svelte";
  import MobileMenuSubMenu from "./sub-menu.svelte";

  // States
  import topicsState from "../states/topics-state";

  import docsCurrentSectionStore from "$lib/stores/docs-current-section";
  import EditInGitpod from "../edit-in-gitpod.svelte";
  import docsCurrentSubsectionStore from "$lib/stores/docs-current-subsection";
  import { sanitizeSelfHosted } from "$lib/utils/helpers";
  import type { MenuEntry } from "$lib/types/menu-entry";
  import { navigating } from "$app/stores";
  export let MENU: MenuEntry[];

  $: if ($navigating) {
    $topicsState = false;
  }
  $: currentSection = MENU.find(({ path }) =>
    $docsCurrentSectionStore
      ? path.indexOf(sanitizeSelfHosted($docsCurrentSectionStore)) >= 0
      : /\/docs$/.test(path)
  );

  function findSubSection(section: any[], currentSubSection: string) {
    const activeSection = section.find(({ path }: { path: string }) => {
      if (currentSubSection) {
        const split: string[] = path.split("/");
        const result = split.includes(sanitizeSelfHosted(currentSubSection));
        return result;
      } else {
        return /\/docs$/.test(path);
      }
    });
    return activeSection;
  }

  $: subSection = currentSection?.subMenu
    ? findSubSection(currentSection.subMenu, $docsCurrentSubsectionStore)
    : false;
</script>

<div class="mobile-menu mb-10 lg:hidden">
  {#if $topicsState}
    <MobileMenuTopics {MENU} />
  {:else}
    <MobileMenuSubMenu {currentSection} />
    {#if subSection}
      <MobileMenuSubMenu
        displayNavigation={false}
        currentSection={subSection}
      />
    {/if}
  {/if}
  <div class="mt-4">
    <EditInGitpod renderedOn="mobile" />
  </div>
</div>
