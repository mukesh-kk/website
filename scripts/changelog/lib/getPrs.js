import {
  formatDate,
  dateFormat,
  getFormattedMonthBoundaries,
} from "./dates.js";
import minimist from "minimist";
import { getChangelogVersions, getPastChangelogName } from "./utils.js";

const argv = minimist(process.argv.slice(2));

const byDeployed = (pr) => {
  const timelineItems = pr.timelineItems.edges.map((edge) => edge.node);

  const [from, to] =
    argv._[0] && argv._[1]
      ? [argv._[0], argv._[1]]
      : getFormattedMonthBoundaries();

  const end = new Date(to);
  end.setHours(23, 59, 59, 999);
  const start = new Date(from);
  start.setHours(0, 0, 0, 0);

  const deployedWithinDateBoundaries = timelineItems.find((item) => {
    if (item.label.name !== "deployed") {
      return false;
    }
    const { createdAt: rawDate } = item;
    const createdAt = new Date(rawDate);
    return createdAt >= start && createdAt <= end;
  });
  return deployedWithinDateBoundaries;
};

export const getPrsForRepo = async (octokit, repo, from, to) => {
  // forceLabel is used for repos that can all contribute to the same section (like OpenVSCode Server only contributes to VS Code)
  let forceLabel;
  let searchQuery = `repo:${repo} is:pr is:merged merged:${from}..${to} sort:updated-desc`;
  let filter = () => true;
  let apiQuery = `
    ... on PullRequest {
      body
      title
      number
      author {
        login
      }
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
    }`;

  switch (repo) {
    case "gitpod-io/gitpod":
      const fromAdjusted = formatDate(
        new Date(from).getTime() - 60 * 24 * 60 * 60 * 1000,
        dateFormat,
        "-"
      );
      searchQuery = `repo:${repo} is:pr is:merged merged:${fromAdjusted}..${to} sort:updated-desc label:deployed -label:release-note-none -project:gitpod-io/22`;
      apiQuery = `
      ... on PullRequest {
        body
        title
        number
        author {
          login
        }
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
        timelineItems(last: 100, itemTypes: [LABELED_EVENT]) {
          edges {
            node {
              ... on LabeledEvent {
                createdAt
                label {
                  name
                }
              }
            }
          }
        }
        url
      }`;
      filter = byDeployed;
      from = fromAdjusted;
      break;
    // Don't force any category for website, as it can contribute to multiple categories (e.g. docs, blog)
    case "gitpod-io/website":
      break;
    case "gitpod-io/workspace-images":
      forceLabel = "workspace.images";
      break;
    case "gitpod-io/gitpod-vscode-desktop":
      forceLabel = "vscode.desktop";
      apiQuery = `
      ... on PullRequest {
        body
        title
        number
        author {
          login
        }
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
        mergeCommit {
          oid
        }
        url
      }`;
      filter = isPrReleasedBasedOnReleases;
      break;
  }
  console.info(`Fetching PRs for ${repo} from ${from} to ${to}`);
  console.info(`Search query: ${searchQuery}`);
  const { search } = await octokit.graphql.paginate(
    `query paginate($cursor: String) {
      search(query: "${searchQuery}", type: ISSUE, last: 50, after: $cursor) {
        edges {
          node {
            ${apiQuery}
          }
        }
        pageInfo {
          hasNextPage
          endCursor
        }
      }
    }`
  );

  const prs = search.edges.map((edge) => edge.node);
  if (!prs) {
    return { prs: [], forceLabel };
  }

  const filteredPrs = prs.filter((pr) => filter(pr, octokit, repo));
  console.log(
    `Found ${filteredPrs.length} PRs after filtering for ${repo} (from ${prs.length} total)`
  );
  return { prs: filteredPrs, forceLabel };
};

/**
 * Checks if a PR is already released based on the releases of the repo
 * @param {*} pr The Pull Request to consider
 * @param {*} octokit The pre-authenticated Octokit client
 * @param {string} repository The repo to consider
 * @param {string} releaseDate The date of the release of the changelog
 * @returns {boolean}
 */
export const isPrReleasedBasedOnReleases = async (
  pr,
  octokit,
  repository,
  releaseDate
) => {
  const [owner, repo] = repository.split("/");
  const latestRelease = await octokit.rest.repos.getLatestRelease({
    owner,
    repo,
  });

  const latestCommitOnLatestReleaseTag = latestRelease.data.target_commitish;
  const commitComparison = await octokit.rest.repos.compareCommits({
    owner,
    repo,
    base: latestCommitOnLatestReleaseTag,
    head: pr.mergeCommit.oid,
  });

  const isCurrentCommitAheadOfLatestRelease =
    commitComparison.data.status === "ahead";

  const previousChangelogReleaseVersionMeta = await getChangelogVersions(
    await getPastChangelogName(releaseDate, 1)
  );

  if (!previousChangelogReleaseVersionMeta) {
    console.warn("No previous changelog release found");
    return !isCurrentCommitAheadOfLatestRelease;
  }

  const previousCHangelogReleaseVersion =
    previousChangelogReleaseVersionMeta.repos[repository].version;
  const previousChangelogRelease = await octokit.rest.repos.getReleaseByTag({
    owner,
    repo,
    tag: previousCHangelogReleaseVersion,
  });

  const previousChangelogReleaseCommit =
    previousChangelogRelease.data.target_commitish;
  const commitComparisonToPreviousChangelogRelease =
    await octokit.rest.repos.compareCommits({
      owner,
      repo,
      base: previousChangelogReleaseCommit,
      head: pr.mergeCommit.oid,
    });

  const isCurrentCommitAheadOfPreviousChangelogRelease =
    commitComparisonToPreviousChangelogRelease.data.status === "ahead";

  return (
    !isCurrentCommitAheadOfLatestRelease &&
    isCurrentCommitAheadOfPreviousChangelogRelease
  );
};
