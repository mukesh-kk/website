import { createOctokitClient } from "./lib/utils.js";
import { getFormattedMonthBoundaries, getMonthName } from "./lib/dates.js";
import process from "process";
import { outputResults } from "./lib/cli.js";

const main = async () => {
  let owner = "gitpod-io";
  let repo = "website";

  const token = process.env.GITHUB_TOKEN;
  const octokit = await createOctokitClient(token);
  const month = getMonthName(new Date().getUTCMonth() + 1);
  const branchName = `changelog/${month.toLowerCase()}`;

  const searchQuery = `is:open head:"${branchName}" repo:${owner}/${repo}`;
  const {
    data: { items: prs },
  } = await octokit.rest.search.issuesAndPullRequests({
    q: searchQuery,
    sort: "updated",
    order: "desc",
  });

  if (prs.length > 0) {
    console.error(prs.map((pr) => `#${pr.number}`).join(", "));
    console.error("Changelog PRs already exist, exiting");
    return;
  }

  const title = `${month} Changelog`;
  const [_, currentChangelogLogDate] = getFormattedMonthBoundaries();

  const changelogFile = `src/lib/contents/changelog/${currentChangelogLogDate}/index.md`;

  const createdPr = await octokit.createPullRequest({
    owner,
    repo,
    title,
    draft: true,
    body: `An automatic update to the changelog for ${month}.\n\n## Links\n\nCurrent changelog RFC: [internal Notion](https://www.notion.so/gitpod/Towards-Continuous-Changelogs-c536b054ea0b4f2fa92fbb3ff41cc4e6)`,
    head: branchName,
    update: true,
    changes: [
      {
        files: {
          [changelogFile]: ({ exists, encoding, content }) => {
            if (exists) {
              return Buffer.from(content, encoding).toString("utf-8");
            }

            return outputResults(currentChangelogLogDate, "");
          },
        },
        commit: `Initiate changelog for ${month}`,
      },
    ],
  });

  const { number: prNumber } = createdPr.data;

  await octokit.rest.issues.addLabels({
    owner,
    repo,
    issue_number: prNumber,
    //todo(ft) after creating the changelog-update label, add it here
    labels: ["section: changelog"],
  });

  console.info(`Created PR #${prNumber}`);

  const previewLink = `https://deploy-preview-${prNumber}--gitpod-kumquat.netlify.app/changelog/`;
  await octokit.rest.issues.createComment({
    owner,
    repo,
    issue_number: prNumber,
    body: `[Preview deployment](${previewLink})`,
  });
  console.info(`Created comment with preview link`);
};

main();
