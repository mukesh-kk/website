import type { Brand } from "$lib/types/brand";
import type { Project } from "$lib/types/project";
import type { Testimonial } from "$lib/types/testimonial";
import type { Ide } from "$lib/types/ide";
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
import FourGeeks from "$lib/components/svgs/brands/fourgeeks.svelte";
import type { FeatureTitle } from "$lib/types/feature-title";

export const gitlab: Brand = {
  alt: "GitLab",
  logo: GitlabLogo,
};

export const freeCodeCamp: Brand = {
  alt: "freeCodeCamp",
  logo: FreecodecampLogo,
  transform: "scale(1.1)",
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
};

export const fourGeeks: Brand = {
  logo: FourGeeks,
  alt: "Four Geeks",
};

export const brands: Brand[] = [
  gitlab,
  freeCodeCamp,
  google,
  factorial,
  dataStax,
  amazon,
  shares,
  astrato,
  redwood,
  codeInstitute,
];

export const logosAnimated: Brand[] = [
  freeCodeCamp,
  gitlab,
  jetbrains,
  redwood,
  google,
  amazon,
  codeInstitute,
  fourGeeks,
  dataStax,
  shares,
  astrato,
  factorial,
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
    logo: "svg/projects/java.svg",
    title: "Java",
    githubUrl: "https://github.com/gitpod-io/spring-petclinic",
    gitlabUrl: "https://gitlab.com/gitpod/spring-petclinic",
    bitbucketUrl: "https://bitbucket.org/gitpod/spring-petclinic",
    alt: "Java",
    trackingName: "java",
  },
  {
    logo: "svg/projects/svelte.svg",
    title: "Svelte",
    githubUrl: "https://github.com/gitpod-io/sveltejs-template",
    alt: "Svelte",
    trackingName: "svelte",
  },
  // {
  //   logo: "svg/projects/php.svg",
  //   title: "PHP & Symfony",
  //   githubUrl: "https://github.com/gitpod-io/symfony-demo",
  //   alt: "PHP",
  // },
  // {
  //   logo: "svg/projects/dotnet-core.svg",
  //   title: ".NET Core",
  //   githubUrl: "https://github.com/gitpod-io/example-dotnet-core",
  //   gitlabUrl: "https://gitlab.com/gitpod/dotnetcore",
  //   bitbucketUrl: "https://bitbucket.org/gitpod/dotnetcore",
  //   alt: "C#",
  // },
  // {
  //   logo: "python.png",
  //   title: "Python & Flask",
  //   githubUrl: "https://github.com/breatheco-de/python-flask-api-tutorial",
  //   alt: "Python",
  // },
  // {
  //     logo: 'ruby.png',
  //     title: 'Rails & Postgres',
  //     githubUrl: "https://github.com/gitpod-io/ruby-on-rails",
  //     gitlabUrl: "https://gitlab.com/gitpod/rails",
  //     bitbucketUrl: "https://bitbucket.org/gitpod/ruby-on-rails",
  //     alt: "Ruby",
  // },
];

