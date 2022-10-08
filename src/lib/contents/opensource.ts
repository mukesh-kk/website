import type { Feature } from "$lib/types/feature";
import type { Quote } from "$lib/types/quote";
// @ts-ignore
import Workspaces from "$lib/components/workspaces.svelte";
import { linuxSource } from "./terminal";
import type { Card } from "$lib/types/card";
import type { ExploreSection } from "$lib/types/explore-section";
import {
  codeAnywhereFeature,
  multiTrackDevelopmentFeature,
} from "./home/features";
import type { FAQ } from "$lib/types/faq";
// @ts-ignore
import redwoodjsSvelte from "$lib/components/svgs/customers/redwoodjs.svelte";
// @ts-ignore
import prismaSvelte from "$lib/components/svgs/opensource/prisma.svelte";
// @ts-ignore
import prometheusSvelte from "$lib/components/svgs/opensource/prometheus.svelte";
// @ts-ignore
import theiaSvelte from "$lib/components/svgs/opensource/theia.svelte";
import openVscodeSvelte from "$lib/components/svgs/opensource/open-vscode.svelte";
import werftSvelte from "$lib/components/svgs/opensource/werft.svelte";

export const quotes: Quote[] = [
  {
    text: "Gitpod totally changed the development velocity for RedwoodJS—it removed any issues related to configurations of dev environments and made it incredibly easy to contribute. Reviewing pull requests is delightful because they are prebuilt and ready for review!",
    author: "Tom Preston-Werner",
    jobTitle: "Co-founder of GitHub",
    companyLogo: redwoodjsSvelte,
    link: { href: "/customers/redwoodjs", text: "View Customer Story" },
    img: {
      src: "/images/opensource/mojombo.jpg",
      square: true,
      alt: "",
    },
  },
  {
    text: "I'm using Gitpod almost daily when trying out new technologies, working on OSS PRs/repros or when giving demos. Welcome to the promised land of cloud development environments.",
    author: "Johannes Schickling",
    jobTitle: "Co-founder of Prisma",
    companyLogo: prismaSvelte,
    img: {
      src: "/images/opensource/schickling.jpg",
      square: true,
      alt: "",
    },
  },
  {
    text: `With Gitpod, I can review at any pull request in a full coding environment where I can edit, build, and test the contribution, by just prepending "http://gitpod.io#". Gitpod makes the pull-request review process so much nicer for me and I no longer have to do any local checkouts.`,
    author: "Julius Volz",
    jobTitle: "Co-founder of Prometheus",
    companyLogo: prometheusSvelte,
    img: {
      src: "/images/opensource/juliusv.jpg",
      square: true,
      alt: "",
    },
  },
];

export const features: Feature[] = [
  {
    title: "Onboard contributors in seconds",
    paragraph:
      "Often the problem with building a community of contributors is the project setup friction. With Gitpod, people can contribute to your project with a single click. Tedious environment setups, contributing guides and maintenance activities no longer exist. You'll receive more contributions and contributions are easier to review!",
    previewComponent: Workspaces,
  },
  {
    ...multiTrackDevelopmentFeature,
    paragraph:
      "You can have multiple workspaces running at the same time. Start your day by opening each new pull-request in seperate side by side workspaces. Thanks to <a href='https://www.youtube.com/watch?v=ZtlJ0PakUHQ'>pre-builds</a> contributions are already compiled and ready to go.",
  },
  {
    title: "Accept contributions safely",
    paragraph:
      "With Gitpod, no packages or dependencies are downloaded to your devices which <a href='https://ghuntley.com/sudo-rm-rf/'>contains security incidents</a> and inhibits malicious actors pivoting towards completely compromising your workstation.",
    terminal: {
      source: linuxSource,
      dark: true,
      shadow: false,
      narrow: true,
      skipToEnd: true,
    },
  },
  {
    ...codeAnywhereFeature,
    paragraph:
      "No need for over powered laptops, a chrome book and <a href='https://ghuntley.com/anywhere'>even an iPad</a> will work just fine. Everyone can contribute even if they don't have access to powerful (expensive) computers.",
  },
];

