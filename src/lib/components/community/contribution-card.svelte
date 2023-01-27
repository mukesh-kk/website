<script lang="ts">
  import type { ContentBadge, ContentCard } from "$lib/types/community";
  import Pill from "../pill.svelte";

  export let contentCard: ContentCard;

  const determinePillColor = (
    badge: ContentBadge
  ): "pink" | "orange" | "gray" | "violet" => {
    switch (badge) {
      case "Community office hours":
        return "orange";

      case "Content":
        return "pink";

      case "Discord contribution":
        return "violet";

      case "Open Source":
      default:
        return "orange";
    }
  };
</script>

<div
  class="bg-sand-dark h-full flex justify-between flex-col dark:bg-card rounded-2xl max-w-[400px] p-xx-small"
>
  <div>
    <Pill
      class="mb-micro"
      variant={determinePillColor(contentCard.badge)}
      text={contentCard.badge}
    />
    <h3 class="h4">{contentCard.title}</h3>
    <p>{@html contentCard.text}</p>
    {#if contentCard.link}
      <br />
      <a
        target={contentCard.link.href.startsWith("https://") ? "_blank" : ""}
        href={contentCard.link.href}>{contentCard.link.text}</a
      >
    {/if}
  </div>
  <p class="text-important mt-xx-small font-bold">{contentCard.contributor}</p>
</div>
