import type { Handler } from "@netlify/functions";
import fetch, { Response } from "node-fetch";

const handler: Handler = async (event) => {
  const { username, size = "54" } = event.queryStringParameters;
  const resLocation: Response = await fetch(
    `https://github.com/${username}.png`,
    { redirect: "manual" }
  );
  const res = await fetch(`${resLocation.headers.get("location")}&s=${size}`);
  const buffer = Buffer.from(await res.arrayBuffer()).toString("base64");
  return {
    statusCode: 200,
    body: buffer,
    isBase64Encoded: true,
    headers: {
      "Cache-Control": "public, max-age=604800",
      "Content-Type": res.headers.get("content-type"),
    },
  };
};

export { handler };
