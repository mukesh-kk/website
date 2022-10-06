import type { Pricing } from "$lib/types/pricing";
import { isEurope } from "$lib/utils/helpers";
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
    title: "Community",
    price: `${isEurope() ? "€" : "$"}0`,
    btnText: "Install now",
    btnHref: "/community-license",
    trackingName: "community",
    plans: [
      {
        title: "≤10 users",
        features: [
          "Public & private repos",
          "GitLab, GitHub and Bitbucket",
          {
            text: "Full feature set",
            tooltip:
              "See <a href='#features'>features table</a> below for more details.",
          },
          "Community support",
        ],
      },
      {
        title: ">10 users",
        features: [
          "Public & private repos",
          "GitLab, GitHub and Bitbucket",
          {
            text: "Limited features",
            tooltip:
              "See <a href='#features'>features table</a> below for more details.",
          },
          "Community support",
        ],
      },
    ],
  },
  {
    title: "Professional",
    price: isEurope() ? "Custom" : "Custom",
    duration: "",
    features: [
      "Starts after the 11th user",
      {
        text: "Full feature set",
        tooltip:
          "See <a href='#features'>features table</a> below for more details.",
      },
      "Air gapped environments",
      "Professional support",
    ],
    btnText: "Register and Install now",
    btnHref: "/enterprise-license",
    spiced: true,
    trackingName: "professional",
  },
];

export const communityPlanTableData: FeatureTableColumn = {
  header: {
    headline: "Community",
    subtitle: `${isEurope() ? "€" : "$"}0`,
  },
  link: {
    label: "Install now",
    href: "/docs/configure/self-hosted/latest",
  },
  enteries: [
    {
      users: "≤10 users",
      items: [
        //{ term: "Workspace", isHeadline: true },
        {
          term: "Public & Private Repos",
          availability: true,
        },
        {
          term: "Team Limit",
          text: "<span class='font-bold'>≤10 registered users</span>",
        },
        {
          term: "Inactivity timeout",
          text: "unlimited",
        },
        {
          term: "Timeout Boost",
          text: "unlimited",
        },
        {
          term: "Parallel Workspaces",
          text: "unlimited",
        },
        {
          term: "Encrypted backups",
          availability: true,
        },
        {
          term: "Prebuilds",
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
          term: "Shared workspaces",
          availability: true,
        },
        {
          term: "Snapshots",
          availability: true,
        },
        //{ term: "" },
        //{ term: "Business", isHeadline: true },
        {
          term: "Multi-IDE support",
          availability: true,
        },
        {
          term: "Admin Dashboard",
          availability: true,
        },
        {
          term: "Air gapped support",
          availability: false,
        },
        {
          term: "Updates and upgrades",
          availability: true,
        },
        {
          term: "Community support",
          availability: true,
        },
        {
          term: "Business day support",
          availability: false,
        },
        {
          term: "24/7 support",
          availability: false,
        },
      ],
    },
    {
      users: ">10 users",
      items: [
        //{ term: "Workspace", isHeadline: true },
        {
          term: "Public & Private Repos",
          availability: true,
        },
        {
          term: "Team Limit",
          text: "unlimited",
        },
        {
          term: "Inactivity timeout",
          text: "unlimited",
        },
        {
          term: "Timeout Boost",
          text: "unlimited",
        },
        {
          term: "Parallel Workspaces",
          text: "unlimited",
        },
        {
          term: "Encrypted backups",
          availability: true,
        },
        {
          term: "Prebuilds",
          availability: false,
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
          term: "Shared workspaces",
          availability: false,
        },
        {
          term: "Snapshots",
          availability: false,
        },
        //{ term: "" },
        //{ term: "Business", isHeadline: true },
        {
          term: "Multi-IDE support",
          availability: true,
        },
        {
          term: "Admin Dashboard",
          availability: true,
        },
        {
          term: "Air gapped support",
          availability: false,
        },
        {
          term: "Updates and upgrades",
          availability: true,
        },
        {
          term: "Community support",
          availability: true,
        },
        {
          term: "Business day support",
          availability: false,
        },
        {
          term: "24/7 support",
          availability: false,
        },
      ],
    },
  ],
};

export const professionalPlanTableData: FeatureTableColumn = {
  isHighlighted: true,
  header: {
    headline: "Professional",
    subtitle: `${isEurope() ? "Custom Pricing" : "Custom Pricing"}`,
    isMostPopular: true,
  },
  link: {
    label: "Register and Install Now",
    href: "/enterprise-license",
  },
  enteries: [
    {
      users: ">10 users",
      items: [
        //{ term: "Workspace", isHeadline: true },
        {
          term: "Public & Private Repos",
          availability: true,
        },
        {
          term: "Team Limit",
          text: "unlimited",
        },
        {
          term: "Inactivity timeout",
          text: "unlimited",
        },
        {
          term: "Timeout Boost",
          text: "unlimited",
        },
        {
          term: "Parallel Workspaces",
          text: "unlimited",
        },
        {
          term: "Encrypted backups",
          availability: true,
        },
        {
          term: "Prebuilds",
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
          term: "Shared workspaces",
          availability: true,
        },
        {
          term: "Snapshots",
          availability: true,
        },
        //{ term: "" },
        //{ term: "Business", isHeadline: true },
        {
          term: "Multi-IDE support",
          availability: true,
        },
        {
          term: "Admin Dashboard",
          availability: true,
        },
        {
          term: "Air gapped support",
          availability: true,
        },
        {
          term: "Updates and upgrades",
          availability: true,
        },
        {
          term: "Community support",
          availability: true,
        },
        {
          term: "Business day support",
          availability: true,
        },
        {
          term: "24/7 support",
          text: "optional",
        },
      ],
    },
  ],
};

