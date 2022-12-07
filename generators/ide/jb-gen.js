//@ts-check
// run yarn generate:jb to regenerate JB docs after editing jb-product.md

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/**
 * @type {Map<string, {[key: string]: (string | function)}>}
 */
const products = new Map();
products.set("intellij", {
  productTitle: "IntelliJ IDEA",
  productFullyQualifiedTitle: "IntelliJ IDEA Ultimate",
  productDocCode: "idea",
  productCode: "IU",
});
products.set("goland", {
  productTitle: "GoLand",
  productDocCode: "go",
  productCode: "GO",
});
products.set("phpstorm", {
  productTitle: "PhpStorm",
  productDocCode: "phpstorm",
  productCode: "PS",
});
products.set("pycharm", {
  productTitle: "PyCharm",
  productDocCode: "pycharm",
  productCode: "PY",
});
products.set("rubymine", {
  productTitle: "RubyMine",
  productDocCode: "ruby",
  productCode: "RM",
});
products.set("webstorm", {
  productTitle: "WebStorm",
  productDocCode: "webstorm",
  productCode: "WS",
});
products.set("rider", {
  productTitle: "Rider",
  productDocCode: "rider",
  handleSpecialCase: (rawContent) => {
    [
      {
        find: /remote-development-a\.html/g,
        replace: "Remote_development-a.html#gateway",
      },
      {
        find: /managing-plugins\.html/g,
        replace: "Managing_Plugins.html",
      },
      {
        find: /remote-development-overview\.html/g,
        replace: "Remote_development_overview.html",
      },
      {
        find: /tuning-the-ide\.html/g,
        replace: "Tuning_the_IDE.html",
      },
      {
        find: /faq-about-remote-development\.html/g,
        replace: "FAQ_about_remote_development.html",
      },
      {
        find: /configuring-project-and-ide-settings\.html/g,
        replace: "Rider_Settings.html",
      },
    ].forEach(({ find, replace }) => {
      rawContent = rawContent.replace(find, replace);
    });

    return rawContent;
  },
});
products.set("clion", {
  productTitle: "CLion",
  productDocCode: "clion",
  handleSpecialCase: (rawContent) => {
    [
      {
        find: /indexing\.html/g,
        replace: "performance-tuning-tips.html",
      },
    ].forEach(({ find, replace }) => {
      rawContent = rawContent.replace(find, replace);
    });

    return rawContent;
  },
});

const keys = new Set();
keys.add("productId");
for (const parameters of products.values()) {
  for (const key in parameters) {
    keys.add(key);
  }
}

for (const [id, parameters] of products) {
  let content = fs.readFileSync(path.join(__dirname, "jb-product.md"), "utf-8");
  for (const key of keys) {
    const value =
      parameters[key] ||
      (key === "productId" && id) ||
      (key === "productFullyQualifiedTitle" && parameters["productTitle"]) ||
      "";
    content = content.replace(new RegExp(`__${key}__`, "gi"), value);
    if (key === "handleSpecialCase" && parameters[key] instanceof Function) {
      content = parameters[key](content);
    }
  }

  content = handleConditionalSections(content, id);

  fs.writeFileSync(
    path.join(
      __dirname,
      `../../gitpod/docs/references/ides-and-editors/${id}.md`
    ),
    content,
    "utf-8"
  );
}

function handleConditionalSections(content, productId) {
  const SECTION_START_DELIMITER = "<CONDITIONAL_SECTION_START";
  const SECTION_END_DELIMITER = "<CONDITIONAL_SECTION_END>";

  let hasConditionalSections = content.includes(SECTION_START_DELIMITER);

  while (hasConditionalSections) {
    const start = content.indexOf(SECTION_START_DELIMITER);
    const end =
      content.indexOf(SECTION_END_DELIMITER) + SECTION_END_DELIMITER.length;
    const section = content.substring(start, end);

    const searchProducts = section.match(/products="([a-z,]*)/);
    if (searchProducts && searchProducts?.length < 1) {
      throw new Error(
        "List of JetBrains products is not defined in a conditional section"
      );
    }
    const products = searchProducts[1].split(",");

    if (products.includes(productId)) {
      const delimiterA = section.indexOf(">") + 1;
      const delimiterB = section.indexOf(SECTION_END_DELIMITER);
      const text = section.substring(delimiterA, delimiterB);
      content = content.replace(section, text);
    } else {
      content = content.replace(section, "");
    }

    hasConditionalSections = content.includes(SECTION_START_DELIMITER);
  }

  return content;
}
