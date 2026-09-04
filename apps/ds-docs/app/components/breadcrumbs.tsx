import { JSX } from 'react';
import { useLocation } from 'react-router';

import { useBreadcrumb } from 'fumadocs-core/breadcrumb';
import type { Root } from 'fumadocs-core/page-tree';

import { Breadcrumbs } from '@skatteetaten/ds-navigation';

import { useRouterLinkClick } from './router-link';

import styles from './breadcrumbs.module.scss';

interface DocsBreadcrumbsProps {
  pageTree: Root;
}

interface RouterBreadcrumbsLinkProps {
  href: string;
  children: string;
}

const skatteKartetBreadcrumb = {
  name: 'Skattekartet',
  url: 'https://www.skatteetaten.no/skattekartet',
};

const RouterBreadcrumbsLink = ({
  href,
  children,
}: RouterBreadcrumbsLinkProps): JSX.Element => {
  const handleClick = useRouterLinkClick(href);

  return (
    <Breadcrumbs.Link href={href} onClick={handleClick}>
      {children}
    </Breadcrumbs.Link>
  );
};

export const DocsBreadcrumbs = ({
  pageTree,
}: DocsBreadcrumbsProps): JSX.Element => {
  const { pathname } = useLocation();
  const breadcrumbItems = useBreadcrumb(pathname, pageTree, {
    includePage: true,
  });

  const docsItems =
    pathname === '/'
      ? [{ name: 'Designsystemet' }]
      : breadcrumbItems[0]?.url !== '/'
        ? [{ name: 'Designsystemet', url: '/' }, ...breadcrumbItems]
        : breadcrumbItems;
  const items = [skatteKartetBreadcrumb, ...docsItems];

  return (
    <Breadcrumbs className={styles.breadcrumbs}>
      <Breadcrumbs.List>
        {items.map((item, index) => (
          <Breadcrumbs.Item key={`${item.name}-${index}`}>
            {item.url ? (
              <RouterBreadcrumbsLink href={item.url}>
                {item.name as string}
              </RouterBreadcrumbsLink>
            ) : (
              item.name
            )}
          </Breadcrumbs.Item>
        ))}
      </Breadcrumbs.List>
    </Breadcrumbs>
  );
};
