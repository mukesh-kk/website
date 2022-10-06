import type { FeatureTitle } from "$lib/types/feature-title";
import type { Image } from "$lib/types/image";

export const featureTitles: FeatureTitle[] = [
  {
    main: "Officially founded in",
    sub: "2020",
  },
  {
    main: "A welcoming community of",
    sub: "+5k",
  },
  {
    main: "A devoted team of",
    sub: "+60",
  },
  {
    main: "A user base of",
    sub: "+500k",
  },
];

export const imagesTop: Image[] = [
  {
    src: "/images/about/3.png",
    alt: "Gitpod team members taking a selfie.",
  },
  {
    src: "/images/about/2.png",
    alt: "Gitpod team members sitting near the sea.",
  },
  {
    src: "/images/about/1.png",
    alt: "Gitpod team memebers smiling.",
  },
  {
    src: "/images/about/4.png",
    alt: "A Gitpod team member skateboarding.",
  },
];

export const imagesBottom: Image[] = [
  {
    src: "/images/about/5.png",
    alt: "Gitpod team members clapping.",
  },
  {
    src: "/images/about/6.jpg",
    alt: "Gitpod team with skateboards.",
  },
  {
    src: "/images/about/7.png",
    alt: "Gitpod team on stairs for a group photo.",
  },
  {
    src: "/images/about/8.png",
    alt: "Gitpod team members on eating table.",
  },
];

export const newsArticles: {
  href: string;
  img: Image;
}[] = [
  {
    href: "https://www.theregister.com/2020/08/25/gitpod_open_sources_cloud_development_platform/",
    img: {
      src: "/svg/about/the-register.svg",
      alt: "The Register",
    },
  },
  {
    href: "https://www.infoq.com/articles/cloud-based-development/",
    img: {
      src: "/svg/about/info-q.svg",
      alt: "Info Q",
    },
  },
  {
    href: "https://devops.com/gitpod-open-sources-automated-local-development-environment/",
    img: {
      src: "/svg/about/dev-ops.svg",
      alt: "DevOps.com",
    },
  },
  {
    href: "https://thenewstack.io/gitpod-brings-automated-environments-to-jetbrains-ides/",
    img: {
      src: "/svg/about/the-new-stack.svg",
      alt: "The New Stack",
    },
  },
  {
    href: "https://sdtimes.com/softwaredev/jetbrains-announces-partnership-with-gitpod/",
    img: {
      src: "/svg/about/sd-times.svg",
      alt: "SD Times",
    },
  },
  {
    href: "https://www.heise.de/news/Visual-Studio-Code-im-Browser-Gitpod-veroeffentlicht-OpenVSCode-Server-6201891.html",
    img: {
      src: "/svg/about/heise-online.svg",
      alt: "Heise Online",
    },
  },
  {
    href: "https://devclass.com/2022/04/28/gitpod-and-jetbrains-integrate-to-strengthen-remote-development-offering/",
    img: {
      src: "/svg/about/dev-class.svg",
      alt: "DEV CLASS",
    },
  },
  {
    href: "https://www.golem.de/news/visual-studio-code-im-web-mit-gitpod-ein-gewinn-fuer-jede-tool-sammlung-2207-166061.html",
    img: {
      src: "/svg/about/golem-de.svg",
      alt: "Golem DE",
    },
  },
];
