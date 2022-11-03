import { unified } from "unified/lib/index.js";
import { readFile } from "fs/promises";
import { Octokit } from "octokit";
import { paginateGraphql } from "@octokit/plugin-paginate-graphql";
import { createPullRequest } from "octokit-plugin-create-pull-request";
import minimist from "minimist";
import remarkParse from "remark-parse";
import metadataParser from "markdown-yaml-metadata-parser";
import fs from "fs/promises";

import { getPrsForRepo } from "./getPrs.js";
import {
  changelogPath,
  lineBreak,
  excludedPrUsers,
  prCategories,
} from "./config.js";
import { getMonthName } from "./dates.js";

const argv = minimist(process.argv.slice(2));

export const createOctokitClient = async (/** @type {string} */ token) => {
  const OctokitWithPlugins =
    Octokit.plugin(paginateGraphql).plugin(createPullRequest);
  const octokit = new OctokitWithPlugins({
    auth: token,
  });
  return octokit;
};

export const getPrParticipants = (pr) => {
  const author = pr.author?.login;

  const isUnwantedUser = (user) =>
    !excludedPrUsers.includes(user) && user !== author;

  const participants = pr.participants.nodes
    .map(({ login }) => login)
    .filter(isUnwantedUser)
    .sort();

  if (excludedPrUsers.includes(author)) {
    return participants.join(", ");
  }

  return [author, ...participants].join(",");
};

/**
 * Parser for the old-style changelog entries
 * @returns {string | null}
 */
export const parseOldReleaseNote = (pr) => {
  const releaseNoteMatch = pr.body.match(/```release-notes?(.+?)```/s);
  const releaseNoteText = releaseNoteMatch && releaseNoteMatch[1].trim();
  if (!releaseNoteMatch || releaseNoteText.toUpperCase() === "NONE")
    return null;
  return releaseNoteText;
};

/**
 * Parser for the new release note format (delimited by headings)
 * @returns {string | null}
 */
export const parseNewReleaseNote = (pr) => {
  const data = unified().use(remarkParse).parse(pr.body);
  const blockName = "Release Notes";
  const releaseNotesStart = data.children.find(
    (node) =>
      node.type === "heading" &&
      node.depth === 2 &&
      node.children[0].value.toLowerCase() === blockName.toLowerCase()
  )?.position.end.offset;

  if (!releaseNotesStart) return null;

  const releaseNotesEnd =
    data.children.find(
      (node) =>
        node.type === "heading" &&
        node.depth === 2 &&
        node.position.start.offset > releaseNotesStart
    )?.position.start.offset - 1;

  const releaseNotes = pr.body.slice(
    releaseNotesStart,
    releaseNotesEnd || undefined
  );
  const htmlComments = /<!--([\s\S]*?)-->/g; // https://github.com/stevemao/html-comment-regex/blob/master/index.js
  const withRemovedComments = releaseNotes.replace(htmlComments, "").trim();

  if (!withRemovedComments || withRemovedComments.toUpperCase() === "NONE")
    return null;

  // Make sure the release note isn't the old format
  if (withRemovedComments.startsWith("```release-note")) return null;

  return withRemovedComments;
};

export const parseReleaseNote = (pr) => {
  return parseOldReleaseNote(pr) || parseNewReleaseNote(pr);
};

export const processRepository = async (options) => {
  const { repo, octokit, from, to } = options;
  let { prCategories } = options;
  const { prs, forceLabel = false } = await getPrsForRepo(
    octokit,
    repo,
    from,
    to
  );

  if (!prs || prs.length === 0) {
    console.log(`No PRs found for ${repo}`);
    return prCategories;
  }

  prs.filter(parseReleaseNote).forEach((pr) => {
    if (forceLabel) {
      if (forceLabel.split(".").length === 1) {
        prCategories
          .find((category) => category.partial === forceLabel)
          .prs.push(pr);
      } else {
        const [category, subcategory] = forceLabel.split(".");
        prCategories
          .find((cat) => cat.partial === category)
          .categories.find((sub) => sub.partial === subcategory)
          .prs.push(pr);
      }
      return;
    }

    // We group the PRs by their labels or prefix
    const { categories: recognizedPrCategories, mutatedCategories } =
      findCategoryForPr(pr, prCategories);

    if (recognizedPrCategories.length > 0) {
      prCategories = mutatedCategories;
    } else {
      // The PR goes into the "Other" category
      prCategories.at(-1).prs.push(pr);
    }
  });
  return prCategories;
};

export const replaceContentOfBlock = (blockName, blockContent, fileContent) => {
  const startingLine = `<!--- BEGIN_${blockName} -->`;
  const endingLine = `<!--- END_${blockName} -->`;

  const startingLineIndex = fileContent.indexOf(startingLine);
  const endingLineIndex = fileContent.indexOf(endingLine);

  if (startingLineIndex === -1 || endingLineIndex === -1) {
    throw new Error(
      `Could not find ${startingLine} and/or ${endingLine} in the changelog file`
    );
  }

  const newContent = [
    fileContent.slice(0, startingLineIndex + startingLine.length),
    blockContent,
    fileContent.slice(endingLineIndex),
  ].join("\r\n");

  return newContent;
};

