<script lang="ts">
  import SectionCommon from "../section-common.svelte";
  import LinkButton from "../ui-library/link-button/link-button.svelte";
</script>

<SectionCommon
  title="Come and join the team"
  text="Join a quickly growing venture-backed team and work together with 
	incredible humans from around the globe."
  textClassNames="max-w-3xl mx-auto"
>
  <div slot="content" class="flex flex-col items-center">
    <LinkButton
      href="https://www.gitpod.io/careers"
      variant="primary"
      size="large"
      class="mt-x-small"
    >
      See open positions
    </LinkButton>
  </div>
</SectionCommon>
