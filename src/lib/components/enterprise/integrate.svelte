<script lang="ts">
  import SectionCommon from "../section-common.svelte";
  import VerticalFeature from "$lib/components/vertical-feature.svelte";
  import type { verticalFeature } from "../../types/feature";
  export let features: verticalFeature[];
</script>

<SectionCommon
  title="Integrate, don’t dictate"
  text="Gitpod is a fast, resource-efficient, open-source platform that integrates with your individual stack."
  textClassNames="max-w-3xl mx-auto"
>
  <div slot="content" class="mt-small flex justify-center gap-micro flex-wrap">
    {#each features as feature}
      <VerticalFeature verticalFeatureData={feature} />
    {/each}
  </div>
</SectionCommon>
