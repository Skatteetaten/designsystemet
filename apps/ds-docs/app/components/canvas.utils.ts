import { ComponentType } from 'react';

export interface ExampleModule {
  default: ComponentType;
}

export interface ExampleDescriptor {
  codeFiles: ExampleFileDescriptor[];
  entryFileName: string;
  key: string;
  label: string;
  urlPath: string;
  Component: ComponentType;
}

export interface ExampleFileDescriptor {
  fileName: string;
  key: string;
  language: string;
  source: string;
  tabValue: string;
}

interface ModuleEntry {
  path: string;
  Component: ComponentType;
}

interface CodeEntry {
  path: string;
  source: string;
}

interface OrderModule {
  default: string[];
}

const exampleModules = import.meta.glob<ExampleModule>(
  '../../content/examples/**/*.tsx',
  { eager: true }
);

const exampleCodeSources = import.meta.glob<string>(
  '../../content/examples/**/*.{css,jsx,json,md,mdx,scss,ts,tsx}',
  { eager: true, import: 'default', query: '?raw' }
);

const exampleOrderModules = import.meta.glob<OrderModule>(
  '../../content/examples/**/_order.json',
  { eager: true }
);

/**
 * Resolves the example folder ordering for a given prefix.
 *
 * - Listed folders render in the given order.
 * - Unlisted folders sort alphabetically after the listed ones.
 * - No _order.json → fully alphabetical.
 */
const getOrderForPrefix = (prefix: string): string[] => {
  const orderModule = exampleOrderModules[`${prefix}_order.json`];

  return orderModule?.default ?? [];
};

const sortFoldersByOrder = (folders: string[], order: string[]): string[] => {
  const orderIndex = new Map(order.map((name, index) => [name, index]));

  return [...folders].sort((a, b) => {
    const aIndex = orderIndex.get(a);
    const bIndex = orderIndex.get(b);

    if (aIndex !== undefined && bIndex !== undefined) {
      return aIndex - bIndex;
    }

    if (aIndex !== undefined) {
      return -1;
    }

    if (bIndex !== undefined) {
      return 1;
    }

    return a.localeCompare(b, 'nb');
  });
};

const toExampleLabel = (fileName: string): string => {
  return fileName
    .replace(/\.[^.]+$/, '')
    .split(/[-_/]/)
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ');
};

const languageByExtension: Record<string, string> = {
  css: 'css',
  jsx: 'jsx',
  json: 'json',
  md: 'markdown',
  mdx: 'mdx',
  scss: 'scss',
  ts: 'ts',
  tsx: 'tsx',
};

const getLanguageFromFileName = (fileName: string): string => {
  const extension = fileName.slice(fileName.lastIndexOf('.') + 1);

  return languageByExtension[extension] ?? 'text';
};

const getFileNameFromPath = (path: string): string => {
  const segments = path.split('/').filter(Boolean);

  return segments.at(-1) ?? path;
};

const getDirectChildSegment = (
  path: string
): { isDirectChildFile: boolean; segment: string | null } => {
  const segments = path.split('/').filter(Boolean);

  if (segments.length === 1) {
    return { isDirectChildFile: true, segment: null };
  }

  return {
    isDirectChildFile: false,
    segment: segments[0] ?? null,
  };
};

const toTabValue = (value: string): string => {
  const normalizedValue = value.replace(/[^A-Za-z0-9_.:-]/g, '-');

  return /^[A-Za-z]/.test(normalizedValue)
    ? normalizedValue
    : `file-${normalizedValue}`;
};

const getCodeFiles = (
  codeEntries: CodeEntry[],
  filePaths: string[]
): ExampleFileDescriptor[] => {
  const codeFiles = codeEntries
    .filter((entry) => filePaths.includes(entry.path))
    .map((entry) => {
      const fileName = getFileNameFromPath(entry.path);

      return {
        fileName,
        key: entry.path,
        language: getLanguageFromFileName(fileName),
        source: entry.source,
        tabValue: toTabValue(entry.path),
      };
    });
  const exampleFile = codeFiles.find((file) => file.fileName === 'example.tsx');
  const otherFiles = codeFiles
    .filter((file) => file !== exampleFile)
    .sort((a, b) => a.fileName.localeCompare(b.fileName, 'nb'));

  return exampleFile ? [exampleFile, ...otherFiles] : otherFiles;
};

