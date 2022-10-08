import type { Pricing } from "$lib/types/pricing";
import { isEurope } from "$lib/utils/helpers";
import type { Card } from "$lib/types/card";
// @ts-ignore
import RedeemOffer from "$lib/components/pricing/redeem-offer.svelte";
import type {
  FeatureTable,
  FeatureTableColumn,
  FeatureTableToc,
} from "../components/ui-library/feature-table/feature-table";
import type { FAQ } from "../types/faq";
// @ts-ignore
import githubMarkSvelte from "$lib/components/svgs/github-mark.svelte";

export const pricingPlans: Pricing[] = [
  {
    title: "Free",
    price: isEurope() ? "€0" : "$0",
    features: [
      "50 hours/month",
      "Public & private repos",
      {
        text: "4 parallel workspaces",
        tooltip: "Open up to 4 workspaces per user in parallel.",
      },
      {
        text: "30min inactivity timeout",
        tooltip:
          "Workspaces are stopped automatically after 30min of inactivity.",
      },
    ],
    btnText: "Try now",
    btnHref: "https://gitpod.io/workspaces/",
    trackingName: "free",
  },
  {
    title: "Personal",
    price: isEurope() ? "€8" : "$9",
    duration: "per user/month",
    features: ["All in Free", "100 hours/month"],
    btnText: "Choose plan",
    btnHref: "https://gitpod.io/plans",
    trackingName: "personal",
  },
  {
    title: "Professional",
    price: isEurope() ? "€23" : "$25",
    duration: "per user/month",
    features: [
      "All in Personal",
      "Unlimited hours",
      {
        text: "8 parallel workspaces",
        tooltip: "Open up to 8 workspaces per user in parallel.",
      },
    ],
    btnText: "Choose plan",
    btnHref: "https://gitpod.io/plans",
    spiced: true,
    trackingName: "professional",
  },
  {
    title: "Unleashed",
    price: isEurope() ? "€35" : "$39",
    duration: "per user/month",
    features: [
      "All in Professional",
      {
        text: "16 parallel workspaces",
        tooltip: "Open up to 16 workspaces per user in parallel.",
      },
      "1hr inactivity timeout",
      {
        text: "3hr timeout boost",
        tooltip: "Activate up to 3hr extra workspace inactivity timeout boost.",
      },
    ],
    btnText: "Choose plan",
    btnHref: "https://gitpod.io/plans",
    trackingName: "unleashed",
  },
];

export const empowermentFeatures: Card[] = [
  {
    title: "Pro OSS developers",
    text: "Professional open-source developers, can apply to our free Professional Open Source Plan.",
    link: {
      text: "View requirements",
      href: "/for/opensource",
    },
  },
  {
    title: "Startups",
    text: "Startups can get up to 2 years of Gitpod for free, no matter how fast your developers and workloads scale.",
    link: {
      text: "View Startups Program",
      href: "/for/startups",
    },
  },
  {
    title: "Students & teachers",
    text: "For those still learning the ropes, you can get our Unleashed Plan for <strong>€8 per month</strong> instead of €36/month.",
    modal: {
      btnText: "Redeem offer",
      modalContentComponent: RedeemOffer,
    },
  },
];

export const freePlanTableData: FeatureTableColumn = {
  link: {
    href: "https://gitpod.io/workspaces",
    label: "Try now",
  },
  header: {
    headline: "Free",
    subtitle: `${isEurope() ? "€" : "$"}0 per user/month`,
  },
  enteries: [
    {
      items: [
        {
          term: "Public & private repos",
          text: "limited to 50h",
        },
        {
          term: "Inactivity timeout",
          text: "30min",
        },
        {
          term: "Timeout boost",
          availability: false,
        },
        {
          term: "Parallel workspaces",
          text: "4",
        },
        {
          term: "Prebuilds",
          availability: true,
        },
        {
          term: "Shared workspaces",
          availability: true,
        },
        {
          term: "Snapshots",
          availability: true,
        },
        {
          term: "Admin dashboard",
          availability: false,
        },
        {
          term: "Encrypted backups",
          availability: true,
        },
        {
          term: "Multi-ide support",
          availability: true,
        },
        {
          term: "GitLab",
          availability: true,
        },
        {
          term: "GitHub",
          availability: true,
        },
        {
          term: "Bitbucket",
          availability: true,
        },
      ],
    },
  ],
};

