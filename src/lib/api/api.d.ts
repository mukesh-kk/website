export declare interface Email {
  to?: {
    email: string;
    name?: string;
  };
  toType?: EmailToType;
  from?: {
    email: string;
    name?: string;
  };
  replyTo?: {
    email: string;
    name?: string;
  };
  subject?: string;
  message?: string;
  feedback?: string;
  otherFeedback?: string;
  data?: {
    [key: string]: string;
  };
}

export declare interface SignupData {
  type: "newsletter" | "ambassador program" | "blog-email";
  email: string;
}

export declare interface Feedback {
  emotion: number;
  note?: string;
  url: string;
  email?: string;
  type: "docs" | "guides";
}

export declare interface ExtensionFeedback {
  browser: string;
  feedback: string;
  note?: string;
}

export type EmailToType = "contact" | "sales" | "community-license" | string;
