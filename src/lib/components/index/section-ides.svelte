<script lang="ts">
  import { ides } from "$lib/contents/home";
  import Section from "../section.svelte";
  import Toggle from "../toggle.svelte";
  import IdeSwitcher from "./ide-switcher.svelte";
  import LinkButton from "$lib/components/ui-library/link-button";
  let selectedIde = "vscode";
  let ideType = "browser";
  let toggleChecked = false;
  let activeIdeName: string = "";

  $: if (toggleChecked) {
    ideType = "browser";
    selectedIde = "vscode";
    activeIdeName = "vscode";
  } else {
    ideType = "desktop";
    activeIdeName = "";
  }

  const getIdeByName = (name: string) => ides.find((ide) => ide.name === name);

  const handleIdeChange = (e: { detail: { text: string } }) => {
    const text = e.detail.text;
    if (getIdeByName(text).screenshots.desktop !== "") {
      selectedIde = e.detail.text;
    }
  };

  $: idetoRender = getIdeByName(selectedIde);
</script>

<Section>
  <div class="row">
    <h2 class="text-center">Your environment, your tools, your craft</h2>
    <div class="max-w-5xl mx-auto">
      <Toggle
        class="mt-x-small mb-macro"
        labelLeft="Desktop"
        labelRight="Browser"
        on:change={(e) => {
          ideType = "desktop";
          // @ts-ignore
          toggleChecked = e.currentTarget.checked;
        }}
        checked={toggleChecked}
        id="screenshot"
      />
      <div class="relative">
        <div class="py-micro md:pr-micro lg:px-xx-small">
          <img
            src="/images/index/{idetoRender.screenshots[ideType]}"
            alt={idetoRender.label}
            class="shadow-highlight rounded-lg"
          />
        </div>
        <IdeSwitcher
          on:message={handleIdeChange}
          {ides}
          activeByDefaultName="vscode"
          {ideType}
          {activeIdeName}
        />
      </div>
    </div>
    <div class="text-center m-auto">
      <h3 class="mt-medium md:mt-x-large">We adapt, so you don't need to</h3>
      <p class="text-large mt-xx-small mb-x-small mx-auto max-w-[638px]">
        Run a desktop or browser based version of VS Code or any JetBrains IDE
        and customise it to your individual needs - from themes to extensions,
        you have full control.
      </p>
      <LinkButton
        variant="primary"
        size="large"
        href="https://gitpod.io/workspaces/">Try now</LinkButton
      >
    </div>
  </div>
</Section>
