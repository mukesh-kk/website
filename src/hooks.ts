// import type { Handle } from "@sveltejs/kit";
// import * as cookie from "cookie";
import { sequence } from "@sveltejs/kit/hooks";
import { compile } from "mdsvex";
import { basename } from "path";

const handleChangelogEntries = async ({ event, resolve }) => {
  const changelogEntries = await Promise.all(
    Object.entries(import.meta.glob("/src/lib/contents/changelog/*.md"))
      .filter(([path]) => !path.endsWith("_template.md"))
      .map(async ([path, mod]) => {
        const { default: content, metadata } = await mod();
        const fileName = basename(path);
        return {
          ...metadata,
          excerpt: (await compile(metadata.excerpt)).code.trim(),
          content: content.render().html,
          fileName,
        };
      })
  );
  changelogEntries.sort((a, b) => Date.parse(b.date) - Date.parse(a.date));
  event.locals.changelogEntries = changelogEntries;
  return await resolve(event);
};

const handleHeaders = async ({ event, resolve }) => {
  const response = await resolve(event);
  // Avoid clickjacking attacks, see https://cheatsheetseries.owasp.org/cheatsheets/Clickjacking_Defense_Cheat_Sheet.html
  response.headers.set(
    "Content-Security-Policy",
    "frame-ancestors *.gitpod.io *.staging.gitpod-dev.com;"
  );
  return response;
};

export const handle = sequence(handleHeaders, handleChangelogEntries);
