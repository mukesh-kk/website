<script context="module">
  export const prerender = true;
</script>

<script lang="ts">
  import type { Form } from "$lib/types/form";
  import OpenGraph from "$lib/components/open-graph.svelte";
  import Textarea from "$lib/components/ui-library/textarea";
  import Input from "$lib/components/ui-library/input";
  import Select from "$lib/components/ui-library/select";
  import Button from "$lib/components/ui-library/button";
  import Card from "$lib/components/ui-library/card";

  import type { Email } from "$lib/api/api";
  import Header from "$lib/components/header.svelte";
  import {
    cloudPlatforms,
    licenseFormsQuestions,
    noOfEngineers,
  } from "$lib/contents/contact";
  import Checkbox from "$lib/components/ui-library/checkbox";
  import { tick } from "svelte";
  import { scrollToElement } from "../../lib/utils/helpers";
  import SubmissionSuccess from "$lib/components/submission-success.svelte";
  import { trackEvent, trackIdentity } from "$lib/components/segment.svelte";

  const formData: Form = {
    name: {
      el: null,
      valid: false,
      value: "",
    },
    consent: {
      el: null,
      valid: false,
      checked: false,
    },
    email: {
      el: null,
      valid: false,
      value: "",
    },
    company: {
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
      valid: false,
      value: "",
    },
    referrer: {
      el: null,
      valid: true,
      value: "",
    },
    message: {
      el: null,
      valid: true,
      value: "",
    },
  };

  let isFormDirty: boolean = false;
  let form: HTMLElement;
  let isEmailSent: boolean = false;
  let sectionStart: HTMLElement;
  let isSubmissionInProgress: boolean = false;

  $: isFormValid = Object.values(formData).every((field) => field.valid);

  const handleSubmit = async () => {
    isFormDirty = true;
    if (!isFormValid) {
      await tick();
      scrollToElement(form, ".error");
      return;
    }

    isSubmissionInProgress = true;

    trackIdentity(
      {
        name_untrusted: formData.name.value,
        email_untrusted: formData.email.value,
      },
      true
    );

    trackEvent(
      "message_submitted",
      {
        full_name: formData.name.value,
        email: formData.email.value,
        company: formData.company.value,
        company_engineers: formData.noOfEngineers.value,
        infrastructure: formData.cloudInfrastructure.value,
        message: formData.message.value,
        attribution: formData.referrer.value,
        referrer: formData.referrer.value,
      },
      true
    );

    const email: Email = {
      toType: "community-license",
      replyTo: {
        email: formData.email.value,
        name: formData.name.value,
      },
      subject:
        "Requesting a Community Self-Hosted license" +
        "  (from " +
        formData.email.value +
        ")",
      message: `
        ${formData.company.value}
        ${formData.name.value}

        developers: ${formData.noOfEngineers.value}
        Cloud Infrastructure: ${formData.cloudInfrastructure.value}
        Message:
        ${formData.message.value}
      `,
      data: {
        company: formData.company.value,
        noOfEngineers: formData.noOfEngineers.value,
        cloudInfrastructure: formData.cloudInfrastructure.value,
        referrer: formData.referrer.value,
        message: formData.message.value,
      },
    };

    try {
      const response = await fetch("/api/submit-form", {
        method: "POST",
        body: JSON.stringify(email),
      });
      if (response.ok) {
        isSubmissionInProgress = false;
        isEmailSent = true;
        setTimeout(() => {
          sectionStart.scrollIntoView();
        });
      } else {
        console.error(response.statusText);
      }
    } catch (error) {
      console.error(error);
    }
  };
</script>

<OpenGraph
  data={{
    description: "Request a free community license",
    title: "Community License",
    norobots: true,
  }}
/>

<Header tight={true}>
  <div slot="content" bind:this={sectionStart}>
    <h1 class="h2">Receive the free community license via&nbsp;email</h1>
    <p>
      Fill out the form and immediately receive the free self-hosted community
      license via email. If you require support for air gapped environments,
      please request an <a href="/enterprise-license">enterprise license</a> to get
      a free trial.
    </p>
  </div>
</Header>

<Card
  size="small"
  class="shadow-normal p-xx-small sm:py-small sm:px-x-small md:p-medium mb-32 sm:mx-8"
