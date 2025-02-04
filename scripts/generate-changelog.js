import fs from "fs";
import { Octokit } from "octokit";
import { paginateGraphql } from "@octokit/plugin-paginate-graphql";
import minimist from "minimist";
import { getMonthBoundaries } from "./lib/dates.js";

const argv = minimist(process.argv.slice(2));

const OctokitWithPlugins = Octokit.plugin(paginateGraphql);

const sayHello = async (octokit) => {
  const {
    viewer: { login },
  } = await octokit.graphql(`{
    viewer {
      login
    }
  }`);
  console.log("Hello, %s\r\n", login);
};

const replaceContentOfBlock = (blockName, blockContent, fileContent) => {
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

const getParticipants = (pr) =>
  pr.participants.nodes
    .map(({ login }) => login)
    .filter((login) => !["roboquat"].includes(login))
    .sort()
    .join(",");

const parseReleaseNote = (pr) => {
  const releaseNoteMatch = pr.body.match(/```release-notes?(.+?)```/s);
  const releaseNoteContent = releaseNoteMatch && releaseNoteMatch[1].trim();
  if (!releaseNoteMatch || releaseNoteContent.toUpperCase() === "NONE") {
    return;
  }
  return releaseNoteContent;
};

const generatePrChangelogLine = (pr) =>
  `- [#${pr.number}](${pr.url}) - ${parseReleaseNote(
    pr
  )} <Contributors usernames="${getParticipants(pr)}" />\r\n`;

const main = async () => {
  const [firstBusinessDay, lastBusinessDay] = getMonthBoundaries();
  const releaseDate = argv._[0] || lastBusinessDay;
  const from = argv._[1] || firstBusinessDay;
  const to = argv._[2] || lastBusinessDay;
  const searchQuery = `repo:gitpod-io/gitpod is:pr is:merged merged:${from}..${to} sort:updated-desc label:deployed -label:release-note-none -project:gitpod-io/22`;
  if (!process.env.CHANGELOG_GITHUB_ACCESS_TOKEN) {
    console.warn(
      "Please provide a GitHub personal access token via a `CHANGELOG_GITHUB_ACCESS_TOKEN` environment variable."
    );
    console.log(
      "Create a personal access token at https://github.com/settings/tokens/new?scopes=repo,user"
    );
    process.exit(1);
  }

  const octokit = new OctokitWithPlugins({
    auth: process.env.CHANGELOG_GITHUB_ACCESS_TOKEN,
  });
  await sayHello(octokit);

  console.log(searchQuery);
  const { search } = await octokit.graphql.paginate(
    `query paginate($cursor: String) {
    search(query: "${searchQuery}", type: ISSUE, last: 50, after: $cursor) {
      edges {
        node {
          ... on PullRequest {
            body
            number
            participants(first: 20) {
              nodes {
                login
              }
            }
            labels (first: 50) {
              nodes {
                name
              }
            }
            url
          }
        }
      }
      pageInfo {
        hasNextPage
        endCursor
      }
    }
  }`
  );

  const fixesAndImprovements = search.edges
    .map((edge) => edge.node)
    // We filter any PRs that don't have a release note but also don't have the `release-note-none` label. This is a bug with @roboquat and after it is fixed, this should be removed.
    .filter(parseReleaseNote)
    .map(generatePrChangelogLine)
    .join("");

  try {
    fs.copyFileSync(
      "./src/lib/contents/changelog/_template.md",
      `./src/lib/contents/changelog/${releaseDate}.md`,
      fs.constants.COPYFILE_EXCL
    );
  } catch {} // don't copy if file already exists
  let newChangelogFileContent = fs.readFileSync(
    `./src/lib/contents/changelog/${releaseDate}.md`,
    "utf-8"
  );
  newChangelogFileContent = newChangelogFileContent.replace(
    /{{releaseDate}}/g,
    releaseDate
  );
  newChangelogFileContent = replaceContentOfBlock(
    "AUTOGENERATED_CHANGES",
    fixesAndImprovements,
    newChangelogFileContent
  );

  if (argv.dryRun) {
    console.log("========================================");
    if (argv.onlyPrs) {
      console.log(fixesAndImprovements);
      process.exit(0);
    }
    console.log(newChangelogFileContent);
    process.exit(0);
  }

  fs.writeFileSync(
    `./src/lib/contents/changelog/${releaseDate}.md`,
    newChangelogFileContent
  );
  console.log(
    `Changelog generated. Please edit ./src/lib/contents/changelog/${releaseDate}.md`
  );
};

main().catch((error) => {
  console.error(error);
});
