#!/usr/bin/env node
import { createClient } from '@sanity/client';
import { uuid } from '@sanity/uuid';
import { getStudioEnvironmentVariables } from 'sanity/cli';

import { readFile, readdir } from 'fs/promises';

/*
Importer oversettelser fra flat JSON-filer til Sanity.

Forventet filnavn mønster: (ds-<pakke>|Shared)_<locale>.json
Eksempel: ds-forms_nb_NO.json
Struktur i fil:
{
  "combobox.Loading": "Laster",
  "datepicker.April": "April"
}

Mappe (folder) = prefiks før første punktum.
MessageId = del etter første punktum.
Alle språkverdier samles i én dokument per nøkkel.

Kjøring:
npm run sanity:upload [-- --dry-run] [-- --package=<navn>]

--dry-run: Skriver planlagte actions uten å endre noe.
--package=<navn>: Importer kun én spesifikk pakke.

Hierarki (mål): omraade(Designsystemet) -> liste(oversettelser) -> mappe(pakke) -> tekstdokument(localeText)
Alle nye dokumenter får tekniskNavn prefikset med ds_tekst som _id.
*/

// Last inn miljøvariabler (må være tilgjengelig for Sanity klienten)
getStudioEnvironmentVariables({
  envFile: {
    mode: 'production',
    // envDir: '../../',
    envDir: '.',
  },
});

const DRY_RUN = process.argv.includes('--dry-run');
const PKG_ARG = process.argv.find((a) => a.startsWith('--package='));
const SELECTED_PACKAGE = PKG_ARG ? PKG_ARG.split('=')[1].toLowerCase() : null;

const TYPE_LOCALETEXT = 'localeText';

// Eksisterende område-ID som skal brukes
const OMRAADE_ID = '4ccf3bd4-fbe8-480d-87c2-729215ef9958';
const OVERSETTELSE_LISTE_TEKNISKNAVN = 'ds-translations';
const OVERSETTELSE_LISTE_TITTEL = 'Oversettelser';

export const client = createClient({
  projectId: process.env['SANITY_STUDIO_PROJECT_ID'],
  dataset: process.env['SANITY_STUDIO_DATASET'],
  useCdn: false,
  apiVersion: '2023-05-03',
  token: process.env['SANITY_STUDIO_SECRET_EDITOR_TOKEN'],
});

async function publishDocument(docId: string): Promise<void> {
  client
    .action(
      {
        actionType: 'sanity.action.document.publish',
        draftId: docId,
        publishedId: docId.split('.')[1],
      },
      {}
    )
    .then(() => {
      ACTIONS.push({ type: 'publishDraft', id: docId });
      console.log(`${docId} draft published`);
    })
    .catch((err) => {
      console.error('Publish draft failed: ', err.message);
    });
}

interface RecordsMap {
  [packageName: string]: {
    [folder: string]: {
      [messageId: string]: {
        [locale: string]: string;
      };
    };
  };
}

interface ActionLog {
  type: string;
  id?: string;
  info?: unknown;
}

const ACTIONS: ActionLog[] = [];

// Kartlegging fra locale kode til kolonnenavn i Sanity
const LOCALE_DISPLAY_MAP: Record<string, string> = {
  nb_NO: 'NO_nb',
  nn_NO: 'NO_nn',
  en_GB: 'GB_en',
  se_NO: 'NO_sa',
};

function mapLocale(code: string): string {
  return LOCALE_DISPLAY_MAP[code] || code;
}

const translationsDir = new URL(
  '../../../ds-core-utils/src/translations/',
  import.meta.url
);

function parseFilename(
  fileName: string
): { packageName: string; locale: string } | null {
  // Examples: ds-forms_nb_NO.json, Shared_nb_NO.json
  const match = fileName.match(
    /^(ds-[a-z]+|Shared)_([a-z]{2}_[A-Z]{2})\.json$/
  );
  if (!match) return null;
  const rawPackage = match[1];
  const locale = match[2];
  const packageName = rawPackage;
  return { packageName, locale };
}

async function ensureOmraade(): Promise<boolean> {
  const omraade = await client.fetch('*[_id == $id][0]', { id: OMRAADE_ID });
  if (!omraade) {
    console.log('Område med ID finnes ikke. Avbryter.');
    return false;
  }
  ACTIONS.push({ type: 'ensureOmraade', id: OMRAADE_ID });
  return true;
}

