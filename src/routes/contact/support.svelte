<script context="module">
  export const prerender = true;
</script>

<script lang="ts">
  import type { Form } from "$lib/types/form";
  import type { Email } from "$lib/api/api";
  import OpenGraph from "$lib/components/open-graph.svelte";
  import SubmissionSuccess from "$lib/components/submission-success.svelte";
  import { onMount, tick } from "svelte";
  import Section from "$lib/components/section.svelte";
  import { trackEvent, trackIdentity } from "$lib/components/segment.svelte";
  import Header from "$lib/components/header.svelte";
  import Textarea from "$lib/components/ui-library/textarea";
  import Input from "$lib/components/ui-library/input";
  import Checkbox from "$lib/components/ui-library/checkbox";
  import Button from "$lib/components/ui-library/button";
  import Card from "$lib/components/ui-library/card";
  import { scrollToElement } from "$lib/utils/helpers";
  import {
    cloudPlatforms,
    noOfEngineers as noOfEngineersArray,
  } from "$lib/contents/contact";
  import Select from "$lib/components/ui-library/select/select.svelte";
  import InputsHalf from "$lib/components/contact/inputs-half.svelte";

  const studentUnlimitedSubject = "Educational Discount Verification";

  const selfHostingSubject = "Self-hosting Gitpod";

  const otherSubject = "Other";
  const subjects = [
    "Question",
    "Technical Support",
    "Billing",
    studentUnlimitedSubject,
    selfHostingSubject,
    "Open Source Sponsorship",
    "Security",
    otherSubject,
  ];

  let isCloudPlatformsSelectShown = false;

  let cloudInfrastructure = {
    el: null,
    valid: false,
    value: "",
  };

  let noOfEngineers = {
    el: null,
    valid: false,
    value: "",
  };

  let company = {
    el: null,
    valid: false,
    value: "",
  };

  let isStudentEmailNoteShown: boolean = false;
  let sectionStart: HTMLElement;
  let isSubmissionInProgress: boolean = false;

  $: if (formData.selectedSubject.value === studentUnlimitedSubject) {
    isStudentEmailNoteShown = true;
  } else {
    isStudentEmailNoteShown = false;
  }

  const formData: Form = {
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
    message: {
      el: null,
      valid: false,
      value: "",
    },
    name: {
      el: null,
      valid: false,
      value: "",
    },
    selectedSubject: {
      el: null,
      valid: false,
      value: "",
    },
  };

  $: if (formData.selectedSubject.value == selfHostingSubject) {
    isCloudPlatformsSelectShown = true;
    formData.cloudInfrastructure = cloudInfrastructure;
    formData.noOfEngineers = noOfEngineers;
    formData.company = company;
  } else {
    isCloudPlatformsSelectShown = false;
    delete formData.cloudInfrastructure;
    delete formData.noOfEngineers;
    delete formData.company;
  }

  $: isSelfHostedSelected =
    isCloudPlatformsSelectShown && formData.cloudInfrastructure;

  let isFormDirty = false;
  let isEmailSent = false;

  $: isFormValid = Object.values(formData).every((field) => field.valid);

  const handleSubmit = async () => {
    isFormDirty = true;
    if (!isFormValid) {
      await tick();
      scrollToElement(sectionStart, ".error");
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
        subject: formData.selectedSubject.value,
        full_name: formData.name.value,
        email: formData.email.value,
        infrastructure:
          formData.selectedSubject.value == selfHostingSubject
            ? formData.cloudInfrastructure.value
            : undefined,
        company_engineers:
          formData.selectedSubject.value == selfHostingSubject
            ? formData.noOfEngineers.value
            : undefined,
        company:
          formData.selectedSubject.value == selfHostingSubject
            ? formData.company.value
            : undefined,
        message: formData.message.value,
      },
      true
    );

    const email: Email = {
      replyTo: {
        email: formData.email.value,
        name: formData.name.value,
      },
      subject:
        formData.selectedSubject.value +
        "  (from " +
        formData.email.value +
        ")",
      message: `
          ${
            isCloudPlatformsSelectShown
              ? `Cloud Infrastructure: ${formData.cloudInfrastructure.value}`
              : ""
          }
          ${
            isCloudPlatformsSelectShown
              ? `Company: ${formData.company.value}`
              : ""
          }
          Message: ${formData.message.value}
          ${
            isCloudPlatformsSelectShown
              ? `Total number of engineers: ${formData.noOfEngineers.value}`
              : ""
          }
      `,
    };

    try {
      const response = await fetch("/api/submit-form", {
        method: "POST",
        body: JSON.stringify(email),
      });
      if (response.ok) {
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

  onMount(() => {
    if (window.location.search.includes("open-source-sponsorship")) {
      formData.selectedSubject.value = "Open Source Sponsorship";
      formData.selectedSubject.valid = true;
    }
  });
</script>

<OpenGraph
  data={{
    description:
      "Do you need help with any question or issue? Please get in contact with us and we’ll get onto it right away.",
    title: "Contact Support",
  }}
/>

<Header
  title="Contact Support"
  text="Need help with any question or issue? Please get in contact and we’ll get
  onto it right away."
  tight={true}
  textClassNames="max-w-2xl mx-auto text-large"
/>

<Card
  size="small"
  class="shadow-normal p-xx-small sm:py-small sm:px-x-small md:p-medium sm:mx-8 mb-xxx-large"
>
  <Section id="form" style="margin: 0; padding: 0">
    <div bind:this={sectionStart} data-analytics={`{"dnt":true}`}>
      {#if isEmailSent}
        <SubmissionSuccess
          title="Thank you for your message"
          text="We received your message. Our team will take a look and get back to you as
      soon as possible."
        />
      {:else}
        <form
          on:submit|preventDefault={handleSubmit}
          novalidate
          class="max-w-[45rem] m-auto"
        >
          <h2 class="h3 !mb-small text-center">Send us a message</h2>
          <div class="space-y-8">
            <div class:error={isFormDirty && !formData.selectedSubject.valid}>
              <fieldset class="flex">
                <legend>Please choose a subject*</legend>
                <ul class="flex flex-wrap">
                  {#each subjects as subject, index}
                    <li class="mr-macro">
                      <input
                        id="subject-{index}"
                        type="radio"
                        bind:group={formData.selectedSubject.value}
                        bind:this={formData.selectedSubject.el}
                        on:change={() => {
                          formData.selectedSubject.valid =
                            formData.selectedSubject.value &&
                            formData.selectedSubject.el.validity.valid;
                        }}
                        value={subject}
                        name="subject"
                      />
                      <label for="subject-{index}" class="font-medium"
                        >{subject}</label
                      >
                    </li>
                  {/each}
                </ul>
              </fieldset>
            </div>
            <InputsHalf>
              <div>
                <Input
                  hasError={isFormDirty && !formData.name.valid}
                  label="Name*"
                  id="name"
                  name="name"
                  bind:value={formData.name.value}
                  bind:element={formData.name.el}
                  on:change={() => {
                    formData.name.valid =
                      formData.name.value && formData.name.el.checkValidity();
                  }}
                  type="text"
                  autocomplete="name"
                />
              </div>
              <div class:error={isFormDirty && !formData.email.valid}>
                <label class="cursor-pointer" for="email"
                  >E-mail*
                  {#if isStudentEmailNoteShown}
                    <span class="fine-print"
                      >(Please use your student or faculty email)</span
                    >
                  {/if}
                </label>
                <Input
                  hasError={isFormDirty && !formData.email.valid}
                  id="email"
                  name="e-mail"
                  bind:value={formData.email.value}
                  bind:element={formData.email.el}
                  on:change={() => {
                    formData.email.valid =
                      formData.email.value && formData.email.el.checkValidity();
                  }}
                  type="email"
                  autocomplete="email"
                />
              </div>
            </InputsHalf>
            {#if isSelfHostedSelected}
              <InputsHalf>
                <div
                  class:error={isFormDirty && !formData.selectedSubject.valid}
                >
                  <Select
                    hasError={isFormDirty &&
                      !formData.cloudInfrastructure.valid}
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
                    class="max-w-md"
                  />
                </div>
                <div
                  class:error={isFormDirty && !formData.selectedSubject.valid}
                >
                  <Select
                    placeholder="Total number of engineers"
                    hasError={isFormDirty && !formData.noOfEngineers.valid}
                    name="noOfEngineers"
                    bind:value={formData.noOfEngineers.value}
                    bind:element={formData.noOfEngineers.el}
                    on:change={() => {
                      formData.noOfEngineers.valid =
                        formData.noOfEngineers.value &&
                        formData.noOfEngineers.el.checkValidity();
                    }}
                    options={noOfEngineersArray}
                    class="max-w-md"
                  />
                </div>
              </InputsHalf>
              <InputsHalf>
                <div class:error={isFormDirty && !formData.company.valid}>
                  <Input
                    label="Company*"
                    hasError={isFormDirty && !formData.company.valid}
                    id="company"
                    name="company"
                    bind:value={formData.company.value}
                    bind:element={formData.company.el}
                    on:change={() => {
                      formData.company.valid =
                        formData.company.value &&
                        formData.company.el.checkValidity();
                    }}
                    type="text"
                    autocomplete="organization"
                  />
                </div>
              </InputsHalf>
            {/if}
            <div>
              <Textarea
                id="message"
                label="Your message*"
                name="message"
                hasError={isFormDirty && !formData.message.valid}
                bind:value={formData.message.value}
                bind:element={formData.message.el}
                on:change={() => {
                  formData.message.valid =
                    formData.message.value &&
                    formData.message.el.validity.valid;
                }}
                cols="30"
                rows="10"
              />
            </div>
            <div>
              <Checkbox
                hasError={isFormDirty && !formData.consent.valid}
                label="I consent to having this website store my submitted information so that a support staff can respond to my inquiry."
                bind:checked={formData.consent.checked}
                bind:element={formData.consent.el}
                on:change={() => {
                  formData.consent.valid =
                    formData.consent.checked &&
                    formData.consent.el.validity.valid;
                }}
              />
            </div>
            <div>
              <p class="text-sm my-4">
                By submitting this form I acknowledge that I have read and
                understood <a class="!underline" href="/privacy"
                  >Gitpod’s Privacy Policy.</a
                >
              </p>
              <Button
                variant="cta"
                size="medium"
                type="submit"
                class="btn"
                disabled={(isFormDirty && !isFormValid) ||
                  isSubmissionInProgress}
                isLoading={isSubmissionInProgress}
                >Send message
              </Button>
              {#if isFormDirty && !isFormValid}
                <legend class="text-xs text-error block mt-1 mb-2">
                  Please fill out all required fields above
                </legend>
              {/if}
            </div>
          </div>
          {#if isEmailSent}
            <p>Thank you! We'll get back to you soon.</p>
          {/if}
        </form>
      {/if}
    </div>
  </Section>
</Card>
