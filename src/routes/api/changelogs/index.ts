import type { RequestHandler } from "@sveltejs/kit";
import { compile } from "mdsvex";
import { basename } from "path";

export const get: RequestHandler = async () => {
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
  return {
    body: changelogEntries,
    status: 200,
  };
};
