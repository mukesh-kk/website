export type ContentCard = {
  title: string;
  text: string;
  badge: ContentBadge;
  link?: { text: string; href: string };
  contributor: string;
};

export type ContentBadge =
  | "Content"
  | "Community office hours"
  | "Discord contribution"
  | "Open Source";
