<script lang="ts">
  import Section from "$lib/components/section.svelte";
  import Quote from "$lib/components/events/kubecon-detroit/quote.svelte";
  import type { Testimonial } from "$lib/types/testimonial";

  const quotes: Testimonial[] = [
    {
      name: "Gitpod",
      org: "gitpod",
      img: "/images/events/gitpod-1.jpg",
      text: "Team Gitpod at #KubeConEU! We’re here all day - stop by and say hello 🧡🍊 <br/><br/> @michaelar1ng @atduarte @aledbf @tarrooon @csweichel @paulienuh  @ArthurSilvaSens",
      avatar: "gitpod.jpg",
    },
    {
      name: "Pauline P. Narvas ⭐",
      org: "paulienuh",
      img: "/images/events/paulienuh-1.jpg",
      text: "🦊+🍊=🧡<br/>I’m so happy to finally have met some of our friends from @gitlab 🥰 <br /><br />@john_cogs @olearycrew @dnsmichi, thank you for hanging out at our @gitpod booth! 🧡<br /><br />#KubeConEU",
      avatar: "paulienuh.jpg",
    },
    {
      name: "Gitpod",
      org: "gitpod",
      img: "/images/events/gitpod-2.jpg",
      text: "Attendees at #KubeConEU 🇪🇸  We’re giving away a number of swag boxes 🍊<br/>For a chance to win one of our exclusive swag boxes, tell us the biggest friction you've faced when onboarding to a new company! 👀<br /><br />We’ll tweet the lucky winners ✨",
      avatar: "gitpod.jpg",
    },
  ];
</script>

<Section class="flex justify-center w-full">
  <div>
    <div class="mb-micro md:mb-small">
      <h2 class="text-center h2 mb-macro md:mb-micro">
        A look back at previous KubeCons
      </h2>

      <p class="text-large text-center mx-auto">
        Here are some of great memories from our time at previous KubeCons! 🧡
      </p>
    </div>
    <div class="w-full flex justify-center">
      <div class="flex gap-micro flex-wrap justify-center">
        {#each quotes as quote}
          <Quote {quote} />
        {/each}
      </div>
    </div>
  </div>
</Section>