const createExample = (
  label: string,
  key: string,
  urlPath: string,
  moduleEntries: ModuleEntry[],
  codeEntries: CodeEntry[]
): ExampleDescriptor | null => {
  const renderEntries = moduleEntries.filter(
    (entry) => getDirectChildSegment(entry.path).isDirectChildFile
  );

  if (renderEntries.length !== 1) {
    return null;
  }

  const codeFilePaths = codeEntries
    .filter((entry) => getDirectChildSegment(entry.path).isDirectChildFile)
    .map((entry) => entry.path);

  return {
    codeFiles: getCodeFiles(codeEntries, codeFilePaths),
    entryFileName: renderEntries[0].path,
    key,
    label,
    urlPath,
    Component: renderEntries[0].Component,
  };
};

const getModuleEntries = (prefix: string): ModuleEntry[] => {
  return Object.entries(exampleModules)
    .filter(([path]) => path.startsWith(prefix))
    .map(([path, module]) => ({
      path: path.slice(prefix.length),
      Component: module.default,
    }));
};

const getCodeEntries = (prefix: string): CodeEntry[] => {
  return Object.entries(exampleCodeSources)
    .filter(([path]) => path.startsWith(prefix))
    .filter(([path]) => !path.endsWith('/_order.json'))
    .map(([path, source]) => ({
      path: path.slice(prefix.length),
      source,
    }));
};

const getDirectChildFolders = (
  moduleEntries: ModuleEntry[],
  codeEntries: CodeEntry[]
): string[] => {
  return Array.from(
    new Set(
      [...moduleEntries, ...codeEntries]
        .map((entry) => getDirectChildSegment(entry.path))
        .filter((entry) => !entry.isDirectChildFile)
        .flatMap((entry) => (entry.segment ? [entry.segment] : []))
    )
  ).sort((a, b) => a.localeCompare(b, 'nb'));
};

const stripFolderPrefix = <T extends { path: string }>(
  entries: T[],
  folderName: string
): T[] => {
  return entries
    .filter((entry) => entry.path.startsWith(`${folderName}/`))
    .map((entry) => ({
      ...entry,
      path: entry.path.slice(folderName.length + 1),
    }));
};

export const getExamples = (examplesPath: string): ExampleDescriptor[] => {
  const normalizedPath = examplesPath.replace(/^\/+|\/+$/g, '');
  const prefix = `../../content/examples/${normalizedPath}/`;
  const rootExampleLabel = toExampleLabel(
    normalizedPath.split('/').filter(Boolean).at(-1) ?? normalizedPath
  );
  const moduleEntries = getModuleEntries(prefix);
  const codeEntries = getCodeEntries(prefix);
  const directChildFolders = getDirectChildFolders(moduleEntries, codeEntries);
  const orderedFolders = sortFoldersByOrder(
    directChildFolders,
    getOrderForPrefix(prefix)
  );

  if (orderedFolders.length > 0) {
    return orderedFolders.flatMap((folderName) => {
      const example = createExample(
        toExampleLabel(folderName),
        folderName,
        `${normalizedPath}/${folderName}`,
        stripFolderPrefix(moduleEntries, folderName),
        stripFolderPrefix(codeEntries, folderName)
      );

      return example ? [example] : [];
    });
  }

  const singleExample = createExample(
    rootExampleLabel,
    normalizedPath,
    normalizedPath,
    moduleEntries,
    codeEntries
  );

  return singleExample ? [singleExample] : [];
};

/**
 * Resolver ett enkelt eksempel fra en full URL-sti (uten "/example/"-prefix).
 *
 * - Prøver først stien som et enkelt-eksempel-mappe.
 * - Faller tilbake til å tolke siste segment som eksempelnøkkel i foreldremappen.
 */
export const getExampleByPath = (
  fullPath: string
): ExampleDescriptor | null => {
  const normalizedPath = fullPath.replace(/^\/+|\/+$/g, '');

  if (!normalizedPath) {
    return null;
  }

  const asSingle = getExamples(normalizedPath);

  if (asSingle.length === 1 && asSingle[0].urlPath === normalizedPath) {
    return asSingle[0];
  }

  const segments = normalizedPath.split('/');

  if (segments.length < 2) {
    return null;
  }

  const parentPath = segments.slice(0, -1).join('/');
  const key = segments.at(-1);
  const parentExamples = getExamples(parentPath);

  return parentExamples.find((example) => example.key === key) ?? null;
};
