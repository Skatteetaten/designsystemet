#!/usr/bin/env node
import { createClient } from '@sanity/client';
import { getStudioEnvironmentVariables } from 'sanity/cli';

// Bootstraps the same environment as the translations script
getStudioEnvironmentVariables({
  envFile: {
    mode: 'production',
    envDir: '.',
  },
});

const DRY_RUN = process.argv.includes('--dry-run');
const RUN_DELETE = process.argv.includes('--delete');
const RUN_UNLINK = process.argv.includes('--unlink');
const FORCE = process.argv.includes('--force');
const TYPE_ARG = process.argv.find((a) => a.startsWith('--type='));
const DOC_ID_ARG = process.argv.find((a) => a.startsWith('--id='));
const TEKNISK_NAVN_ARG = process.argv.find((a) =>
  a.startsWith('--tekniskNavn=')
);

const SELECTED_TYPE = TYPE_ARG ? TYPE_ARG.split('=')[1] : 'localeText';
const SELECTED_ID = DOC_ID_ARG ? DOC_ID_ARG.split('=')[1] : null;
const SELECTED_TEKNSIK_NAVN = TEKNISK_NAVN_ARG
  ? TEKNISK_NAVN_ARG.split('=')[1]
  : null;

export const client = createClient({
  projectId: process.env['SANITY_STUDIO_PROJECT_ID'],
  dataset: process.env['SANITY_STUDIO_DATASET'],
  useCdn: false,
  apiVersion: '2023-05-03',
  token: process.env['SANITY_STUDIO_SECRET_EDITOR_TOKEN'],
});

// Known area id from sanity.ts import script
const OMRAADE_ID = '4ccf3bd4-fbe8-480d-87c2-729215ef9958';

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

async function findDoc(): Promise<PartialLocaleText | null> {
  if (SELECTED_ID) {
    return await client.fetch('*[_id == $id][0]', { id: SELECTED_ID });
  }
  if (SELECTED_TEKNSIK_NAVN) {
    return await client.fetch('*[_type == $type && tekniskNavn == $tn][0]', {
      type: SELECTED_TYPE,
      tn: SELECTED_TEKNSIK_NAVN,
    });
  }
  return null;
}

async function findMappe(
  mappeId: string | undefined
): Promise<PartialMappe | null> {
  if (!mappeId) return null;
  return await client.fetch('*[_id == $id][0]', { id: mappeId });
}

async function findListeByIdOrTekniskNavn(
  id?: string,
  tekniskNavn?: string | null
): Promise<PartialListe | null> {
  if (id)
    return (await client.fetch('*[_id == $id][0]', {
      id,
    })) as PartialListe | null;
  if (tekniskNavn)
    return (await client.fetch('*[_type == "liste" && tekniskNavn == $tn][0]', {
      tn: tekniskNavn,
    })) as PartialListe | null;
  return null;
}

async function findOmraadeById(): Promise<PartialOmraade | null> {
  return (await client.fetch('*[_id == $id][0]', {
    id: OMRAADE_ID,
  })) as PartialOmraade | null;
}

function summarizeDoc(
  doc: PartialLocaleText | null,
  mappe: PartialMappe | null
): Record<string, unknown> {
  if (!doc) return { found: false };
  const localeKeys = Object.keys(doc).filter((k) =>
    ['NO_nb', 'NO_nn', 'GB_en', 'NO_sa'].includes(k)
  );
  const mappeRef = doc.mappe && (doc.mappe as any)._ref;
  const hasMappeLink = !!mappeRef;
  const isRefInMappe = !!mappe?.tekster?.some((t) => t._ref === doc._id);
  return {
    found: true,
    id: doc._id,
    type: doc._type,
    tekniskNavn: doc.tekniskNavn,
    mappeRef,
    localesPresent: localeKeys,
    mappeTitle: mappe?.tittel,
    mappeHasRefToDoc: isRefInMappe,
    willUnlink: FORCE && hasMappeLink && isRefInMappe,
  };
}

function summarizeMappe(
  mappe: PartialMappe | null,
  linkedTexts: PartialLocaleText[],
  unlinkOnly: boolean
): Record<string, unknown> {
  if (!mappe) return { found: false };
  const textIds = linkedTexts.map((t) => t._id);
  const textCount = textIds.length;
  return {
    found: true,
    id: mappe._id,
    type: mappe._type,
    tittel: mappe.tittel,
    teksterCount: textCount,
    teksterIds: textIds,
    action: unlinkOnly ? 'unlink' : 'delete',
    willUnlinkAll: FORCE && textCount > 0,
  };
}

function summarizeListe(
  liste: PartialListe | null,
  mapperIds: string[],
  omraadeHasRef: boolean,
  unlinkOnly: boolean
): Record<string, unknown> {
  if (!liste) return { found: false };
  return {
    found: true,
    id: liste._id,
    type: liste._type,
    tekniskNavn: liste.tekniskNavn,
    tittel: liste.tittel,
    mapperCount: mapperIds.length,
    mapperIds,
    omraadeHasRef,
    action: unlinkOnly ? 'unlink' : 'delete',
    willUnlinkAll: FORCE && (mapperIds.length > 0 || omraadeHasRef),
  };
}

