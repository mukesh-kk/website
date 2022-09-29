import adapterNetlify from "@sveltejs/adapter-netlify";
import { mdsvex } from "mdsvex";
import headings from "remark-autolink-headings";
import remarkExternalLinks from "remark-external-links";
import slug from "remark-slug";
import sveltePreprocess from "svelte-preprocess";
import remarkSetImagePath from "./src/lib/utils/remark-set-image-path.js";
import remarkEmbedVideo from "./src/lib/utils/remark-embed-video.js";
import remarkLinkWithImageAsOnlyChild from "./src/lib/utils/remark-link-with-image-as-only-child.js";
import remarkHeadingsPermaLinks from "./src/lib/utils/remark-headings-permalinks.js";
import { toString } from "mdast-util-to-string";
import rehypeWrap from "rehype-wrap-all";
import rehypeImgSize from "rehype-img-size";
import { highlightCode } from "./src/lib/utils/highlight.js";
import { mdsvexGlobalComponents } from "./src/lib/utils/mdsvex-global-components.js";
import { h } from "hastscript";
import { execSync } from "node:child_process";
import { visit } from "unist-util-visit";

/** @type {Partial<import('vite').ServerOptions>} */
let extendedViteServerOptions;

try {
  /**
   * When changing this port number, remember to update it also in these files:
   * - .gitpod.yml
   * - cypress.json
   */
  const port = 3000;

  const gitpodPortUrl = execSync(`gp url ${port}`).toString().trim();

  extendedViteServerOptions = {
    port,
    hmr: {
      protocol: "wss",
      host: new URL(gitpodPortUrl).hostname,
      clientPort: 443,
    },
  };
} catch {
  extendedViteServerOptions = {};
}

/** @type {import('@sveltejs/kit').Config} */
const config = {
  extensions: [".svelte", ".md"],

  kit: {
    browser: {
      hydrate: true,
      router: true,
    },
    trailingSlash: "never",
    adapter: adapterNetlify({
      split: true,
    }),
    amp: false,
    appDir: "_app",
    files: {
      assets: "static",
      hooks: "src/hooks",
      lib: "src/lib",
      routes: "src/routes",
      template: "src/app.html",
    },
    prerender: {
      crawl: true,
      enabled: true,
      onError: "fail", //once the netlify-endpoint for requesting the images isn't needed anymore this can be "fail" again
      entries: ["*"],
    },
    vite: {
      resolve: {
        preserveSymlinks: true,
      },
      server: {
        fs: {
          allow: [".."],
        },
        ...extendedViteServerOptions,
      },
    },
  },

  // options passed to svelte.preprocess (https://svelte.dev/docs#svelte_preprocess)
  preprocess: [
    sveltePreprocess({ postcss: true, scss: true, preserve: ["ld+json"] }),
    mdsvexGlobalComponents({
      dir: `$lib/components`,
      list: [["CodeFence", "code-fence.svelte"]],
      extensions: [".md"],
    }),
    mdsvex({
      extensions: [".md"],
      highlight: {
        highlighter: highlightCode,
      },
      layout: {
        blog: "./src/lib/components/blog/blog-content-layout.svelte",
        docs: "./src/lib/components/docs/docs-content-layout.svelte",
        guides: "./src/lib/components/guides/guides-content-layout.svelte",
        customers:
          "./src/lib/components/customers/customers-content-layout.svelte",
      },
      rehypePlugins: [
        [rehypeWrap, { selector: "table", wrapper: "div.overflow-auto" }],
        [rehypeImgSize, { dir: "./static" }],
        [
          /** Custom rehype plugin to add loading="lazy" to all images */
          () => {
            return (tree) => {
              visit(tree, "element", (node) => {
                if (node.tagName === "img") {
                  node.properties.loading = "lazy";
                }
              });
            };
          },
        ],
      ],
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
                h("span.icon.icon-link header-anchor", {
                  ariaLabel: toString(node) + " permalink",
                }),
              ];
            },
          },
        ],
        remarkSetImagePath,
        remarkLinkWithImageAsOnlyChild,
        remarkHeadingsPermaLinks,
        [
          remarkEmbedVideo,
          {
            width: 800,
            height: 400,
            noIframeBorder: true,
          },
        ],
      ],
    }),
  ],
};

export default config;
