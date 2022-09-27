<script>
  import { teamImages } from "$lib/contents/team";
  import SectionCommon from "../section-common.svelte";
</script>

<SectionCommon
  title="Meet the team"
  text="We get to celebrate building deep bonds and great products with our amazing team during regular company offsites."
  textClassNames="max-w-3xl mx-auto"
>
  <div
    slot="content"
    class="grid grid-cols-3 gap-macro md:gap-micro mt-x-small md:mt-small"
  >
    {#each teamImages as { src, alt }}
      <img {src} {alt} class="rounded-3xl" />
    {/each}
  </div>
</SectionCommon>
