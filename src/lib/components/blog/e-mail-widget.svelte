<script lang="ts">
  import { trackEvent, trackIdentity } from "../segment.svelte";
  import Input from "$lib/components/ui-library/input";
  import Button from "$lib/components/ui-library/button";
  import Checkbox from "$lib/components/ui-library/checkbox";
  import Card from "$lib/components/ui-library/card";
  import type { Form } from "$lib/types/form";

  let resultMessage: string;
  let isSubmittedOnce = false;
  let clazz = "";
  export { clazz as class };
  const type = "blog-email";

  const formData: Form = {
    email: {
      el: null,
      valid: false,
      value: "",
    },
    consent: {
      el: null,
      valid: false,
      checked: false,
    },
  };

  let isFormDirty = false;
  $: isFormValid = Object.values(formData).every((field) => field.valid);

  const submitFeedback = async () => {
    isFormDirty = true;
    if (!isFormValid) {
      return;
    }

    isSubmittedOnce = true;

    trackIdentity(
      {
        email_untrusted: formData.email.value,
      },
      true
    );

    trackEvent("email_submitted", {}, true);

    const response = await fetch("/api/signup", {
      method: "post",
      body: JSON.stringify({
        type,
        email: formData.email.value,
      }),
    });

    if (response.status === 201) {
      resultMessage = "Thanks for signing up, we'll reach out to you";
    } else if (response.status === 409) {
      resultMessage =
        "Thanks for signing up, it seems like you already signed up";
    } else {
      resultMessage = "Oh no, something went wrong :(.";
    }
    setTimeout(() => {
      formData.email.value = "";
      resultMessage = "";
    }, 5000);
  };
</script>

<div class={clazz}>
  <Card
    size="small"
    class="max-w-md p-x-small m-auto"
    data-analytics={`{"dnt":true}`}
  >
    {#if resultMessage}
      <p class="text-center">{resultMessage}</p>
    {:else}
      <form class="space-y-4" on:submit|preventDefault={submitFeedback}>
        <div class="flex justify-center space-x-6" />
        <Input
          hasError={isFormDirty && !formData.email.valid}
          label="Receive the next company building blog post via email"
          bind:value={formData.email.value}
          bind:element={formData.email.el}
          on:change={() => {
            formData.email.valid =
              formData.email.value && formData.email.el.validity.valid;
          }}
          cols="30"
          name="Email"
          type="email"
          id="email"
        />
        <div>
          <div>
            <Checkbox
              hasError={isFormDirty && !formData.consent.valid}
              label="I agree to receive email communications. I can unsubscribe at any time."
              on:change={() => {
                formData.consent.valid =
                  formData.consent.checked &&
                  formData.consent.el.validity.valid;
              }}
              bind:checked={formData.consent.checked}
              bind:element={formData.consent.el}
              labelClasses="text-sm"
            />
          </div>
          <p class="!text-sm no-prose">
            By submitting this form I acknowledge that I have read and
            understood <a class="!underline" href="/privacy"
              >Gitpod’s Privacy Policy.</a
            >
          </p>
          <span>
            <Button
              variant="primary"
              size="medium"
              disabled={isSubmittedOnce}
              type="submit"><span>Send</span></Button
            >
          </span>
        </div>
      </form>
    {/if}
  </Card>
</div>
