import { helpMenu, sayHello, parseArgs } from "./cli.js";
import { ensureGithubToken } from "./utils.js";
import { jest } from "@jest/globals";
import { Octokit } from "octokit";

const consoleInfo = jest.spyOn(console, "info").mockImplementation(() => {});
const processExit = jest.spyOn(process, "exit").mockImplementation(() => {});

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

test("Arguments are parsed correctly", () => {
  const dummyArgs = {
    _: ["testDate", "testFrom", "testTo"],
  };

  const parsed = parseArgs(dummyArgs);

  expect(parsed.releaseDate).toBe("testDate");
  expect(parsed.from).toBe("testFrom");
  expect(parsed.to).toBe("testTo");
});

test("Help menu argument invokes the help menu", () => {
  const dummyArgs = {
    help: true,
    _: [],
  };
  parseArgs(dummyArgs);

  expect(processExit).toHaveBeenCalledWith(0);
  expect(consoleInfo).toHaveBeenCalledTimes(2);
});
