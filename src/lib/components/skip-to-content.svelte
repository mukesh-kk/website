<script>
  import LinkButton from "./ui-library/link-button/link-button.svelte";

  import { page } from "$app/stores";
  $: isADocsPage = $page.url.pathname.split("/")[1] === "docs";
</script>

<div>
  <LinkButton
    variant="gray"
    href={isADocsPage ? "#docs-content" : "#main-content"}
    class="absolute left-2.5 top-2.5 -translate-y-full -mt-2.5 focus:mt-0 focus:translate-y-0 border-2 border-solid border-black z-50 !shadow-none"
    >Skip to Content</LinkButton
  >
</div>
