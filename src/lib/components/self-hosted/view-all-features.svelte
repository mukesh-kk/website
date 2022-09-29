<script>
  import { selfHostedComparison } from "$lib/contents/self-hosted";

  import SectionCommon from "../section-common.svelte";
  import FeatureTable from "../ui-library/feature-table/feature-table.svelte";
</script>

<SectionCommon
  title="View all features"
  text="Install Gitpod Self-Hosted on <a href='/docs/configure/self-hosted/latest/installation-guides'>GKE</a>, <a href='/docs/configure/self-hosted/latest/installation-guides'>EKS</a>, or <a href='/docs/configure/self-hosted/latest/cluster-set-up/on-microsoft-aks'>AKS</a>."
  textClassNames="mb-xx-small"
  id="features"
  isTitleADeepLink={true}
>
  <FeatureTable slot="content" tableData={selfHostedComparison} />
</SectionCommon>
