//@ts-check
// run yarn generate:jb to regenerate JB docs after editing jb-product.md

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/**
 * @type {Map<string, {[key: string]: string}>}
 */
const products = new Map();
products.set("intellij", {
  productTitle: "IntelliJ IDEA",
  productFullyQualifiedTitle: "IntelliJ IDEA Ultimate",
  productDocCode: "idea",
});
products.set("goland", {
  productTitle: "GoLand",
  productDocCode: "go",
});
products.set("phpstorm", {
  productTitle: "PhpStorm",
  productDocCode: "phpstorm",
});
products.set("pycharm", {
  productTitle: "PyCharm",
  productDocCode: "pycharm",
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
  }
  fs.writeFileSync(
    path.join(
      __dirname,
      `../../gitpod/docs/references/ides-and-editors/${id}.md`
    ),
    content,
    "utf-8"
  );
}
