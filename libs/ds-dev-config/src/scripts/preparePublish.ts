import * as fs from 'fs-extra';

import { readFileSync, writeFileSync } from 'fs';
import { resolve } from 'path';

const libPath = resolve('dist/libs');
const libs = fs.readdirSync(libPath);

libs.forEach((lib) => {
  const pkgJsonPath = resolve(libPath, lib, 'package.json');

  if (fs.existsSync(pkgJsonPath)) {
    const pkgjson = readFileSync(pkgJsonPath, 'utf8');

    const {
      name,
      groupId,
      author,
      version,
      description,
      keywords,
      repository,
      license,
      bugs,
      homepage,
      peerDependencies,
      dependencies,
      scripts,
      types,
      type,
      module,
      main,
      exports: pkgExports,
    } = JSON.parse(pkgjson);

    const minimalPackage = {
      name,
      groupId,
      author,
      version,
      description,
      main,
      type,
      module,
      types,
      keywords,
      repository,
      license,
      bugs,
      homepage,
      peerDependencies,
      dependencies,
      scripts,
      exports: pkgExports,
    };

    const data = JSON.stringify(minimalPackage, undefined, 2);
    writeFileSync(pkgJsonPath, data);
    console.log(`Updated package.json in ${pkgJsonPath}`);
  }
});
