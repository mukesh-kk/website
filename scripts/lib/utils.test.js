import { parseOldReleaseNote } from "./utils.js";

test("Formatting of old release note blocks works for valid release notes", () => {
  const pr = {
    body: `
        ## Description
            ---
        ### Discussion

        Lorem ipsum

        ## Related Issue(s)
        <!-- List the issue(s) this PR solves -->
        Fixes #6969

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
        Each line becomes a separate entry.
        Format: [!<optional for breaking>] <description>
        Example: !basic auth is no longer supported
        See https://www.notion.so/gitpod/Release-Notes-513a74fdd23b4cb1b3b3aefb1d34a3e0
        -->
        \`\`\`release-note
        Tab-completions of \`gp\` CLI is now available for bash, fish and zsh
        \`\`\`

        ## Documentation
        - [ ] Have to document as well
        <!--
        Does this PR require updates to the documentation at www.gitpod.io/docs?
        * Yes
        * 1. Please create a docs issue: https://github.com/gitpod-io/website/issues/new?labels=documentation&template=DOCS-NEW-FEATURE.yml&title=%5BDocs+-+New+Feature%5D%3A+%3Cyour+feature+name+here%3E
        * 2. Paste the link to the docs issue below this comment
        * No
        * Are you sure? If so, nothing to do here.
        -->

        ## Werft options:
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
  expect(parseOldReleaseNote(pr)).toBe(undefined);
});

test("Formatting of old release note blocks returns nothing for release blocks with the content of NONE", () => {
  const pr = {
    body: `
        \`\`\`release-note
        NONE
        \`\`\`
    `,
  };
  expect(parseOldReleaseNote(pr)).toBe(undefined);
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
