<script lang="ts">
  import Section from "../../section.svelte";
  import LaunchExampleWorkspace from "./launch-example-workspace.svelte";
  import LinkGitRepository from "./link-git-repository.svelte";
  import Card from "$lib/components/ui-library/card";
  import { getFeatureFlag } from "$lib/utils/feature-flag-provider";

  /* The exampleFlagValue variable stores the value of the home_example_launch_workspaces_card feature flag.
   * The getFeatureFlag() function retrieves the value of the specified feature flag.
   * The feature flag is set to false by default, but is overridden by the value of the feature flag stored in local storage.
   * The value of the feature flag is also set to the value of the exampleFlagValue variable.
   */

  let exampleFlagValue = getFeatureFlag(
    "home_example_launch_workspaces_card",
    false,
    (val) => (exampleFlagValue = val)
  );
</script>

<Section id="get-started" class="pt-20">
  <h2 class="!mb-x-small text-center text-h2">Get started for free</h2>
  <div
    class="cards-container flex flex-col lg:flex-row max-w-[600px] lg:max-w-none gap-4 mx-auto"
    class:justify-between={exampleFlagValue}
    class:justify-center={!exampleFlagValue}
  >
    <Card
      class="p-xx-small sm:py-small basis-[50%] sm:px-x-small xl:p-medium text-center"
      size="small"
    >
      <LinkGitRepository />
    </Card>

    {#if exampleFlagValue}
      <Card
        class="p-xx-small sm:py-small  basis-[50%] sm:px-x-small xl:p-medium text-center"
        size="small"
      >
        <LaunchExampleWorkspace />
      </Card>
    {/if}
  </div>
</Section>
