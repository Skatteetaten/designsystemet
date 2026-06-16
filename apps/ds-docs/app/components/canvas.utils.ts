import { ComponentType } from 'react';

export interface ExampleModule {
  default: ComponentType;
}

export interface ExampleDescriptor {
  codeFiles: ExampleFileDescriptor[];
  key: string;
  label: string;
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

const getLanguageFromFileName = (fileName: string): string => {
  if (fileName.endsWith('.tsx')) {
    return 'tsx';
  }

  if (fileName.endsWith('.ts')) {
    return 'ts';
  }

  if (fileName.endsWith('.scss')) {
    return 'scss';
  }

  if (fileName.endsWith('.css')) {
    return 'css';
  }

  if (fileName.endsWith('.json')) {
    return 'json';
  }

  if (fileName.endsWith('.mdx')) {
    return 'mdx';
  }

  return 'text';
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
  return codeEntries
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
    })
    .sort((a, b) => a.fileName.localeCompare(b.fileName, 'nb'));
};

const createExample = (
  label: string,
  key: string,
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
    key,
    label,
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
        stripFolderPrefix(moduleEntries, folderName),
        stripFolderPrefix(codeEntries, folderName)
      );

      return example ? [example] : [];
    });
  }

  const singleExample = createExample(
    rootExampleLabel,
    normalizedPath,
    moduleEntries,
    codeEntries
  );

  return singleExample ? [singleExample] : [];
};
