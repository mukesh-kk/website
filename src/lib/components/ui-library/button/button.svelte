<script lang="ts">
  import Loader from "$lib/components/loader.svelte";
  import { current_component } from "svelte/internal";
  import { forwardEventsBuilder } from "../utils/eventforwarder";
  import type { ButtonSizes, ButtonVariations } from "./button";
  let className: string = "";
  export { className as class };
  export let size: ButtonSizes = "medium";
  export let variant: ButtonVariations;
  export let disabled: boolean = false;
  export let isLoading: boolean = false;

  const classMap = {
    primary:
      "bg-primary text-important dark:text-black hover:bg-quaternary focus:bg-quaternary",
    secondary:
      "text-black bg-salmon hover:bg-salmon-hover dark:text-black focus:bg-salmon-hover",
    tertiary:
      "bg-important dark:bg-primary text-white dark:text-black hover:text-white focus:text-white hover:bg-less-important focus:bg-less-important dark:hover:bg-quaternary dark:focus:bg-quaternary",
    cta: "text-black bg-sand-dark dark:bg-light-black dark:text-sand-dark hover:bg-sand-dark-hover focus:bg-sand-dark-hover hover:dark:bg-light-black-hover focus:dark:bg-light-black-hover",
    gray: "bg-sand-dark dark:bg-light-black text-important dark:text-important hover:bg-sand-dark-hover focus:bg-sand-dark-hover focus:dark:bg-light-black-hover hover:text-important focus:text-important dark:hover:bg-light-black-hover",
    white:
      "bg-card dark:bg-light-black text-important dark:text-important hover:bg-white focus:bg-white hover:text-important focus:text-important dark:hover:bg-light-black-hover dark:focus:bg-light-black-hover",
    disabled: "pointer-events-none text-body bg-sand-dark",
    medium: "py-2 px-6 text-btn-small leading-4 rounded-xl",
    large: "py-3 px-8 text-p-medium leading-[1.25] min-w-[10rem] rounded-2xl",
    normal: "py-2.5 px-x-small text-lg rounded-2xl",
    small: "py-1 px-4 text-p-xsmall rounded-xl",
    unstyled: "",
  };

  const forwardEvents = forwardEventsBuilder(current_component);
</script>

<style lang="postcss">
  .loading {
    @apply relative text-transparent select-none !important;
  }
</style>

<button
  use:forwardEvents
  {disabled}
  class:disabled
  class:loading={isLoading}
  class="
    transition-all
    duration-200
    delay-[50ms]
    inline-block
    text-center
    shadow-light
    {variant !== 'gray' ? 'dark:shadow-none' : 'dark:shadow-slight'}
    font-semibold
    whitespace-nowrap
    bg-none
    text-black
    {classMap[variant]}
    {classMap[size]}
    {className}
    {disabled ? classMap.disabled : ''}
  "
  {...$$restProps}
>
  <slot name="image" />
  <slot />
  {#if isLoading}
    <Loader
      isPositionedCenter={true}
      height={size === "medium" ? 16 : undefined}
      width={size === "medium" ? 16 : undefined}
      borderWidth={size === "medium" ? 2 : undefined}
    />
  {/if}
</button>
