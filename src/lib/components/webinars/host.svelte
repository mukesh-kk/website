<script lang="ts">
  import Card from "../ui-library/card/card.svelte";
  import type { Host } from "$lib/types/host";
  import GradientStrokeAvatar from "../gradient-stroke-avatar.svelte";

  export let host: Host;
  const { avatar, name, jobTitle, companyLogo, text } = host;
</script>

<Card size="small" background="white" class="max-w-[368px] p-x-small">
  <div class="flex mb-x-small">
    <div class="mr-micro">
      <GradientStrokeAvatar image={avatar} />
    </div>
    <div>
      <h3 class="text-base mb-0">{name}</h3>
      <p class="text-base mb-macro">{jobTitle}</p>
      <svelte:component this={companyLogo.component} {...companyLogo.props} />
    </div>
  </div>
  <p>{text}</p>
</Card>
