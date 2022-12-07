import Prism from "prismjs";
import "prismjs/components/prism-docker.min.js";
import "prismjs/components/prism-bash.min.js";
import "prismjs/components/prism-yaml.min.js";
import "prismjs/components/prism-javascript.min.js";
import "prismjs/components/prism-json.min.js";
import "prismjs/components/prism-markdown.min.js";
import "prismjs/components/prism-sql.min.js";
import "prismjs/components/prism-toml.min.js";
import "prismjs/components/prism-promql.min.js";
import "prismjs/components/prism-go.min.js";
import "prismjs/components/prism-typescript.min.js";
import { escapeSvelte } from "mdsvex";

const langMap = {
  sh: "bash",
  Dockerfile: "dockerfile",
  YAML: "yaml",
};

/**
 *
 * @param {string} code the code that gets parsed
 * @param {string} lang the language the code is written in
 * @param {string} meta meta information for the code fence
 * @returns {string}
 */
export function highlightCode(code, lang, meta) {
  let title = null;
  const _lang = langMap[lang] || lang || "";

  if (meta) {
    title = meta.match(/title="?(.*?)"/)?.[1];
  }

  const highlighted = _lang
    ? escapeSvelte(Prism.highlight(code, Prism.languages[_lang], _lang))
    : code;
  return `<CodeFence code={${JSON.stringify(highlighted)}}
  rawCode={${JSON.stringify(code)}}
  lang={"${_lang}"}
  ${title ? `title={"${title}"}` : ""}
  />`;
}
