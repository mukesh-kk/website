import type { Card } from "../types/card";
import type { PartnershipCard } from "../types/enterprise";
import type { ExploreSection } from "../types/explore-section";
import type { Feature, verticalFeature } from "../types/feature";
import Ides from "../components/svgs/ides.svelte";
import GitProviders from "../components/svgs/enterprise/git-providers.svelte";
import { linuxSource } from "./terminal";
import Jetbrains from "$lib/components/svgs/brands/jetbrains.svelte";
import type { Quote } from "$lib/types/quote";
import {
  quizletQuote,
  factorialQuote,
  sharesIoQuote,
  vizlibQuote,
} from "./customers";
import { jetbrainsQuote } from "./jetbrains-space";

export const exploreContents: ExploreSection = {
  title: "Talk to an expert",
  description:
    "Spin up fresh cloud development environments for each task, in the cloud, in seconds",
  link: {
    text: "Talk to an expert",
    href: "/contact/sales?subject=enterprise",
  },
  useKumquatIllustration: false,
};

export const featureCards: {
  card: Card;
  pill?: { text: string; variant: "pink" | "orange" | "gray" | "violet" };
}[] = [
  {
    card: {
      title: "SaaS",
      text: "Use Gitpod CDEs in our secure cloud with minimal setup time and effort. Scales with your usage.",
      icon: {
        src: "/svg/icons/cloud.svg",
        alt: "Cloud Icon",
      },
      link: {
        href: "/contact/get-demo",
        text: "Get a demo",
      },
    },
  },
  {
    pill: {
      text: "Early access",
      variant: "pink",
    },
    card: {
      title: "Dedicated",
      text: "Maximize security. Run a private instance of Gitpod managed by us in your cloud or ours.",
      icon: {
        src: "/svg/icons/secure.svg",
        alt: "Cloud Icon",
      },
      link: {
        href: "/dedicated",
        text: "Request early access",
      },
    },
  },
];

// Using on self-hosted page

export const dedicatedCards: {
  card: Card;
  pill?: { text: string; variant: "pink" | "orange" | "gray" | "violet" };
}[] = [
  {
    card: {
      title: "Private connections",
      text: "Set up private connections to your dev resources",
      icon: {
        src: "/svg/icons/secure.svg",
        alt: "Secure Icon",
      },
    },
  },
  {
    card: {
      title: "Region of choice",
      text: "Deploy your dedicated instance in your region of choice",
      icon: {
        src: "/svg/icons/cloud.svg",
        alt: "Cloud Icon",
      },
    },
  },
  {
    card: {
      title: "Faster Gitpod",
      text: "Get faster startup times and lower latency",
      icon: {
        src: "/svg/icons/clock.svg",
        alt: "Clock Icon",
      },
    },
  },
  {
    card: {
      title: "Fully compliant",
      text: "Comply with local data residency requirements",
      icon: {
        src: "/svg/icons/lock.svg",
        alt: "Lock Icon",
      },
    },
  },
];

export const partnershipCards: PartnershipCard[] = [
  {
    title: "GitLab",
    img: {
      src: "/svg/gitlab.svg",
      alt: "GitLab Logo",
    },
    link: {
      href: "/blog/gitlab-integration",
      text: "Read announcement",
    },
  },
  {
    title: "JetBrains",
    svg: {
      component: Jetbrains,
      props: {
        isDark: true,
      },
    },
    link: {
      href: "/blog/gitpod-jetbrains",
      text: "Read announcement",
    },
  },
  {
    title: "Tailscale",
    img: {
      src: "/svg/tailscale.svg",
      alt: "Tailscale Logo",
    },
    imgDark: {
      src: "/svg/tailscale-dark.svg",
      alt: "Tailscale Logo",
    },
    link: {
      href: "/blog/tailscale",
      text: "Read announcement",
    },
  },
];

export const integrateFeatures: verticalFeature[] = [
  {
    paragraph:
      "Gitpod natively integrates with JetBrains IDEs and VS Code. Other IDEs can be configured easily.",
    title: "Bring your IDE",
    previewComponent: Ides,
  },
  {
    paragraph:
      "It doesn’t matter whether your company works with GitHub, Gitlab or Bitbucket. You can start Gitpod from any Git repository.",
    title: "Connect your Git provider",
    previewComponent: GitProviders,
  },
];

const multiTrackDevelopmentFeature: Feature = {
  title: "Onboard developers in seconds",
  paragraph:
    "Effective day 1. Developers are ready-to-code with the click of a button.",
  lottie: {
    src: "/lottie/edit_workspace.json",
    id: "edit_workspace",
  },
};

const collaborationFeature: Feature = {
  title: "Faster collaboration across teams",
  paragraph:
    "Pair programming, code reviews, live debugging. Workspaces can be shared in real-time across multiple users.",
  lottie: {
    src: "/lottie/share_workspace.json",
    id: "share-workspace",
  },
};

const codeAnywhereFeature: Feature = {
  title: "Let your team work from anywhere, on any device",
  paragraph:
    "Gitpod CDEs move your workload to the cloud. No need to ship expensive hardware around the world - use any computer to code securely.",
  image: {
    src: "/images/features/ipad.webp",
    alt: "Gitpod Workspace on an iPad.",
    width: "100%",
    height: "100%",
  },
};

export const otherFeatures: Feature[] = [
  multiTrackDevelopmentFeature,
  {
    ...codeAnywhereFeature,
  },
  {
    ...collaborationFeature,
  },
  {
    title: "Secure your environments",
    paragraph:
      "Each Gitpod workspace or prebuild runs on a fully isolated & secured single-use container providing fast startup times without compromising on security.",
    terminal: {
      source: linuxSource,
      dark: true,
      shadow: false,
      narrow: true,
      skipToEnd: true,
    },
  },
];

export const quotes: Quote[] = [
  quizletQuote,
  factorialQuote,
  jetbrainsQuote,
  sharesIoQuote,
  vizlibQuote,
];
