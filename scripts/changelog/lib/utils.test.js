import {
  parseOldReleaseNote,
  parseNewReleaseNote,
  ensureGithubToken,
  sortByCategoryOrder,
  readPartial,
  getPrParticipants,
  replaceContentOfBlock,
  getChangelogVersions,
  findCategoryForPr,
  getPastChangelogName,
} from "./utils.js";
import { prCategories, changelogPath } from "./config.js";
import { jest } from "@jest/globals";
import fs from "fs/promises";

const consoleError = jest.spyOn(console, "error").mockImplementation(() => {});
const exit = jest.spyOn(process, "exit").mockImplementation(() => {});

test("New release blocks get parsed correctly", () => {
  const prWithInvalidHeadingLevel = {
    body: `
      # Release Notes
      Content
    `,
  };

  const prWithValidBlock = {
    body: "## Release Notes\nContent",
  };

  const prWithWeirdCase = {
    body: "## ReLeAsE nOtEs\nContent",
  };

  const prWithMultipleBlocks = {
    body: "## Release Notes\nContent\n## Release Notes\nContent2",
  };

  const prWithNoBlock = {
    body: "## Description\nContent\n## Other Notes\nContent2",
  };

  expect(parseNewReleaseNote(prWithInvalidHeadingLevel)).toBeNull();
  expect(parseNewReleaseNote(prWithValidBlock)).toBe("Content");
  expect(parseNewReleaseNote(prWithWeirdCase)).toBe("Content");
  expect(parseNewReleaseNote(prWithMultipleBlocks)).toBe("Content");
  expect(parseNewReleaseNote(prWithNoBlock)).toBeNull();
});

test("Formatting of old release note blocks works for valid release notes", () => {
  const pr = {
    body: `
        ## How to test
        <!-- Provide steps to test this PR -->
        \`\`\`bash
        # For bash shell
        source <(cd $GITPOD_REPO_ROOT/components/gitpod-cli && go run . completion bash)
        gp # Press tab and keep on 😛
        \`\`\`

        ## Release Notes
        <!--
        Add entries for the CHANGELOG.md or "NONE" if there aren't any user facing changes.
        -->
        \`\`\`release-note
        Tab-completions of \`gp\` CLI is now available for bash, fish and zsh
        \`\`\`
    `,
  };
  expect(parseOldReleaseNote(pr)).toBe(
    "Tab-completions of `gp` CLI is now available for bash, fish and zsh"
  );
});

test("Formatting of old release note blocks returns nothing for invalid release notes [no end for block]", () => {
  const pr = {
    body: `
          ## Release Notes
          <!--
          Add entries for the CHANGELOG.md or "NONE" if there aren't any user facing changes.
          Each line becomes a separate entry.
          Format: [!<optional for breaking>] <description>
          Example: !basic auth is no longer supported
          See https://www.notion.so/gitpod/Release-Notes-513a74fdd23b4cb1b3b3aefb1d34a3e0
          -->
          \`\`\`release-note
          Tab-completions of \`gp\` CLI is now available for bash, fish and zsh
          ## Werft options:
      `,
  };
  expect(parseOldReleaseNote(pr)).toBe(null);
});

test("Formatting of old release note blocks returns nothing for release blocks with the content of NONE", () => {
  const pr = {
    body: `
        \`\`\`release-note
        NONE
        \`\`\`
    `,
  };
  expect(parseOldReleaseNote(pr)).toBe(null);
});

test("Formatting of old release note blocks returns the content for release blocks only containing NONE", () => {
  const pr = {
    body: `
          \`\`\`release-note
          Add NONE as a possible release note
          \`\`\`
      `,
  };
  expect(parseOldReleaseNote(pr)).not.toBe(undefined);
});

test("If no GitHub token log error and exit process", () => {
  const result = ensureGithubToken(null);
  expect(consoleError.mock.calls).toEqual([
    [
      "Please provide a GitHub personal access token via a `CHANGELOG_GITHUB_ACCESS_TOKEN` environment variable.",
    ],
    [
      "Create a personal access token at https://github.com/settings/tokens/new?scopes=repo,user",
    ],
  ]);
  expect(result).toBe(null);
});

