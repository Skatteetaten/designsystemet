import { Fragment, JSX, useState, type ReactNode } from 'react';
import type { Root } from 'fumadocs-core/page-tree';
import { useLocation } from 'react-router';

import { ChevronDownIcon, EyeOutlineIcon } from '@skatteetaten/ds-icons';
import { Heading } from '@skatteetaten/ds-typography';

import styles from './navigation.module.scss';

type PageTreeNode = Root['children'][number];
type FolderNode = Extract<PageTreeNode, { type: 'folder' }>;
type PageNode = Extract<PageTreeNode, { type: 'page' }>;

interface NavigationProps {
  pageTree: Root;
}

interface ExpandableItemProps {
  title: ReactNode;
  content: JSX.Element;
  isInitiallyExpanded?: boolean;
}

const ExpandableItem = ({
  title,
  content,
  isInitiallyExpanded = false,
}: ExpandableItemProps): JSX.Element => {
  const [isExpanded, setIsExpanded] = useState(isInitiallyExpanded);
  const iconClassName = isExpanded
    ? `${styles.expandIcon} ${styles.expandIconExpanded}`
    : styles.expandIcon;

  return (
    <>
      <button
        type={'button'}
        className={styles.expandable}
        aria-expanded={isExpanded}
        onClick={() => setIsExpanded((previousValue) => !previousValue)}
      >
        {title}
        <ChevronDownIcon className={iconClassName} />
      </button>
      {isExpanded ? content : null}
    </>
  );
};

const normalizePath = (path: string): string => {
  if (path === '/') {
    return '/';
  }

  return path.replace(/\/+$/, '');
};

const isActivePath = (href: string, pathname: string): boolean =>
  normalizePath(href) === normalizePath(pathname);

const folderContainsPath = (folder: FolderNode, pathname: string): boolean => {
  if (folder.index && isActivePath(folder.index.url, pathname)) {
    return true;
  }

  for (const child of folder.children) {
    if (child.type === 'page') {
      if (isActivePath(child.url, pathname)) {
        return true;
      }
    } else if (child.type === 'folder' && folderContainsPath(child, pathname)) {
      return true;
    }
  }

  return false;
};

const renderLinkItem = (
  key: string,
  href: string,
  label: ReactNode,
  pathname: string,
  shouldIndent = false
): JSX.Element => {
  const isActive = isActivePath(href, pathname);

  return (
    <li key={key}>
      <a
        href={href}
        aria-current={isActive ? 'page' : undefined}
        className={
          shouldIndent
            ? `${styles.navLink} ${styles.navLinkIndented} ${isActive ? styles.navLinkActive : ''}`.trim()
            : `${styles.navLink} ${isActive ? styles.navLinkActive : ''}`.trim()
        }
      >
        {label}
      </a>
    </li>
  );
};

const renderOverviewItem = (
  page: PageNode,
  pathname: string,
  shouldIndent = false
): JSX.Element => {
  const isActive = isActivePath(page.url, pathname);

  return (
    <li key={String(page.$id)}>
      <a
        href={page.url}
        aria-current={isActive ? 'page' : undefined}
        className={
          shouldIndent
            ? `${styles.navLinkOverview} ${styles.navLink} ${styles.navLinkIndented} ${isActive ? styles.navLinkActive : ''}`.trim()
            : `${styles.navLinkOverview} ${styles.navLink} ${isActive ? styles.navLinkActive : ''}`.trim()
        }
      >
        <EyeOutlineIcon />
        {'Oversikt'}
      </a>
    </li>
  );
};

const renderNodes = (
  nodes: PageTreeNode[],
  pathname: string,
  shouldIndent = false
): JSX.Element[] =>
  nodes
    .map((child) => renderNode(child, pathname, shouldIndent))
    .filter((child): child is JSX.Element => child !== null);

const buildFolderChildItems = (
  folder: FolderNode,
  pathname: string,
  shouldIndent = false
): JSX.Element[] => {
  const children = renderNodes(folder.children, pathname, shouldIndent);

  if (!folder.index) {
    return children;
  }

  return [
    renderOverviewItem(folder.index, pathname, shouldIndent),
    ...children,
  ];
};

const isFolderNode = (node: PageTreeNode): node is FolderNode =>
  node.type === 'folder';

const renderNode = (
  node: PageTreeNode,
  pathname: string,
  shouldIndent = false
): JSX.Element | null => {
  if (node.type === 'page') {
    return renderLinkItem(
      String(node.$id),
      node.url,
      node.name,
      pathname,
      shouldIndent
    );
  }

  if (node.type !== 'folder') {
    return null;
  }

  if (node.index && node.children.length === 0) {
    return renderLinkItem(
      String(node.$id),
      node.index.url,
      node.name,
      pathname,
      shouldIndent
    );
  }

  const childItems = buildFolderChildItems(node, pathname, true);
  const shouldExpandInitially = folderContainsPath(node, pathname);

  return (
    <li key={String(node.$id)}>
      <ExpandableItem
        title={node.name}
        isInitiallyExpanded={shouldExpandInitially}
        content={<ul className={styles.navList}>{childItems}</ul>}
      />
    </li>
  );
};

const renderFolderSection = (
  folder: FolderNode,
  pathname: string
): JSX.Element => {
  return (
    <Fragment>
      <Heading as={'h3'} level={5} className={styles.folderHeading}>
        {folder.name}
      </Heading>
      <ul className={`${styles.navList} ${styles.marginBottomM}`}>
        {buildFolderChildItems(folder, pathname)}
      </ul>
    </Fragment>
  );
};

export const Navigation = ({ pageTree }: NavigationProps): JSX.Element => {
  const { pathname } = useLocation();

  return (
    <div className={styles.navCard}>
      <Heading as={'h2'} className={styles.srOnly}>
        {'Sidemeny'}
      </Heading>
      {pageTree.children.filter(isFolderNode).map((folder) => (
        <Fragment key={String(folder.$id)}>
          {renderFolderSection(folder, pathname)}
        </Fragment>
      ))}
    </div>
  );
};