export const testimonials: Testimonial[] = [
  {
    name: "Ben Halpern",
    avatar: "ben-halpern.jpg",
    org: `<span>
          @forem
        </span>
        and
        <span>
          @ThePracticalDev
        </span>`,
    role: "Creator and Co-founder",
    text: `
      <p>GitPod is incredibly cool.</p>
      <p>In my opinion, this is a big step in open source software contribution. I'm excited to see where we go from here.</p>
    `,
  },
  {
    name: "Michael Friedrich",
    avatar: "michael-friedrich.jpg",
    org: `<span>
        @GitLab
      </span>`,
    role: "Developer Evangelist",
    text: `
        <p>
          Let's say we were overwhelmed how smooth @gitpod workspaces creation & own Docker image for workspaces worked.
        </p>
        <p>
          Plus, installing @code extensions from the store and integrating @gitlab CI. That blew my mind entirely, and that is hard ;)
        </p>
      `,
  },
  {
    name: "Julius Volz",
    avatar: "julius-volz.jpg",
    org: `<span>
        @PrometheusIO
      </span>`,
    role: "Creator",
    text: `
      <p>
        Look at any PR (pull request) in a full coding environment where you can edit, build, and test the PR code, by just prepending "gitpod.io#" to the PR URL. Super useful for reviewing/testing stuff without having to check it out locally!
      </p>
      `,
  },
  {
    name: "David Ressler",
    avatar: "david-ressler.jpg",
    org: `
      <span>
        @instagram
      </span>
    `,
    role: "Engineering Manager",
    text: `
        <p>
          I think I’m in love with @gitpod. It’s such a powerful tool. I’ve learned so much in the past week
          just from stumbling across Github repos that interest me and appending
          “http://gitpod.io/#” to the URL. A+ tool all around.
        </p>
      `,
  },
  {
    name: "Bartłomiej Płotka",
    avatar: "bwplotka.jpg",
    org: `
      <span>
        @RedHat
      </span>
    `,
    role: "Principal Software Engineer",
    text: `
        <div>
          <p>
            This @gitpod thing is magic! Pretty cool, without any extra configuration. Good work!
          </p>

          <p>https://gitpod.io/#https://github.com/thanos-io/thanos</p>
        </div>
      `,
  },
  {
    name: "Mrugesh Mohapatra",
    avatar: "mrugesh-mohapatra.jpg",
    org: `
      <span>
        @freeCodeCamp
      </span>
    `,
    role: "Technology & Community",
    text: `
      <p>
          Ya'all @gitpod is freaking amazing! We integrated it into our workflow for working on @freeCodeCamp's codebase and I am honestly loving it. 🔥🔥!
          <br />
          Go check it out on our repo https://github.com/freeCodeCamp/f... now!
        </p>
    `,
  },
  {
    name: "Sven Peters",
    avatar: "sven-peters.jpg",
    org: `
      <span>
        @MongoDB
      </span>
    `,
    role: "Dev Advocate",
    text: `
      <p>
          Huge time saver, less frustrations for devs: Automated ready-to-code
          dev environments with pre-build workspaces. #gitpod #cloudide
        </p>
    `,
  },
  {
    name: "Jonathan Lister Parsons",
    avatar: "jonathan-lister-parsons.jpg",
    org: `
      <span>
        @PensionBee
      </span>
    `,
    role: "CTO",
    text: `
        <p>
          I'm really enjoying @gitpod - for me, it's made full-stack development in the browser (yes,including mobile) a reality
        </p>
      `,
  },
  {
    name: "Alejandro",
    avatar: "alejandro-sanchez.jpeg",
    org: `
      <span>
        @4GeeksAcademy
      </span>
    `,
    role: "Co-Founder",
    text: `
        <p>
          My setup is on @gitpod, just like Christopher McCandless, where I go my code goes with me,
          no setup whatsoever Smiling face with sunglasses 😎 #IntoTheWild
        </p>
      `,
  },
  {
    name: "ROKU",
    avatar: "roman-kuba.jpg",
    org: `
      <span>
        @GitLab
      </span>
    `,
    role: "Engineering Manager",
    text: `
        <p>
          Have to say that @gitpod is just super nice to use. Very impressed by the performance!
        </p>
    `,
  },
  {
    name: "Hugh Durkin",
    avatar: "hugh-durkin.jpg",
    org: `
      <span>
        @HubSpot
      </span>
    `,
    role: "Platform Ecosystem",
    text: `
        <p>
          I've been playing around with the "next generation" of Cloud IDEs
          lately, and @gitpodio is quickly emerging as one of the best 👨‍💻 <br /> Awesome @github integration, slick Chrome extension, and super fast 🚀
          https://gitpod.io/index.html
        </p>
      `,
  },
  {
    name: "Marcel van Remmerden",
    avatar: "marcel-van-remmerden.jpg",
    org: `
      <span>
        @GitLab
      </span>
    `,
    role: "Product Design Manager",
    text: `<p>
          Can only agree, opening a GitLab repository in gitpod is a magical
          experience, thanks for the integration @gitpod!
        </p>`,
  },
  {
    name: "Brendan O’Leary",
    avatar: "brendan-o-leary.jpg",
    org: `
      <span>
        @GitLab
      </span>
    `,
    role: "Dev. Evangelist",
    text: `
        <p>
          I just discovered the @gitlab @gitpod integration is alive on http://GitLab.com (released in 13.4 behind a feature flag). And it's AMAZING https://docs.gitlab.com/ee/integration....
          .
        </p>
        <p>Now I can code from *anywhere*</p>
      `,
  },
  {
    name: "Joonas Lehtinen",
    avatar: "joonas-lehtinen.png",
    org: `
      <span>
        @vaadin
      </span>
    `,
    role: "Co-founder",
    text: `
        <p>
          Wow - @gitpod is a brilliant way of evaluating a framework without installing anything.
        </p>
        <p>
          Launch gitpod for @vaadin at https://vaadin.com/start/v14 ("Online workspace" tab). You'll have app running and will be editing code in 3min from clicking "Launch" button.
        </p>
    `,
  },
  {
    name: "Yo",
    avatar: "yogi.jpg",
    org: `
      <span>
        @Taskord
      </span>
    `,
    role: "Creator",
    text: `
        <p>
          Now contributing to @gitlab is a cakewalk with @gitpod 🎉!
        </p>
        <p>Already started my game! #100DaysOfCode</p>
      `,
  },
  {
    name: "Senior Enterprise Geek",
    avatar: "k33g.jpg",
    org: `
      <span>
        @GitLab
      </span>
    `,
    role: "Senior Technical Account Manager",
    text: `
        <p>
          Today is a great day, we added the @gitpod support to the @golo_lang repository. So now you can start hacking @golo_lang in almost only one click. Enjoy 🎉
        </p>
        <p>gitpod.io/#https://githu...</p>
      `,
  },
];

