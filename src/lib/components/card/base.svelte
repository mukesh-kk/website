<script lang="ts">
  import LinkButton from "$lib/components/ui-library/link-button";
  import Button from "$lib/components/ui-library/button";
  import { isAnExternalLink } from "$lib/utils/helpers";
  import type { Card } from "$lib/types/card.type";
  import Modal from "$lib/components/ui-library/modal";
  import type { ButtonSizes } from "../ui-library/button/button";
  let clazz = "";
  export { clazz as class };

  export let card: Card;
  const { title, text, link, icon, modal, transform } = card;
  const target = link && isAnExternalLink(link.href) ? "_blank" : undefined;
  export let headingLevel: "h3" | "h2" = "h3";
  export let titleClassNames: "h2" | "h3" | "h4" | "h5" = "h4";
  export let iconClassNames: string = "h-16 w-20";
  export let btnClassNames: string = "mt-x-small";
  export let variant: "primary" | "secondary" | "cta" = "cta";
  export let btnSize: ButtonSizes = "medium";
  export let styles: string = "";
  export let textAlign: "left" | "center" | "right" = "center";

  const alignmentMap = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
  };

  let isModalOpen: boolean = false;
</script>

<div
  class="flex flex-col justify-between w-full items-center text-center {clazz}"
  style={styles}
>
  <div>
    {#if icon && icon.src}
      <img
        src={icon.src}
        alt={icon.alt || title}
        class="{iconClassNames} mb-xx-small mx-auto"
        style="transform: {icon.transform || transform}"
      />
    {:else if icon}
      <div
        class="{iconClassNames} mb-xx-small flex justify-center"
        style="width: auto;"
      >
        <svelte:component
          this={icon}
          class="mx-auto {iconClassNames}"
          style="transform: {transform}"
        />
      </div>
    {/if}
    {#if title}
      {#if headingLevel === "h3"}
        <h3 class={titleClassNames}>{title}</h3>
      {:else}
        <h2 class={titleClassNames}>{title}</h2>
      {/if}
    {/if}
    <p class="{alignmentMap[textAlign]} mt-micro">{@html text}</p>
  </div>
  {#if link}
    <LinkButton
      href={link.href}
      {target}
      variant={link.variant || variant}
      size={link.btnSize || btnSize}
      class={btnClassNames}>{link.text}</LinkButton
    >
  {/if}
  {#if modal}
    <Button
      {variant}
      class={btnClassNames}
      on:click={() => (isModalOpen = true)}>{modal.btnText}</Button
    >
  {/if}
</div>

{#if modal}
  <Modal on:close={() => (isModalOpen = false)} isOpen={isModalOpen}>
    <svelte:component this={modal.modalContentComponent} />
  </Modal>
{/if}
