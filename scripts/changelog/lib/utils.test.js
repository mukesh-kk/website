import {
  parseOldReleaseNote,
  ensureGithubToken,
  sayHello,
  helpMenu,
  sortByCategoryOrder,
  readPartial,
} from "./utils.js";
import { prCategories, changelogPath } from "./config.js";
import { jest } from "@jest/globals";
import { Octokit } from "octokit";
import fs from "fs/promises";

const consoleError = jest.spyOn(console, "error").mockImplementation(() => {});
const consoleInfo = jest.spyOn(console, "info").mockImplementation(() => {});
const exit = jest.spyOn(process, "exit").mockImplementation(() => {});

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

test("The script can say hello into stdout correctly", async () => {
  const token = ensureGithubToken();

  if (token === null) {
    return;
  }

  const octokit = new Octokit({
    auth: token,
  });
  await sayHello(octokit);
  expect(consoleInfo).toHaveBeenCalledTimes(1);
});

test("Help menu outputs the correct amount of info into stdout", () => {
  helpMenu();
  expect(consoleInfo).toHaveBeenCalledTimes(2);
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
  await fs.rmdir(`${changelogPath}/${releaseDate}`, { recursive: true });
});

test("Reading partials fails correctly on non-existing files", async () => {
  const releaseDate = "2020-04-20";
  const result = await readPartial("vscode", releaseDate);

  expect(result).toBe(null);
});
