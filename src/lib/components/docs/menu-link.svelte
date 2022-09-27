<script lang="ts">
  import { page } from "$app/stores";

  export let href: string;
  export let subMenu: boolean = false;
  let className: string = "";
  export { className as class };

  $: normalizedPath = /self-hosted\/\d\.\d\.\d/.test($page.url.pathname)
    ? $page.url.pathname.replace(/\d\.\d\.\d/, "latest")
    : $page.url.pathname;
  $: active = href === normalizedPath || href === `${normalizedPath}/`;
</script>

<a
  class="
    block border-l pl-4 -ml-px border-transparent dark:hover:border-divider-light hover:border-light-black {className}
    {subMenu ? 'pl-8' : ''}
  "
  style={active
    ? "color: var(--brand-ripe); border-color: currentColor; font-weight: 600"
    : ""}
  {href}
  sveltekit:prefetch
  {...$$props}><slot /></a
>
