import { isValidElement, type ReactNode } from 'react';

import type { Folder, Item, Node, Root } from 'fumadocs-core/page-tree';

export type PageTreeFilter = (page: Item) => boolean;

const normalizeFilterValue = (value: string): string =>
  value.trim().toLocaleLowerCase('nb');

interface PageNameElementProps {
  children?: ReactNode;
  dangerouslySetInnerHTML?: {
    __html?: string;
  };
}

const getNodeText = (node: ReactNode): string => {
  if (
    typeof node === 'string' ||
    typeof node === 'number' ||
    typeof node === 'bigint'
  ) {
    return String(node);
  }

  if (Array.isArray(node)) {
    return node.map(getNodeText).join(' ');
  }

  if (isValidElement<PageNameElementProps>(node)) {
    return (
      node.props.dangerouslySetInnerHTML?.__html ??
      getNodeText(node.props.children)
    );
  }

  return '';
};

export const pageMatchesFilter = (page: Item, filterValue: string): boolean => {
  const normalizedFilterValue = normalizeFilterValue(filterValue);

  if (!normalizedFilterValue) {
    return true;
  }

  return normalizeFilterValue(getNodeText(page.name)).includes(
    normalizedFilterValue
  );
};

const filterNodes = (nodes: Node[], filterPage: PageTreeFilter): Node[] => {
  const filteredNodes: Node[] = [];

  for (const node of nodes) {
    if (node.type === 'page') {
      if (filterPage(node)) {
        filteredNodes.push({ ...node });
      }
      continue;
    }

    if (node.type !== 'folder') {
      continue;
    }

    const folder = filterFolder(node, filterPage);
    if (folder) {
      filteredNodes.push(folder);
    }
  }

  return filteredNodes;
};

const filterFolder = (
  folder: Folder,
  filterPage: PageTreeFilter
): Folder | null => {
  const index =
    folder.index && filterPage(folder.index) ? { ...folder.index } : undefined;
  const children = filterNodes(folder.children, filterPage);

  if (!index && children.length === 0) {
    return null;
  }

  return {
    ...folder,
    index,
    children,
  };
};

export const filterPageTree = (
  pageTree: Root,
  filterPage: PageTreeFilter
): Root => ({
  ...pageTree,
  children: filterNodes(pageTree.children, filterPage),
  fallback: pageTree.fallback
    ? filterPageTree(pageTree.fallback, filterPage)
    : undefined,
});
