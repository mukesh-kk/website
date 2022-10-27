import fs from "fs";
import minimist from "minimist";

import { main } from "./changelog.js";
import { outputResults, getDefaultThumbnailImage } from "./lib/cli.js";
import { changelogPath } from "./lib/config.js";
import { getMonthName } from "./lib/dates.js";

const argv = minimist(process.argv.slice(2));

(async () => {
  const { releaseDate, content } = await main();
  const { dryRun, onlyPrs, force } = argv;

  outputResults(releaseDate, content, { force, dryRun, onlyPrs });

  // Check if the changelog image does not already exist, and if not, create it
  const imagePath = `./static/images/changelog/${releaseDate}.jpg`;
  if (!fs.existsSync(imagePath)) {
    // Generate the changelog image
    const month = getMonthName(new Date().getUTCMonth() + 1);
    const image = await getDefaultThumbnailImage(month, releaseDate);
    await fs.promises.writeFile(imagePath, image, "binary");
  }

  const metadataFile = `${changelogPath}/${releaseDate}/meta.json`;
  if (!fs.existsSync(metadataFile)) {
    const metadata = {
      versions: {
        ides: {
          vscode: {
            version: "",
          },
          jetbrains: {
            version: "",
          },
        },
      },
    };
    await fs.promises.writeFile(metadataFile, JSON.stringify(metadata));
  }
})();
