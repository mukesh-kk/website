import type { PopularItem } from "$lib/types/docs";
import type { Readable } from "svelte/store";
import { readable, derived, writable } from "svelte/store";

const mapQuickstart = (
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

const quickstartItems = readable(
  [
    mapQuickstart(
      "Agda",
      "introduction/getting-started/quickstart/agda",
      false
    ),
    mapQuickstart("C", "introduction/getting-started/quickstart/c", false),
    mapQuickstart(
      "C# .NET",
      "introduction/getting-started/quickstart/dotnet",
      false
    ),
    mapQuickstart("C++", "introduction/getting-started/quickstart/cpp", false),
    mapQuickstart(
      "Clojure",
      "introduction/getting-started/quickstart/clojure",
      false
    ),
    mapQuickstart("Coq", "introduction/getting-started/quickstart/coq", false),
    mapQuickstart(
      "Datasette",
      "introduction/getting-started/quickstart/datasette",
      false
    ),
    mapQuickstart(
      "Deno",
      "introduction/getting-started/quickstart/deno",
      false
    ),
    mapQuickstart(
      "Docker Compose",
      "introduction/getting-started/quickstart/docker-compose",
      false
    ),
    mapQuickstart(
      "Elixir",
      "introduction/getting-started/quickstart/elixir",
      false
    ),
    mapQuickstart("Elm", "introduction/getting-started/quickstart/elm", false),
    mapQuickstart(
      "Flutter",
      "introduction/getting-started/quickstart/flutter",
      false
    ),
    mapQuickstart(
      "Golang",
      "introduction/getting-started/quickstart/go",
      true,
      "/svg/projects/go.svg"
    ),
    mapQuickstart(
      "Grain",
      "introduction/getting-started/quickstart/grain",
      false
    ),
    mapQuickstart(
      "Haskell",
      "introduction/getting-started/quickstart/haskell",
      false
    ),
    mapQuickstart("IHP", "introduction/getting-started/quickstart/ihp", false),
    mapQuickstart(
      "Java Spring",
      "introduction/getting-started/quickstart/java",
      true,
      "/svg/projects/java.svg"
    ),
    mapQuickstart(
      "Julia",
      "introduction/getting-started/quickstart/julia",
      false
    ),
    mapQuickstart(
      "NextJS",
      "introduction/getting-started/quickstart/nextjs",
      false
    ),
    mapQuickstart("Nix", "introduction/getting-started/quickstart/nix", false),
    mapQuickstart(
      "Node - TypeScript",
      "introduction/getting-started/quickstart/typescript",
      true,
      "/svg/projects/ts.svg"
    ),
    mapQuickstart(
      "OCaml",
      "introduction/getting-started/quickstart/ocaml",
      false
    ),
    mapQuickstart(
      "Perl",
      "introduction/getting-started/quickstart/perl",
      false
    ),
    mapQuickstart(
      "PHP Drupal",
      "introduction/getting-started/quickstart/drupal",
      false
    ),
    mapQuickstart(
      "PHP Laravel",
      "introduction/getting-started/quickstart/laravel",
      false
    ),
    mapQuickstart(
      "PlanetScale",
      "introduction/getting-started/quickstart/planetscale",
      false
    ),
    mapQuickstart(
      "Python Django",
      "introduction/getting-started/quickstart/python",
      true,
      "/svg/projects/python.svg"
    ),
    mapQuickstart(
      "Python Flask",
      "introduction/getting-started/quickstart/flask",
      false
    ),
    mapQuickstart(
      "React",
      "introduction/getting-started/quickstart/react",
      false
    ),
    mapQuickstart(
      "Ruby on Rails",
      "introduction/getting-started/quickstart/ruby-on-rails",
      false
    ),
    mapQuickstart(
      "Rust",
      "introduction/getting-started/quickstart/rust",
      true,
      "/svg/projects/rust.svg"
    ),
    mapQuickstart(
      "Scala",
      "introduction/getting-started/quickstart/scala",
      false
    ),
    mapQuickstart(
      "Svelte",
      "introduction/getting-started/quickstart/svelte",
      true,
      "/svg/projects/svelte.svg"
    ),
    mapQuickstart(
      "SvelteKit",
      "introduction/getting-started/quickstart/sveltekit",
      false
    ),
    mapQuickstart(
      "TLA+",
      "introduction/getting-started/quickstart/tlaplus",
      false
    ),
    mapQuickstart(
      "Wasp",
      "introduction/getting-started/quickstart/wasp",
      false
    ),
    mapQuickstart(
      "Wordpress",
      "introduction/getting-started/quickstart/wordpress",
      false
    ),
    mapQuickstart(
      "X11 VNC",
      "introduction/getting-started/quickstart/x11-vnc",
      false
    ),
    mapQuickstart(
      "Yasm",
      "introduction/getting-started/quickstart/yasm",
      false
    ),
  ],
  (_set) => {}
);

export const searchQuery = writable("");
export const popularQuickstarts = derived(quickstartItems, ($quickstartItems) =>
  $quickstartItems.filter((item) => item.favorite)
);
export const remainingQuickstarts: Readable<PopularItem[]> = derived(
  [quickstartItems, searchQuery],
  ([$quickstartItems, $searchQuery]) =>
    $quickstartItems.filter((item) => {
      if ($searchQuery === "") {
        return !item.favorite;
      }
      return (
        !item.favorite &&
        item.title.toLowerCase().includes($searchQuery.toLowerCase())
      );
    })
);
