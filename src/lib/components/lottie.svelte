<script lang="ts">
  import type { Lottie } from "$lib/types/lottie";

  import { onMount } from "svelte";

  export let lottie: Lottie;

  let player: HTMLElement;
  const { src, style, id } = lottie;

  const handleOnLoad = () => {
    // @ts-ignore
    LottieInteractivity.create({
      player: `#${id}`,
      mode: "scroll",
      actions: [
        {
          visibility: [0.25, 1.0],
          type: "play",
        },
      ],
    });
  };

  onMount(() => {
    player.addEventListener("load", handleOnLoad);

    return () => player.removeEventListener("load", handleOnLoad);
  });
</script>

<lottie-player
  {id}
  {src}
  bind:this={player}
  background="transparent"
  speed="1"
  {style}
  loop={false}
  autoplay
/>
