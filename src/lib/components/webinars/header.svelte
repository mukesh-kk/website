<script lang="ts">
  import Header from "../header.svelte";
  import Pill from "../pill.svelte";
  import Logo from "../svgs/logo.svelte";
  import Calendar from "../svgs/webinars/calendar.svelte";
  import Clock from "../svgs/webinars/clock.svelte";
  export let title: string,
    label: string,
    date: string,
    duration: string,
    webinarDescription: string;
</script>

<Header {title} centered={false} textAlign="left" fullWidth={true}>
  <Pill text={label} class="mb-3" slot="top" />
  <div slot="content" class="text-large my-x-small">
    <div class="flex items-center mb-micro">
      <Calendar class="h-7 w-7 mr-micro" />
      {date}
    </div>
    <div class="flex items-center">
      <Clock class="h-7 w-7 mr-micro" />
      {duration}
    </div>
    <p class="text-large my-x-small max-w-[595px]">
      {webinarDescription}
    </p>
    <div class="flex items-center gap-micro">
      <h2 class="h5">Hosted by</h2>
      <h2 class="h5"><Logo width="120" isDark={true} /></h2>
    </div>
  </div>
</Header>
