<script lang="ts">
  import TalkCard from "./talk-card.svelte";
  import Section from "$lib/components/section.svelte";
</script>

<Section class="flex justify-center w-full">
  <div>
    <div class="mb-micro lg:mb-small">
      <h2 class="text-center h2 mb-macro md:mb-micro">Our KubeCon talks</h2>

      <p class="text-large text-center mx-auto">
        Hear from Gitpodders during our KubeCon talks onsite.
      </p>
    </div>
    <div class="grid gap-micro lg:gap-small grid-cols-1 lg:grid-cols-2">
      <TalkCard
        description="Many CNCF participants use bees as logos (e.g. eBPF, Cilium, GiantSwam, Honeycomb). This is no coincidence; the two worlds have more in common than you might think. <a href='https://kccncna2022.sched.com/event/182DK/kubernet-bees-how-bees-solve-problems-of-distributed-systems-simon-emms-christian-weichel-gitpod?iframe=no'>Read more</a>"
        date="Wednesday, October 26"
        href="https://kccncna2022.sched.com/event/182DK/kubernet-bees-how-bees-solve-problems-of-distributed-systems-simon-emms-christian-weichel-gitpod?iframe=no"
        duration="2:30pm - 3:05pm"
        people="MrSimonEmms, csweichel"
        title="Kubernet-Bees: How Bees Solve Problems Of Distributed Systems"
      />
      <TalkCard
        href="https://kccncna2022.sched.com/event/182JW/fast-image-pulls-using-ipfs-and-opportunistic-caching-christian-weichel-manuel-de-brito-fontes-gitpod?iframe=no"
        description="Image pull times pose a considerable challenge when optimising for fast container starts within Kubernetes, due to potentially large images or network topology, bandwidth and egress cost constraints. <a href='https://kccncna2022.sched.com/event/182JW/fast-image-pulls-using-ipfs-and-opportunistic-caching-christian-weichel-manuel-de-brito-fontes-gitpod?iframe=no'>Read more</a>"
        date="Friday, October 28"
        duration="11:55am - 12:30pm"
        people="csweichel, aledbf"
        title="Fast Image Pulls Using IPFS And Opportunistic Caching"
      />
    </div>
  </div>
</Section>
