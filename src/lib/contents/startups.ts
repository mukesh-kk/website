import type { Feature } from "$lib/types/feature";
import {
  codeAnywhereFeature,
  collaborationFeature,
  multiTrackDevelopmentFeature,
} from "./home/features";
import type { ExploreSection } from "$lib/types/explore-section";
import { terminalSource } from "./terminal";
import type { Card } from "$lib/types/card";
import type { FAQ } from "../types/faq";

export const features: Feature[] = [
  {
    title: "Scaling from 3 to 45 engineers in 5 months",
    paragraph:
      "Gitpod helped engineers at Shares.io become more productive and focused. It removed any friction in the onboarding process, dev environment management and the day to day collaboration.",
    moreButton: {
      text: "View customer story",
      href: "/customers/shares-io",
    },
    image: {
      src: "/images/startups/stories.png",
      darkSrc: "/images/startups/stories-dark.png",
      alt: "Gitpod Customer Stories",
    },
  },
  {
    title: "Develop like Google, Facebook or Shopify",
    paragraph:
      "What big tech companies are trying to build internally, Gitpod is bringing to the rest of the world:  container-based development in the cloud.",
    terminal: {
      source: terminalSource,
    },
  },
  multiTrackDevelopmentFeature,
  {
    ...collaborationFeature,
    paragraph:
      "Share running workspaces for pair programming, use port forwarding or share a snapshot as a copy of your workspace with teammates.",
  },
  {
    ...codeAnywhereFeature,
    paragraph:
      "No need for over powered laptops - a chrome book and even iPads work just as fine. And if you adopt a remote work policy one day, then you don't have to worry about source code security.",
  },
];

export const programBenefits: Card[] = [
  {
    icon: {
      src: "/svg/media-kit/logo-mark.svg",
      alt: "Gitpod",
      transform: "scale(.95)",
    },
    title: "Gitpod for free",
    text: "Don't worry about increased workload or adding more users as you grow. We'll be free for at least 1 year with unlimited users and usage.",
  },
  {
    icon: {
      src: "/svg/icons/2x.svg",
      alt: "2x",
    },
    title: "Double up",
    text: 'If your startup is affiliated with <a href="/for/startups/organisations">an approved VC, incubator or accelerator</a> we will extend the program from 1 year to 2 years.',
  },
  {
    icon: {
      src: "/svg/icons/team.svg",
      alt: "Community",
    },
    title: "Join a thriving community",
    text: "Engage with, learn from and share best practices with other startups that use Gitpod.",
  },
];

export const faqs: FAQ = {
  headline: "FAQs",
  items: [
    {
      title: "Are both SaaS and the Self-Hosted option part of the program?",
      content:
        'We are happy to manage Gitpod for you to let you focus on the important things, but if you want to <a href="/docs/configure/self-hosted/latest">self-host</a> on your infrastructure, that\'s possible too, without user limit.',
    },
    {
      title:
        "How do I know if my accelerator/incubator/VC firm is part of Gitpod for Startups?",
      content:
        'Please check this list <a href="/for/startups/organisations">of organisations</a>. You still get one year for free, even if you don\'t find your organisation on the list.',
    },
    {
      title: "What happens after the end of the program?",
      content:
        "At the end of the program, you decide if you want to keep using Gitpod in a professional plan or in the free plan with limited usage. You'll be notified before the end of the program.",
    },
    {
      title: "I'm not eligible but still want to use Gitpod",
      content:
        'We have a very generous <a href="/pricing">free plan</a> for up to 50h a month, including private repos.',
    },
  ],
};

export const exploreContents: ExploreSection = {
  title: "Apply Now",
  note: "Use all our services for free, up to 2 years.",
  link: { text: "Apply Now", href: "https://bit.ly/3liFICY" },
};

