<script lang="ts">
  import Pill from "$lib/components/pill.svelte";
  export let title: string;
  export let label: string;
  export let description: string;
</script>

<div>
  <Pill text={label} class="mb-3" />
  <h2 class="h1 !mb-micro md:!mb-x-small">{@html title}</h2>
  <div class="text-large">
    <p class="text-large max-w-[595px]">
      {description}
    </p>
  </div>
</div>