>
  {#if isEmailSent}
    <SubmissionSuccess
      title="Check your email"
      text="We've just sent you your license key via email. Enjoy!"
    />
  {:else}
    <form bind:this={form} on:submit|preventDefault={handleSubmit} novalidate>
      <h2 class="h4">Customer Information</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-small">
        <div>
          <Input
            label="Full Name*"
            hasError={isFormDirty && !formData.name.valid}
            name="full-name"
            id="full-name"
            type="text"
            bind:value={formData.name.value}
            bind:element={formData.name.el}
            on:change={() => {
              formData.name.valid =
                formData.name.value && formData.name.el.checkValidity();
            }}
            autocomplete="given-name"
          />
        </div>
        <div>
          <Input
            label="Work Email*"
            hasError={isFormDirty && !formData.email.valid}
            type="email"
            name="e-mail"
            id="email"
            bind:value={formData.email.value}
            bind:element={formData.email.el}
            on:change={() => {
              formData.email.valid =
                formData.email.value && formData.email.el.checkValidity();
            }}
            autocomplete="email"
          />
        </div>
        <div>
          <Input
            hasError={isFormDirty && !formData.company.valid}
            label="Company*"
            name="company"
            id="company"
            bind:value={formData.company.value}
            bind:element={formData.company.el}
            on:change={() => {
              formData.company.valid =
                formData.company.value && formData.company.el.checkValidity();
            }}
            type="text"
            autocomplete="organization"
          />
        </div>
        <div>
          <Select
            placeholder="Select..."
            options={noOfEngineers}
            label="Total number of engineers*"
            hasError={isFormDirty && !formData.noOfEngineers.valid}
            name="noOfEngineers"
            bind:value={formData.noOfEngineers.value}
            bind:element={formData.noOfEngineers.el}
            on:change={() => {
              formData.noOfEngineers.valid =
                formData.noOfEngineers.value &&
                formData.noOfEngineers.el.checkValidity();
            }}
          />
        </div>
        <div>
          <Select
            label="Cloud infrastructure*"
            hasError={isFormDirty && !formData.cloudInfrastructure.valid}
            name="cloudInfrastructure"
            bind:value={formData.cloudInfrastructure.value}
            on:change={(e) => {
              formData.cloudInfrastructure.valid =
                formData.cloudInfrastructure.value &&
                // @ts-ignore
                e.target.validity.valid;
            }}
            options={cloudPlatforms}
            placeholder="Which cloud infrastructure do you use?"
          />
        </div>
        <div>
          <Select
            label="What brought you here?"
            hasError={isFormDirty && !formData.referrer.valid}
            name="referrer"
            bind:value={formData.referrer.value}
            on:change={(e) => {
              formData.referrer.valid =
                formData.referrer.value &&
                // @ts-ignore
                e.target.validity.valid;
            }}
            options={licenseFormsQuestions}
            placeholder="Select..."
          />
        </div>
      </div>
      <div class="mt-4">
        <Textarea
          label="Optionally, tell us more about your interest in Gitpod. What challenges
          are you looking to solve? How can we help?"
          cols="30"
          rows="4"
          bind:value={formData.message.value}
          bind:element={formData.message.el}
          name="message"
          id="message"
        />
        <div class="my-4">
          <Checkbox
            hasError={isFormDirty && !formData.consent.valid}
            label="I consent to having this website store my submitted information so that the Gitpod team can respond to my inquiry."
            bind:checked={formData.consent.checked}
            bind:element={formData.consent.el}
            on:change={() => {
              formData.consent.valid =
                formData.consent.checked && formData.consent.el.validity.valid;
            }}
          />
        </div>
        <div class="mt-4">
          <p class="text-sm my-4">
            By submitting this form I acknowledge that I have read and
            understood <a class="!underline" href="/privacy"
              >Gitpod’s Privacy Policy.</a
            >
          </p>
          <Button
            variant="primary"
            size="large"
            type="submit"
            disabled={(isFormDirty && !isFormValid) || isSubmissionInProgress}
            isLoading={isSubmissionInProgress}
          >
            Receive license
          </Button>
        </div>
        {#if isFormDirty && !isFormValid}
          <legend class="text-xs text-error block mt-1 mb-2">
            Please fill out all required fields above
          </legend>
        {/if}
      </div>
    </form>
  {/if}
</Card>
