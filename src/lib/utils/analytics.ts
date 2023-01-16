import crypto from "node:crypto";
import type { AnalyticsPayload, PageProps } from "../types/analytics";

declare global {
  interface Window {
    prevPages?: string[];
  }
}

export const generateHash = async (value: string) => {
  const hash = crypto.createHash("sha512").update(value).digest("hex");
  return hash;
};
