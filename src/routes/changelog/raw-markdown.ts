import { basename } from "path";
import type { ChangelogEntry as ChangelogEntryType } from "$lib/types/changelog-entry";

export const get: import("@sveltejs/kit").RequestHandler = async ({
  url,
  locals,
}) => {
  const changelogEntries = Object.entries(
    import.meta.glob("/src/lib/contents/changelog/*.md", { as: "raw" })
  )
    .filter(([path]) => !path.endsWith("_template.md"))
    .reduce((acc, [filePath, content]) => {
      const fileName = basename(filePath);
      acc[fileName] = content;
      return acc;
    }, {});
  const releaseId = url.searchParams.get("releaseId");
  const fileName = releaseId
    ? `${releaseId}.md`
    : (locals.changelogEntries as ChangelogEntryType[]).find((e) => {
        return !e.tag || e.tag.indexOf("self-hosted") == -1;
      }).fileName;
  const body = changelogEntries[fileName];
  if (!body) {
    return {
      status: 404,
      statusText: "Not Found",
    };
  }
  return {
    headers: {
      "Cache-Control": "public, max-age=3600",
    },
    body,
  };
};
