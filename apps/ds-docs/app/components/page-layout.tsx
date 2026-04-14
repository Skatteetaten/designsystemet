import { JSX, ReactNode } from 'react';

import { useRootLoaderData } from '../root';
import { DocsBreadcrumbs } from './breadcrumbs';
import { Navigation } from './navigation';

import styles from './pagelayout.module.scss';

export const PageLayout = ({
  children,
}: {
  children: ReactNode;
}): JSX.Element => {
  const { pageTree } = useRootLoaderData();

  return (
    <div className={styles.pageWrapper}>
      <DocsBreadcrumbs pageTree={pageTree} />
      <div className={styles.wrapperInternalLayout}>
        <div className={styles.aside}>
          <Navigation />
        </div>
        <main className={styles.main}>{children}</main>
      </div>
    </div>
  );
};
