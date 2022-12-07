export type DocsMeta = {
  section: string;
  title: string;
  isIndex: boolean;
  headings?: MarkdownHeader[];
};
export type MarkdownHeader = {
  title: string;
  slug: string;
  level: number;
  children: MarkdownHeader[];
};
