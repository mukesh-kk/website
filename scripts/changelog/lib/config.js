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
    team: "IDE",
    labels: ["editor: code (desktop)", "editor: code (browser)"],
    partial: "vscode",
    prefixes: ["code"],
    order: 0,
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
    labels: ["component: dashboard"],
    partial: "dashboard",
    prefixes: ["dashboard"],
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
    name: "Server",
    team: "WebApp",
    labels: ["component: server"],
    partial: "server",
    prefixes: ["server"],
    order: 0,
    prs: [],
  },
  {
    name: "Website",
    team: "DCS",
    labels: [],
    partial: "website",
    prefixes: [],
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
