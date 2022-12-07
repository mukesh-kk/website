import { defineConfig } from "cypress";

export default defineConfig({
  defaultCommandTimeout: 100000,
  e2e: {
    baseUrl: "http://localhost:3000",
    supportFile: "cypress/support/index.js",
  },
});
