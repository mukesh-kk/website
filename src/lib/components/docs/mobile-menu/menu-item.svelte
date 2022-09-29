<script lang="ts">
  import Arrow from "$lib/components/svgs/arrow.svelte";

  export let href: string;
  export let onClick: svelte.JSX.MouseEventHandler<HTMLAnchorElement>;
  export let showIcon: boolean = false;
  export let isHeader: boolean = false;

  const highlightMenuItems = (isHeader: boolean) => {
    const baseClass = "flex-auto";
    const highlightedClass = `${baseClass} font-semibold text-black dark:text-white`;
    return isHeader ? highlightedClass : baseClass;
  };
</script>

<li class="mb-0">
  <a {href} class="flex min-h-13 items-center" on:click={onClick}>
    <div class={highlightMenuItems(isHeader)}><slot /></div>
    {#if showIcon}
      <div class="ml-4 flex-initial" aria-hidden="true">
        <Arrow class="-rotate-90" width="12" heightt="12" />
      </div>
    {/if}
  </a>
</li>