export const personalPlanTableData: FeatureTableColumn = {
  link: {
    href: "https://gitpod.io/plans",
    label: "Choose Plan",
  },
  header: {
    headline: "Personal",
    subtitle: `${isEurope() ? "€8" : "$9"} per user/month`,
  },
  enteries: [
    {
      items: [
        {
          term: "Public & private repos",
          text: "limited to 100h",
        },
        {
          term: "Inactivity timeout",
          text: "30min",
        },
        {
          term: "Timeout boost",
          availability: false,
        },
        {
          term: "Parallel workspaces",
          text: "4",
        },
        {
          term: "Prebuilds",
          availability: true,
        },
        {
          term: "Shared workspaces",
          availability: true,
        },
        {
          term: "Snapshots",
          availability: true,
        },
        {
          term: "Admin dashboard",
          availability: false,
        },
        {
          term: "Encrypted backups",
          availability: true,
        },
        {
          term: "Multi-ide support",
          availability: true,
        },
        {
          term: "GitLab",
          availability: true,
        },
        {
          term: "GitHub",
          availability: true,
        },
        {
          term: "Bitbucket",
          availability: true,
        },
      ],
    },
  ],
};

export const professionalPlanTableData: FeatureTableColumn = {
  link: {
    href: "https://gitpod.io/plans",
    label: "Choose Plan",
  },
  isHighlighted: true,
  header: {
    headline: "Professional",
    subtitle: `${isEurope() ? "€23" : "$25"} per user/month`,
    isMostPopular: true,
  },
  enteries: [
    {
      items: [
        {
          term: "Public & private repos",
          text: "unlimited",
        },
        {
          term: "Inactivity timeout",
          text: "30min",
        },
        {
          term: "Timeout boost",
          availability: false,
        },
        {
          term: "Parallel workspaces",
          text: "8",
        },
        {
          term: "Prebuilds",
          availability: true,
        },
        {
          term: "Shared workspaces",
          availability: true,
        },
        {
          term: "Snapshots",
          availability: true,
        },
        {
          term: "Admin dashboard",
          availability: false,
        },
        {
          term: "Encrypted backups",
          availability: true,
        },
        {
          term: "Multi-ide support",
          availability: true,
        },
        {
          term: "GitLab",
          availability: true,
        },
        {
          term: "GitHub",
          availability: true,
        },
        {
          term: "Bitbucket",
          availability: true,
        },
      ],
    },
  ],
};

export const unleashedPlanTableData: FeatureTableColumn = {
  link: {
    href: "https://gitpod.io/plans",
    label: "Choose Plan",
  },
  header: {
    headline: "Unleashed",
    subtitle: `${isEurope() ? "€35" : "$39"} per user/month`,
  },
  enteries: [
    {
      items: [
        {
          term: "Public & private repos",
          text: "unlimited",
        },
        {
          term: "Inactivity timeout",
          text: "1h",
        },
        {
          term: "Timeout boost",
          text: "3h",
        },
        {
          term: "Parallel workspaces",
          text: "16",
        },
        {
          term: "Prebuilds",
          availability: true,
        },
        {
          term: "Shared workspaces",
          availability: true,
        },
        {
          term: "Snapshots",
          availability: true,
        },
        {
          term: "Admin dashboard",
          availability: false,
        },
        {
          term: "Encrypted backups",
          availability: true,
        },
        {
          term: "Multi-ide support",
          availability: true,
        },
        {
          term: "GitLab",
          availability: true,
        },
        {
          term: "GitHub",
          availability: true,
        },
        {
          term: "Bitbucket",
          availability: true,
        },
      ],
    },
  ],
};

export const pricingTableToc: FeatureTableToc[] = [
  {
    type: "text",
    data: { text: "Public & private repos" },
  },
  {
    type: "tooltip",
    data: {
      text: "Inactivity timeout",
      tooltip: "Time after which workspaces are automatically stopped.",
    },
  },
  {
    type: "tooltip",
    data: {
      text: "Timeout Boost",
      tooltip: "Extra workspace inactivity timeout boost.",
    },
  },
  {
    type: "tooltip",
    data: {
      text: "Parallel Workspaces",
      tooltip: "Run multiple workspaces at the same time.",
    },
  },
  {
    type: "tooltip",
    data: {
      text: "Prebuilds",
      tooltip:
        "Enable prebuilds to continuously build your Git branches, so you and your team can always start coding right away.",
    },
  },
  {
    type: "tooltip",
    data: {
      text: "Shared workspaces",
      tooltip: "Pair program with your team by sharing running workspaces.",
    },
  },
  {
    type: "tooltip",
    data: {
      text: "Snapshots",
      tooltip:
        "Create a copy of your workspace by sharing a snapshot with your team.",
    },
  },
  {
    type: "tooltip",
    data: {
      text: "Admin dashboard",
      tooltip: "Access to exclusive stats of your team.",
    },
  },
  {
    type: "tooltip",
    data: {
      text: "Encrypted backups",
      tooltip:
        "Keeps your data safe. More on <a href='/security'>security</a>.",
    },
  },
  {
    type: "tooltip",
    data: {
      text: "Multi-ide support",
      tooltip:
        "Connect Gitpod with your favourite IDE. View <a href='/docs/references/ides-and-editors'>docs/IDE</a> to see all suported IDE’s.",
    },
  },
  {
    type: "image",
    data: {
      text: "GitLab",
      image: {
        path: "/svg/gitlab.svg",
        alt: "GitLab",
      },
    },
  },
  {
    type: "image",
    data: {
      text: "GitHub",
      image: githubMarkSvelte,
    },
  },
  {
    type: "image",
    data: {
      text: "Bitbucket",
      image: {
        path: "/svg/bitbucket.svg",
        alt: "Bitbucket",
      },
    },
  },
];

