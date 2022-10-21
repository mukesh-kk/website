import { main } from "./changelog.js";
import { getMonthName } from "./lib/dates.js";
import bolt from "@slack/bolt";
const { App } = bolt;
import { formatRelative } from "date-fns";

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

  const stats = [
    `:calendar: Releasing ${releasingIn}`,
    `:newspaper: ${sumOfPrs} PRs in total`,
  ];

  const categoryPrs = prs.map((category) => {
    const sum = category.prs.length;

    if (category.partial === "others") {
      return undefined;
    }

    const prLinks = category.prs.map((pr) => `<${pr.url}|#${pr.number}>`);

    return `*${category.name}* - ${sum} PRs\n${prLinks.join(", ")}`;
  });

  const otherPrs = prs
    .find((pr) => pr.partial === "others")
    .prs.map((pr) => {
      return `<${pr.url}|#${pr.number}>`;
    });

  await app.client.chat.postMessage({
    channel: "#changelog",
    text: "Here's the changelog!",
    blocks: [
      {
        type: "header",
        text: {
          type: "plain_text",
          text: `Changelog for ${getMonthName(
            new Date(releaseDate).getUTCMonth() + 1
          )}`,
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
