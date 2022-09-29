<script lang="ts">
  import LinkButton from "$lib/components/ui-library/link-button";
  const selfHostedButtons = [
    {
      text: "Install on GKE",
      icon: {
        src: "/svg/index/gke.svg",
        alt: "Google Kubernetes Engine",
      },
    },
    {
      text: "Install on EKS",
      icon: {
        src: "/svg/index/eks.svg",
        alt: "Amazon Elastic Kubernetes Service",
      },
    },
    {
      text: "Install on AKS",
      icon: {
        src: "/svg/index/aks.svg",
        alt: "Azure Kubernetes Service",
      },
    },
  ];
</script>

<h3>Host Gitpod yourself</h3>
<p class="max-w-xs mx-auto">
  Run Gitpod on your own infrastructure. Free for up to 10 users.
</p>

<div class="my-x-small space-y-3">
  {#each selfHostedButtons as { text, icon }}
    <div>
      <LinkButton
        class="inline-flex mx-auto items-center"
        href="/community-license"
        variant="gray"
        size="large"
      >
        <img
          slot="image"
          src={icon.src}
          alt={icon.alt}
          class="h-6 w-8 mr-micro"
        />
        {text}</LinkButton
      >
    </div>
  {/each}
</div>

<p class="text-small">
  <a href="/self-hosted#features">View features</a> or
  <a href="/docs/configure/self-hosted/latest">read documentation</a>
</p>
