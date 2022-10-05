const fs = require('fs');
const os = require('os');
const path = require('path');

const themeIconPath = path.join(__dirname, './lib/ThemeIcons/');
const systemIconPath = path.join(__dirname, '/lib/SystemIcons/');

createIndexFile(themeIconPath);
createIndexFile(systemIconPath);

function createIndexFile(iconPath) {
  try {
    const endOfLine = os.EOL;
    const files = fs.readdirSync(iconPath);

    const writeStream = fs.createWriteStream(`${iconPath}index.ts`);
    writeStream.write(
      `/* NB! Dette er en autogenerert fil, vennligst ikke gjør manuelle endringer i den.${endOfLine}`
    );
    writeStream.write(
      `   Kjør kommandonavn generate:iconIndexFiles for å generere exports. */${endOfLine}`
    );
    files.forEach(function (file) {
      if (file.indexOf('.tsx') > -1) {
        const filename = file.replace('.tsx', '');
        const exportStatement = `export * from './${filename}';${endOfLine}`;
        writeStream.write(exportStatement);
      }
    });
    writeStream.end();
  } catch (err) {
    console.error(`creatIconIndexFiles feilet: ${err}`);
    throw err;
  }
}
