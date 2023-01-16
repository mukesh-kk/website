<script lang="ts">
  import Range from "$lib/components/ui-library/range.svelte";
  import Card from "$lib/components/ui-library/card/card.svelte";
  import DisplayResult from "./display-result.svelte";
  import Tooltip from "../../tooltip.svelte";

  let members: number = 1;
  let workspaceHours = 1;

  let largeWorkspace = 0;

  $: displayStandard = 100 - largeWorkspace;
</script>

<Card
  size="medium"
  class="flex flex-col md:flex-row shadow-normal overflow-hidden"
>
  <div
    class="w-full md:w-3/5 md:px-medium py-x-small px-x-small md:py-[5.5rem]"
  >
    <div class="flex-col flex gap-medium">
      <div class="relative">
        <label class="h5 text-important mb-small font-bold" for="members"
          >Total members</label
        >
        <Range
          id="members"
          class="w-full"
          min={1}
          max={100}
          bind:value={members}
          step={1}
        />
        <p class="absolute text-grey font-bold right-0 top-[50%] text-h6">
          <span class="text-important"
            >{members}{members === 100 ? "+" : ""}</span
          >
          member{members > 1 ? "s" : ""}
        </p>
      </div>
      <div class="relative">
        <label class="h5 font-bold mb-small text-important" for="hours"
          ><Tooltip
            class="flex items-center gap-macro"
            title="weekly hours worked with Gitpod per team member"
            >Weekly hours/member</Tooltip
          ></label
        >
        <Range
          id="hours"
          class="w-full"
          min={1}
          max={60}
          bind:value={workspaceHours}
          step={1}
        />
        <p class="absolute text-grey font-bold right-0 top-[50%] text-h6">
          <span class="text-important">{workspaceHours}</span>
          hour{workspaceHours > 1 ? "s" : ""}
        </p>
      </div>
      <div class="relative">
        <label class="h5 text-important mb-small font-bold" for="load"
          >Workspace load</label
        >
        <Range
          id="load"
          class="w-full"
          min={0}
          max={100}
          bind:value={largeWorkspace}
          step={10}
        />
        <div class="absolute text-right right-0 top-4">
          <p class="text-grey font-bold text-h6">
            <span class="text-important">{displayStandard}%</span>
            standard
          </p>
          <p class="text-grey font-bold text-h6">
            <span class="text-important">{largeWorkspace}%</span>
            large
          </p>
        </div>
        <div class="flex mt-micro justify-between">
          <p class="w-44 text-fine-print">
            <b>Standard</b><br /> 4 cores, 8GB RAM &<br /> 30GB storage
          </p>
          <p class="w-44 text-right text-fine-print">
            <b>Large</b><br /> 8 cores, 16GB RAM &<br /> 50GB storage
          </p>
        </div>
      </div>
    </div>
  </div>
  <div
    class="w-full md:w-2/5 m-[1px] md:rounded-r-5xl bg-sand-dark dark:bg-[#1A1712] md:px-medium py-x-small px-x-small md:py-[5.5rem]"
  >
    <DisplayResult
      {workspaceHours}
      largeWorkspaces={largeWorkspace}
      {members}
      standardWorkspaces={displayStandard}
    />
  </div>
</Card>
