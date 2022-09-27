<script lang="ts">
  import Section from "../section.svelte";
  import Card from "../ui-library/card/card.svelte";
  import LinkButton from "../ui-library/link-button/link-button.svelte";
</script>

<Section>
  <Card
    size="medium"
    class="flex items-center max-w-3xl mx-auto p-x-small md:px-small md:py-medium gap-medium shadow-normal"
  >
    <img
      src="/images/team/plant.png"
      alt="Plant"
      class="hidden md:block w-36"
    />
    <div>
      <h2 class="h4">We celebrate diversity</h2>
      <p class="mb-micro">
        Gitpod strives for an inclusive, empathetic and welcoming environment.
        We cherish that every person brings a unique perspective and experience
        to the team. Everyone deserves an equal opportunity to be successful at
        Gitpod.
      </p>
      <LinkButton href="https://www.gitpod.io/careers" variant="primary">
        Become part of the team
      </LinkButton>
    </div>
  </Card>
</Section>
