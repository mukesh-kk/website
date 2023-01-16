<script lang="ts">
  import { perks } from "$lib/contents/careers";
</script>

<section class="max-w-3xl mt-medium lg:mt-xx-large mx-auto">
  <h2 class="h3 md:!mb-xx-small">Benefits</h2>
  <div class="grid grid-cols-1 gap-y-micro gap-x-xx-small md:grid-cols-2">
    {#each perks as { emoji, text }}
      <div
        class="bg-card py-[0.625rem] flex items-center px-micro rounded-2xl dark:bg-light-black text-important"
      >
        <span class="mr-macro w-7 flex-shrink-0 text-center">{emoji}</span>
        {text}
      </div>
    {/each}
  </div>
</section>
