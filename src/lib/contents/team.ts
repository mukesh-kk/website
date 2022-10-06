import type { Card } from "$lib/types/card";
import type { FeatureTitle } from "$lib/types/feature-title";
import type { Image } from "$lib/types/image";

export const teamImages: Image[] = [
  {
    src: "/images/about/3-2x.png",
    alt: "Gitpod team members taking a selfie.",
  },
  {
    src: "/images/about/1.png",
    alt: "Gitpod team members taking a selfie.",
  },
  {
    src: "/images/about/9.png",
    alt: "Gitpod team members with surfing boards.",
  },
  {
    src: "/images/about/10.png",
    alt: "Gitpod team members in a hackathon on the website",
  },
  {
    src: "/images/about/2.png",
    alt: "Gitpod team members sitting near the sea.",
  },
  {
    src: "/images/about/8.png",
    alt: "Gitpod team members on eating table.",
  },
  {
    src: "/images/about/11.png",
    alt: "A Gitpod team member waving and smiling.",
  },
  {
    src: "/images/about/12.png",
    alt: "Gitpod team members participating in a hackathon",
  },
  {
    src: "/images/about/13.png",
    alt: "Gitpod team members standing in a group on stairs",
  },
];

export const featureTitles: FeatureTitle[] = [
  {
    main: "More than",
    sub: "60",
    third: "remote team members",
  },
  {
    main: "From",
    sub: "23",
    third: "countries",
  },
  {
    main: "Distributed across",
    sub: "13",
    third: "time zones",
  },
  {
    main: "From",
    sub: "4",
    third: "continents",
  },
];

export const coreValues: Card[] = [
  {
    title: "We, not me",
    text: "We show up for the team, not for ourselves. We trust and empower each other. We make heroes and unblock others.",
    icon: {
      src: "/images/team/we.png",
      alt: "We",
    },
  },
  {
    title: "Integrate, don’t dictate",
    text: "We are humble and kind. We first seek to understand, then be understood – with products and people around us.",
    icon: {
      src: "/images/team/integrate.png",
      alt: "Integrate",
    },
  },
  {
    title: "Students of the game",
    text: "We build and learn in the open – always with curiosity. We invest in our personal and professional development.",
    icon: {
      src: "/images/team/students.png",
      alt: "Students of the game",
    },
  },
  {
    title: "Ship skateboards",
    text: "We tackle hard problems with simple solutions that delight. We commit and ship the minimal viable change, then iterate quickly.",
    icon: {
      src: "/images/team/skateboard.png",
      alt: "Skateboard",
    },
  },
];

export const photos: Image[] = [
  {
    src: "/images/team/life-1.png",
    alt: "Co-working with other Gitpodders while travelling is always a highlight.",
  },
  {
    src: "/images/team/life-7.png",
    alt: "At the company’s offsites we regularly get to meet everyone.",
  },
  {
    src: "/images/team/life-3.png",
    alt: "We love working from the cafès in our neighbourhood.",
  },
  {
    src: "/images/team/life-2.png",
    alt: "Working from outdoors.",
  },
  {
    src: "/images/team/life-4.png",
    alt: "At our weekly all-hands we keep the whole team aligned.",
  },
  {
    src: "/images/team/life-5.png",
    alt: "Attending conferences and meetups is always fun.",
  },
  {
    src: "/images/team/life-6.png",
    alt: "We are in good company.",
  },
  {
    src: "/images/team/life-8.png",
    alt: "Our wellness stipend keeps us active.",
  },
  {
    src: "/images/team/life-9.png",
    alt: "We get to have the best SWAG.",
  },
];
