import type { Feature } from "$lib/types/feature";

export const feature: Feature = {
  title: "Spin up dev environments with a single click.",
  paragraph:
    "The extension adds a Gitpod button on every project and branch across GitLab, GitHub, and Bitbucket so you can easily open a new workspace for any project.",
  image: {
    src: "/images/extension-activation/extension-screenshot.png",
    alt: "A GitHub project page with the Gitpod button highlighted",
    classNames: "shadow-medium rounded-2xl",
  },
};
