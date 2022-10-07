export const lineBreak = "\r\n";
export const changelogPath = "./src/lib/contents/changelog";

export const repos = [
  "gitpod-io/gitpod",
  "gitpod-io/website",
  "gitpod-io/workspace-images",
];

export const prCategories = [
  {
    name: "VS Code",
    labels: ["editor: code (desktop)", "editor: code (browser)"],
    partial: "vscode",
    prefixes: ["code"],
    order: 0,
    prs: [],
  },
  {
    name: "JetBrains",
    labels: ["editor: jetbrains"],
    partial: "jetbrains",
    prefixes: ["jb", "jetbrains"],
    order: 0,
    prs: [],
  },
  {
    name: "Dashboard",
    labels: ["component: dashboard"],
    partial: "dashboard",
    prefixes: ["dashboard"],
    order: 0,
    prs: [],
  },
  {
    name: "Gitpod CLI",
    labels: ["component: gp cli"],
    partial: "cli",
    prefixes: ["gp-cli"],
    order: 0,
    prs: [],
  },
  {
    name: "Server",
    labels: ["component: server"],
    partial: "server",
    prefixes: ["server"],
    order: 0,
    prs: [],
  },
  {
    name: "Website",
    labels: [],
    partial: "website",
    prefixes: [],
    order: 0,
    prs: [],
  },
  {
    name: "Workspace",
    labels: ["team: workspace"],
    partial: "workspace",
    prefixes: [],
    order: 0,
    prs: [],
  },
  // todo(ft): Installer (self-hosted), Workspace, supervisor
  {
    name: "Fixes and improvements",
    labels: [],
    partial: "others",
    order: Infinity,
    prs: [],
  },
];
