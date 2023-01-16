<script lang="ts">
  let className: string = "";

  export { className as class };
</script>

<div class="bg-tertiary p-xx-small rounded-2xl {className}">
  <slot />
</div>
