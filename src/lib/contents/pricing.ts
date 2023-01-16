import type { Pricing } from "$lib/types/pricing";
import { isEurope } from "$lib/utils/helpers";
import type { Card } from "$lib/types/card";
// @ts-ignore
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
    title: "Individual",
    description: "For your personal projects",
    prependedPrice: "From",
    showCurrency: true,
    price: `0`,
    features: [
      "Use Gitpod for free with 500 credits/mo or up to 50 hours",
      `Upgrade to 1,000 credits for ${
        isEurope() ? "€" : "$"
      }9/mo. Pay-as-you-go after that`,
      "Workspace classes, prebuilds, and multi-IDE support",
    ],
    btnText: "Start for free",
    btnHref: "https://gitpod.io/login",
    trackingName: "individual",
  },
  {
    title: "Teams",
    description: "For teams of any size",
    prependedPrice: "From",
    showCurrency: true,
    price: `0.36/hour`,
    features: [
      "Create a team for free",
      "Manage team billing in one account",
      "Invite additional team members at no extra charge",
    ],
    btnText: "Create team",
    btnHref: "https://gitpod.io/teams/new",
    trackingName: "teams",
  },
  {
    title: "Enterprise",
    price: "Custom",
    description: "For teams with high security and support needs",
    features: [
      "Deployment options: run Gitpod in your cloud or ours",
      "VPC peering and private links to your dev resources",
      "SLA and premium support",
    ],
    btnText: "Talk to sales",
    btnHref: "/contact/sales",
    spiced: true,
    trackingName: "enterprise",
  },
];

export const empowermentFeatures: Card[] = [
  {
    title: "Pro OSS developers",
    text: "Professional open-source developers, can apply for our complimentary Open Source plan.",
    link: {
      text: "View OSS Program",
      href: "/for/opensource",
    },
  },
  {
    title: "Startups",
    text: "Startups can get all our services at a 50% discount, for up to 2 years, no matter how fast your developers and workloads scale.",
    link: {
      text: "View Startups Program",
      href: "/for/startups",
    },
  },
];

