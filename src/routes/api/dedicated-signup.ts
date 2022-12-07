import type { RequestHandler } from "@sveltejs/kit";
import saveToSpreadsheet from "$lib/api/save-to-spreadsheet";

const map = {
  "dedicated-signup": "Gitpod Dedicated Signups",
};

export const post: RequestHandler = async ({ request }) => {
  try {
    const body = await request.json();
    console.log(body);
    if (
      !body.payload.email ||
      !body.type ||
      !body.payload.name ||
      !body.payload.company ||
      !body.payload.noOfEngineers ||
      !body.payload.cloudInfrastructure ||
      !body.payload.gitProvider
    ) {
      return { status: 400 };
    }

    const isSavedInSheet = await saveToSpreadsheet({
      sheetTitle: map[body.type],
      data: [new Date(), ...Object.values(body.payload)],
      uniqueColumn: 2,
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
