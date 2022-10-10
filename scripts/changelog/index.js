import { Octokit } from "octokit";
import { paginateGraphql } from "@octokit/plugin-paginate-graphql";
import { getFormattedMonthBoundaries } from "./lib/dates.js";
import {
  generatePrChangelogLine,
  processRepository,
  outputResults,
  ensureGithubToken,
  sayHello,
  sortByCategoryOrder,
} from "./lib/utils.js";
import { lineBreak, prCategories, repos } from "./lib/config.js";
import minimist from "minimist";

const argv = minimist(process.argv.slice(2));

const OctokitWithPlugins = Octokit.plugin(paginateGraphql);

export const main = async () => {
  if (argv.help || argv.h) {
    helpMenu();
    process.exit(0);
  }

  const [firstBusinessDay, lastBusinessDay] = getFormattedMonthBoundaries();
  const releaseDate = argv._[0] || lastBusinessDay;
  const from = argv._[1] || firstBusinessDay;
  const to = argv._[2] || lastBusinessDay;
  const githubToken = ensureGithubToken();

  if (!githubToken) {
    process.exit(1);
  }

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
    const partialContent = readPartial(category.partial, releaseDate);
    if (partialContent) {
      categorizedPrs[index].order = partialContent.order;
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
    } else if (prs) {
      categorizedPrs[index].content = `${heading}${prs}${lineBreak}`;
      return;
    }
  });
  const perCategoryPrContent = categorizedPrs
    .sort(sortByCategoryOrder)
    .map((category) => category.content)
    .join(lineBreak);

  const { dryRun, onlyPrs, force } = argv;

  outputResults(releaseDate, perCategoryPrContent, { force, dryRun, onlyPrs });
};

main().catch((error) => {
  console.error(error);
});
