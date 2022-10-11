import { helpMenu, sayHello } from "./cli.js";
import { ensureGithubToken } from "./utils.js";
import { jest } from "@jest/globals";
import { Octokit } from "octokit";

const consoleInfo = jest.spyOn(console, "info").mockImplementation(() => {});

test("Help menu outputs the correct amount of info into stdout", () => {
  helpMenu();
  expect(consoleInfo).toHaveBeenCalledTimes(2);
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
4;
