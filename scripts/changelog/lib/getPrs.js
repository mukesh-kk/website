import {
  isDeployedInCurrentPeriod,
  isPrReleasedBasedOnReleases,
} from "./prFilters.js";
import minimist from "minimist";
import {
  computeLastDeployedOrMerged,
  readMeta,
  getPastChangelogName,
  writeMeta,
} from "./utils.js";

export const argv = minimist(process.argv.slice(2));

const compareMerged = (a, b) => {
  const aDate = new Date(a.mergedAt);
  const bDate = new Date(b.mergedAt);
  return bDate - aDate;
};

const compareDeployed = (a, b) => {
  const timelineItemsForPrA = a.timelineItems.edges.map((edge) => edge.node);
  const timelineItemsForPrB = b.timelineItems.edges.map((edge) => edge.node);

  // We want to find the last time the deployed label was added to the PR (this helps when a deployment was rolled back and re-deployed again)
  timelineItemsForPrA.reverse();
  timelineItemsForPrB.reverse();

  const deployedAtForPrA = timelineItemsForPrA.find(
    (item) => item.label.name === "deployed"
  ).createdAt;

  const deployedAtForPrB = timelineItemsForPrB.find(
    (item) => item.label.name === "deployed"
  ).createdAt;

  const aDate = new Date(deployedAtForPrA);
  const bDate = new Date(deployedAtForPrB);

  return bDate - aDate;
};

export const getPrsForRepo = async (octokit, repo, from, to) => {
  // forceLabel is used for repos that can all contribute to the same section (like OpenVSCode Server only contributes to VS Code)
  let forceLabel;
  let filter = () => true;
  let sort = compareMerged;
  let writeAutoMeta = true;

  // If the user doesn't provide an explicit starting point, we use the point we left off in the last month's changelog
  if (!argv._[1]) {
    const previousChangelogName = await getPastChangelogName(to, 0);
    const previousChangelogMeta = await readMeta(previousChangelogName);
    const repoInfo = previousChangelogMeta?.versions.repos?.[repo];
    if (repoInfo && repoInfo.lastUpdated) {
      from = repoInfo.lastUpdated;
      console.info("Fetching PRs from where the last changelog left off");
    }
  }
  let searchQuery = `repo:${repo} is:pr is:merged merged:${from}..${to} sort:updated-desc`;

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
      mergedAt
      url
    }`;

  switch (repo) {
    case "gitpod-io/gitpod":
      const fromAdjusted = new Date(
        new Date(from).getTime() - 60 * 24 * 60 * 60 * 1000
      ).toISOString();
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
      filter = isDeployedInCurrentPeriod;
      sort = compareDeployed;
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
        mergedAt
        url
      }`;
      filter = isPrReleasedBasedOnReleases;
      writeAutoMeta = false;
      break;
  }
  console.info(`Fetching PRs for ${repo}`);
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
  if (prs.length === 0) {
    return { prs: [], forceLabel };
  }

  const filteredPrs = prs.filter((pr) => filter(pr, octokit, repo, from, to));
  filteredPrs.sort(sort);

  if (writeAutoMeta) {
    // Write the date of the last PR merged in the repo to meta.json
    writeMeta(to, {
      versions: {
        repos: {
          [repo]: {
            lastUpdated: computeLastDeployedOrMerged(filteredPrs.at(0)),
          },
        },
      },
    });
  }

  console.log(
    `Found ${filteredPrs.length} PRs after filtering for ${repo} (from ${prs.length} total)`
  );
  return { prs: filteredPrs, forceLabel };
};
