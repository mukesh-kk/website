import { readable } from "svelte/store";
import type { MenuEntry } from "../types/menu-entry";

export const isEurope = () => {
  const offset = new Date().getTimezoneOffset();
  return offset <= 0 && offset >= -180;
};

export const stringToBeautifiedFragment = (str: string = "") =>
  (str || "")
    .toLocaleLowerCase()
    .replace(/\s/g, "-")
    .replace(/\?/g, "")
    .replace(/,/g, "");

export const showHideOverflowY = (bool: boolean) => {
  const html = document.querySelector("html");
  if (bool) {
    html.classList.add("overflow-y-hidden");
  } else {
    html.classList.remove("overflow-y-hidden");
  }
};

export const formatDate = (date) =>
  new Date(Date.parse(date)).toLocaleDateString(undefined, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

export const scrollToElement = async (
  element: HTMLElement,
  selector: string
) => {
  const firstElement: HTMLElement = element.querySelector(selector);
  if (!firstElement) {
    return;
  }
  firstElement.scrollIntoView({
    behavior: "smooth",
  });
};
export const isAnExternalLink = (href: string) => href.startsWith("http");

export const isMac = () =>
  navigator.userAgent.includes("Macintosh") ||
  navigator.userAgent.includes("iPad");

export const removeTrailingSlash = (site: string) => {
  return site.replace(/\/$/, "");
};

export const sanitizeSelfHosted = (testString: string) => {
  return /self-hosted\/\d\.\d\.\d/.test(testString)
    ? testString.replace(/\d\.\d\.\d/, "latest")
    : testString;
};

export const useMediaQuery = (mediaQueryString: string) => {
  const matches = readable<boolean>(null, (set) => {
    if (typeof globalThis["window"] === "undefined") return;

    const match = window.matchMedia(mediaQueryString);
    set(match.matches);
    const element = (event: MediaQueryListEvent) => set(event.matches);
    match.addEventListener("change", element);
    return () => {
      match.removeEventListener("change", element);
    };
  });
  return matches;
};

export const scrollIntoView = (selector: string) => {
  const scrollToElement = document.querySelector(selector);

  if (!scrollToElement) return;

  const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

  scrollToElement.scrollIntoView({
    block: "nearest",
    inline: "start",
    behavior: mediaQuery.matches ? "auto" : "smooth",
  });
};
export const getVariantFromStatus = (status: string) => {
  if (status === "soon" || status === "Early Access") {
    return "pink";
  } else {
    return "orange";
  }
};

export const isLongDocsMenuEntry = (entry: MenuEntry) => {
  return entry && entry.status && entry.status.split(" ").length > 1;
};
