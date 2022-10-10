<script>
  import SectionCommon from "../section-common.svelte";
  import LinkButton from "../ui-library/link-button";
  import YoutubeEmbed from "../youtube-embed.svelte";
</script>

<SectionCommon
  title="Made by an amazing team"
  text="Gitpod wouldn’t be what it is today without this talented, humble and joyful team."
  textClassNames="mb-x-small"
>
  <div slot="content" class="flex flex-col items-center">
    <LinkButton href="#" variant="primary" size="large" class="mb-small">
      Meet the team
    </LinkButton>

    <div class="max-w-full w-[990px] mx-auto">
      <YoutubeEmbed
        title="Gitpod Offsite Portugal 2022"
        embedId="8QQKs3hFnMg"
      />
    </div>
  </div>
</SectionCommon>
