import saveToSpreadsheet from "$lib/api/save-to-spreadsheet";
import type { SignupData } from "./api";

const signupTypeToSheetTitle = {
  newsletter: "Newsletter - Signups",
  "ambassador program": "Ambassador program - Signups",
  "blog-email": "Gitpod OS - Signups",
};

export const signup = async (body: SignupData) => {
  console.log(body);
  const isSavedInSheet = await saveToSpreadsheet({
    sheetTitle: signupTypeToSheetTitle[body.type],
    data: [body.email],
  });

  let statusCode;

  if (isSavedInSheet === "duplicate") {
    statusCode = 409;
  } else if (isSavedInSheet) {
    statusCode = 201;
  } else {
    statusCode = 500;
  }

  return {
    statusCode,
    body: statusCode === 201 ? "Signed up" : "Oh no, something failed.",
  };
};
