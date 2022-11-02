<script lang="ts">
  import HeaderDescription from "./header-description.svelte";
  import Card from "$lib/components/ui-library/card/card.svelte";
  import Section from "$lib/components/section.svelte";
</script>

<Section class="grid grid-cols-1 gap-x-small lg:grid-cols-2">
  <HeaderDescription
    class="!m-0"
    title="Meet us at KubeCon NA in&nbsp;Detroit"
    label="Conference"
    date="October 26-28"
    location="Detroit, USA"
    description="We'll be at Booth SU42. Come visit us in person or see us in our virtual booth online."
  />
  <div class="lg:flex hidden items-center justify-center">
    <Card
      size="medium"
      class="flex w-[560px] shadow-normal p-small md:py-large md:px-x-large items-center justify-center"
      ><img
        class="dark:hidden w-[400px]"
        alt="kubecon logo"
        src="/images/events/kubecon-logo.png"
      /><img
        alt="kubecon logo"
        class="hidden dark:block w-[400px]"
        src="/images/events/kubecon-logo-dark.png"
      /></Card
    >
  </div>
  <div class="lg:hidden flex items-center justify-start">
    <img
      class="dark:hidden w-48 "
      alt="kubecon logo"
      src="/images/events/kubecon-logo.png"
    /><img
      alt="kubecon logo"
      class="hidden w-48 dark:block"
      src="/images/events/kubecon-logo-dark.png"
    />
  </div>
</Section>
