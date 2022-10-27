import {
  generatePrChangelogLine,
  processRepository,
  sortByCategoryOrder,
  formatChangelogCategory,
  createOctokitClient,
} from "./lib/utils.js";
import { parseArgs, sayHello } from "./lib/cli.js";
import { lineBreak, prCategories, repos } from "./lib/config.js";
import minimist from "minimist";

const argv = minimist(process.argv.slice(2));

export const main = async () => {
  const { releaseDate, from, to, githubToken } = parseArgs(argv);
  const octokit = await createOctokitClient(githubToken);

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

  for await (const [index, category] of categorizedPrs.entries()) {
    const prs = category.prs.map(generatePrChangelogLine).join("");
    const formattedCategoryContent = await formatChangelogCategory(
      prs,
      category,
      releaseDate
    );
    categorizedPrs[index] = { ...category, ...formattedCategoryContent };

    if (category.categories) {
      for await (const [
        subIndex,
        subCategory,
      ] of category.categories.entries()) {
        const prs = subCategory.prs.map(generatePrChangelogLine).join("");
        const formattedCategoryContent = await formatChangelogCategory(
          prs,
          subCategory,
          releaseDate,
          3
        );
        categorizedPrs[index].categories[subIndex] = {
          ...subCategory,
          ...formattedCategoryContent,
        };
        // Add the subcategory content to the parent category content
        if (formattedCategoryContent?.content) {
          if (!categorizedPrs[index].content) {
            categorizedPrs[index].content = `## ${
              categorizedPrs[index].name
            }${lineBreak.repeat(2)}`;
          }
          categorizedPrs[index].content += formattedCategoryContent.content;
        }
      }
    }
  }
  const perCategoryPrContent = categorizedPrs
    .sort(sortByCategoryOrder)
    .filter((category) => category.content)
    .map((category) => category.content)
    .join(lineBreak);

  return {
    releaseDate,
    content: perCategoryPrContent,
    prs: categorizedPrs,
  };
};
