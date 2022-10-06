<script lang="ts">
  import Section from "../section.svelte";
  import ImageBox from "./image-box.svelte";
  import type { ImageBox as Image } from "$lib/types/image-box";

  const images: Image[] = [
    {
      src: "/images/media-kit/desktop-vscode.png",
      alt: "Desktop VS Code",
      text: "Desktop VS Code",
      btnText: "PNG",
    },
    {
      src: "/images/media-kit/browser-vscode.png",
      alt: "VS Code running in the browser",
      text: "VS Code running in the browser",
      btnText: "PNG",
    },
    {
      src: "/images/extension-activation/extension-screenshot.png",
      alt: "Gitpod Extension",
      text: "screenshot of the Gitpod browser extension within GitHub",
      btnText: "PNG",
    },
    {
      src: "/images/blog/gitlab-integration/gitpod-button-on-gitlab.png",
      alt: "Gitpod button on GitLab",
      text: "screenshot of the native Gitpod integration within GitLab",
      btnText: "PNG",
    },
    {
      src: "/images/gitpod-editor.jpg",
      alt: "Gitpod Light Theme",
      text: "light theme screenshot",
      btnText: "JPG",
      imgClass: "shadow-brand",
    },
  ];
</script>

<Section class="text-center">
  <h2 class="mb-small">Additional images</h2>
  <div class="flex justify-around flex-wrap">
    {#each images as image}
      <ImageBox {image} />
    {/each}
  </div>
</Section>
