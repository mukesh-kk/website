<script lang="ts">
  import Card from "$lib/components/ui-library/card";
  export let card: {
    image: string;
    details: {
      industry: string;
      plan: string;
      people: {
        title: string;
        text: string;
      };
      website: {
        href: string;
        text: string;
      };
    };
  };

  const { image, details } = card;
</script>

<Card size="small" class=" overflow-hidden max-w-xs sm:max-w-sm min-w-fit">
  <div
    class="h-60 bg-cover bg-center "
    style="background-image: url({image})"
  />
  <div
    class="text grid grid-cols-2 gap-y-xx-small gap-x-micro sm:gap-y-small p-xx-small sm:p-x-small"
  >
    <div class="w-[136px]">
      <p class="h5 text-important font-bold mb-macro">Industry</p>
      <p>{details.industry}</p>
    </div>
    <div class="w-[136px]">
      <p class="h5 text-important font-bold mb-macro">Plan & Delivery</p>
      <p>{details.plan}</p>
    </div>
    <div class="w-[136px]">
      <p class="h5 text-important font-bold mb-macro">{details.people.title}</p>
      <p>{details.people.text}</p>
    </div>
    <div class="w-[136px]">
      <p class="h5 text-important font-bold mb-macro">Website</p>
      <p>
        <a href={details.website.href} target="_blank">
          {details.website.text}
        </a>
      </p>
    </div>
  </div>
</Card>