const prefixRegex = /\[.{1,}\] ?/g;
const categoryMetaRegex = /^Category: ?.*/g;

export const generatePrChangelogLine = (pr) => {
  let releaseNote = parseReleaseNote(pr);

  if (!releaseNote) {
    return null;
  }

  if (releaseNote.match(categoryMetaRegex)) {
    releaseNote = releaseNote.replace(categoryMetaRegex, "").trim();
  }

  if (releaseNote.match(prefixRegex)) {
    // Remove the prefix, if any
    releaseNote = releaseNote.replace(prefixRegex, "");
  }
  // Capitalize the first letter
  releaseNote = releaseNote.charAt(0).toUpperCase() + releaseNote.slice(1);

  return `- [#${pr.number}](${
    pr.url
  }) - ${releaseNote} <Contributors usernames="${getPrParticipants(
    pr
  )}" />\r\n`;
};

export const ensureGithubToken = (mockedToken) => {
  let githubToken;

  if (mockedToken === undefined) {
    githubToken =
      argv.token ||
      process.env.CHANGELOG_GITHUB_ACCESS_TOKEN ||
      process.env.GITHUB_TOKEN;
  } else {
    githubToken = mockedToken;
  }

  if (!githubToken) {
    console.error(
      "Please provide a GitHub personal access token via a `CHANGELOG_GITHUB_ACCESS_TOKEN` environment variable."
    );
    console.error(
      "Create a personal access token at https://github.com/settings/tokens/new?scopes=repo,user"
    );
    return null;
  }

  return githubToken;
};

const doesSatisfyCategory = (pr, category) => {
  const releaseNote = parseReleaseNote(pr);

  const byLabel = category.labels?.some((label) =>
    pr.labels.nodes?.some((prLabel) => prLabel.name === label)
  );

  const byPrefix =
    category.prefixes?.some(
      (prefix) =>
        releaseNote.startsWith(`[${prefix}]`) ||
        pr.title.startsWith(`[${prefix}]`)
    ) ?? false;

  return { satisfies: byLabel || byPrefix, byLabel, byPrefix };
};

export const parseReleaseNoteCategory = (releaseNote) => {
  const categoryMeta = releaseNote.match(categoryMetaRegex);

  if (!categoryMeta) return null;

  const categories = categoryMeta[0]
    .replace("Category: ", "")
    .split(",")
    .map((category) => category.trim());

  return categories;
};

// Get all categories / and or subcategories that match the PR with labels or prefix
export const findCategoryForPr = (pr, categories = prCategories) => {
  const matchingPaths = [];

  // This is used when the user wants to force a category, overriding the inferred selection we make
  const categoryOverride = parseReleaseNoteCategory(parseReleaseNote(pr));

  if (categoryOverride) {
    categoryOverride.forEach((category) => {
      const categoryPath = categories.find((cat) => cat.name === category);
      const categoryIndex = categories.findIndex(
        (cat) => cat.name === category
      );

      const subCategoryCategoryIndex = categories.findIndex(
        (category) =>
          category.categories &&
          category.categories.some((sub) => sub.name === category)
      );

      if (subCategoryCategoryIndex !== -1) {
        const subCategoryIndex = categories[
          subCategoryCategoryIndex
        ].categories.findIndex((sub) => sub.name === category);
        matchingPaths.push({
          category: categories[subCategoryCategoryIndex][subCategoryIndex],
          path: `${categories[subCategoryCategoryIndex].partial}.${categories[subCategoryCategoryIndex].categories[subCategoryIndex].partial}`,
        });
        categories[subCategoryCategoryIndex].categories[
          subCategoryIndex
        ].prs.push(pr);
      } else if (categoryPath) {
        matchingPaths.push({
          category: categoryPath,
          path: categoryPath.partial,
        });
        categories[categoryIndex].prs.push(pr);
      }
    });
  } else {
    categories.forEach((category, categoryIndex) => {
      if (category.categories) {
        for (const [
          subCategoryIndex,
          subcategory,
        ] of category.categories.entries()) {
          const { satisfies } = doesSatisfyCategory(pr, subcategory);
          if (satisfies) {
            matchingPaths.push({
              path: `${category.partial}.${subcategory.partial}`,
              category: subcategory,
            });
            categories[categoryIndex].categories[subCategoryIndex].prs.push(pr);
          }
        }
      }

      const { satisfies, byLabel, byPrefix } = doesSatisfyCategory(
        pr,
        category
      );
      if (satisfies) {
        if (!byLabel && byPrefix && category.labels.length > 0) {
          console.warn(
            pr.title,
            "is categorized as",
            category.name,
            "but it doesn't have the label",
            category.labels.join(", ")
          );
        }
        matchingPaths.push({ path: category.partial, category });

        // Make sure we didn't already add the PR to a subcategory
        if (!matchingPaths.some((path) => path.path !== category.partial)) {
          categories[categoryIndex].prs.push(pr);
        }
      }
    });
  }

  // Filter to only the longest paths, as they are the most specific
  const longestPaths = matchingPaths.filter((category) => {
    // Get all paths that start with the current path
    const pathsStartingWithCurrentPath = matchingPaths.filter((otherPath) =>
      otherPath.path.startsWith(category.path)
    );
    // If there are no other paths that start with the current path, it's the longest
    return pathsStartingWithCurrentPath.length === 1;
  });

  return { categories: longestPaths, mutatedCategories: categories };
};

