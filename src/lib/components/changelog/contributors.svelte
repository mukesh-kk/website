<script lang="ts">
  import Avatars from "$lib/components/ui-library/avatars";

  /**
   * One or more comma-separated GitHub username.
   */
  export let usernames: string;
</script>

<span>
  <span class="flex-shrink-0">
    <Avatars {usernames} socialMediaLinkClasses="hover:drop-shadow" />
  </span>
</span>
