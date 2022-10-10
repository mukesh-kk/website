import type { Card } from "$lib/types/card";
import type { Intro } from "$lib/types/intro";
import type {
  FeatureTable,
  FeatureTableColumn,
  FeatureTableToc,
} from "../components/ui-library/feature-table/feature-table";
import logoSvelte from "$lib/components/svgs/logo.svelte";

export const benefits: Card[] = [
  {
    icon: {
      src: "/svg/icons/team.svg",
      alt: "Developer experience",
    },
    title: "Developer experience",
    text: "Developer productivity increases and results in greater team morale.",
  },
  {
    icon: {
      src: "/svg/icons/cloud.svg",
      alt: "Remote work",
    },
    title: "Remote work",
    text: "Work from anywhere on any device. All you need is a browser.",
  },
  {
    icon: {
      src: "/svg/icons/play.svg",
      alt: "Faster onboarding",
    },
    title: "Faster onboarding",
    text: "Ready to code within seconds. No need to set up dev environments.",
  },
  {
    icon: {
      src: "/svg/icons/opensource.svg",
      alt: "Open-source contributions",
    },
    title: "Open-source contributions",
    text: "Increase in open-source contributions thanks to an easy onboarding.",
  },
];

export const intros: Intro[] = [
  {
    image: "/images/local-development/bob.png",
    name: "Bob",
    works: "works locally",
    workflow: `
			<p>Needs to manually configure each project. This includes:</p>
			<ul>
				<li>installing development tools</li>
				<li>cloning Git repos</li>
				<li>installing dependencies</li>
				<li>upgrade tools & dependencies</li>
				<li>etc.</li>
			</ul>
		`,
  },
  {
    image: "/images/local-development/alice.png",
    name: "Alice",
    works: "works in the cloud",
    workflow: "Automates the configuration setup by using",
    workflowComponent: logoSvelte,
    isHighlighted: true,
  },
];

export const bobTableData: FeatureTableColumn = {
  header: {
    headline: "Bob",
    image: {
      path: "/images/local-development/bob.png",
      alt: "Bob",
      height: "h-20",
    },
  },
  enteries: [
    {
      items: [
        {
          term: "Setup new Project",
          list: [
            "clones the source code",
            "ensures the correct runtime versions are installed (e.g. Java, Node, .NET)",
            "makes sure the project supports his operating system",
            "follows onboarding instructions, potentially spending up to a few days on this",
          ],
        },
        {
          term: "Develop a new feature",
          list: [
            "pulls latest default branch",
            "creates feature branch",
            "ensures correct runtimes",
            "ensures correct dependencies",
            "starts database and dev servers",
          ],
        },
        {
          term: "Switch context",
          list: [
            "git stash",
            "git pull",
            "changes branch",
            "ensures correct runtimes",
            "ensures correct dependencies",
            "review code",
            "changes back to previous branch",
            "get stashed files",
            "ensures correct runtimes",
            "ensures correct dependencies",
          ],
        },
        {
          term: "Set up a new computer",
          list: [
            "installs runtimes",
            "installs editors",
            "install editor extensions",
            "configures git",
          ],
        },
        {
          term: "Contribute to open-source projects",
          list: ["repeating all steps of SETUP NEW PROJECT 🥱"],
        },
      ],
    },
  ],
};

export const aliceTableData: FeatureTableColumn = {
  isHighlighted: true,
  header: {
    headline: " Alice",
    image: {
      path: "/images/local-development/alice.png",
      alt: "alice",
      height: "h-20",
    },
  },
  enteries: [
    {
      items: [
        {
          term: "Setup new Project",
          list: [
            "creates a .gitpod.yml file at the root of her project",
            `
            adds start task, e.g.
            <div class="code">
              <span>tasks:</span><br />
              <span>&nbsp;&nbsp;- init:</span> npm install<br />
              <span>&nbsp;&nbsp;&nbsp;&nbsp;command:</span> npm run dev
            </div>
            `,
            "enables Prebuilds",
          ],
        },
        {
          term: "Develop a new feature",
          list: [
            "opens new browser tab",
            'prefixes the issue URL with gitpod.io/#&lang;issue-url&rang; or uses the Gitpod <a href="/docs/configure/user-settings/browser-extension">browser extension</a>',
          ],
        },
        {
          term: "Switch context",
          list: [
            "opens new browser tab",
            'prefixes the PR URL with gitpod.io/#&lang;issue-url&rang; or uses the Gitpod <a href="/docs/configure/user-settings/browser-extension">browser extension</a>',
            "reviews code within Gitpod",
            "closes browser tab",
          ],
        },
        {
          term: "Set up a new computer",
          list: ["only needs a browser"],
        },
        {
          term: "Contribute to open-source projects",
          list: [
            "launches workspace with a single click for all project with a gitpod.yml configured",
          ],
        },
      ],
    },
  ],
};

export const localToc: FeatureTableToc[] = [
  {
    type: "text",
    data: {
      text: "Setup new Project",
    },
  },
  {
    type: "text",
    data: {
      text: "Develop a new feature",
    },
  },
  {
    type: "text",
    data: {
      text: "Switch context",
    },
  },
  {
    type: "text",
    data: {
      text: "Set up a new computer",
    },
  },
  {
    type: "text",
    data: {
      text: "Contribute to Open-Source",
    },
  },
];

export const localComparison: FeatureTable = {
  toc: localToc,
  columns: [bobTableData, aliceTableData],
};