/**
 * Sort by ascending order, according to either the default order value for each category or the order defined in the partial file metadata. If the order is the same, sort by name (alphabetically).
 */
export const sortByCategoryOrder = (a, b) => {
  if (a.order === b.order) {
    // Sort by order in the config
    const aIndex = prCategories.findIndex((cat) => cat.partial === a.partial);
    const bIndex = prCategories.findIndex((cat) => cat.partial === b.partial);

    return aIndex - bIndex;
  }
  return a.order - b.order;
};

export const readPartial = async (name, releaseDate) => {
  const partialContent = await readFile(
    `${changelogPath}/${releaseDate}/${name}.md`,
    "utf8"
  ).catch((e) => {
    if (e.code === "ENOENT") {
      return null;
    }
  });

  if (!partialContent) {
    return null;
  }

  const contentWithStrippedMetadata = partialContent.replace(/---.*---/gs, "");
  const contentMetadata = metadataParser(partialContent);
  const order = contentMetadata.metadata?.order;
  return { content: contentWithStrippedMetadata, order };
};

/**
 * @param {number} month
 * @param {import "octokit".Octokit } octokit
 * @returns either null if no changelog is found, or the changelog PR object
 */
export const getChangelogPr = async (
  month = getMonthName(new Date().getUTCMonth() + 1),
  octokit
) => {
  const branchName = `changelog/${month.toLowerCase()}`;
  const searchQuery = `is:open head:"${branchName}" repo:gitpod-io/website`;
  const currentMonthPr = await octokit.rest.search.issuesAndPullRequests({
    q: searchQuery,
  });

  if (currentMonthPr.data.total_count === 0) {
    return null;
  }

  return currentMonthPr.data.items[0];
};

export const formatChangelogCategory = async (
  prs,
  category,
  releaseDate,
  headingLevel = 2
) => {
  const heading = `${"#".repeat(headingLevel)} ${
    category.name
  }${lineBreak}${lineBreak}`;
  const partialContent = await readPartial(category.partial, releaseDate);
  if (partialContent) {
    const { order, content } = partialContent;
    if (partialContent.content) {
      if (prs) {
        // There are PRs in this category, so we prepend the partial content to them
        return {
          order: order,
          content: `${heading}${content}${lineBreak}${lineBreak}${prs}`,
        };
      } else {
        // There are no PRs for this category, so we only include the partial
        return {
          order: order,
          content: `${heading}${content}${lineBreak}${lineBreak}`,
        };
      }
    }
  } else if (prs) {
    return {
      content: `${heading}${prs}${lineBreak}`,
    };
  }
};

/**
 * @param {string} releaseDate
 */
export const getChangelogVersions = async (releaseDate) => {
  try {
    const changelogMeta = await fs.readFile(
      `${changelogPath}/${releaseDate}/meta.json`,
      "utf-8"
    );

    return JSON.parse(changelogMeta).versions;
  } catch (e) {
    if (e.code === "ENOENT") {
      return null;
    }
    throw e;
  }
};

/**
 * @param {string} releaseDate The release date of the current changelog
 * @param {number} offset how many changelogs to go back in time (0 = current changelog, 1 = previous changelog, etc.)
 * @returns the name of a changelog in the past. If no changelog is found, returns null.
 */
export const getPastChangelogName = async (releaseDate, offset) => {
  const changelogDir = await fs.readdir(changelogPath, {
    withFileTypes: true,
  });

  const sortedChangelogs = changelogDir
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name)
    .filter((changelogName) => {
      const changelogDate = new Date(changelogName);
      const releaseDateDate = new Date(releaseDate);
      return changelogDate < releaseDateDate;
    })
    .sort((a, b) => {
      return new Date(b) - new Date(a);
    });

  if (sortedChangelogs[0] !== releaseDate) {
    sortedChangelogs.unshift(releaseDate);
  }

  if (offset >= sortedChangelogs.length) {
    return null;
  }

  return sortedChangelogs[offset];
};

/**
 *
 * @param {string} releaseDate
 * @param {*} versions
 */
export const writeMeta = async (releaseDate, versions) => {
  const existingMeta = await getChangelogVersions(releaseDate);
  const meta = {
    versions: existingMeta ? { ...existingMeta, ...versions } : versions,
  };
  await fs.writeFile(
    `${changelogPath}/${releaseDate}/meta.json`,
    JSON.stringify(meta, null, 2)
  );
};
