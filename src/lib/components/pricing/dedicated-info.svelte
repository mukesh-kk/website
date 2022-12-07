<script lang="ts">
  import CalloutCard from "../card/callout-card.svelte";
</script>

<CalloutCard class="text-black text-p-small max-w-2xl gap-micro mx-auto">
  <div
    class="px-[12px] py-[2px] bg-black text-xs font-semibold text-white mb-micro inline-block rounded-lg"
  >
    Coming soon
  </div>
  <p>
    <span class="font-bold">Gitpod Dedicated</span><br />
    New offering for an isolated, single-tenant installation managed by Gitpod.
  </p>
  <br />
  <ul class="list-disc list-outside pl-micro">
    <li>
      Get a private, dedicated instance of Gitpod - ideal for large companies
      with high security and compliance requirements
    </li>
    <li>Set up private networking connections to your development resources</li>
  </ul>
  <br />
  ->
  <a
    sveltekit:prefetch
    class="mt-macro !underline !text-black transition-all duration-200 delay-[50ms] hover:!decoration-transparent"
    href="/dedicated"
  >
    Sign up for waitlist</a
  >
</CalloutCard>
