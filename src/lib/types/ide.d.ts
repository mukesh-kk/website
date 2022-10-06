export type Ide = {
  name: string;
  label: string;
  availibility?: "soon" | "beta";
  screenshots?: {
    desktop: string;
    browser?: string;
  };
  icon: string;
};
