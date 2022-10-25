export const lineBreak = "\r\n";
export const changelogPath = "./src/lib/contents/changelog";

export const repos = [
  "gitpod-io/gitpod",
  "gitpod-io/website",
  "gitpod-io/workspace-images",
];

export const excludedPrUsers = [
  "dependabot[bot]",
  "roboquat",
  "github-actions",
];

export const prCategories = {
  categories: [
    {
      name: "VS Code",
      team: "IDE",
      labels: [],
      partial: "vscode",
      prefixes: ["code"],
      order: 0,
      categories: [
        {
          name: "Browser",
          labels: ["editor: code (browser)"],
          partial: "browser",
          order: 0,
          prs: [],
        },
        {
          name: "Desktop",
          labels: ["editor: code (desktop)"],
          partial: "vscode",
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
  ],
  labels: [],
};
