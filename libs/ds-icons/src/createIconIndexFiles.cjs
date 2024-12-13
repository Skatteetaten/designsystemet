const fs = require('fs');
const os = require('os');
const path = require('path');

/**
 *
 * @param iconSubPath SystemIcons eller ThemeIcons
 */
function createIndexFile(iconSubPath) {
  try {
    const endOfLine = os.EOL;
    const iconPath = path.join(__dirname, `./${iconSubPath}/`);
    const files = fs.readdirSync(iconPath);
    const writeStream = fs.createWriteStream(`${iconPath}index.tsx`);
    writeStream.write(
      `/* NB! Dette er en autogenerert fil, vennligst ikke gjør manuelle endringer i den.${endOfLine}`
    );
    writeStream.write(
      `   Kjør kommandonavn generate:iconIndexFiles for å generere exports. */${endOfLine}`
    );
    files.forEach(function (file) {
      if (file.indexOf('.tsx') > -1) {
        const filename = file.replace('.tsx', '');
        if (filename !== 'index') {
          const exportStatement = `export * from './${filename}';${endOfLine}`;
          writeStream.write(exportStatement);
        }
      }
    });
    writeStream.end();
  } catch (err) {
    console.error(`creatIconIndexFiles feilet: ${err}`);
    throw err;
  }
}

createIndexFile('SystemIcons');
createIndexFile('ThemeIcons');
