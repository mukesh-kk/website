import type { RequestHandler } from "@sveltejs/kit";
import fetch from "node-fetch";
import { generateHash } from "$lib/utils/analytics";
import type { AnalyticsPayload, PageProps } from "$lib/types/analytics";

const writeKey = process.env.SEGMENT_KEY || "";

export const post: RequestHandler = async ({ request }) => {
  const body = (await request.json()) as AnalyticsPayload;
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0];
  if (!ip) {
    return {
      body: { message: "no x-forwarded-for header provided" },
      status: 400,
    };
  }
  const agent = request.headers.get("user-agent") || "";

  const date = new Date();
  const today = `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`;

  const toHashString = ip + agent + today;

  const hash = await generateHash(toHashString);

  const maskIp = (ip: string) => {
    const octets = ip.split(".");
    return octets?.length == 4
      ? octets.slice(0, 3).concat(["0"]).join(".")
      : undefined;
  };

  const getServerContext = () => {
    return {
      userAgent: agent,
      ip: maskIp(ip),
    };
  };

  if (!writeKey) {
    return { body: { message: "no token in environment" }, status: 200 };
  }
  try {
    const basicAuthHeader = `${writeKey}:`;
    const authHeader = Buffer.from(basicAuthHeader).toString("base64");
    const [trackingMethod, anonymousId] = body.cookieId
      ? ["cookie", body.cookieId]
      : ["cookieless", hash];
    switch (body.type) {
      case "event":
        if (!body.eventName)
          return { body: { message: "Please provide eventName" }, status: 400 };
        await fetch("https://api.segment.io/v1/track", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Basic ${authHeader}`,
          },
          body: JSON.stringify({
            anonymousId: anonymousId,
            event: body.eventName,
            properties: body.props,
            context: {
              ...body.context,
              ...getServerContext(),
              trackingMethod: trackingMethod,
              cookielessId: hash,
            },
            sentAt: new Date().toISOString(),
          }),
        });

        break;
      case "identity":
        if (!body.traits)
          return { body: { message: "Please provide traits" }, status: 400 };
        await fetch("https://api.segment.io/v1/identify", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Basic ${authHeader}`,
          },
          body: JSON.stringify({
            anonymousId: anonymousId,
            traits: body.traits,
            context: {
              ...body.context,
              ...getServerContext(),
              trackingMethod: trackingMethod,
              cookielessId: hash,
            },
            sentAt: new Date().toISOString(),
          }),
        });

        break;
      case "page":
        if (!body.props.url || !body.props.path)
          return {
            body: { message: "Please include url and path in props" },
            status: 400,
          };
        await fetch("https://api.segment.io/v1/page", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Basic ${authHeader}`,
          },
          body: JSON.stringify({
            anonymousId: anonymousId,
            properties: body.props as PageProps,
            context: {
              ...body.context,
              ...getServerContext(),
              trackingMethod: trackingMethod,
              cookielessId: hash,
            },
            sentAt: new Date().toISOString(),
          }),
        });
        break;
      default:
        return { body: { message: "please provide valid type" }, status: 400 };
    }

    return { body: { message: "success" }, status: 200 };
  } catch (e) {
    console.log(e);
    return { body: { message: `failed` }, status: 500 };
  }
};
