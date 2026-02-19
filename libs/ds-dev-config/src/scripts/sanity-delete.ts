#!/usr/bin/env node
import { createClient } from '@sanity/client';
import { getStudioEnvironmentVariables } from 'sanity/cli';

getStudioEnvironmentVariables({
  envFile: {
    mode: 'production',
    envDir: '.',
  },
});

const DRY_RUN = process.argv.includes('--dry-run');
const RUN_DELETE = process.argv.includes('--delete');
const TYPE_ARG = process.argv.find((a) => a.startsWith('--type='));
const DOC_ID_ARG = process.argv.find((a) => a.startsWith('--id='));
const TEKNISK_NAVN_ARG = process.argv.find((a) =>
  a.startsWith('--tekniskNavn=')
);

const SELECTED_TYPE = TYPE_ARG ? TYPE_ARG.split('=')[1] : 'localeText';
const SELECTED_ID = DOC_ID_ARG ? DOC_ID_ARG.split('=')[1] : null;
const SELECTED_TEKNISK_NAVN = TEKNISK_NAVN_ARG
  ? TEKNISK_NAVN_ARG.split('=')[1]
  : null;

export const client = createClient({
  projectId: process.env['SANITY_STUDIO_PROJECT_ID'],
  dataset: process.env['SANITY_STUDIO_DATASET'],
  useCdn: false,
  apiVersion: '2023-05-03',
  token: process.env['SANITY_STUDIO_SECRET_EDITOR_TOKEN'],
});

const OMRAADE_ID = '4ccf3bd4-fbe8-480d-87c2-729215ef9958';

// =============================================================================
// Types
// =============================================================================

type PartialLocaleText = {
  _id: string;
  _type: string;
  tekniskNavn?: string;
  mappe?: { _ref: string };
  [key: string]: unknown;
};

type PartialMappe = {
  _id: string;
  _type: 'mappe';
  tittel?: string;
  tekster?: Array<{ _type?: 'reference'; _ref: string }>;
};

type PartialListe = {
  _id: string;
  _type: 'liste';
  tekniskNavn?: string;
  tittel?: string;
  mapper?: Array<{ _type?: 'reference'; _ref: string }>;
};

type PartialOmraade = {
  _id: string;
  _type: 'omraade';
  tittel?: string;
  lister?: Array<{ _type?: 'reference'; _ref: string }>;
};

type MappeSummary = {
  id: string;
  tittel?: string;
  tekstCount: number;
};

// =============================================================================
// Fetch functions
// =============================================================================

async function findTextByIdOrTekniskNavn(
  id?: string | null,
  tekniskNavn?: string | null,
  type = 'localeText'
): Promise<PartialLocaleText | null> {
  if (id) {
    return await client.fetch('*[_id == $id][0]', { id });
  }
  if (tekniskNavn) {
    return await client.fetch('*[_type == $type && tekniskNavn == $tn][0]', {
      type,
      tn: tekniskNavn,
    });
  }
  return null;
}

async function findMappeByIdOrTekniskNavn(
  id?: string | null,
  tekniskNavn?: string | null
): Promise<PartialMappe | null> {
  if (id) {
    return (await client.fetch('*[_id == $id][0]', {
      id,
    })) as PartialMappe | null;
  }
  if (tekniskNavn) {
    return (await client.fetch('*[_type == "mappe" && tekniskNavn == $tn][0]', {
      tn: tekniskNavn,
    })) as PartialMappe | null;
  }
  return null;
}

async function findListeByIdOrTekniskNavn(
  id?: string | null,
  tekniskNavn?: string | null
): Promise<PartialListe | null> {
  if (id) {
    return (await client.fetch('*[_id == $id][0]', {
      id,
    })) as PartialListe | null;
  }
  if (tekniskNavn) {
    return (await client.fetch('*[_type == "liste" && tekniskNavn == $tn][0]', {
      tn: tekniskNavn,
    })) as PartialListe | null;
  }
  return null;
}

async function findOmraade(): Promise<PartialOmraade | null> {
  return (await client.fetch('*[_id == $id][0]', {
    id: OMRAADE_ID,
  })) as PartialOmraade | null;
}