async function unlinkFromMappeIfNeeded(
  doc: PartialLocaleText,
  mappeId?: string
): Promise<void> {
  if (!mappeId) return;
  await client
    .patch(mappeId)
    .unset([`tekster[_ref=="${doc._id}"]`])
    .commit({ autoGenerateArrayKeys: true });
}

async function unlinkTextsFromMappe(mappe: PartialMappe): Promise<void> {
  const textRefs = mappe.tekster?.map((t) => t._ref) ?? [];
  if (textRefs.length === 0) return;
  // Remove all text references from the mappe
  await client
    .patch(mappe._id)
    .unset(['tekster'])
    .commit({ autoGenerateArrayKeys: true });
}

async function unlinkMapperFromListe(liste: PartialListe): Promise<void> {
  const mapperRefs = liste.mapper?.map((m) => m._ref) ?? [];
  if (mapperRefs.length === 0) return;
  await client
    .patch(liste._id)
    .unset(['mapper'])
    .commit({ autoGenerateArrayKeys: true });
}

async function unlinkListeFromOmraadeIfNeeded(
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

async function getTextsLinkedToMappe(
  mappe: PartialMappe | null
): Promise<PartialLocaleText[]> {
  if (!mappe?.tekster || mappe.tekster.length === 0) return [];
  const ids = mappe.tekster.map((t) => t._ref);
  const result = await client.fetch('*[_id in $ids]', { ids });
  return Array.isArray(result) ? (result as PartialLocaleText[]) : [];
}

async function runDeleteOrUnlink(): Promise<void> {
  if (!RUN_DELETE && !RUN_UNLINK) {
    console.log('Ingen flagg --delete eller --unlink funnet. Avslutter.');
    return;
  }
  if (!SELECTED_ID && !SELECTED_TEKNSIK_NAVN) {
    console.log(
      'Spesifiser enten --id=<dokumentId> eller --tekniskNavn=<verdi>.'
    );
    return;
  }

  if (SELECTED_TYPE === 'mappe') {
    // Handle mappe unlink/delete
    const mappe: PartialMappe | null = SELECTED_ID
      ? await findMappe(SELECTED_ID)
      : ((await client.fetch('*[_type == "mappe" && tekniskNavn == $tn][0]', {
          tn: SELECTED_TEKNSIK_NAVN,
        })) as PartialMappe | null);

    const linkedTexts = await getTextsLinkedToMappe(mappe);
    const summary = summarizeMappe(mappe, linkedTexts, RUN_UNLINK);

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

    if ((mappe.tekster?.length ?? 0) > 0 && !FORCE) {
      console.log(
        'Mappe har linkede tekster. Bruk --force for å fjerne alle referanser.'
      );
      return;
    }

    if ((mappe.tekster?.length ?? 0) > 0) {
      await unlinkTextsFromMappe(mappe);
    }

    if (RUN_UNLINK) {
      console.log(`Mappe referanser fjernet: ${mappe._id}`);
      return;
    }

    await client.delete(mappe._id);
    console.log(`Mappe slettet: ${mappe._id}`);
    return;
  }

  if (SELECTED_TYPE === 'liste') {
    // Handle liste unlink/delete
    const liste: PartialListe | null = await findListeByIdOrTekniskNavn(
      SELECTED_ID || undefined,
      SELECTED_TEKNSIK_NAVN
    );

    const omraade = await findOmraadeById();
    const mapperIds = liste?.mapper?.map((m) => m._ref) ?? [];
    const omraadeHasRef = !!omraade?.lister?.some(
      (l) => l._ref === (liste?._id ?? '')
    );

    const summary = summarizeListe(liste, mapperIds, omraadeHasRef, RUN_UNLINK);

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

    const hasLinks = mapperIds.length > 0 || omraadeHasRef;
    if (hasLinks && !FORCE) {
      console.log(
        'Listen er linket til omraade og/eller mapper. Bruk --force for å fjerne referanser.'
      );
      return;
    }

    // Unlink from area if needed
    await unlinkListeFromOmraadeIfNeeded(liste._id, omraade);
    // Unlink mappers from liste
    await unlinkMapperFromListe(liste);

    if (RUN_UNLINK) {
      console.log(`Liste referanser fjernet: ${liste._id}`);
      return;
    }

    await client.delete(liste._id);
    console.log(`Liste slettet: ${liste._id}`);
    return;
  }

  // Handle deleting/unlinking localeText or other doc types
  const doc = await findDoc();
  const mappeId = (doc?.mappe as any)?._ref as string | undefined;
  const mappe = await findMappe(mappeId);
  const summary = summarizeDoc(doc, mappe);

  console.log('Sanity dokument (pre-action summary):');
  console.log(JSON.stringify(summary, null, 2));

  if (!doc) {
    console.log('Fant ikke dokumentet. Ingen endringer utført.');
    return;
  }

  if (DRY_RUN) {
    console.log('Dry-run aktivert: ingen endringer utført.');
    return;
  }

  if (mappeId) {
    if (!FORCE) {
      console.log(
        'Dokumentet er linket fra en mappe. Bruk --force for å fjerne referansen.'
      );
      return;
    }
    await unlinkFromMappeIfNeeded(doc, mappeId);
  }

  if (RUN_UNLINK) {
    console.log(`Dokument referanse til mappe fjernet: ${doc._id}`);
    return;
  }

  await client.delete(doc._id);
  console.log(`Dokument slettet: ${doc._id}`);
}

await runDeleteOrUnlink();
