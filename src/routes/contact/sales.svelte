<script context="module">
  export const prerender = true;
</script>

<script lang="ts">
  import type { Form } from "$lib/types/form";
  import type { Email, EmailToType } from "$lib/api/api";
  import OpenGraph from "$lib/components/open-graph.svelte";
  import SubmissionSuccess from "$lib/components/submission-success.svelte";
  import Section from "$lib/components/section.svelte";
  import { trackEvent, trackIdentity } from "$lib/components/segment.svelte";
  import Textarea from "$lib/components/ui-library/textarea";
  import Header from "$lib/components/header.svelte";
  import Input from "$lib/components/ui-library/input";
  import Checkbox from "$lib/components/ui-library/checkbox";
  import Select from "$lib/components/ui-library/select";
  import Card from "$lib/components/ui-library/card";
  import Button from "$lib/components/ui-library/button";
  import { cloudPlatforms, noOfEngineers } from "$lib/contents/contact";
  import { scrollToElement } from "$lib/utils/helpers";
  import { tick } from "svelte";
  import Unleashing from "$lib/components/contact/unleashing.svelte";
  import { afterNavigate } from "$app/navigation";
  import InputsHalf from "$lib/components/contact/inputs-half.svelte";
  import { goto } from "$app/navigation";

  const selfHostingSubject = "Self-hosting";
  const otherSubject = "Other";
  const demoSubject = "Get a demo";
  const subjects = [
    selfHostingSubject,
    demoSubject,
    "Educational Discount",
    "Reselling",
    otherSubject,
  ];

  let sectionStart: HTMLElement;
  let isCloudPlatformsSelectShown = false;
  let cloudInfrastructure = {
    el: null,
    valid: false,
    value: "",
  };

  let isSubmissionInProgress: boolean = false;

  let toType: EmailToType = "sales";

  const formData: Form = {
    selectedSubject: {
      el: null,
      valid: false,
      value: "",
    },
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
    workEmail: {
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
    number: {
      el: null,
      valid: true,
      value: "",
    },
    message: {
      el: null,
      valid: false,
      value: "",
    },
  };

  $: if (formData.selectedSubject.value == selfHostingSubject) {
    isCloudPlatformsSelectShown = true;
    formData.cloudInfrastructure = cloudInfrastructure;
  } else {
    isCloudPlatformsSelectShown = false;
    delete formData.cloudInfrastructure;
  }

  afterNavigate(() => {
    if (window.location.search.includes("get-a-demo")) {
      formData.selectedSubject.value = demoSubject;
      formData.selectedSubject.valid = true;
      goto("/contact/get-demo");
    }
  });

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
        email_untrusted: formData.workEmail.value,
        phone_untrusted: formData.number.value,
      },
      true
    );

    trackEvent(
      "message_submitted",
      {
        subject: formData.selectedSubject.value,
        infrastructure:
          formData.selectedSubject.value == selfHostingSubject
            ? formData.cloudInfrastructure.value
            : undefined,
        full_name: formData.name.value,
        email: formData.workEmail.value,
        company_website: formData.companyWebsite.value,
        company_engineers: formData.noOfEngineers.value,
        message: formData.message.value,
        phone_number: formData.number.value,
      },
      true
    );

    const email: Email = {
      toType,
      replyTo: {
        email: formData.workEmail.value,
        name: formData.name.value,
      },
      subject:
        formData.selectedSubject.value +
        "  (from " +
        formData.workEmail.value +
        ")",
      message: `
        ${
          formData.cloudInfrastructure && formData.cloudInfrastructure.value
            ? `Cloud Infrastructure: ${formData.cloudInfrastructure.value}`
            : ""
        }
        Company website: ${formData.companyWebsite.value}
        ${
          formData.noOfEngineers.value
            ? `Total number of engineers: ${formData.noOfEngineers.value}`
            : ""
        }
        ${formData.number.value ? `Phone Number: ${formData.number.value}` : ""}
        Message: ${formData.message.value}
      `,
    };

    try {
      const emailToSend =
        toType === "community-license"
          ? {
              ...email,
              data: {
                company: formData.companyWebsite.value,
                noOfEngineers: formData.noOfEngineers.value,
                cloudInfrastructure: formData.cloudInfrastructure
                  ? formData.cloudInfrastructure.value
                  : "",
                message: formData.message.value,
              },
            }
          : email;
      const response = await fetch("/api/submit-form", {
        method: "POST",
        body: JSON.stringify(emailToSend),
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

  $: {
    if (
      formData.noOfEngineers.value === "1-10" &&
      (formData.selectedSubject.value === selfHostingSubject ||
        formData.selectedSubject.value === demoSubject)
    ) {
      toType = "community-license";
    } else {
      toType = "sales";
    }
  }
</script>

<OpenGraph
  data={{
    description: "We’ll help you find the best plan for your business.",
    title: "Contact Sales",
  }}
/>

<div>
  <Header
    title="Contact Sales"
    text="We’ll help you find the best plan for your business."
    tight={true}
    textAlign="left"
    centered={false}
  />
</div>
<div class="wrapper flex flex-col lg:flex-row">
  <Card
    size="small"
    class="shadow-normal p-xx-small sm:py-small sm:px-x-small md:p-medium lg:mb-xx-large md:min-w-[650px] !max-w-[832px]"
    styles="margin-top: 0"
    style="flex: 0 0 65%;"
  >
    <Section id="form" style="padding: 0; margin: 0">
      <div bind:this={sectionStart} data-analytics={`{"dnt":true}`}>
        {#if isEmailSent}
          <SubmissionSuccess
            title={toType === "community-license"
              ? "Check your email"
              : "Thank you for your message"}
            text={toType === "community-license"
              ? "We've just sent you your license key via email. Enjoy!"
              : "We received your message. Our team will take a look and get back to you as soon as possible."}
          />
        {:else}
          <form
            on:submit|preventDefault={handleSubmit}
            novalidate
            class="max-w-[45rem] m-auto"
          >
            <div class="space-y-8">
              <div class:error={isFormDirty && !formData.selectedSubject.valid}>
                <fieldset class="flex">
                  <legend>Please choose a subject</legend>
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

                            if (
                              formData.selectedSubject.value === demoSubject
                            ) {
                              goto("/contact/get-demo");
                            }
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
              {#if isCloudPlatformsSelectShown && formData.cloudInfrastructure}
                <Select
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
                  class="max-w-md"
                />
              {/if}
              <InputsHalf>
                <div>
                  <Input
                    hasError={isFormDirty && !formData.name.valid}
                    label="Full Name*"
                    id="name"
                    name="full-name"
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
                <div>
                  <Input
                    hasError={isFormDirty && !formData.workEmail.valid}
                    label="Work e-mail*"
                    id="email"
                    name="e-mail"
                    bind:value={formData.workEmail.value}
                    bind:element={formData.workEmail.el}
                    on:change={() => {
                      formData.workEmail.valid =
                        formData.workEmail.value &&
                        formData.workEmail.el.checkValidity();
                    }}
                    type="email"
                    autocomplete="email"
                  />
                </div>
              </InputsHalf>
              <InputsHalf>
                <div>
                  <Input
                    label="Company website*"
                    hasError={isFormDirty && !formData.companyWebsite.valid}
                    id="compnay-website"
                    name="website"
                    bind:value={formData.companyWebsite.value}
                    bind:element={formData.companyWebsite.el}
                    on:change={() => {
                      formData.companyWebsite.valid =
                        formData.companyWebsite.value &&
                        formData.companyWebsite.el.checkValidity();
                    }}
                    type="text"
                    autocomplete="organization"
                  />
                </div>
                <div class="flex flex-col justify-end">
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
                    options={noOfEngineers}
                  />
                </div>
              </InputsHalf>
              <InputsHalf>
                <div>
                  <Input
                    label="Phone number"
                    hasError={isFormDirty && !formData.companyWebsite.valid}
                    id="phone-number"
                    name="phone-number"
                    bind:value={formData.number.value}
                    bind:element={formData.number.el}
                    on:change={() => {
                      formData.number.valid =
                        formData.number.value &&
                        formData.number.el.checkValidity();
                    }}
                    type="tel"
                    autocomplete="tel"
                  />
                </div>
              </InputsHalf>
              <div>
                <Textarea
                  label="Your message*"
                  id="message"
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
                  rows="6"
                />
              </div>
              <Checkbox
                hasError={isFormDirty && !formData.consent.valid}
                label="I consent to having this website store my submitted information so that the sales team can respond to my inquiry."
                bind:checked={formData.consent.checked}
                bind:element={formData.consent.el}
                on:change={() => {
                  formData.consent.valid =
                    formData.consent.checked &&
                    formData.consent.el.validity.valid;
                }}
              />
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
                disabled={(isFormDirty && !isFormValid) ||
                  isSubmissionInProgress}
                isLoading={isSubmissionInProgress}
              >
                {#if toType === "community-license"}
                  Receive license
                {:else}
                  Contact sales
                {/if}
              </Button>
              {#if isFormDirty && !isFormValid}
                <legend class="text-xs text-error block mt-1 mb-2">
                  Please fill out all required fields above
                </legend>
              {/if}
            </div>
            {#if isEmailSent}
              <p>Thank you! We'll get back to you soon.</p>
            {/if}
          </form>
        {/if}
      </div>
    </Section>
  </Card>
  <Unleashing />
</div>
