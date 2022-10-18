import saveToSpreadsheet from "$lib/api/save-to-spreadsheet";
import type { Feedback } from "$lib/api/api";

const feedbackTypetoSheetTitle = {
  docs: "Docs - Raw Feedback",
  guides: "Guides - Raw Feedback",
  digests: "Digests - Raw Feedback",
};

const allowedEmotions = [1, 2, 3, 4];

export const submitFeedback = async (body: Feedback) => {
  if (!allowedEmotions.includes(body.emotion)) {
    return {
      statusCode: 400,
      body: "Please provide a valid emotion",
    };
  }
  const hasURLPrefix = ["http://", "https://"].some((value) =>
    body.url.startsWith(value)
  );
  if (!hasURLPrefix) {
    return {
      statusCode: 400,
      body: "Please provide valid URL",
    };
  }
  const isSavedInSheet = await saveToSpreadsheet({
    sheetTitle: feedbackTypetoSheetTitle[body.type],
    data: [new Date(), body.emotion, body.url, body.note, body.email],
  });
  const statusCode = isSavedInSheet ? 201 : 500;
  return {
    statusCode,
    body: statusCode === 201 ? "Feedback added" : "Oh no, something failed.",
  };
};
