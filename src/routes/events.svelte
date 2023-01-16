<script context="module">
  export const prerender = true;
</script>

<script lang="ts">
  import Hero from "$lib/components/events/landing-page/hero.svelte";
  import Webinars from "$lib/components/events/landing-page/webinars.svelte";
  import Conferences from "$lib/components/events/landing-page/conferences.svelte";
  import Explore from "$lib/components/explore.svelte";
</script>

<Hero
  title="Latest Events"
  text="Gitpod is heavily involved in workshops, webinars, and industry events focusing on remote development and developer experience."
  image={{
    isCut: false,
    src: "/images/events/skateboard.png",
    darkSrc: "/images/events/skateboard.png",
    alt: "Cartoon Skateboard",
  }}
/>

<Webinars />
<Conferences />

<Explore contents={{ title: "Try it out" }} />