async function getTextsLinkedToMappe(
  mappe: PartialMappe | null
): Promise<PartialLocaleText[]> {
  if (!mappe?.tekster || mappe.tekster.length === 0) return [];
  const ids = mappe.tekster.map((t) => t._ref);
  const result = await client.fetch('*[_id in $ids]', { ids });
  return Array.isArray(result) ? (result as PartialLocaleText[]) : [];
}

async function getMapperLinkedToListe(
  liste: PartialListe | null
): Promise<PartialMappe[]> {
  if (!liste?.mapper || liste.mapper.length === 0) return [];
  const ids = liste.mapper.map((m) => m._ref);
  const result = await client.fetch('*[_id in $ids]', { ids });
  return Array.isArray(result) ? (result as PartialMappe[]) : [];
}

async function findMappeForText(
  text: PartialLocaleText
): Promise<PartialMappe | null> {
  const mappeRef = text.mappe?._ref;
  if (!mappeRef) return null;
  return await findMappeByIdOrTekniskNavn(mappeRef);
}

// =============================================================================
// Unlink functions
// =============================================================================

async function unlinkTextFromMappe(
  text: PartialLocaleText,
  mappeId: string
): Promise<void> {
  await client
    .patch(mappeId)
    .unset([`tekster[_ref=="${text._id}"]`])
    .commit({ autoGenerateArrayKeys: true });
}

async function unlinkAllTextsFromMappe(mappe: PartialMappe): Promise<void> {
  if (!mappe.tekster || mappe.tekster.length === 0) return;
  await client
    .patch(mappe._id)
    .unset(['tekster'])
    .commit({ autoGenerateArrayKeys: true });
}

async function unlinkAllMapperFromListe(liste: PartialListe): Promise<void> {
  if (!liste.mapper || liste.mapper.length === 0) return;
  await client
    .patch(liste._id)
    .unset(['mapper'])
    .commit({ autoGenerateArrayKeys: true });
}

async function unlinkListeFromOmraade(
  listeId: string,
  omraade: PartialOmraade | null
): Promise<void> {
  if (!omraade?.lister || omraade.lister.length === 0) return;
  const hasRef = omraade.lister.some((l) => l._ref === listeId);
  if (!hasRef) return;
  await client
    .patch(omraade._id)
    .unset([`lister[_ref=="${listeId}"]`])
    .commit({ autoGenerateArrayKeys: true });
}

// =============================================================================
// Delete functions (cascading)
// =============================================================================

async function deleteText(text: PartialLocaleText): Promise<void> {
  const mappeId = text.mappe?._ref;
  if (mappeId) {
    await unlinkTextFromMappe(text, mappeId);
  }
  await client.delete(text._id);
  console.log(`Tekst slettet: ${text._id}`);
}

async function deleteMappe(mappe: PartialMappe): Promise<void> {
  const linkedTexts = await getTextsLinkedToMappe(mappe);

  if (linkedTexts.length > 0) {
    await unlinkAllTextsFromMappe(mappe);
    for (const text of linkedTexts) {
      await client.delete(text._id);
      console.log(`Tekst slettet: ${text._id}`);
    }
  }

  await client.delete(mappe._id);
  console.log(`Mappe slettet: ${mappe._id}`);
}

async function deleteListe(liste: PartialListe): Promise<void> {
  const omraade = await findOmraade();
  const linkedMapper = await getMapperLinkedToListe(liste);

  await unlinkListeFromOmraade(liste._id, omraade);
  await unlinkAllMapperFromListe(liste);

  for (const mappe of linkedMapper) {
    await deleteMappe(mappe);
  }

  await client.delete(liste._id);
  console.log(`Liste slettet: ${liste._id}`);
}

// =============================================================================
// Summary functions (for dry-run output)
// =============================================================================

function summarizeText(
  text: PartialLocaleText | null,
  mappe: PartialMappe | null
): Record<string, unknown> {
  if (!text) return { found: false };
  const localeKeys = Object.keys(text).filter((k) =>
    ['NO_nb', 'NO_nn', 'GB_en', 'NO_sa'].includes(k)
  );
  const mappeRef = text.mappe?._ref;
  const isRefInMappe = !!mappe?.tekster?.some((t) => t._ref === text._id);
  return {
    found: true,
    id: text._id,
    type: text._type,
    tekniskNavn: text.tekniskNavn,
    mappeRef,
    localesPresent: localeKeys,
    mappeTitle: mappe?.tittel,
    willUnlinkFromMappe: !!mappeRef && isRefInMappe,
  };
}

