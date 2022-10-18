<script lang="ts">
  import Card from "$lib/components/ui-library/card/card.svelte";
  import Avatars from "$lib/components/ui-library/avatars/avatars.svelte";
  import { authors, authorSocialMediaLinks } from "$lib/contents/authors";
  import Calendar from "$lib/components/svgs/webinars/calendar.svelte";
  import Clock from "$lib/components/svgs/webinars/clock.svelte";
  import LinkButton from "$lib/components/ui-library/link-button/link-button.svelte";

  const authorDisplayNames = Object.entries(authors).reduce(
    (displayNames, [username, profile]) => {
      displayNames[username] = profile.name;
      return displayNames;
    },
    {}
  );

  export let title: string;
  export let people: string;
  export let date: string;
  export let duration: string;
  export let description: string;
  export let href: string;
</script>

<Card
  class="flex shadow-normal px-xx-small py-small flex-col justify-between md:p-x-large"
  size="medium"
>
  <div class="flex flex-col">
    <h3 class="text-h4 mb-x-small">{title}</h3>
    <div class="mb-x-small">
      <Avatars
        usernames={people}
        displayNames={authorDisplayNames}
        socialMediaLinks={authorSocialMediaLinks}
        socialMediaLinkClasses="inline-flex mr-2 px-2 bg-white dark:bg-card rounded-xl text-body focus:bg-card focus:text-important hover:bg-card hover:text-important"
        socialMediaImgClasses="mr-2 h-6 w-6 place-self-center"
      />
    </div>
    <div class="flex text-p-large items-center mb-micro">
      <Calendar class="h-7 w-7 mr-micro" />
      {date}
    </div>
    <div class="flex text-p-large mb-x-small items-center">
      <Clock class="h-7 w-7 mr-micro" />
      {duration}
    </div>
    <p class="text-p-large mb-x-small">
      {@html description}
    </p>
  </div>
  <div>
    <LinkButton size="large" variant="primary" {href}
      >Add to your schedule</LinkButton
    >
  </div>
</Card>
