<script lang="ts">
  import Section from "./section.svelte";
  import LinkButton from "$lib/components/ui-library/link-button";

  export let text: string;
  export let list: string[];
  export let link: { href: string; text: string };
  export let ulMaxWidth: string;
</script>

<Section class="text-center">
  <h2>Eligibility criteria</h2>
  <p class="text-large">
    {text}
  </p>
  <ul class="text-left mx-auto my-x-small" style="max-width: {ulMaxWidth}">
    {#each list as li}
      <li class="mb-micro flex">
        <span class="text-secondary mr-micro" aria-hidden="true">—</span>
        {li}
      </li>
    {/each}
  </ul>
  <LinkButton variant="primary" size="large" target="_blank" href={link.href}
    >{link.text}</LinkButton
  >
</Section>
