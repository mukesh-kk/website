export type Features = (string | { text: string; tooltip: string })[];

type Plan = {
  title: string;
  features?: Features;
};

export type Pricing = {
  title: string;
  price: string;
  duration?: string;
  features?: Features;
  btnText?: string;
  btnHref?: string;
  spiced?: boolean;
  learnMoreHref?: string;
  footnote?: string;
  trackingName?: string;
  plans?: Plan[];
};
