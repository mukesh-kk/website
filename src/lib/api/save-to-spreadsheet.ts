import gs from "google-spreadsheet";

type SheetInfo = {
  sheetTitle: string;
  data: any[];
  uniqueColumn?: number;
};

export default async ({
  sheetTitle,
  data,
  uniqueColumn = 0,
}: SheetInfo): Promise<boolean | "duplicate"> => {
  try {
    const doc = new gs.GoogleSpreadsheet(process.env.FEEDBACK_SHEET_ID);
    await doc.useServiceAccountAuth({
      client_email: process.env.FEEDBACK_GOOGLE_SERVICE_ACCOUNT_EMAIL,
      private_key: Buffer.from(
        process.env.FEEDBACK_GOOGLE_PRIVATE_KEY_BASE64,
        "base64"
      ).toString("utf8"),
    });
    await doc.loadInfo();
    const sheet = doc.sheetsByTitle[sheetTitle];

    const uniqueKey = data[uniqueColumn];

    const rows = await sheet.getRows();
    const existingKeys: string[] = rows.map(
      (row) => row._rawData[uniqueColumn]
    );

    if (existingKeys.includes(uniqueKey)) {
      return "duplicate";
    }

    await sheet.addRow(data);

    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
};
