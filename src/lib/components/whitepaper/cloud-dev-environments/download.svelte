<script lang="ts">
  import type { EmailToType } from "$lib/api/api";

  import InputsHalf from "$lib/components/contact/inputs-half.svelte";
  import Input from "$lib/components/ui-library/input/input.svelte";
  import type { Form } from "$lib/types/form";
  import { scrollToElement } from "$lib/utils/helpers";
  import { tick } from "svelte";
  import Button from "$lib/components/ui-library/button/button.svelte";
  import Checkbox from "$lib/components/ui-library/checkbox/checkbox.svelte";
  import SubmissionSuccess from "$lib/components/submission-success.svelte";
  import Wrapper from "$lib/components/webinars/wrapper.svelte";
  import { goto } from "$app/navigation";

  let clazz = "";
  export { clazz as class };

  export let toType: EmailToType;
  export let eventType: string;

  const formData: Form = {
    name: {
      el: null,
      valid: false,
      value: "",
    },
    email: {
      el: null,
      valid: false,
      value: "",
    },
    companyWebsite: {
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
  let isEmailSent = false;
  let isSubmissionInProgress: boolean = false;
  let sectionStart: HTMLElement;
  $: isFormValid = Object.values(formData).every((field) => field.valid);

  const handleSubmit = async () => {
    isFormDirty = true;
    if (!isFormValid) {
      await tick();
      scrollToElement(sectionStart, ".error");
      return;
    }
    isSubmissionInProgress = true;

    goto(
      "https://drive.google.com/uc?export=download&id=1ATli6smC3WO6vRLFXWVIEIzx3M8u0OkM"
    );

    try {
      const response = await fetch("/api/download-whitepaper", {
        method: "POST",
        body: JSON.stringify({
          type: toType,
          name: formData.name.value,
          email: formData.email.value,
          company: formData.companyWebsite.value,
        }),
      });

      if (response.ok) {
        isEmailSent = true;
        isSubmissionInProgress = false;
        setTimeout(() => {
          sectionStart.scrollIntoView({
            block: "center",
            inline: "center",
          });
        });
      } else if (response.status === 409) {
        isSubmissionInProgress = false;
      } else {
        console.error(response.statusText);
      }
    } catch (error) {
      console.error(error);
    }
  };
</script>

<Wrapper
  class="px-xx-small py-x-small sm:p-x-small xl:px-small xl:py-x-small {clazz}"
>
  <div bind:this={sectionStart}>
    {#if isEmailSent}
      <SubmissionSuccess class="-mb-x-small" title="Thanks for downloading" />
    {:else}
      <form
        class="space-y-micro md:space-y-xx-small"
        on:submit|preventDefault={handleSubmit}
        novalidate
      >
        <h2 class="h5 !mt-0">Download {eventType}</h2>
        <InputsHalf>
          <div>
            <Input
              hasError={isFormDirty && !formData.name.valid}
              label="Full name*"
              id="name"
              name="full-name"
              bind:value={formData.name.value}
              bind:element={formData.name.el}
              type="text"
              autocomplete="name"
              on:change={() => {
                formData.name.valid =
                  formData.name.value && formData.name.el.checkValidity();
              }}
            />
          </div>
          <div>
            <Input
              hasError={isFormDirty && !formData.email.valid}
              label="Work email*"
              id="email"
              name="work-email"
              bind:value={formData.email.value}
              bind:element={formData.email.el}
              type="email"
              autocomplete="email"
              on:change={() => {
                formData.email.valid =
                  formData.email.value && formData.email.el.checkValidity();
              }}
            />
          </div>
        </InputsHalf>
        <InputsHalf>
          <div>
            <Input
              hasError={isFormDirty && !formData.companyWebsite.valid}
              label="Company website*"
              id="company"
              name="website"
              bind:value={formData.companyWebsite.value}
              bind:element={formData.companyWebsite.el}
              on:change={() => {
                formData.companyWebsite.valid =
                  formData.companyWebsite.value &&
                  formData.companyWebsite.el.checkValidity();
              }}
            />
          </div>
        </InputsHalf>
        <div>
          <Checkbox
            hasError={isFormDirty && !formData.consent.valid}
            label="<p>I consent to having this website store my submitted information. <a class='!underline' href='/privacy'>More on privacy policy</a></p>"
            bind:checked={formData.consent.checked}
            bind:element={formData.consent.el}
            on:change={() => {
              formData.consent.valid =
                formData.consent.checked && formData.consent.el.validity.valid;
            }}
            textClassName="text-sm"
          />
        </div>
        <Button
          class="flex gap-micro"
          variant="primary"
          size="large"
          type="submit"
          isLoading={isSubmissionInProgress}
          disabled={(isFormDirty && !isFormValid) || isSubmissionInProgress}
        >
          <img src="/svg/download.svg" alt="download icon" />
          Download now
        </Button>
        {#if isFormDirty && !isFormValid}
          <legend class="text-xs text-error block mt-1 mb-2">
            Please fill out all required fields above
          </legend>
        {/if}
      </form>
    {/if}
  </div>
</Wrapper>
