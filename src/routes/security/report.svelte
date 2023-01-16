<script context="module">
  export const prerender = true;
</script>

<script>
  import Action from "$lib/components/security/action.svelte";
  import OpenGraph from "$lib/components/open-graph.svelte";
  import { thanksAction } from "$lib/contents/security";
  import Section from "$lib/components/section.svelte";
</script>

<style lang="postcss">
  :is(ol.toc, ul) > li::marker {
    @apply text-h3 font-bold;
  }

  ::marker {
    @apply text-secondary;
  }

  ul li {
    @apply relative mb-0;
  }

  ul li::before {
    @apply absolute text-secondary;
    content: "—";
    left: calc(var(--xx-small) * -1);
  }

  @media (min-width: 768px) {
    ul li::before {
      left: calc(var(--x-small) * -1);
    }
  }
  article :global() {
    --h1: 3.375rem;
    --h2: 3rem;
    --h3: 2rem;
    --h4: 1.75rem;
    --h5: 1.25rem;
    line-height: 1.75;
  }
  a {
    @apply underline;
  }
</style>

<OpenGraph
  data={{
    description: "Gitpod GmbH Security Vulnerability Disclosure Policy",
    title: "Security Disclosure Policy",
  }}
/>

<article class="max-w-[94vw] mt-20 mx-auto mb-8 leading-7 lg:w-[50rem]">
  <h1 class="h2 text-center">Security Vulnerability Disclosure Policy</h1>

  <h2 class="mx-0 my-8 h3">Introduction</h2>
  <p class="mb-4">
    Gitpod GmbH welcomes feedback from security researchers and the general
    public to help improve our security. If you believe you have discovered a
    vulnerability, privacy issue, exposed data, or other security issues in any
    of our assets, we want to hear from you. This policy outlines steps for
    reporting vulnerabilities to us, what we expect, what you can expect from
    us.
  </p>
  <h2 class="mx-0 my-8 h3">Systems in Scope</h2>
  <p class="mb-4">
    This policy applies to any digital assets owned, operated, or maintained by
    Gitpod GmbH:
  </p>
  <ul class="pl-xx-small md:pl-x-small space-y-4 mb-4">
    <li><code>io.gitpod.*</code></li>
    <li><code>com.gitpod-staging.*</code></li>
    <li><code>com.gitpod-dev.com.*</code></li>
  </ul>
  <h2 class="mx-0 my-8 h3">Out of Scope</h2>
  <ul class="pl-xx-small md:pl-x-small space-y-4 mb-4">
    <li>
      Assets or other equipment not owned by parties participating in this
      policy.
    </li>
  </ul>
  <p class="mb-4">
    Vulnerabilities discovered or suspected in out-of-scope systems should be
    reported to the appropriate vendor or applicable authority.
  </p>
  <h2 class="mx-0 my-8 h3">Our Commitments</h2>
  <p class="mb-4">
    When working with us, according to this policy, you can expect us to:
  </p>
  <ul class="pl-xx-small md:pl-x-small space-y-4 mb-4">
    <li>
      Respond to your report promptly, and work with you to understand and
      validate your report;
    </li>
    <li>
      Strive to keep you informed about the progress of a vulnerability as it is
      processed;
    </li>
    <li>
      Work to remediate discovered vulnerabilities in a timely manner, within
      our operational constraints; and
    </li>
    <li>
      Extend Safe Harbor for your vulnerability research that is related to this
      policy.
    </li>
    <li>
      <a href="/security/thanks">Publically acknowledge</a> your security research
      if responsibily disclosed.
    </li>
  </ul>
  <h2 class="mx-0 my-8 h3">Our Expectations</h2>
  <p class="mb-4">
    In participating in our vulnerability disclosure program in good faith, we
    ask that you:
  </p>
  <ul class="pl-xx-small md:pl-x-small space-y-4 mb-4">
    <li>
      Play by the rules, including following this policy and any other relevant
      agreements. If there is any inconsistency between this policy and any
      other applicable terms, the terms of this policy will prevail;
    </li>
    <li>Report any vulnerability you’ve discovered promptly;</li>
    <li>
      Avoid violating the privacy of others, disrupting our systems, destroying
      data, and/or harming user experience;
    </li>
    <li>
      Use only the Official Channels to discuss vulnerability information with
      us;
    </li>
    <li>
      Provide us with a reasonable amount of time (at least 90 days from the
      initial report) to resolve the issue before you disclose it publicly;
    </li>
    <li>
      Perform testing only on in-scope systems, and respect systems and
      activities which are out-of-scope;
    </li>
    <li>
      If a vulnerability provides unintended access to data: Limit the amount of
      data you access to the minimum required for effectively demonstrating a
      Proof of Concept; and cease testing and submit a report immediately if you
      encounter any user data during testing, such as Personally Identifiable
      Information (PII), Personal Healthcare Information (PHI), credit card
      data, or proprietary information;
    </li>
    <li>
      You should only interact with test accounts you own or with explicit
      permission from the account holder; and
    </li>
    <li>Do not engage in extortion.</li>
  </ul>
  <h2 class="mx-0 my-8 h3">Official Channels</h2>
  <p class="mb-4">
    Please report security issues via <a href="mailto://security@gitpod.io"
      >security@gitpod.io</a
    >
    or <a href="/security/report">https://www.gitpod.io/security/</a>, providing
    all relevant information. The more details you provide, the easier it will
    be for us to triage and fix the issue.
  </p>
  <h2 class="h3 mx-0 my-8">Safe Harbor</h2>
  <p class="mb-4">
    When conducting vulnerability research, according to this policy, we
    consider this research conducted under this policy to be:
  </p>
  <ul class="pl-xx-small md:pl-x-small space-y-4 mb-4">
    <li>
      Authorized concerning any applicable anti-hacking laws, and we will not
      initiate or support legal action against you for accidental, good-faith
      violations of this policy;
    </li>
    <li>
      Authorized concerning any relevant anti-circumvention laws, and we will
      not bring a claim against you for circumvention of technology controls;
    </li>
    <li>
      Exempt from restrictions in our Terms of Service (TOS) and/or Acceptable
      Usage Policy (AUP) that would interfere with conducting security research,
      and we waive those restrictions on a limited basis; and
    </li>
    <li>
      Lawful, helpful to the overall security of the Internet, and conducted in
      good faith.
    </li>
  </ul>
  <p class="m-4">
    You are expected, as always, to comply with all applicable laws. If legal
    action is initiated by a third party against you and you have complied with
    this policy, we will take steps to make it known that your actions were
    conducted in compliance with this policy.
  </p>
  <p class="mb-4">
    If at any time you have concerns or are uncertain whether your security
    research is consistent with this policy, please submit a report through one
    of our Official Channels before going any further.
  </p>
  <blockquote>
    <p>
      Note that the Safe Harbor applies only to legal claims under the control
      of the organization participating in this policy, and that the policy does
      not bind independent third parties.
    </p>
  </blockquote>
</article>

<Section>
  <Action
    action={thanksAction}
    class="mx-auto text-center bg-white max-w-md p-small shadow-normal rounded-2xl"
  />
</Section>
