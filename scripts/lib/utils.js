import { unified } from "unified/lib/index.js";
import fs from "fs";
import remarkParse from "remark-parse";
import { getPrsForRepo } from "./getPrs.js";
import { changelogPath } from "./config.js";

export const getPrParticipants = (pr) => {
  const author = pr.author?.login;
  const participants = pr.participants.nodes
    .map(({ login }) => login)
    .filter((login) => !["roboquat", author].includes(login))
    .sort();
  const allParticipants = [author, ...participants].join(",");
  return allParticipants;
};

export const parseOldReleaseNote = (pr) => {
  const releaseNoteMatch = pr.body.match(/```release-notes?(.+?)```/s);
  const releaseNoteText = releaseNoteMatch && releaseNoteMatch[1].trim();
  if (!releaseNoteMatch || releaseNoteText.toUpperCase() === "NONE") return;
  return releaseNoteText;
};

/**
 * Parser for the new release note format (delimited by headings)
 */
export const parseNewReleaseNote = (pr) => {
  const data = unified().use(remarkParse).parse(pr.body);
  const releaseNotesStart = data.children.find(
    (node) =>
      node.type === "heading" &&
      node.depth === 2 &&
      node.children[0].value === "Release Notes"
  )?.position.end.offset;

  const releaseNotesEnd =
    data.children.find(
      (node) =>
        node.type === "heading" &&
        node.depth === 2 &&
        node.position.start.offset > releaseNotesStart
    )?.position.start.offset - 1;

  if (!releaseNotesStart) return;

  const releaseNotes = pr.body.slice(
    releaseNotesStart,
    releaseNotesEnd || undefined
  );
  const htmlComments = /<!--([\s\S]*?)-->/g; // https://github.com/stevemao/html-comment-regex/blob/master/index.js
  const withRemovedComments = releaseNotes.replace(htmlComments, "").trim();

  if (!withRemovedComments || withRemovedComments.toUpperCase() === "NONE")
    return;

  // Make sure the release note isn't the old format
  if (withRemovedComments.startsWith("```release-note")) return;

  return withRemovedComments;
};

export const parseReleaseNote = (pr) => {
  return parseOldReleaseNote(pr) || parseNewReleaseNote(pr);
};

export const processRepository = async (options) => {
  const { repo, prCategories, octokit, from, to } = options;
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
      prCategories
        .find((category) => category.partial === forceLabel)
        .prs.push(pr);
      return;
    }

    // We group the PRs by their labels or prefix
    const category = prCategories.find((category) => {
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

      if (!byLabel && byPrefix) {
        console.warn(
          pr.title,
          "is categorized as",
          category.name,
          "but it doesn't have the label",
          category.labels.join(", ")
        );
      }
      return byLabel || byPrefix;
    });
    if (category) {
      category.prs.push(pr);
    } else {
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
export const generatePrChangelogLine = (pr) => {
  let releaseNote = parseReleaseNote(pr);
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

export const outputResults = (
  releaseDate,
  perCategoryPrContent,
  options = { onlyPrs: false, force: false, dryRun: false }
) => {
  if (!fs.existsSync(`${changelogPath}/${releaseDate}`)) {
    fs.mkdirSync(`${changelogPath}/${releaseDate}`);
  }

  try {
    fs.copyFileSync(
      `${changelogPath}/_template.md`,
      `${changelogPath}/${releaseDate}/index.md`,
      !options.force && fs.constants.COPYFILE_EXCL // don't copy if file already exists, unless --force is passed
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

  if (options.dryRun) {
    console.log("========================================");
    if (options.onlyPrs) {
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
