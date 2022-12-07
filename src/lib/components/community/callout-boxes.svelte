<script lang="ts">
  import FeatureBoxes from "$lib/components/vs/feature-boxes.svelte";
  import Section from "$lib/components/section.svelte";
  import FeatureBox from "$lib/components/feature-box.svelte";
  import { session } from "$app/stores";
  import type { BlogPost } from "$lib/types/blog-post";
  import PostPreview from "$lib/components/blog/post-preview.svelte";

  const post = $session.posts.find(
    (p: BlogPost) =>
      p.slug === "what-we-learned-growing-a-community-from-500-5000"
  );
</script>

<Section>
  <h2 class="text-center h2 !mb-x-small md:!mb-medium">
    Learn more about our community
  </h2>
  <FeatureBoxes>
    <FeatureBox
      feature={{
        title: "Gitpod Community Heroes",
        paragraph:
          "Join us empowering developers to make engineering collaborative and joyful again. Are you our next community hero?",
        moreButton: {
          text: "View Community Heroes Program",
          href: "/community/heroes",
        },
        image: {
          src: "/images/community/squad-background.jpg",
          alt: "Community Heroes",
          classNames: "rounded-2xl",
        },
      }}
    />
    <FeatureBox
      feature={{
        title: "Community Office Hours playlist",
        paragraph:
          "Our bi-weekly Office Hours are an opportunity to give the community the stage to share what they’ve built with Gitpod, for Gitpodders to share product insights and gain feedback.",
        moreButton: {
          text: "Join discord",
          href: "https://www.gitpod.io/chat",
        },
        ctaButton: {
          text: "View playlist",
          href: "https://www.youtube.com/playlist?list=PL3TSF5whlprU4vRoYBK6-QhFAbwAsoKmu",
        },
        image: {
          src: "/images/illustration-screen.png",
          darkSrc: "/images/illustration-screen-dark.png",
          alt: "Illustration of a monitor with orange background",
          classNames: "scale-75",
        },
      }}
    />
  </FeatureBoxes>
  <div class="flex mt-x-small lg:mt-x-small max-w-7xl mx-auto justify-center">
    <PostPreview
      textWidth="max-w-2xl"
      badge="Blog Post"
      {post}
      type="blog"
      layout="row"
      isMostRecent={true}
    />
  </div>
</Section>
