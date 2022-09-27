<script lang="ts">
  import Section from "../section.svelte";
  import Card from "$lib/components/ui-library/card";

  let className: string = "";

  export { className as class };

  let text =
    "As Alice automates the configuration setup by using Gitpod she is ready to code within seconds, while it can take up to days for Bob.";
</script>

<Card size="medium" class="shadow-normal max-w-lg md:max-w-6xl mx-auto">
  <Section
    class="flex flex-col py-small px-xx-small sm:px-small md:p-0 md:flex-row items-center  {className}"
  >
    <div class="p-0 md:pl-small lgx:pl-large lgx:py-0 sm:min-w-[350px]">
      <h3 class="h3">Ready within seconds when working in the cloud</h3>
      <p class="text-large">
        {text}
      </p>
    </div>
    <div class="pt-micro md:px-small md:py-x-small max-w-xl lgx:max-w-2xl">
      <img
        class="hidden md:block dark:hidden"
        src="/images/local-development/comparison.png"
        alt={text}
      />
      <img
        class="hidden dark:md:block"
        src="/images/local-development/comparison-dark.png"
        alt={text}
      />
      <img
        class="md:hidden dark:hidden max-h-96 mx-auto"
        src="/images/local-development/comparison-mobile.png"
        alt={text}
      />
      <img
        class="hidden dark:md:hidden dark:block max-h-96 mx-auto"
        src="/images/local-development/comparison-mobile-dark.png"
        alt={text}
      />
    </div>
  </Section>
</Card>