export const organisationsLists = [
  {
    from: "0-9",
    organisations: [
      {
        name: "500 Startups",
        url: "https://www.crunchbase.com/organization/500-startups",
      },
    ],
  },
  {
    from: "A-F",
    organisations: [
      {
        name: "ARCH Venture Partners",
        url: "https://www.crunchbase.com/organization/arch-venture-partners",
      },
      {
        name: "Accel",
        url: "https://www.crunchbase.com/organization/accel",
      },
      {
        name: "Alchemist Accelerator",
        url: "https://www.crunchbase.com/organization/alchemist-accelerator",
      },
      {
        name: "Amplify.LA",
        url: "https://www.crunchbase.com/organization/amplify-la",
      },
      {
        name: "Andreessen Horowitz",
        url: "https://www.crunchbase.com/organization/andreessen-horowitz",
      },
      {
        name: "AngelPad",
        url: "https://www.crunchbase.com/organization/angelpad",
      },
      {
        name: "Antler",
        url: "https://www.crunchbase.com/organization/antler-be9c",
      },
      {
        name: "Atlantic Labs",
        url: "https://www.crunchbase.com/organization/atlantic-labs",
      },
      {
        name: "Atlas Venture",
        url: "https://www.crunchbase.com/organization/atlas-venture",
      },
      {
        name: "Austin Ventures",
        url: "https://www.crunchbase.com/organization/austin-ventures",
      },
      {
        name: "Axel Springer Plug and Play",
        url: "https://www.crunchbase.com/organization/axel-springer-plug-and-play-accelerator",
      },
      {
        name: "BDC Venture Capital",
        url: "https://www.crunchbase.com/organization/bdc-venture-capital",
      },
      {
        name: "Bain Capital Ventures",
        url: "https://www.crunchbase.com/organization/bain-capital-ventures",
      },
      {
        name: "Balderton Capital",
        url: "https://www.crunchbase.com/organization/balderton-capital",
      },
      {
        name: "Battery Ventures",
        url: "https://www.crunchbase.com/organization/battery-ventures",
      },
      {
        name: "Benchmark",
        url: "https://www.crunchbase.com/organization/benchmark",
      },
      {
        name: "Berkeley SkyDeck",
        url: "https://www.crunchbase.com/organization/skydeck-berkeley",
      },
      {
        name: "Bessemer Venture Partners",
        url: "https://www.crunchbase.com/organization/bessemer-venture-partners",
      },
      {
        name: "Bethnal Green Ventures",
        url: "https://www.crunchbase.com/organization/bethnal-green-ventures",
      },
      {
        name: "Boomtown Accelerators",
        url: "https://www.crunchbase.com/organization/boomtown-accelerator",
      },
      {
        name: "Boost VC",
        url: "https://www.crunchbase.com/organization/boostfunder",
      },
      {
        name: "BoxGroup",
        url: "https://www.crunchbase.com/organization/boxgroup",
      },
      {
        name: "Business Growth Fund",
        url: "https://www.crunchbase.com/organization/business-growth-fund",
      },
      {
        name: "CRV",
        url: "https://www.crunchbase.com/organization/crvvc",
      },
      {
        name: "Canaan Partners",
        url: "https://www.crunchbase.com/organization/canaan-partners",
      },
      {
        name: "Capital Factory",
        url: "https://www.crunchbase.com/organization/capital-factory",
      },
      {
        name: "Capnamic Ventures",
        url: "https://www.crunchbase.com/organization/capnamic-ventures",
      },
      {
        name: "Cherry Ventures",
        url: "https://www.crunchbase.com/organization/cherry-ventures",
      },
      {
        name: "Chinaccelerator",
        url: "https://www.crunchbase.com/organization/chinaccelerator",
      },
      {
        name: "Comcast Ventures",
        url: "https://www.crunchbase.com/organization/comcast-interactive-capital",
      },
      {
        name: "Creandum",
        url: "https://www.crunchbase.com/organization/creandum",
      },
      {
        name: "Crosslink Capital",
        url: "https://www.crunchbase.com/organization/crosslink-capital",
      },
      {
        name: "Crowdcube",
        url: "https://www.crunchbase.com/organization/crowdcube",
      },
      {
        name: "DCM Ventures",
        url: "https://www.crunchbase.com/organization/dcm",
      },
      {
        name: "DCVC",
        url: "https://www.crunchbase.com/organization/data-collective",
      },
      {
        name: "DMZ",
        url: "https://www.crunchbase.com/organization/digital-media-zone",
      },
      {
        name: "Dawn Capital",
        url: "https://www.crunchbase.com/organization/dawn-capital",
      },
      {
        name: "Dreamit Ventures",
        url: "https://www.crunchbase.com/organization/dreamit-ventures",
      },
      {
        name: "EIT Digital Accelerator",
        url: "https://www.crunchbase.com/organization/eit-digital-accelerator",
      },
      {
        name: "EPIC Ventures",
        url: "https://www.crunchbase.com/organization/epic-ventures",
      },
      {
        name: "EQT Ventures",
        url: "https://www.crunchbase.com/organization/eqtventures",
      },
      {
        name: "Earlybird Venture Capital",
        url: "https://www.crunchbase.com/organization/earlybird-venture-capital",
      },
      {
        name: "East Ventures",
        url: "https://www.crunchbase.com/organization/east-ventures",
      },
      {
        name: "Eight Roads Ventures",
        url: "https://www.crunchbase.com/organization/eight-roads-ventures",
      },
      {
        name: "Entrepreneur First",
        url: "https://www.crunchbase.com/organization/entrepreneur-first",
      },
      {
        name: "Entrepreneurs Roundtable",
        url: "https://www.crunchbase.com/organization/er-accelerator",
      },
      {
        name: "FJ Labs",
        url: "https://www.crunchbase.com/organization/fj-labs",
      },
      {
        name: "Felicis Ventures",
        url: "https://www.crunchbase.com/organization/felicis-ventures",
      },
      {
        name: "First Round Capital",
        url: "https://www.crunchbase.com/organization/first-round-capital",
      },
      {
        name: "Flat6Labs",
        url: "https://www.crunchbase.com/organization/flat6labs",
      },
      {
        name: "Floodgate",
        url: "https://www.crunchbase.com/organization/floodgate",
      },
      {
        name: "Flybridge",
        url: "https://www.crunchbase.com/organization/flybridge-capital",
      },
      {
        name: "Food Labs",
        url: "https://www.crunchbase.com/organization/atlantic-food-lab",
      },
      {
        name: "Forum Ventures",
        url: "https://www.crunchbase.com/organization/forumventures",
      },
      {
        name: "Foundation Capital",
        url: "https://www.crunchbase.com/organization/foundation-capital",
      },
      {
        name: "Founder Friendly Labs",
        url: "https://www.crunchbase.com/organization/ffl",
      },
      {
        name: "Founders Factory",
        url: "https://www.crunchbase.com/organization/founders-factory",
      },
      {
        name: "Founders Fund",
        url: "https://www.crunchbase.com/organization/founders-fund",
      },
      {
        name: "Foundry Group",
        url: "https://www.crunchbase.com/organization/foundry-group",
      },
    ],
  },
  {
    from: "G-K",
    organisations: [
      {
        name: "GGV Capital",
        url: "https://www.crunchbase.com/organization/ggv-capital",
      },
      {
        name: "GV",
        url: "https://www.crunchbase.com/organization/google-ventures",
      },
      {
        name: "General Catalyst",
        url: "https://www.crunchbase.com/organization/general-catalyst-partners",
      },
      {
        name: "Global Brain Corporation",
        url: "https://www.crunchbase.com/organization/global-brain-corporation",
      },
      {
        name: "Global Founders Capital",
        url: "https://www.crunchbase.com/organization/global-founders-capital",
      },
      {
        name: "Goldman Sachs",
        url: "https://www.crunchbase.com/organization/goldman-sachs",
      },
      {
        name: "Gradient Ventures",
        url: "https://www.crunchbase.com/organization/gradient-ventures",
      },
      {
        name: "Greycroft",
        url: "https://www.crunchbase.com/organization/greycroft",
      },
      {
        name: "Greylock",
        url: "https://www.crunchbase.com/organization/greylock",
      },
      {
        name: "HAX",
        url: "https://www.crunchbase.com/organization/hax-accelerator",
      },
      {
        name: "HV Capital",
        url: "https://www.crunchbase.com/organization/holtzbrinck-ventures",
      },
      {
        name: "Headline",
        url: "https://www.crunchbase.com/organization/headlinevc",
      },
      {
        name: "High-Tech Grunderfonds",
        url: "https://www.crunchbase.com/organization/high-tech-gründerfonds",
      },
      {
        name: "Highland Capital Partners",
        url: "https://www.crunchbase.com/organization/highland-capital-partners",
      },
      {
        name: "Hiventures",
        url: "https://www.crunchbase.com/organization/hiventures",
      },
      {
        name: "IVP",
        url: "https://www.crunchbase.com/organization/institutional-venture-partners",
      },
      {
        name: "Index Ventures",
        url: "https://www.crunchbase.com/organization/index-ventures",
      },
      {
        name: "IndieBio",
        url: "https://www.crunchbase.com/organization/synbio-axlr8r",
      },
      {
        name: "Initialized Capital",
        url: "https://www.crunchbase.com/organization/initialized-capital",
      },
      {
        name: "Innovate UK",
        url: "https://www.crunchbase.com/organization/innovate-u-k-",
      },
      {
        name: "Innovation Works",
        url: "https://www.crunchbase.com/organization/innovation-works",
      },
      {
        name: "Insight Partners",
        url: "https://www.crunchbase.com/organization/insight-partners",
      },
      {
        name: "Intel Capital",
        url: "https://www.crunchbase.com/organization/intel-capital",
      },
      {
        name: "InterWest Partners",
        url: "https://www.crunchbase.com/organization/interwest-partners",
      },
      {
        name: "IIDF",
        url: "https://www.crunchbase.com/organization/internet-initiatives-develompent-fund-iidf",
      },
      {
        name: "JumpStart",
        url: "https://www.crunchbase.com/organization/jumpstartinc",
      },
      {
        name: "Khosla Ventures",
        url: "https://www.crunchbase.com/organization/khosla-ventures",
      },
      {
        name: "Kinnevik AB",
        url: "https://www.crunchbase.com/organization/investment-ab-kinnevik",
      },
      {
        name: "Kleiner Perkins",
        url: "https://www.crunchbase.com/organization/kleiner-perkins-caufield-byers",
      },
    ],
  },
  {
    from: "L-P",
    organisations: [
      {
        name: "Lanzadera Accelerator",
        url: "https://www.crunchbase.com/organization/lanzadera-accelerator",
      },
      {
        name: "Lerer Hippeau",
        url: "https://www.crunchbase.com/organization/lerer-ventures",
      },
      {
        name: "Lightspeed Venture Partners",
        url: "https://www.crunchbase.com/organization/lightspeed-venture-partners",
      },
      {
        name: "Madrona Venture Group",
        url: "https://www.crunchbase.com/organization/madrona-venture-group",
      },
      {
        name: "Main Sequence",
        url: "https://www.crunchbase.com/organization/main-sequence-ventures",
      },
      {
        name: "MassChallenge",
        url: "https://www.crunchbase.com/organization/masschallenge",
      },
      {
        name: "Matrix Partners",
        url: "https://www.crunchbase.com/organization/matrix-partners",
      },
      {
        name: "Matrix Partners China",
        url: "https://www.crunchbase.com/organization/matrix-partners-china",
      },
      {
        name: "Mayfield Fund",
        url: "https://www.crunchbase.com/organization/mayfield-fund",
      },
      {
        name: "MedTech Innovator",
        url: "https://www.crunchbase.com/organization/medtechinnovator",
      },
      {
        name: "Menlo Ventures",
        url: "https://www.crunchbase.com/organization/menlo-ventures",
      },
      {
        name: "Meritech Capital Partners",
        url: "https://www.crunchbase.com/organization/meritech-capital-partners",
      },
      {
        name: "Microsoft Accelerator",
        url: "https://www.crunchbase.com/organization/microsoft-ventures",
      },
      {
        name: "Microsoft Accelerator Beijing",
        url: "https://www.crunchbase.com/organization/microsoft-ventures-accelerator-beijing-2",
      },
      {
        name: "Mitsubishi UFJ Capital",
        url: "https://www.crunchbase.com/organization/mitsubishi-ufj-capital",
      },
      {
        name: "Morgenthaler Ventures",
        url: "https://www.crunchbase.com/organization/morgenthaler-ventures",
      },
      {
        name: "Mucker Capital",
        url: "https://www.crunchbase.com/organization/muckercapital",
      },
      {
        name: "NEXT Canada",
        url: "https://www.crunchbase.com/organization/the-next-36",
      },
      {
        name: "New Enterprise Associates",
        url: "https://www.crunchbase.com/organization/new-enterprise-associates",
      },
      {
        name: "New Forge",
        url: "https://www.crunchbase.com/organization/new-forge",
      },
      {
        name: "Newchip",
        url: "https://www.crunchbase.com/organization/newchip",
      },
      {
        name: "North Bridge Venture",
        url: "https://www.crunchbase.com/organization/north-bridge-venture-partners",
      },
      {
        name: "Northstar Ventures",
        url: "https://www.crunchbase.com/organization/northstar-ventures",
      },
      {
        name: "Norwest Venture Partners",
        url: "https://www.crunchbase.com/organization/norwest-venture-partners",
      },
      {
        name: "Oak Investment Partners",
        url: "https://www.crunchbase.com/organization/oak-investment-partners",
      },
      {
        name: "OpenView",
        url: "https://www.crunchbase.com/organization/openview-venture-partners",
      },
      {
        name: "Partech",
        url: "https://www.crunchbase.com/organization/partech",
      },
      {
        name: "Plug and Play Tech Center",
        url: "https://www.crunchbase.com/organization/plug-and-play-ventures",
      },
      {
        name: "Point Nine",
        url: "https://www.crunchbase.com/organization/point-nine-capital",
      },
      {
        name: "Polaris Partners",
        url: "https://www.crunchbase.com/organization/polaris-partners",
      },
      {
        name: "Project A Ventures",
        url: "https://www.crunchbase.com/organization/project-a-ventures",
      },
    ],
  },
  {
    from: "Q-U",
    organisations: [
      {
        name: "Qiming Venture Partners",
        url: "https://www.crunchbase.com/organization/qiming-venture-partners",
      },
      {
        name: "Quake Capital Partners",
        url: "https://www.crunchbase.com/organization/quake-capital-partners",
      },
      {
        name: "RRE Ventures",
        url: "https://www.crunchbase.com/organization/rre-ventures",
      },
      {
        name: "Redpoint",
        url: "https://www.crunchbase.com/organization/redpoint-ventures",
      },
      {
        name: "Rise of the Rest",
        url: "https://www.crunchbase.com/organization/rise-of-the-rest",
      },
      {
        name: "Rockstart",
        url: "https://www.crunchbase.com/organization/rockstart-accelerator",
      },
      {
        name: "SAP.iO",
        url: "https://www.crunchbase.com/organization/sap-io",
      },
      {
        name: "SMBC Venture Capital",
        url: "https://www.crunchbase.com/organization/smbc-venture-capital",
      },
      {
        name: "SOSV",
        url: "https://www.crunchbase.com/organization/sosv",
      },
      {
        name: "Seedcamp",
        url: "https://www.crunchbase.com/organization/seedcamp",
      },
      {
        name: "Sequoia Capital",
        url: "https://www.crunchbase.com/organization/sequoia-capital",
      },
      {
        name: "Shasta Ventures",
        url: "https://www.crunchbase.com/organization/shasta-ventures",
      },
      {
        name: "Shenzhen Capital Group",
        url: "https://www.crunchbase.com/organization/shenzhen-capital-group",
      },
      {
        name: "Sierra Ventures",
        url: "https://www.crunchbase.com/organization/sierra-ventures",
      },
      {
        name: "Sigma Partners",
        url: "https://www.crunchbase.com/organization/sigma-partners",
      },
      {
        name: "Social Capital",
        url: "https://www.crunchbase.com/organization/social-capital",
      },
      {
        name: "Social Starts",
        url: "https://www.crunchbase.com/organization/social-starts",
      },
      {
        name: "Spark Capital",
        url: "https://www.crunchbase.com/organization/spark-capital",
      },
      {
        name: "SparkLabs Accelerator",
        url: "https://www.crunchbase.com/organization/sparklabs-accelerator",
      },
      {
        name: "Speedinvest",
        url: "https://www.crunchbase.com/organization/speedinvest",
      },
      {
        name: "Start-Up Chile",
        url: "https://www.crunchbase.com/organization/start-up-chile",
      },
      {
        name: "StartX (Stanford-StartX Fund)",
        url: "https://www.crunchbase.com/organization/stanfordstartx-fund",
      },
      {
        name: "Startup Wise Guys",
        url: "https://www.crunchbase.com/organization/startup-wise-guys",
      },
      {
        name: "Startupbootcamp",
        url: "https://www.crunchbase.com/organization/startupbootcamp",
      },
      {
        name: "Starve Ups",
        url: "https://www.crunchbase.com/organization/starve-ups",
      },
      {
        name: "Summit Partners",
        url: "https://www.crunchbase.com/organization/summit-partners",
      },
      {
        name: "Target Global",
        url: "https://www.crunchbase.com/organization/target-ventures",
      },
      {
        name: "Target Partners",
        url: "https://www.crunchbase.com/organization/target-partners",
      },
      {
        name: "Technology Development Fund",
        url: "https://www.crunchbase.com/organization/technologydevelopmentfund",
      },
      {
        name: "Techstars",
        url: "https://www.crunchbase.com/organization/techstars",
      },
      {
        name: "Techstars Ventures",
        url: "https://www.crunchbase.com/organization/bullet-time-ventures",
      },
      {
        name: "Threshold",
        url: "https://www.crunchbase.com/organization/threshold",
      },
      {
        name: "Tiger Global Management",
        url: "https://www.crunchbase.com/organization/tiger-global",
      },
      {
        name: "Tribe Capital",
        url: "https://www.crunchbase.com/organization/tribe-capital",
      },
      {
        name: "Trinity Ventures",
        url: "https://www.crunchbase.com/organization/trinity-ventures",
      },
      {
        name: "True Ventures",
        url: "https://www.crunchbase.com/organization/true-ventures",
      },
      {
        name: "U.S. Venture Partners",
        url: "https://www.crunchbase.com/organization/us-venture-partners",
      },
      {
        name: "Uncork Capital",
        url: "https://www.crunchbase.com/organization/softtech-vc",
      },
      {
        name: "Union Square Ventures",
        url: "https://www.crunchbase.com/organization/union-square-ventures",
      },
      {
        name: "Upfront Ventures",
        url: "https://www.crunchbase.com/organization/upfront-ventures",
      },
    ],
  },
  {
    from: "V-Z",
    organisations: [
      {
        name: "Venrock",
        url: "https://www.crunchbase.com/organization/venrock",
      },
      {
        name: "Versant Ventures",
        url: "https://www.crunchbase.com/organization/versant-ventures",
      },
      {
        name: "Vertex Ventures",
        url: "https://www.crunchbase.com/organization/vertex-ventures",
      },
      {
        name: "Village Global",
        url: "https://www.crunchbase.com/organization/village-global-2",
      },
      {
        name: "Western Technology Investment",
        url: "https://www.crunchbase.com/organization/western-technology-investment",
      },
      {
        name: "Wilco",
        url: "https://www.crunchbase.com/organization/scientipole-initiative",
      },
      {
        name: "Y Combinator",
        url: "https://www.crunchbase.com/organization/y-combinator",
      },
      {
        name: "ZhenFund",
        url: "https://www.crunchbase.com/organization/zhenfund",
      },
    ],
  },
];
