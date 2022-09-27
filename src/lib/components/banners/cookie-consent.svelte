<script lang="ts">
  import Cookies from "js-cookie";
  import { cookies } from "$lib/constants";

  import CookieSettings from "../cookie-settings.svelte";
  import Modal from "../ui-library/modal/modal.svelte";
  import Banner from "./base.svelte";
  import Button from "../ui-library/button/button.svelte";

  let isModalOpen: boolean = false;

  const handleClose = () => {
    isModalOpen = false;
  };
</script>

<div data-analytics={`{"position":"cookie-consent"}`}>
  <Banner
    location="custom"
    storageKey="cookie-consent-bar"
    let:closeBanner
    class="fixed stroked stroked-sand bottom-0 md:bottom-macro md:left-macro z-50 w-full md:max-w-[410px] px-micro py-macro md:p-xx-small text-xs md:text-base md:rounded-2xl md:shadow-sm"
  >
    <p>
      This website uses cookies to enhance the user experience. Read our <a
        href="/privacy">privacy policy</a
      > for more info.
    </p>
    <div
      class="flex flex-row-reverse md:flex-row items-center justify-between mt-micro md:mt-x-small"
    >
      <div class="space-x-micro">
        <button
          on:click={() => {
            Cookies.set(cookies.ANALYTICAL, "false", { expires: 365 });
            closeBanner();
          }}
          class="underline">Opt-out</button
        >
        <button
          on:click={() => {
            isModalOpen = true;
          }}
          class="underline"
        >
          Customise
        </button>
      </div>
      <Button
        variant="tertiary"
        on:click={() => {
          Cookies.set(cookies.ANALYTICAL, "true", { expires: 365 });
          Cookies.set(cookies.TARGETING, "true", { expires: 365 });
          closeBanner();
        }}
      >
        Accept
      </Button>
    </div>
  </Banner>
</div>

<Modal on:close={handleClose} isOpen={isModalOpen}>
  <CookieSettings {handleClose} />
</Modal>