async function ensureOversettelserListe(): Promise<string> {
  // Finn eksisterende liste via tekniskNavn eller tittel
  const existing = await client.fetch(
    "*[_type == 'liste' && (tekniskNavn == $tn || tittel == $tn)][0]",
    { tn: OVERSETTELSE_LISTE_TEKNISKNAVN, title: OVERSETTELSE_LISTE_TITTEL }
  );
  if (existing) {
    ACTIONS.push({ type: 'reuseListe', id: existing._id });
    if (DRY_RUN) {
      ACTIONS.push({
        type: 'linkListeToOmraade',
        id: OMRAADE_ID,
        info: {
          listeId: existing._id,
          note: 'may be skipped if already linked',
        },
      });
    } else {
      const omraade = await client.fetch('*[_id == $id][0]', {
        id: OMRAADE_ID,
      });
      const hasRef = omraade?.lister?.some((l: any) => l._ref === existing._id);
      if (!hasRef) {
        ACTIONS.push({
          type: 'linkListeToOmraade',
          id: OMRAADE_ID,
          info: existing._id,
        });
        await client
          .patch(OMRAADE_ID)
          .setIfMissing({ lister: [] })
          .insert('after', 'lister[-1]', [{ _ref: existing._id }])
          .commit({ autoGenerateArrayKeys: true });
      }
    }
    return existing._id;
  }
  const newId = `ds_liste_${OVERSETTELSE_LISTE_TEKNISKNAVN}`;
  const doc = {
    _type: 'liste',
    _id: newId,
    tekniskNavn: OVERSETTELSE_LISTE_TEKNISKNAVN,
    mapper: [],
    tilgangs_omraade: [{ _key: uuid(), _ref: OMRAADE_ID, _type: 'reference' }],
    tittel: OVERSETTELSE_LISTE_TITTEL,
  };
  ACTIONS.push({ type: 'create_liste', id: newId });
  ACTIONS.push({ type: 'linkListeToOmraade', id: OMRAADE_ID, info: newId });
  if (!DRY_RUN) {
    const newDoc = await client.createOrReplace(doc);
    const createdId = newDoc._id;
    if (createdId.includes('draft')) {
      console.log('publiserer draft', newId);
      await publishDocument(newId);
    }
    await client
      .patch(OMRAADE_ID)
      .setIfMissing({ lister: [] })
      .insert('after', 'lister[-1]', [{ _ref: newId }])
      .commit({ autoGenerateArrayKeys: true });
  }
  return newId;
}

async function ensureMappe(
  packageName: string,
  listeId: string
): Promise<string> {
  const existingMappe = await client.fetch(
    "*[_type == 'mappe' && tittel == $t][0]",
    { t: packageName }
  );
  if (existingMappe) {
    ACTIONS.push({ type: 'reuseMappe', id: existingMappe._id });
    if (DRY_RUN) {
      ACTIONS.push({
        type: 'linkExistingMappeToListe',
        id: existingMappe._id,
        info: { listeId, note: 'may be skipped if already linked' },
      });
    } else {
      const liste = await client.fetch('*[_id == $id][0]', { id: listeId });
      const already = liste?.mapper?.some(
        (m: any) => m._ref === existingMappe._id
      );
      const alreadyOmraade = existingMappe?.tilgangs_omraade?.some(
        (m: any) => m._ref === OMRAADE_ID
      );
      if (!already) {
        ACTIONS.push({
          type: 'linkExistingMappeToListe',
          id: existingMappe._id,
          info: listeId,
        });
        await client
          .patch(listeId)
          .setIfMissing({ mapper: [] })
          .insert('after', 'mapper[-1]', [{ _ref: existingMappe._id }])
          .commit({ autoGenerateArrayKeys: true });
      }

      if (!alreadyOmraade) {
        ACTIONS.push({
          type: 'linkExistingListeToOmraade',
          id: OMRAADE_ID,
          info: listeId,
        });
        await client
          .patch(existingMappe._id)
          .setIfMissing({ tilgangs_omraade: [] })
          .insert('after', 'tilgangs_omraade[-1]', [
            { _ref: OMRAADE_ID, _type: 'reference' },
          ])
          .commit({ autoGenerateArrayKeys: true });
      }
    }
    return existingMappe._id;
  }
  const newId = `ds_mappe_${packageName}`;
  const doc = {
    _type: 'mappe',
    _id: newId,
    tittel: packageName,
    tekster: [],
    tekniskNavn: packageName,
    tilgangs_omraade: [
      {
        _key: uuid(),
        _ref: OMRAADE_ID,
        _type: 'reference',
      },
    ],
  };
  ACTIONS.push({ type: 'create_mappe', id: newId });
  ACTIONS.push({ type: 'linkMappeToListe', id: newId, info: listeId });
  if (!DRY_RUN) {
    const newDoc = await client.createOrReplace(doc);
    const createdId = newDoc._id;
    if (createdId.includes('draft')) {
      await publishDocument(newId);
    }

    console.log(`${newId} linked to ${listeId}, createdId: ${createdId}`);

    await client
      .patch(listeId)
      .setIfMissing({ tilgangs_omraade: [] })
      .setIfMissing({ mapper: [] })
      .insert('after', 'mapper[-1]', [{ _ref: newId }])
      .commit({ autoGenerateArrayKeys: true });
  }
  return newId;
}

