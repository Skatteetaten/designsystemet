import { Children, JSX, ReactNode, isValidElement } from 'react';
import { useLocation } from 'react-router';

import { LinkGroup } from '@skatteetaten/ds-buttons';
import { Heading, Paragraph } from '@skatteetaten/ds-typography';

import browserCollections from '../../.source/browser';
import { InlineSurvey } from '../components/inline-survey';
import { PublicImage } from '../components/public-image';
import { getMdxComponents } from '../mdx-components';
import { useRootLoaderData } from '../root';
import type { Route } from './+types/docs';
import { getParentTitle } from './docs.utils';

import styles from './docs.module.scss';

interface ClientLoaderProps {
  markdownUrl: string;
  path: string;
}

interface DocsContentProps {
  parentTitle: ReactNode | null;
  path: string;
}

interface DocsPageProps {
  markdownUrl: string;
  path: string;
}

interface TocItem {
  title: string;
  url: string;
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

const observeHeight =
  (property: '--toc-height' | '--survey-height') =>
  (element: HTMLElement | null): (() => void) | void => {
    if (!element) return;

    const layout = element.parentElement;
    const updateHeight = (): void => {
      const measuredElement =
        property === '--toc-height' ? element.querySelector('nav') : element;
      const height = `${measuredElement?.offsetHeight ?? 0}px`;
      if (layout?.style.getPropertyValue(property) !== height) {
        layout?.style.setProperty(property, height);
      }
    };
    updateHeight();

    const observer = new ResizeObserver(updateHeight);
    observer.observe(element);
    window.addEventListener('resize', updateHeight);
    window.addEventListener('scroll', updateHeight, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener('resize', updateHeight);
      window.removeEventListener('scroll', updateHeight);
      layout?.style.removeProperty(property);
    };
  };

const docsContentLoader =
  browserCollections.docs.createClientLoader<DocsContentProps>({
    component({ frontmatter, toc, default: Mdx }, { parentTitle, path }) {
      const tocItems =
        frontmatter.tocItems ??
        (toc.filter((item) => item.depth === 2) as TocItem[]);
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
                  <PublicImage
                    src={frontmatter.icon}
                    className={styles.mdxIcon}
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
            <aside
              ref={observeHeight('--toc-height')}
              className={styles.sideContent}
            >
              <nav
                className={styles.navContent}
                aria-label={'Innholdsfortegnelse'}
              >
                <Heading as={'h3'} level={4}>
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
            </aside>
          )}
          <div className={styles.mdxContent}>
            <Mdx components={getMdxComponents()} />
          </div>
          {showToc && (
            <div
              ref={observeHeight('--survey-height')}
              className={styles.surveyContent}
            >
              <InlineSurvey
                key={path}
                slug={'skatteetaten/designsystemet-skattekartet'}
              />
            </div>
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

  return <>{docsContentLoader.useContent(path, { parentTitle, path })}</>;
};

export default function Page({
  loaderData,
}: Route.ComponentProps): JSX.Element {
  return <DocsPage {...loaderData} />;
}
