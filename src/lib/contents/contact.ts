import type { Card } from "$lib/types/card";

export const contactActions: Card[] = [
  {
    icon: {
      src: "/svg/icons/chat.svg",
      alt: "Chat",
    },
    title: "Support",
    text: "Get help with any question or<br/>issue.",
    link: {
      text: "Get Support",
      href: "/support",
    },
  },
  {
    icon: {
      src: "/svg/icons/headphones.svg",
      alt: "Sales",
    },
    title: "Sales",
    text: "We’d love to talk about how we can work together.",
    link: {
      text: "Contact Sales",
      href: "/contact/sales",
    },
  },
  {
    icon: {
      src: "/svg/icons/team.svg",
      alt: "Community",
      transform: "scale(1.1)",
    },
    title: "Community",
    text: "Connect with the community to get help for common requests.",
    link: {
      text: "Open community",
      href: "/community",
    },
  },
  {
    icon: {
      src: "/svg/icons/file.svg",
      alt: "Docs",
    },
    title: "Docs",
    text: "Learn more about how to become always ready to code.",
    link: {
      text: "Open documentation",
      href: "/docs",
    },
  },
];

export const noOfEngineers = [
  "1-10",
  "11-50",
  "51-250",
  "251-500",
  "501-1000",
  "+1000",
];

export const cloudPlatforms = [
  "Amazon Elastic Kubernetes Service (EKS)",
  "Google Kubernetes Engine (GKE)",
  "Kubernetes",
  "Microsoft Azure Kubernetes Service (AKS)",
];

export const licenseFormsQuestions = [
  "Local preview installation",
  "Gitpod website / docs",
  "Someone else told me about it",
  " Other",
];

export const list: string[] = [
  "5h weekly productivity gain per engineer",
  "4x faster time from zero to first PR",
  "61% cost savings compared to a VDI solution",
];
