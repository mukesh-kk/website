import type {
  ManifestoBenefit,
  ManifestoListItem,
} from "$lib/types/cloud-dev-environments";
import type { Testimonial } from "../types/testimonial";

export const ManifestoItems: ManifestoListItem[] = [
  {
    description: "A fresh disposable development environment for every task.",
    heading: "Ephemeral",
    subHeading: "over long lived",
  },
  {
    description: "Consistently replicable without manual intervention.",
    heading: "Reproducible",
    subHeading: "over cobbled together",
  },
  {
    description: "With minimal friction and difficulty.",
    heading: "Effortless",
    subHeading: "over arduous",
  },
  {
    description: "Instantaneously obtainable, seemingly infinite.",
    heading: "Abundant",
    subHeading: "over scarce",
  },
  {
    description: "Isolated and self-sufficient.",
    heading: "Independent",
    subHeading: "over tangled",
  },
  {
    description: "Supports the most expansive development activities.",
    heading: "Powerful",
    subHeading: "over constrained",
  },
  {
    description: "Lowers the barrier to software development.",
    heading: "Equitable",
    subHeading: "over requiring specialized skills",
  },
  {
    description: "Enables collaboration across time, space and practice.",
    heading: "Collaborative",
    subHeading: "over solitary",
  },
];

export const ManifestoBenefits: ManifestoBenefit[] = [
  {
    heading: "No more configuration drift",
    description:
      "CDEs are automatically created afresh for every task. This way code and development environment always align, and all contributors operate from a consistent configuration. No more “works on my machine”.",
  },
  {
    heading: "Peace of mind",
    description:
      "CDEs are independent of each other. Breaking one has no effect on others. Because CDEs are ephemeral, mistakes are no longer costly. No more struggling to “fix your laptop” after upgrading to the latest version of something.",
  },
  {
    heading: "Parallelism and multi-track development",
    description:
      "Cloud Development Environments are plentiful. Quickly reviewing the change of someone else no longer means you have to “stash” or replace what you’re currently working on. Parallel activities can coexist independently. Inviting peers to what you’re currently doing does not break their current work stream.",
  },

  {
    heading: "Space to learn and play",
    description:
      "Cloud Development Environments remove barriers to play, learn and experiment with code, projects and repositories. Because there is no setup effort, and no risk of breaking the environment you’re working in, CDEs offer a great space to explore and learn about new technologies.",
  },
  {
    heading: "Safe and Secure",
    description:
      "Cloud Development Environments are short-lived, which shortens the attack windows in which resources, secrets or infrastructure could be at risk. Because CDEs are ephemeral, secrets and other credentials should be tightly scoped and short-lived, i.e. should they get compromised they would not be of much use for long. Continuous development environments are isolated from other work which reduces the impact of supply chain attacks. E.g. arbitrary code execution as part of a software build can only affect what’s in the CDE, and not everything that’s running on your laptop.",
  },
];

export const Voices: Testimonial[] = [
  {
    avatar: "kent-beck.jpg",
    role: "signatory of Agile Manifesto and re-creator of Test-Driven Development",
    name: "Kent Beck",
    text: "The first advantage of CDEs for developers is the time they save. I’ve seen different numbers for the current cost of keeping a development environment working, but it’s certainly tens of percent of working time. <br/> <br /> More important, will be all the programs that folks will try writing because they are no longer afraid of wasting another 4 hours before giving up. One of those programs that wouldn’t have been started will turn out to be exceedingly valuable.",
  },
  {
    avatar: "keith-adams.jpg",
    role: "Former Chief Architect of Slack",
    name: "Keith Adams",
    text: "Gitpod is the most exciting developer tool I have encountered since, I don’t know, telnet maybe? Unix? It’s been a while.",
  },
  {
    avatar: "tom-preston-werner.jpg",
    role: "Founder of GitHub",
    name: "Tom Preston-Werner",
    text: "I am a power user of Gitpod myself and am convinced CDEs are on their way to change how the world writes software",
  },
];

export const Quotes = [
  {
    text: "Most of my tools are automated. Why do I have to spend hours every week fixing my developer environment?",
    img: "/images/avatars/alice.png",
    alt: "portrait of fictional character Alice",
  },
  {
    text: "It works on my machine but not on anyone else's. Why is it so difficult to share and collaborate on my projects?",
    img: "/images/avatars/bob.png",
    alt: "portrait of fictional character Bob",
  },
];
