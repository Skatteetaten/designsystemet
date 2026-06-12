#!/usr/bin/env node
import { createClient } from '@sanity/client';
import { getStudioEnvironmentVariables } from 'sanity/cli';

import { writeFile, mkdir } from 'fs/promises';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

getStudioEnvironmentVariables({
  envFile: {
    mode: 'production',
    envDir: '.',
  },
});

const DRY_RUN = process.argv.includes('--dry-run');
const LISTE_ID_ARG = process.argv.find((a) => a.startsWith('--listeId='));
const LISTE_TEK_ARG = process.argv.find((a) =>
  a.startsWith('--listeTekniskNavn=')
);
const MAPPE_ID_ARG = process.argv.find((a) => a.startsWith('--mappeId='));
const MAPPE_TITTEL_ARG = process.argv.find((a) =>
  a.startsWith('--mappeTittel=')
);

const SELECTED_LISTE_ID = LISTE_ID_ARG ? LISTE_ID_ARG.split('=')[1] : null;
const SELECTED_LISTE_TEK = LISTE_TEK_ARG ? LISTE_TEK_ARG.split('=')[1] : null;
const SELECTED_MAPPE_ID = MAPPE_ID_ARG ? MAPPE_ID_ARG.split('=')[1] : null;
const SELECTED_MAPPE_TITTEL = MAPPE_TITTEL_ARG
  ? MAPPE_TITTEL_ARG.split('=')[1]
  : null;

export const client = createClient({
  projectId: process.env['SANITY_STUDIO_PROJECT_ID'],
  dataset: process.env['SANITY_STUDIO_DATASET'],
  useCdn: false,
  apiVersion: '2023-05-03',
  token: process.env['SANITY_STUDIO_SECRET_EDITOR_TOKEN'],
});

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const TRANSLATIONS_DIR = join(
  __dirname,
  '../../../ds-core-utils/src/translations/'
);

const LOCALE_EXPORT_MAP: Record<string, string> = {
  NO_nb: 'nb_NO',
  NO_nn: 'nn_NO',
  GB_en: 'en_GB',
  NO_sa: 'se_NO',
};

const SANITY_LOCALES = Object.keys(LOCALE_EXPORT_MAP);

type PartialListe = {
  _id: string;
  _type: 'liste';
  tekniskNavn?: string;
  tittel?: string;
  mapper?: Array<{ _ref: string }>;
};

type PartialMappe = {
  _id: string;
  _type: 'mappe';
  tittel?: string;
  tekster?: Array<{ _ref: string }>;
};

type PartialLocaleText = {
  _id: string;
  _type: string;
  tekniskNavn?: string;
  NO_nb?: string;
  NO_nn?: string;
  GB_en?: string;
  NO_sa?: string;
};

type ExportData = {
  [packageName: string]: {
    [locale: string]: {
      [key: string]: string;
    };
  };
};

async function findListe(): Promise<PartialListe | null> {
  if (SELECTED_LISTE_ID) {
    return await client.fetch('*[_id == $id][0]', { id: SELECTED_LISTE_ID });
  }
  if (SELECTED_LISTE_TEK) {
    return await client.fetch('*[_type == "liste" && tekniskNavn == $tn][0]', {
      tn: SELECTED_LISTE_TEK,
    });
  }
  return null;
}

async function getMapperFromListe(
  liste: PartialListe
): Promise<PartialMappe[]> {
  const mapperRefs = liste.mapper?.map((m) => m._ref) ?? [];
  if (mapperRefs.length === 0) return [];

  const result = await client.fetch('*[_id in $ids]', { ids: mapperRefs });
  let mapper = Array.isArray(result) ? (result as PartialMappe[]) : [];

  if (SELECTED_MAPPE_ID) {
    mapper = mapper.filter((m) => m._id === SELECTED_MAPPE_ID);
  } else if (SELECTED_MAPPE_TITTEL) {
    mapper = mapper.filter((m) => m.tittel === SELECTED_MAPPE_TITTEL);
  }

  return mapper;
}

