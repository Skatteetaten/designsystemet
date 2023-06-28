#!/usr/bin/env node
import axios from 'axios';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import filterFiles from 'filter-files';
import * as fse from 'fs-extra';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import jsonConcat from 'json-concat';
import * as unzipper from 'unzipper';

import path from 'path';

interface Tekstliste {
  language: string;
  files: string[];
  fileName: string;
}

const tekstlistekatalog: string | undefined = process.env['TEKSTLISTEKATALOG'];
const translationsFolderEnvironmentVariable =
  process.env['TRANSLATIONS_FOLDER'] || 'translations';

const translationsfolder = path.resolve(
  process.cwd(),
  translationsFolderEnvironmentVariable
);
const languages: string[] = ['nb_NO', 'nn_NO', 'se_NO', 'en_GB'];

const downloadLanguageFile = async (
  fileName: string
): Promise<string | void> => {
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
  return new Promise<Tekstliste[]>((resolve, reject) => {
    const filePath = `${translationsfolder}/${fileName}`;
    const zipFileName = `${filePath}.zip`;
    fse
      .createReadStream(zipFileName)
      .pipe(unzipper.Extract({ path: filePath }))
      .on('entry', (entry: { autodrain: () => any }) => entry.autodrain()) // eslint-disable-line  @typescript-eslint/no-explicit-any
      .promise()
      .then(
        () => {
          removeZipFile(zipFileName);
          const translations = combineJsonFiles(filePath, fileName);
          resolve(translations);
        },
        // eslint-disable-next-line  @typescript-eslint/no-explicit-any
        (error: any) => reject(error)
      );
  }).catch((error) => {
    console.error(error);
  });
};

const removeZipFile = (zipFileName: string): void => {
  fse.unlink(zipFileName, (unlinkError: NodeJS.ErrnoException) => {
    if (unlinkError) {
      console.error(unlinkError);
    }
  });
};

const combineJsonFiles = (
  filePath: string,
  fileName: string
): Array<Tekstliste> =>
  languages
    .map((language: string) => ({
      language,
      files: filterFiles.sync(filePath, (fp: string) => {
        return new RegExp(language).test(fp);
      }),
      fileName,
    }))
    .filter((translation) => translation.files.length);

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
    const tekstlisterZipPromises: Promise<Tekstliste[] | void>[] = files
      .filter((filename): filename is string => typeof filename === 'string')
      .map((filename) => unzipFile(filename));

    return Promise.all(tekstlisterZipPromises);
  })
  .then((translations) => {
    console.log(`downloaded ${translations.length} tekstlister`);
    const allFiles = translations.flat();

    const tekstlisterConcatFilesPromises = allFiles
      .filter((tekstliste): tekstliste is Tekstliste => Boolean(tekstliste))
      .map((tekstliste) => concatLanguageFiles(tekstliste));

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
