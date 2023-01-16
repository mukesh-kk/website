<script lang="ts">
  import { page } from "$app/stores";
  import Stories from "./stories.svelte";

  const recentPosts = $page.stuff.customers.slice(0, 4);
  $: recentCustomersWithoutCurrent = recentPosts
    .filter((customer: any) => $page.url.pathname.indexOf(customer.slug) === -1)
    .slice(0, 3)
    .filter((customer: any) => customer.availibility !== false);
</script>

<Stories
  title="More Customer Stories"
  customers={recentCustomersWithoutCurrent}
  class="max-w-4xl md:grid-cols-2 lg:px-9"
/>