async function appendRefsToMappe(
  mappeId: string,
  refs: Array<{ _ref: string }>
): Promise<void> {
  if (!refs.length) return;
  ACTIONS.push({
    type: 'appendRefs',
    id: mappeId,
    info: { count: refs.length },
  });
  if (DRY_RUN) return;
  const result = await client
    .patch(mappeId)
    .setIfMissing({ tekster: [] })
    .insert(
      'after',
      'tekster[-1]',
      refs.map((r) => ({ _type: 'reference', _ref: r._ref }))
    )
    .commit({ autoGenerateArrayKeys: true });
  // console.log('result', result);
}

async function upsertMessage(
  folder: string,
  messageId: string,
  localesMap: { [locale: string]: string }
): Promise<{ created: boolean; patched: boolean; docId: string }> {
  const tekniskNavn = `${folder}.${messageId}`;
  if (DRY_RUN) {
    const dryRunId = uuid();
    ACTIONS.push({
      type: 'upsertMessage',
      id: dryRunId,
      info: {
        tekniskNavn,
        locales: Object.keys(localesMap),
        values: localesMap,
      },
    });
    return { created: true, patched: false, docId: dryRunId };
  }
  const existing = await client.fetch(
    '*[_type == $type && tekniskNavn == $tn][0]',
    { type: TYPE_LOCALETEXT, tn: tekniskNavn }
  );
  if (existing) {
    console.log(`Oppdaterer eksisterende melding: ${tekniskNavn}`, existing);
    const patchData: Record<string, unknown> = {};
    for (const [originalLoc, val] of Object.entries(localesMap)) {
      const loc = mapLocale(originalLoc);
      if (!existing[loc]) patchData[loc] = val;
    }

    const alreadyOmraade = existing?.tilgangs_omraade?.some(
      (m: any) => m._ref === OMRAADE_ID
    );
    if (!alreadyOmraade) {
      patchData['tilgangs_omraade'] = [
        {
          _key: uuid(),
          _ref: OMRAADE_ID,
          _type: 'reference',
        },
      ];
    }

    if (Object.keys(patchData).length) {
      ACTIONS.push({
        type: 'patchMessage',
        id: existing._id,
        info: { tekniskNavn, patchData },
      });
      await client.patch(existing._id).set(patchData).commit();
      return { created: false, patched: true, docId: existing._id };
    }
    ACTIONS.push({
      type: 'skipMessage',
      id: existing._id,
      info: { tekniskNavn, reason: 'no changes' },
    });
    return { created: false, patched: false, docId: existing._id };
  }
  const newId = `ds_tekst_${tekniskNavn}`;
  const newDoc: {
    _id: string;
    _type: string;
    tekniskNavn: string;
    [locale: string]: unknown;
  } = {
    _id: newId,
    _type: TYPE_LOCALETEXT,
    tekniskNavn,
    tilgangs_omraade: [{ _key: uuid(), _ref: OMRAADE_ID, _type: 'reference' }],
  };
  for (const [originalLoc, val] of Object.entries(localesMap)) {
    const loc = mapLocale(originalLoc);
    newDoc[loc] = val;
  }
  ACTIONS.push({
    type: 'createMessage',
    id: newId,
    info: { tekniskNavn, locales: Object.keys(localesMap), values: localesMap },
  });
  const msg = await client.createOrReplace(newDoc as any);
  console.log(`Opprettet ny melding: ${tekniskNavn}`, msg);
  return { created: true, patched: false, docId: msg._id ?? newId };
}

