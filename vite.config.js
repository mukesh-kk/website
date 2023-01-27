import { sveltekit } from "@sveltejs/kit/vite";
import { execSync } from "node:child_process";

/**
 * @type {Partial<import("vite").ServerOptions>}
 */
let extendedViteServerOptions;
try {
  const port = 3000;

  const gitpodPortUrl = execSync(`gp url ${port}`).toString().trim();

  extendedViteServerOptions = {
    port,
    hmr: {
      protocol: "wss",
      host: new URL(gitpodPortUrl).hostname,
      clientPort: 443,
    },
  };
} catch {
  extendedViteServerOptions = {};
}

/**
 * @type {import("vite").UserConfig}
 */
const config = {
  plugins: [sveltekit()],
  resolve: {
    preserveSymlinks: true,
  },
  server: {
    fs: {
      allow: [".."],
    },
    ...extendedViteServerOptions,
  },
};

export default config;
