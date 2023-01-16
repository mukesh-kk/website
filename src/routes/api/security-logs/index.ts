import type { RequestHandler } from "@sveltejs/kit";

export const get: RequestHandler = async () => {
  const securityLogs = await Promise.all(
    Object.entries(import.meta.glob("/src/lib/contents/security/*.md")).map(
      async ([, mod]) => {
        const { default: content, metadata } = await mod();
        return {
          ...metadata,
          content: content.render().html,
        };
      }
    )
  );
  securityLogs.sort((a, b) => Date.parse(b.date) - Date.parse(a.date));
  return {
    body: securityLogs,
    status: 200,
  };
};
