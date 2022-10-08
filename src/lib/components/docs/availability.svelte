<script lang="ts">
  import AvailabilityItem from "./availability-item.svelte";
  import type { AvailabilityItem as AvailabilityItemType } from "$lib/types/docs";

  export let availablity: string[];
  const saasRegex = new RegExp(/^saas$/);
  const selfHostedRegex = new RegExp(/^self-hosted (v\d{4}.\d{2}(?:.\d{2})?)$/);

  const displayObject: AvailabilityItemType[] = availablity.map((item) => {
    if (saasRegex.test(item)) {
      return {
        isSaas: true,
        label: "Saas",
      };
    } else if (selfHostedRegex.test(item)) {
      const match = selfHostedRegex.exec(item)[1];
      return {
        isSaas: false,
        label: `Self-Hosted from ${match}`,
      };
    } else {
      console.error(
        `Please provide a valid Versionnumber: ${JSON.stringify(item)}`
      );
    }
  });
</script>

<span>
  {#each displayObject as tag}
    <AvailabilityItem availabilityItem={tag} />
  {/each}
</span>
