import fs from "fs";
import { Octokit } from "octokit";
import { paginateGraphql } from "@octokit/plugin-paginate-graphql";
import { getMonthBoundaries } from "./lib/dates.js";
import metadataParser from "markdown-yaml-metadata-parser";
import {
  generatePrChangelogLine,
  processRepository,
  replaceContentOfBlock,
} from "./lib/utils.js";
import minimist from "minimist";

const argv = minimist(process.argv.slice(2));

if (argv.help || argv.h) {
  console.info(
    `Usage: node scripts/generate-changelog.js [--help] [--token=github-token] [--dry-run] [--onlyPrs] [<release-date>] [<from>] [<to>]`
  );
  // Help text for flags
  console.info(
    `
    --help: Show this help text
    --token: Github token to use for the API calls. If not provided, the script will try to use the CHANGELOG_GITHUB_ACCESS_TOKEN environment variable
    --dry-run: Do not write the changelog file, just print the output to the console
    --onlyPrs: Only show the PRs section of the changelog. Only effective with --dry-run
    --force: Forcefully overwrite the changelog file, removing any manual changes to index.md
    `
  );
  process.exit(0);
}

const OctokitWithPlugins = Octokit.plugin(paginateGraphql);

const sayHello = async (octokit) => {
  const {
    viewer: { login, name },
  } = await octokit.graphql(`{
    viewer {
      login
      name
    }
  }`);
  console.log("Hello, %s\r\n", name || login);
};

const prCategories = [
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

const main = async () => {
  const [firstBusinessDay, lastBusinessDay] = getMonthBoundaries();
  const releaseDate = argv._[0] || lastBusinessDay;
  const from = argv._[1] || firstBusinessDay;
  const to = argv._[2] || lastBusinessDay;
  const githubToken = argv.token || process.env.CHANGELOG_GITHUB_ACCESS_TOKEN;
  if (!githubToken) {
    console.warn(
      "Please provide a GitHub personal access token via a `CHANGELOG_GITHUB_ACCESS_TOKEN` environment variable."
    );
    console.log(
      "Create a personal access token at https://github.com/settings/tokens/new?scopes=repo,user"
    );
    process.exit(1);
  }

  const octokit = new OctokitWithPlugins({
    auth: githubToken,
  });
  await sayHello(octokit);

  let categorizedPrs = prCategories;

  const repos = [
    "gitpod-io/gitpod",
    "gitpod-io/website",
    "gitpod-io/workspace-images",
  ];

  for (const repo of repos) {
    categorizedPrs = await processRepository({
      octokit,
      repo,
      from,
      to,
      prCategories: categorizedPrs,
    });
  }

  const lineBreak = "\r\n";
  categorizedPrs.forEach((category, index) => {
    const prs = category.prs.map(generatePrChangelogLine).join("");
    const heading = `## ${category.name}${lineBreak}${lineBreak}`;
    try {
      const partialContent = fs.readFileSync(
        `./src/lib/contents/changelog/${releaseDate}/${category.partial}.md`,
        "utf8"
      );
      const contentWithStrippedMetadata = partialContent.replace(
        /---.*---/gs,
        ""
      );
      const contentMetadata = metadataParser(partialContent);
      if (category.partial !== "others") {
        categorizedPrs[index].order = contentMetadata.metadata?.order || 0;
      }

      if (contentWithStrippedMetadata) {
        if (prs) {
          // There are PRs in this category, so we prepend the partial content to them
          categorizedPrs[
            index
          ].content = `${heading}${contentWithStrippedMetadata}${lineBreak}${lineBreak}${prs}`;
          return;
        } else {
          // There are no PRs for this category, so we only include the partial
          categorizedPrs[
            index
          ].content = `${heading}${contentWithStrippedMetadata}${lineBreak}${lineBreak}`;
          return;
        }
      }
    } catch (e) {
      if (e.code !== "ENOENT") {
        throw e;
      }
    }
    if (prs) {
      categorizedPrs[index].content = `${heading}${prs}${lineBreak}`;
      return;
    }
  });
  const perCategoryPrContent = categorizedPrs
    .sort((a, b) => {
      // Sort by ascending order. If the order is the same, sort by name.
      if (a.order === b.order) {
        return a.name.localeCompare(b.name);
      }
      return a.order - b.order;
    })
    .map((category) => category.content)
    .join(lineBreak);

  const changelogPath = "./src/lib/contents/changelog";

  if (!fs.existsSync(`${changelogPath}/${releaseDate}`)) {
    fs.mkdirSync(`${changelogPath}/${releaseDate}`);
  }

  try {
    fs.copyFileSync(
      `${changelogPath}/_template.md`,
      `${changelogPath}/${releaseDate}/index.md`,
      !argv.force && fs.constants.COPYFILE_EXCL // don't copy if file already exists, unless --force is passed
    );
  } catch {}
  let newChangelogFileContent = fs.readFileSync(
    `${changelogPath}/${releaseDate}/index.md`,
    "utf-8"
  );
  newChangelogFileContent = newChangelogFileContent.replace(
    /{{releaseDate}}/g,
    releaseDate
  );
  newChangelogFileContent = replaceContentOfBlock(
    "AUTOGENERATED_CHANGES",
    perCategoryPrContent,
    newChangelogFileContent
  );

  if (argv.dryRun) {
    console.log("========================================");
    if (argv.onlyPrs) {
      console.log(perCategoryPrContent);
      process.exit(0);
    }
    console.log(newChangelogFileContent);
    process.exit(0);
  }

  fs.writeFileSync(
    `${changelogPath}/${releaseDate}/index.md`,
    newChangelogFileContent
  );
  console.log(
    `Changelog generated. Please edit ${changelogPath}/${releaseDate}/index.md`
  );
};

main().catch((error) => {
  console.error(error);
});
