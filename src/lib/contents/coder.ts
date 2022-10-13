import Opensource from "$lib/components/svgs/opensource.svelte";
import type { Feature, verticalFeature } from "$lib/types/feature";
import awsSvelte from "$lib/components/svgs/aws.svelte";
import githubMarkSvelte from "$lib/components/svgs/github-mark.svelte";
import type {
  FeatureTable,
  FeatureTableColumn,
  FeatureTableToc,
} from "$lib/components/ui-library/feature-table/feature-table";
import Coder from "$lib/components/svgs/coder/coder.svelte";

export const availableAsSaaSSelfHostedFeature: Feature = {
  title: "Available as SaaS or Self-Hosted",
  paragraph:
    "Whether you want to get started immediately with SaaS or have full control of your data with self-hosted, Gitpod has you covered.",
  featureList: [
    "Use our SaaS platform running on GCP",
    "Host Gitpod yourself on GCP, AWS, Azure or self-managed Kubernetes",
    "Works just as smoothly with GitHub, GitLab and Bitbucket",
  ],
  previewComponent: Opensource,
};

export const enhancedIDEFeature: verticalFeature = {
  title: "Enhanced IDE experience",
  paragraph:
    "Control your Gitpod experience with our custom VS Code and JetBrains Gateway extensions that integrate with your localhost environment, manage workspaces, and more",
  moreButton: {
    href: "https://gitpod.io/workspaces/",
    text: "Try Now",
  },
};

const toc: FeatureTableToc[] = [
  {
    type: "text",
    data: {
      text: "License",
    },
  },
  {
    type: "text",
    data: {
      text: "Architecture",
    },
  },
  {
    type: "text",
    data: {
      text: "Made for teams",
    },
  },
  {
    type: "text",
    data: {
      text: "Made for individuals",
    },
  },
  {
    type: "text",
    data: {
      text: "Pricing (Saas)",
    },
  },
  {
    type: "text",
    data: {
      text: "Pricing (Self-hosted)",
    },
  },
  {
    type: "image",
    data: {
      text: "GitLab Integration",
      image: {
        alt: "GitLab",
        path: "/svg/gitlab.svg",
      },
    },
  },
  {
    type: "image",
    data: {
      text: "GitHub Integration",
      image: githubMarkSvelte,
    },
  },
  {
    type: "image",
    data: {
      text: "Bitbucket Integration",
      image: {
        alt: "Bitbucket",
        path: "/svg/bitbucket.svg",
      },
    },
  },
  {
    type: "image",
    data: {
      text: "Self-host on GCP",
      image: {
        alt: "GCP",
        path: "/svg/brands/gcp.svg",
      },
    },
  },
  {
    type: "image",
    data: {
      text: "Self-host on AWS",
      image: awsSvelte,
    },
  },
  {
    type: "image",
    data: {
      text: "Self-host on Azure",
      image: {
        alt: "azure",
        path: "/svg/brands/azure.svg",
      },
    },
  },
  {
    type: "image",
    data: {
      text: "Self-host on Kubernetes",
      image: {
        alt: "kubernetes",
        path: "/svg/brands/kubernetes.svg",
      },
    },
  },
  {
    type: "tooltip",
    data: {
      text: "Reproducible environments",
      tooltip:
        "<a href='/screencasts/fully-automate-your-dev-setup'>https://www.gitpod.io/screencasts/fully-automate-your-dev-setup</a>",
    },
  },
  {
    type: "tooltip",
    data: {
      text: "Collaboration & Sharing",
      tooltip:
        "<a href='/screencasts/collaborating-with-your-team'>https://www.gitpod.io/screencasts/collaborating-with-your-team</a>",
    },
  },
  {
    type: "tooltip",
    data: {
      text: "Fast developer onboarding",
      tooltip:
        "<a href='/screencasts/fresh-dev-environments-for-each-new-task'>https://www.gitpod.io/screencasts/fresh-dev-environments-for-each-new-task</a>",
    },
  },
  {
    type: "tooltip",
    data: {
      text: "Prebuilds",
      tooltip:
        "<a href='/screencasts/continuously-prebuild-your-project'>https://www.gitpod.io/screencasts/continuously-prebuild-your-project</a>",
    },
  },
  {
    type: "tooltip",
    data: {
      text: "Snapshots",
      tooltip:
        "<a href='https://www.gitpod.io/screencasts/collaborating-with-your-team'>https://www.gitpod.io/screencasts/collaborating-with-your-team</a>",
    },
  },
];

const gitpodColum: FeatureTableColumn = {
  isHighlighted: true,
  header: {
    headline: "Gitpod",
    image: {
      alt: "gitpod",
      path: "/images/gitpod-logo.svg",
    },
  },
  enteries: [
    {
      items: [
        {
          term: "License",
          text: "Open-source",
        },
        {
          term: "Architecture",
          text: "Secure Containers",
        },
        {
          term: "Made for teams",
          availability: true,
        },
        {
          term: "Made for individuals",
          availability: true,
        },
        {
          term: "Pricing (SaaS)",
          text: "Free for 50h/month",
        },
        {
          term: "Pricing (Self-hosted)",
          text: "Free tier available",
        },
        {
          term: "GitLab Integration",
          availability: true,
        },
        {
          term: "GitHub Integration",
          availability: true,
        },
        {
          term: "Bitbucket Integration",
          availability: true,
        },
        {
          term: "Self-host on GCP",
          availability: true,
        },
        {
          term: "Self-host on AWS",
          availability: true,
        },
        {
          term: "Self-host on Azure",
          availability: true,
        },
        {
          term: "Self-host on Kubernetes",
          availability: true,
        },
        {
          term: "Reproducible environments",
          availability: true,
        },
        {
          term: "Collaboration & Sharing",
          availability: true,
        },
        {
          term: "Fast developer onboarding",
          availability: true,
        },
        {
          term: "Prebuilds",
          availability: true,
        },
        {
          term: "Snapshots",
          availability: true,
        },
      ],
    },
  ],
};

const coderColumn: FeatureTableColumn = {
  header: {
    headline: "Coder",
    image: Coder,
  },
  enteries: [
    {
      items: [
        {
          term: "License",
          text: "Open-source",
        },
        {
          term: "Architecture",
          text: "Virtual Machines",
        },
        {
          term: "Made for teams",
          availability: true,
        },
        {
          term: "Made for individuals",
          availability: false,
        },
        {
          term: "Pricing (SaaS)",
          availability: false,
        },
        {
          term: "Pricing (Self-hosted)",
          text: "$$$",
        },
        {
          term: "GitLab Integration",
          availability: true,
        },
        {
          term: "GitHub Integration",
          availability: true,
        },
        {
          term: "Bitbucket Integration",
          availability: true,
        },
        {
          term: "Self-host on GCP",
          availability: true,
        },
        {
          term: "Self-host on AWS",
          availability: true,
        },
        {
          term: "Self-host on Azure",
          availability: true,
        },
        {
          term: "Self-host on Kubernetes",
          availability: true,
        },
        {
          term: "Reproducible environments",
          availability: false,
        },
        {
          term: "Collaboration & Sharing",
          availability: false,
        },
        {
          term: "Fast developer onboarding",
          availability: false,
        },
        {
          term: "Prebuilds",
          availability: false,
        },
        {
          term: "Snapshots",
          availability: false,
        },
      ],
    },
  ],
};

export const comparison: FeatureTable = {
  toc,
  columns: [gitpodColum, coderColumn],
};
