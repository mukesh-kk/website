<script lang="ts">
  import type { FAQ } from "$lib/types/faq";

  export let faq: FAQ;

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [],
  };

  faq.items.forEach(({ title, content }) => {
    structuredData.mainEntity.push({
      "@type": "Question",
      name: title,
      acceptedAnswer: {
        "@type": "Answer",
        text: content,
      },
    });
  });

  // Thanks to https://github.com/sveltejs/svelte/issues/5292#issuecomment-787743573
  const html = `<${""}script type="application/ld+json">${JSON.stringify(
    structuredData
  )}</${""}script>`;
</script>

{@html html}
