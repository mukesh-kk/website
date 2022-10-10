<script lang="ts">
  import Card from "../ui-library/card/card.svelte";
  import Modal from "../ui-library/modal/modal.svelte";
  import YoutubeEmbed from "../youtube-embed.svelte";
  import Wrapper from "./wrapper.svelte";
  let clazz = "";
  export { clazz as class };

  let isModalOpen: boolean = false;

  const handleClose = () => (isModalOpen = false);
</script>

<Wrapper class="p-xx-small md:p-small {clazz}">
  <h2 class="h5">Watch the recording</h2>
  <button
    on:click={() => {
      isModalOpen = true;
    }}
  >
    <img
      src="/images/webinars/thumbnail.png"
      alt="Webinar Remote Development with IntelliJ & Gitpod"
      class="rounded-lg mt-macro md:mt-x-small"
    />
  </button>
</Wrapper>

<Modal
  on:close={handleClose}
  isOpen={isModalOpen}
  buttonClassNames="top-1 right-1 md:top-6 md:right-6"
>
  <Card
    size="medium"
    class="pt-small md:pt-large px-3 sm:px-xx-small pb-micro md:pb-xx-small lg:w-[auto]"
  >
    <div class="max-w-[100vw] w-[990px] mx-auto">
      <YoutubeEmbed
        title="Remote Development with IntelliJ & Gitpod"
        embedId="0AaRIHwCJ5o"
      />
    </div>
  </Card>
</Modal>
