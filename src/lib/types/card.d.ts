export type Card = {
  icon?:
    | {
        src: string;
        alt?: string;
      }
    | any;
  transform?: string;
  title?: string;
  text: string;
  link?: {
    href: string;
    text: string;
    [key: string]: any;
  };
  modal?: {
    btnText: string;
    modalContentComponent: any;
  };
};
