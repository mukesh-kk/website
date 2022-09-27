<script lang="ts">
  import { photos } from "$lib/contents/team";
  import SectionCommon from "../section-common.svelte";
</script>

<style lang="postcss">
  .wrapper {
    & > * {
      @apply max-w-lg min-w-[250px] sm:min-w-[300px] lg:min-w-[492px] bg-white rounded-2xl;
    }

    h3 {
      @apply p-macro sm:p-micro md:p-xx-small;
    }
  }
</style>

<SectionCommon
  title="Life at Gitpod"
  text="Have a sneak peak behind the scenes. This is how we work remotely."
  textClassNames="mb-small"
>
  <div slot="content">
    <div
      class="wrapper flex gap-xx-small md:gap-x-small mx-auto overflow-x-scroll overflow-y-hidden pb-small"
    >
      {#each photos as { src, alt }}
        <div class="stroked">
          <img {src} {alt} />
          <h3 class="h4">{alt}</h3>
        </div>
      {/each}
    </div>
  </div>
</SectionCommon>
