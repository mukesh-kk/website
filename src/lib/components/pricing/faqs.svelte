<script lang="ts">
  import Section from "../section.svelte";
  import Faqs from "../faqs/faqs.svelte";

  import { pricingFAQ, faqOldPlan } from "$lib/contents/pricing";
  import StructuredData from "../faqs/structured-data.svelte";
</script>

<Section>
  <Faqs useStructuredData={false} headlineClasses="!mb-micro" faq={pricingFAQ}>
    <p slot="subheading" class="text-p-large mb-x-small text-center">
      Find all the details of our flexible pricing in our docs.
    </p>
  </Faqs>

  <h3 class="h3 md:mt-xx-large mt-small !mb-micro md:!mb-x-small text-center">
    Existing customers on old pricing model
  </h3>
  <Faqs useStructuredData={false} faq={faqOldPlan} />

  <StructuredData
    faq={{
      headline: "Pricing FAQ",
      items: [...pricingFAQ.items, ...faqOldPlan.items],
    }}
  />
</Section>
