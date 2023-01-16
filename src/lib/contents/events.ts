import type { Card } from "../types/card";

export const webinars = [
  {
    image: "/images/events/remote-dev-webinar.jpg",
    alt: "banner for remote development workshop that takes 60 min",
    text: "A hands on conversation about remote development using Gitpod. We will talk about how to get started and cover some best practices. You will be able to follow along with a example repository and your own Gitpod account.",
    href: "/webinars/getting-started-with-nuaware",
    isInPast: true,
  },
  {
    image: "/images/events/java-panel-discussion.jpg",
    alt: "banner for a pannel discussion around java that takes 60 min",
    text: "Open conversation about Java remote development covering best practices. What does not work well yet, and what had to click to make it work.",
    href: "/webinars/java-panel-discussion",
    isInPast: true,
  },
  {
    image: "/images/events/intellij-webinar.jpg",
    alt: "banner for IntelliJ Webinar that takes 60 min",
    text: "Curious how the biggest tech companies are using remote development to speed up their development cycles? We’ll explore using Gitpod to enable Java development in the cloud with your local IntelliJ IDEA.",
    href: "/webinars/java-remote-development",
    isInPast: true,
  },
];

export const highlights: Card[] = [
  {
    text: "Learn why Backstage was developed at Spotify, how it became the core of their developer experience, and eventually a CNCF project.",
    title:
      "How Spotify engineers use Backstage daily and keep their lives simple",
    link: {
      href: "https://www.youtube.com/watch?v=YswvyxUQvPw",
      text: "Watch on Youtube",
    },
  },
  {
    text: "Join Kirill Skrygan, Christian Weichel, Nik Molnar, Christof Marti and Johannes Landgraf for a discussion on remote development.",
    title: "Remote development panel",
    link: {
      href: "https://www.youtube.com/watch?v=tWZ6VunABws",
      text: "Watch on Youtube",
    },
  },
  {
    text: "DevX has been an emerging concept for the past two years, and while we are still trying to give it a shared and structured definition in the tech industry, some common questions are already arising, and the most compelling one is: where to start with developer experience?",
    title: "Building DevX teams, my story",
    link: {
      href: "https://www.youtube.com/watch?v=xX5zeVy8Ta4",
      text: "Watch on Youtube",
    },
  },
];

export const conferences: {
  text: string;
  buttonText?: string;
  img: string;
  imgDark?: string;
  href?: string;
  alt: string;
  year: string;
}[] = [
  {
    imgDark: "/images/events/kubecon-logo-dark.png",
    img: "/images/events/kubecon-logo.png",
    text: "The CNCF's flagship conference in North America, October 2022.",
    alt: "Kubecon NA 2022 Logo",
    buttonText: "More on KubeCon NA 22",
    href: "/events/kubecon-detroit",
    year: "2022",
  },
  {
    imgDark: "/images/events/devoxx-2022-dark.svg",
    img: "/images/events/devoxx-2022.svg",
    text: "The biggest vendor-independent Java conference in the world, hosted in Antwerp, Belgium.",
    alt: "Devoxx 2022 Logo",
    year: "2022",
  },
  {
    imgDark: "/images/events/kubecon-eu-2022.svg",
    img: "/images/events/kubecon-eu-2022.svg",
    text: "The CNCF's flagship conference in Europe, May 2022.",
    alt: "KubeCon EU 22 Logo",
    year: "2022",
  },
  {
    imgDark: "/images/events/devx-conf-dark.svg",
    img: "/images/events/devx-conf.svg",
    text: "A space for creators to talk about developer experience tools, tech, and workflows.",
    alt: "DevX Conf Logo",
    buttonText: "Go to devxconf.org",
    href: "https://devxconf.org/",
    year: "2022",
  },
  {
    imgDark: "/images/events/devx-conf-dark.svg",
    img: "/images/events/devx-conf.svg",
    text: "The first annual DevX Conf, virtually hosted by Gitpod.",
    alt: "DevX Conf Logo",
    buttonText: "Go to devxconf.org",
    href: "https://devxconf.org/2021/stage/a",
    year: "2021",
  },
];
