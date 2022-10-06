export type MenuStatus = "soon" | "beta" | "alpha" | "Early Access";

export type MenuEntry = {
  title: string;
  path: string;
  isSectionHeader: boolean;
  status: MenuStatus;
  subMenu?: MenuEntry[];
};