export const ides: Ide[] = [
  {
    name: "vscode",
    label: "Visual Studio Code",
    screenshots: {
      desktop: "vscode-desktop.png",
      browser: "vscode-browser.png",
    },
    icon: "vscode.svg",
  },
  {
    name: "goland",
    availibility: "beta",
    label: "Goland",
    screenshots: {
      desktop: "goland.png",
    },
    icon: "goland.svg",
  },
  {
    name: "intellij",
    availibility: "beta",
    label: "IntelliJ IDEA",
    screenshots: {
      desktop: "Intellij.png",
    },
    icon: "intellij.svg",
  },
  {
    name: "pycharm",
    availibility: "beta",
    label: "PyCharm",
    screenshots: {
      desktop: "pycharm.png",
    },
    icon: "pycharm.svg",
  },
  {
    name: "phpstorm",
    availibility: "beta",
    label: "PhpStorm",
    screenshots: {
      desktop: "phpstorm.png",
    },
    icon: "phpstorm.svg",
  },
  {
    name: "rubymine",
    availibility: "beta",
    label: "RubyMine",
    screenshots: {
      desktop: "rubymine.png",
    },
    icon: "rubymine.svg",
  },
  {
    name: "webstorm",
    availibility: "beta",
    label: "WebStorm",
    screenshots: {
      desktop: "webstorm.png",
    },
    icon: "webstorm.svg",
  },
  {
    name: "vim",
    availibility: "beta",
    label: "Vim",
    screenshots: {
      desktop: "vim.png",
    },
    icon: "vim.svg",
  },
];

export const featureTitles: FeatureTitle[] = [
  {
    main: "5h",
    sub: "weekly productivity gain per engineer",
  },
  {
    main: "4x",
    sub: "faster time from zero to first PR",
  },
  {
    main: "61%",
    sub: "cost savings compared to a VDI solution",
  },
  {
    main: "+500k",
    sub: "developers are using Gitpod",
  },
];
