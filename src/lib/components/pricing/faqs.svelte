<script lang="ts">
  import Section from "../section.svelte";
  import Faqs from "../faqs/faqs.svelte";

  import { pricingFAQ } from "$lib/contents/pricing";
</script>

<Section>
  <Faqs faq={pricingFAQ} />
</Section>
