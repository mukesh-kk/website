<script lang="ts">
  let clazz = "";
  export { clazz as class };
  export let quote: string;
  export let author: { name: string; jobTitle: string } = null;
  export let type: "blog" | "" = "";
  import Card from "$lib/components/ui-library/card";

  const { name, jobTitle } = author || {};
</script>

<div>
  <Card
    size="medium"
    class="shadow-normal flex items-start relative text-left md:mx-auto py-x-small px-micro sm:p-small {clazz}"
  >
    <img
      src="/images/startups/kumquat-left.png"
      alt="Gitpod Kumquat"
      class="kumquat-left absolute hidden md:block h-16 lgx:h-32 lgx:w-36 top-24 -left-12 lgx:-left-24 -z-10"
    />
    <svg
      fill="none"
      class="h-8 w-12"
      viewBox="0 0 28 25"
      xmlns="http://www.w3.org/2000/svg"
      ><path
        d="M12.2.78C6.12 1.34.84 5.1.84 13.98V25.5h11.44V14.14H6.76v-1.68c0-4 2.72-6.16 5.44-6.88V.78Zm16.08 0c-6.08.56-11.36 4.32-11.36 13.2V25.5h11.44V14.14h-5.52v-1.68c0-4 2.72-6.16 5.44-6.88V.78Z"
        fill="var(--important)"
      /></svg
    >
    <div class="mt-x-small">
      <p
        class="h3 text-important font-bold {type === 'blog' &&
          'text-h5 mt-0 text-black'}"
      >
        {@html quote}”
      </p>
      <p class="mt-x-small">
        <span class="font-semibold text-important">{name},</span>
        {jobTitle}
      </p>
    </div>

    <img
      src="/images/startups/kumquat-right.png"
      alt="Gitpod Kumquat"
      class="kumquat-right absolute hidden md:block h-20 lgx:h-36 lgx:w-44 -right-16 lgx:-right-32 -z-10 bottom-0 lgx:-bottom-10"
    />
  </Card>
</div>
