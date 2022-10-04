<script lang="ts">
  import { isMac } from "$lib/utils/helpers";

  let slotData: HTMLSpanElement;
  let keys: string;
  $: {
    if (slotData) {
      keys = slotData.innerText
        .trim()
        .split("+")
        .map((key) => key.trim())
        .map((key) => {
          switch (key) {
            case "AltOption":
              return `<kbd title="Use ⌥ (Option) on macOS and Alt on Windows / Linux">${
                isMac() ? "⌥" : "Alt"
              }</kbd>`;
            case "CtrlCmd":
              return `<kbd title="Use ⌘ (Command) on macOS and Ctrl on Windows / Linux">${
                isMac() ? "⌘" : "Ctrl"
              }</kbd>`;
            default:
              return `<kbd>${key}</kbd>`;
          }
        })
        .join(" + ");
    }
  }
</script>

<span>
  <span bind:this={slotData} style="display: none">
    <slot />
  </span>
  <kbd>
    {#if keys}
      {@html keys}
    {/if}
  </kbd>
</span>