export const indivdualPlanTableData: FeatureTableColumn = {
  link: {
    href: "https://gitpod.io/login",
    label: "Sign up",
  },
  header: {
    headline: "Individual",
  },
  enteries: [
    {
      users: "Free",
      items: [
        {
          isHeadline: true,
          term: "CREDIT LOGIC",
          text: "",
        },
        {
          term: "Base price",
          isCurrency: true,
          text: "0/ mo",
        },
        {
          term: "Credits in base price",
          text: "500",
        },
        {
          term: "Additional credits",
          availability: false,
        },
        {
          isHeadline: true,
          term: "FEATURES",
          text: "",
        },
        {
          term: "Workspace classes",
          availability: true,
        },
        {
          term: "Parallel workspaces",
          text: "4",
        },
        {
          term: "Inactivity timeout",
          text: "30 mins",
        },
        {
          term: "Timeout boost",
          availability: false,
        },
        {
          term: "Public & private repos",
          availability: true,
        },
        {
          term: "Snapshots",
          availability: true,
        },
        {
          term: "Prebuilds",
          availability: true,
        },
        {
          term: "Encrypted backups",
          availability: true,
        },
        {
          term: "Multi-IDE support",
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
        {
          isHeadline: true,
          term: "DEPLOYMENT",
          text: "",
        },
        {
          term: "Private, isolated instance",
          availability: false,
        },
        {
          term: "Private connections",
          availability: false,
        },
        {
          term: "Cloud region of choice",
          availability: false,
        },
        {
          term: "Run in your cloud",
          availability: false,
        },
        {
          isHeadline: true,
          term: "ADMIN & SUPPORT",
          text: "",
        },
        {
          term: "Single sign-on",
          availability: false,
        },
        {
          term: "Centralized team billing",
          availability: false,
        },
        {
          term: "Admin dashboard",
          availability: false,
        },
        {
          term: "Premium support",
          availability: false,
        },
        {
          term: "SLAs",
          availability: false,
        },
      ],
    },
    {
      users: "Paid",
      items: [
        {
          isHeadline: true,
          term: "CREDIT LOGIC",
          text: "",
        },
        {
          term: "Base price",
          isCurrency: true,
          text: "9/ mo",
        },
        {
          term: "Credits in base price",
          text: "1000",
        },
        {
          term: "Additional credits",
          isCurrency: true,
          text: "0.036 / credit",
        },
        {
          isHeadline: true,
          term: "FEATURES",
          text: "",
        },
        {
          term: "Workspace classes",
          availability: true,
        },
        {
          term: "Parallel workspaces",
          text: "16",
        },
        {
          term: "Inactivity timeout",
          text: "60 mins",
        },
        {
          term: "Timeout boost",
          availability: true,
        },
        {
          term: "Public & private repos",
          availability: true,
        },
        {
          term: "Snapshots",
          availability: true,
        },
        {
          term: "Prebuilds",
          availability: true,
        },
        {
          term: "Encrypted backups",
          availability: true,
        },
        {
          term: "Multi-IDE support",
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
        {
          isHeadline: true,
          term: "DEPLOYMENT",
          text: "",
        },
        {
          term: "Private, isolated instance",
          availability: false,
        },
        {
          term: "Private connections",
          availability: false,
        },
        {
          term: "Cloud region of choice",
          availability: false,
        },
        {
          term: "Run in your cloud",
          availability: false,
        },
        {
          isHeadline: true,
          term: "ADMIN & SUPPORT",
          text: "",
        },
        {
          term: "Single sign-on",
          availability: false,
        },
        {
          term: "Centralized team billing",
          availability: false,
        },
        {
          term: "Admin dashboard",
          availability: false,
        },
        {
          term: "Premium support",
          availability: false,
        },
        {
          term: "SLAs",
          availability: false,
        },
      ],
    },
  ],
};

export const teamPlanTableData: FeatureTableColumn = {
  link: {
    href: "https://gitpod.io/teams/new",
    label: "Create team",
  },
  isHighlighted: true,
  header: {
    headline: "Teams",
    isMostPopular: false,
  },
  enteries: [
    {
      users: "Pay-as-you-go",
      items: [
        {
          isHeadline: true,
          term: "CREDIT LOGIC",
          text: "",
        },
        {
          term: "Base price",
          isCurrency: true,
          text: "0/ mo",
        },
        {
          term: "Credits in base price",
          text: "0",
        },
        {
          term: "Additional credits",
          isCurrency: true,
          text: "0.036 / credit",
        },
        {
          isHeadline: true,
          term: "FEATURES",
          text: "",
        },
        {
          term: "Workspace classes",
          availability: true,
        },
        {
          term: "Parallel workspaces",
          text: "16",
        },
        {
          term: "Inactivity timeout",
          text: "60 mins",
        },
        {
          term: "Timeout boost",
          availability: true,
        },
        {
          term: "Public & private repos",
          availability: true,
        },
        {
          term: "Snapshots",
          availability: true,
        },
        {
          term: "Prebuilds",
          availability: true,
        },
        {
          term: "Encrypted backups",
          availability: true,
        },
        {
          term: "Multi-IDE support",
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
        {
          isHeadline: true,
          term: "DEPLOYMENT",
          text: "",
        },
        {
          term: "Private, isolated instance",
          availability: false,
        },
        {
          term: "Private connections",
          availability: false,
        },
        {
          term: "Cloud region of choice",
          availability: false,
        },
        {
          term: "Run in your cloud",
          availability: false,
        },
        {
          isHeadline: true,
          term: "ADMIN & SUPPORT",
          text: "",
        },
        {
          term: "Single sign-on",
          availability: false,
        },
        {
          term: "Centralized team billing",
          availability: true,
        },
        {
          term: "Admin dashboard",
          availability: false,
        },
        {
          term: "Premium support",
          availability: false,
        },
        {
          term: "SLAs",
          availability: false,
        },
      ],
    },
  ],
};

export const dedicatedPlanTableData: FeatureTableColumn = {
  link: {
    href: "/contact/sales",
    label: "Talk to sales",
  },
  header: {
    headline: "Enterprise",
  },
  enteries: [
    {
      users: "Custom",
      items: [
        {
          isHeadline: true,
          term: "CREDIT LOGIC",
          text: "",
        },
        {
          term: "Base price",
          text: "Custom",
        },
        {
          term: "Credits in base price",
          text: "Custom",
        },
        {
          term: "Additional credits",
          text: "Custom",
        },
        {
          isHeadline: true,
          term: "FEATURES",
          text: "",
        },
        {
          term: "Workspace classes",
          availability: true,
        },
        {
          term: "Parallel workspaces",
          text: "Custom",
        },
        {
          term: "Inactivity timeout",
          text: "60 mins",
        },
        {
          term: "Timeout boost",
          availability: true,
        },
        {
          term: "Public & private repos",
          availability: true,
        },
        {
          term: "Snapshots",
          availability: true,
        },
        {
          term: "Prebuilds",
          availability: true,
        },
        {
          term: "Encrypted backups",
          availability: true,
        },
        {
          term: "Multi-IDE support",
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
        {
          isHeadline: true,
          term: "DEPLOYMENT",
          text: "",
        },
        {
          term: "Private, isolated instance",
          availability: true,
        },
        {
          term: "Private connections",
          availability: true,
        },
        {
          term: "Cloud region of choice",
          availability: true,
        },
        {
          term: "Run in your cloud",
          availability: true,
        },
        {
          isHeadline: true,
          term: "ADMIN & SUPPORT",
          text: "",
        },
        {
          term: "Single sign-on",
          text: "Coming soon",
        },
        {
          term: "Centralized team billing",
          availability: true,
        },
        {
          term: "Admin dashboard",
          availability: true,
        },
        {
          term: "Premium support",
          availability: true,
        },
        {
          term: "SLAs",
          availability: true,
        },
      ],
    },
  ],
};

export const pricingTableToc: FeatureTableToc[] = [
  {
    type: "text",
    data: {
      text: "",
    },
  },
  {
    type: "tooltip",
    isHeadline: true,
    headlineText: "CREDIT LOGIC",
  },
  {
    type: "tooltip",
    data: { text: "Base price", tooltip: "Minimum price charged per month." },
  },
  {
    type: "tooltip",
    data: {
      text: "Credits in base price",
      tooltip:
        "Credits are used to measure Gitpod usage. <br/>Note that the included credits for the individual paid plan cost significantly less per-credit than the standard pay-as-you-go rate. <br/> Included credits expire at the end of each month.",
    },
  },
  {
    type: "tooltip",
    data: {
      text: "Additional credits",
      tooltip:
        "Credits are used to measure Gitpod usage. With flexible pricing, you pay for usage at a per-credit rate.",
    },
  },
  {
    type: "tooltip",
    isHeadline: true,
    headlineText: "FEATURES",
  },
  {
    type: "tooltip",
    data: {
      text: "Workspace classes",
      tooltip:
        "Choose between standard and large workspaces. <br/>Use project settings to configure workspace classes. Projects are created in a team.<br/>Different classes (sizes) of workspaces are metered at different rates.",
    },
  },
  {
    type: "tooltip",
    data: {
      text: "Parallel workspaces",
      tooltip: "Run multiple workspaces at the same time.",
    },
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
      text: "Timeout boost",
      tooltip: "Manually extent workspace timeout to 180 minutes",
    },
  },
  {
    type: "text",
    data: {
      text: "Public & private repos",
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
      text: "Prebuilds",
      tooltip:
        "Use projects (in a team) to activate and configure prebuilds. <br/>Prebuilds to continuously build your Git branches, so your team can start coding right away..",
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
      text: "Multi-IDE support",
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
  {
    type: "tooltip",
    isHeadline: true,
    headlineText: "DEPLOYMENT",
  },
  {
    type: "tooltip",
    data: {
      text: "Private, isolated instance",
      tooltip:
        "A single-tenant installation of Gitpod that is exclusive to you. It runs in its own cloud account, and no Gitpod resources are shared with other customers. ",
    },
  },
  {
    type: "tooltip",
    data: {
      text: "Private connections",
      tooltip:
        "Connect directly to your internal or private development resources (such as source control management system, development databases) via a private connection. No need to run your own VPN.",
    },
  },
  {
    type: "tooltip",
    data: {
      text: "Cloud region of choice",
      tooltip:
        "Pick the AWS region closest to you - minimising latency and ensuring compliance regarding data residency restrictions.",
    },
  },
  {
    type: "tooltip",
    data: {
      text: "Run in your cloud",
      tooltip:
        "Run a fully isolated instance of <a href='/dedicated'>Gitpod Dedicated</a> in your cloud account or ours",
    },
  },
  {
    type: "tooltip",
    isHeadline: true,
    headlineText: "ADMIN & SUPPORT",
  },
  {
    type: "tooltip",
    data: {
      text: "SSO",
      tooltip: "Single sign-on",
    },
  },
  {
    type: "text",
    data: {
      text: "Centralized team billing",
    },
  },
  {
    type: "tooltip",
    data: {
      text: "Admin dashboard",
      tooltip:
        "Administer your Gitpod instance with a view on all users, teams and projects.",
    },
  },
  {
    type: "tooltip",
    data: {
      text: "Premium support",
      tooltip: "Private Slack channel and dedicated success managers.",
    },
  },
  {
    type: "tooltip",
    data: {
      text: "SLAs",
      tooltip: "Custom service level agreements.",
    },
  },
];

export const pricingTable: FeatureTable = {
  toc: pricingTableToc,
  columns: [indivdualPlanTableData, teamPlanTableData, dedicatedPlanTableData],
};

export const faqOldPlan: FAQ = {
  headline: "",
  items: [
    {
      title:
        "I am on one of the old plans. Where can I find the details of my plan?",
      content: `To see the details of your old plan, login to <a href="https://gitpod.io">gitpod.io</a> and go to the plans or team plans section of your <a href="https://gitpod.io/settings">account settings</a>`,
    },
    {
      title:
        "I am on one of the old plans. How can I switch to the new pricing model?",
      content: `To use large workspaces with the new pricing, you first need to cancel your existing plan in your <a href="https://gitpod.io/settings">account settings</a> or team settings`,
    },
    {
      title:
        "I am on one of the old plans. How long can I continue to use the old pricing model?",
      content: `Existing paid plans will keep working until the end of March, 2023. However, we recommend you look at the new prices`,
    },
  ],
};

export const pricingFAQ: FAQ = {
  headline: "FAQs",
  items: [
    {
      title: "Can I always use Gitpod for free?",
      content:
        '<p> Yes! Gitpod is always for free for public and private repositories for up to 50h per month. If you need more hours or would like to unlock more features, you can upgrade your subscription at any time. If you’re a professional open-source developer and need more hours, you can apply to our free <a href="/for/opensource">Professional Open Source plan</a> </p>',
    },
    {
      title: "How can I pay?",
      content:
        '<p>You can pay with MasterCard, Visa card or Google Pay.</p><div class="flex my-xx-small space-x-xx-small"> <img class="mr-4" src="/svg/brands/mastercard.svg" alt="Mastercard" width="52" height="40" /> <img class="mr-4" src="/svg/brands/visa.svg" alt="Visa" width="72" height="40" /> <img src="/svg/brands/google-pay.svg" alt="Google Pay Logo" width="72" height="40" /></div> <p>For enterprise customers, additional payment options are available. Please contact sales for annual billing.</p> ',
    },
    {
      title: "Can I create a team plan?",
      content:
        '<p> Sure, if you would like to manage subscriptions for a whole team on a single invoice, you can create a <a href="https://gitpod.io/teams/">team plan.</a> </p> <p> In case you need more information on how to setup a team subscription, visit <a href="/docs/configure/teams">gitpod.io/docs/configure/teams</a> </p>',
    },
    {
      title: "Can I change my subscription at any time?",
      content:
        '<p> Yes, you can upgrade or downgrade whenever you want on <a href="https://gitpod.io/subscription/">gitpod.io/subscription</a >. Your billing cycle starts with the creation date of your subscription. After 30 days it will automatically renew itself. </p> <p> If you choose to upgrade, the pricing difference will be added to your next month’s invoice. If you choose to downgrade, you’ll be credited on your next month’s invoice </p>',
    },
    {
      title: "What if I decide to cancel?",
      content:
        "<p> If you wish to stop using Gitpod, you may cancel your subscription at any time. Your cancellation will take effect after that month’s billing cycle </p>",
    },
    {
      title: "What are the benefits of Gitpod?",
      content:
        '<p> Gitpod enables cloud based development without friction. Pre-configured and automated dev environments prevent "works on my machine issues", let you work on multiple issues or features at once and let\'s you easily collaborate with colleagues. All in your favorite IDE with the tools and extensions you love. In the browser or in your desktop version </p>',
    },
    {
      title: "Is Gitpod secure?",
      content:
        '<p> Gitpod is secure by design and at the heart of what we do. Your source code is safely stored in the cloud, never locally. Each Gitpod workspace and prebuild runs on a secured single-use container providing fast startup times without compromising on security. Learn more at <a href="/security">gitpod.io/security</a>. Gitpod is SOC 2 Type II certified </p>',
    },
    {
      title: "Still have more questions?",
      content:
        '<p> We are happy to answer them, please <a href="/contact/support">Get in Touch</a></p>',
    },
  ],
};
