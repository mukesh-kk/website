import fs from "fs";
import { Octokit } from "octokit";
import { paginateGraphql } from "@octokit/plugin-paginate-graphql";
import { getMonthBoundaries } from "./lib/dates.js";
import metadataParser from "markdown-yaml-metadata-parser";

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

const prCategories = [
  {
    name: "VS Code",
    labels: ["editor: code (desktop)", "editor: code (browser)"],
    partial: "vscode",
    order: 0,
    prs: [],
  },
  {
    name: "JetBrains",
    labels: ["editor: jetbrains"],
    partial: "jetbrains",
    order: 0,
    prs: [],
  },
  // todo(ft): Installer (self-hosted), Dashboard, Workspace
  {
    name: "Fixes and improvements",
    labels: [],
    partial: "others",
    order: Infinity,
    prs: [],
  },
];

const getPrParticipants = (pr) =>
  pr.participants.nodes
    .map(({ login }) => login)
    .filter((login) => !["roboquat"].includes(login))
    .sort()
    .join(",");

const parseReleaseNote = (pr) => {
  // For some reason, the multi-line regex doesn't work. We remove all new line
  // characters and match against the one-line string instead.
  const releaseNoteMatch = pr.body
    .replace(/\r\n/g, " ")
    .match(/```release-notes?(.+?)```/);
  const releaseNoteText = releaseNoteMatch && releaseNoteMatch[1].trim();
  if (!releaseNoteMatch || releaseNoteText.toUpperCase() === "NONE") return;
  return releaseNoteText;
};

const hasReleaseNote = (pr) => !!parseReleaseNote(pr);

const generatePrChangelogLine = (pr) =>
  `- [#${pr.number}](${pr.url}) - ${parseReleaseNote(
    pr
  )} <Contributors usernames="${getPrParticipants(pr)}" />\r\n`;

const main = async () => {
  const [firstBusinessDay, lastBusinessDay] = getMonthBoundaries();
  const releaseDate = process.argv[2] || lastBusinessDay;
  const from = process.argv[3] || firstBusinessDay;
  const to = process.argv[4] || lastBusinessDay;
  const searchQuery = `repo:gitpod-io/gitpod is:pr is:merged merged:${from}..${to} sort:updated-desc label:deployed -label:release-note-none`;
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

  search.edges
    .map((edge) => edge.node)
    .filter(hasReleaseNote)
    .forEach((pr) => {
      const category = prCategories.find((category) =>
        category.labels?.some((label) =>
          pr.labels.nodes?.some((prLabel) => prLabel.name === label)
        )
      );
      if (category) {
        category.prs.push(pr);
      } else {
        prCategories.at(-1).prs.push(pr);
      }
    });

  const lineBreak = "\r\n";
  prCategories.forEach((category, index) => {
    const prs = category.prs.map(generatePrChangelogLine).join("");
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
        prCategories[index].order = contentMetadata.metadata?.order || 0;
      }

      const heading = `## ${category.name}${lineBreak}${lineBreak}`;
      if (contentWithStrippedMetadata) {
        if (prs) {
          // There are PRs in this category, so we prepend the partial content to them
          prCategories[
            index
          ].content = `${heading}${contentWithStrippedMetadata}${lineBreak}${lineBreak}${prs}`;
          return;
        } else {
          // There are no PRs for this category, so we only include the partial
          prCategories[
            index
          ].content = `${heading}${contentWithStrippedMetadata}${lineBreak}${lineBreak}`;
          return;
        }
      }
    } catch (e) {
      if (e.code !== "ENOENT") {
        throw e;
      } else {
        console.warn(`No partial changelog found for ${category.name}`);
      }
    }
    if (prs) {
      prCategories[index].content = `${baseTemplate}${prs}${lineBreak}`;
      return;
    }
  });
  const perCategoryPrContent = prCategories
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

  if (!fs.existsSync(changelogPath)) {
    fs.mkdirSync(`${changelogPath}/${releaseDate}`);
  }
  fs.copyFileSync(
    `${changelogPath}/_template.md`,
    `${changelogPath}/${releaseDate}/index.md`
  );
  let newChangelogFileContent = fs.readFileSync(
    `${changelogPath}/${releaseDate}/index.md`,
    "utf-8"
  );
  newChangelogFileContent = newChangelogFileContent.replace(
    /{{releaseDate}}/g,
    releaseDate
  );
  newChangelogFileContent = newChangelogFileContent.replace(
    /{{fixesAndImprovements}}/,
    perCategoryPrContent
  );
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
