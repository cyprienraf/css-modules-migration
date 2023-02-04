import fs from "fs";

import { getDirectoriesRecursive } from "./files";
import { addDotModule } from "./strings";
import { getCssSelectors } from "./css";
import { handleComponent } from "./component";

const regexStr = "^(?!.*\\.(spec|test|module)\\.(scss|tsx)$).*\\.(scss|tsx)$";
const dirsMeta = getDirectoriesRecursive("src", regexStr);

for (const dirMeta of dirsMeta) {
  for (const reKey in dirMeta.pairs) {
    if (
      dirMeta.pairs[reKey].hasOwnProperty("scss") &&
      dirMeta.pairs[reKey].hasOwnProperty("tsx")
    ) {
      const cssFilePath = dirMeta.pairs[reKey].scss;
      const cssSelectors = getCssSelectors(cssFilePath);
      handleComponent(dirMeta.pairs[reKey].tsx, cssSelectors, reKey);
      fs.renameSync(cssFilePath, addDotModule(cssFilePath));
    }
  }
}