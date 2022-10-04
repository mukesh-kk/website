import fs from "fs";
import { Octokit } from "octokit";
import { paginateGraphql } from "@octokit/plugin-paginate-graphql";
import { getMonthBoundaries } from "./lib/dates.js";
import metadataParser from "markdown-yaml-metadata-parser";
import {
  generatePrChangelogLine,
  processRepository,
  outputResults,
} from "./lib/utils.js";
import { lineBreak, prCategories, repos } from "./lib/config.js";
import minimist from "minimist";

const argv = minimist(process.argv.slice(2));

const helpMenu = () => {
  console.info(
    `Usage: node scripts/generate-changelog.js [--help] [--token=github-token] [--dry-run] [--onlyPrs] [<release-date>] [<from>] [<to>]`
  );
  console.info(
    `
    --help: Show this help text
    --token: Github token to use for the API calls. If not provided, the script will try to use the CHANGELOG_GITHUB_ACCESS_TOKEN environment variable
    --dry-run: Do not write the changelog file, just print the output to the console
    --onlyPrs: Only show the PRs section of the changelog. Only effective with --dry-run
    --force: Forcefully overwrite the changelog file, removing any manual changes to index.md
    `
  );
};

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

const ensureGithubToken = () => {
  const githubToken = argv.token || process.env.CHANGELOG_GITHUB_ACCESS_TOKEN;
  if (!githubToken) {
    console.error(
      "Please provide a GitHub personal access token via a `CHANGELOG_GITHUB_ACCESS_TOKEN` environment variable."
    );
    console.error(
      "Create a personal access token at https://github.com/settings/tokens/new?scopes=repo,user"
    );
    process.exit(1);
  }

  return githubToken;
};

const main = async () => {
  if (argv.help || argv.h) {
    helpMenu();
    process.exit(0);
  }

  const [firstBusinessDay, lastBusinessDay] = getMonthBoundaries();
  const releaseDate = argv._[0] || lastBusinessDay;
  const from = argv._[1] || firstBusinessDay;
  const to = argv._[2] || lastBusinessDay;
  const githubToken = ensureGithubToken();

  const octokit = new OctokitWithPlugins({
    auth: githubToken,
  });
  await sayHello(octokit);

  let categorizedPrs = prCategories;
  for (const repo of repos) {
    categorizedPrs = await processRepository({
      octokit,
      repo,
      from,
      to,
      prCategories: categorizedPrs,
    });
  }

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
      // ENOENT means the file doesn't exist, so we just ignore it - we don't require a partial for every category
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
      // Sort by ascending order, according to either the default order value for each category or the order defined in the partial file metadata. If the order is the same, sort by name.
      if (a.order === b.order) {
        return a.name.localeCompare(b.name);
      }
      return a.order - b.order;
    })
    .map((category) => category.content)
    .join(lineBreak);

  const { dryRun, onlyPrs, force } = argv;
  outputResults(releaseDate, perCategoryPrContent, { force, dryRun, onlyPrs });
};

main().catch((error) => {
  console.error(error);
});
