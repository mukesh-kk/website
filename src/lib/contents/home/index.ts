import GitlabLogo from "$lib/components/svgs/brands/gitlab-logo.svelte";
import FreecodecampLogo from "$lib/components/svgs/brands/freecodecamp.svelte";
import Google from "$lib/components/svgs/brands/google.svelte";
import Factorial from "$lib/components/svgs/brands/factorial.svelte";
import Datastax from "$lib/components/svgs/brands/datastax.svelte";
import Amazon from "$lib/components/svgs/brands/amazon.svelte";
import Shares from "$lib/components/svgs/brands/shares.svelte";
import Astrato from "$lib/components/svgs/brands/astrato.svelte";
import CodeInstitute from "$lib/components/svgs/brands/code-institute.svelte";
import Redwood from "$lib/components/svgs/brands/redwood.svelte";
import Jetbrains from "$lib/components/svgs/brands/jetbrains.svelte";
import Dynatrace from "$lib/components/svgs/brands/dynatrace.svelte";
import EquipmentShare from "$lib/components/svgs/brands/equipmentshare.svelte";
import FourGeeks from "$lib/components/svgs/brands/fourgeeks.svelte";
import type { Brand } from "$lib/types/brand";
import type { Project } from "$lib/types/project";
import type { Testimonial } from "$lib/types/testimonial";
import type { Ide } from "$lib/types/ide";
import type { FeatureTitle } from "$lib/types/feature-title";

export const gitlab: Brand = {
  alt: "GitLab",
  logo: GitlabLogo,
};

export const freeCodeCamp: Brand = {
  alt: "freeCodeCamp",
  logo: FreecodecampLogo,
  transform: "scale(1.4)",
};

export const google: Brand = {
  alt: "Google",
  logo: Google,
  transform: "scale(0.9)",
};

export const factorial: Brand = {
  alt: "Factorial",
  logo: Factorial,
};

export const dataStax: Brand = {
  alt: "DataStax",
  logo: Datastax,
  transform: "scale(1.1)",
};

export const amazon: Brand = {
  alt: "Amazon",
  logo: Amazon,
  transform: "scale(0.9) translateY(5px)",
};

export const shares: Brand = {
  alt: "Shares",
  logo: Shares,
  transform: "scale(1.1)",
};

export const astrato: Brand = {
  alt: "Astrato",
  logo: Astrato,
  transform: "scale(1.1)",
};

export const redwood: Brand = {
  alt: "Redwood",
  logo: Redwood,
  transform: "scale(1.1)",
};

export const codeInstitute: Brand = {
  alt: "Code Institute",
  logo: CodeInstitute,
};

export const jetbrains: Brand = {
  logo: Jetbrains,
  alt: "JetBrains",
  transform: "scale(0.95)",
};

export const fourGeeks: Brand = {
  logo: FourGeeks,
  alt: "Four Geeks",
  transform: "scale(1.0)",
};

export const equipmentShare: Brand = {
  logo: EquipmentShare,
  alt: "Equipmentshare",
  transform: "scale(1.6)",
};
export const dynatrace: Brand = {
  logo: Dynatrace,
  alt: "Dynatrace",
  transform: "scale(1.3)",
};

export const brands: Brand[] = [
  gitlab,
  dynatrace,
  factorial,
  dataStax,
  equipmentShare,
  amazon,
  shares,
  astrato,
  redwood,
  codeInstitute,
  fourGeeks,
  freeCodeCamp,
];

export const logosAnimated: Brand[] = [
  dataStax,
  gitlab,
  amazon,
  astrato,
  equipmentShare,
  redwood,
  codeInstitute,
  dynatrace,
  factorial,
  fourGeeks,
  shares,
  freeCodeCamp,
];

export const projects: Project[] = [
  {
    logo: "svg/projects/ts.svg",
    title: "Node or TypeScript",
    githubUrl: "https://github.com/gitpod-io/example-typescript-node",
    alt: "Node or TypeScript",
    trackingName: "node-typescript",
  },
  {
    logo: "svg/projects/python.svg",
    title: "Python",
    githubUrl: "https://github.com/gitpod-io/example-python-django",
    alt: "Python",
    trackingName: "python",
  },
  {
    logo: "svg/projects/java.svg",
    title: "Java",
    githubUrl: "https://github.com/gitpod-io/spring-petclinic",
    gitlabUrl: "https://gitlab.com/gitpod/spring-petclinic",
    bitbucketUrl: "https://bitbucket.org/gitpod/spring-petclinic",
    alt: "Java",
    trackingName: "java",
  },
  {
    logo: "svg/projects/go.svg",
    title: "Golang",
    githubUrl: "https://github.com/gitpod-io/example-golang-cli",
    alt: "Golang",
    trackingName: "go",
  },
  {
    logo: "svg/projects/rust.svg",
    title: "Rust",
    githubUrl: "https://github.com/gitpod-io/example-rust-cli",
    alt: "Rust",
    trackingName: "rust",
  },
  {
    logo: "svg/projects/svelte.svg",
    title: "Svelte",
    githubUrl: "https://github.com/gitpod-io/sveltejs-template",
    alt: "Svelte",
    trackingName: "svelte",
  },
];

