import type { MenuStatus, MenuEntry } from "$lib/types/menu-entry.type";

function M(
  title: string,
  path: string,
  subMenu?: MenuEntry[],
  status?: MenuStatus
): MenuEntry {
  return {
    title,
    status,
    path: "/docs" + (path ? "/" + path : ""),
    subMenu,
  };
}

export const MENU: MenuEntry[] = [
  M("Introduction", ""),
  M("Quickstart", "quickstart"),
  M("Getting Started", "getting-started"),
  M("Configure", "configure", [
    M(".gitpod.yml", "config-gitpod-file"),
    // Why is this side bar name different to the title / URL?
    M("Docker", "config-docker"),
    M("Start Tasks", "config-start-tasks"),
    M("Ports", "config-ports"),
    M("Prebuilds", "prebuilds"),
    M("Environment Variables", "environment-variables"),
    M("Network Bridging", "configure/tailscale"),
    M("Workspace Location", "checkout-location"),
    M("Browser Settings", "configure/browser-settings"),
    M("Dotfiles", "config-dotfiles", []),
    M("SSH", "configure/ssh"),
    M("Multi-Repo", "multi-repo-workspaces", [], "beta"),
    M("Workspace Classes", "workspace-classes", [], "Early Access"),
  ]),
  M("Develop", "develop", [
    M("One workspace per task", "workspaces"),
    M("Life of a workspace", "life-of-workspace"),
    M("Contexts", "context-urls"),
    M("Collaboration & Sharing", "sharing-and-collaboration"),
    M("Teams & Projects", "teams-and-projects", [], "beta"),
    M("Team Billing", "team-billing", [], "beta"),
    M("Usage-based Billing", "usage-based-billing", [], "Early Access"),
    M("Team Plans", "teams", []),
  ]),
  M("IDEs & Editors", "ides-and-editors", [
    M("VS Code Browser", "ides-and-editors/vscode-browser"),
    M("VS Code Desktop", "ides-and-editors/vscode", [], "beta"),
    M("IntelliJ IDEA", "ides-and-editors/intellij", [], "beta"),
    M("GoLand", "ides-and-editors/goland", [], "beta"),
    M("PhpStorm", "ides-and-editors/phpstorm", [], "beta"),
    M("PyCharm", "ides-and-editors/pycharm", [], "beta"),
    M("CLion", "ides-and-editors/clion", [], "soon"),
    M("Rider", "ides-and-editors/rider", [], "soon"),
    M("RubyMine", "ides-and-editors/rubymine", [], "soon"),
    M("WebStorm", "ides-and-editors/webstorm", [], "soon"),
    M("Local Companion", "ides-and-editors/local-companion", [], "beta"),
    M("JetBrains Gateway", "ides-and-editors/jetbrains-gateway", [], "beta"),
    M("VS Code Extensions", "ides-and-editors/vscode-extensions"),
    M("VS Code Settings Sync", "ides-and-editors/settings-sync"),
    M("Command Line (SSH)", "ides-and-editors/command-line", []),
    M("FAQs", "ides-and-editors/faqs", []),
  ]),
  M("Languages", "languages", [
    M("JavaScript", "languages/javascript"),
    M("Python", "languages/python"),
    M("HTML/CSS", "languages/html"),
    M("Java", "languages/java"),
    M("C++", "languages/cpp"),
    M("Go", "languages/go"),
    M("Ruby", "languages/ruby"),
    M("PHP", "languages/php"),
    M("Vue", "languages/vue"),
    M("Scala", "languages/scala"),
    M("Rust", "languages/rust"),
    M(".NET", "languages/dotnet"),
    M("Dart", "languages/dart"),
    M("Julia", "languages/julia"),
    M("LaTeX", "languages/latex"),
    M("R", "languages/r"),
    M("Kotlin", "languages/kotlin"),
    M("Deno", "languages/deno"),
  ]),
  M("Integrations", "integrations", [
    M("GitLab", "gitlab-integration"),
    M("GitHub", "github-integration"),
    M("Bitbucket", "bitbucket-integration"),
    M("GitHub Enterprise", "github-enterprise-integration"),
    M("Bitbucket Server", "bitbucket-server-integration"),
    M("Browser Bookmarklet", "browser-bookmarklet"),
    M("Browser Extension", "browser-extension"),
  ]),
  M("Gitpod Self-Hosted", "self-hosted/latest", [
    M("Installation Guides", "self-hosted/latest/installation-guides", [
      M("Local Preview", "self-hosted/latest/local-preview", [], "beta"),
      M(
        "Reference Architectures",
        "self-hosted/latest/reference-architecture",
        []
      ),
      M("Installing Gitpod", "self-hosted/latest/installing-gitpod"),
      M("Advanced Installation", "self-hosted/latest/advanced"),
    ]),
    M("Operational Guides", "self-hosted/latest/operational-guides", [
      M("Updating", "self-hosted/latest/updating"),
      M("Monitoring", "self-hosted/latest/monitoring"),
      M("Backing Up", "self-hosted/latest/backup-restore"),
    ]),
    M("Troubleshooting", "self-hosted/latest/troubleshooting", [
      M("Support Bundles", "self-hosted/latest/support-bundle", []),
      M("Config Patches", "self-hosted/latest/config-patches", []),
      M("Stop Workspaces", "self-hosted/latest/stop-workspaces", []),
      M("Manage Cluster Nodes", "self-hosted/latest/manage-cluster-nodes", []),
    ]),
    M("Background", "self-hosted/latest/background", [
      M("Disaster Recovery", "self-hosted/latest/disaster-recovery"),
    ]),
    M("Reference", "self-hosted/latest/reference", [
      M("Requirements", "self-hosted/latest/requirements"),
      M(
        "Compatibility Matrix",
        "references/product-compatibility-matrix?admin"
      ),
      M("Telemetry", "self-hosted/latest/telemetry"),
      M("Release Policies", "self-hosted/latest/releases"),
      M("Upgrade Guides", "self-hosted/latest/upgrade-guides"),
    ]),
  ]),
  M("References", "references", [
    M("Compatibility Matrix", "references/product-compatibility-matrix?user"),
    M(".gitpod.yml", "references/gitpod-yml"),
    M("Command Line Interface", "command-line-interface"),
    // M("Custom Docker image", "references/gitpod-dockerfile"),
    // M("Architecture", "references/architecture"),
    M("Roadmap", "references/roadmap"),
    M("Gitpod Releases", "references/gitpod-releases"),
  ]),
  M("Contribute", "contribute", [
    M("Content", "contribute/content"),
    M("Documentation", "contribute/documentation"),
    M("Features & Patches", "contribute/features-and-patches"),
  ]),
  M("Troubleshooting", "troubleshooting", []),
];

export interface MenuContext {
  prev?: MenuEntry;
  thisEntry?: MenuEntry;
  next?: MenuEntry;
}

export function getMenuContext(
  slug: string,
  menu: MenuEntry[] = MENU,
  context: MenuContext = {}
): MenuContext {
  for (const e of menu) {
    if (context.next) {
      return context;
    }
    if (context.thisEntry) {
      context.next = e;
      return context;
    } else if (e.path === slug) {
      context.thisEntry = e;
    } else {
      context.prev = e;
    }
    if (e.subMenu) {
      getMenuContext(slug, e.subMenu, context);
    }
  }
  return context;
}
