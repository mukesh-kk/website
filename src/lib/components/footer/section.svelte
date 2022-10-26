<script lang="ts">
  export let title: string;
</script>

<style lang="postcss">
  ul {
    @media (max-width: 500px) {
      flex: 0 0 34%;
    }
  }
</style>

<ul class="min-w-min mb-xx-small space-y-2.5 md:mb-0 w-36">
  <li class="font-semibold text-important">{title}</li>
  <slot />
</ul>
