export const getPrsForRepo = async (octokit, repo, from, to) => {
  // forceLabel is used for repos that can all contribute to the same section (like OpenVSCode Server only contributes to VS Code)
  let forceLabel;
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
      url
    }`;

  switch (repo) {
    case "gitpod-io/gitpod":
      searchQuery = `repo:${repo} is:pr is:merged merged:${from}..${to} sort:updated-desc label:deployed -label:release-note-none`;
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
  return { prs: search.edges.map((edge) => edge.node), forceLabel };
};
