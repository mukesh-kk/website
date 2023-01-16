<script context="module" lang="ts">
  import type { Load } from "@sveltejs/kit";
  import { getCustomers } from "$lib/utils/content";

  export const load: Load = async () => {
    const customers = await getCustomers();
    return { stuff: { customers } };
  };
</script>

<slot />
