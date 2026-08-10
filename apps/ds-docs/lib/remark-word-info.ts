import { existsSync, readdirSync } from 'node:fs';
import { basename, extname, resolve } from 'node:path';

interface TextNode {
  type: 'text';
  value: string;
}

interface MdxJsxAttributeNode {
  type: 'mdxJsxAttribute';
  name: string;
  value: string;
}

interface ParentNode {
  type: string;
  children: RemarkNode[];
}

interface LinkNode extends ParentNode {
  type: 'link';
  url: string;
}

interface MdxJsxTextElementNode {
  type: 'mdxJsxTextElement';
  name: string;
  attributes: MdxJsxAttributeNode[];
  children: TextNode[];
}

interface RootNode extends ParentNode {
  type: 'root';
}

interface VFileLike {
  path?: string | null;
}

type RemarkNode = TextNode | ParentNode | LinkNode | MdxJsxTextElementNode;

const SUPPORTED_EXPLANATION_EXTENSIONS = new Set(['.mdx', '.md']);
const WORD_INFO_PREFIX = 'wordinfo:';
const SKIPPED_PARENT_TYPES = new Set([
  'code',
  'definition',
  'inlineCode',
  'linkReference',
  'mdxJsxFlowElement',
  'mdxJsxTextElement',
]);
const WORD_INFO_DIRECTORY_CANDIDATES = [
  resolve(process.cwd(), 'content/wordinfo'),
  resolve(process.cwd(), 'apps/ds-docs/content/wordinfo'),
];

const isRecord = (value: unknown): value is Record<string, unknown> => {
  return typeof value === 'object' && value !== null;
};

const isTextNode = (node: unknown): node is TextNode => {
  return (
    isRecord(node) && node.type === 'text' && typeof node.value === 'string'
  );
};

const isParentNode = (node: unknown): node is ParentNode => {
  return (
    isRecord(node) &&
    typeof node.type === 'string' &&
    Array.isArray(node.children)
  );
};

const isLinkNode = (node: unknown): node is LinkNode => {
  return (
    isRecord(node) &&
    node.type === 'link' &&
    typeof node.url === 'string' &&
    Array.isArray(node.children)
  );
};

const getNodeText = (node: RemarkNode): string => {
  if (isTextNode(node)) {
    return node.value;
  }

  if (isParentNode(node)) {
    return node.children.map(getNodeText).join('');
  }

  return '';
};

const loadWordInfoEntries = (): ReadonlySet<string> => {
  const wordInfoDirectory = WORD_INFO_DIRECTORY_CANDIDATES.find((directory) =>
    existsSync(directory)
  );

  if (!wordInfoDirectory) {
    return new Set();
  }

  const entries = new Set<string>();

  for (const entry of readdirSync(wordInfoDirectory, { withFileTypes: true })) {
    if (!entry.isFile()) {
      continue;
    }

    const extension = extname(entry.name);

    if (!SUPPORTED_EXPLANATION_EXTENSIONS.has(extension)) {
      continue;
    }

    const key = basename(entry.name, extension);
    entries.add(key);
  }

  return entries;
};

const createWordInfoElement = (
  label: string,
  wordInfoKey: string
): MdxJsxTextElementNode => {
  return {
    type: 'mdxJsxTextElement',
    name: 'WordInfoTerm',
    attributes: [
      {
        type: 'mdxJsxAttribute',
        name: 'wordInfoKey',
        value: wordInfoKey,
      },
    ],
    children: [{ type: 'text', value: label }],
  };
};

const replaceLinkNode = (
  node: LinkNode,
  wordInfoEntries: ReadonlySet<string>,
  filePath: string
): RemarkNode => {
  if (!node.url.startsWith(WORD_INFO_PREFIX)) {
    return node;
  }

  const label = node.children.map(getNodeText).join('').trim();
  const wordInfoKey = node.url.slice(WORD_INFO_PREFIX.length).trim();

  if (!wordInfoKey) {
    throw new Error(
      `WordInfo-lenken mangler nøkkel i ${filePath}. Bruk formatet [tekst](wordinfo:filnavn).`
    );
  }

  if (!wordInfoEntries.has(wordInfoKey)) {
    throw new Error(
      `Fant ikke WordInfo-forklaring for "${label}" (${wordInfoKey}) i ${filePath}. Legg til ${wordInfoKey}.mdx i apps/ds-docs/content/word-info/.`
    );
  }

  return createWordInfoElement(label, wordInfoKey);
};

const transformNode = (
  node: ParentNode,
  wordInfoEntries: ReadonlySet<string>,
  filePath: string
): void => {
  if (SKIPPED_PARENT_TYPES.has(node.type)) {
    return;
  }

  node.children = node.children.flatMap((child) => {
    if (isLinkNode(child)) {
      return [replaceLinkNode(child, wordInfoEntries, filePath)];
    }

    if (isParentNode(child)) {
      transformNode(child, wordInfoEntries, filePath);
    }

    return [child];
  });
};

export const remarkWordInfo = () => {
  const wordInfoEntries = loadWordInfoEntries();

  return (tree: RootNode, file: VFileLike): void => {
    transformNode(tree, wordInfoEntries, file.path ?? 'ukjent fil');
  };
};
