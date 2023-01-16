<script lang="ts">
  import type { EmailToType } from "$lib/api/api";

  import InputsHalf from "$lib/components/contact/inputs-half.svelte";
  import Input from "$lib/components/ui-library/input/input.svelte";
  import type { Form } from "$lib/types/form";
  import { scrollToElement } from "$lib/utils/helpers";
  import { tick } from "svelte";
  import Select from "$lib/components/ui-library/select";
  import Calendly from "./calendly.svelte";
  import {
    dedicatedCloudPlatforms,
    gitProvider,
    noOfEngineers,
  } from "$lib/contents/contact";
  import Button from "$lib/components/ui-library/button/button.svelte";
  import Checkbox from "$lib/components/ui-library/checkbox/checkbox.svelte";
  import SubmissionSuccess from "$lib/components/submission-success.svelte";
  import Wrapper from "$lib/components/webinars/wrapper.svelte";
  import Textarea from "../ui-library/textarea";

  let clazz = "";
  export { clazz as class };

  export let toType: EmailToType;

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
    noOfEngineers: {
      el: null,
      valid: false,
      value: "",
    },
    cloudInfrastructure: {
      el: null,
      valid: true,
      value: "",
    },
    gitProvider: {
      el: null,
      valid: true,
      value: "",
    },
    message: {
      el: null,
      valid: true,
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
  let isDuplicate = false;
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

    try {
      const response = await fetch("/api/dedicated-signup", {
        method: "POST",
        body: JSON.stringify({
          type: toType,
          payload: {
            name: formData.name.value,
            email: formData.email.value,
            company: formData.companyWebsite.value,
            noOfEngineers: formData.noOfEngineers.value,
            cloudInfrastructure: formData.cloudInfrastructure.value || "N/A",
            gitProvider: formData.gitProvider.value || "N/A",
            message: formData.message.value || "N/A",
          },
        }),
      });

      if (response.ok) {
        isEmailSent = true;
        isSubmissionInProgress = false;
        setTimeout(() => {
          document.querySelector("h1").scrollIntoView({
            block: "center",
            inline: "center",
          });
        });
      } else if (response.status === 409) {
        isDuplicate = true;
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
      <div>
        <h2 class="h3 !mb-micro text-center">You’ve joined the waitlist ✔️</h2>
        <p class="text-center text-p-large mb-micro md:mb-x-small">
          Next, schedule a demo to talk to our team and see the product in
          action.
        </p>
        <Calendly />
      </div>
    {:else if isDuplicate}
      <SubmissionSuccess
        class="-mb-x-small"
        title="It looks like you already signed up."
      />
    {:else}
      <form
        class="space-y-micro md:space-y-xx-small"
        on:submit|preventDefault={handleSubmit}
        novalidate
      >
        <h2 class="h5 !mt-0">Secure a spot on the waitlist</h2>
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
          <div class="flex flex-col justify-end">
            <Select
              label="Total number of engineers*"
              placeholder="Select..."
              hasError={isFormDirty && !formData.noOfEngineers.valid}
              name="noOfEngineers"
              bind:value={formData.noOfEngineers.value}
              bind:element={formData.noOfEngineers.el}
              on:change={() => {
                formData.noOfEngineers.valid =
                  formData.noOfEngineers.value &&
                  formData.noOfEngineers.el.checkValidity();
              }}
              options={noOfEngineers}
            />
          </div>
        </InputsHalf>
        <InputsHalf>
          <div class="flex flex-col justify-end">
            <Select
              label="Cloud infrastructure"
              hasError={isFormDirty && !formData.cloudInfrastructure.valid}
              name="cloudInfrastructure"
              bind:value={formData.cloudInfrastructure.value}
              on:change={(e) => {
                formData.cloudInfrastructure.valid =
                  formData.cloudInfrastructure.value &&
                  // @ts-ignore
                  e.target.validity.valid;
              }}
              options={dedicatedCloudPlatforms}
              placeholder="Select..."
              class="max-w-md"
            />
          </div>
          <div class="flex flex-col justify-end">
            <Select
              label="Git provider"
              hasError={isFormDirty && !formData.gitProvider.valid}
              name="gitProvider"
              bind:value={formData.gitProvider.value}
              on:change={(e) => {
                formData.gitProvider.valid =
                  formData.gitProvider.value &&
                  // @ts-ignore
                  e.target.validity.valid;
              }}
              options={gitProvider}
              placeholder="Select..."
              class="max-w-md"
            />
          </div>
        </InputsHalf>
        <div>
          <Textarea
            label="How can we help you?"
            id="message"
            name="message"
            hasError={isFormDirty && !formData.message.valid}
            bind:value={formData.message.value}
            bind:element={formData.message.el}
            on:change={() => {
              formData.message.valid =
                formData.message.value && formData.message.el.validity.valid;
            }}
            cols="30"
            rows="6"
          />
        </div>
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
          Request early access
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