export const selfHostedToc: FeatureTableToc[] = [
  {
    type: "text",
    data: {
      text: "",
    },
  },
  // {
  //   isHeadline: true,
  //   headlineText: "Workspace",
  // },
  {
    type: "text",
    data: {
      text: "Public & Private Repos",
    },
  },
  {
    type: "tooltip",
    data: {
      text: "Team Limit",
      tooltip: "Maximum number of users in the team.",
    },
  },
  {
    type: "tooltip",
    data: {
      text: "Inactivity Timeout",
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
      text: "Encrypted backups",
      tooltip:
        "Your workspace backups are encrypted. More on <a href='/security'>security</a>.",
    },
  },
  {
    type: "tooltip",
    data: {
      text: "Prebuilds",
      tooltip:
        "Enable prebuilds to continuously build your Git branches, so you and your team can always start coding right away. More on <a href='/docs/configure/projects/prebuilds'>prebuilds</a>.",
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
      text: "Bitbucket",
      image: {
        path: "/svg/bitbucket.svg",
        alt: "Bitbucket",
      },
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
  // {
  //   type: "text",
  //   data: {
  //     text: "",
  //   },
  // },
  // {
  //   isHeadline: true,
  //   headlineText: "Business",
  // },
  {
    type: "tooltip",
    data: {
      text: "Multi-IDE support",
      tooltip:
        "Connect Gitpod with your favourite IDE. View <a href='/docs/references/ides-and-editors'>docs/IDE</a> to see all suported IDE’s.",
    },
  },
  {
    type: "tooltip",
    data: {
      text: "Admin Dashboard",
      tooltip: "Access to team and project management and configuration.",
    },
  },
  {
    type: "tooltip",
    data: {
      text: "Air gapped environment support",
      tooltip:
        "Install Gitpod in an environment that does not have access to the public internet.",
    },
  },
  {
    type: "tooltip",
    data: {
      text: "Updates and upgrades",
      tooltip: "Regular updates and upgrade to the product.",
    },
  },
  {
    type: "tooltip",
    data: {
      text: "Community support",
      tooltip: "Support from the community via Discord and Github",
    },
  },
  {
    type: "tooltip",
    data: {
      text: "Business day support",
      tooltip: "Professional support within business day hours.",
    },
  },
  {
    type: "tooltip",
    data: {
      text: "24/7 support",
      tooltip: "Get professional support 24/7.",
    },
  },
];

export const selfHostedComparison: FeatureTable = {
  toc: selfHostedToc,
  columns: [communityPlanTableData, professionalPlanTableData],
};
export const selfhostedFAQ: FAQ = {
  headline: "FAQs",
  items: [
    {
      title: "How do I move from plan to plan?",
      content:
        '<p> You can use Gitpod Self-Hosted Community on your own infrastructure for free for unlimited users. If you have less than 10 users, you will automatically be able to also use additional features like unlimited prebuilds, shared workspaces, snapshots and an admin dashboard.  You lose these features once you go above 10 users.</p> <p> In case you want to enjoy these features with more than 10 users, you can upgrade to the Professional Plan at any time by contacting our sales team: Either <a href="/enterprise-license" >request a license</a > key directly or <a href="/contact/sales">get in touch</a> if you have any questions. </p>',
    },
    {
      title: "What is the difference between the two Community plans?",
      content:
        "<p> On an implementation level, these plans are the same and you use the same actual license for both. However, the feature set differs depending on the amount of users you have. For up to ten users you gain access to additional features. If you have more than ten users, you automatically lose access to these features. Alternatively, you can purchase the Professional plan.</p>",
    },
    {
      title: "Can I add more users to my plan at any time?",
      content:
        "<p> Yes, you can add as many users as you like to your plan at any time. </p>",
    },
    {
      title: "What is the difference between SaaS and Self-Hosted?",
      content:
        "<p> If you choose <strong>Gitpod SaaS</strong>, we will manage and host Gitpod in the cloud for you. This means minimal setup efforts for you and secure data storage in the cloud. Gitpod SaaS is the best solution for teams who want to get started immediately and don’t want to spend time on setup and operations. </p> <p> If you choose <strong>Gitpod Self-Hosted</strong>, you will manage and host Gitpod on your own instances. This means all data remains your infrastructure, as Gitpod can run behind corporate firewalls and on air-gapped networks. <strong>Gitpod Self-Hosted</strong> is the best solution for teams who want to keep full data control or use Gitpod in private networks. </p>",
    },
    {
      title: "How can I install Self-Hosted?",
      content:
        '<p> You can either install <strong>Gitpod Self-Hosted</strong> on Google GKE, Amazon EKS, Azure AKS, or K3s. See <a href="/docs/configure/self-hosted/latest">Self-Hosted Docs</a> for more information. </p>',
    },
    {
      title: "How can I pay?",
      content:
        '<p> Currently, <strong>Gitpod Self-Hosted</strong> can only be purchased on request. Please <a href="/enterprise-license">request a license key</a> and we\'ll contact you. If you have any questions, please <a href="/contact/sales">Get in touch</a>. All our plans can be paid via invoice. </p>',
    },
    {
      title: "Do you offer discounts for educational institutions?",
      content:
        '<p> Yes, qualified educational institutions may receive a special discount. Please <a href="/contact/sales">Contact sales</a>. </p>',
    },
    {
      title: "Still have more questions?",
      content:
        '<p> We are happy to answer them, please <a href="/contact/support" >Get in Touch</a >. </p>',
    },
  ],
};
