import type { Article } from "$lib/types/article";
import type { Card } from "$lib/types/card";

export const cards: Card[] = [
  {
    title: "Getting started",
    text: "This page helps you understand how to provide a configuration for your project.",
    link: {
      href: "/docs/introduction/getting-started",
      text: "Get Started",
    },
  },
  {
    title: "Documentation",
    text: "Have a look at our documentation to learn how to get the most out of Gitpod",
    link: {
      href: "/docs/",
      text: "View Documentation",
    },
  },
  {
    title: "Changelog",
    text: "Here you can view the latest product improvements and updates.",
    link: {
      href: "/changelog",
      text: "View Changelog",
    },
  },
  {
    title: "Discord Server",
    text: "Would you like to take part in live coding sessions and connect with the community ? Then join us on Discord.",
    link: {
      href: "https://www.gitpod.io/chat",
      text: "Join Discord",
    },
  },
  {
    title: "Gitpod Roadmap",
    text: "Are you curious where Gitpod is heading to next? On the roadmap you can see our next steps.",
    link: {
      href: "https://www.gitpod.io/roadmap",
      text: "View Roadmap",
    },
  },
  {
    title: "Status",
    text: "On the status page you get informed on all past and current incidents.",
    link: {
      href: "https://www.gitpodstatus.com/",
      text: "View Status Page",
    },
  },
  {
    title: "Report a bug or request a feature",
    text: "Head over to GitHub to submit your bug report or feature request.",
    link: {
      href: "https://github.com/gitpod-io/gitpod/issues/new/choose",
      text: "File an issue",
    },
  },
  {
    title: "Self-Hosted",
    text: "Would you like to host Gitpod yourself? Here you can learn all about it.",
    link: {
      href: "/self-hosted",
      text: "Gitpod Self-Hosted",
    },
  },
  {
    title: "Account Settings",
    text: "Here you can update your account prefences like themes, email notifications, integrations, etc..",
    link: {
      href: "https://gitpod.io/account",
      text: "Go to Account Settings",
    },
  },
];

export const popularArticles: Article[] = [
  {
    title: "Dev Environments as Code",
    text: "Imagine that only a decade ago system administrators deployed, configured, and maintained software systems manually.",
    slug: "dev-env-as-code",
  },
  {
    title: "Gitpodify your project",
    text: "If you follow this guide, you will end up with a button that launches pre-configured containers for your project, thus allowing everyone to check out your repository and run your code in a single click.",
    slug: "gitpodify",
  },
  {
    title: "I said goodbye to local development and so can you",
    text: "Stop maintaining your local developer environment. Instead, automate the setup once and use a new environment for each task you work on - available in seconds and always ready-to-code.",
    slug: "i-said-goodbye-to-local-development-and-so-can-you",
  },
  {
    title: "Gitpod Local Companion - localhost is going remote",
    text: "While Gitpod can seamlessly integrate into your workflow in the vast majority of cases, there are times where you may want to access a workspace from localhost",
    slug: "local-app",
  },
];
