<script context="module">
  export const prerender = true;
</script>

<script lang="ts">
  import Secure from "$lib/components/security/secure.svelte";
  import Program from "$lib/components/security/program.svelte";
  import CallToAction from "$lib/components/security/call-to-action.svelte";
  import Report from "$lib/components/security/report.svelte";
  import OpenGraph from "$lib/components/open-graph.svelte";
  import UsedBy from "$lib/components/index/used-by.svelte";
  import Header from "$lib/components/header.svelte";
  import LinkButton from "$lib/components/ui-library/link-button";
  import Transparency from "$lib/components/security/transparency-is-key.svelte";
</script>

<OpenGraph
  data={{
    description:
      "Gitpod is secure and trusted by over 750k developers and companies that are movingtheir dev environments to the cloud.",
    title: "Security at Gitpod",
  }}
/>

<Header
  title="Security at Gitpod"
  text="Gitpod is trusted by over 750k developers and companies that are moving
  their dev environments to the cloud."
  textClassNames="text-large max-w-2xl mx-auto mb-x-small"
  tight={true}
>
  <div slot="content">
    <LinkButton variant="primary" size="medium" href="#program"
      >View security program</LinkButton
    >
  </div>
</Header>

<UsedBy
  title="Trusted by developer led companies"
  class="py-small"
  style="margin-top: 0"
/>
<Secure />
<Transparency />
<div id="program">
  <Program />
</div>
<CallToAction />
<Report />
