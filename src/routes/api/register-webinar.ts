import type { RequestHandler } from "@sveltejs/kit";

import saveToSpreadsheet from "$lib/api/save-to-spreadsheet";

const signupTypeToSheetTitle = {
  "java-panel-discussion": "Java Panel Discussion Registrations",
  "getting-started-with-nuaware":
    "Getting started with Gitpod Nuaware registrations",
};

export const post: RequestHandler = async ({ request }) => {
  try {
    const body = await request.json();

    if (!body.email || !body.type || !body.name || !body.company) {
      return { status: 400 };
    }

    const isSavedInSheet = await saveToSpreadsheet({
      sheetTitle: signupTypeToSheetTitle[body.type],
      data: [new Date(), body.name, body.email, body.company],
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
