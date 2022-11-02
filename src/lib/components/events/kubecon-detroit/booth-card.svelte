<script lang="ts">
  import Card from "$lib/components/ui-library/card/card.svelte";
  import Calendar from "$lib/components/svgs/webinars/calendar.svelte";
  import Clock from "$lib/components/svgs/webinars/clock.svelte";
</script>

<Card
  class="flex flex-col shadow-normal py-small justify-between md:p-x-large px-xx-small"
  size="medium"
>
  <div class="grid grid-cols-1 lg:grid-cols-2 gap-small lg:gap-xxx-large">
    <img
      class="w-full hidden lg:block mx-auto max-w-md md:max-w-lg dark:hidden"
      alt="JetBrains’ IDEs within Gitpod"
      src="/images/jetbrains-space/gitpod-jetbrains.png"
    />
    <img
      class="w-full hidden mx-auto max-w-md md:max-w-lg dark:lg:block"
      alt="JetBrains’ IDEs within Gitpod"
      src="/images/jetbrains-space/gitpod-jetbrains-dark.png"
    />
    <div class="flex flex-col items-centers justify-center">
      <h3 class="h3 !mb-micro md:!mb-x-small">JetBrains 🤝 Gitpod demo</h3>
      <div class="flex items-center mb-micro">
        <Calendar class="h-7 w-7 mr-micro" />
        <span class="text-p-large">Wednesday - Thursday, October 26-27</span>
      </div>
      <div class="flex items-center">
        <Clock class="h-7 w-7 mr-micro" />
        <span class="text-p-large">2pm - 3pm</span>
      </div>
      <p class="text-large my-x-small max-w-[595px]">
        Join Ernst Haagsman from JetBrains at our booth who will demo how the
        Gitpod x JetBrains integration works with a Java-based project as an
        example.
      </p>
    </div>
  </div>
</Card>
