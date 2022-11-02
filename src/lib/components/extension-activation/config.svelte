<script>
  import Section from "../section.svelte";
  import LinkButton from "$lib/components/ui-library/link-button";
</script>

<Section>
  <div
    class="stroked p-xx-small sm:py-small sm:px-x-small md:p-medium bg-card rounded-4xl shadow-highlight max-w-4xl mx-auto text-center mb-xxx-large"
  >
    <h2>To become always ready to code</h2>
    <ol
      class="max-w-xl w-full list-decimal pl-small md:px-small text-left mx-auto my-small lg:mt-medium lg:mb-large space-y-macro text-p-large"
    >
      <li>
        Help Gitpod understand your repository by creating a gitpod.yml file
      </li>
      <li>
        Let Gitpod build your project before you even open it by turning on
        prebuilds
      </li>
    </ol>
    <LinkButton variant="primary" size="large" href="/docs/configure"
      >Configure your project</LinkButton
    >
    <p class="mt-micro text-link-grey">In less than 5 min</p>
  </div>
</Section>
