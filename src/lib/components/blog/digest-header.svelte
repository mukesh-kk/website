<script lang="ts">
  import TwitterFollowButton from "../t-button.svelte";
  import LinkButton from "$lib/components/ui-library/link-button";
  import ButtonsWrapper from "../buttons-wrapper.svelte";
</script>

<section
  class="text-center shadow-normal stroked rounded-2xl p-9 mt-x-large mb-huge bg-card"
>
  <h2 class="!mt-0">More about DevX Digest</h2>
  <p class="text-medium mb-x-small">
    Sign up for our newsletter or follow <a
      href="https://twitter.com/@devxconf"
      target="_blank">@devxconf</a
    > on Twitter to stay updated.
  </p>
  <ButtonsWrapper class="justify-center mt-x-small">
    <LinkButton
      variant="primary"
      size="medium"
      href="https://gitpod.io/notifications"
      target="_blank"
      data-analytics={`{"context":"dashboard"}`}
      >Signup for the Newsletter</LinkButton
    >
    <TwitterFollowButton variant="secondary" />
  </ButtonsWrapper>
</section>
