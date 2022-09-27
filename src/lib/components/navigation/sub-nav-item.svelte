<script lang="ts">
  export let navItem: { title: string; slug: string };
  export let active: boolean = false;
</script>

<a
  class:active
  id={navItem.slug}
  class="
    block border-l pl-4 -ml-px border-transparent dark:hover:border-divider-light hover:border-light-black
    {active ? 'border-current font-semibold !text-secondary' : ''}
  "
  href="#{navItem.slug}">{navItem.title}</a
>
