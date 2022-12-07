<script>
  import Section from "../section.svelte";
  import Card from "$lib/components/ui-library/card";
  import LinkButton from "../ui-library/link-button/link-button.svelte";
</script>

<Section class="mx-auto max-w-xl">
  <Card
    size="medium"
    class="shadow-normal md:p-x-large flex items-start relative text-left md:mx-auto py-small px-xx-small"
  >
    <img
      src="/images/startups/kumquat-left.png"
      alt="Gitpod Kumquat"
      class="kumquat-left absolute hidden md:block h-16 lgx:h-32 lgx:w-36 top-24 -left-12 lgx:-left-24 -z-10"
    />

    <div class="flex flex-col">
      <h2 class="h3 !mb-x-small">Our community values</h2>
      <p class="text-p-large mb-x-small">
        The Gitpod community is a place where everyone should feel welcomed,
        included, empowered, and valued. We strive to build and nurture a
        culture where inclusiveness is a matter of course, not a choice.<br
        /><br /> We celebrate that every person brings a unique perspective and
        experience to the community.<br /><br /> Thank you for contributing to our
        community culture 🧡
      </p>
      <div>
        <LinkButton
          variant="cta"
          size="medium"
          href="https://github.com/gitpod-io/.github/blob/main/CODE_OF_CONDUCT.md"
          >View code of conduct</LinkButton
        >
      </div>
    </div>

    <img
      src="/images/startups/kumquat-right.png"
      alt="Gitpod Kumquat"
      class="kumquat-right absolute hidden md:block h-20 lgx:h-36 lgx:w-44 -right-16 lgx:-right-32 -z-10 bottom-0 lgx:-bottom-10"
    />
  </Card>
</Section>