async function summarizeMappe(
  mappe: PartialMappe | null
): Promise<Record<string, unknown>> {
  if (!mappe) return { found: false };
  const linkedTexts = await getTextsLinkedToMappe(mappe);
  return {
    found: true,
    id: mappe._id,
    type: mappe._type,
    tittel: mappe.tittel,
    tekstCount: linkedTexts.length,
    tekstIds: linkedTexts.map((t) => t._id),
  };
}

async function summarizeListe(
  liste: PartialListe | null
): Promise<Record<string, unknown>> {
  if (!liste) return { found: false };

  const omraade = await findOmraade();
  const omraadeHasRef = !!omraade?.lister?.some((l) => l._ref === liste._id);
  const linkedMapper = await getMapperLinkedToListe(liste);

  const mapperSummaries: MappeSummary[] = await Promise.all(
    linkedMapper.map(async (mappe) => {
      const texts = await getTextsLinkedToMappe(mappe);
      return {
        id: mappe._id,
        tittel: mappe.tittel,
        tekstCount: texts.length,
      };
    })
  );

  const totalTextCount = mapperSummaries.reduce(
    (sum, m) => sum + m.tekstCount,
    0
  );

  return {
    found: true,
    id: liste._id,
    type: liste._type,
    tekniskNavn: liste.tekniskNavn,
    tittel: liste.tittel,
    omraadeHasRef,
    mapper: mapperSummaries,
    totalMappeCount: mapperSummaries.length,
    totalTextCount,
  };
}

// =============================================================================
// Main
// =============================================================================

async function runDelete(): Promise<void> {
  if (!RUN_DELETE) {
    console.log(
      'Bruk --delete for å slette. Legg til --dry-run for forhåndsvisning.'
    );
    return;
  }
  if (!SELECTED_ID && !SELECTED_TEKNISK_NAVN) {
    console.log(
      'Spesifiser enten --id=<dokumentId> eller --tekniskNavn=<verdi>.'
    );
    return;
  }

  if (SELECTED_TYPE === 'liste') {
    const liste = await findListeByIdOrTekniskNavn(
      SELECTED_ID,
      SELECTED_TEKNISK_NAVN
    );
    const summary = await summarizeListe(liste);

    console.log('Sanity liste (pre-action summary):');
    console.log(JSON.stringify(summary, null, 2));

    if (!liste) {
      console.log('Fant ikke liste. Ingen endringer utført.');
      return;
    }

    if (DRY_RUN) {
      console.log('Dry-run aktivert: ingen endringer utført.');
      return;
    }

    await deleteListe(liste);
    return;
  }

  if (SELECTED_TYPE === 'mappe') {
    const mappe = await findMappeByIdOrTekniskNavn(
      SELECTED_ID,
      SELECTED_TEKNISK_NAVN
    );
    const summary = await summarizeMappe(mappe);

    console.log('Sanity mappe (pre-action summary):');
    console.log(JSON.stringify(summary, null, 2));

    if (!mappe) {
      console.log('Fant ikke mappe. Ingen endringer utført.');
      return;
    }

    if (DRY_RUN) {
      console.log('Dry-run aktivert: ingen endringer utført.');
      return;
    }

    await deleteMappe(mappe);
    return;
  }

  // Default: delete text (localeText or other types)
  const text = await findTextByIdOrTekniskNavn(
    SELECTED_ID,
    SELECTED_TEKNISK_NAVN,
    SELECTED_TYPE
  );
  const mappe = text ? await findMappeForText(text) : null;
  const summary = summarizeText(text, mappe);

  console.log('Sanity dokument (pre-action summary):');
  console.log(JSON.stringify(summary, null, 2));

  if (!text) {
    console.log('Fant ikke dokumentet. Ingen endringer utført.');
    return;
  }

  if (DRY_RUN) {
    console.log('Dry-run aktivert: ingen endringer utført.');
    return;
  }

  await deleteText(text);
}

await runDelete();
