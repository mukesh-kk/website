<script lang="ts">
  import type { ChangelogEntry as ChangelogEntryType } from "$lib/types/changelog-entry";
  import { stringToBeautifiedFragment } from "$lib/utils/helpers";
  export let timelineItem: ChangelogEntryType;

  $: formattedDate = new Intl.DateTimeFormat().format(
    new Date(timelineItem.date)
  );
  $: changelogUri = stringToBeautifiedFragment(timelineItem.title);
</script>

<div class="flex relative pb-12 ">
  <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
    <div class="h-full w-1 bg-sand-dark dark:bg-sub pointer-events-none" />
  </div>
  <div
    class="flex-shrink-0 w-6 h-6 rounded-full bg-sand-dark dark:bg-sub inline-flex items-center justify-center text-white relative z-10"
  />
  <div class="flex-grow pl-4 md:h-36">
    <div class="mb-2">
      {formattedDate}
    </div>
    <a
      class=" hover:underline font-semibold title-font text-lg text-important mb-1  text-p-medium"
      href={`/changelog/${changelogUri}`}
    >
      {timelineItem.title}
    </a>
    <p class="rounded-2xl text-p-medium">
      {@html timelineItem.excerpt}
    </p>
  </div>
</div>
