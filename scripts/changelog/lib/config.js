export const lineBreak = "\r\n";
export const changelogPath = "./src/lib/contents/changelog";

export const repos = [
  "gitpod-io/gitpod",
  "gitpod-io/website",
  "gitpod-io/workspace-images",
  "gitpod-io/gitpod-vscode-desktop",
];

export const excludedPrUsers = [
  "dependabot[bot]",
  "roboquat",
  "github-actions",
];

export const prCategories = [
  {
    name: "VS Code",
    team: "IDE",
    labels: [],
    partial: "vscode",
    prefixes: ["code"],
    order: 0,
    categories: [
      {
        name: "VS Code Browser",
        labels: ["editor: code (browser)"],
        partial: "browser",
        order: 0,
        prs: [],
      },
      {
        name: "VS Code Desktop",
        labels: ["editor: code (desktop)"],
        partial: "desktop",
        order: 1,
        prs: [],
      },
    ],
    prs: [],
  },
  {
    name: "JetBrains",
    team: "IDE",
    labels: ["editor: jetbrains"],
    partial: "jetbrains",
    prefixes: ["jb", "jetbrains"],
    order: 0,
    prs: [],
  },
  {
    name: "Dashboard",
    team: "WebApp",
    labels: ["component: dashboard", "component: server"],
    partial: "dashboard",
    prefixes: ["dashboard", "server"],
    order: 0,
    prs: [],
  },
  {
    name: "Gitpod CLI",
    team: "IDE",
    labels: ["component: gp cli"],
    partial: "cli",
    prefixes: ["gp-cli"],
    order: 0,
    prs: [],
  },
  {
    name: "Docs",
    team: "DCS",
    labels: ["section: docs-content"],
    partial: "docs",
    prefixes: ["docs"],
    order: 0,
    prs: [],
  },
  {
    name: "Workspace",
    team: "Workspace",
    labels: ["team: workspace"],
    partial: "workspace",
    prefixes: [],
    order: 0,
    categories: [
      {
        name: "Workspace Images",
        labels: ["feature: workspace-images"],
        partial: "images",
        order: 0,
        prs: [],
      },
    ],
    prs: [],
  },
  // todo(ft): Installer (self-hosted), supervisor
  {
    name: "Fixes and improvements",
    labels: [],
    partial: "others",
    order: Infinity,
    prs: [],
  },
];
