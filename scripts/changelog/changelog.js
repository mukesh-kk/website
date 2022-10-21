import {
  generatePrChangelogLine,
  processRepository,
  sortByCategoryOrder,
  formatChangelogCategory,
  createOctokitClient,
} from "./lib/utils.js";
import { parseArgs } from "./lib/cli.js";
import { lineBreak, prCategories, repos } from "./lib/config.js";
import minimist from "minimist";

const argv = minimist(process.argv.slice(2));

export const main = async () => {
  const { releaseDate, from, to, githubToken } = parseArgs(argv);
  const octokit = await createOctokitClient(githubToken);

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

  for await (const [index, category] of categorizedPrs.entries()) {
    const prs = category.prs.map(generatePrChangelogLine).join("");
    const formattedCategoryContent = await formatChangelogCategory(
      prs,
      category,
      releaseDate
    );
    categorizedPrs[index] = { ...category, ...formattedCategoryContent };
  }
  const perCategoryPrContent = categorizedPrs
    .sort(sortByCategoryOrder)
    .filter((category) => category.content)
    .map((category) => category.content)
    .join(lineBreak);

  return { releaseDate, content: perCategoryPrContent, prs: categorizedPrs };
};
