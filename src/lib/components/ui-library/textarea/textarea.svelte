<script lang="ts">
  export let value: string;
  let className: string = "";
  export let name: string = "";
  export let label: string = "";
  export let element: HTMLElement = null;
  export let hasError: boolean = false;
  export let id: string;
  //TODO ADD Eventforwarder
  export { className as class };
</script>

{#if label}
  <label
    class="text-body cursor-pointer block mb-2 {hasError
      ? '!text-error !border-error'
      : ''}"
    for={id}>{@html label}</label
  >
{/if}
<textarea
  {id}
  on:change
  bind:value
  bind:this={element}
  class="whitespace-pre-wrap resize-none bg-transparent text-important box-border w-full rounded-lg py-2 px-4 border-[1px] border-divider {hasError
    ? '!text-error !border-error'
    : ''} {className}"
  {...$$restProps}
/>
{#if hasError}
  <legend
    class="text-xs block mt-1 mb-2 {hasError
      ? '!text-error !border-error'
      : ''}"
  >
    Please fill out the {name ? name : ""} field
  </legend>
{/if}
