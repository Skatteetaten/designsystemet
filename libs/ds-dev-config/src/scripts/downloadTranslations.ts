#!/usr/bin/env node

const axios = require('axios'); // eslint-disable-line @typescript-eslint/no-var-requires
const filterFiles = require('filter-files'); // eslint-disable-line @typescript-eslint/no-var-requires
const fse = require('fs-extra'); // eslint-disable-line @typescript-eslint/no-var-requires
const jsonConcat = require('json-concat'); // eslint-disable-line @typescript-eslint/no-var-requires
const unzipper = require('unzipper'); // eslint-disable-line @typescript-eslint/no-var-requires

const path = require('path'); // eslint-disable-line @typescript-eslint/no-var-requires

interface Tekstliste {
  language: string;
  files: string[];
  fileName: string;
}

const tekstlistekatalog: string | undefined = process.env['TEKSTLISTEKATALOG'];
const translationsFolderEnvironmentVariable: string = process.env[
  'TRANSLATIONS_FOLDER'
]
  ? process.env['TRANSLATIONS_FOLDER']
  : 'translations';

const translationsfolder = path.resolve(
  process.cwd(),
  translationsFolderEnvironmentVariable
);
const languages: string[] = ['nb_NO', 'nn_NO', 'se_NO', 'en_GB'];

const downloadLanguageFile = (fileName: string): Promise<string | void> => {
  const url = `http://tekstlistekatalog.skead.no/api/v2/zip/${tekstlistekatalog}/${fileName}.zip`;
  const zipFileName = `${translationsfolder}/${fileName}.zip`;
  const zipFileWriteStream = fse.createWriteStream(zipFileName);
  return new Promise<string | void>((resolve, reject) => {
    const requestOptions = {
      headers: {
        'File-Type': 'json',
      },
      responseType: 'stream' as const,
    };
    // eslint-disable-next-line  @typescript-eslint/no-explicit-any
    axios.get(url, requestOptions).then((response: any) => {
      response.data
        .pipe(zipFileWriteStream)
        .on('finish', () => {
          resolve(fileName);
        })
        .on('error', (error: Error) => {
          fse.unlinkSync(zipFileName);
          reject(error);
        });
    });
  });
};

const unzipFile = (fileName: string): Promise<Tekstliste[] | void> => {
  return new Promise<Tekstliste[] | void>((resolve, reject) => {
    const filePath = `${translationsfolder}/${fileName}`;
    const zipFileName = `${filePath}.zip`;
    fse
      .createReadStream(zipFileName)
      .pipe(unzipper.Extract({ path: filePath }))
      .on('entry', (entry: { autodrain: () => any }) => entry.autodrain()) // eslint-disable-line  @typescript-eslint/no-explicit-any
      .promise()
      .then(
        () => {
          // remove zip file
          // eslint-disable-next-line  @typescript-eslint/no-explicit-any
          fse.unlink(zipFileName, (unlinkError: any) => {
            console.error(unlinkError);
          });
          // combine all json-files in each folder
          const translations: Tekstliste[] = [];
          languages.forEach((language: string) => {
            const filesArray: string[] = filterFiles.sync(
              filePath,
              (fp: string) => {
                return new RegExp(language).test(fp);
              }
            );
            if (!filesArray.length) {
              return;
            }
            translations.push({
              language: language,
              files: filesArray,
              fileName: fileName,
            });
          });
          resolve(translations);
        },
        // eslint-disable-next-line  @typescript-eslint/no-explicit-any
        (error: any) => reject(error)
      );
  }).catch((error) => {
    console.error(error);
  });
};

const concatLanguageFiles = (
  tekstliste: Tekstliste
): Promise<Tekstliste | string | void> => {
  console.log(
    `combining ${tekstliste.fileName}_${tekstliste.language} which contains ${tekstliste.files.length} files.`
  );
  return new Promise<Tekstliste | string | void>((resolve, reject) => {
    jsonConcat(
      {
        src: tekstliste.files,
        dest: `${translationsfolder}/${tekstliste.fileName}_${tekstliste.language}.json`,
      },
      (json: string) => {
        if (json !== '') {
          resolve(tekstliste);
        } else {
          console.error(json);
          reject(json);
        }
      }
    );
  }).catch((error) => {
    console.error(error);
  });
};

const tekstlisteFileNamesArray: string[] = process.env['TEKSTLISTER']
  ? process.env['TEKSTLISTER'].split(',')
  : [];

const tekstlisterPromises: Promise<string | void>[] =
  tekstlisteFileNamesArray.map((fileName) => downloadLanguageFile(fileName));
Promise.all(tekstlisterPromises)
  .then((files) => {
    console.log(`downloaded files: ${files}`);
    const tekstlisterZipPromises: (Promise<Tekstliste[] | void> | undefined)[] =
      files.map((fileName) => {
        if (fileName) {
          return unzipFile(fileName);
        } else {
          return;
        }
      });
    return Promise.all(tekstlisterZipPromises);
  })
  .then((translations) => {
    console.log(`downloaded ${translations.length} tekstlister`);
    const allFiles = translations.flat();
    // concat files for each language
    const tekstlisterConcatFilesPromises: (
      | Promise<Tekstliste | string | void>
      | undefined
    )[] = allFiles.map((tekstliste) => {
      if (tekstliste) {
        return concatLanguageFiles(tekstliste);
      } else {
        return;
      }
    });
    return Promise.all(tekstlisterConcatFilesPromises);
  })
  .then(() => {
    tekstlisteFileNamesArray.forEach((tekstliste: string) => {
      console.log(`removing folder ${tekstliste} with temporary json files`);
      fse.removeSync(`${translationsfolder}/${tekstliste}`);
    });
  })
  .catch((error) => {
    console.error(error);
  });
