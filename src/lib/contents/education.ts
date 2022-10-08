import pulumiSvelte from "$lib/components/svgs/brands/pulumi.svelte";
import redisUniverstySvelte from "$lib/components/svgs/brands/redis-universty.svelte";
import type { Brand } from "$lib/types/brand";
import type { Card } from "$lib/types/card";
import type { FAQ } from "$lib/types/faq";
import type { Feature } from "$lib/types/feature";
import { codeInstitute, fourGeeks, freeCodeCamp } from "./home";
import { codeAnywhereFeature } from "./home/features";
import { terminalSource } from "./terminal";

export const features: Feature[] = [
  {
    title: "Automated setup for every student",
    paragraph: `Give every student a one-click setup button so they're ready to follow the lesson and start learning.
		<span class="block mt-x-small">
			No need to spend time on manual configuration setups that require assistance.
		</span>`,
    terminal: {
      source: terminalSource,
    },
  },
  {
    title: "Collaborate on code together",
    paragraph:
      "Share running workspaces for pair programming and for helping students directly in their running developer environment.",
    lottie: {
      src: "/lottie/share_workspace.json",
      id: "share-workspace",
    },
  },
  codeAnywhereFeature,
];

export const programBenefits: Card[] = [
  {
    icon: {
      src: "/svg/media-kit/logo-mark.svg",
      alt: "Gitpod",
    },
    title: "75% student discount",
    text: "Educational institutions receive a 75% discount on the Unleashed Plan.",
  },
  {
    icon: {
      src: "/svg/icons/cloud.svg",
      alt: "Gitpod",
    },
    title: "Leading technology",
    text: "Get ahead of the curve and teach students with the infrastructure used by Google, Facebook, and Shopify.",
  },
  {
    icon: {
      src: "/svg/icons/clock.svg",
      alt: "Gitpod",
    },
    title: "Save time",
    text: "Every student starts ready to learn in one click.",
  },
];

export const getStartedFeatures: Card[] = [
  {
    icon: {
      src: "/svg/icons/team.svg",
      alt: "Team",
    },
    title: "Try Gitpod for free",
    text: "Open your code repository in Gitpod and experiment with automating your setup.",
    link: {
      href: "/docs/introduction/getting-started",
      text: "Get started",
      btnSize: "large",
      variant: "primary",
    },
  },
  {
    icon: {
      src: "/svg/brands/discord.svg",
      alt: "Team",
    },
    title: "Join our community",
    text: "Open your code repository in Gitpod and experiment with automating your setup.",
    link: {
      href: "https://www.gitpod.io/chat",
      text: "Join Discord",
      btnSize: "large",
      variant: "cta",
    },
  },
];

export const brands: Brand[] = [
  fourGeeks,
  freeCodeCamp,
  codeInstitute,
  {
    logo: pulumiSvelte,
    alt: "Pulumi",
  },
  {
    logo: redisUniverstySvelte,
    alt: "Redis Universty",
  },
];

export const educationFAQ: FAQ = {
  headline: "FAQs",
  items: [
    {
      title:
        "My lessons don't start with code. How does Gitpod help my students?",
      content: `
				<p>
					An empty Gitpod workspace with no code comes pre-installed with many common developer tools including Git, Node, Java, and Go. These can be difficult for students to install themselves, especially when your instruction may be based on a specific version.
				</p>
				<p>
					Many scripts run differently on Mac, Windows, and Linux, but since Gitpod runs everything in a Linux container, students are guaranteed a consistent experience no matter what device they use.
				</p>
			`,
    },
    {
      title: "Do users get their own workspaces? How does collaboration work?",
      content: `
				<p>
					When a user starts a Gitpod workspace, they get their own unique clone of the developer environment where they can code independently.
				</p>
				<p>
					Users can share their workspace to allow others to access their dev environment exactly as they do, which can allow instructors to help students directly.
				</p>
				<p>
					Alternatively, collaboration features like VS Code Live Share still work with Gitpod.
				</p>
			`,
    },
    {
      title:
        "How well does Gitpod work on unstable (eg: hotels/conferences) connections?",
      content: `
				<p>
					Gitpod workspaces actually often require less bandwidth than local development because dependencies and SDKs stay in the cloud instead of being downloaded to your local machine.
				</p>
				<p>
					There is some overhead of a persistent connection, with your IDE operating as a thin client communicating with Gitpod, but the remote development features in VS Code and JetBrains Gateway are designed to be resilient with unstable connections and reconnecting automatically.
				</p>
			`,
    },
  ],
};
