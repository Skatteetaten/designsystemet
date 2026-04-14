import { JSX } from 'react';

import { Accordion } from '@skatteetaten/ds-collections';

export default function GrunnleggendeAccordionExample(): JSX.Element {
  return (
    <Accordion>
      <Accordion.Item title={'Skattekort'}>
        {
          'Finn informasjon om skattekort, endringer og hva du bør kontrollere før lønn utbetales.'
        }
      </Accordion.Item>
      <Accordion.Item title={'Meldingar frå Skatteetaten'}>
        {
          'Her kan du se oversikt over nye meldinger og hva du eventuelt må følge opp videre.'
        }
      </Accordion.Item>
    </Accordion>
  );
}
