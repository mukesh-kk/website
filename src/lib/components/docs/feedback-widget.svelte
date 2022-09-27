<script lang="ts">
  // Credit: www.vercel.com/docs 🙏
  import { page } from "$app/stores";
  import { trackEvent } from "../segment.svelte";
  import Textarea from "$lib/components/ui-library/textarea";
  import Button from "$lib/components/ui-library/button";
  import Card from "$lib/components/ui-library/card";
  import Input from "../ui-library/input/input.svelte";

  let selectedEmotion: number;
  let note: string = "";
  let email: string = "";
  let resultMessage: string;
  let clazz = "";
  let isSubmissionInProgress: boolean = false;
  export { clazz as class };
  export let type: "docs" | "guides" | "digests";

  const submitFeedback = async () => {
    isSubmissionInProgress = true;

    trackEvent(
      "feedback_submitted",
      {
        score: selectedEmotion,
        feedback: note,
        url: window.location.href,
        path: window.location.pathname,
      },
      true
    );

    const response = await fetch("/api/feedback", {
      method: "post",
      body: JSON.stringify({
        type,
        emotion: selectedEmotion,
        note,
        email,
        url: $page.url.toString(),
      }),
    });

    if (response.status === 201) {
      resultMessage = "Thanks for your feedback, we appreciate it.";
      isSubmissionInProgress = false;
    } else {
      resultMessage = "Oh no, something went wrong :(.";
    }
    setTimeout(() => {
      selectedEmotion = undefined;
      note = "";
      resultMessage = "";
    }, 5000);
  };
</script>

<div class={clazz}>
  <Card
    size="small"
    class="max-w-md py-small px-xx-small m-auto"
    data-analytics={`{"dnt":true}`}
  >
    <h2 class="text-xl leading-6 mb-6 text-center justify-center w-full">
      Was this helpful?
    </h2>
    {#if resultMessage}
      <p class="text-center">{resultMessage}</p>
    {:else}
      <form on:submit|preventDefault={submitFeedback}>
        <div class="flex justify-center space-x-6">
          {#each new Array(4) as _, index}
            <button
              on:click|preventDefault={() => (selectedEmotion = index + 1)}
              class="grayscale transition duration-150 hover:grayscale-0 hover:scale-150 {selectedEmotion ===
              index + 1
                ? 'grayscale-0 scale-150'
                : ''}"
            >
              <img
                src="/images/docs/feedback-widget/{index + 1}.svg"
                alt="Feedback {index + 1} of 4"
                title="Feedback {index + 1} of 4"
                class="h-6 w-6"
              />
            </button>
          {/each}
        </div>
        {#if selectedEmotion}
          <div class="mt-x-small space-y-macro">
            <Textarea
              bind:value={note}
              id="note"
              name="feedback"
              width="100%"
              placeholder="Your feedback..."
              aria-label="Feedback input"
              autocapitalize="off"
              autocomplete="off"
              autocorrect="off"
              type="text"
              class="mb-0 text-xs"
            />
            <Input
              bind:value={email}
              id="email"
              name="email"
              width="100%"
              placeholder="Email (optional)"
              class="text-xs"
            />
          </div>
          <div class="mt-micro">
            <p class="text-xs mb-x-small">
              I consent to having this website store my submitted information so
              that the support team can respond to my message. For more
              information, see our
              <a class="!underline" href="/privacy"> Privacy Policy. </a>
            </p>
            <Button
              variant="primary"
              size="medium"
              disabled={isSubmissionInProgress}
              type="submit"
              isLoading={isSubmissionInProgress}
              ><span>Send</span>
            </Button>
          </div>
        {/if}
      </form>
    {/if}
  </Card>
</div>