async function loadTranslationFiles(): Promise<RecordsMap> {
  const files = await readdir(translationsDir);
  const records: RecordsMap = {};
  for (const fileName of files) {
    if (!fileName.endsWith('.json')) continue;
    const parsed = parseFilename(fileName);
    if (!parsed) continue;
    const { packageName, locale } = parsed;
    const filePath = new URL(fileName, translationsDir);
    const raw = await readFile(filePath, 'utf8');
    let json: Record<string, string> = {};
    try {
      json = JSON.parse(raw);
    } catch (e) {
      console.warn('Kunne ikke parse fil', fileName, e);
      continue;
    }
    for (const [fullKey, value] of Object.entries(json)) {
      if (!fullKey.includes('.')) {
        console.warn(
          'Ugyldig nøkkel mangler punktum:',
          fullKey,
          'i fil',
          fileName
        );
        continue;
      }
      const [folder, messageId] = fullKey.split('.', 2);
      if (!records[packageName]) records[packageName] = {};
      if (!records[packageName][folder]) records[packageName][folder] = {};
      if (!records[packageName][folder][messageId])
        records[packageName][folder][messageId] = {};
      records[packageName][folder][messageId][mapLocale(locale)] = value;
    }
  }
  return records;
}

async function runTranslationsImport(): Promise<void> {
  const okOmraade = await ensureOmraade();
  if (!okOmraade) return;
  const oversettelserListeId = await ensureOversettelserListe();
  const records = await loadTranslationFiles();

  const packageNames = SELECTED_PACKAGE
    ? records[SELECTED_PACKAGE]
      ? [SELECTED_PACKAGE]
      : []
    : Object.keys(records);

  if (SELECTED_PACKAGE && packageNames.length === 0) {
    console.log(
      `Ingen oversettelser funnet for valgt pakke: ${SELECTED_PACKAGE}`
    );
    return;
  }

  let packagesProcessed = 0;
  let messagesCreated = 0;
  let messagesPatched = 0;

  for (const packageName of packageNames) {
    packagesProcessed++;
    const mappeId = await ensureMappe(packageName, oversettelserListeId);
    const refsToInsert: Array<{ _ref: string }> = [];
    const mappe: { tekster: { _ref: string }[] } = await client.fetch(
      '*[_id == $id][0]',
      { id: mappeId }
    );
    const existingRefs = mappe?.tekster || [];

    console.log(existingRefs);

    for (const folder of Object.keys(records[packageName])) {
      for (const messageId of Object.keys(records[packageName][folder])) {
        const localesMap = records[packageName][folder][messageId];
        const { created, patched, docId } = await upsertMessage(
          folder,
          messageId,
          localesMap
        );
        if (created) {
          messagesCreated++;
        }
        if (!existingRefs.some((r) => r._ref === docId)) {
          refsToInsert.push({ _ref: docId });
        }
        if (patched) messagesPatched++;
      }
    }
    await appendRefsToMappe(mappeId, refsToInsert);
  }

  const summary = {
    dryRun: DRY_RUN,
    packagesProcessed,
    messagesCreated,
    messagesPatched,
    actionCount: ACTIONS.length,
    omraadeId: OMRAADE_ID,
    oversettelserListeId,
  };

  console.log('Oversettelsesimport ferdig (summary):');
  console.log(JSON.stringify(summary, null, 2));
  console.log(DRY_RUN ? 'Planlagte actions:' : 'Utførte actions:');
  console.log(JSON.stringify(ACTIONS, null, 2));
}

async function main(): Promise<void> {
  await runTranslationsImport();
}

await main();
