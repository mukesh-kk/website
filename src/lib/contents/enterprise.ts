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
  factorialQuote,
  redwoodJsQuote,
  sharesIoQuote,
  vizlibQuote,
} from "./customers";
import { jetbrainsQuote } from "./jetbrains-space";

export const exploreContents: ExploreSection = {
  title: "Get demo",
  description:
    "Spin up fresh, automated dev environments for each task, in the cloud, in seconds",
  link: { text: "Contact sales", href: "/contact/sales" },
  useKumquatIllustration: false,
};

export const featureCards: Card[] = [
  {
    title: "Self-hosted",
    text: "Gitpod, managed on your own instances. Run Gitpod behind corporate firewalls or on air-gapped networks with full control.",
    icon: {
      src: "/svg/logo-textless.svg",
      alt: "Gitpod Logo",
    },
    link: {
      href: "/contact/sales",
      text: "Get demo",
    },
  },
  {
    title: "SaaS",
    text: "Gitpod, managed in the cloud for you. Secure data storage in the cloud and minimal setup cost. Scale users as you need with full flexibility.",
    icon: {
      src: "/svg/icons/cloud.svg",
      alt: "Cloud Icon",
    },
    link: {
      href: "/pricing",
      text: "See pricing",
    },
  },
];

export let partnershipCards: PartnershipCard[] = [
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
  title: "Onboard developers with one click",
  paragraph:
    "Developers are ready to code at the click of the button. Internal and external developers become effective on day 1.",
  lottie: {
    src: "/lottie/edit_workspace.json",
    id: "edit_workspace",
  },
};

const collaborationFeature: Feature = {
  title: "Enable faster collaboration across teams",
  paragraph:
    "Workspaces can be shared in real time, in seconds. Use preview environments for quick and easy collaboration across your entire product org.",
  lottie: {
    src: "/lottie/share_workspace.json",
    id: "share-workspace",
  },
};

const codeAnywhereFeature: Feature = {
  title: "Let your team work from anywhere, on any device",
  paragraph:
    "Gitpod moves the workload to the cloud. No need to ship overpowered laptops around the world. Use any computer to code securely.",
  image: {
    src: "/images/features/ipad.png",
    alt: "Gitpod Workspace on an iPad.",
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
    title: "Protect your company source code from malicious attacks",
    paragraph:
      "Gitpod never stores source code locally. No matter what device your developers use or where they are located. Gitpod is secure by design.",
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
  factorialQuote,
  jetbrainsQuote,
  sharesIoQuote,
  vizlibQuote,
];
