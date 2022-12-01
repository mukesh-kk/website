import { writeMeta, readMeta, getPastChangelogName } from "./utils.js";

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
  _from,
  releaseDate
) => {
  const [owner, repo] = repository.split("/");
  const latestRelease = await octokit.rest.repos.getLatestRelease({
    owner,
    repo,
  });
  await writeMeta(releaseDate, {
    versions: {
      repos: {
        [repository]: {
          version: latestRelease.data.tag_name,
        },
      },
    },
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
  const previousChangelogReleaseVersionMeta = await readMeta(
    await getPastChangelogName(releaseDate, 1)
  );

  if (
    !previousChangelogReleaseVersionMeta ||
    !previousChangelogReleaseVersionMeta?.repos?.[repository]
  ) {
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

export const isDeployedInCurrentPeriod = (pr, _octokit, _repo, from, to) => {
  const timelineItems = pr.timelineItems.edges.map((edge) => edge.node);

  const end = new Date(to);
  end.setHours(23, 59, 59, 999);
  const start = new Date(from);

  // We want to find the last time the deployed label was added to the PR (this helps when a deployment was rolled back and re-deployed again)
  timelineItems.reverse();

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
