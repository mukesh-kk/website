<script lang="ts">
  import { JetBrainsComparison } from "../../contents/jetbrains-space";

  import SectionCommon from "../section-common.svelte";
  import FeatureTable from "../ui-library/feature-table/feature-table.svelte";
</script>

<SectionCommon
  title="Compare features"
  text="Cloud development without friction that integrates with your individual stack."
  textClassNames="mb-xx-small"
  isTitleADeepLink={true}
>
  <FeatureTable slot="content" tableData={JetBrainsComparison} />
</SectionCommon>
