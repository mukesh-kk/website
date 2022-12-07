<script lang="ts">
  import Card from "$lib/components/ui-library/card";
  export let webinar: {
    isInPast: boolean;
    text: string;
    image: string;
    alt: string;
    href: string;
  };
</script>

<a sveltekit:prefetch class="no-underline" href={webinar.href}>
  <Card
    size="small"
    class="p-xx-small hover:shadow-normal transition-all duration-200 delay-[50ms] flex flex-col overflow-hidden w-full h-full max-w-sm"
  >
    <div class="-mt-xx-small -mx-xx-small">
      <img
        class="w-full h-full object-cover"
        src={webinar.image}
        alt={webinar.alt}
      />
    </div>
    <div class="-mx-xx-small h-full mt-[2.5rem]">
      <div class="px-xx-small flex h-full flex-col justify-between">
        <p class="text-p-medium text-body">
          {@html webinar.text}
        </p>
        <div>
          <div
            class="mt-micro  transition-all duration-200 delay-[50ms] inline-block py-2 px-6 text-btn-small leading-4 rounded-xl font-semibold whitespace-nowrap 
              {webinar.isInPast
              ? 'text-black bg-sand-dark dark:bg-light-black dark:text-sand-dark'
              : 'bg-primary text-important dark:text-black'}"
          >
            <p>{webinar.isInPast ? "Watch recording" : "Sign up now"}</p>
          </div>
        </div>
      </div>
    </div>
  </Card>
</a>
