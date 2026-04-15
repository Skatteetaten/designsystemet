import { Children, JSX, ReactNode, isValidElement } from 'react';

import { LinkGroup } from '@skatteetaten/ds-buttons';
import { Heading, Paragraph } from '@skatteetaten/ds-typography';

import type { Route } from './+types/docs';
import browserCollections from '../../.source/browser';
import { getMdxComponents } from '../mdx-components';

import styles from './docs.module.scss';

// interface DocsContentProps {
//   // TODO: Ta i bruk når vi kan lenke til andre markdown-filer i MDX-innholdet
//   // markdownUrl: string;
//   path: string;
// }

interface ClientLoaderProps {
  parentTitle: string | null;
  markdownUrl: string;
  path: string;
}

interface DocsContentProps {
  parentTitle: string | null;
}

interface DocsPageProps {
  parentTitle?: string | null;
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

const getParentIndexPath = (path: string): string | null => {
  const segments = path.split('/');

  if (path === 'index.mdx') {
    return null;
  }

  if (path.endsWith('/index.mdx')) {
    return segments.length > 2
      ? `${segments.slice(0, -2).join('/')}/index.mdx`
      : 'index.mdx';
  }

  return segments.length > 1
    ? `${segments.slice(0, -1).join('/')}/index.mdx`
    : null;
};

const getDocImport = (
  path: string
): (() => Promise<{ frontmatter: { title?: string } }>) | undefined => {
  return (browserCollections.docs.raw[path] ??
    browserCollections.docs.raw[`./${path}`]) as
    | (() => Promise<{ frontmatter: { title?: string } }>)
    | undefined;
};

const getParentTitleFromPath = async (path: string): Promise<string | null> => {
  const parentIndexPath = getParentIndexPath(path);

  if (!parentIndexPath) {
    return null;
  }

  const loadDoc = getDocImport(parentIndexPath);
  const parentDoc = loadDoc ? await loadDoc() : null;

  return parentDoc?.frontmatter.title ?? null;
};
const docsContentLoader =
  browserCollections.docs.createClientLoader<DocsContentProps>({
    component({ frontmatter, toc, default: Mdx }, { parentTitle }) {
      const tocItems = toc.filter((item) => item.depth > 1) as TocItem[];

      return (
        <div className={styles.layout}>
          <div className={styles.content}>
            <title>{frontmatter.title}</title>
            <meta name={'description'} content={frontmatter.description} />
            <div className={styles.headingWrapper}>
              <div>
                {parentTitle && (
                  <Paragraph variant={'ingress'}>{parentTitle}</Paragraph>
                )}
                <Heading as={'h1'}>{frontmatter.title}</Heading>
              </div>
              {frontmatter.icon && (
                <img
                  src={frontmatter.icon}
                  className={styles.mdxIcon}
                  aria-hidden
                />
              )}
            </div>
            {frontmatter.description}
            <div>
              <Mdx components={getMdxComponents()} />
            </div>
          </div>
          {tocItems.length > 0 && (
            <aside className={styles.toc} aria-label={'Innhold'}>
              <Heading as={'h4'}>{'Innhold'}</Heading>
              <LinkGroup variant={'anchors'}>
                {tocItems.map((item) => (
                  <LinkGroup.Link key={item.url} href={item.url}>
                    {toTocTitle(item.title)}
                  </LinkGroup.Link>
                ))}
              </LinkGroup>
            </aside>
          )}
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

export async function clientLoader({
  params,
}: Route.ClientLoaderArgs): Promise<ClientLoaderProps> {
  const path = getDocPath(params['*']);
  if (!path) {
    throw new Response('Not found', { status: 404 });
  }

  return {
    parentTitle: await getParentTitleFromPath(path),
    path,
    markdownUrl: '',
  };
}

export const DocsPage = ({ parentTitle, path }: DocsPageProps): JSX.Element => {
  return (
    <>
      {docsContentLoader.useContent(path, {
        parentTitle: parentTitle ?? null,
      })}
    </>
  );
};

export default function Page({
  loaderData,
}: Route.ComponentProps): JSX.Element {
  return <DocsPage {...loaderData} />;
}
