<script lang="ts">
  import Edit from "../svgs/edit.svelte";
  import Tooltip from "../tooltip.svelte";

  export let href: string;
</script>

<style lang="postcss">
  a {
    span {
      text-decoration-line: underline !important;
    }
    &:hover {
      span {
        text-decoration-color: #0000;
      }
    }
  }
</style>

<span class="prose my-small md:my-0">
  <a {href} target="_blank" rel="noopener noreferrer" class="text-xs">
    <Tooltip
      title="Found any issues or typos?<br />Feel free to request changes."
      class="inline-flex items-center"
    >
      <Edit class="inline-block my-0 mx-1 h-4 w-4" />
      <span class="mr-2"> request changes </span>
    </Tooltip>
  </a>
</span>
