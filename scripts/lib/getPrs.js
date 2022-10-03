import { getMonthBoundaries, join, dateFormat } from "./dates.js";
import minimist from "minimist";

const argv = minimist(process.argv.slice(2));

const byDeployed = (pr) => {
  const timelineItems = pr.timelineItems.edges.map((edge) => edge.node);

  const [from, to] =
    argv._[0] && argv._[1] ? [argv._[0], argv._[1]] : getMonthBoundaries();

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

  switch (repo) {
    case "gitpod-io/gitpod":
      const fromAdjusted = join(
        new Date(from).getTime() - 60 * 24 * 60 * 60 * 1000,
        dateFormat,
        "-"
      );
      searchQuery = `repo:${repo} is:pr is:merged merged:${fromAdjusted}..${to} sort:updated-desc label:deployed -label:release-note-none -project:gitpod-io/22`;
      filter = byDeployed;
      from = fromAdjusted;
      break;
    case "gitpod-io/website":
      forceLabel = "website";
      break;
    case "gitpod-io/workspace-images":
      forceLabel = "workspace";
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

  const filteredPrs = prs.filter(filter);
  console.log(
    `Found ${filteredPrs.length} PRs after filtering for ${repo} (from ${prs.length} total)`
  );
  return { prs: filteredPrs, forceLabel };
};
