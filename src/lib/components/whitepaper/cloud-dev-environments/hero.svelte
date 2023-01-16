<script lang="ts">
  import Header from "$lib/components/header.svelte";
  import Pill from "$lib/components/pill.svelte";
  export let title: string;
  export let label: string;
  export let description: string;
</script>

<Header {title} centered={false} textAlign="left" fullWidth={true}>
  <Pill text={label} class="mb-3" slot="top" />
  <div slot="content" class="text-large">
    <p class="text-large max-w-[595px]">
      {description}
    </p>
  </div>
</Header>