async function getTextsFromMappe(
  mappe: PartialMappe
): Promise<PartialLocaleText[]> {
  const textRefs = mappe.tekster?.map((t) => t._ref) ?? [];
  if (textRefs.length === 0) return [];

  const result = await client.fetch('*[_id in $ids]', { ids: textRefs });
  return Array.isArray(result) ? (result as PartialLocaleText[]) : [];
}

function transformToExportFormat(
  mapper: PartialMappe[],
  textsMap: Map<string, PartialLocaleText[]>
): ExportData {
  const exportData: ExportData = {};

  for (const mappe of mapper) {
    const packageName = mappe.tittel ?? mappe._id;
    const texts = textsMap.get(mappe._id) ?? [];

    if (!exportData[packageName]) {
      exportData[packageName] = {};
    }

    for (const text of texts) {
      if (!text.tekniskNavn) continue;

      for (const sanityLocale of SANITY_LOCALES) {
        const value = text[sanityLocale as keyof PartialLocaleText] as
          | string
          | undefined;
        if (!value) continue;

        const exportLocale = LOCALE_EXPORT_MAP[sanityLocale];
        if (!exportData[packageName][exportLocale]) {
          exportData[packageName][exportLocale] = {};
        }

        exportData[packageName][exportLocale][text.tekniskNavn] = value;
      }
    }
  }

  return exportData;
}

function sortObjectKeys<T extends Record<string, unknown>>(obj: T): T {
  const sorted = {} as T;
  for (const key of Object.keys(obj).sort()) {
    sorted[key as keyof T] = obj[key] as T[keyof T];
  }
  return sorted;
}

async function writeTranslationFiles(exportData: ExportData): Promise<number> {
  let filesWritten = 0;

  await mkdir(TRANSLATIONS_DIR, { recursive: true });

  for (const [packageName, locales] of Object.entries(exportData)) {
    for (const [locale, translations] of Object.entries(locales)) {
      const sortedTranslations = sortObjectKeys(translations);
      const fileName = `${packageName}_${locale}.json`;
      const filePath = join(TRANSLATIONS_DIR, fileName);
      const content = `${JSON.stringify(sortedTranslations, null, 2)}\n`;

      if (DRY_RUN) {
        console.log(
          `Would write: ${fileName} (${Object.keys(translations).length} keys)`
        );
      } else {
        await writeFile(filePath, content, 'utf8');
        console.log(
          `Wrote: ${fileName} (${Object.keys(translations).length} keys)`
        );
      }
      filesWritten++;
    }
  }

  return filesWritten;
}

async function runDownload(): Promise<void> {
  if (!SELECTED_LISTE_ID && !SELECTED_LISTE_TEK) {
    console.log(
      'Spesifiser liste med --listeId=<id> eller --listeTekniskNavn=<navn>.'
    );
    return;
  }

  const liste = await findListe();
  if (!liste) {
    console.log('Fant ikke liste. Avslutter.');
    return;
  }

  console.log(`Fant liste: ${liste.tittel ?? liste._id}`);

  const mapper = await getMapperFromListe(liste);
  if (mapper.length === 0) {
    console.log('Ingen mapper funnet i listen.');
    return;
  }

  console.log(`Fant ${mapper.length} mappe(r)`);

  const textsMap = new Map<string, PartialLocaleText[]>();
  let totalTexts = 0;

  for (const mappe of mapper) {
    const texts = await getTextsFromMappe(mappe);
    textsMap.set(mappe._id, texts);
    totalTexts += texts.length;
    console.log(`  - ${mappe.tittel ?? mappe._id}: ${texts.length} tekster`);
  }

  const exportData = transformToExportFormat(mapper, textsMap);
  const filesWritten = await writeTranslationFiles(exportData);

  const summary = {
    dryRun: DRY_RUN,
    listeId: liste._id,
    listeTittel: liste.tittel,
    mapperCount: mapper.length,
    totalTexts,
    filesWritten,
    outputDir: TRANSLATIONS_DIR,
  };

  console.log('\nDownload ferdig (summary):');
  console.log(JSON.stringify(summary, null, 2));
}

await runDownload();
