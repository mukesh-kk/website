<script>
  import { coreValues } from "$lib/contents/team";
  import Card from "../card/card.svelte";
  import SectionCommon from "../section-common.svelte";
  import LinkButton from "../ui-library/link-button/link-button.svelte";
</script>

<SectionCommon
  title="Our core values shape how we work"
  text="Guiding our products, services, and community, our core values are reflected in everything we do."
  textClassNames="max-w-5xl mx-auto"
>
  <div slot="content" class="flex flex-col items-center">
    <LinkButton
      href="/blog/gitpod-core-values"
      variant="cta"
      size="large"
      class="mt-x-small mb-small">Read post on core values</LinkButton
    >
    <div class="grid grid-cols-1 md:grid-cols-2 max-w-3xl gap-micro">
      {#each coreValues as card}
        <Card {card} />
      {/each}
    </div>
  </div>
</SectionCommon>
