import type { RequestHandler } from "@sveltejs/kit";
import { compile } from "mdsvex";
import slug from "remark-slug";
import headings from "remark-autolink-headings";
import remarkExternalLinks from "remark-external-links";
import { h } from "hastscript";
import { toString } from "mdast-util-to-string";
import getHeadings from "$lib/utils/get-headings";
import remarkSetImagePath from "$lib/utils/remark-set-image-path.js";
import remarkEmbedVideo from "$lib/utils/remark-embed-video.js";
import remarkLinkWithImageAsOnlyChild from "$lib/utils/remark-link-with-image-as-only-child.js";
import remarkHeadingsPermaLinks from "$lib/utils/remark-headings-permalinks.js";

export const get: RequestHandler = async ({ params }) => {
  try {
    if (params.slug.endsWith("__")) {
      params.slug = params.slug.substring(0, params.slug.lastIndexOf("__"));
    }
    if (params.slug.endsWith("_")) {
      return {
        status: 400,
        body: {
          message: "please provide valid path",
        },
      };
    }
    const title = slugToTitle(params.slug);
    const allFiles = import.meta.glob(`/src/routes/docs/**/*.md`, {
      as: "raw",
    });

    const filePath = resolveFile(
      title,
      Object.entries(allFiles).map((item) => item[0])
    );
    const rawMarkdown = allFiles[filePath] as any;

    const compiledMarkdown = await compile(rawMarkdown, {
      remarkPlugins: [
        [
          remarkExternalLinks,
          {
            target: "_blank",
          },
        ],
        slug,
        [
          headings,
          {
            behavior: "append",
            linkProperties: {},
            content: function (node) {
              return [
                h("span.icon.icon-link", {
                  ariaLabel: toString(node) + " permalink",
                }),
              ];
            },
          },
        ],
        remarkSetImagePath,
        remarkLinkWithImageAsOnlyChild,
        remarkHeadingsPermaLinks,
        getHeadings,
        [
          remarkEmbedVideo,
          {
            width: 800,
            height: 400,
            noIframeBorder: true,
          },
        ],
      ],
    });

    const frontmatter = {
      ...compiledMarkdown.data.fm,
      isIndex: filePath.endsWith("index.md"),
    };

    return {
      body: frontmatter,
    };
  } catch (e) {
    console.log(e.message);
    return {
      status: 200,
      body: {
        message: "exited gracefully",
      },
    };
  }
};

function slugToTitle(slug: string) {
  return `/src/routes${slug.replace(/__/g, "/")}`;
}

function resolveFile(fileName: string, markdownFiles: string[]) {
  let result: string;
  const filteredMatches = markdownFiles.filter((file) => {
    const parsedFileName = parseFileNameFromPath(fileName);
    const parsedfile = parseFileNameFromPath(file);
    const match =
      normalizeFileName(parsedFileName) === normalizeFileName(parsedfile);

    return match;
  });

  if (filteredMatches.length > 1) {
    result = filteredMatches.find((file) => {
      const match = file.includes(fileName);
      return match;
    });
  } else {
    result = filteredMatches[0];
  }

  if (!result) {
    result = markdownFiles.find((file) => {
      const parsedFilename = parseFileNameFromPath(fileName);
      const match = file.endsWith(`${parsedFilename}/index.md`);
      return match;
    });
  }
  return result;
}

function parseFileNameFromPath(path: string): string {
  if (path.includes("/")) {
    const parsedFileFromPath = path.split("/")[path.split("/").length - 1];
    return parsedFileFromPath.replace(".md", "");
  } else {
    return null;
  }
}

function normalizeFileName(fileName: string): string {
  fileName = fileName
    .replace(".md", "")
    .replace("(", "")
    .replace(")", "")
    .split(" ")
    .join("-")
    .toLowerCase();

  return fileName;
}
