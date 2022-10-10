import type { Feature } from "$lib/types/feature";
import type {
  FeatureTable,
  FeatureTableColumn,
  FeatureTableToc,
} from "$lib/components/ui-library/feature-table/feature-table";
import opensourceSvelte from "$lib/components/svgs/opensource.svelte";
import githubMarkSvelte from "$lib/components/svgs/github-mark.svelte";
import awsSvelte from "$lib/components/svgs/aws.svelte";
import idesSvelte from "$lib/components/svgs/ides.svelte";
import type { Quote } from "$lib/types/quote";
import Jetbrains from "$lib/components/svgs/brands/jetbrains.svelte";

export const openSourceFeature = {
  title: "Open-source",
  paragraph:
    "Gitpod puts developers' interest first and seemlessly integrates with your existing tools & workflows.",
  featureList: [
    "Host Gitpod yourself on GCP, AWS, Azure or self-managed Kubernetes",
    "Contribute to Gitpod and build your own customizations",
    "Works just as smoothly with GitHub, GitLab and Bitbucket",
  ],
  previewComponent: opensourceSvelte,
};

export const features: Feature[] = [
  {
    title: "Greater cost-efficiency",
    paragraph:
      "Instead of running on expensive VMs, Gitpod provisions secure containers and achieves best-in-class resource-efficiency with scalable workspaces running on shared high-powered cloud servers. <strong>Saves you money, helps our planet 🌱</strong>.",
    image: {
      src: "/svg/jetbrains-space/cost-efficency.svg",
      alt: "Greater cost-efficiency",
    },
    footnote:
      'Price comparison for a developer working 5h per day, 21 per month with 8 core CPUs and 12GB RAM. Last verified 7 Feb 2022. Sources: <a href="/pricing">Gitpod</a>, <a href="https://www.jetbrains.com/remote-development/space-dev-environments/" target="_blank">JetBrains Space</a>.',
  },
  {
    title: "Your environment, your tools, your&nbsp;craft",
    paragraph:
      "We adapt, so you don't need to. That's why we natively integrated JetBrains IDEs into Gitpod next to VS Code and other editors. Don't limit yourself or your team to one editing experience and choose from the best options available.",
    previewComponent: idesSvelte,
  },
  openSourceFeature,
  {
    title: "Ephemeral workspaces",
    paragraph:
      "Spin up preconfigured, standardized dev environments from any git context when you need them and close them when you're done. Once you’ve experienced the freedom, you won’t go back to the friction of long-living stateful environments.",
    lottie: {
      src: "/lottie/edit_workspace.json",
      id: "edit_workspace",
    },
  },
];

export const gitpodTableData: FeatureTableColumn = {
  isHighlighted: true,
  header: {
    headline: "Gitpod",
    image: {
      alt: "Gitpod",
      path: "/svg/media-kit/logo-mark.svg",
    },
  },
  enteries: [
    {
      items: [
        {
          term: "Pricing (SaaS)",
          text: "Free for 50h/month",
        },
        {
          term: "License",
          text: "Open-Source",
        },
        {
          term: "GitHub Integration",
          availability: true,
        },
        {
          term: "GitLab Integration",
          availability: true,
        },
        {
          term: "Bitbucket Integration",
          availability: true,
        },
        {
          term: "Self-Host on GCP",
          availability: true,
        },
        {
          term: "Self-Host on AWS",
          availability: true,
        },
        {
          term: "Self-Host on AKS",
          availability: true,
        },
        {
          term: "Self-Host on Kubernetes",
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
        {
          term: "VS Code extensions",
          availability: true,
        },
        {
          term: "iPad Support",
          availability: true,
        },
        {
          term: "Jetbrains IDE Support",
          availability: true,
        },
        {
          term: "VS Code Support",
          availability: true,
        },
      ],
    },
  ],
};

export const jetbrainsTableData: FeatureTableColumn = {
  header: {
    headline: "JetBrains Space",
    image: {
      alt: "JetBrains Space",
      path: "/svg/jetbrains-space/space.svg",
    },
  },
  enteries: [
    {
      items: [
        {
          term: "Pricing (SAAS)",
          text: "$$$",
        },
        {
          term: "License",
          text: "Proprietary",
        },
        {
          term: "GitHub Integration",
          availability: false,
        },
        {
          term: "GitLab Integration",
          availability: false,
        },
        {
          term: "Bitbucket Integration",
          availability: false,
        },
        {
          term: "Self-Host on GCP",
          availability: false,
        },
        {
          term: "Self-Host on AWS",
          availability: false,
        },
        {
          term: "Self-Host on AKS",
          availability: true,
        },
        {
          term: "Self-Host on Kubernetes",
          availability: false,
        },
        {
          term: "Prebuilds",
          availability: true,
        },
        {
          term: "Snapshots",
          availability: true,
        },
        {
          term: "VS Code extensions",
          availability: false,
        },
        {
          term: "iPad Support",
          availability: false,
        },
        {
          term: "Jetbrains IDE Support",
          availability: true,
        },
        {
          term: "VS Code Support",
          availability: false,
        },
      ],
    },
  ],
};

export const JetbraisSpaceToc: FeatureTableToc[] = [
  {
    type: "text",
    data: {
      text: "Pricing (SAAS)",
    },
  },
  {
    type: "text",
    data: {
      text: "License",
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
      text: "Self-Host on GCP",
      image: {
        alt: "GCP",
        path: "/svg/brands/gcp.svg",
      },
    },
  },
  {
    type: "image",
    data: {
      text: "Self-Host on AWS",
      image: awsSvelte,
    },
  },
  {
    type: "image",
    data: {
      text: "Self-Host on AKS",
      image: {
        alt: "Azure Logo",
        path: "/svg/brands/azure.svg",
      },
    },
  },
  {
    type: "image",
    data: {
      text: "Self-Host on Kubernetes",
      image: {
        alt: "Kubernetes",
        path: "/svg/brands/kubernetes.svg",
      },
    },
  },
  {
    type: "text",
    data: {
      text: "Prebuilds",
    },
  },
  {
    type: "text",
    data: {
      text: "Snapshots",
    },
  },
  {
    type: "text",
    data: {
      text: "VS Code extensions",
    },
  },
  {
    type: "text",
    data: {
      text: "iPad Support",
    },
  },
  {
    type: "text",
    data: {
      text: "Jetbrains IDE Support",
    },
  },
  {
    type: "text",
    data: {
      text: "VS Code Support",
    },
  },
];

export const jetbrainsQuote: Quote = {
  text: "Through our partnership with Gitpod, we are enabling our mutual users to accelerate productivity, save resources and time while strengthening security compliance. Remote development is meant to simplify daily work. This really helps to supercharge developers’ performance.",
  author: "Max Shafirov",
  jobTitle: "CEO at JetBrains",
  companyLogo: Jetbrains,
  companyLogoProps: {
    isAQuoteLogo: true,
    isDark: true,
  },
  img: {
    src: "/images/jetbrains-space/quote.png",
    alt: "Jetbrains",
  },
  link: {
    href: "/blog/gitpod-jetbrains",
    text: "View blog post",
  },
};

export const JetBrainsComparison: FeatureTable = {
  toc: JetbraisSpaceToc,
  columns: [gitpodTableData, jetbrainsTableData],
};
