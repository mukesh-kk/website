<script lang="ts">
  import Section from "../../section.svelte";
  import LaunchExampleWorkspace from "./launch-example-workspace.svelte";
  import LinkGitRepository from "./link-git-repository.svelte";
  import Card from "$lib/components/ui-library/card";

  let checked: boolean = false;
</script>

<Section id="get-started" class="pt-20">
  <h2 class="!mb-x-small text-center text-h2">Get started now</h2>
  <div
    class="cards-container flex flex-col lg:flex-row max-w-[600px] lg:max-w-none gap-4 mx-auto"
    class:justify-center={checked}
    class:justify-between={!checked}
  >
    <Card
      class="shadow-normal p-xx-small sm:py-small basis-[50%] sm:px-x-small xl:p-medium text-center"
      size="small"
    >
      <LinkGitRepository />
    </Card>
    <Card
      class="shadow-normal p-xx-small sm:py-small  basis-[50%] sm:px-x-small xl:p-medium text-center"
      size="small"
    >
      <LaunchExampleWorkspace />
    </Card>
  </div>
</Section>
