import {
  Fragment,
  JSX,
  useEffect,
  useState,
  type MouseEvent,
  type ReactNode,
} from 'react';
import { Link, useLocation } from 'react-router';

import type { Root } from 'fumadocs-core/page-tree';

import { ChevronDownIcon, EyeOutlineIcon } from '@skatteetaten/ds-icons';
import { Heading, Paragraph } from '@skatteetaten/ds-typography';

import { NavigationFilter } from './navigation-filter';
import {
  filterPageTree,
  pageMatchesFilter,
  type PageTreeFilter,
} from './navigation.utils';

import styles from './navigation.module.scss';

type PageTreeNode = Root['children'][number];
type FolderNode = Extract<PageTreeNode, { type: 'folder' }>;
type PageNode = Extract<PageTreeNode, { type: 'page' }>;

interface NavigationProps {
  pageTree: Root;
  filterPage?: PageTreeFilter;
  onNavigate?: () => void;
}

interface ExpandableItemProps {
  title: ReactNode;
  content: JSX.Element;
  activePath?: string;
  expandByDefault?: boolean;
}

const ExpandableItem = ({
  title,
  content,
  activePath,
  expandByDefault = false,
}: ExpandableItemProps): JSX.Element => {
  const [isExpanded, setIsExpanded] = useState(
    activePath !== undefined || expandByDefault
  );
  const iconClassName = isExpanded
    ? `${styles.expandIcon} ${styles.expandIconExpanded}`
    : styles.expandIcon;

  useEffect(() => {
    setIsExpanded(activePath !== undefined || expandByDefault);
  }, [activePath, expandByDefault]);

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
      <Link
        to={href}
        aria-current={isActive ? 'page' : undefined}
        className={
          shouldIndent
            ? `${styles.navLink} ${styles.navLinkIndented} ${isActive ? styles.navLinkActive : ''}`.trim()
            : `${styles.navLink} ${isActive ? styles.navLinkActive : ''}`.trim()
        }
      >
        {label}
      </Link>
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
      <Link
        to={page.url}
        aria-current={isActive ? 'page' : undefined}
        className={
          shouldIndent
            ? `${styles.navLinkOverview} ${styles.navLink} ${styles.navLinkIndented} ${isActive ? styles.navLinkActive : ''}`.trim()
            : `${styles.navLinkOverview} ${styles.navLink} ${isActive ? styles.navLinkActive : ''}`.trim()
        }
      >
        <EyeOutlineIcon />
        {'Oversikt'}
      </Link>
    </li>
  );
};

const renderNodes = (
  nodes: PageTreeNode[],
  pathname: string,
  shouldIndent = false,
  expandFolders = false
): JSX.Element[] =>
  nodes
    .map((child) => renderNode(child, pathname, shouldIndent, expandFolders))
    .filter((child): child is JSX.Element => child !== null);

const buildFolderChildItems = (
  folder: FolderNode,
  pathname: string,
  shouldIndent = false,
  expandFolders = false
): JSX.Element[] => {
  const children = renderNodes(
    folder.children,
    pathname,
    shouldIndent,
    expandFolders
  );

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
  shouldIndent = false,
  expandFolders = false
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

  const childItems = buildFolderChildItems(node, pathname, true, expandFolders);
  const containsActivePath = folderContainsPath(node, pathname);

  return (
    <li key={String(node.$id)}>
      <ExpandableItem
        title={node.name}
        activePath={containsActivePath ? pathname : undefined}
        expandByDefault={expandFolders}
        content={<ul className={styles.navList}>{childItems}</ul>}
      />
    </li>
  );
};

const renderFolderSection = (
  folder: FolderNode,
  pathname: string,
  expandFolders = false
): JSX.Element => {
  return (
    <Fragment>
      <Heading as={'h3'} level={5} className={styles.folderHeading}>
        {folder.name}
      </Heading>
      <ul className={`${styles.navList} ${styles.marginBottomM}`}>
        {buildFolderChildItems(folder, pathname, false, expandFolders)}
      </ul>
    </Fragment>
  );
};

export const Navigation = ({
  pageTree,
  filterPage = (): boolean => true,
  onNavigate,
}: NavigationProps): JSX.Element => {
  const { pathname } = useLocation();
  const [filterValue, setFilterValue] = useState('');
  const isFiltering = filterValue.trim().length > 0;
  const filteredPageTree = filterPageTree(
    pageTree,
    (page) => filterPage(page) && pageMatchesFilter(page, filterValue)
  );
  const handleNavigationClick = (event: MouseEvent<HTMLDivElement>): void => {
    if (event.target instanceof Element && event.target.closest('a')) {
      setFilterValue('');
      onNavigate?.();
    }
  };

  return (
    <div className={styles.navCard} onClick={handleNavigationClick}>
      <Heading as={'h2'} className={styles.srOnly}>
        {'Sidemeny'}
      </Heading>
      <NavigationFilter value={filterValue} onChange={setFilterValue} />
      {filteredPageTree.children.filter(isFolderNode).map((folder) => (
        <Fragment key={String(folder.$id)}>
          {renderFolderSection(folder, pathname, isFiltering)}
        </Fragment>
      ))}
      {isFiltering && filteredPageTree.children.length === 0 ? (
        <Paragraph>{'Ingen treff i sidemenyen.'}</Paragraph>
      ) : null}
    </div>
  );
};
