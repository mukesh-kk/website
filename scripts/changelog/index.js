import { main } from "./changelog.js";
import { outputResults } from "./lib/cli.js";

import minimist from "minimist";

const argv = minimist(process.argv.slice(2));

(async () => {
  const { releaseDate, content } = await main();
  const { dryRun, onlyPrs, force } = argv;

  outputResults(releaseDate, content, { force, dryRun, onlyPrs });
})();
