import type { Screencast } from "$lib/types/screencasts";

export let topics = [
  "Getting started",
  "Advanced",
  "Customisations",
  "Open VS Code",
  "Demo",
];

let id = 1;

export const demoScreencast: Screencast = {
  title: "Gitpod demo 🍊",
  previewText: "Demo",
  description:
    "See how Gitpod launches a ready-to-code project built on five containers using a Node app, .NET app, a Python app as well as Redis and Postgres databases with a simple click.",
  youtubeId: "KgIWj9rHXS4",
  tile: "screencast-16.jpg",
  duration: 523,
  tags: ["Demo"],
  href: "/screencasts/demo",
};

export const screencasts: Screencast[] = [
  {
    nextScreencast: id++,
    title: "Getting started with Gitpod 🍊",
    description:
      "How to get a full dev environment in your browser with the click of a button and be immediately ready-to-code.",
    duration: 119,
    tile: "screencast-1.jpg",
    youtubeId: "w65POyu3ZUQ",
    relatedDocs: [
      { path: "/docs/", title: "Introduction to Gitpod" },
      { path: "/docs/introduction/getting-started", title: "Getting started" },
      {
        path: "/docs/introduction/learn-gitpod/context-url",
        title: "Context URLs",
      },
    ],
    tags: ["Getting started"],
  },
  {
    nextScreencast: id++,
    title: "My workspace is running, now what? 🎯",
    description: "Your workspace is running, now what?",
    duration: 216,
    tile: "screencast-2.jpg",
    youtubeId: "4495YOMhhgo",
    relatedDocs: [
      {
        path: "/docs/introduction/learn-gitpod/the-life-of-a-workspace",
        title: "Life of a Workspace",
      },
    ],
    tags: ["Getting started"],
  },
  {
    nextScreencast: id++,
    title: "Fully Automate Your Dev Setup ⚡️",
    description:
      "Understanding the automation benefits that arise from the concept of dev-environment-as-code.",
    duration: 245,
    tile: "screencast-3.jpg",
    youtubeId: "fA2fpqP1xaM",
    relatedDocs: [
      { path: "/docs/configure", title: "Configure Your Project" },
      { path: "/docs/references/gitpod-yml", title: ".gitpod.yml" },
      {
        path: "/docs/configure/workspaces/workspace-image",
        title: "Docker Configuration",
      },
      { path: "/docs/configure/workspaces/tasks", title: "Start Tasks" },
    ],
    tags: ["Getting started"],
  },
  {
    nextScreencast: id++,
    title: "Personalise Your Workspace 🎨",
    description:
      "How to customize and configure Gitpod for your personal needs and those of your team.",
    duration: 125,
    tile: "screencast-4.jpg",
    youtubeId: "VYHsd1zI_tE",
    relatedDocs: [
      {
        path: "/docs/references/ides-and-editors/vscode-extensions",
        title: "VS Code extensions",
      },
      {
        path: "/docs/configure/projects/environment-variables",
        title: "Environment Variables",
      },
    ],
    tags: ["Customisations"],
  },
  {
    nextScreencast: id++,
    title: "Continuously Prebuild Your Project 💻",
    description:
      "How to make Gitpod load in a blink by prebuilding your project ahead-of-time, continuously.",
    duration: 135,
    tile: "screencast-5.jpg",
    youtubeId: "ZtlJ0PakUHQ",
    relatedDocs: [
      {
        path: "/docs/configure/projects/prebuilds",
        title: "Prebuilt Workspaces",
      },
    ],
    tags: ["Advanced"],
  },
  {
    nextScreencast: id++,
    title: "Fresh Dev Environments For Each New Task 🎉",
    description:
      "Discover ephemeral/disposable workspaces and start fresh for each new task with just a single click. Pure magic!",
    duration: 207,
    tile: "screencast-6.jpg",
    youtubeId: "n7Ca3jHFtZg",
    relatedDocs: [
      {
        path: "/docs/introduction/learn-gitpod/the-life-of-a-workspace",
        title: "Life of a Workspace",
      },
    ],
    tags: ["Advanced"],
  },
  {
    nextScreencast: id++,
    title: "Collaborating With Your Team 🤝",
    description:
      "How to collaborate effectively with Gitpod's Shared Workspaces and Snapshots.",
    duration: 196,
    tile: "screencast-7.jpg",
    youtubeId: "TrY15zN98p8",
    relatedDocs: [
      {
        path: "/docs/configure/workspaces/collaboration",
        title: "Collaboration & Sharing",
      },
    ],
    tags: ["Advanced"],
  },
  {
    nextScreencast: id++,
    title: "Git Integrations on Gitpod 🕸",
    description: "Learn about Git Integrations that you can use on Gitpod.",
    duration: 221,
    tile: "screencast-8.jpg",
    youtubeId: "nXMlnMEP784",
    relatedDocs: [{ path: "/docs/integrations", title: "Integrations" }],
    tags: ["Getting started"],
  },
  {
    nextScreencast: id++,
    title: "Using Environment Variables 🌿",
    description: "How to use environment variables in Gitpod.",
    duration: 341,
    tile: "screencast-9.jpg",
    youtubeId: "dehln1E8ylY",
    relatedDocs: [
      {
        path: "/docs/configure/projects/environment-variables",
        title: "Environment Variables",
      },
    ],
    tags: ["Customisations"],
  },
  {
    nextScreencast: id++,
    title: "How Do Extensions Work On Gitpod? 🔧",
    description:
      "Discover how to use VS Code extensions in Gitpod and how they work on Gitpod using OpenVSX.",
    duration: 185,
    tile: "screencast-10.jpg",
    youtubeId: "TwXYbZKEuoA",
    relatedDocs: [
      {
        path: "/docs/references/ides-and-editors/vscode-extensions",
        title: "VS Code extensions",
      },
    ],
    tags: ["Customisations"],
  },
  {
    nextScreencast: id++,
    title: "VS Code Desktop Support 🖥",
    description:
      "Learn how with VS Code Desktop Support, you can keep your local IDE configurations and benefit from Gitpod’s high-spec servers & automated prebuilds.",
    duration: 230,
    tile: "screencast-11.jpg",
    youtubeId: "kI6firDA0Bw",
    relatedDocs: [
      {
        path: "/docs/references/ides-and-editors/vscode",
        title: "VS Code Desktop",
      },
    ],
    tags: ["Advanced"],
  },
  {
    nextScreencast: id++,
    title: "Databases on Gitpod 💿",
    description: "Learn how to use Databases on Gitpod.",
    duration: 92,
    tile: "screencast-12.jpg",
    youtubeId: "8oXSzN_W8Ls",
    relatedDocs: [
      {
        path: "/guides/gitpodify#installing-databases",
        title: "Installing databases",
      },
    ],
    tags: ["Getting started"],
  },
  {
    nextScreencast: id++,
    title: "Software Engineering from an iPad 🍎",
    description:
      "Learn how you can use your IPad to develop software using Gitpod.",
    duration: 222,
    tile: "screencast-13.jpg",
    youtubeId: "bFj3fUSHf3A",
    tags: ["Getting started"],
  },
  {
    nextScreencast: id++,
    title: "Using Custom Docker Images 🐳",
    description: "Learn how to use Docker Images on Gitpod.",
    duration: 389,
    tile: "screencast-14.jpg",
    youtubeId: "jFsbmcXCRf8",
    relatedDocs: [
      {
        path: "/docs/configure/workspaces/workspace-image",
        title: "Custom Docker Image",
      },
    ],
    tags: ["Advanced"],
  },
  {
    screencastNumber: 15,
    title: "Local Companion App 🤖",
    description: "Learn how to use Local Companion App.",
    duration: 191,
    tile: "screencast-15.jpg",
    youtubeId: "lwb0JSVJ2J4",
    relatedDocs: [
      {
        path: "/docs/references/ides-and-editors/local-companion",
        title: "Gitpod Local Companion",
      },
    ],
    tags: ["Advanced"],
  },
  {
    screencastNumber: 16,
    title: "Launching OpenVSCode server 💻",
    description:
      "Learn how to runs the latest VS Code on a remote machine accessed through a modern web browser.",
    duration: 139,
    tile: "screencast-16.jpg",
    youtubeId: "qGR7rgqjdiY",
    relatedDocs: [
      {
        path: "/blog/openvscode-server-launch",
        title: "OpenVSCode Server",
      },
    ],
    tags: ["Open VS Code"],
  },
  demoScreencast,
];
