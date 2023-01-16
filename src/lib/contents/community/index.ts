import type { Feature } from "$lib/types/feature";
import type { Card } from "$lib/types/card";
import type { ContentCard } from "$lib/types/community";
import type { Testimonial } from "$lib/types/testimonial";

export const testimonials: Testimonial[] = [
  {
    name: "Pranav Shikarpur",
    avatar: "snpranav.jpg",
    text: `
    I find it crazy that I can write code from my iPad 30,000 feet ✈️ off the ground thanks to @gitpod
    <br /><br />
    The IDE experience is a little buggy on the iPad browser, but this seems like the future of coding 🤯
    `,
    org: "@snpranav",
  },
  {
    name: "Daniel Maricic",
    avatar: "wossio.jpg",
    text: `
    it has been 3 months since i started using and paying @gitpod as my default env (in browser), replacing WSL + vscode + docker. The benefits are huge! Disposable workspaces are the best feature.
    Also @AnagolayNet, @IdiyanaleNet & @kelp_digital are developed with them exclusively
    `,
    org: "@woss_io",
  },
  {
    name: "arryangga",
    avatar: "arryanggaputra.jpg",
    text: `
    Thanks, @gitpod
    for the amazing work. You let us move our work environment to the cloud.
    `,
    org: "@arryanggaputra",
  },
  {
    name: "Mike Fiedler, Code Gardener",
    avatar: "mikefiedler.jpg",
    text: `
    I gotta say, open source contribution with projects that have figured out @gitpod
    setup (and prebuilds!) is a freaking DREAM 🤩
    `,
    org: "@mikefiedler",
  },
];

export const contributeToGitpod: Feature = {
  title: "Contribute to Gitpod",
  paragraph:
    "Gitpod’s source code is open-source and we are more than happy to receive community contributions.",
  moreButton: {
    href: "https://www.gitpod.io/docs/help/contribute/features-and-patches",
    text: "Contribute to Gitpod",
  },
  secondaryButton: {
    href: "https://www.gitpod.io/docs/help/contribute/documentation",
    text: "Contribute to website",
  },
  image: {
    src: "/images/community/contribute-to-gitpod.png",
    alt: "Gitpod's GitHub Repo README.md and the Open Issues",
  },
};

export const letsCollaborateActions: Card[] = [
  {
    title: "Author a blog post",
    text: "Do you have a cool story to share related to Gitpod? Publish a guest post on our blog.",
    link: {
      href: "https://github.com/gitpod-io/website/issues/new/choose ",
      text: "Open a PR",
    },
  },
  {
    title: "Publish a guide",
    text: "Do you have a project integration guide to share? Share it with the community on guides.",
    link: {
      href: "https://github.com/gitpod-io/website/issues/new/choose",
      text: "Open a PR",
    },
  },
  // Note: Commented out until its needed again
  // {
  //   title: "Join affiliate program",
  //   text: "Do you have some reach and regulary convince people about using Gitpod? Let’s discuss a collaboration.",
  //   link: {
  //     href: "/contact/support",
  //     text: "Get in contact",
  //   },
  // },
];

export const overviewCards = [
  {
    title: "Learn",
    text: "Learn how to optimize your Gitpod setup and improve your dev workflows. Deep-dive into the projects our community is building on Gitpod.",
  },
  {
    title: "Connect",
    text: "Join a global community and connect with like-minded folks in every niche of software development. Get to know the engineers who are building Gitpod.",
  },
  {
    title: "Build",
    text: "Build awesome projects, utilizing the power in the cloud with Gitpod. Our community will support you along the way and make every step easier.",
  },
];

export const contributionMonths = ["September 2022", "October 2022"];

export const contributionHighlights: ContentCard[] = [
  {
    date: "October 2022",
    badge: "Content",
    contributor: "Maciej Walkowiak",
    text: "Maciej Walkowiak published a guide on how to use a custom Java distribution on Gitpod",
    title: "How to use a custom Java distribution on Gitpod",
    link: {
      href: "/guides/custom-java-distribution-on-gitpod",
      text: "View Guide",
    },
  },
  {
    date: "October 2022",
    badge: "Community office hours",
    contributor: "Evan Mattiza",
    text: "During our Community Office Hours, Evan Mattiza gave a deep dive into Nix and how he uses Nix with Gitpod.",
    title: "Demo during our community office hours",
    link: {
      href: "https://www.youtube.com/watch?v=GpcLaV5Srpw",
      text: "View Recording",
    },
  },
  {
    date: "October 2022",
    badge: "Discord contribution",
    contributor: "David Bakin",
    text: "David Bakin (david.bakin#0108) has been actively helping the community with questions in our Discord server. In the past 30 days, he’s contributed 89 times across the server by answering questions and contributing to discussions! ✨",
    title: "89 amazing Discord contributions",
  },

  {
    date: "September 2022",
    badge: "Content",
    contributor: "William J. Ghelfi",
    text: "William J. Ghelfi wrote this blog post, “Idiomatic Gitpod” to explain the power of ephemeral nature of Gitpod workspaces.",
    title: "Idiomatic Gitpod",
    link: {
      href: "https://www.williamghelfi.com/blog/2022-09-26-idiomatic-gitpod/ ",
      text: "Read Post",
    },
  },
  {
    date: "September 2022",
    badge: "Content",
    contributor: "Julien and Tom",
    text: "We hosted a panel with two community Heroes: Julien and Tom about Java development on Gitpod.",
    title: "Success and failure stories of Java developers shifting to remote",
    link: {
      href: "https://www.youtube.com/watch?v=Tgb7CBoqoqg",
      text: "Watch recording",
    },
  },
  {
    date: "September 2022",
    badge: "Content",
    contributor: "Josep Jaume",
    text: "Josep Jaume started a Gitpod workspace on his Steam Deck - because why not?",
    title: "Run Gitpod…anywhere!",
    link: {
      href: "https://twitter.com/josepjaume/status/1567490383373914114",
      text: "View Tweet",
    },
  },
];
