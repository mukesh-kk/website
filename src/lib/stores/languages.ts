import type { PopularItem } from "$lib/types/docs";
import type { Readable } from "svelte/store";
import { readable, derived } from "svelte/store";

const mapLanguage = (
  title: string,
  path: string,
  favorite: boolean,
  icon?: string
): PopularItem => ({
  title,
  path: "/docs" + (path ? "/" + path : ""),
  favorite,
  icon,
});

const languages = readable(
  [
    mapLanguage(
      "JavaScript",
      "introduction/languages/javascript",
      true,
      "/svg/projects/js.svg"
    ),
    mapLanguage(
      "Python",
      "introduction/languages/python",
      true,
      "/svg/projects/python.svg"
    ),
    mapLanguage(
      "Java",
      "introduction/languages/java",
      true,
      "/svg/projects/java.svg"
    ),
    mapLanguage(
      "Golang",
      "introduction/languages/go",
      true,
      "/svg/projects/go.svg"
    ),
    mapLanguage(
      "Rust",
      "introduction/languages/rust",
      true,
      "/svg/projects/rust.svg"
    ),
    mapLanguage("Svelte", "introduction/languages/svelte", false),
    mapLanguage("HTML/CSS", "introduction/languages/html", false),
    mapLanguage("C++", "introduction/languages/cpp", false),
    mapLanguage("Ruby", "introduction/languages/ruby", false),
    mapLanguage("PHP", "introduction/languages/php", false),
    mapLanguage("Vue", "introduction/languages/vue", false),
    mapLanguage("Scala", "introduction/languages/scala", false),
    mapLanguage(".NET", "introduction/languages/dotnet", false),
    mapLanguage("Dart", "introduction/languages/dart", false),
    mapLanguage("Julia", "introduction/languages/julia", false),
    mapLanguage("LaTeX", "introduction/languages/latex", false),
    mapLanguage("R", "introduction/languages/r", false),
    mapLanguage("Kotlin", "introduction/languages/kotlin", false),
    mapLanguage("Deno", "introduction/languages/deno", false),
  ],
  (_set) => {}
);

export const popularLanguages = derived(languages, ($languages) =>
  $languages.filter((item) => item.favorite)
);
export const remainingLanguages: Readable<PopularItem[]> = derived(
  [languages],
  ([$languages]) =>
    $languages.filter((item) => {
      return !item.favorite;
    })
);
