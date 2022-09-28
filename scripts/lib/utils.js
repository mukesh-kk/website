import { unified } from "unified/lib/index.js";
import remarkParse from "remark-parse";

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

  if (withRemovedComments.toUpperCase() === "NONE") return;

  return withRemovedComments;
};

export const parseReleaseNote = (pr) => {
  return parseOldReleaseNote(pr) || parseNewReleaseNote(pr);
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
