<script lang="ts">
  export let list: string[];
  export let textClassNames: string = "";
</script>

<style lang="postcss">
  ul {
    text-align: left;
  }

  li::before {
    content: url("/tick.svg");
    @apply block h-6 w-6 mr-micro;
    flex: 0 0 1.5rem;
  }
</style>

<ul class="space-y-3 mt-micro">
  {#each list as item}
    <li class="flex {textClassNames}">{@html item}</li>
  {/each}
</ul>
