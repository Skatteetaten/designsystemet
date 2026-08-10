import { type ReactElement } from 'react';

import { OpenClose } from '@skatteetaten/ds-collections';
import { Heading, Paragraph } from '@skatteetaten/ds-typography';

export default function OpenCloseAsHelpTextExample(): ReactElement {
  return (
    <>
      <Heading as={'h1'} level={2}>
        {'Navn på oppgave eller tema'}
      </Heading>
      <Paragraph variant={'ingress'}>
        {
          'Hjelpetekst, som vi ønsker at brukeren skal lese før hen går videre, plasserer vi normalt synlig og rett etter overskriften.'
        }
      </Paragraph>
      <OpenClose title={'Hjelpetekst som folk kan velge å åpne'}>
        <Paragraph>
          {
            'Denne teksten kan brukere hente frem og lese hvis de har behov for det. Den kan også bli stående oppe som ekstra støtte for prosessen videre. Det er viktig at tittelen på OpenClose-komponenten tydelig kommuniserer hva slags informasjon man kan finne ved å åpne den.'
          }
        </Paragraph>
      </OpenClose>
    </>
  );
}
