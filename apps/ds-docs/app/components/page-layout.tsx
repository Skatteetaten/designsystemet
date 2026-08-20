import { JSX, ReactNode } from 'react';

import { Heading } from '@skatteetaten/ds-typography';

import { useRootLoaderData } from '../root';
import { DocsBreadcrumbs } from './breadcrumbs';
import { Navigation } from './navigation';

import styles from './page-layout.module.scss';

export const PageLayout = ({
  children,
}: {
  children: ReactNode;
}): JSX.Element => {
  const { pageTree } = useRootLoaderData();

  return (
    <main className={styles.main}>
      <DocsBreadcrumbs pageTree={pageTree} />
      <Heading as={'h1'} className={styles.srOnly}>
        {'Dokumentasjon for komponenter'}
      </Heading>
      <div className={styles.pageLayout}>
        <aside className={styles.aside} aria-label={'Sidemeny'}>
          <Navigation pageTree={pageTree} />
        </aside>
        <section className={styles.section} aria-label={'Hovedinnhold'}>
          {children}
        </section>
      </div>
    </main>
  );
};
