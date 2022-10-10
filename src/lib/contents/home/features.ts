import type { Feature, verticalFeature } from "$lib/types/feature";
import { terminalSource, linuxSource } from "../terminal";
// @ts-ignore
import Workspaces from "$lib/components/workspaces.svelte";
import type { Card } from "$lib/types/card";

export const multiTrackDevelopmentFeature: Feature = {
  title: "Multi track development with ease",
  paragraph:
    "You can have multiple workspaces with different contexts open at once - one for your feature, one for a bug or one for your code review directly in Gitpod.",
  lottie: {
    src: "/lottie/edit_workspace.json",
    id: "edit_workspace",
  },
};

export const collaborationFeature: Feature = {
  title: "Where teams code together",
  paragraph:
    "Share running workspaces for pair programming, use port forwarding or share a snapshot as a copy of your workspace with teammates.",
  // image: {
  //   src: "/images/features/collaboration.png",
  //   alt: "Collaboration",
  //   classNames: "shadow-medium",
  //   styles: "border-radius: 7px",
  // },
  lottie: {
    src: "/lottie/share_workspace.json",
    id: "share-workspace",
  },
};

export const codeAnywhereFeature: Feature = {
  title: "Code anywhere, on any device",
  paragraph:
    "You no longer need an over-powered laptop to code, Gitpod works just as smoothly on a Chromebook or iPad. All you need is a browser. ",
  image: {
    src: "/images/features/ipad.png",
    alt: "Gitpod Workspace on an iPad.",
  },
};

export const features: Feature[] = [
  {
    title: "Remote development without friction",
    paragraph:
      "Gitpod continuously builds your git branches like a CI server so that you can start coding right away - no more waiting for dependencies to download and builds to finish.",
    moreButton: {
      text: "More on prebuilds",
      href: "/docs/configure/projects/prebuilds",
    },
    terminal: {
      source: terminalSource,
    },
  },
  {
    title: "Works on my machine - and yours",
    paragraph:
      "Spin up pre-configured, standardized dev environments from any git context when you need them and close them when you're done. You won’t go back to the friction of long-living stateful environments. ",
    previewComponent: Workspaces,
  },
];

export const otherFeatures: Feature[] = [
  multiTrackDevelopmentFeature,
  {
    title: "Bringing dev closer to prod",
    paragraph:
      "Gitpod provisions powerful Linux containers under the hood. A Linux shell with root/sudo, a file system, Docker and all other tools and binaries that run on Linux. One OS for both dev and prod.",
    moreButton: {
      href: "https://gitpod.io/workspaces/",
      text: "Try now",
    },
    terminal: {
      source: linuxSource,
      dark: true,
      shadow: false,
      narrow: true,
      skipToEnd: true,
    },
  },
  {
    ...collaborationFeature,
    moreButton: {
      href: "/docs/configure/workspaces/collaboration",
      text: "More on collaboration",
    },
  },
  {
    ...codeAnywhereFeature,
    moreButton: {
      href: "https://gitpod.io/workspaces/",
      text: "Try now",
    },
  },
];

export const carbonNeutralFeature: verticalFeature = {
  title: "Code in a carbon-neutral workspace",
  paragraph:
    "Not only is Gitpod more resource-efficient but it also runs on 100% carbon-neutral cloud servers (GCP). All the power, with a lower cost to our planet.",
  moreButton: {
    href: "https://cloud.google.com/sustainability",
    text: "More on GCP carbon neutral",
    type: "secondary",
  },
};

export const secondaryFeatures: Card[] = [
  {
    icon: {
      src: "/svg/icons/opensource.svg",
    },
    title: "Open Source",
    text: "We're free from big tech influence and integrate, not dictate. This makes our product development fast and close to our users & community.",
  },
  {
    icon: {
      src: "/svg/icons/cloud.svg",
    },
    title: "SaaS or Self-Hosted",
    text: "Use our SaaS solution running on the carbon neutral Google Cloud Platform or host Gitpod on your own cloud infrastructure using GKE, k3s, EKS or AKS.",
  },
  {
    icon: {
      src: "/svg/icons/secure.svg",
    },
    title: "Secure by design",
    text: "Gitpod centralizes all source code and safely stores it in the cloud, never locally. Security is at the core of everything we do at Gitpod. <br><a href='/security'>More about security</a>",
  },
];
