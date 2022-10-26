<script lang="ts">
  import Header from "$lib/components/header.svelte";
  import Pill from "$lib/components/pill.svelte";
  import Calendar from "$lib/components/svgs/webinars/calendar.svelte";
  import Location from "$lib/components/svgs/events/location.svelte";
  export let title: string,
    label: string,
    date: string,
    location: string,
    description: string;

  let className: string = "";
  export { className as class };
</script>

<Header
  class={className}
  {title}
  centered={false}
  textAlign="left"
  fullWidth={true}
>
  <Pill text={label} class="mb-3" slot="top" />
  <div slot="content" class="text-large mt-x-small">
    <div class="flex items-center mb-micro">
      <Calendar class="h-7 w-7 mr-micro" />
      {date}
    </div>
    <div class="flex items-center">
      <Location class="h-7 w-7 mr-micro" />
      {location}
    </div>
    <p class="text-large mt-x-small max-w-[595px]">
      {description}
    </p>
  </div>
</Header>
