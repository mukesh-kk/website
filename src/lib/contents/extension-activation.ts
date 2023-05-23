import type { Feature } from "$lib/types/feature";
import { terminalSource } from "$lib/contents/terminal";

export const feature: Feature = {
  title:
    "Automate your repo - add <br/>a <span class='text-dark-grey rounded-xl text-lg font-normal'><code>.gitpod.yml</code></span> file",
  paragraph:
    "Help Gitpod understand your repository by creating a gitpod.yml file. It defines the processes to start for your project (e.g. a database or webserver), installs the required tools, editor extensions or IDE plugins.",
  terminal: {
    source: terminalSource,
  },
  moreButton: {
    text: "Learn how to add a .gitpod.yml file",
    href: "/docs/introduction/getting-started#step-3-gitpodify-a-project",
  },
};
