import { JSX } from 'react';
import { Outlet } from 'react-router';

import { Footer, TopBannerExternal } from '@skatteetaten/ds-layout';
import { Paragraph } from '@skatteetaten/ds-typography';

import { PageLayout } from '../components/page-layout';

export default function DocsLayout(): JSX.Element {
  return (
    <>
      <TopBannerExternal />
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
