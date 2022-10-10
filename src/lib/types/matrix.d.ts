type Component = {
  name: string;
  availibility: "supported" | "not-supported" | "untested";
  limitations: string;
  policy: {
    text: string;
    description?: string;
  };
  supportedVersions: string;
};

export type Matrix = {
  name: string;
  relevance?: "everyone" | "self-hosted admins" | "users";
  components: Component[];
};
