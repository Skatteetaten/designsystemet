const postcss = require('postcss');
const postcssJs = require('postcss-js');

const fs = require('fs');
const path = require('path');

const directoryPath = path.join(__dirname, '../lib/designtokens');
fs.readdir(directoryPath, function (err, files) {
  if (err) {
    console.log(`Unable to scan directory: ${err}`);
  }

  files.forEach(function (file) {
    if (path.extname(file) === '.css') {
      fs.readFile(`${directoryPath}/${file}`, 'utf8', function read(e, data) {
        if (e) {
          throw e;
        }

        const root = postcss.parse(data);
        const jsonContent = JSON.stringify(postcssJs.objectify(root));

        fs.writeFile(
          `${directoryPath}/${path.parse(file).name}.json`,
          jsonContent,
          () => {
            /* */
          }
        );
      });
    }
  });
});
