import type { Feature } from "../types/feature.type";

export const features: Feature[] = [
  {
    title: "Introducing Pre-builds",
    paragraph:
      "We invented prebuilds so application code, configuration and infrastructure can all be stored as machine-executable code in your git repositories and applied to dev environments automatically and continuously.",
    moreButton: {
      text: "More on prebuilds",
      href: "/docs/prebuilds/",
    },
    documentationLink: null,
    preview: {
      name: "terminal.png",
      alt: "A terminal that displays Gitpod prebuild output.",
    },
  },
];
