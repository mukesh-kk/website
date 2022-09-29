<script lang="ts">
  import { current_component } from "svelte/internal";
  import { forwardEventsBuilder } from "../utils/eventforwarder";
  import type { ButtonSizes, ButtonVariations } from "./link-button";

  let className: string = "";
  export { className as class };
  export let variant: ButtonVariations;
  export let size: ButtonSizes = "medium";
  export let disabled: boolean = false;
  export let href: string;
  export let textAlign: "left" | "center" = "center";

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

<a
  use:forwardEvents
  {href}
  {disabled}
  class:disabled
  class="
    transition-all
    duration-200
    delay-[50ms]
    inline-block
    shadow-light
    {variant !== 'gray' ? 'dark:shadow-none' : 'dark:shadow-slight'}
    font-semibold
    whitespace-nowrap
    bg-none
    {classMap[variant]}
    {classMap[size]}
    {className}
    {disabled ? classMap.disabled : ''}
  "
  sveltekit:prefetch
  class:text-center={textAlign === "center"}
  class:text-left={textAlign === "left"}
  target={href.includes("https://") ? "_blank" : ""}
  {...$$restProps}
>
  <slot name="image" />
  <slot />
</a>
