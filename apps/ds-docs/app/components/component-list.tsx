import { JSX, useEffect, useState } from 'react';

import { NavigationTile } from '@skatteetaten/ds-navigation';

import browserCollections from '../../.source/browser';
import { getPublicUrl } from '../../lib/public-url';
import { PublicImage } from './public-image';
import { useRouterLinkClick } from './router-link';

import styles from './component-list.module.scss';

interface ComponentEntry {
  icon?: string;
  path: string;
  title: string;
  titleWithBreaks: string;
  url: string;
}

interface DocModule {
  frontmatter?: {
    icon?: string;
    title?: string;
  };
}

const SOFT_HYPHEN = '\u00AD';
const nbCollator = new Intl.Collator('nb');
const compareByTitle = (left: ComponentEntry, right: ComponentEntry): number =>
  nbCollator.compare(left.title, right.title);

const rawDocs = browserCollections.docs.raw;

const componentEntries = Object.keys(rawDocs)
  .map((path) => path.replace(/^\.\//, ''))
  .filter(
    (path) =>
      path.startsWith('byggeklosser/komponenter/') &&
      path !== 'byggeklosser/komponenter/index.mdx'
  )
  .sort((left, right) => nbCollator.compare(left, right));

const toLabel = (path: string): string =>
  path
    .replace(/^komponenter\//, '')
    .replace(/\.mdx$/, '')
    .replace(/([a-z])([A-Z])/g, '$1 $2')
    .replace(/([a-zA-Z])(\d)/g, '$1 $2')
    .replace(/\b\w/g, (character) => character.toUpperCase());

const withLogicalHyphenBreaks = (title: string): string =>
  title
    .replace(/([a-z])([A-Z])/g, `$1${SOFT_HYPHEN}$2`)
    .replace(/([a-zA-Z])(\d)/g, `$1${SOFT_HYPHEN}$2`)
    .replace(/(\d)([a-zA-Z])/g, `$1${SOFT_HYPHEN}$2`);

const toComponentUrl = (path: string): string =>
  `/${path.replace(/\.mdx$/, '')}`;

const toEntry = (
  path: string,
  overrides?: {
    icon?: string;
    title?: string;
  }
): ComponentEntry => {
  const title = overrides?.title ?? toLabel(path);

  return {
    icon: overrides?.icon,
    path,
    title,
    titleWithBreaks: withLogicalHyphenBreaks(title),
    url: toComponentUrl(path),
  };
};

const withFrontmatter = (
  entry: ComponentEntry,
  doc: DocModule | null
): ComponentEntry => {
  return toEntry(entry.path, {
    icon: doc?.frontmatter?.icon,
    title: doc?.frontmatter?.title ?? entry.title,
  });
};

const getDocImport = (path: string): (() => Promise<DocModule>) | undefined => {
  return (rawDocs[path] ?? rawDocs[`./${path}`]) as
    | (() => Promise<DocModule>)
    | undefined;
};

const defaultEntries: ComponentEntry[] = componentEntries.map((path) =>
  toEntry(path)
);

const loadEntriesWithFrontmatter = async (
  entries: ComponentEntry[]
): Promise<ComponentEntry[]> => {
  const loadedEntries = await Promise.allSettled(
    entries.map(async (entry) => {
      const loadDoc = getDocImport(entry.path);
      const doc = loadDoc ? await loadDoc() : null;

      return withFrontmatter(entry, doc);
    })
  );

  return loadedEntries
    .map((result, index) =>
      result.status === 'fulfilled' ? result.value : entries[index]
    )
    .sort(compareByTitle);
};

export const ComponentList = (): JSX.Element => {
  const [entries, setEntries] = useState<ComponentEntry[]>();

  useEffect((): (() => void) => {
    let isMounted = true;

    const loadTitles = async (): Promise<void> => {
      const loadedEntries = await loadEntriesWithFrontmatter(defaultEntries);

      if (!isMounted) {
        return;
      }

      setEntries(loadedEntries);
    };

    void loadTitles();

    return (): void => {
      isMounted = false;
    };
  }, []);

  return (
    <nav aria-label={'Liste over alle komponenter'}>
      {entries ? (
        <ul className={styles.list}>
          {entries.map((entry) => (
            <ComponentTile key={entry.url} entry={entry} />
          ))}
        </ul>
      ) : null}
    </nav>
  );
};

interface ComponentTileProps {
  entry: ComponentEntry;
}

const ComponentTile = ({ entry }: ComponentTileProps): JSX.Element => {
  const handleClick = useRouterLinkClick(entry.url);

  return (
    <li>
      <NavigationTile
        title={entry.titleWithBreaks}
        href={getPublicUrl(entry.url)}
        titleAs={'h3'}
        lang={'nb'}
        description={
          entry.icon ? (
            <PublicImage src={entry.icon} className={styles.tileIcon} />
          ) : undefined
        }
        size={'medium'}
        className={styles.tile}
        classNames={{
          title: styles.tileTitle,
          description: styles.tileDescription,
        }}
        onClick={handleClick}
      />
    </li>
  );
};
