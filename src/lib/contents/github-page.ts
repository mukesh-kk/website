import type { Pricing } from "$lib/types/pricing";
import { isEurope } from "$lib/utils/helpers";

export const ghStudentPricingPlans: Pricing[] = [
  {
    title: "Open Source",
    price: "Free",
    features: [
      "50 hours/month",
      "Private & Public Repos",
      "4 Parallel Workspaces",
      "30min Timeout",
    ],
    btnText: "Try now",
    btnHref: "https://gitpod.io/workspaces/",
  },
  {
    title: "Student",
    price: `<span class="crossed-out">${
      isEurope() ? "€8" : "$9"
    }</span> Free</>`,
    duration: "Per User/Month",
    features: ["All in Free", "100 hours/month", "Limited to 6 months"],
    btnText: "Claim Offer",
    btnHref: "https://gitpod.io/plans/",
    spiced: true,
  },
  {
    title: "Student Unlimited",
    price: `<span class="crossed-out">${isEurope() ? "€35" : "$39"}</span> ${
      isEurope() ? "€8" : "$9"
    }`,
    duration: "Per User/Month",
    features: [
      "All in personal plus",
      "16 Parallel Workspaces",
      "Team Manageable",
      "1h Timeout",
    ],
    btnText: "Buy Now",
    btnHref: "https://gitpod.io/plans/",
  },
];

export const ghTeacherPricingPlans: Pricing[] = [
  {
    title: "Open Source",
    price: "Free",
    features: [
      "50 hours/month",
      "Private & Public Repos",
      "4 Parallel Workspaces",
      "30min Timeout",
    ],
    btnText: "Try now",
    btnHref: "https://gitpod.io/workspaces/",
  },
  {
    title: "Teacher",
    price: `<span class="crossed-out">${isEurope() ? "€8" : "$9"}</span> Free`,
    duration: "100 hours/Month",
    features: ["All in Free", "100 hours/month", "Limited to 6 months"],
    btnText: "Claim Offer",
    btnHref: "https://gitpod.io/plans/",
    spiced: true,
  },
  {
    title: "Gitpod Education",
    price: `<span class="price-small">From</span> ${
      isEurope() ? "€0.75" : "$0.9"
    }`,
    footnote: "Only available for educational institutions",
  },
];
