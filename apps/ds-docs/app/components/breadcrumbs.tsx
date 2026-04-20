import { JSX } from 'react';
import { useLocation } from 'react-router';

import { useBreadcrumb } from 'fumadocs-core/breadcrumb';
import type { Root } from 'fumadocs-core/page-tree';

import { Breadcrumbs } from '@skatteetaten/ds-navigation';

import styles from './breadcrumbs.module.scss';

interface DocsBreadcrumbsProps {
  pageTree: Root;
}

export const DocsBreadcrumbs = ({
  pageTree,
}: DocsBreadcrumbsProps): JSX.Element => {
  const { pathname } = useLocation();
  const breadcrumbItems = useBreadcrumb(pathname, pageTree, {
    includePage: true,
  });

  const items =
    pathname !== '/' && breadcrumbItems[0]?.url !== '/'
      ? [{ name: 'Designsystemet', url: '/' }, ...breadcrumbItems]
      : breadcrumbItems;

  return (
    <Breadcrumbs className={styles.breadcrumbs}>
      <Breadcrumbs.List>
        {items.map((item) => (
          <Breadcrumbs.Item key={item.url}>
            {item.url ? (
              <Breadcrumbs.Link href={item.url}>
                {item.name as string}
              </Breadcrumbs.Link>
            ) : (
              item.name
            )}
          </Breadcrumbs.Item>
        ))}
      </Breadcrumbs.List>
    </Breadcrumbs>
  );
};
