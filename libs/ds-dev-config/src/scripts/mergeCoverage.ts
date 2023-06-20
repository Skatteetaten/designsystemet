import * as fs from 'fs-extra';

import { execSync } from 'child_process';

const REPORTS_FOLDER = 'coverage/merged';

const libs = fs.readdirSync('coverage/libs');

console.log('combining coverage ds-playground and for libs:', libs);

!fs.existsSync(REPORTS_FOLDER) && fs.mkdirSync(REPORTS_FOLDER);
libs.forEach((lib) => {
  fs.copyFileSync(
    `coverage/libs/${lib}/coverage-final.json`,
    `${REPORTS_FOLDER}/${lib}.json`
  );
});

fs.copyFileSync(
  'apps/ds-playground/coverage/storybook/coverage-storybook.json',
  `${REPORTS_FOLDER}/coverage-storybook.json`
);

fs.emptyDirSync('.nyc_output');

execSync(`nyc merge ${REPORTS_FOLDER} .nyc_output/merged.json`);
execSync(`nyc report --reporter lcov --report-dir coverage`);
