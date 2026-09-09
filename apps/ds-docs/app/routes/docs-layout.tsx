import { JSX } from 'react';
import { isRouteErrorResponse, Outlet } from 'react-router';

import { OpenClose } from '@skatteetaten/ds-collections';
import { ArrowForwardSVGpath } from '@skatteetaten/ds-icons';
import { Footer } from '@skatteetaten/ds-layout';
import { Heading, Paragraph } from '@skatteetaten/ds-typography';

import { DocsTopBanner } from '../components/docs-top-banner';
import { PageLayout } from '../components/page-layout';
import { RouterDsLink } from '../components/router-link';
import type { Route } from './+types/docs-layout';

import styles from './docs.module.scss';

export default function DocsLayout(): JSX.Element {
  return (
    <>
      <DocsTopBanner />
      <PageLayout>
        <Outlet />
      </PageLayout>
      <Footer
        titleSecondColumn={'Trenger du hjelp?'}
        secondColumn={
          <>
            <Paragraph hasSpacing>
              {
                'Hvis du trenger hjelp eller råd er du velkommen til å ta kontakt. Vi kan hjelpe med konkrete problemstillinger og avklaringer.'
              }
            </Paragraph>
            <Paragraph>
              {
                'Ta kontakt med kommunikasjonsavdelingen i Skattedirektoratet hvis du lurer på noe.'
              }
            </Paragraph>
          </>
        }
        thirdColumn={
          <Paragraph>
            {
              'Målgruppen for disse sidene er Skatteetatens ansatte og våre samarbeidspartnere. Men vi vil gjerne at andre også kan se hvordan vi jobber. Bruk det, bli inspirert av det og gi tilbakemelding hvis du mener noe.'
            }
          </Paragraph>
        }
      />
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
      <DocsTopBanner />
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
          <RouterDsLink svgPath={ArrowForwardSVGpath} href={'/'}>
            {'Gå til forsiden'}
          </RouterDsLink>
          <OpenClose title={'Teknisk feilmelding'} size={'small'}>
            <Paragraph>{`Feilkode: ${errorCode}`}</Paragraph>
          </OpenClose>
        </section>
      </main>
      <Footer />
    </div>
  );
}
