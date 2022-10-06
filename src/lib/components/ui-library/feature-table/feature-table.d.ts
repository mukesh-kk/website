export type FeatureTocItemType = "text" | "tooltip" | "image";

export type FeatureTocItem = {
  text: string;
  tooltip?: string;
  image?: FeatureImage | any;
};

export type FeatureItemDetail = {
  isHeadline?: boolean;
  term: string;
  list?: string[];
  text?: string;
  availability?: boolean;
};

export type FeatureTableHeader = {
  headline: string;
  subtitle?: string;
  isMostPopular?: boolean;
  image?: FeatureImage;
};

export type FeatureImage = {
  path: string;
  alt: string;
  height?: string;
};

export type FeatureTableColumnEntry = {
  users?: string;
  items?: FeatureItemDetail[];
};

export type FeatureTableColumn = {
  link?: {
    href: string;
    label: string;
  };
  isHighlighted?: boolean;
  header: FeatureTableHeader;
  enteries: FeatureTableColumnEntry[];
};

export type FeatureTableToc = {
  isHeadline?: boolean;
  headlineText?: string;
  type?: FeatureTocItemType;
  data?: FeatureTocItem;
};

export type FeatureTable = {
  toc: FeatureTableToc[];
  columns: FeatureTableColumn[];
};
