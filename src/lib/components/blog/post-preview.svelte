<script lang="ts">
  import { isAnExternalLink } from "$lib/utils/helpers";
  import { authorSocialMediaLinks } from "$lib/contents/authors";

  import type { BlogPost } from "$lib/types/blog-post";
  import Avatars from "$lib/components/ui-library/avatars";
  import Pill from "../pill.svelte";

  export let post: BlogPost;
  export let isMostRecent: boolean = false;
  export let type: "blog" | "guides" | "customers" | "education";
  export let layout: "row" | "column" = "column";
  export let teaserHeightClass: string = "h-64";
  export let availability: boolean = true;
  export let headlineOrder: "h3" | "" = "";

  const generateURL = () => {
    if (post && post.href) return post.href;
    if (type === "education") return `/for/education/${post.slug}`;
    return `/${type}/${post.slug}`;
  };

  const href = generateURL();
  const target =
    post && post.href && isAnExternalLink(post.href) ? "_blank" : undefined;
</script>

<a
  {href}
  {target}
  sveltekit:prefetch
  class:pointer-events-none={!availability}
  tabindex={!availability && -1}
  class:bg-sand-dark={!isMostRecent}
  class="flex flex-col max-w-sm lg:max-w-none text-left stroked group {!isMostRecent
    ? 'bg-sand-dark dark:bg-card'
    : ''} {layout === 'column'
    ? ''
    : 'lg:flex-row lg:max-w-6xl mx-auto'} rounded-xl bg-card transition-all duration-200 {availability &&
    'hover:shadow-normal focus:shadow-normal'}"
  data-analytics={`{"context":"grid","variant":"preview"}`}
>
  {#if isMostRecent}
    <div>
      <div
        role="img"
        aria-label={`${type === "blog" ? "Blog post" : "Guide"}: ${post.title}`}
        class="object-cover m-auto overflow-hidden rounded-t-xl bg-center bg-cover w-full {teaserHeightClass} {layout ===
        'column'
          ? ''
          : 'lg:rounded-l-xl lg:rounded-tr-none lg:w-60 lg:h-full'}"
        style={`background-image: url(${
          post.isNotAnActualPost
            ? post.image
            : `/images/${type}/${post.slug}/${post.image}`
        });`}
      />
    </div>
  {/if}
  <div
    class="{layout === 'column'
      ? 'flex-col h-full flex-nowrap'
      : 'flex-wrap'} flex lg:justify-between p-xx-small pt-x-small"
  >
    <div>
      {#if !availability}
        <Pill text="soon" variant="pink" />
      {/if}
      <div class:mt-micro={!availability}>
        {#if headlineOrder === "h3"}
          <h3
            class="text-h4 text-important group-focus:underline group-hover:underline"
          >
            {post.title}
          </h3>
        {:else}
          <h2
            class="text-h4 text-important group-focus:underline group-hover:underline"
          >
            {post.title}
          </h2>
        {/if}
      </div>
      <p>{post.excerpt}</p>
    </div>
    <p class="mt-micro">
      <span>
        {#if post.author}
          <Avatars
            usernames={post.author}
            socialMediaLinks={authorSocialMediaLinks}
            socialMediaLinkClasses="hover:drop-shadow"
          />
        {/if}
        {#if post.date}
          <span class="date text-p-small ml-macro">
            {new Date(Date.parse(post.date)).toLocaleDateString(undefined, {
              year: "numeric",
              month: "short",
              day: "numeric",
            })}
          </span>
        {/if}
      </span>
    </p>
  </div>
</a>
