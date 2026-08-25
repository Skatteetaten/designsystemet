import { JSX } from 'react';
import { isRouteErrorResponse, Outlet } from 'react-router';

import { Link } from '@skatteetaten/ds-buttons';
import { OpenClose } from '@skatteetaten/ds-collections';
import { Footer, TopBannerExternal } from '@skatteetaten/ds-layout';
import { ArrowForwardSVGpath } from '@skatteetaten/ds-icons';
import { Heading, Paragraph } from '@skatteetaten/ds-typography';

import type { Route } from './+types/docs-layout';
import { PageLayout } from '../components/page-layout';

import styles from './docs.module.scss';

export default function DocsLayout(): JSX.Element {
  return (
    <>
      <TopBannerExternal />
      <PageLayout>
        <Outlet />
      </PageLayout>
    </>
  );
}

export function ErrorBoundary({
  error,
}: Route.ErrorBoundaryProps): JSX.Element {
  const isNotFound = isRouteErrorResponse(error) && error.status === 404;
  const errorCode = isRouteErrorResponse(error) ? error.status : 'ukjent';

  return (
    <div className={styles.errorPage}>
      <TopBannerExternal />
      <main className={styles.notFound}>
        <section className={styles.notFoundArticle}>
          <Heading as={'h1'}>
            {isNotFound ? 'Siden finnes ikke' : 'Noe gikk galt'}
          </Heading>
          <Paragraph variant={'ingress'} hasSpacing>
            {isNotFound
              ? 'Beklager, denne siden kan være flyttet eller slettet, eller det er en feil i lenken.'
              : 'Beklager, det oppstod en feil. Prøv igjen senere.'}
          </Paragraph>
          <Link svgPath={ArrowForwardSVGpath} href={'/'}>
            {'Gå til forsiden'}
          </Link>
          <OpenClose title={'Teknisk feilmelding'} size={'small'}>
            <Paragraph>{`Feilkode: ${errorCode}`}</Paragraph>
          </OpenClose>
        </section>
      </main>
      <Footer />
    </div>
  );
}