export let pricingTable: FeatureTable = {
  toc: pricingTableToc,
  columns: [
    freePlanTableData,
    personalPlanTableData,
    professionalPlanTableData,
    unleashedPlanTableData,
  ],
};

export const pricingFAQ: FAQ = {
  headline: "FAQs",
  items: [
    {
      title: "Can I always use Gitpod for free?",
      content:
        '<p> Yes! Gitpod is always for free for public and private repositories for up to 50h per month. If you need more hours or would like to unlock more features, you can upgrade your subscription at any time. If you’re a professional open-source developer and need more hours, you can apply to our free <a href="/for/opensource" >Professional Open Source plan</a >. </p>',
    },
    {
      title:
        "Do you offer discounts for students and educational institutions?",
      content: `<p> Yes, qualified educational institutions may receive a special discount. Please <a href="/contact/sales">Contact us</a>. If you are a student, you may use the Student Unlimited Plan for ${
        isEurope() ? "€8" : "$9"
      } per month (usually ${
        isEurope() ? "€35" : "$39"
      }). See <button on:click data-open-modal='redeem-student-offer' class="font-bold text-body hover:text-important transition duration-200">Gitpod for Students</button> for more information. </p>`,
    },
    {
      title: "How can I pay?",
      content:
        '<p>All our plans can only be paid via credit card.</p> <div class="flex mt-xx-small space-x-xx-small"> <img class="mr-4" src="/svg/brands/mastercard.svg" alt="Mastercard" width="52" height="40" /> <img src="/svg/brands/visa.svg" alt="Visa" width="72" height="40" /> </div>',
    },
    {
      title: "Can I create a team plan?",
      content:
        '<p> Sure, if you would like to manage subscriptions for a whole team on a single invoice, you can create a <a href="https://gitpod.io/teams/">team plan.</a> </p> <p> In case you need more information on how to setup a team subscription, visit <a href="/docs/configure/teams">gitpod.io/docs/configure/teams.</a> </p>',
    },
    {
      title: "Can I change my subscription at any time?",
      content:
        '<p> Yes, you can upgrade or downgrade whenever you want on <a href="https://gitpod.io/subscription/">gitpod.io/subscription</a >. Your billing cycle starts with the creation date of your subscription. After 30 days it will automatically renew itself. </p> <p> If you choose to upgrade, the pricing difference will be added to your next month’s invoice. If you choose to downgrade, you’ll be credited on your next month’s invoice. </p>',
    },
    {
      title: "What if I decide to cancel?",
      content:
        "<p> If you wish to stop using Gitpod, you may cancel your subscription at any time. Your cancellation will take effect after that month’s billing cycle. </p>",
    },
    {
      title: "What are the benefits of Gitpod?",
      content:
        '<p> Gitpod enables cloud based development without friction. Pre-configured and automated dev environments prevent "works on my machine issues", let you work on multiple issues or features at once and let\'s you easily collaborate with colleagues. All in your favorite IDE with the tools and extensions you love. In the browser or in your desktop version. </p>',
    },
    {
      title: "Is Gitpod secure?",
      content:
        '<p> Gitpod is secure by design and at the heart of what we do. Your source code is safely stored in the cloud, never locally. Each Gitpod workspace and prebuild runs on a secured single-use container providing fast startup times without compromising on security. Learn more at <a href="/security">gitpod.io/security</a >. We are also in the process of receiving the SOC2 compliance report. </p>',
    },
    {
      title: "How does Gitpod differ from GitHub Codespaces?",
      content:
        '<p> With Gitpod you can get started in a flash, the startup times are significantly faster than with GitHub Codespaces. Gitpod is also a lot more resource efficient and thereby very cost-effective. With Gitpod you can choose the tools you would like to work with. It\'s open source and also available for self-hosting. Learn more on <a href="/vs/github-codespaces">Gitpod vs Codespaces</a >. </p>',
    },
    {
      title: "Still have more questions?",
      content:
        '<p> We are happy to answer them, please <a href="/contact/support" >Get in Touch</a >. </p>',
    },
  ],
};
