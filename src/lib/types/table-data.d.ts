import type { Details } from "./details";
import type { Image } from "./image";

export type TableData = {
  title: string;
  subtitle?: string;
  image?: Image;
  details: Details;
  link?: {
    href: string;
    text: string;
  };
};
