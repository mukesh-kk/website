<script lang="ts">
  import type { AvailabilityItem as AvailabilityItemType } from "../../types/docs";

  export let availabilityItem: AvailabilityItemType;
</script>

<span
  class="text-sm ml-2 px-2 dark:text-dark-grey rounded-xl {availabilityItem.isSaas
    ? 'bg-tertiary'
    : 'bg-salmon'}"
>
  {availabilityItem.label}
</span>
