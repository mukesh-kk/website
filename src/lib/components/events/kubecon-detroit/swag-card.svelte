<script lang="ts">
  import Section from "$lib/components/section.svelte";
  import Card from "$lib/components/ui-library/card/card.svelte";
</script>

<Section class="flex justify-center w-full">
  <Card
    size="medium"
    class="flex items-center max-w-3xl mx-auto px-xx-small py-small md:px-small md:py-medium gap-medium shadow-normal"
  >
    <img
      src="/images/team/plant.png"
      alt="Plant"
      class="hidden dark:hidden md:block w-36"
    />
    <img
      src="/images/team/plant-dark.png"
      alt="Plant"
      class="hidden dark:md:block w-44"
    />
    <div>
      <h3 class="h4">Get your hands on some swag! 🍊</h3>
      <p class="mb-micro">
        For a chance to win one of our Gitpod fan boxes, tweet at us (@gitpod)
        about the best DevX you’ve ever experienced. There will be extra points
        for tweets with photos by our booth if you’re with us onsite. We’ll pick
        our favourites and send you a link to redeem your swag box 📦 📦 📦
      </p>
    </div>
  </Card>
</Section>
