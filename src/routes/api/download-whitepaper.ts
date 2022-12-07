import type { RequestHandler } from "@sveltejs/kit";
import saveToSpreadsheet from "$lib/api/save-to-spreadsheet";

const whitepaperMap = {
  "cde-whitepaper": "CDE Whitepaper Downloads",
};

export const post: RequestHandler = async ({ request }) => {
  try {
    const body = await request.json();

    if (!body.email || !body.type || !body.name || !body.company) {
      return { status: 400 };
    }

    const isSavedInSheet = await saveToSpreadsheet({
      sheetTitle: whitepaperMap[body.type],
      data: [new Date(), body.name, body.email, body.company],
    });

    if (isSavedInSheet === "duplicate") {
      return { status: 409 };
    }

    if (!isSavedInSheet) {
      throw new Error();
    }

    return {
      status: 201,
      body: "Signed up",
    };
  } catch (error) {
    return {
      status: 500,
      body: "Oh no, something failed.",
    };
  }
};
