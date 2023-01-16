<script lang="ts">
  import Download from "$lib/components/whitepaper/cloud-dev-environments/download.svelte";
  import Section from "$lib/components/section.svelte";
  import WhitepaperInfo from "./whitepaper-info.svelte";
</script>

<Section class="flex items-center gap-small lg:gap-0 flex-wrap">
  <div class="w-full pr-x-small lg:w-1/2">
    <WhitepaperInfo
      description="Curious why many of the largest tech companies are adopting CDEs? Our whitepaper describes 9 measurable benefits of CDEs that are relevant to engineering leaders who want to remove friction from their teams and increase security."
      title="CDEs for enterprises"
      label="Whitepaper"
    />
  </div>
  <div class="w-full lg:w-1/2">
    <Download
      class="mx-auto lg:m-0"
      toType="cde-whitepaper"
      eventType="Whitepaper"
    />
  </div>
</Section>
