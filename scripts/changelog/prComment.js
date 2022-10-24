import {
  createOctokitClient,
  findCategoryForPr,
  generatePrChangelogLine,
} from "./lib/utils.js";
import { prCategories } from "./lib/config.js";
import fs from "fs/promises";
import process from "process";

const main = async () => {
  let prNumber = 13376;
  let owner = "gitpod-io";
  let repo = "gitpod";

  const autoPrefix = "<!--- AUTOMATIC_RELEASE_NOTE_COMMENT -->";

  if (process.env.GITHUB_EVENT_PATH) {
    const githubActionEvent = JSON.parse(
      await fs.readFile(process.env.GITHUB_EVENT_PATH, "utf8")
    );
    prNumber = githubActionEvent.pull_request.number;
    owner = githubActionEvent.pull_request.base.repo.owner.login;
    repo = githubActionEvent.pull_request.base.repo.name;
  }

  const token = process.env.GITHUB_TOKEN;
  const octokit = await createOctokitClient(token);

  const query = await octokit.graphql(
    `
      query getPr($owner: String!, $repo: String!, $prNum: Int!) {
        repository(owner: $owner, name: $repo) {
          pullRequest(number: $prNum) {
            number
            url
            title
            body
            closed
            merged
            author {
              login
            }
            participants(first: 100) {
              nodes {
                login
              }
            }
            labels(first: 100) {
                nodes {
                    name
                }
            }
            assignees(first: 20) {
              edges {
                node {
                  login
                }
              }
            }
          }
        }
      }
    `,
    {
      owner,
      repo,
      prNum: prNumber,
    }
  );
  const pr = query.repository.pullRequest;
  const releaseNote = generatePrChangelogLine(pr);

  if (!releaseNote) {
    console.info("No release note found");
    return;
  }

  const inferredCategory = prCategories.find((category) =>
    findCategoryForPr(pr, category)
  );

  let category = inferredCategory?.name;

  const isDeployed = pr.labels.nodes.some((label) => label.name === "deployed");

  let status;
  if (pr.open) {
    status =
      "May be included in the next changelog (waiting for merge + deploy)";
  } else if (pr.merged && isDeployed) {
    status = "Included in the next changelog";
  } else if (pr.closed && !pr.merged) {
    status = "Not included in the next changelog (closed without merge)";
  } else if (pr.merged && !isDeployed) {
    status = "Not included in the next changelog (merged but not deployed)";
  }

  const responsible =
    pr.assignees.edges.length > 0
      ? pr.assignees.edges.map((assignee) => `@${assignee.node.login}`)
      : [`@${pr.author.login}`];

  const allCategoryLabels = prCategories
    .map((category) => category.labels)
    .flat();
  const labelsContributingToCategory = pr.labels.nodes
    .filter((label) => allCategoryLabels.includes(label.name))
    .map((label) => label.name);

  const linkifiedContributingLabels = labelsContributingToCategory.map(
    (label) =>
      `https://github.com/${owner}/${repo}/labels/${encodeURIComponent(label)}`
  );

  let comment = `${autoPrefix}\n`;
  comment += "## Changelog entry\n";
  comment += `This is a preview of how the changelog script interpreted your PR, ${responsible.join(
    ", "
  )}:\n`;

  comment += "### Status\n";
  comment += `${status}\n`;

  comment += `### Release Note(s)\n${releaseNote}\n\n`;

  comment += "### Category\n";
  if (category) {
    comment += `${category}`;
    comment += `\n\nWe have automatically detected this PR as belonging to the \`${category}\` category (based on ${
      labelsContributingToCategory.length > 0
        ? linkifiedContributingLabels.join(", ")
        : "the PR title prefix"
    }). If you feel this is incorrect, please see the [category list](https://github.com/gitpod-io/website/blob/main/scripts/changelog/lib/config.js), where you can find all of the available categories + the labels and PR title prefixes which we use for category when categorizing.`;
  } else {
    comment +=
      "⚠️ We have not been able to automatically detect a category for this PR. Please see the [category list](https://github.com/gitpod-io/website/blob/main/scripts/changelog/lib/config.js) for all available categories along with the labels you can use with them.";
  }

  console.info(comment);
  const comments = await octokit.rest.issues.listComments({
    owner,
    repo,
    issue_number: prNumber,
  });
  const existingComment = comments.data.find((comment) =>
    comment.body.startsWith(autoPrefix)
  );
  if (existingComment) {
    console.log("Updating existing comment");

    if (existingComment.body === comment) {
      return;
    }

    await octokit.rest.issues.updateComment({
      owner,
      repo,
      comment_id: existingComment.id,
      body: comment,
    });
  } else {
    console.log("Creating new comment");
    await octokit.rest.issues.createComment({
      owner,
      repo,
      issue_number: prNumber,
      body: comment,
    });
  }
};

main();