test("If GitHub token passed, don't log or exit process", () => {
  const TOKEN = "I AM A TOKEN";
  const result = ensureGithubToken(TOKEN);
  expect(consoleError).not.toBeCalled();
  expect(exit).not.toBeCalled();
  expect(result).toBe(TOKEN);
});

test("Category sorting works correctly", () => {
  // To every category, assign a random number to the `order` property.
  prCategories.forEach(
    (category) => (category.order = Math.floor(Math.random() * 10))
  );
  const sortedCategories = prCategories.sort(sortByCategoryOrder);
  const randomIndex = Math.floor(Math.random() * (prCategories.length - 1));
  expect(sortedCategories[randomIndex].order).toBeLessThanOrEqual(
    sortedCategories[randomIndex + 1].order
  );
});

test("Reading partials works correctly", async () => {
  const releaseDate = "2020-04-20";
  const dataToWrite = "---\norder: 1\n---\n\n# Hi VS Code!";
  await fs.mkdir(`${changelogPath}/${releaseDate}`, { recursive: true });
  await fs.writeFile(`${changelogPath}/${releaseDate}/vscode.md`, dataToWrite);

  const { order, content } = await readPartial("vscode", releaseDate);

  expect(order).toBe(1);
  expect(content.trim()).toBe("# Hi VS Code!");

  // Clean up
  await fs.rm(`${changelogPath}/${releaseDate}`, { recursive: true });
});

test("Reading partials fails correctly on non-existing files", async () => {
  const releaseDate = "2020-04-20";
  const result = await readPartial("jetbrains", releaseDate);

  expect(result).toBe(null);
});

test("@roboquat is filtered out of PR participants and the author is first", () => {
  const prAuthor = "LouIsCool";
  const otherParticipants = ["LoremDipsum", "roboquat", "FunnyUsername2"];
  const participantNodes = otherParticipants.map((participant) => ({
    login: participant,
  }));
  const dummyPr = {
    author: {
      login: prAuthor,
    },
    participants: {
      nodes: participantNodes,
    },
  };

  const participants = getPrParticipants(dummyPr).split(",");
  expect(participants[0]).toBe(prAuthor);
  expect(participants).not.toContain("roboquat");
});

test("Markdown block injection works correctly", () => {
  const input =
    "Helloo!\n<!--- BEGIN_TEST -->\nhi there\n<!--- END_TEST -->\npost-block content";
  const output = replaceContentOfBlock("TEST", "new", input);
  expect(output).toBe(
    "Helloo!\n<!--- BEGIN_TEST -->\r\nnew\r\n<!--- END_TEST -->\npost-block content"
  );

  // Testing invalid data
  expect(() => replaceContentOfBlock("TEST", "", "lorem")).toThrow();
});

test("Categorizing PRs works correctly", () => {
  const samplePr = {
    title: "[code] Make VS Code -20% faster",
    body: "This PR makes VS Code 20% slower by doing X, Y and Z.\n\n## Release notes\n\nHello",
    labels: {
      nodes: [
        {
          name: "team-ide",
        },
        {
          name: "editor: code (browser)",
        },
      ],
    },
  };

  const categorizedPr = findCategoryForPr(samplePr);
  expect(categorizedPr.categories.map((cat) => cat.path)).toContain(
    "vscode.browser"
  );
});

test("Version parsing from metadata works correctly", async () => {
  const metadata = {
    versions: {
      ides: {
        vscode: {
          version: "1.72.3",
        },
        jetbrains: {
          version: "2022.2.3",
        },
      },
    },
  };

  await fs.mkdir(`${changelogPath}/test/metadata`, { recursive: true });
  await fs.writeFile(
    `${changelogPath}/test/meta.json`,
    JSON.stringify(metadata),
    "utf8"
  );
  const data = await getChangelogVersions("2022-10-31");

  // Clean up
  await fs.rm(`${changelogPath}/test/`, { recursive: true });

  // todo(ft): update values
  expect(data.ides.jetbrains.version).toBe(
    metadata.versions.ides.jetbrains.version
  );
  expect(data.ides.vscode.version).toBe(metadata.versions.ides.vscode.version);
});

test("Getting a past changelog works correctly", async () => {
  const releaseDate = "2022-10-31";

  expect(await getPastChangelogName(releaseDate, 0)).toBe(releaseDate);
  expect(await getPastChangelogName(releaseDate, 2)).toBe("2022-09-30");
});