export const programBenefits: Card[] = [
  {
    icon: {
      src: "/svg/media-kit/logo-mark.svg",
      alt: "Gitpod",
    },
    transform: "scale(.95)",
    title: "Gitpod for free",
    text: "Maintainers get unlimited hours for usage on public repos. Contributors to your project are provided with a generous free plan for up to 50h a month, including private repos. For projects that run their own infrastructure complimentary <a href='/self-hosted'>Gitpod Self-Hosted</a> licenses are also available.",
  },
  {
    icon: {
      src: "/svg/icons/heart.svg",
      alt: "Special treats",
    },
    transform: "scale(0.8)",
    title: "Special treats",
    text: "If your open-source software appears in our bill of materials then Gitpod would like to unconditionally <a href='https://github.com/moby/buildkit/issues/2525'>shout you some beers</a> <a href='/blog/devxconf-wrap'>or more</a> as our way of saying thank-you.",
  },
  {
    icon: {
      src: "/svg/icons/chat.svg",
      alt: "Personal onboarding",
      transform: "scale(.85)",
    },
    title: "Personal onboarding",
    text: "We are here to help you with getting started and can provide ongoing support for maintaining the <a href='/docs/references/gitpod-yml'>.gitpod.yml</a> if you want.",
  },
];

export const faqs: FAQ = {
  headline: "FAQs",
  items: [
    {
      title: "My Gitpod account has been automatically upgraded?",
      content:
        "Over 18,000 people in the GitHub ecosystem were pre-qualified on the 16th of Feburary 2022 for complimentary professional open source accounts with unlimited hours. If you are in the short-list your account will be automatically upgraded either upon account creation or when you next start a workspace with your existing account. No action is required. See the <a href='/blog/gitpod-for-opensource'>announcement blog post</a> and this <a href='https://github.com/gitpod-io/gitpod/issues/8212'>pull-request for specifics</a>.",
    },
    {
      title: "I'm not eligible but still want to use Gitpod",
      content:
        "We have a very generous <a href='/pricing'>free plan</a> for up to 50h a month, including private repos.",
    },
  ],
};

export const cards: Card[] = [
  {
    icon: {
      src: "/svg/opensource/openvsx.svg",
      alt: "Open VSX Registry",
    },
    title: "Open VSX Registry",
    text: "A marketplace for open-source VS Code extensions that can be used for any compatible editor.",
    link: {
      href: "https://github.com/eclipse/openvsx",
      text: "View on GitHub",
    },
  },
  {
    icon: {
      src: "/svg/opensource/leeway.svg",
      alt: "Leeway",
    },
    title: "Leeway",
    text: "Leeway is a heavily caching build system for Go, Yarn and Docker projects.",
    link: {
      href: "https://github.com/gitpod-io/leeway",
      text: "View on GitHub",
    },
  },
  {
    icon: theiaSvelte,
    title: "Theia",
    text: "An extensible framework to develop full-fledged multi-language Cloud & Desktop IDEs.",
    link: {
      href: "https://github.com/eclipse-theia/theia",
      text: "View on GitHub",
    },
  },
  {
    icon: openVscodeSvelte,
    transform: "scale(1.5)",
    title: "OpenVS Code",
    text: "A version of VS Code that runs a server on a remote machine and allows access through a modern web browser.",
    link: {
      href: "https://github.com/gitpod-io/openvscode-server",
      text: "View on GitHub",
    },
  },
  {
    icon: {
      src: "/svg/opensource/dazzle.svg",
      alt: "Dazzle",
    },
    title: "Dazzle",
    text: 'An Docker/OCI image builder to build independent layers where a change to one layer does not invalidate the ones sitting "above" it.',
    link: {
      href: "https://github.com/gitpod-io/dazzle/",
      text: "View on GitHub",
    },
  },
  {
    icon: werftSvelte,
    title: "Werft",
    text: "Werft is a Kubernetes-native CI system. It knows no pipelines, just jobs and each job is a Kubernetes pod. What you do in that pod is up to you.",
    link: {
      href: "https://github.com/csweichel/werft",
      text: "View on GitHub",
    },
  },
];

export const exploreContents: ExploreSection = {
  title: "Apply Now",
  description:
    "Spend less time reviewing pull-requests, onboarding contributors and more time on building great things.",
  note: "Upgrade your account to our complimentary professional open source plan.",
  link: {
    text: "Apply Now",
    href: "https://bit.ly/gitpod-for-opensource-application-form",
  },
};
