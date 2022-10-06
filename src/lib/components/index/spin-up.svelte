<script lang="ts">
  import type { ExtensionButton } from "$lib/types/extension-button";
  import LinkButton from "$lib/components/ui-library/link-button";
  import Section from "../section.svelte";
  import Card from "$lib/components/ui-library/card";
  import ButtonsWrapper from "../buttons-wrapper.svelte";

  const buttons: ExtensionButton[] = [
    {
      name: "chrome-extension",
      icon: "svg/browsers/chrome.svg",
      text: "Chrome Extension",
      href: "https://chrome.google.com/webstore/detail/gitpod-dev-environments-i/dodmmooeoklaejobgleioelladacbeki",
    },
    {
      name: "firefox-extension",
      icon: "svg/browsers/firefox.svg",
      text: "Firefox Extension",
      href: "https://addons.mozilla.org/firefox/addon/gitpod/",
    },
  ];
</script>

<Card size="medium" class="shadow-normal">
  <Section
    class="flex flex-col max-w-2xl mx-auto lg:max-w-none lg:flex-row items-center px-micro py-small sm:px-small sm:py-medium lg:space-x-small xl:py-24 xl:px-20 xl:space-x-20"
  >
    <div class="mb-x-small lg:mb-0">
      <img
        src="/images/index/gitpod-browser-extension.png"
        alt="Open in Gitpod button added via the Gitpod Browser Extension"
      />
    </div>
    <div>
      <h3 class="h3">Spin up developer environments with a single click.</h3>
      <p class="mt-xx-small mb-x-small">
        Install the browser extension and add a button to your GitLab, GitHub
        and Bitbucket projects to easily spin up a dev environment with a single
        click.
      </p>
      <ButtonsWrapper class="justify-center sm:justify-start">
        {#each buttons as { href, icon, text }}
          <LinkButton
            class="flex items-center"
            variant="gray"
            size="medium"
            {href}
            target="_blank"
            rel="noopener"
          >
            <img
              class="inline-block h-6 w-6 mr-2"
              src={`/${icon}`}
              alt={text}
              width="24"
              height="24"
            />
            {text}
          </LinkButton>
        {/each}
      </ButtonsWrapper>
    </div>
  </Section>
</Card>