export const testimonials: Testimonial[] = [
  {
    name: "Tom Preston Werner",
    avatar: "tom-preston-werner.jpg",
    org: `<span>
          GitHub
        </span>
        and
        <span>
          RedwoodJS
        </span>`,
    role: "Creator and Co-founder of",
    text: `
      <p>
      Gitpod totally changed the development
      velocity for RedwoodJS—it removed any
      issues related to configurations of dev
      environments and made it incredibly
      easy to contribute.
      </p>
    `,
  },
  {
    name: "Keith Adams",
    avatar: "keith-adams.jpg",
    org: `<span>
        Slack
      </span>`,
    role: "Former Chief Architect of",
    text: `
    <p>
    Gitpod is the most exciting developer tool
    I have encountered since, I don’t know,
    telnet maybe? Unix? It’s been a while.
    </p>
      `,
  },

  {
    name: "Max Shafirov",
    avatar: "max-shafirov.webp",
    org: `
      <span>
        JetBrains
      </span>
    `,
    role: "CEO at",
    text: `
        <p>
        Through our partnership with Gitpod, we
        are enabling our mutual users to accelerate
        productivity, save resources and time while
        strengthening security compliance
        </p>
      `,
  },
  {
    name: "François Ruty",
    avatar: "françois-ruty.webp",
    org: `
      <span>
        Shares
      </span>
    `,
    role: "CTO at",
    text: `
          <p>
          Gitpod easily saves every engineer half a
          day per week. The amount of productivity
          we gain is staggering.
          </p>
      `,
  },
  {
    name: "Josep Jaume",
    avatar: "josep-jaume.webp",
    org: `
      <span>
        Factorial
      </span>
    `,
    role: "Director of Developer Experience at",
    text: `
      <p>
      I’d estimate each engineer saves 5 to 10
      hours a month on dev environment
      issues that just don’t exist with Gitpod.
      </p>
    `,
  },
  {
    name: "Konrad Mattheis",
    avatar: "konrad-mattheis.webp",
    org: `
      <span>
        Vizlib
      </span>
    `,
    role: "CTO at",
    text: `
      <p>
      The ability for QAs to easily test a branch
      resulted in 20% fewer hotfixes after releases.
      </p>
    `,
  },

  {
    name: "Alejandro Sánchez",
    avatar: "alejandro-sanchez.jpeg",
    org: `
      <span>
        4GeeksAcademy
      </span>
    `,
    role: "Founder of",
    text: `
        <p>
        I would rather shut down the academy
        than stop using Gitpod.
        </p>
      `,
  },
  {
    name: "Julius Volz",
    avatar: "julius-volz.jpg",
    org: `<span>
        PrometheusIO
      </span>`,
    role: "Creator of",
    text: `
      <p>
        Look at any PR (pull request) in a full coding environment where you can edit, build, and test the PR code, by just prepending "gitpod.io#" to the PR URL. Super useful for reviewing/testing stuff without having to check it out locally!
      </p>
      `,
  },
];

export const ides: Ide[] = [
  {
    name: "vscode",
    label: "Visual Studio Code",
    screenshots: {
      desktop: "vscode-desktop.webp",
      browser: "vscode-browser.webp",
    },
    icon: "vscode.svg",
  },
  {
    name: "goland",
    availibility: "beta",
    label: "Goland",
    screenshots: {
      desktop: "goland.webp",
    },
    icon: "goland.svg",
  },
  {
    name: "intellij",
    availibility: "beta",
    label: "IntelliJ IDEA",
    screenshots: {
      desktop: "Intellij.webp",
    },
    icon: "intellij.svg",
  },
  {
    name: "pycharm",
    availibility: "beta",
    label: "PyCharm",
    screenshots: {
      desktop: "pycharm.webp",
    },
    icon: "pycharm.svg",
  },
  {
    name: "phpstorm",
    availibility: "beta",
    label: "PhpStorm",
    screenshots: {
      desktop: "phpstorm.webp",
    },
    icon: "phpstorm.svg",
  },
  {
    name: "rubymine",
    availibility: "beta",
    label: "RubyMine",
    screenshots: {
      desktop: "rubymine.webp",
    },
    icon: "rubymine.svg",
  },
  {
    name: "webstorm",
    availibility: "beta",
    label: "WebStorm",
    screenshots: {
      desktop: "webstorm.webp",
    },
    icon: "webstorm.svg",
  },
  {
    name: "clion",
    availibility: "beta",
    label: "CLion",
    screenshots: {
      desktop: "clion.webp",
    },
    icon: "clion.svg",
  },
  {
    name: "rider",
    availibility: "beta",
    label: "Rider",
    screenshots: {
      desktop: "rider.webp",
    },
    icon: "rider.svg",
  },
  {
    name: "vim",
    label: "Vim",
    screenshots: {
      desktop: "vim.webp",
    },
    icon: "vim.svg",
  },
];

export const featureTitles: FeatureTitle[] = [
  {
    main: "<5 min",
    sub: "to onboard new developers",
  },
  {
    main: "40%",
    sub: "fewer bugs across development lifecycle",
  },
  {
    main: "5h",
    sub: "saved per developer per week",
  },
  {
    main: "45%",
    sub: "increase in developer satisfaction (NPS)",
  },
];
