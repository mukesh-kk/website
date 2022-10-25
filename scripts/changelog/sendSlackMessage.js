import bolt from "@slack/bolt";
const { App } = bolt;
import { formatRelative } from "date-fns";

import { main } from "./changelog.js";
import { getMonthName } from "./lib/dates.js";
import {
  getChangelogPr,
  createOctokitClient,
  ensureGithubToken,
} from "./lib/utils.js";

if (!process.env.SLACK_BOT_TOKEN || !process.env.SLACK_SIGNING_SECRET) {
  console.error(
    "Missing Slack environment variables (SLACK_BOT_TOKEN, SLACK_SIGNING_SECRET)"
  );
  process.exit(1);
}

const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  signingSecret: process.env.SLACK_SIGNING_SECRET,
});

(async () => {
  const { releaseDate, prs } = await main();
  const releasingIn = formatRelative(new Date(releaseDate), new Date(), {
    weekStartsOn: 1,
  });

  const sumOfPrs = prs.reduce((acc, curr) => acc + curr.prs.length, 0);

  console.log(releasingIn);

  const octokit = createOctokitClient(ensureGithubToken());

  const month = getMonthName(new Date().getUTCMonth() + 1);
  const currentPr = await getChangelogPr(month, octokit);

  const stats = [
    `:calendar: Releasing ${releasingIn}`,
    `:newspaper: ${sumOfPrs} PRs in total`,
  ];

  if (currentPr) {
    stats.push(`:link: <${currentPr.html_url}|Changelog PR>`);
  }

  const categoryPrs = prs.map((category) => {
    const sum = category.prs.length;

    if (category.partial === "others") {
      return undefined;
    }

    const prLinks = category.prs.map((pr, i) => `<${pr.url}|${i + 1}>`);

    return `*${category.name}* (team ${
      category.team ?? "unassigned"
    }) - ${sum} PRs\n${prLinks.join(", ")}`;
  });

  const otherPrs = prs
    .find((pr) => pr.partial === "others")
    .prs.map((pr, i) => {
      return `<${pr.url}|${i + 1}>`;
    });

  await app.client.chat.postMessage({
    channel: process.env.SLACK_CHANNEL || "#changelog",
    text: "Here's the changelog!",
    blocks: [
      {
        type: "header",
        text: {
          type: "plain_text",
          text: `Changelog for ${month}`,
        },
      },
      {
        type: "section",
        text: {
          type: "mrkdwn",
          text: stats.join("\n"),
        },
      },
      {
        // Sums of PRs, grouped by category
        type: "section",
        text: {
          type: "mrkdwn",
          text: categoryPrs.join("\n"),
        },
      },
      {
        type: "section",
        text: {
          type: "mrkdwn",
          // All other PRs (just numbers with links)
          text: `:bug: + ${
            otherPrs.length
          } *other PRs* (help us categorize them with component labels :pray:): ${otherPrs.join(
            ", "
          )}`,
        },
      },
    ],
  });
})();
