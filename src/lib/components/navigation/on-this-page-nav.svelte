<script lang="ts">
  import { docsMeta } from "$lib/stores/docs-meta";
  import type { DocsMeta } from "$lib/types/docs-meta";
  import { onMount } from "svelte";
  import SubNavItem from "./sub-nav-item.svelte";

  let scroll: number;
  let active: string;
  let h2: string;

  //check for markdown headers in docsMeta
  function checkHeaders(obj: DocsMeta) {
    if (obj.headings.length > 0) {
      return true;
    }
    return false;
  }

  function onScroll() {
    const navbarHeight = document.querySelector("nav")?.clientHeight + 20 || 0;
    const onThisPage = Array.from(document.querySelectorAll(".on-this-page a"));

    const pageAnchors = Array.from(
      document.querySelectorAll("span.header-anchor")
    );

    const sanitizedAnchors = pageAnchors.filter((anchor) =>
      onThisPage.some(
        (link) =>
          link.id === anchor.parentElement.getAttribute("href")?.split("#")[1]
      )
    );
    sanitizedAnchors.forEach((anchor, index) => {
      const nextAnchor = sanitizedAnchors[index + 1];

      const isFirstHeader = index === 0 && scroll === 0;
      const current =
        anchor.getBoundingClientRect().top + scroll - navbarHeight;

      const hasPassedCurrent = scroll >= current;
      const hasNotPassedNext =
        !nextAnchor ||
        scroll < nextAnchor.getBoundingClientRect().top + scroll - navbarHeight;

      const isActive = isFirstHeader || (hasPassedCurrent && hasNotPassedNext);
      if (isActive) {
        active = anchor.parentElement.getAttribute("href").split("#")[1];
        h2 = $docsMeta.headings.find((heading) => {
          if (heading.children.length > 0) {
            return JSON.stringify(heading.children).includes(active);
          }
          return false;
        })?.slug;
      }
    });
  }

  onMount(async () => {
    onScroll();
    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  });
</script>

<svelte:window bind:scrollY={scroll} />
{#if checkHeaders($docsMeta)}
  <div
    class="on-this-page max-h-[calc(100vh-6rem)] pb-[100px] overflow-auto text-sm"
  >
    <div class="flex gap-2 items-center">
      <div class="bg-secondary w-2 h-[2px]" />
      <div class="font-semibold text-important leading-6">On this Page</div>
    </div>
    <ul class="space-y-2">
      {#each $docsMeta.headings as heading}
        <li class="leading-6">
          <a
            id={heading.slug}
            class="
              no-underline 
              {h2 === heading.slug ? '!text-important font-semibold' : ''}
              {heading.slug === active
              ? 'border-current font-semibold !text-secondary'
              : ''}
            "
            href="#{heading.slug}">{heading.title}</a
          >
          {#if heading.children?.length > 0}
            <ul
              class="ml-2 mt-2 border-l space-y-6 lg:space-y-2 border-divider leading-6"
            >
              {#each heading.children as child}
                <li>
                  <SubNavItem
                    active={child.slug === active}
                    navItem={{ title: child.title, slug: child.slug }}
                  />
                </li>
              {/each}
            </ul>
          {/if}
        </li>
      {/each}
    </ul>
  </div>
{/if}
