import type { RequestHandler } from "@sveltejs/kit";
import * as client from "@sendgrid/mail";
import save from "$lib/api/save-to-spreadsheet";
import importToFront from "$lib/api/import-message-to-front";
import type { Email, EmailToType } from "$lib/api/api";

const determineToEmail = (toType: EmailToType = "contact") => {
  switch (toType) {
    case "contact":
      return process.env.SENDGRID_TO_EMAIL_CONTACT;
    case "support":
      return process.env.FRONT_SUPPORT_INBOX_ID;
    case "sales":
      return process.env.SENDGRID_TO_EMAIL_SALES;
    case "community-license":
      return process.env.SENDGRID_TO_EMAIL_SALES;
    default:
      return "contact-test@gitpod.io";
  }
};

async function sendEmail(
  client: client.MailService,
  email: Email
): Promise<{ statusCode: number; body?: string }> {
  const data: client.MailDataRequired = {
    from: email.from || "",
    subject: email.subject,
    to: [email.to!],
    replyTo: email.replyTo,
    content: [
      {
        type: "text/plain",
        value: `${
          email.message
            ? email.message
            : `${email.feedback}\n${email.otherFeedback}`
        }`,
      },
    ],
    trackingSettings: {
      clickTracking: {
        enable: false,
        enableText: false,
      },
      openTracking: {
        enable: false,
      },
    },
  };
  try {
    await client.send(data);
    return {
      statusCode: 200,
      body: JSON.stringify(email) + " added",
    };
  } catch (e) {
    return {
      statusCode: 500,
      body: `Error : ${JSON.stringify(e)}`,
    };
  }
}

async function saveToSheet(
  sheetTitle: string,
  data: any,
  type?: "signup" | "webinar-registeration"
) {
  const isSaved = await save({
    sheetTitle,
    data,
    type,
  });

  if (isSaved === "duplicate") {
    return {
      statusCode: 409,
      body: "duplicate",
    };
  } else {
    return {
      statusCode: isSaved ? 200 : 500,
      body: JSON.stringify(data) + " added",
    };
  }
}

async function importMessageToFront(
  data: any,
) {

  const from = data.email.from;
  const name = data.email.name;
  const message = data.email.message;

  const isImported = await importToFront({
    from,
    name,
    message
  });

  return {
    statusCode: 200
  }
}

export const post: RequestHandler = async ({ request }) => {
  const body = await request.json();
  const email: Email = body! as Email;
  const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY || "no-key";
  const SENDGRID_TO_EMAIL = determineToEmail(email.toType);
  const SENDGRID_FROM_EMAIL = SENDGRID_TO_EMAIL;
  const FRONT_API_TOKEN = process.env.FRONT_API_TOKEN;

  const sheetRes = {
    status: null,
    body: null,
  };
  const emailRes = {
    status: null,
    body: null,
  };
  const frontRes = {
    status: null,
    body: null,
  }
  const res = {
    status: null,
    body: null,
  };

  email.from = {
    email: SENDGRID_FROM_EMAIL,
    name: "Gitpod",
  };
  email.to = {
    email: SENDGRID_TO_EMAIL,
    name: "Gitpod",
  };

  const dontEmail =
    email.data && email.data.noOfEngineers !== undefined
      ? email.data.noOfEngineers === "1-10"
      : false;

  if (email.toType === "community-license") {
    const data = [
      new Date(),
      email.replyTo.name,
      email.replyTo.email,
      email.data.company,
      email.data.noOfEngineers,
      email.data.cloudInfrastructure,
      email.data.message,
    ];

    try {
      const saveResponse = await saveToSheet(
        "Free Self-Hosted Community License",
        data
      );

      sheetRes.status = saveResponse.statusCode;
      sheetRes.body = saveResponse.body;
    } catch (err) {
      console.error(err);
      sheetRes.status = 500;
      sheetRes.body = err;
    }
  } else if (email.toType === "webinar-registeration") {
    const data = [
      new Date(),
      email.data.name,
      email.data.email,
      email.data.company,
      email.data.jetbrainsConsent,
    ];

    try {
      const saveResponse = await saveToSheet(
        "Webinar registrations",
        data,
        "webinar-registeration"
      );
      sheetRes.status = saveResponse.statusCode;
      sheetRes.body = saveResponse.body;
    } catch (err) {
      console.error(err);
      sheetRes.status = 500;
      sheetRes.body = err;
    }
  } else if (email.toType === "support") {
    const data = [
      new Date(),
      email.data.name,
      email.data.email
    ];

    try {
      const importResponse = await importMessageToFront (
        data
      )
      frontRes.status = importResponse.statusCode;
      frontRes.body = importResponse.body;
    } catch (err) {
      console.error(err);
      frontRes.status = 500;
    }
  }

  if (!dontEmail && email.toType !== "webinar-registeration") {
    client.setApiKey(SENDGRID_API_KEY);
    const dontEmailResponse = await sendEmail(client, email);
    sheetRes.status = dontEmailResponse.statusCode;
    sheetRes.body = dontEmailResponse.body;
  }

  if (!dontEmail && email.toType === "community-license") {
    if (emailRes.status === 200 && sheetRes.status === 200) {
      res.status = 200;
      res.body = "both successful";
    } else if (emailRes.status === 500 && sheetRes.status === 200) {
      res.status = emailRes.status;
      res.body = emailRes.body;
    } else if (sheetRes.status === 500 && emailRes.status === 200) {
      res.status = sheetRes.status;
      res.body = sheetRes.body;
    } else {
      res.status === 500;
      res.body = emailRes.body;
    }
  } else if (!dontEmail && email.toType !== "webinar-registeration") {
    res.status = emailRes.status;
    res.body = emailRes.body;
  } else {
    res.status = sheetRes.status;
    res.body = sheetRes.body;
  }

  return res;
};
