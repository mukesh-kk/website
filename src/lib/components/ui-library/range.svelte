<script lang="ts">
  let className = "";
  export { className as class };
  export let id: string = "";
  export let min: number;
  export let max: number;
  export let step: number;
  export let value: number;
</script>

<style lang="postcss">
  input {
    @apply w-full h-[5px] bg-divider outline-none active:cursor-grabbing transition-all duration-200;
    -webkit-appearance: none;
  }

  input::-webkit-slider-thumb {
    -webkit-appearance: none; /* Override default look */
    @apply w-[28px] h-[28px] rounded-full bg-gitpod-kumquat-gradient border-none;
  }

  input::-moz-range-thumb {
    @apply w-[28px] h-[28px] rounded-full bg-gitpod-kumquat-gradient border-none;
  }
</style>

<input
  class={className}
  type="range"
  bind:value
  {min}
  {max}
  {step}
  {id}
  {...$$restProps}
/>
