import { Children, JSX, ReactNode, isValidElement } from 'react';
import { useLocation } from 'react-router';

import { LinkGroup } from '@skatteetaten/ds-buttons';
import { Heading, Paragraph } from '@skatteetaten/ds-typography';

import type { Route } from './+types/docs';
import { getParentTitle } from './docs.utils';
import browserCollections from '../../.source/browser';
import { getMdxComponents } from '../mdx-components';
import { useRootLoaderData } from '../root';

import styles from './docs.module.scss';

interface ClientLoaderProps {
  markdownUrl: string;
  path: string;
}

interface DocsContentProps {
  parentTitle: ReactNode | null;
}

interface DocsPageProps {
  markdownUrl: string;
  path: string;
}

interface TocItem {
  title: string;
  url: string;
  depth: number;
}

const toTocTitle = (title: ReactNode): string => {
  if (typeof title === 'string' || typeof title === 'number') {
    return String(title);
  }

  if (Array.isArray(title)) {
    return title.map(toTocTitle).join('');
  }

  if (isValidElement(title)) {
    return toTocTitle((title.props as { children?: ReactNode }).children);
  }

  return Children.toArray(title).map(toTocTitle).join('');
};

const docsContentLoader =
  browserCollections.docs.createClientLoader<DocsContentProps>({
    component({ frontmatter, toc, default: Mdx }, { parentTitle }) {
      const tocItems = toc.filter((item) => item.depth === 2) as TocItem[];
      const showToc = !frontmatter.hideToc && tocItems.length > 0;

      return (
        <div
          className={`${styles.contentWrapper} ${showToc ? styles.contentWrapper_withToc : ''}`.trim()}
        >
          <div className={styles.headingContent}>
            <title>{frontmatter.title}</title>
            <meta name={'description'} content={frontmatter.description} />
            {frontmatter.title && (
              <div className={styles.headingWrapper}>
                <Heading as={'h2'} level={1} hasSpacing>
                  {parentTitle && (
                    <span className={styles.parentTitle}>
                      {parentTitle}&nbsp;
                    </span>
                  )}
                  {frontmatter.title}
                </Heading>
                {frontmatter.icon && (
                  <img
                    src={frontmatter.icon}
                    className={styles.mdxIcon}
                    alt={''}
                    aria-hidden
                  />
                )}
              </div>
            )}
            {frontmatter.description && (
              <Paragraph variant={'ingress'}>
                {frontmatter.description}
              </Paragraph>
            )}
          </div>
          {/* skjermleser må ha tidlig tilgang til innholdsfortegnelsen */}
          {showToc && (
            <nav
              className={styles.navContent}
              aria-label={'Innholdsfortegnelse'}
            >
              <Heading as={'h2'} level={4}>
                {'Innhold'}
              </Heading>
              <LinkGroup variant={'anchors'}>
                {tocItems.map((item) => (
                  <LinkGroup.Link key={item.url} href={item.url}>
                    {toTocTitle(item.title)}
                  </LinkGroup.Link>
                ))}
              </LinkGroup>
            </nav>
          )}
          <div className={styles.mdxContent}>
            <Mdx components={getMdxComponents()} />
          </div>
        </div>
      );
    },
  });
const docPaths = new Set(
  Object.keys(browserCollections.docs.raw).map((path) =>
    path.startsWith('./') ? path.slice(2) : path
  )
);

const getDocPath = (slug?: string): string | null => {
  const normalizedSlug = slug?.replace(/^\/|\/$/g, '') ?? '';
  const candidates = normalizedSlug
    ? [`${normalizedSlug}.mdx`, `${normalizedSlug}/index.mdx`]
    : ['index.mdx'];
  return candidates.find((candidate) => docPaths.has(candidate)) ?? null;
};

export function clientLoader({
  params,
}: Route.ClientLoaderArgs): ClientLoaderProps {
  const path = getDocPath(params['*']);
  if (!path) {
    throw new Response('Not found', { status: 404 });
  }

  return {
    path,
    markdownUrl: '',
  };
}

export const DocsPage = ({ path }: DocsPageProps): JSX.Element => {
  const { pathname } = useLocation();
  const { pageTree } = useRootLoaderData();
  const parentTitle = getParentTitle(pathname, pageTree);

  return <>{docsContentLoader.useContent(path, { parentTitle })}</>;
};

export default function Page({
  loaderData,
}: Route.ComponentProps): JSX.Element {
  return <DocsPage {...loaderData} />;
}
